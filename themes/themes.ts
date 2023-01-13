import { StyleSheet } from "react-native";

type theme = {
  color: {
    primary: string;
    secondary: string;
    tertiary: string;
    background1: string;
    background2: string;
    background3: string;
  };
};

type commonTheme = {
  buttonText: string;
};

const common: commonTheme = {
  buttonText: "#ffffffe9",
};

export const light: theme & commonTheme = {
  color: {
    primary: "",
    secondary: "",
    tertiary: "",
    background1: "#494949",
    background2: "#767575",
    background3: "#8c8c8c",
  },
  ...common,
};

export const dark: theme & commonTheme = {
  color: {
    primary: "#ff8400",
    secondary: "#ffa13c",
    tertiary: "#d9d9d9",
    background1: "#3a3a3a",
    background2: "#525252",
    background3: "#8c8c8c",
  },
  ...common,
};
