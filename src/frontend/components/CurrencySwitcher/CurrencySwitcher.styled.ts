// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

export const CurrencySwitcher = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const SelectedConcurrency = styled.span`
  position: absolute;
  left: 12px;
  width: 26px;
  overflow: hidden;
  white-space: nowrap;
  text-align: center;
  pointer-events: none;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.otelBlue};
`;

export const Arrow = styled.img.attrs({
  src: '/icons/Chevron.svg',
  alt: '',
})`
  position: absolute;
  right: 12px;
  width: 11px;
  height: 7px;
  pointer-events: none;
`;

export const Select = styled.select`
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
  flex-shrink: 0;
  width: 112px;
  height: 44px;
  padding: 0 30px 0 42px;
  background: ${({ theme }) => theme.colors.white};
  font-size: 15px;
  font-weight: ${({ theme }) => theme.fonts.semiBold};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  transition: border-color 0.15s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.otelBlue};
  }
`;
