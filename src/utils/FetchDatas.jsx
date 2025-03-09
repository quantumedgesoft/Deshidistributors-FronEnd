import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../components/config/Config";

// Generalized data fetching hook
function useDataFetcher({ endpoint, param }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        if (param === true) {
          const response = await axios.get(
            `${BASE_URL}${endpoint}/?all=${param}`
          );
          setData(response?.data?.results || response?.data);
        } if(param === false) {
          const response = await axios.get(`${BASE_URL}${endpoint}`);
          setData(response?.data?.results || response?.data);
        }
      } catch (error) {
        setError(error);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [endpoint]);

  return { data, isLoading, error };
}

export default useDataFetcher;
