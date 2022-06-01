import React from 'react';
import styled from 'styled-components/native';

const TopSmall = styled.View`
  margin-top: ${(props) => props.theme.space.xs};
`;

const TopMedium = styled.View`
  margin-top: ${(props) => props.theme.space.sm};
`;

const TopLarge = styled.View`
  margin-top: ${(props) => props.theme.space.md};
`;

const LeftSmall = styled.View`
  margin-left: ${(props) => props.theme.space.xs};
`;

const LeftMedium = styled.View`
  margin-left: ${(props) => props.theme.space.sm};
`;

const LeftLarge = styled.View`
  margin-left: ${(props) => props.theme.space.md};
`;

const BottomSmall = styled.View`
  margin-bottom: ${(props) => props.theme.space.xs};
`;

export const Spacer = ({ variant }) => {
  if (variant === 'top.medium') {
    return <TopMedium />;
  }
  if (variant === 'top.large') {
    return <TopLarge />;
  }
  if (variant === 'left.small') {
    return <LeftSmall />;
  }
  if (variant === 'left.medium') {
    return <LeftMedium />;
  }
  if (variant === 'left.large') {
    return <LeftLarge />;
  }
  if (variant === 'bottom.small') {
    return <BottomSmall />;
  }
  return <TopSmall />;
};
