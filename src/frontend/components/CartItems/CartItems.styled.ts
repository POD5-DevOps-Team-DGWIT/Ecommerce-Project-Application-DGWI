// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

export const CartItems = styled.section`
  display: flex;
  flex-direction: column;
`;

export const CardItemsHeader = styled.div`
  display: none; /* phones: each row explains itself */
  padding-bottom: 12px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};

  ${({ theme }) => theme.breakpoints.desktop} {
    display: grid;
    grid-template-columns: 1fr 120px 110px 110px;
    gap: 24px;
  }

  > label {
    font-size: 12px;
    font-weight: ${({ theme }) => theme.fonts.semiBold};
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.textLightGray};
  }

  > label:nth-child(2) {
    text-align: center;
  }

  > label:nth-child(n+3) {
    text-align: right;
  }
`;

export const CartItemImage = styled.img`
  width: 80px;
  height: 80px;
  padding: 8px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  object-fit: contain;
  flex-shrink: 0;

  ${({ theme }) => theme.breakpoints.desktop} {
    width: 104px;
    height: 104px;
  }
`;

/* Phones: image+name on top, quantity and total underneath (unit price hidden).
   Desktop: 4 columns - product | quantity | price | total. */
export const CartItem = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-areas:
    'name name'
    'qty total';
  gap: 16px;
  padding: 20px 0;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  > :nth-child(1) { grid-area: name; }
  > :nth-child(2) { grid-area: qty; display: flex; justify-content: flex-start; }
  > :nth-child(3) { display: none; }
  > :nth-child(4) { grid-area: total; align-items: flex-end; }

  ${({ theme }) => theme.breakpoints.desktop} {
    grid-template-columns: 1fr 120px 110px 110px;
    grid-template-areas: none;
    gap: 24px;
    padding: 24px 0;

    > :nth-child(1),
    > :nth-child(2),
    > :nth-child(3),
    > :nth-child(4) { grid-area: auto; }
    > :nth-child(2) { justify-content: center; }
    > :nth-child(3) { display: flex; }
    > :nth-child(n+3) { align-items: flex-end; }
  }

  p {
    margin: 0;
    font-weight: ${({ theme }) => theme.fonts.semiBold};
  }
`;

export const CartItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;

  ${({ theme }) => theme.breakpoints.desktop} {
    gap: 20px;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

export const DataRow = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 16px 0 0;
  gap: 24px;
  color: ${({ theme }) => theme.colors.textLightGray};
`;

export const TotalText = styled.h3`
  margin: 0;
  font-size: 22px;
  color: ${({ theme }) => theme.colors.textGray};

  * {
    color: ${({ theme }) => theme.colors.otelBlue};
  }
`;
