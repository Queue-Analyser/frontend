const fetchData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/getCurrentValue');
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  
  export { fetchData };
  