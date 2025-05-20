import { useState, useEffect } from "react";

export const useFetchPayments = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPayouts = async () => {
      setLoading(true);
      try {
        const response = await fetch("", {
          method: "GET",
          headers: {
            "x-api-key": "",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);
        setData(json.data);
      } catch (err) {
        console.log(err);
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchPayouts();
  }, []);

  return { data, loading, error };
};
