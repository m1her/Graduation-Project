import Card from "@/components/Card";
import Link from "next/link";

function Login() {
  return (
    <Card>
      <form>
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-700">LeapStart</h1>
          <h1 className="text-2xl font-semibold mt-5 mb-4 text-gray-700">
            Log in to your account
          </h1>
        </div>
          <div class="mb-6">
            <label
              for="email"
              class="block mb-2 text-sm font-semibold text-gray-900"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:outline-none focus:border-gray-700 block w-full p-2"
              placeholder="john.doe@company.com"
              required
            />
          </div>
          <div class="mb-6">
            <label
              for="password"
              class="block mb-2 text-sm font-semibold text-gray-900"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:outline-none focus:border-gray-700 block w-full p-2"
              placeholder="•••••••••"
              required
            />
          </div>
        <button
          type="button"
          class="text-white dark:bg-indigo-500 bg-indigo-500 h-7 w-full hover:bg-indigo-700 focus:outline-none font-bold rounded text-sm px-5 py-1 mt-2 mr-2 mb-1"
        >
          Log in
        </button>

        <Link className="text-[#2D65E4] font-semibold text-sm self-end object-right ml-52" href="/SignUp">
          Forgot password?
        </Link>

        <div class="inline-flex items-center justify-center w-full">
          <hr class="w-80 h-px my-4 bg-gray-200 border-0 dark:bg-gray-400" />
          <span class="absolute px-1 text-xs font-bold text-gray-400 -translate-x-1/2 bg-white left-1/2 bg-white">
            OR
          </span>
        </div>

        <button
          type="button"
          class="text-white dark:bg-indigo-500 bg-indigo-500 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded text-sm w-full px-20 py-2.5 text-center content-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
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
        <div class="text-center">
        <hr class="h-px mt-2 mb-3 -mx-14 bg-gray-200 border-0 dark:bg-gray-300" />

        <Link
          className="text-[#2D65E4] font-bold text-center text-sm mt-10"
          href="/SignUp"
        >
          Don&#39;t have an account? Sign up
        </Link>
        </div>
      </form>
    </Card>
  );
}

export default Login;
