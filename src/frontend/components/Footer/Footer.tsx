// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import { useEffect, useState } from 'react';
import * as S from './Footer.styled';
import Brand from '../../styles/Brand';
import SessionGateway from '../../gateways/Session.gateway';
import { CypressFields } from '../../utils/enums/CypressFields';
import PlatformFlag from '../PlatformFlag';

const currentYear = new Date().getFullYear();

const { userId } = SessionGateway.getSession();

const Footer = () => {
  const [sessionId, setSessionId] = useState('');

  useEffect(() => {
    setSessionId(userId);
  }, []);

  return (
    <S.Footer>
      <S.Top>
        <S.BrandBlock>
          <S.BrandName>{Brand.name}</S.BrandName>
          <S.BrandText>{Brand.tagline}</S.BrandText>
        </S.BrandBlock>
        <S.Columns>
          {Brand.footerLinks.map(column => (
            <S.Column key={column.title}>
              <S.ColumnTitle>{column.title}</S.ColumnTitle>
              {column.links.map(link =>
                link.external ? (
                  <S.FooterAnchor key={link.label} href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </S.FooterAnchor>
                ) : (
                  <S.FooterLink key={link.label} href={link.href}>
                    {link.label}
                  </S.FooterLink>
                )
              )}
            </S.Column>
          ))}
        </S.Columns>
      </S.Top>
      <S.Bottom>
        <S.Small>{Brand.footerNote}</S.Small>
        <S.Small>
          <span data-cy={CypressFields.SessionId}>session-id: {sessionId}</span>
        </S.Small>
        <S.Small>
          © {currentYear} {Brand.name} · Built on the{' '}
          <S.InlineAnchor href="https://github.com/open-telemetry/opentelemetry-demo">OpenTelemetry Demo</S.InlineAnchor>
        </S.Small>
      </S.Bottom>
      <PlatformFlag />
    </S.Footer>
  );
};

export default Footer;
