export const generateInput = ({ title, name, value, checked, type }) => {
  const label = document.createElement('label');
  
  const input = document.createElement('input');
  input.setAttribute('type', type);
  input.setAttribute('name', name);
  if (value) input.setAttribute('value', value);
  if (checked) input.setAttribute('checked', checked);
  
  
  if (type === 'text' || type === 'number') {
    input.setAttribute('placeholder', title)
  } else {
    label.innerText = title;
  }
  label.appendChild(input);
  
  return label;
};