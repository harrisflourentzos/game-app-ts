type theme = {
  color: {
    primary: string;
    secondary: string;
    tertiary: string;
    background1: string;
    background2: string;
    background3: string;
    cancelButton: string;
  };
};

type commonTheme = {
  whiteText: string;
};

const common: commonTheme = {
  whiteText: "#ffffffe9",
};

export const light: theme & commonTheme = {
  color: {
    primary: "",
    secondary: "",
    tertiary: "",
    background1: "#494949",
    background2: "#767575",
    background3: "#8c8c8c",
    cancelButton: "#ff6060",
  },
  ...common,
};

export const dark: theme & commonTheme = {
  color: {
    primary: "#83ff78",
    secondary: "#ffa13c",
    tertiary: "#ffaf5a",
    background1: "#3a3a3a",
    background2: "#525252",
    background3: "#8c8c8c",
    cancelButton: "#ff5353",
  },
  ...common,
};
