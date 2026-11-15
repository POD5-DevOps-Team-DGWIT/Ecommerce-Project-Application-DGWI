## Astronomy Shop: E-commerce Microservices on AWS EKS

An online telescope shop made of **24 microservices** in 10+ languages. This
repo holds the **application code**. Every push builds Docker images, pushes
them to **Amazon ECR**, and updates the **[k8s-file](https://github.com/digitalwitchdemo/k8s-file)**
repo, which **Argo CD** deploys to the EKS cluster automatically.

```
 you push code ──► GitHub Actions ──► Amazon ECR ──► k8s-file repo ──► Argo CD ──► EKS
 (this repo)       builds 24 images   stores images   new image tag    syncs        running shop
```

## Application repo

**Step 1.** Make a second AWS IAM Role “badge” (role) just for this repo.

You already have one role for Terraform. This repo needs its own, so it can only store images and can’t change your infrastructure. If it ever leaks, the damage is small.

1b. Add permissions: attach ecr-public:GetAuthorizationToken

**Step 2.** Tell GitHub about the role. In the app repo: Settings → Secrets and variables → Actions:

Secret AWS_ROLE_ARN = the ARN from Step 1
Variable AWS_REGION = your region (the same one as everything else)

## 1. What's in this repo

| Path | What it is |
|---|---|
| `src/<service>/` | One folder per microservice, each with its own `Dockerfile` |
| `src/shared/` | Code shared by the AI services (`agent`, `mcp`) |
| `src/flagd/` | Default feature flags (copied into the `flagd-ui` image) |
| `src/react-native-app/` | Mobile app (Android/iOS), **not** a container |
| `pb/demo.proto` | gRPC API definitions shared by the services |
| `telemetry-schema/` | Telemetry definitions used by `telemetry-docs` |
| `.env` | Version pins used during the image builds |
| `.github/workflows/ecr-build-push.yml` | The CI pipeline |

## 2. The services

| Group | Services |
|---|---|
| Entry | `frontend-proxy` (Envoy), `frontend` (Next.js) |
| Browsing | `product-catalog`, `recommendation`, `ad`, `image-provider` |
| Checkout | `checkout`, `cart`, `shipping`, `quote`, `currency`, `payment`, `email` |
| Orders (Kafka) | `kafka`, `accounting`, `fraud-detection` |
| AI assistant | `chatbot`, `agent`, `mcp` |
| Platform | `flagd-ui`, `load-generator`, `opamp-server`, `opensearch`, `telemetry-docs` |

Databases (PostgreSQL, Valkey) and monitoring (Jaeger, Prometheus, Grafana)
use public images, so they're only configured in `k8s-file`.

## 3. What to change to make the pipeline works

<img width="4708" height="1142" alt="image" src="https://github.com/user-attachments/assets/93381af3-6c1f-4c23-ae94-26c7fc6e4e32" />

The workflow runs on every push to `main` that changes `src/`, `pb/` or `.env`.

| Job | What it does |
|---|---|
| **build-and-push** | Builds all 24 images **in parallel** and pushes each to ECR as `ecomerce/<service>`, tagged with the **run number** (the `#N` shown in Actions, e.g. `8`) and `latest` |
| **update-k8s-manifests** | Runs only if **all** images built. Writes the new tag into `k8s-file/kustomization.yaml` and pushes it |

Argo CD watches `k8s-file` and rolls out the new images within ~3 minutes.
No manual deploy step.

## 4. One-time setup

In this repo: **Settings → Secrets and variables → Actions**

| Type | Name | Value |
|---|---|---|
| Secret | `AWS_ROLE_ARN` | IAM role GitHub assumes through OIDC (needs ECR push + `ecr-public:GetAuthorizationToken`) |
| Secret | `K8S_REPO_TOKEN` | GitHub fine-grained token, **Contents: Read and write** on `k8s-file` only |
| Variable | `AWS_REGION` | Region of your ECR and EKS cluster, e.g. `eu-west-2` |

> The images' region must match the region in `k8s-file/kustomization.yaml`,
> otherwise pods fail with `ImagePullBackOff`.

## 5. Make a change and deploy it

```bash
# 1. Get the code
git clone https://github.com/digitalwitchdemo/ecommerce-final-project.git
cd ecommerce-final-project

# 2. Change something, e.g. a page in src/frontend/
# 3. Commit and push
git add .
git commit -m "Change the home page title"
git push origin main
```

Then follow it:

| Step | Where to look |
|---|---|
| Images building | GitHub → **Actions** → *Build and Push Images to ECR* |
| Images in ECR | AWS Console → **ECR** → `ecomerce/<service>`; the newest tag = the run number (`#N`) |
| Tag updated | `k8s-file` repo → new commit **"Deploy images from build #N"** |
| Deployed | Argo CD UI → app **astronomy-shop** = `Synced` / `Healthy` |
| Live | https://shop.pod5ecomm.store |


**Rebuild without a code change:** Actions → *Build and Push Images to ECR* → **Run workflow**.

## 6. Common build errors

| Error | Cause | Fix |
|---|---|---|
| `429 Too Many Requests` | Registry rate limit on base images | Re-run the failed job |
| `Hash Sum mismatch` (apt) | Ubuntu mirror was syncing | Re-run the failed job |
| `NU1903 … vulnerability` | A .NET package has a security advisory | Upgrade the package in `src/<service>/Directory.Packages.props` |
| `update-k8s-manifests` skipped | At least one image failed | Fix that image; the deploy only runs when all 24 succeed |
| Push to `k8s-file` denied | `K8S_REPO_TOKEN` expired or missing | Create a new token and update the secret |

## 7. Mobile app

`src/react-native-app/` is an Android/iOS app, not deployed to Kubernetes.
Build the Android `.apk` with Docker:

```bash
cd src/react-native-app

docker build -f android.Dockerfile --platform=linux/amd64 --output=. .
```

## Troubleshooting
These images needed troubleshooting before we could get running.

<img width="399.25" height="224.75" alt="image" src="https://github.com/user-attachments/assets/9dff0242-415b-4e38-9e92-621dc14ce16c" />

Out of the 24 images:

1. currency	src/currency/proto/	line 50: /src/currency/proto
2. flagd-ui	src/flagd-ui/rel/ (it holds a bin folder)	line 24: bin/
3. flagd-ui	src/flagd-ui/assets/vendor/	line 36: vendor/

WE RAN THIS ON OUR VSCODE

```
ls src/currency/proto/grpc/health/v1
ls src/flagd-ui/rel/overlays/bin
ls src/flagd-ui/assets/vendor

git add -f src/currency/proto src/flagd-ui/rel src/flagd-ui/assets/vendor

git status --short

git commit -m "Add folders needed by currency and flagd-ui builds"

git push origin main

```

So it doesn’t happen again
We added these exceptions in .gitignore, below the lines they override:

!/src/currency/proto/

!/src/flagd-ui/rel/overlays/bin/

!/src/flagd-ui/assets/vendor/

Make sure each ! line comes after the matching ignore line (24, 36 and 50), because Git reads the file top to bottom and the last matching rule wins. It’s optional, since Step 2 already fixes the current problem.


### After The Troubleshooting 
**The remaining 2 images Currency & Flagd-ui finally built**

<img width="399.25" height="224.75" alt="image" src="https://github.com/user-attachments/assets/0615729e-50b7-4fd3-941c-a973b8f09152" />


## License

Based on the [OpenTelemetry Demo](https://github.com/open-telemetry/opentelemetry-demo),
licensed under the Apache License 2.0 (see [LICENSE](LICENSE)).
