// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import Brand from '../../styles/Brand';
import * as S from './Banner.styled';

const Banner = () => {
  return (
    <S.Banner>
      <S.Content>
        <S.Eyebrow>{Brand.hero.eyebrow}</S.Eyebrow>
        <S.Title>{Brand.hero.title}</S.Title>
        <S.Text>{Brand.hero.text}</S.Text>
      </S.Content>
      <S.BarWrap>
        <S.Bar>
          <S.ScrollText>{Brand.hero.scroll}</S.ScrollText>
          <S.PrimaryLink href="#hot-products">{Brand.hero.cta}</S.PrimaryLink>
        </S.Bar>
      </S.BarWrap>
    </S.Banner>
  );
};

export default Banner;
