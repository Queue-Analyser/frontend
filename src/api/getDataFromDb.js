import { getStartTime, getEndTime } from '../utils/date_format';

const getDataFromDb = async (interval) => {
  try {
    const url = `http://localhost:8080/getFromDb?start=${getStartTime()}&end=${getEndTime()}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();
    const modifiedData = {};
    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        const reversedData = data[key].slice().reverse(); // Разворачиваем массив
        const filteredData = [];
        let prevItemTime = null;
        for (const item of reversedData) {
          const currentItemTime = new Date(item.time);
          if (prevItemTime === null || prevItemTime - currentItemTime >= interval) {
            filteredData.unshift(item); // Вставляем элемент в начало массива
            prevItemTime = currentItemTime;
          }
        }
        modifiedData[key] = filteredData.slice(-15);
      }
    }
    return modifiedData;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { getDataFromDb };
