import { View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  divider: {
    borderBottom: "1px solid black",
    marginVertical: "0.3in",
  },
});

export const Divider = () => {
  return <View style={styles.divider} />;
};
