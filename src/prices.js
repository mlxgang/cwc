import { KEYS } from './constants.js';
import { dataPriceHandler } from './utils/dataPriceHandler.js';

export const prices = {
  pc_build: {
    _desc: 'Сборка ПК',
    get regular() {
      const title = 'Офисный';
      const price = 2000;
      return dataPriceHandler(this._desc, price, '', title);
    },
    get gaming() {
      const title = 'Игровой';
      const price = 2500;
      return dataPriceHandler(this._desc, price, '', title);
    }
  },
  os: {
    _desc: 'Установлена ОС',
    get windows_10() {
      const title = 'Windows 10.';
      const price = 2500;
      const key = 200;
      
      return {
        bios: this.getBios(title, price),
        need_to_buy: this.getNeed_to_buy(title, price, key),
        bought: this.getBought(title, price, key)
      };
    },
    get windows_11() {
      const title = 'Windows 11.';
      const price = 2500;
      const key = 300;
      
      return {
        bios: this.getBios(title, price),
        need_to_buy: this.getNeed_to_buy(title, price, key),
        bought: this.getBought(title, price, key)
      };
    },
    getBios(title, price) {
      return dataPriceHandler(this._desc, price / 2, title, KEYS.bios);
    },
    getNeed_to_buy(title, price, key) {
      return dataPriceHandler(this._desc, (price - key) / 2, title, KEYS.need_to_buy);
    },
    getBought(title, price, key) {
      return dataPriceHandler(this._desc, price / 2 + key, title, KEYS.bought);
    }
  },
  office: {
    _desc: 'Установлен MS Office',
    _price: 1500,
    _key: 400,
    get need_to_buy() {
      const price = (this._price - this._key) / 2;
      return dataPriceHandler(this._desc, price, '', KEYS.need_to_buy);
    },
    get bought() {
      const price = this._price / 2 + this._key;
      return dataPriceHandler(this._desc, price, '', KEYS.bought);
    },
    get client() {
      const price = this._price / 2;
      return dataPriceHandler(this._desc, price, '', KEYS.client);
    }
  },
  get copy() {
    const desc = 'Копирование информации';
    const price = 750;
    return dataPriceHandler(desc, price);
  }
};
