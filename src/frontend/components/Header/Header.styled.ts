// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import Link from 'next/link';
import styled from 'styled-components';

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const NavBar = styled.nav`
  height: 72px;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.nav};
  padding: 0;

  ${({ theme }) => theme.breakpoints.desktop} {
    height: 88px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  height: 100%;
  margin: 0 auto;
  padding: 0 20px;

  ${({ theme }) => theme.breakpoints.desktop} {
    padding: 0 48px;
  }
`;

export const NavBarBrand = styled(Link)`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  padding: 0;
`;

export const BrandImg = styled.img.attrs({
  src: '/images/digitalwitch-logo.svg',
  alt: 'DigitalWitch',
})`
  width: 180px;
  height: auto;

  ${({ theme }) => theme.breakpoints.desktop} {
    width: 240px;
  }
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;