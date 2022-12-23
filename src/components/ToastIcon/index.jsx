import { iconsMap } from "constants/index.js";
import { string } from "prop-types";
import React from "react";

import { ToastIconImage } from "./styled";

export function ToastIcon({ type }) {
  return <ToastIconImage src={iconsMap.get(type)} />;
}

ToastIcon.propTypes = {
  type: string,
};
