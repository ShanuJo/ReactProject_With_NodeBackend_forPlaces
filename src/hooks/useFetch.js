import { useEffect } from "react";

function useFetch(fetchFn, initialValue) {
  const [fetchedData, setFetchedData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(initialValue);

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const places = await fetchFn();
        setFetchedData(places);
      } catch (error) {
        setError({ message: error.message || "Failed to fetch data." });
      }

      setIsFetching(false);
    }

    fetchData();
  }, [fetchFn]);

  return { fetchedData, fetchedData, isFetching, error };
}
