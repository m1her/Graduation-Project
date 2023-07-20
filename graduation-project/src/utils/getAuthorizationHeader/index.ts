import { getCookie } from "lib/js-cookie";
import { COOKIES_KEYS } from "data";

export const getAuthorizationHeader = () => {
  const currentUser = getCookie(COOKIES_KEYS.currentUser);
  const token = localStorage.getItem("Token");

  return {
    Authorization: `Bearer ${currentUser?.accessToken || token || ""}`,
  };
};

export default getAuthorizationHeader;
