import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { dark, light } from "../themes/themes";
import React from "react";

const theme = true ? dark : light;
type Props = { children?: JSX.Element | string; style?: StyleProp<ViewStyle> };

const ShadowContainer = (props: Props) => {
  return <View style={[styles.container, props.style]}>{props.children}</View>;
};

export default ShadowContainer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.color.background2,
    borderRadius: 8,
    //Shadow
    elevation: 6,
    shadowColor: "black",
    shadowOffset: { width: 6, height: 6 },
    shadowRadius: 8,
    shadowOpacity: 0.5,
  },
});
