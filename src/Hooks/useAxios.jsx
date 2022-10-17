import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";

const useAxios = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getApiData = async () => {
      setLoading(true);
      try {
        const result = await axios.get(url);
        setData(result.data);
        console.log(result.data);
      } catch (err) {
        setError(err.message);
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };
    getApiData();
  }, [url]);
  return { data, loading, error };
};

export default useAxios;
