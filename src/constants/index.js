import whiteCloseIcon from "assets/icons/close.svg";
import blackCloseIcon from "assets/icons/close-1.svg";
import errorIcon from "assets/icons/error.svg";
import informationIcon from "assets/icons/information.svg";
import successIcon from "assets/icons/success.svg";
import warningIcon from "assets/icons/warning.svg";

export const colors = {
  purple: "#9A40D3",
  yellow: "#F4E048",
  red: "#E25837",
  green: "#37E30A",
};

export const iconsMap = new Map([
  ["warning", warningIcon],
  ["success", successIcon],
  ["error", errorIcon],
  ["information", informationIcon],
]);

export const closeIconsMap = new Map([
  ["white", whiteCloseIcon],
  ["black", blackCloseIcon],
]);

export const positionMap = {
  bottomLeft: { top: 100, left: 0 },
  bottomRight: { top: 100, left: 100 },
  topLeft: { top: 0, left: 0 },
  topRight: { top: 0, left: 100 },
};

export const spacesMap = new Map([
  ["none", { y: 0, x: 0 }],
  ["s", { y: 10, x: 10 }],
  ["l", { y: 20, x: 20 }],
  ["m", { x: 30, y: 30 }],
]);
