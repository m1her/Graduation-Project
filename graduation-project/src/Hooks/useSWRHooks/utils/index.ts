import axios from "lib/axios";
import { getAuthorizationHeader } from "utils";
import { fetcherParametersType, fetcherType } from "../types";
import { getCookie, setCookie } from "lib/js-cookie";
import { COOKIES_KEYS } from "data";
import { useRouter } from "next/router";
// import { useSession } from "next-auth/react";

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
// /**
//  *
//  * @param Array [url:string, method:string,options:object]
//  * @param Object {body:body}
//  * @returns
//  */
// export const useCustomFetcher = () => {
//   const { data: user } = useSession();
//   const fetcher: fetcherType = async (
//     [url, method, options]: fetcherParametersType,
//     { arg }: any | undefined
//   ) => {
//     try {
//       const response = await axios({
//         url,
//         method,
//         ...(arg ? arg : options),
//         headers: { Authorization: `Bearer ${user?.user?.accessToken}` },
//       });

//       return response.data;
//     } catch (error) {
//       return error;
//     }
//   };
//   return fetcher;
// };
