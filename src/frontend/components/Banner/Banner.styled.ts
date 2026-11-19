// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import Link from 'next/link';
import styled from 'styled-components';

// The hero is pure CSS (gradients and rings), so it needs no image files.
// Text colors are set on every element on purpose: the global stylesheet gives
// every element a dark default, so text on this dark background must say "white" itself.
export const Banner = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 520px;
  overflow: hidden;
  background:
    radial-gradient(ellipse at 80% 15%, rgba(200, 144, 46, 0.5) 0%, rgba(200, 144, 46, 0) 46%),
    radial-gradient(ellipse at 10% 95%, rgba(31, 111, 209, 0.5) 0%, rgba(31, 111, 209, 0) 52%),
    linear-gradient(160deg, #0b1f3a 0%, #0f1a2c 60%, #0a1322 100%);

  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.12);
    pointer-events: none;
  }

  &::before {
    width: 420px;
    height: 420px;
    top: -140px;
    right: -120px;
  }

  &::after {
    width: 640px;
    height: 640px;
    top: -240px;
    right: -220px;
  }

  ${({ theme }) => theme.breakpoints.desktop} {
    min-height: min(80vh, 720px);
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1376px;
  margin: 0 auto;
  padding: 110px 20px 32px;

  ${({ theme }) => theme.breakpoints.desktop} {
    padding: 160px 48px 56px;
  }
`;

export const Eyebrow = styled.p`
  margin: 0 0 16px;
  font-size: 12px;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fonts.semiBold};
  color: rgba(255, 255, 255, 0.75);
`;

export const Title = styled.h1`
  margin: 0;
  max-width: 760px;
  font-size: 38px;
  line-height: 1.08;
  letter-spacing: -0.02em;
  font-weight: ${({ theme }) => theme.fonts.light};
  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.breakpoints.desktop} {
    font-size: 72px;
  }
`;

export const Text = styled.p`
  margin: 24px 0 0;
  max-width: 520px;
  font-size: 16px;
  line-height: 1.6;
  font-weight: ${({ theme }) => theme.fonts.regular};
  color: rgba(255, 255, 255, 0.82);
`;

export const BarWrap = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1376px;
  margin: 0 auto;
  padding: 0 20px;

  ${({ theme }) => theme.breakpoints.desktop} {
    padding: 0 48px;
  }
`;

export const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.25);

  ${({ theme }) => theme.breakpoints.desktop} {
    padding: 22px 0;
  }
`;

export const ScrollText = styled.span`
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fonts.semiBold};
  color: rgba(255, 255, 255, 0.8);
`;

export const PrimaryLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  padding: 0 28px;
  border-radius: 999px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.otelGray};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fonts.semiBold};
  text-decoration: none;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.85);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.white};
    outline-offset: 3px;
  }
`;
