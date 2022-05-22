import { atom } from "recoil";

const themeAtom = atom({
  key: "theme",
  default: null,
});

export { themeAtom };
