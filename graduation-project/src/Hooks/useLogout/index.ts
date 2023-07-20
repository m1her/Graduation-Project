import { useRouter } from "next/navigation";
import { removeCookie } from "lib/js-cookie";
import { COOKIES_KEYS, URL_PATHS } from "data";
// import useLoading from "Hooks";

export const useLogout = () => {
  const router = useRouter();
  const logout = () => {
    router.push(URL_PATHS.AUTH.SIGN_IN);
    removeCookie(COOKIES_KEYS.currentUser);
  };
  return logout;
};

export default useLogout;
