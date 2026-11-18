// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';
import Button from '../components/Button';

export const Cart = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 24px 20px 40px;

  ${({ theme }) => theme.breakpoints.desktop} {
    padding: 56px 48px 64px;
  }
`;

/* Phones/tablets: items on top, form below. Wide screens (1024px+): items left, form card right. */
export const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 32px;
  align-items: start;

  @media (min-width: 1024px) {
    grid-template-columns: minmax(0, 1fr) 420px;
    gap: 48px;
  }
`;

export const CarTitle = styled.h1`
  margin: 0;
  font-size: 28px;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.textGray};

  ${({ theme }) => theme.breakpoints.desktop} {
    font-size: 36px;
  }
`;

export const Header = styled.div`
  margin-bottom: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

export const Title = styled.h1`
  text-align: center;
  margin: 0;
  font-size: 24px;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.textGray};

  ${({ theme }) => theme.breakpoints.desktop} {
    font-size: 32px;
  }
`;

export const Subtitle = styled.h3`
  text-align: center;
  margin: 0;
  font-size: ${({ theme }) => theme.sizes.mMedium};
  font-weight: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.textLightGray};

  ${({ theme }) => theme.breakpoints.desktop} {
    font-size: ${({ theme }) => theme.sizes.dMedium};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
`;

export const EmptyCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  max-width: 560px;
  margin: 24px auto 64px;
  padding: 48px 24px;
  text-align: center;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
`;

export const EmptyCartButton = styled(Button)`
  min-height: 0;
  padding: 0;
  color: ${({ theme }) => theme.colors.otelRed};

  &:hover:not(:disabled) {
    color: ${({ theme }) => theme.colors.otelRed};
  }
`;
