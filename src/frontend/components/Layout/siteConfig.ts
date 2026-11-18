// Pod details shown on the site. Leave a value empty ('') and that
// part of the UI simply doesn't render, so nothing looks half-finished.
// (Lives in components/ because the frontend Dockerfile only copies
//  certain folders - a file in utils/ would break the CI build.)

export const siteConfig = {
  podName: 'Pod 5', // e.g. 'Pod 5'  -> badge above the hero title + footer credit
};