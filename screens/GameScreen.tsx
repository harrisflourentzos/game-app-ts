import { StyleSheet, Text, View, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import { light, dark } from "../themes/themes";
import Title from "../components/Title";
import { generateRandomBetween } from "../utils/rng";
import PrimaryButton from "../components/PrimaryButton";
import { Ionicons } from "@expo/vector-icons";

const theme = true ? dark : light;
type direction = "higher" | "lower";

type Props = {
  userNumber: number;
  onGameIsFinished: () => void;
  onGuess: (guess: number) => void;
  onGameIsCanceled: () => void;
};

let min = 1;
let max = 100;

const GameScreen = (props: Props) => {
  const [guess, setGuess] = useState(generateRandomBetween(min, max));

  useEffect(() => {
    // reset outer variables when(and only when) component loads for the first time
    min = 1;
    max = 100;
  }, []);

  useEffect(() => {
    props.onGuess(guess);
    if (guess === props.userNumber) {
      props.onGameIsFinished();
    }
  }, [guess]);

  function feedbackHandler(feedback: direction) {
    const userIsLying =
      (props.userNumber > guess && feedback === "higher") ||
      (props.userNumber < guess && feedback === "lower");

    if (userIsLying) {
      Alert.alert("Naughty, naughty!", "Please provide truthful feedback.", [
        { text: "Okay", style: "cancel" },
      ]);
      return;
    }

    if (feedback === "higher") {
      max = guess;
    } else if (feedback === "lower") {
      min = guess;
    }

    setGuess(generateRandomBetween(min, max));
  }

  return (
    <View style={styles.gameScreenContainer}>
      <Title>CPU's Guess</Title>
      <View style={styles.guessContainer}>
        <Text style={styles.numberText}>{guess}</Text>
      </View>
      <View style={styles.userFeedbackContainer}>
        <Text style={styles.userFeedbackText}>
          Is the guess higher or lower?
        </Text>
        <View style={styles.buttonsContainer}>
          <PrimaryButton
            color={theme.color.secondary}
            onPress={feedbackHandler.bind(this, "higher")}
          >
            <Ionicons name="md-add" size={20} />
          </PrimaryButton>
          <PrimaryButton
            color={theme.color.secondary}
            onPress={feedbackHandler.bind(this, "lower")}
          >
            <Ionicons name="md-remove" size={20} />
          </PrimaryButton>
        </View>
      </View>
      <View style={styles.bottom}>
        <PrimaryButton
          onPress={props.onGameIsCanceled}
          color={theme.color.cancelButton}
          textStyle={styles.cancelButton}
        >
          {"Cancel"}
        </PrimaryButton>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  gameScreenContainer: {
    flex: 1,
    alignItems: "center",
  },
  guessContainer: {
    marginTop: 20,
    paddingHorizontal: 80,
    paddingVertical: 20,
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
  numberText: {
    color: theme.color.secondary,
    fontSize: 32,
    fontWeight: "bold",
  },
  userFeedbackContainer: {
    marginTop: 40,
    alignItems: "center",
  },
  userFeedbackText: {
    color: theme.color.secondary,
    fontSize: 24,
  },
  buttonsContainer: {
    marginTop: 10,
    flexDirection: "row",
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    alignSelf: "flex-start",
  },
  cancelButton: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
