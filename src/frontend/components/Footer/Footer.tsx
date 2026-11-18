// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import { useEffect, useState } from 'react';
import * as S from './Footer.styled';
import SessionGateway from '../../gateways/Session.gateway';
import { CypressFields } from '../../utils/enums/CypressFields';
import PlatformFlag from '../PlatformFlag';
import { siteConfig } from '../Layout/siteConfig';

const currentYear = new Date().getFullYear();

const { userId } = SessionGateway.getSession();

const Footer = () => {
  const [sessionId, setSessionId] = useState('');

  useEffect(() => {
    setSessionId(userId);
  }, []);

  return (
    <S.Footer>
      <div>
        <p>This website is a DigitalWitch training environment. It is not an actual shop.</p>
        <p>
          <span data-cy={CypressFields.SessionId}>session-id: {sessionId}</span>
        </p>
      </div>
      <p>
        © {currentYear} DigitalWitch Support Community · Built on the{' '}
        <a href="https://github.com/open-telemetry/opentelemetry-demo">OpenTelemetry Demo</a>
      </p>
      {!!siteConfig.podName && <p>Customized by {siteConfig.podName} - Engr. Nnamdi and Other Dev Team.</p>}
      <PlatformFlag />
    </S.Footer>
  );
};

export default Footer;
