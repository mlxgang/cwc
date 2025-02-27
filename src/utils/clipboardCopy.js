import { getDateTitle } from './getDateTitle.js';
import { getPrettyResult } from './getPrettyResult.js';

export const clipboardCopy = () => {
  const { result, resultSummary } = getPrettyResult()
  const br = '----------------------------------\n'
  
  let resultCopy = getDateTitle() + br
  resultCopy += result.join(br) + br
  resultCopy += `Общий итог: ${resultSummary} ₽`
  
  navigator.clipboard.writeText(resultCopy).then(() => {
    console.log('Текст скопирован!')
  });
}