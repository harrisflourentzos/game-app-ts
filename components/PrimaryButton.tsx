import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ViewStyle,
  StyleProp,
} from "react-native";
import React from "react";
import { dark, light } from "../themes/themes";

const theme = true ? dark : light;

type Props = {
  children: JSX.Element | string;
  onPress?: () => void;
  color: string;
};

const PrimaryButton = (props: Props) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [
                styles.buttonInnerContainer,
                { backgroundColor: props.color, borderColor: props.color },
              ]
            : [styles.buttonInnerContainer, { borderColor: props.color }]
        }
        onPress={props.onPress}
      >
        {({ pressed }) => (
          <Text
            style={
              pressed
                ? [styles.buttonText, { color: theme.whiteText }]
                : [styles.buttonText, { color: props.color }]
            }
          >
            {props.children}
          </Text>
        )}
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: { margin: 4 },
  buttonInnerContainer: {
    borderRadius: 40,
    borderWidth: 2,
    padding: 8,
    backgroundColor: "transparent",
  },
  buttonText: {
    fontWeight: "bold",
    textAlign: "center",
  },
});
