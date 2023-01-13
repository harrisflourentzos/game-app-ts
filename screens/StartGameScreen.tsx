import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";
import { light, dark } from "../themes/themes";

const theme = true ? dark : light;

type Props = {};

const StartGameScreen = (props: Props) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        maxLength={2}
        keyboardType="numeric"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 150,
    padding: 20,
    marginHorizontal: 20,
    backgroundColor: theme.color.background2,
    borderRadius: 8,
    alignItems: "center",
    //Shadow
    elevation: 6,
    shadowColor: "black",
    shadowOffset: { width: 6, height: 6 },
    shadowRadius: 8,
    shadowOpacity: 0.5,
  },
  buttonsContainer: {
    marginTop: 10,
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  textInput: {
    color: theme.color.primary,
    fontSize: 32,
    height: 50,
    width: 50,
    fontWeight: "bold",
    borderBottomColor: theme.color.primary,
    borderBottomWidth: 2,
    textAlign: "center",
  },
});
