export const getLastElementsJson = (jsonObj) => {
  const dataArray = Object.values(jsonObj);
  return dataArray.map((subArray) => subArray.pop());
};