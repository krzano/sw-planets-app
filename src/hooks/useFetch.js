import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    const source = axios.CancelToken.source();
    axios
      .get(url, { cancelToken: source.token })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setIsError(true);
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
    return () => {
      source.cancel;
    };
  }, [url]);

  return { data, isLoading, isError };
};

export default useFetch;
