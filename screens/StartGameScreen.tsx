import { Alert, StyleSheet, TextInput, View, Text } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import { light, dark } from "../themes/themes";
import Title from "../components/Title";

const theme = true ? dark : light;

type Props = { onUserNumberPicked: (userNumber: number) => void };

const StartGameScreen = (props: Props) => {
  const [enteredText, setEnteredText] = useState("");

  function changeTextHandler(enteredText: string) {
    setEnteredText(enteredText);
  }

  function resetHandler() {
    setEnteredText("");
  }

  function confirmHandler() {
    const enteredNumber = Number(enteredText);

    if (!enteredNumber || enteredNumber < 0) {
      Alert.alert("Invalid Input!", "Please enter a number between 1 and 99", [
        {
          text: "OK",
          onPress: () => {
            resetHandler();
          },
          style: "destructive",
        },
      ]);
      return;
    }

    props.onUserNumberPicked(enteredNumber);
  }

  return (
    <View>
      <View style={styles.titleContainer}>
        <Title>Guess The Number</Title>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.instructionText}>Choose a Number:</Text>
        <TextInput
          style={styles.textInput}
          maxLength={2}
          keyboardType="numeric"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={changeTextHandler}
          value={enteredText}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton color={theme.color.secondary} onPress={resetHandler}>
              Reset
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              color={theme.color.secondary}
              onPress={confirmHandler}
            >
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 50,
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
  titleContainer: {
    margin: 20,
  },
  instructionText: {
    color: theme.color.primary,
    fontSize: 20,
  },
});
