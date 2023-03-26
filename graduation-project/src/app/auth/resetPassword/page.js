import Card from "@/components/Card";
import Link from "next/link";

function Login() {
  return (
    <Card width="430">
      <form>
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-700">LeapStart</h1>
          <h1 className="text-2xl font-semibold mt-5 mb-4 text-gray-700">
            Reset Password
          </h1>
        </div>

        <div className="mb-6">
          <label
            htmlFor="newPassword"
            className="block mb-2 text-sm font-semibold text-gray-900"
          >
            New Password
          </label>
          <input
            id="newPassword"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:outline-none focus:border-gray-700 block w-full p-2"
            placeholder="Enter new password"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="confirmPassword"
            className="block mb-2 text-sm font-semibold text-gray-900"
          >
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:outline-none focus:border-gray-700 block w-full p-2"
            placeholder="Confirm new password"
            required
          />
        </div>
        <button
          type="button"
          className="text-white dark:bg-indigo-500 bg-indigo-500 h-9 w-full hover:bg-indigo-700 focus:outline-none font-bold rounded text-sm px-5 py-1 mt-2 mb-7 mr-2"
        >
          Password update
        </button>

      </form>
    </Card>
  );
}

export default Login;
