// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import styled, { css } from 'styled-components';

const Button = styled.button<{ $type?: 'primary' | 'secondary' | 'link' }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: ${({ theme }) => theme.colors.otelGray};
  color: ${({ theme }) => theme.colors.white};
  border: solid 1px ${({ theme }) => theme.colors.otelGray};
  padding: 0 28px;
  outline: none;
  font-weight: ${({ theme }) => theme.fonts.semiBold};
  font-size: 15px;
  letter-spacing: 0.02em;
  line-height: 1;
  border-radius: 999px;
  height: 52px;
  cursor: pointer;
  transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.otelBlue};
    border-color: ${({ theme }) => theme.colors.otelBlue};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.otelBlue};
    outline-offset: 3px;
  }

  ${({ $type = 'primary' }) =>
    $type === 'secondary' &&
    css`
      background: none;
      color: ${({ theme }) => theme.colors.otelGray};

      &:hover {
        background: ${({ theme }) => theme.colors.backgroundGray};
        border-color: ${({ theme }) => theme.colors.otelGray};
      }
    `};

  ${({ $type = 'primary' }) =>
    $type === 'link' &&
    css`
      background: none;
      color: ${({ theme }) => theme.colors.otelGray};
      border: none;

      &:hover {
        background: none;
        text-decoration: underline;
      }
    `};
`;

export default Button;
