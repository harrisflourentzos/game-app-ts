import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ViewStyle,
  StyleProp,
  TextStyle,
} from "react-native";
import React from "react";
import { dark, light } from "../themes/themes";

const theme = true ? dark : light;

type Props = {
  children: JSX.Element | string;
  onPress?: () => void;
  textStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
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
                props.containerStyle,
              ]
            : [
                styles.buttonInnerContainer,
                { borderColor: props.color },
                props.containerStyle,
              ]
        }
        onPress={props.onPress}
      >
        {({ pressed }) => (
          <Text
            style={
              pressed
                ? [
                    styles.buttonText,
                    { color: theme.whiteText },
                    props.textStyle,
                  ]
                : [styles.buttonText, { color: props.color }, props.textStyle]
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
    padding: 6,
    backgroundColor: "transparent",
  },
  buttonText: {
    fontWeight: "bold",
    textAlign: "center",
  },
});
