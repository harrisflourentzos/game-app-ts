import {
  StyleSheet,
  View,
  Text,
  FlatList,
  useWindowDimensions,
} from "react-native";
import Title from "../components/Title";
import ShadowContainer from "../components/ShadowContainer";
import React from "react";
import { dark, light } from "../themes/themes";
import PrimaryButton from "../components/PrimaryButton";
import themeSlice from "../store/theme-slice";
import { is } from "immer/dist/internal";

type Props = {
  userNumber: number;
  guesses: Array<number>;
  onPlayAgain: () => void;
};
const theme = true ? dark : light;

const GameFinishedScreen = ({ userNumber, guesses, onPlayAgain }: Props) => {
  const { width, height } = useWindowDimensions();

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

  const isLandscape = width > height;

  return (
    <View style={styles.rootContainer}>
      <Title>Game Finished!</Title>
      <ShadowContainer
        style={[
          styles.userSummaryShadowContainer,
          {
            marginVertical: isLandscape ? 10 : 30,
            padding: isLandscape ? 10 : 20,
          },
        ]}
      >
        <View style={styles.userSummaryContainer}>
          <Text style={styles.userSummaryText}>You picked: </Text>
          <Text
            style={[styles.userSummaryText, { color: theme.color.primary }]}
          >
            {userNumber}
          </Text>
        </View>
      </ShadowContainer>
      <View
        style={
          isLandscape
            ? styles.cpuSummaryContainerLandscape
            : styles.cpuSummaryContainerPortrait
        }
      >
        <Text style={styles.cpuSummaryText}>
          The CPU took{" "}
          <Text style={{ color: theme.color.primary, fontWeight: "bold" }}>
            {guesses.length}
          </Text>{" "}
          tries to guess your number:
        </Text>
        <FlatList
          data={guesses}
          renderItem={({ item }) => renderGuessElement(item)}
        />
      </View>
      <View style={styles.bottom}>
        <PrimaryButton onPress={playAgainHandler} color={theme.color.primary}>
          Play Again!
        </PrimaryButton>
      </View>
    </View>
  );
};

export default GameFinishedScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  userSummaryShadowContainer: {
    alignItems: "center",
  },
  userSummaryContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  navigationContainer: {
    marginTop: 20,
  },
  userSummaryText: {
    color: theme.color.secondary,
    fontSize: 24,
    fontWeight: "bold",
  },
  cpuSummaryContainerPortrait: {
    flex: 6,
    flexDirection: "column",
    justifyContent: "center",
  },
  cpuSummaryContainerLandscape: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
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
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
