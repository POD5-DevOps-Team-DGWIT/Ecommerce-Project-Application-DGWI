// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import Link from 'next/link';
import styled from 'styled-components';

// position: relative is needed: the platform label (PlatformFlag) sits in the
// bottom right corner of the footer. The extra bottom padding keeps text clear of it.
export const Footer = styled.footer`
  position: relative;
  padding: 56px 20px 72px;
  background-color: ${({ theme }) => theme.colors.otelGray};

  ${({ theme }) => theme.breakpoints.desktop} {
    padding: 80px 48px 88px;
  }
`;

export const Top = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;

  ${({ theme }) => theme.breakpoints.desktop} {
    grid-template-columns: 1.2fr 1fr;
    gap: 64px;
  }
`;

export const BrandBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const BrandName = styled.span`
  font-size: 15px;
  font-weight: ${({ theme }) => theme.fonts.bold};
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
`;

export const BrandText = styled.p`
  margin: 0;
  max-width: 320px;
  font-size: 15px;
  line-height: 1.6;
  font-weight: ${({ theme }) => theme.fonts.light};
  color: rgba(255, 255, 255, 0.78);
`;

export const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ColumnTitle = styled.span`
  font-size: 12px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.white};
`;

export const FooterLink = styled(Link)`
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fonts.regular};
  text-decoration: none;
  color: rgba(255, 255, 255, 0.78);

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: underline;
  }
`;

export const FooterAnchor = styled.a`
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fonts.regular};
  text-decoration: none;
  color: rgba(255, 255, 255, 0.78);

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: underline;
  }
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: 1280px;
  margin: 40px auto 0;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);

  ${({ theme }) => theme.breakpoints.desktop} {
    margin-top: 64px;
  }
`;

export const Small = styled.p`
  margin: 0;
  font-size: 13px;
  line-height: 1.6;
  font-weight: ${({ theme }) => theme.fonts.regular};
  color: rgba(255, 255, 255, 0.7);

  span {
    color: rgba(255, 255, 255, 0.7);
    font-weight: ${({ theme }) => theme.fonts.regular};
  }
`;

export const InlineAnchor = styled.a`
  font-size: 13px;
  font-weight: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.white};
  text-decoration: underline;
`;
