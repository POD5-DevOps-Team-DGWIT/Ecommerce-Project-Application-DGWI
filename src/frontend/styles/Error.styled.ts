// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  gap: 16px;
  padding: 48px 20px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.surface} 0%,
    ${({ theme }) => theme.colors.backgroundGray} 100%
  );
`;

export const Code = styled.h1`
  margin: 0;
  font-size: clamp(72px, 18vw, 140px);
  line-height: 1;
  letter-spacing: -0.04em;
  font-weight: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.otelBlue};
`;

export const Message = styled.p`
  margin: 0;
  max-width: 520px;
  font-size: ${({ theme }) => theme.sizes.mLarge};
  color: ${({ theme }) => theme.colors.textGray};
`;

export const HomeLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 12px;
  min-height: 52px;
  padding: 0 28px;
  background-color: ${({ theme }) => theme.colors.otelBlue};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fonts.semiBold};
  font-size: ${({ theme }) => theme.sizes.dSmall};
  border-radius: ${({ theme }) => theme.radii.md};
  text-decoration: none;
  transition: background-color 0.15s ease, transform 0.15s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blueDark};
    transform: translateY(-1px);
  }
`;
