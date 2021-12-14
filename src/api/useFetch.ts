import { useState, useRef, useEffect } from "react";

//can be moved to config
const url = "https://raw.githubusercontent.com/atanastulilov/json/main/data.json";

export default function useFetch(id: string) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function init() {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const json = await response.json();
          const item = json.data.find((j: { source: { urlSegment: string; }; }) => j.source.urlSegment === id)
          setData(item);
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