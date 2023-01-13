import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { dark, light } from "../themes/themes";

const theme = true ? dark : light;

type Props = { children: JSX.Element | string; pressHanlder?: () => void };

const PrimaryButton = (props: Props) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={props.pressHanlder}
      >
        <Text style={styles.buttonText}>{props.children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: { margin: 4 },
  buttonInnerContainer: {
    borderRadius: 40,
    borderColor: theme.color.secondary,
    borderWidth: 2,
    padding: 8,
    backgroundColor: theme.color.background2,
  },
  buttonText: {
    color: theme.color.secondary,
    fontWeight: "bold",
    textAlign: "center",
  },
  pressed: { backgroundColor: theme.color.secondary },
});
