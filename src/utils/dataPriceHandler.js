export const dataPriceHandler = (desc, price, title = '', opt = '') => {
  title = title !== '' ? `: ${title} ` : '';
  desc = opt !== '' && title === '' ? desc + '. ' : desc;

  const data = desc + title + opt + ' - ' + price;
  return [data, price];
};
