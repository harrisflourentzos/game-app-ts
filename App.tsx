import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground, SafeAreaView, View } from "react-native";
import { Provider } from "react-redux";
import StartGameScreen from "./screens/StartGameScreen";
import { store } from "./store/store";
import { LinearGradient } from "expo-linear-gradient";
import { dark, light } from "./themes/themes";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import GameFinishedScreen from "./screens/GameFinishedScreen";

const theme = true ? dark : light;

const guesses: Array<number> = [];

export default function App() {
  const [userNumber, setUserNumber] = useState<number | null>(null);
  const [gameIsFinished, setGameIsFinished] = useState<boolean>(false);

  function saveGuessHandler(guess: number) {
    guesses.push(guess);
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
      <LinearGradient
        style={styles.backgroundContainer}
        colors={[theme.color.background1, theme.color.secondary]}
      >
        <ImageBackground
          source={require("./assets/background.png")}
          style={styles.backgroundContainer}
          resizeMode="cover"
          imageStyle={{ opacity: 0.2 }}
        >
          <View style={styles.screenContainer}>
            <SafeAreaView style={styles.backgroundContainer}>
              {currentScreen}
            </SafeAreaView>
          </View>
        </ImageBackground>
      </LinearGradient>
    </Provider>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
  },
  screenContainer: {
    flex: 1,
    padding: 20,
  },
});
