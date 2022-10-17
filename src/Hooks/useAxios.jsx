import axios from "axios";
import { useState, useEffect, useCallback } from "react";

const useAxios = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getApiData = useCallback(async () => {
    setLoading(true);
    try {
      const result = await axios.get(url);
      setData(result.data);
      console.log("Axios Hook data: ");
      console.table(result.data);
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  }, [url]);

useEffect(() => {
  getApiData();
}, [getApiData]);

  return { data, loading, error };
};

export default useAxios;
