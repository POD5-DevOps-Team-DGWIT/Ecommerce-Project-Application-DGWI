// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

export const Block = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 12px;
  border-radius: 999px;
  background: rgba(200, 144, 46, 0.2);
  border: 1px solid rgba(200, 144, 46, 0.55);
  text-transform: uppercase;
  letter-spacing: 0.08em;

  /* && beats the footer's "* { color }" rule */
  && {
    color: #f1c777;
    font-size: 12px;
    font-weight: ${({ theme }) => theme.fonts.semiBold};
  }
`;
