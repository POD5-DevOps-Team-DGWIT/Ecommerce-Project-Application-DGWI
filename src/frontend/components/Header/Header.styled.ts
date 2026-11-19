// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import Link from 'next/link';
import styled from 'styled-components';

// Note: no backdrop-filter, transform or filter on the header. Any of them would
// make the mobile cart panel (position: fixed) stick inside the header instead
// of covering the screen.
export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightBorderGray};
`;

export const NavBar = styled.nav`
  height: 68px;
  padding: 0;

  ${({ theme }) => theme.breakpoints.desktop} {
    height: 84px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1376px;
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
  padding: 0;
  text-decoration: none;
`;

export const BrandName = styled.span`
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fonts.bold};
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textGray};

  ${({ theme }) => theme.breakpoints.desktop} {
    font-size: 16px;
  }
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
`;
