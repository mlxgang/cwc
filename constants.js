export const prices = {
  pc_build: {
    title: 'Сборка ПК: ',
    regular: {
      title: 'офсиный',
      price: 2000
    },
    gaming: {
      title: 'игровой',
      price: 2500
    }
  },
  os: {
    title: 'Установлена ОС: ',
    windows_10: {
      title: 'Windows 10',
      price: 2500,
      key: 200
    },
    windows_11: {
      title: 'Windows 11',
      price: 2500,
      key: 300
    }
  },
  office: {
    title: 'Установлен MS Office',
    price: 1500,
    key: 400
  },
  copy: {
    title: 'Копирование информации',
    price: 500
  }
};

export const pc_build_inputs = [
  { title: 'Офисный', value: 'regular', checked: true },
  { title: 'Игровой', value: 'gaming', checked: false }
]

export const office_inputs = [
  { title: 'Нужно купить ключ', value: 'need-to-buy', checked: true },
  { title: 'Ключ покупал', value: 'bought', checked: false },
  { title: 'Ключ от клиента', value: 'client', checked: false }
];
