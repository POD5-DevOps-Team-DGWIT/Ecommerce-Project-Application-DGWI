// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';
import RouterLink from 'next/link';

export const Link = styled(RouterLink)`
  display: block;
  text-decoration: none;
`;

// The picture sits on a soft panel. background-origin + padding keep the image
// away from the edges, background-size: contain keeps its proportions.
export const Image = styled.div<{ $src: string }>`
  width: 100%;
  aspect-ratio: 1 / 1;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.backgroundGray};
  background-image: ${({ $src }) => ($src ? `url("${$src}")` : 'none')};
  background-repeat: no-repeat;
  background-position: center;
  background-origin: content-box;
  background-size: contain;
  transition: background-color 0.2s ease;

  ${({ theme }) => theme.breakpoints.desktop} {
    padding: 32px;
  }
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  cursor: pointer;

  &:hover ${Image} {
    background-color: ${({ theme }) => theme.colors.lightBorderGray};
  }
`;

export const ProductName = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.sizes.mMedium};
  line-height: 1.4;
  font-weight: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.textGray};

  ${({ theme }) => theme.breakpoints.desktop} {
    font-size: ${({ theme }) => theme.sizes.dSmall};
  }
`;

export const ProductPrice = styled.p`
  margin: 4px 0 0;
  font-size: ${({ theme }) => theme.sizes.mMedium};
  font-weight: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.textLightGray};

  span {
    font-weight: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.textLightGray};
  }

  ${({ theme }) => theme.breakpoints.desktop} {
    font-size: ${({ theme }) => theme.sizes.dSmall};
  }
`;
