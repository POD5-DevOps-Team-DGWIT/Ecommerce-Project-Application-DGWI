// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';
import ProductList from '../components/ProductList';
import * as S from '../styles/Home.styled';
import { useQuery } from '@tanstack/react-query';
import ApiGateway from '../gateways/Api.gateway';
import Banner from '../components/Banner';
import Brand from '../styles/Brand';
import { CypressFields } from '../utils/enums/CypressFields';
import { useCurrency } from '../providers/Currency.provider';

const Home: NextPage = () => {
  const { selectedCurrency } = useCurrency();
  const { data: productList = [] } = useQuery({
    queryKey: ['products', selectedCurrency],
    queryFn: () => ApiGateway.listProducts(selectedCurrency),
  });

  return (
    <Layout>
      <Head>
        <title>{Brand.name} - Home</title>
      </Head>
      <S.Home data-cy={CypressFields.HomePage}>
        <Banner />
        <S.BenefitsWrap>
          <S.Benefits>
            {Brand.benefits.map(benefit => (
              <S.Benefit key={benefit.title}>
                <S.BenefitTitle>{benefit.title}</S.BenefitTitle>
                <S.BenefitText>{benefit.text}</S.BenefitText>
              </S.Benefit>
            ))}
          </S.Benefits>
        </S.BenefitsWrap>
        <S.Container>
          <S.Section>
            <S.SectionHeader>
              <S.SectionEyebrow>{Brand.products.eyebrow}</S.SectionEyebrow>
              <S.HotProductsTitle data-cy={CypressFields.HotProducts} id="hot-products">
                {Brand.products.title}
              </S.HotProductsTitle>
            </S.SectionHeader>
            <ProductList productList={productList} />
          </S.Section>
        </S.Container>
        <S.Story>
          <S.StoryInner>
            <div>
              <S.SectionEyebrow>{Brand.story.eyebrow}</S.SectionEyebrow>
              <S.StoryTitle>{Brand.story.title}</S.StoryTitle>
            </div>
            <div>
              <S.StoryText>{Brand.story.text}</S.StoryText>
              <S.StoryLink href={Brand.story.href}>{Brand.story.cta}</S.StoryLink>
            </div>
          </S.StoryInner>
        </S.Story>
      </S.Home>
    </Layout>
  );
};

export default Home;
