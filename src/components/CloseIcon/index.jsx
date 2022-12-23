import { closeIconsMap } from "constants/index.js";
import { func, string } from "prop-types";
import React from "react";

import { ToastCloseIcon } from "./styled";

export function CloseIcon({ type, remove }) {
  return <ToastCloseIcon src={closeIconsMap.get(type)} onClick={remove} />;
}

CloseIcon.propTypes = {
  type: string,
  remove: func,
};
