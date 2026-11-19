// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useCallback, useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import Ad from '../../../components/Ad';
import Layout from '../../../components/Layout';
import ProductPrice from '../../../components/ProductPrice';
import Recommendations from '../../../components/Recommendations';
import Select from '../../../components/Select';
import Brand from '../../../styles/Brand';
import { CypressFields } from '../../../utils/enums/CypressFields';
import ApiGateway from '../../../gateways/Api.gateway';
import { Product } from '../../../protos/demo';
import AdProvider from '../../../providers/Ad.provider';
import { useCart } from '../../../providers/Cart.provider';
import * as S from '../../../styles/ProductDetail.styled';
import { useCurrency } from '../../../providers/Currency.provider';

const quantityOptions = new Array(10).fill(0).map((_, i) => i + 1);

const ProductDetail: NextPage = () => {
  const { push, query } = useRouter();
  const [quantity, setQuantity] = useState(1);
  const {
    addItem,
    cart: { items },
  } = useCart();
  const { selectedCurrency } = useCurrency();
  const productId = query.productId as string;

  useEffect(() => {
    setQuantity(1);
  }, [productId]);

  const {
    data: {
      name,
      picture,
      description,
      priceUsd = { units: 0, currencyCode: 'USD', nanos: 0 },
      categories,
    } = {} as Product,
  } = useQuery({
      queryKey: ['product', productId, 'selectedCurrency', selectedCurrency],
      queryFn: () => ApiGateway.getProduct(productId, selectedCurrency),
      enabled: !!productId,
    }
  ) as { data: Product };

  const onAddItem = useCallback(async () => {
    await addItem({
      productId,
      quantity,
    });
    push('/cart');
  }, [addItem, productId, quantity, push]);

  return (
    <AdProvider
      productIds={[productId, ...items.map(({ productId }) => productId)]}
      contextKeys={[...new Set(categories)]}
    >
      <Head>
        <title>{Brand.name} - Product</title>
      </Head>
      <Layout>
        <S.ProductDetail data-cy={CypressFields.ProductDetail}>
          <S.Crumbs>
            <S.BackLink href="/#hot-products">← All products</S.BackLink>
          </S.Crumbs>
          <S.Container>
            {picture ? (
              <S.Image
                $src={`/images/products/${picture}`}
                data-cy={CypressFields.ProductPicture}
              />
            ) : null}
            <S.Details $fullWidth={!picture}>
              {categories && categories.length > 0 ? (
                <S.Chips>
                  {categories.map(category => (
                    <S.Chip key={category}>{category}</S.Chip>
                  ))}
                </S.Chips>
              ) : null}
              <S.Name data-cy={CypressFields.ProductName}>{name}</S.Name>
              <S.ProductPrice>
                <ProductPrice price={priceUsd} />
              </S.ProductPrice>
              <S.Description data-cy={CypressFields.ProductDescription}>{description}</S.Description>
              <S.Buy>
                <S.Field>
                  <S.Text>Quantity</S.Text>
                  <Select
                    data-cy={CypressFields.ProductQuantity}
                    onChange={event => setQuantity(+event.target.value)}
                    value={quantity}
                  >
                    {quantityOptions.map(option => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </Select>
                </S.Field>
                <S.AddToCart data-cy={CypressFields.ProductAddToCart} onClick={onAddItem}>
                  <Image src="/icons/Cart.svg" height="15" width="15" alt="cart" /> Add To Cart
                </S.AddToCart>
              </S.Buy>
              <S.Perks>
                {Brand.benefits.map(benefit => (
                  <S.Perk key={benefit.title}>
                    <S.PerkTitle>{benefit.title}</S.PerkTitle>
                    <S.PerkText>{benefit.text}</S.PerkText>
                  </S.Perk>
                ))}
              </S.Perks>
            </S.Details>
          </S.Container>
          <S.Wide>
            <Recommendations />
          </S.Wide>
        </S.ProductDetail>
        <Ad />
      </Layout>
    </AdProvider>
  );
};

export default ProductDetail;
