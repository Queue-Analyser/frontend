import { getStartTime, getEndTime } from '../utils/date_format';

const getDataFromDb = async () => {
  try {
    const currentTime = new Date();
    const fifteenMinutesAgo = new Date(currentTime.getTime() - 15 * 60 * 1000);
    
    const url = `http://localhost:8080/getFromDb?start=${getStartTime()}&end=${getEndTime()}`;
    const response = await fetch(url);
    const dataText = await response.text();
    const dataArray = dataText.split('\n').slice(-15).map(Number);

    const data = dataArray.map((value, index) => {
      const time = new Date(fifteenMinutesAgo.getTime() + index * 60 * 1000);
      return { time: time.toLocaleTimeString(), people: value };
    });

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { getDataFromDb };
