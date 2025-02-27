import { localStorageHandler } from './localStorageHandler.js';

export const getDateTitle = () => {
  const rawData = localStorageHandler.get()
  return rawData.at(-1) === rawData.at(0)
    ? `Работа за ${rawData.at(0).completedAt}\n`
    : `Работы с ${rawData.at(-1).completedAt} по ${rawData.at(0).completedAt}\n`
}
