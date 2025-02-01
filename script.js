import { office_inputs, pc_build_inputs, prices } from './constants.js';
import { clipboardCopy, generateInput, officeHandler, osKeyHandler } from './utils.js';

const form = document.forms.cart;

const pcBuildDropdown = document.getElementById('pc_build_option')
let isPcBuildDropdown = false

pcBuildDropdown.addEventListener('click', () => {
  if (!isPcBuildDropdown) {
    isPcBuildDropdown = true
    
    const container = document.createElement('div');
    container.id = 'pc_build_container'
    container.classList.add('optional')
    
    pc_build_inputs.forEach(input => {
      input.name = 'pc_build'
      container.appendChild(generateInput(input))
    })
    
    pcBuildDropdown.insertAdjacentHTML('afterend', container.outerHTML)
  } else {
    isPcBuildDropdown = false
    document.getElementById('pc_build_container').remove()
  }
})

const officeDropdown = document.getElementById('office_option')
let isOfficeDropdown = false

officeDropdown.addEventListener('click', () => {
  if (!isOfficeDropdown) {
    isOfficeDropdown = true
    
    const container = document.createElement('div');
    container.id = 'office_container'
    container.classList.add('optional')
    
    office_inputs.forEach(input => {
      input.name = 'office'
      container.appendChild(generateInput(input))
    })
    
    officeDropdown.insertAdjacentHTML('afterend', container.outerHTML)
  } else {
    isOfficeDropdown = false
    document.getElementById('office_container').remove()
  }
})

form.onsubmit = (e) => {
  e.preventDefault();
  const data = new FormData(form)
  
  let summary = 0
  let result = '';
  
  for (const [key, value] of data) {
    if (value) {
      if (key === 'title') result += value + '\n'
      
      if (key === 'pc_build' || key === 'os' || key === 'office') {
        const { title } = prices[key]
        const work = prices[key][value]
        
        switch (key) {
          case 'pc_build':
            result += title + work.title + ' - ' + work.price + '\n'
            summary += work.price
            break;
          case 'os':
            const osKey = data.get('os_key')
            const osInfo = osKeyHandler([work, osKey])
            result += title + work.title + '. ' + osInfo.text + '\n'
            summary += osInfo.price
            break;
          case 'office':
            const officeInfo = officeHandler([prices[key], value])
            result += title + '. ' + officeInfo.text + '\n'
            summary += officeInfo.price
            break;
          default:
            console.warn('необработанное значение: ', key, value)
        }
      }
      
      if (key === 'copy') result += prices[key].title + ' - ' + prices[key].price + '\n'
      if (key === 'note') result += value + '\n'
    }
  }
  
  result += 'Итого: ' + summary + '₽'
  clipboardCopy(result)
}
