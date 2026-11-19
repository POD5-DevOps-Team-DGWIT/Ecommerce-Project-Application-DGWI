// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import Link from 'next/link';
import styled from 'styled-components';
import Button from '../components/Button';

export const ProductDetail = styled.div`
  padding: 20px 0 56px;

  ${({ theme }) => theme.breakpoints.desktop} {
    padding: 36px 0 96px;
  }
`;

export const Crumbs = styled.div`
  width: 100%;
  max-width: 1376px;
  margin: 0 auto 20px;
  padding: 0 20px;

  ${({ theme }) => theme.breakpoints.desktop} {
    margin-bottom: 28px;
    padding: 0 48px;
  }
`;

export const BackLink = styled(Link)`
  font-size: 13px;
  letter-spacing: 0.04em;
  font-weight: ${({ theme }) => theme.fonts.semiBold};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textLightGray};

  &:hover {
    color: ${({ theme }) => theme.colors.textGray};
    text-decoration: underline;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 28px;
  width: 100%;
  max-width: 1376px;
  margin: 0 auto;
  padding: 0 20px;

  ${({ theme }) => theme.breakpoints.desktop} {
    grid-template-columns: 1.15fr 0.85fr;
    gap: 72px;
    padding: 0 48px;
    align-items: start;
  }
`;

export const Image = styled.div<{ $src: string }>`
  width: 100%;
  aspect-ratio: 1 / 1;
  max-height: 680px;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.backgroundGray};
  background-image: ${({ $src }) => ($src ? `url("${$src}")` : 'none')};
  background-repeat: no-repeat;
  background-position: center;
  background-origin: content-box;
  background-size: contain;

  ${({ theme }) => theme.breakpoints.desktop} {
    padding: 48px;
  }
`;

export const Details = styled.div<{ $fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  ${({ $fullWidth }) => $fullWidth && 'grid-column: 1 / -1;'}
`;

export const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Chip = styled.span`
  padding: 6px 12px;
  border: 1px solid ${({ theme }) => theme.colors.lightBorderGray};
  border-radius: 999px;
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.textLightGray};
`;

export const Name = styled.h1`
  margin: 0;
  font-size: 30px;
  line-height: 1.1;
  letter-spacing: -0.02em;
  font-weight: ${({ theme }) => theme.fonts.light};
  color: ${({ theme }) => theme.colors.textGray};

  ${({ theme }) => theme.breakpoints.desktop} {
    font-size: 44px;
  }
`;

export const Text = styled.p`
  margin: 0;
  font-size: 13px;
  letter-spacing: 0.04em;
  font-weight: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.textGray};
`;

export const Description = styled.p`
  margin: 0;
  font-size: 15px;
  line-height: 1.7;
  font-weight: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.textLightGray};

  ${({ theme }) => theme.breakpoints.desktop} {
    font-size: 16px;
  }
`;

export const ProductPrice = styled.p`
  margin: 0;
  font-size: 26px;
  font-weight: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.textGray};

  span {
    font-size: inherit;
    font-weight: inherit;
  }

  ${({ theme }) => theme.breakpoints.desktop} {
    font-size: 32px;
  }
`;

export const Buy = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 16px;
  padding: 24px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.lightBorderGray};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightBorderGray};
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const AddToCart = styled(Button)`
  flex: 1 1 200px;
  min-width: 200px;
`;

export const Perks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Perk = styled.div`
  position: relative;
  padding-left: 22px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 7px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.otelYellow};
  }
`;

export const PerkTitle = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.textGray};
`;

export const PerkText = styled.p`
  margin: 2px 0 0;
  font-size: 13px;
  line-height: 1.5;
  font-weight: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.textLightGray};
`;

// Keeps the "You may also like" row lined up with the rest of the page.
// (That row already has 20px of its own side padding.)
export const Wide = styled.div`
  width: 100%;
  max-width: 1376px;
  margin: 0 auto;

  ${({ theme }) => theme.breakpoints.desktop} {
    padding: 0 28px;
  }
`;
