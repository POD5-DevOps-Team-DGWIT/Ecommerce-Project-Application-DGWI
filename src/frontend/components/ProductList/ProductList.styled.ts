// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 32px 16px;

  ${({ theme }) => theme.breakpoints.desktop} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 56px 32px;
  }
`;
