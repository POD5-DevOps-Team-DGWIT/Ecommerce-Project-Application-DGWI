// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';
import Button from '../Button';

export const CheckoutForm = styled.form`
  padding: 24px 20px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.card};

  ${({ theme }) => theme.breakpoints.desktop} {
    padding: 32px;
  }

  @media (min-width: 1024px) {
    position: sticky;
    top: 108px; /* sits below the sticky header */
  }
`;

export const StateRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

export const Title = styled.h2`
  margin: 0 0 20px;
  font-size: 22px;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.textGray};
`;

export const CardRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;

  > :first-child {
    grid-column: 1 / -1; /* phones: Month on its own row so Year/CVV have room */
  }

  @media (min-width: 480px) {
    grid-template-columns: 1.4fr 1fr 1fr;

    > :first-child {
      grid-column: auto;
    }
  }
`;

export const SubmitContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: stretch;
  gap: 12px;
  margin-top: 8px;

  a {
    display: block;
  }
`;

export const CartButton = styled(Button)`
  width: 100%;
`;

export const EmptyCartButton = styled(Button)`
  width: 100%;
  color: ${({ theme }) => theme.colors.otelRed};
`;
