import React from 'react';
import { View, Text } from '@react-pdf/renderer';

export type TitleProps = {
  children: string;
};

export const Title = ({ children }: TitleProps): JSX.Element => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};
