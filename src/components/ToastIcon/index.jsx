import { iconsMap } from "constants/index.js";

import { ToastIconImage } from "./styled";

export function ToastIcon({ type }) {
  return <ToastIconImage src={iconsMap.get(type)} />;
}
