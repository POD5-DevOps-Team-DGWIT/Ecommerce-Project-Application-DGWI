// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import Link from 'next/link';
import styled from 'styled-components';

export const Home = styled.div``;

// The shared page width: 1280px of content, with side padding on small screens.
export const Container = styled.div`
  width: 100%;
  max-width: 1376px;
  margin: 0 auto;
  padding: 0 20px;

  ${({ theme }) => theme.breakpoints.desktop} {
    padding: 0 48px;
  }
`;

export const BenefitsWrap = styled.section`
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightBorderGray};
`;

export const Benefits = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;

  ${({ theme }) => theme.breakpoints.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Benefit = styled.div`
  padding: 22px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.lightBorderGray};

  &:first-child {
    border-top: none;
  }

  ${({ theme }) => theme.breakpoints.desktop} {
    padding: 36px 32px 36px 0;
    border-top: none;
  }
`;

export const BenefitTitle = styled.p`
  margin: 0 0 6px;
  font-size: 15px;
  font-weight: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.textGray};
`;

export const BenefitText = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.55;
  font-weight: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.textLightGray};
`;

export const Section = styled.section`
  padding: 56px 0 64px;

  ${({ theme }) => theme.breakpoints.desktop} {
    padding: 112px 0 120px;
  }
`;

export const SectionHeader = styled.div`
  margin-bottom: 32px;

  ${({ theme }) => theme.breakpoints.desktop} {
    margin-bottom: 56px;
  }
`;

export const SectionEyebrow = styled.p`
  margin: 0 0 12px;
  font-size: 12px;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.textLightGray};
`;

// scroll-margin-top keeps the title visible below the sticky header after the
// "Shop now" button scrolls here.
export const HotProductsTitle = styled.h2`
  margin: 0;
  scroll-margin-top: 110px;
  font-size: 30px;
  line-height: 1.1;
  letter-spacing: -0.02em;
  font-weight: ${({ theme }) => theme.fonts.light};
  color: ${({ theme }) => theme.colors.textGray};

  ${({ theme }) => theme.breakpoints.desktop} {
    font-size: 48px;
  }
`;

export const Story = styled.section`
  background-color: ${({ theme }) => theme.colors.backgroundGray};
`;

export const StoryInner = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  padding-top: 56px;
  padding-bottom: 56px;

  ${({ theme }) => theme.breakpoints.desktop} {
    grid-template-columns: 1.1fr 1fr;
    gap: 72px;
    padding-top: 104px;
    padding-bottom: 104px;
    align-items: center;
  }
`;

export const StoryTitle = styled.h2`
  margin: 0;
  font-size: 28px;
  line-height: 1.15;
  letter-spacing: -0.02em;
  font-weight: ${({ theme }) => theme.fonts.light};
  color: ${({ theme }) => theme.colors.textGray};

  ${({ theme }) => theme.breakpoints.desktop} {
    font-size: 44px;
  }
`;

export const StoryText = styled.p`
  margin: 0 0 28px;
  font-size: 16px;
  line-height: 1.7;
  font-weight: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.textLightGray};
`;

export const StoryLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  padding: 0 28px;
  border: 1px solid ${({ theme }) => theme.colors.textGray};
  border-radius: 999px;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fonts.semiBold};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textGray};
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.textGray};
    color: ${({ theme }) => theme.colors.white};
  }
`;
