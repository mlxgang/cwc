import { generateInput } from './generateInput.js';

export const generateBlock = (parentElem, name, inputList) => {
  const container = document.createElement('div');
  container.id = name + '-container'
  container.classList.add('optional')
  
  inputList.options.forEach(input => {
    if (inputList.name !== 'mixed') input.name = name
    if (inputList.type !== 'mixed') input.type = inputList.type
    container.appendChild(generateInput(input))
  })
  
  parentElem.insertAdjacentHTML('afterend', container.outerHTML)
}