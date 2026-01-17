export const generateInput = ({ title, name, value, checked, type }) => {
  const label = document.createElement('label');
  label.classList.add('input-label');
  
  const input = document.createElement('input');
  input.setAttribute('type', type);
  input.setAttribute('name', name);
  if (value) input.setAttribute('value', value);
  if (checked) input.setAttribute('checked', checked);

  label.append(input);
  if (type === 'text' || type === 'number') {
    input.setAttribute('placeholder', title)
  } else {
    label.append(title);
  }

  return label;
};