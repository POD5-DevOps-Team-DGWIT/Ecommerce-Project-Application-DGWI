// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

const field = `
  display: block;
  width: 100%;
  height: 52px;
  padding: 0 16px;
  font-size: 16px;
`;

export const Input = styled.input`
  ${field}
  font-weight: ${({ theme }) => theme.fonts.regular};
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  outline: none;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.lightBorderGray};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.otelBlue};
    box-shadow: 0 0 0 3px rgba(31, 111, 209, 0.18);
  }
`;

export const InputLabel = styled.p`
  margin: 0 0 8px;
  font-size: 14px;
  line-height: 20px;
  font-weight: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.textGray};
`;

export const Select = styled.select`
  ${field}
  padding-right: 40px;
  font-weight: ${({ theme }) => theme.fonts.regular};
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  outline: none;
  cursor: pointer;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.lightBorderGray};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.otelBlue};
    box-shadow: 0 0 0 3px rgba(31, 111, 209, 0.18);
  }
`;

export const InputRow = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

/* top = label (28px) + half of (52px field - 7px arrow) */
export const Arrow = styled.img.attrs({
  src: '/icons/Chevron.svg',
  alt: '',
})`
  position: absolute;
  right: 16px;
  top: 50px;
  width: 12px;
  height: 7px;
  pointer-events: none;
`;
