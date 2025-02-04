import React from 'react';

import {
  Container,
  Title,
  FilterStyleProps
} from './styles';
import { TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps & FilterStyleProps & {
  title: string;
  type?: FilterStyleProps;
}

export function Filter({ title, isActive = false, ...rest }: Props) {
  return (
    <Container
      isActive={isActive}
      {...rest}>
      <Title>
        {title}
      </Title>
    </Container>
  );
}