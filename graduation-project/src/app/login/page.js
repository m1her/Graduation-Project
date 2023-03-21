import Card from "@/components/Card";

function Login() {
  return (
    <Card>
      <form>
        <div className="text-center">
        <h1 className="text-2xl font-bold">Logo</h1>
        <h1 className="text-2xl font-semibold">Log in to your account</h1>
        </div>
        <div className="mb-7">
          <p className="text-base font-semibold mb-2"> Email* </p>
          <input type={"email"} />
        </div>
        <div className="mb-7">
          <p className="text-base font-semibold mb-2"> Password* </p>
          <input type={"password"} />
        </div>
        <button title={"Login"} type="submit" />

        <a className="text-[#2D65E4]" to="/SignUp">
          {" "}
          Forgot password?{" "}
        </a>

        <div class="inline-flex items-center justify-center w-full">
          <hr class="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-400" />
          <span class="absolute px-1 text-xs font-bold text-gray-400 -translate-x-1/2 bg-white left-1/2 bg-white">
            OR
          </span>
        </div>

        <button
          type="button"
          class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
        >
          <svg
            class="w-4 h-4 mr-2 -ml-1"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
          >
            <path
              fill="currentColor"
              d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
            ></path>
          </svg>
          Sign in with Google
        </button>

        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

        <a
          className="text-[#2D65E4] font-semibold text-center mt-10"
          to="/SignUp"
        >
          Don&#39;t have an account? Sign up
        </a>
      </form>
    </Card>
  );
}

export default Login;
