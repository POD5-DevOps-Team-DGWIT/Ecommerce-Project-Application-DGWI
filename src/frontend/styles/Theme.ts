// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import { DefaultTheme } from 'styled-components';

const Theme: DefaultTheme = {
  colors: {
    // DigitalWitch brand (key names kept from the upstream demo)
    otelBlue: '#1F6FD1', // brand blue: buttons, links
    blueDark: '#1859A8', // hover state for blue things

    otelYellow: '#C8902E', // brand gold: accents, borders, icons
    goldText: '#8A5D0E', // darker gold: use this when gold is TEXT on white (readable)
    goldSoft: '#FFF6E3', // very light gold: badges, ad strip
    otelGray: '#0B1F3A', // deep navy
    otelRed: '#E5484D',
    backgroundGray: 'rgba(31, 111, 209, 0.08)',
    surface: '#F5F8FC', // page sections / cards background
    lightBorderGray: 'rgba(31, 111, 209, 0.3)',
    border: '#DCE5F1', // soft default border
    borderGray: '#0B1F3A',
    textGray: '#0B1F3A',
    textLightGray: '#5B6B82',
    white: '#FFFFFF',
  },
  breakpoints: {
    desktop: '@media (min-width: 768px)',
  },
  sizes: {
    mxLarge: '22px',
    mLarge: '20px',
    mMedium: '14px',
    mSmall: '12px',
    dxLarge: '58px',
    dLarge: '40px',
    dMedium: '18px',
    dSmall: '16px',
    nano: '8px',
  },
  fonts: {
    bold: '800',
    regular: '500',
    semiBold: '700',
    light: '400',
  },
  radii: {
    sm: '8px',
    md: '12px',
    lg: '16px',
  },
  shadows: {
    card: '0 1px 2px rgba(11, 31, 58, 0.06)',
    cardHover: '0 14px 30px rgba(11, 31, 58, 0.12)',
    nav: '0 1px 0 rgba(11, 31, 58, 0.04), 0 6px 16px rgba(11, 31, 58, 0.05)',
  },
  layout: {
    maxWidth: '1280px',
  },
};

export default Theme;
