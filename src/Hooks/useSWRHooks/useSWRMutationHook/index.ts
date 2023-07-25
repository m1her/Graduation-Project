import { useSWRMutation } from "lib/swr";
import { getAuthorizationHeader } from "utils";
import { fetcherParametersType, fetcherType } from "../types";
import axios from "lib/axios";
import { API_ENDPOINT } from "data";
// import { useCustomFetcher } from "../utils";

export const fetcher: fetcherType = async ([
  url,
  method,
  options,
]: fetcherParametersType) => {
  try {
    const response = await axios({
      url,
      method,
      ...options,
      headers: { ...getAuthorizationHeader() },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const useSWRMutationHook = (
  url: string,
  method = "get",
  options = {},
  config = {}
) => {
  const { trigger, data, error, isMutating } = useSWRMutation(
    [`https://worrisome-pocketbook-calf.cyclic.app${url}`, method, options],
    fetcher,
    config
  );
  /**
   *  pass the data  (body) to trigger function
   * @param body
   * @returns
   */
  function customTrigger(body: any) {
    const data: null | undefined | any = { data: body };
    return trigger(data);
  }

  return {
    trigger,
    customTrigger,
    data,
    error,
    isMutating,
  };
};

export default useSWRMutationHook;
