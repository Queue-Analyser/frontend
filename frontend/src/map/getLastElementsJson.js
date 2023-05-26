export const getLastElementsJson = (jsonObj) => {
  const dataArray = Object.values(jsonObj);
  const arr = dataArray.map((subArray) => subArray.slice(-1)[0]);
  return arr;
};
