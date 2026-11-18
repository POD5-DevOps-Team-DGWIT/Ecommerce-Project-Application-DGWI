// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import Link from 'next/link';
import { siteConfig } from '../Layout/siteConfig';
import * as S from './Banner.styled';

const Banner = () => {
  return (
    <S.Banner>
      <S.Inner>
        <S.TextContainer>
          {!!siteConfig.podName && <S.Eyebrow>{siteConfig.podName}</S.Eyebrow>}
          <S.Title>
            DigitalWitch Cohort 6 <S.Accent>POD5</S.Accent>
          </S.Title>
          <S.Subtitle>Professional Cloud Security + DevOps Training</S.Subtitle>
          <Link href="#hot-products">
            <S.GoShoppingButton>Explore the Store</S.GoShoppingButton>
          </Link>
        </S.TextContainer>
        <S.ImageContainer>
          <S.BannerImg />
        </S.ImageContainer>
      </S.Inner>
    </S.Banner>
  );
};

export default Banner;
