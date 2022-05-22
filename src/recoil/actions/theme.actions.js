import { useSetRecoilState } from "recoil";
import { themeAtom } from "./states/theme";

export function useThemeAction() {
  const [theme, setTheme] = useSetRecoilState(themeAtom);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return {
    theme,
    toggleTheme,
  };
}