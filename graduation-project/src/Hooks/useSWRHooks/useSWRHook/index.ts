import useSWR from "swr";

import { API_ENDPOINT } from "data";
import { getAuthorizationHeader } from "utils";
import { fetcher } from "../utils";

// const fetcher = async (url: string) => {
//   const response = await fetch(url, {
//     headers: {
//       ...getAuthorizationHeader(),
//     },
//   });
//   const data = await response.json();
//   return data;
// };

export const useSWRHook = (url: string | null, options = {}, config = {}) => {
  const { data, error, isLoading, mutate } = useSWR(
    [`${API_ENDPOINT}${url}`, "get", options],
    fetcher,
    config
  );
  return { data, error, isLoading, mutate };
};

export default useSWRHook;
