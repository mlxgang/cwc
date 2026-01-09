import { prices } from '../prices.js';
import { capitalizeText } from '../utils/capitalizeText.js';
import { dataPriceHandler } from '../utils/dataPriceHandler.js';
import { localStorageHandler } from './localStorageHandler.js';
import { RUBBLE } from '../constants.js';

export const getPrettyResult = () => {
  const data = localStorageHandler.get();

  if (data) {
    let resultSummary = 0;
    let resultKeySummary = 0
    let result = [];

    data.forEach(item => {
      let summary = 0;
      let keySummary = 0;
      let resultItem = '';

      for (let key in item) {
        const value = item[key];
        if (value) {
          switch (key) {
            case 'title':
              resultItem += value + '\n';
              break;
            case 'note':
              resultItem += 'Доп. информация: ' + value + '\n';
              break;
            case 'pc_build': {
              const [data, price] = prices.pc_build[value];
              resultItem += data + '\n';
              summary += price;
              break;
            }
            case 'os': {
              const osKey = item.os_key; // bios, buy, need to buy
              const [data, price, keyPrice] = prices.os[value][osKey];
              resultItem += data + '\n';
              summary += price;
              keySummary += keyPrice;
              break;
            }
            case 'office': {
              const [data, price] = prices.office[value];
              resultItem += data + '\n';
              summary += price;
              if (value === 'bought') keySummary += prices.office._key
              break;
            }
            case 'copy': {
              const [data, price] = prices.copy;
              resultItem += data + '\n';
              summary += price;
              break;
            }
            case 'custom_title': {
              const desc = capitalizeText(value);
              const [data, price] = dataPriceHandler(desc, Number(item.custom_price));
              resultItem += data + '\n';
              summary += price;
              break;
            }
            default:
              break;
          }
        }
      }
      resultItem += `Итого: ${summary} ${RUBBLE}\n`;
      resultSummary += summary;
      resultKeySummary += keySummary;
      result.push(resultItem);
    });
    return { result, resultSummary, resultKeySummary };
  }
};
