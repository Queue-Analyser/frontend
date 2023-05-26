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
  