// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import styled, { css } from 'styled-components';

const Button = styled.button<{ $type?: 'primary' | 'secondary' | 'link' }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0 28px;
  min-height: 52px;
  background-color: ${({ theme }) => theme.colors.otelBlue};
  color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.otelBlue};
  border-radius: ${({ theme }) => theme.radii.md};
  font-family: inherit;
  font-weight: ${({ theme }) => theme.fonts.semiBold};
  font-size: 16px;
  line-height: 1;
  cursor: pointer;
  transition: background-color 0.15s ease, border-color 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.blueDark};
    border-color: ${({ theme }) => theme.colors.blueDark};
    transform: translateY(-1px);
    box-shadow: 0 8px 18px rgba(31, 111, 209, 0.28);
  }

  &:active:not(:disabled) {
    transform: none;
    box-shadow: none;
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }

  ${({ $type = 'primary' }) =>
    $type === 'secondary' &&
    css`
      background: transparent;
      color: ${({ theme }) => theme.colors.otelBlue};

      &:hover:not(:disabled) {
        background: ${({ theme }) => theme.colors.backgroundGray};
        border-color: ${({ theme }) => theme.colors.otelBlue};
        box-shadow: none;
      }
    `};

  ${({ $type = 'primary' }) =>
    $type === 'link' &&
    css`
      background: none;
      color: ${({ theme }) => theme.colors.otelBlue};
      border: none;
      padding: 0 8px;

      &:hover:not(:disabled) {
        background: none;
        color: ${({ theme }) => theme.colors.blueDark};
        box-shadow: none;
        transform: none;
        text-decoration: underline;
      }
    `};
`;

export default Button;