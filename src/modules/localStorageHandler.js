import { renderResult } from './renderResult.js';

export const localStorageHandler = {
  add(data) {
    const prevData = this.get();
    console.log(data);

    if (prevData) {
      window.localStorage.setItem('data', JSON.stringify([data, ...prevData]));
    } else {
      window.localStorage.setItem('data', JSON.stringify([data]));
    }
    renderResult();
  },

  get() {
    return JSON.parse(window.localStorage.getItem('data'));
  },

  deleteByTitle(title) {
    const prevData = this.get();

    const data = prevData.filter(item => item.title !== title);
    if (data.length === 0) {
      this.clear();
    } else {
      window.localStorage.setItem('data', JSON.stringify(data));
    }

    renderResult();
  },

  clear() {
    window.localStorage.clear();
    renderResult();
  },
};
