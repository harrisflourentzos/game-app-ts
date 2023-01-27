import { StyleSheet, View, Text, FlatList } from "react-native";
import Title from "../components/Title";
import ShadowContainer from "../components/ShadowContainer";
import React from "react";
import { dark, light } from "../themes/themes";
import PrimaryButton from "../components/PrimaryButton";
import themeSlice from "../store/theme-slice";

type Props = {
  userNumber: number;
  guesses: Array<number>;
  onPlayAgain: () => void;
};
const theme = true ? dark : light;

const GameFinishedScreen = ({ userNumber, guesses, onPlayAgain }: Props) => {
  const renderGuessElement = (guess: number) => {
    return (
      <ShadowContainer style={styles.guessItemShadowContainer}>
        <Text style={styles.guessItemText}>{guess.toString()}</Text>
      </ShadowContainer>
    );
  };

  function playAgainHandler() {
    onPlayAgain();
  }

  return (
    <View style={styles.container}>
      <Title>Game Finished!</Title>
      <ShadowContainer style={styles.userSummaryShadowContainer}>
        <View style={styles.userSummaryTextContainer}>
          <Text style={styles.userSummaryText}>You picked: </Text>
          <Text
            style={[styles.userSummaryText, { color: theme.color.primary }]}
          >
            {userNumber}
          </Text>
        </View>
      </ShadowContainer>
      <View style={styles.flatListContainer}>
        <View style={styles.cpuSummaryContainer}>
          <Text style={styles.cpuSummaryText}>
            The CPU took{" "}
            <Text style={{ color: theme.color.primary, fontWeight: "bold" }}>
              {guesses.length}
            </Text>{" "}
            tries to guess your number:
          </Text>
        </View>
        <FlatList
          data={guesses}
          renderItem={({ item }) => renderGuessElement(item)}
        />
      </View>
      <View style={styles.navigationContainer}>
        <PrimaryButton onPress={playAgainHandler} color={theme.color.primary}>
          Play Again!
        </PrimaryButton>
      </View>
    </View>
  );
};

export default GameFinishedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  userSummaryShadowContainer: {
    alignItems: "center",
    marginTop: 40,
    padding: 20,
  },
  userSummaryTextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  cpuSummaryContainer: {
    margin: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  flatListContainer: {
    flex: 6,
  },
  navigationContainer: {
    marginTop: 20,
  },
  userSummaryText: {
    color: theme.color.secondary,
    fontSize: 24,
    fontWeight: "bold",
  },
  cpuSummaryText: {
    color: theme.color.secondary,
    fontSize: 24,
  },
  guessItemShadowContainer: {
    alignSelf: "center",
    margin: 10,
    paddingHorizontal: 80,
    paddingVertical: 20,
  },
  guessItemText: {
    color: theme.color.secondary,
  },
});
