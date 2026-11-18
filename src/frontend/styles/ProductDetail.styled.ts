// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';
import Button from '../components/Button';

export const ProductDetail = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 24px 0 40px;

  ${({ theme }) => theme.breakpoints.desktop} {
    padding: 64px 48px 40px;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 28px;
  align-items: start;

  ${({ theme }) => theme.breakpoints.desktop} {
    grid-template-columns: minmax(0, 5fr) minmax(0, 6fr);
    gap: 56px;
  }
`;

export const Image = styled.div<{ $src: string }>`
  height: 280px;
  margin: 0 20px;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.white};
  background-image: ${({ $src }) => `url("${$src}")`};
  background-repeat: no-repeat;
  background-position: center;
  background-origin: content-box;
  background-size: contain;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.card};

  ${({ theme }) => theme.breakpoints.desktop} {
    height: 520px;
    margin: 0;
    padding: 32px;
  }
`;

export const Details = styled.div<{ $fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 20px;
  ${({ $fullWidth }) => $fullWidth && 'grid-column: 1 / -1;'}

  ${({ theme }) => theme.breakpoints.desktop} {
    padding: 0;
  }
`;

export const AddToCart = styled(Button)`
  width: 100%;
  margin-top: 8px;
  font-size: ${({ theme }) => theme.sizes.dSmall};

  ${({ theme }) => theme.breakpoints.desktop} {
    width: 240px;
    min-height: 56px;
  }
`;

export const Name = styled.h5`
  margin: 0;
  font-size: 26px;
  line-height: 1.2;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.textGray};

  ${({ theme }) => theme.breakpoints.desktop} {
    font-size: 38px;
  }
`;

export const Text = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.textLightGray};
`;

export const Description = styled.p`
  margin: 0;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textLightGray};
  font-weight: ${({ theme }) => theme.fonts.regular};

  ${({ theme }) => theme.breakpoints.desktop} {
    font-size: ${({ theme }) => theme.sizes.dMedium};
  }
`;

export const ProductPrice = styled.p`
  margin: 0;
  font-size: 28px;
  font-weight: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.otelBlue};

  ${({ theme }) => theme.breakpoints.desktop} {
    font-size: 34px;
  }
`;
