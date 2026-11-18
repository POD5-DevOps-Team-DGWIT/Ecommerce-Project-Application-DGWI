// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import { siteConfig } from '../Layout/siteConfig';
import * as S from './PodTeam.styled';

const initials = (name: string) =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(part => part[0].toUpperCase())
    .join('');

// Shows nothing until you fill in projectDescription and/or members in
// components/Layout/siteConfig.ts
const PodTeam = () => {
  const { podName, projectDescription, members } = siteConfig;

  if (!projectDescription && members.length === 0) {
    return null;
  }

  return (
    <S.PodTeam>
      <S.Inner>
        <S.Title>Meet {podName || 'the team'}</S.Title>
        {!!projectDescription && <S.Description>{projectDescription}</S.Description>}
        {members.length > 0 && (
          <S.MemberList>
            {members.map(({ name, role, link }) => (
              <S.Member key={name}>
                <S.Avatar>{initials(name)}</S.Avatar>
                <div>
                  <S.MemberName>
                    {link ? (
                      <a href={link} target="_blank" rel="noopener noreferrer">
                        {name}
                      </a>
                    ) : (
                      name
                    )}
                  </S.MemberName>
                  <S.MemberRole>{role}</S.MemberRole>
                </div>
              </S.Member>
            ))}
          </S.MemberList>
        )}
      </S.Inner>
    </S.PodTeam>
  );
};

export default PodTeam;