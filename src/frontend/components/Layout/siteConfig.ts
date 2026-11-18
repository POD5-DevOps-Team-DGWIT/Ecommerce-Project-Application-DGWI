// Pod details shown on the site. Leave a value empty ('' or []) and that
// part of the UI simply doesn't render, so nothing looks half-finished.
// (Lives in components/ because the frontend Dockerfile only copies
//  certain folders - a file in utils/ would break the CI build.)

export interface IPodMember {
  name: string; // e.g. 'Linus Okolo'
  role: string; // e.g. 'DevOps Engineer'
  link?: string; // optional: LinkedIn / GitHub URL
}

export const siteConfig = {
  podName: 'Pod 5', // e.g. 'Pod 5'  -> badge above the hero title + footer credit
  projectDescription: 'We customized this shop as 24 microservices on AWS EKS.', // 1-2 sentences about what Pod 5 built
    members: [
    { name: 'Linus Okolo', role: 'DevOps Engineer - IaC & Dev Team', link: 'https://github.com/LinusNnam' },
    { name: 'Pod 5 member Name', role: 'DevOps Engineer' },
  ],
};