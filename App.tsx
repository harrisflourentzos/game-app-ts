import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  View,
  StatusBar,
} from "react-native";
import { Provider } from "react-redux";
import StartGameScreen from "./screens/StartGameScreen";
import { store } from "./store/store";
import { LinearGradient } from "expo-linear-gradient";
import { dark, light } from "./themes/themes";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import GameFinishedScreen from "./screens/GameFinishedScreen";

const theme = true ? dark : light;

export default function App() {
  const [userNumber, setUserNumber] = useState<number | null>(null);
  const [gameIsFinished, setGameIsFinished] = useState<boolean>(false);
  const [guesses, setGuesses] = useState(new Array<number>());

  function saveGuessHandler(guess: number) {
    setGuesses((state) => [...state, guess]);
  }

  function userNumberPickedHandler(num: number) {
    setUserNumber(num);
  }

  function gameIsFinishedHandler() {
    setGameIsFinished(true);
  }

  function playAgainHandler() {
    setUserNumber(null);
    setGameIsFinished(false);
    setGuesses([]);
  }

  let currentScreen = (
    <StartGameScreen onUserNumberPicked={userNumberPickedHandler} />
  );

  if (userNumber) {
    currentScreen = (
      <GameScreen
        userNumber={userNumber}
        onGameIsFinished={gameIsFinishedHandler}
        onGuess={saveGuessHandler}
        onGameIsCanceled={playAgainHandler}
      />
    );
  }

  if (gameIsFinished && userNumber) {
    currentScreen = (
      <GameFinishedScreen
        onPlayAgain={playAgainHandler}
        userNumber={userNumber}
        guesses={guesses}
      />
    );
  }

  return (
    <Provider store={store}>
      <ExpoStatusBar style="light" />
      <LinearGradient
        style={styles.rootContainer}
        colors={[theme.color.background1, theme.color.secondary]}
      >
        <ImageBackground
          source={require("./assets/background.png")}
          style={styles.rootContainer}
          resizeMode="cover"
          imageStyle={{ opacity: 0.2 }}
        >
          {/* TODO: SafeArea does not seem to be working */}
          <SafeAreaView style={styles.rootContainer}>
            <View style={[styles.rootContainer, styles.currentScreenContainer]}>
              {currentScreen}
            </View>
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </Provider>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  currentScreenContainer: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    paddingTop: StatusBar.currentHeight! + 10,
  },
});
