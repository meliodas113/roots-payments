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
              "x-api-key":
                "PMAK-68029b1593992d0001e3b2a1-cc4be6ff131c3cc39e34ca55cb64b2a1c5",
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
