// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';
import Button from '../Button';

export const Banner = styled.section`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.surface} 0%,
    ${({ theme }) => theme.colors.backgroundGray} 100%
  );
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Inner = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 28px;
  align-items: center;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 28px 20px 36px;

  ${({ theme }) => theme.breakpoints.desktop} {
    grid-template-columns: 1fr 1fr;
    gap: 56px;
    padding: 72px 48px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch; /* mobile: button fills the width */

  ${({ theme }) => theme.breakpoints.desktop} {
    align-items: flex-start;
  }
`;

export const Eyebrow = styled.span`
  display: inline-block;
  align-self: flex-start;
  margin-bottom: 14px;
  padding: 6px 12px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.goldSoft};
  color: ${({ theme }) => theme.colors.goldText};
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fonts.semiBold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const Title = styled.h1`
  margin: 0 0 12px;
  font-size: clamp(34px, 4.6vw, 56px);
  line-height: 1.1;
  letter-spacing: -0.02em;
  font-weight: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.textGray};
`;

export const Accent = styled.span`
  color: ${({ theme }) => theme.colors.otelBlue};
`;

export const Subtitle = styled.p`
  margin: 0 0 28px;
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.goldText};

  ${({ theme }) => theme.breakpoints.desktop} {
    font-size: 20px;
  }
`;

export const GoShoppingButton = styled(Button)`
  width: 100%;

  ${({ theme }) => theme.breakpoints.desktop} {
    width: auto;
  }
`;

/*
 * The banner photo has the words "Welcome to DigitalWitch..." baked into it,
 * which repeated the HTML headline. We show only the photo part of it:
 *   source image = 1175 x 661 px
 *   visible box  = x 565 -> 1175, y 0 -> 520  (610 x 520 px)
 * so: width = 1175 / 610 = 193%, pinned to the top-right corner.
 */
export const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  aspect-ratio: 610 / 520;
  border-radius: 24px;
  background: ${({ theme }) => theme.colors.otelGray};
  box-shadow: 0 20px 40px rgba(11, 31, 58, 0.18);
`;

export const BannerImg = styled.img.attrs({
  src: '/images/digitalwitch-banner.webp',
  alt: 'A smiling DigitalWitch learner at her desk',
})`
  position: absolute;
  top: 0;
  right: 0;
  width: 193%;
  max-width: none;
  height: auto;
`;
