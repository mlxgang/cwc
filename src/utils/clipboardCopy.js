import { getPrettyResult } from '../modules/getPrettyResult.js';
import { getDateTitle } from './getDateTitle.js';
import { RUBBLE } from '../constants.js';

export const clipboardCopy = () => {
  const { result, resultSummary } = getPrettyResult();
  const br = '----------------------------------\n';

  let resultCopy = getDateTitle() + br;
  resultCopy += result.join(br) + br;
  resultCopy += `Общий итог: ${resultSummary} ${RUBBLE}`;

  navigator.clipboard.writeText(resultCopy).then(() => {
    console.log('Текст скопирован!');
  });
};
