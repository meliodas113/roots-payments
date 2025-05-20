import { useState, useEffect } from "react";

export const useFetchPayments = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPayouts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://868b44bc-5e39-488f-9751-fa8fcaacbb53.mock.pstmn.io/payouts",
          {
            method: "GET",
            headers: {
              "x-api-key": "",
            },
          }
        );

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
