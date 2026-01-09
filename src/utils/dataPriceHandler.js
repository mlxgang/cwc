import { RUBBLE } from '../constants.js';

export const dataPriceHandler = (description, price, title = '', keyState = '', keyPrice = 0) => {
  title = title !== '' ? `: ${title} ` : '';
  description = keyState !== '' && title === '' ? description + '. ' : description;

  const data = `${description} ${title}\n ${keyState} - ${price} ${RUBBLE}`;
  return [data, price, keyPrice];
};
