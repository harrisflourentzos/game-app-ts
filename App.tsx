import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import StartGameScreen from "./screens/StartGameScreen";
import { store } from "./store/store";
import { LinearGradient } from "expo-linear-gradient";
import { dark, light } from "./themes/themes";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";

const theme = true ? dark : light;

export default function App() {
  const initialUserNumberState: number | null = null;

  const [userNumber, setUserNumber] = useState<number | null>();

  function userNumberPickedHandler(num: number) {
    setUserNumber(num);
  }

  const currentScreen = userNumber ? (
    <GameScreen userNumber={userNumber} />
  ) : (
    <StartGameScreen onUserNumberPicked={userNumberPickedHandler} />
  );

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
          <SafeAreaView style={styles.backgroundContainer}>
            {currentScreen}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </Provider>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
  },
});
