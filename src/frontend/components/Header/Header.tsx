// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import CartIcon from '../CartIcon';
import CurrencySwitcher from '../CurrencySwitcher';
import Brand from '../../styles/Brand';
import * as S from './Header.styled';

const Header = () => {
  return (
    <S.Header>
      <S.NavBar>
        <S.Container>
          <S.NavBarBrand href="/">
            <S.BrandName>{Brand.name}</S.BrandName>
          </S.NavBarBrand>
          <S.Controls>
            <CurrencySwitcher />
            <CartIcon />
          </S.Controls>
        </S.Container>
      </S.NavBar>
    </S.Header>
  );
};

export default Header;
