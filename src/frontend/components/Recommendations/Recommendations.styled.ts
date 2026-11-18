// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

export const Recommendations = styled.section`
  display: flex;
  margin: 56px 0 24px;
  align-items: center;
  flex-direction: column;
`;

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 24px;
  width: 100%;
  padding: 0 20px;

  ${({ theme }) => theme.breakpoints.desktop} {
    padding: 0;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  padding: 40px 0 28px;
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 24px;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.textGray};

  ${({ theme }) => theme.breakpoints.desktop} {
    font-size: 32px;
  }
`;
