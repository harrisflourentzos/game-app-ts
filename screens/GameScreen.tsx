import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { light, dark } from "../themes/themes";

const theme = true ? dark : light;

type Props = { userNumber: number };

const GameScreen = (props: Props) => {
  return (
    <View style={styles.gameScreenContainer}>
      <Text style={styles.numberText}>{props.userNumber.toString()}</Text>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  gameScreenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  numberText: {
    color: theme.color.primary,
    fontSize: 24,
    fontWeight: "bold",
  },
});
