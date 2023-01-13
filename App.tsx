import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground } from "react-native";
import { Provider } from "react-redux";
import StartGameScreen from "./screens/StartGameScreen";
import { store } from "./store/store";
import { LinearGradient } from "expo-linear-gradient";
import { dark, light } from "./themes/themes";

const theme = true ? dark : light;

export default function App() {
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
          <StartGameScreen />
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
