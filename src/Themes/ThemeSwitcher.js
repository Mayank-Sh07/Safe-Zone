import light from "./LightTheme";
import dark from "./DarkTheme";

const themes = {
  light,
  dark,
};

export default function getTheme(theme) {
  return themes[theme];
}
