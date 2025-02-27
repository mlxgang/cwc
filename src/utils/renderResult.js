import { MESSAGES } from '../constants.js';
import { clipboardCopy } from './clipboardCopy.js';
import { getPrettyResult } from './getPrettyResult.js';
import { localStorageHandler } from './localStorageHandler.js';

export const renderResult = () => {
  const resultContainer = document.getElementById('result-container');
  resultContainer.innerHTML = '';
  
  const data = localStorageHandler.get();
  
  if (data) {
    const { result, resultSummary } = getPrettyResult();
    
    for (let i = 0; i < data.length; i++) {
      const resultItem = document.createElement('li');
      resultItem.classList.add('block');
      
      const resultText = document.createElement('p');
      resultText.innerText = result[i];
      resultItem.appendChild(resultText);
      
      const deleteBtn = document.createElement('button');
      deleteBtn.classList.add('button', 'delete');
      deleteBtn.innerText = 'Удалить';
      deleteBtn.onclick = () => {
        const confirmDelete = confirm(MESSAGES.confirm_delete)
        if (confirmDelete) {
          localStorageHandler.deleteByTitle(data[i].title);
          clipboardCopy();
        }
      };
      resultItem.appendChild(deleteBtn);
      resultContainer.appendChild(resultItem);
    }
    const summaryItem = document.createElement('li');
    summaryItem.innerText += 'Общий итог: ' + resultSummary + ' ₽';
    resultContainer.appendChild(summaryItem);
  } else {
    const resultItem = document.createElement('li');
    resultItem.innerText = MESSAGES.info_not_found
    resultContainer.appendChild(resultItem);
  }
};
