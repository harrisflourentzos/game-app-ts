import { StyleProp, StyleSheet, Text, ViewStyle } from "react-native";
import React from "react";
import { dark, light } from "../themes/themes";

type Props = { children?: JSX.Element | string; style?: StyleProp<ViewStyle> };
const theme = true ? dark : light;

const Title = (props: Props) => {
  return <Text style={styles.title}>{props.children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    color: theme.color.secondary,
    borderColor: theme.color.secondary,
    textAlign: "center",
    borderWidth: 2,
    fontSize: 24,
    padding: 10,
  },
});
