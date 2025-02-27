export const KEYS = {
  bios: 'Ключ подцепился',
  need_to_buy: 'Нужно купить ключ',
  bought: 'Ключ покупал',
  client: 'Ключ от клиента'
};

export const MESSAGES = {
  info_not_found: 'Информации пока нет.',
  confirm_delete: 'Вы действительно хотите удалить?',
  confirm_reset: 'Вы действительно хотите все стереть?'
}

const PC_BUILD_INPUTS = {
  type: 'radio',
  options: [
    { title: 'Офисный', value: 'regular', checked: true },
    { title: 'Игровой', value: 'gaming', checked: false }
  ]
};

const OS_INPUTS = {
  type: 'radio',
  options: [
    { title: 'Windows 10', value: 'windows_10', checked: true },
    { title: 'Windows 11', value: 'windows_11', checked: false }
  ]
};

const OS_KEY_INPUTS = {
  type: 'radio',
  options: [
    { title: KEYS.bios, value: 'bios', checked: true },
    { title: KEYS.need_to_buy, value: 'need_to_buy', checked: false },
    { title: KEYS.bought, value: 'bought', checked: false }
  ]
};

const OFFICE_INPUTS = {
  type: 'radio',
  options: [
    { title: KEYS.need_to_buy, value: 'need_to_buy', checked: true },
    { title: KEYS.bought, value: 'bought', checked: false },
    { title: KEYS.client, value: 'client', checked: false }
  ]
};

const COPY_INPUTS = {
  type: 'checkbox',
  options: [{ title: 'Копирование' }]
};

const CUSTOM_INPUTS = {
  type: 'mixed',
  name: 'mixed',
  options: [
    { title: 'Название', name: 'custom_title', type: 'text' },
    { title: 'Стоимость', name: 'custom_price', type: 'number' }
  ]
};

export const INPUTS = [
  { name: 'pc_build', default: false, content: PC_BUILD_INPUTS },
  { name: 'os', default: true, content: OS_INPUTS },
  { name: 'os_key', default: true, content: OS_KEY_INPUTS },
  { name: 'office', default: false, content: OFFICE_INPUTS },
  { name: 'copy', default: false, content: COPY_INPUTS },
  { name: 'custom', default: false, content: CUSTOM_INPUTS }
];
