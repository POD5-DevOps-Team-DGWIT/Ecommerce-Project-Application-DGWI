// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';
import RouterLink from 'next/link';

export const Link = styled(RouterLink)`
  display: block;
  height: 100%;
  text-decoration: none;
  color: inherit;
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.card};
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.colors.lightBorderGray};
    box-shadow: ${({ theme }) => theme.shadows.cardHover};
  }
`;

export const Image = styled.div<{ $src: string }>`
  width: 100%;
  height: 200px;
  padding: 16px; /* breathing room around the product photo */
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.white};
  background-image: ${({ $src }) => ($src ? `url("${$src}")` : 'none')};
  background-repeat: no-repeat;
  background-position: center;
  background-origin: content-box;
  background-size: contain;

  ${({ theme }) => theme.breakpoints.desktop} {
    height: 240px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 8px;
  padding: 16px 20px 20px;
`;

export const ProductName = styled.p`
  margin: 0;
  min-height: calc(1.35em * 2); /* 2 lines, so prices line up across cards */
  font-size: ${({ theme }) => theme.sizes.dSmall};
  font-weight: ${({ theme }) => theme.fonts.semiBold};
  line-height: 1.35;
  color: ${({ theme }) => theme.colors.textGray};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const ProductPrice = styled.p`
  margin: auto 0 0;
  font-size: ${({ theme }) => theme.sizes.dMedium};
  font-weight: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.otelBlue};
`;
