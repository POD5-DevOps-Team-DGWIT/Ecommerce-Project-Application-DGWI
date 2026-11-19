// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

// Everything a team member might want to rename or reword lives in this file.
// Change the text, save, rebuild. No other file needs to be touched.

export interface BenefitItem {
  title: string;
  text: string;
}

export interface FooterLinkItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterColumn {
  title: string;
  links: FooterLinkItem[];
}

const benefits: BenefitItem[] = [
  {
    title: 'Secure checkout',
    text: 'Every order goes through our protected payment service.',
  },
  {
    title: 'Live shipping quotes',
    text: 'See the delivery cost before you pay, not after.',
  },
  {
    title: 'Traced end to end',
    text: 'Every click is followed from your browser to the database.',
  },
];

const footerLinks: FooterColumn[] = [
  {
    title: 'Shop',
    links: [
      { label: 'All products', href: '/#hot-products' },
      { label: 'Your cart', href: '/cart' },
    ],
  },
  {
    title: 'Project',
    links: [
      {
        label: 'OpenTelemetry Demo',
        href: 'https://github.com/open-telemetry/opentelemetry-demo',
        external: true,
      },
    ],
  },
];

const Brand = {
  name: 'POD5 Store',
  tagline: 'Well made things, delivered with care.',
  hero: {
    eyebrow: 'New collection',
    title: 'Crafted to be noticed. Built to last.',
    text: 'A small range of carefully chosen products, with live shipping quotes and a checkout you can trust.',
    scroll: 'Scroll to discover',
    cta: 'Shop now',
  },
  benefits,
  products: {
    eyebrow: 'The collection',
    title: 'Hot Products',
  },
  story: {
    eyebrow: 'Behind the shop',
    title: 'Every page is a team of services working together.',
    text: 'This store is a training environment for cloud security and DevOps. Behind each page sit more than twenty services, all observed with OpenTelemetry.',
    cta: 'View your cart',
    href: '/cart',
  },
  footerNote: 'This website is a training environment workshop.',
  footerLinks,
};

export default Brand;
