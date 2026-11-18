// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';
import RouterLink from 'next/link';

export const Ad = styled.section`
  position: relative;
  margin-top: 40px;
  padding: 28px 20px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.goldSoft};
  border-top: 1px solid ${({ theme }) => theme.colors.otelYellow};

  p {
    margin: 0;
    font-size: ${({ theme }) => theme.sizes.dMedium};
    font-weight: ${({ theme }) => theme.fonts.semiBold};
    color: ${({ theme }) => theme.colors.textGray};
  }
`;

export const Link = styled(RouterLink)`
  display: inline-block;
  text-decoration: none;

  &:hover p {
    color: ${({ theme }) => theme.colors.goldText};
    text-decoration: underline;
    text-underline-offset: 4px;
  }
`;
