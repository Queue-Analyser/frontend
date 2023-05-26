import { getStartTime, getEndTime } from '../utils/date_format';

const getDataFromDb = async () => {
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
        modifiedData[key] = data[key].slice(-15);
      }
    }
    return modifiedData;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { getDataFromDb };
