export const getStartTime = () => {
    const currentTime = new Date();
    const fifteenMinutesAgo = new Date(currentTime.getTime() - 15 * 60 * 1000);
    const startYear = fifteenMinutesAgo.getFullYear();
    const startMonth = String(fifteenMinutesAgo.getMonth() + 1).padStart(2, '0');
    const startDay = String(fifteenMinutesAgo.getDate()).padStart(2, '0');
    const startHours = String(fifteenMinutesAgo.getHours()).padStart(2, '0');
    const startMinutes = String(fifteenMinutesAgo.getMinutes()).padStart(2, '0');
    const startSeconds = String(fifteenMinutesAgo.getSeconds()).padStart(2, '0');
    const startMilliseconds = String(fifteenMinutesAgo.getMilliseconds()).padStart(3, '0');
  
    return `${startYear}${startMonth}${startDay}${startHours}${startMinutes}${startSeconds}${startMilliseconds}`;
  };
  
  export const getEndTime = () => {
    const currentTime = new Date();
    const endYear = String(currentTime.getFullYear()).padStart(4, '0');
    const endMonth = String(currentTime.getMonth() + 1).padStart(2, '0');
    const endDay = String(currentTime.getDate()).padStart(2, '0');
    const endHours = String(currentTime.getHours()).padStart(2, '0');
    const endMinutes = String(currentTime.getMinutes()).padStart(2, '0');
    const endSeconds = String(currentTime.getSeconds()).padStart(2, '0');
    const endMilliseconds = String(currentTime.getMilliseconds()).padStart(3, '0');
  
    return `${endYear}${endMonth}${endDay}${endHours}${endMinutes}${endSeconds}${endMilliseconds}`;
  };

  export const getTimeFromString = (stringTime) => {
    const parse = stringTime.split(':').map(el => Number(el));
    const time = new Date();
    time.setHours(parse[0]);
    time.setMinutes(parse[1]);
    time.setSeconds(parse[2]);
    return time;
  }
  
  export const formatTime = (timeString) => {
    const date = new Date(timeString);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    return formattedTime;
  }
  
  function padZero(number) {
    return number.toString().padStart(2, '0');
  }