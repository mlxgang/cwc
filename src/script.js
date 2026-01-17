import { INPUTS, MESSAGES } from './constants.js';
import { localStorageHandler } from './modules/localStorageHandler.js';
import { renderResult } from './modules/renderResult.js';
import { clipboardCopy } from './utils/clipboardCopy.js';
import { generateBlock } from './utils/generateBlock.js';
import { generateInput } from './utils/generateInput.js';

const resetBtn = document.getElementById('clear');
resetBtn.addEventListener('click', () => {
  const data = localStorageHandler.get();
  if (!data) return;

  const confirmDelete = confirm(MESSAGES.confirm_reset);
  if (confirmDelete) {
    localStorageHandler.clear();
  }
});

const copyBtn = document.getElementById('copy-to-clipboard');
copyBtn.addEventListener('click', clipboardCopy);

renderResult();

const form = document.forms.cart;

INPUTS.forEach(input => {
  const rootElem = document.getElementById(`${input.name}-elem`);

  if (rootElem.type === 'button') {
    rootElem.addEventListener('click', e => {
      e.preventDefault();
      rootElem.classList.toggle('active');

      if (rootElem.classList.contains('active')) {
        generateBlock(rootElem, input.name, input.content);
      } else {
        document.getElementById(`${input.name}-container`).remove();
      }
    });

    if (input.default) rootElem.click();
  } else {
    const inputElem = input
    inputElem.title = input.content.title
    inputElem.type = input.content.type

    rootElem.append(generateInput(inputElem))
  }
});

form.onsubmit = e => {
  e.preventDefault();
  const formData = new FormData(form);

  const data = {};
  for (const [key, value] of formData) {
    data[key] = value;
  }
  data.completedAt = new Date().toLocaleDateString('ru');

  localStorageHandler.add(data);
  clipboardCopy();
};
