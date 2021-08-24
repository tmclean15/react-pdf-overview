import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    marginBottom: "0.2in",
    fontSize: 14,
  },
});

export type TitleProps = {
  children: string;
};

export const Title = ({ children }: TitleProps): JSX.Element => {
  return (
    <View style={styles.title}>
      <Text>{children}</Text>
    </View>
  );
};
