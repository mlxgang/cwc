export const generateInput = ({ title, name, value, checked }) => {
  const label = document.createElement('label');
  
  const input = document.createElement('input');
  input.setAttribute('type', 'radio');
  input.setAttribute('name', name);
  input.setAttribute('value', value);
  if (checked) {
    input.setAttribute('checked', checked);
  }
  
  label.innerText = title;
  label.appendChild(input);
  
  return label;
};

export const osKeyHandler = ([data, value]) => {
  let text
  let price
  switch (value) {
    case 'bios':
      text = 'Ключ подцепился - '
      price = data.price / 2
      break;
    case 'need-to-buy':
      text = 'Нужно купить ключ - '
      price = (data.price - data.key) / 2
      break;
    case 'bought':
      text = 'Ключ покупал - '
      price = data.price / 2 + data.key
      break;
  }
  return { text: text + price, price };
}

export const officeHandler = ([data, value]) => {
  let text
  let price
  switch (value) {
    case 'need-to-buy':
      text = 'Нужно купить ключ - '
      price = (data.price - data.key) / 2;
      break;
    case 'bought':
      text = 'Ключ покупал - '
      price = data.price / 2 + data.key;
      break;
    case 'client':
      text = 'Ключ от клиента - '
      price = data.price / 2;
      break;
  }
  return { text: text + price, price };
}

export const clipboardCopy = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    console.log('Скопировано в буфер!');
  } catch (err) {
    console.error('Ошбика копирования: ', err);
  }
}