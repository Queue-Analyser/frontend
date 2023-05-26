const getCurrentValue = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:8080/getCurrentValue?id=${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  
  export { getCurrentValue };
  