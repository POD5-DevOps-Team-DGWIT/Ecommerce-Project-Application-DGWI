// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 0 20px;

  ${({ theme }) => theme.breakpoints.desktop} {
    padding: 0 48px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  margin-top: 40px;

  ${({ theme }) => theme.breakpoints.desktop} {
    margin-top: 72px;
  }
`;

export const HotProducts = styled.div`
  margin-bottom: 48px;

  ${({ theme }) => theme.breakpoints.desktop} {
    margin-bottom: 96px;
  }
`;

export const HotProductsTitle = styled.h2`
  position: relative;
  margin: 0 0 28px;
  padding-bottom: 14px;
  font-size: 26px;
  letter-spacing: -0.01em;
  font-weight: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.textGray};
  scroll-margin-top: 100px; /* keeps the title visible under the sticky header */

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 56px;
    height: 4px;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.otelYellow};
  }

  ${({ theme }) => theme.breakpoints.desktop} {
    margin-bottom: 36px;
    font-size: 34px;
  }
`;

export const Home = styled.div`
  @media (max-width: 992px) {
    ${Content} {
      width: 100%;
    }
  }
`;
