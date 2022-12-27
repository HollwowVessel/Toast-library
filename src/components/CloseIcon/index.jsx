import { closeIconsMap } from "constants/index.js";

import { ToastCloseIcon } from "./styled";

export function CloseIcon({ type, remove }) {
  return <ToastCloseIcon src={closeIconsMap.get(type)} onClick={remove} />;
}
