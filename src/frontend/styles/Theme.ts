// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import { DefaultTheme } from 'styled-components';

// Same keys as before (see style.d.ts), only the values changed.
const Theme: DefaultTheme = {
  colors: {
    otelBlue: '#1F6FD1', // brand blue: hover and focus accents
    otelYellow: '#C8902E', // brand gold: accents
    otelGray: '#0B1F3A', // deep navy: buttons, footer
    otelRed: '#FB7181',
    backgroundGray: '#F6F5F2', // soft warm surface
    lightBorderGray: '#E3E1DB', // hairlines
    borderGray: '#C9C6BE', // form borders
    textGray: '#14161A', // main text
    textLightGray: '#6B6F76', // secondary text
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
    bold: '700',
    regular: '400',
    semiBold: '600',
    light: '300',
  },
};

export default Theme;
