// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

export const Footer = styled.footer`
  position: relative;
  padding: 48px 20px 72px;
  background-color: ${({ theme }) => theme.colors.otelGray};
  border-top: 4px solid ${({ theme }) => theme.colors.otelYellow};

  ${({ theme }) => theme.breakpoints.desktop} {
    padding: 56px max(48px, calc((100% - ${({ theme }) => theme.layout.maxWidth}) / 2 + 48px)) 72px;
  }

  * {
    color: rgba(255, 255, 255, 0.82);
    font-size: 14px;
    font-weight: ${({ theme }) => theme.fonts.regular};
    line-height: 1.7;
  }

  p {
    margin: 0 0 6px;
  }

  a {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  a:hover {
    color: #f1c777;
  }
`;
