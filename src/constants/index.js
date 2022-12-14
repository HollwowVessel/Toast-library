import warningIcon from 'assets/icons/warning.svg';
import successIcon from 'assets/icons/success.svg';
import informationIcon from 'assets/icons/information.svg';
import errorIcon from 'assets/icons/error.svg';
import whiteCloseIcon from 'assets/icons/close.svg';
import blackCloseIcon from 'assets/icons/close-1.svg';

export const colors = {
  purple: '#9A40D3',
  yellow: '#F4E048',
  red: '#E25837',
  green: '#37E29A',
};

export const iconsMap = new Map([
  ['warning', warningIcon],
  ['success', successIcon],
  ['error', errorIcon],
  ['information', informationIcon],
]);

export const closeIconsMap = new Map([
  ['white', whiteCloseIcon],
  ['black', blackCloseIcon],
]);
