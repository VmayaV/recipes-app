import { useState, useRef, useEffect } from "react";

//can be moved to config
const url = "https://raw.githubusercontent.com/atanastulilov/json/main/data.json";

export default function useFetchAll() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const json = await response.json();
          setData(json);
        } else {
          throw response;
        }
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    init();

  }, []);
  return { data, error, loading };
}