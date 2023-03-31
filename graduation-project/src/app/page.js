import Link from "next/link";
import { Roboto } from "next/font/google";
import './globals.css';

const roboto = Roboto({
  weight: "700",
  subsets: ["latin"],
});
//"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
export default function Home() {
  return (
    <body className="bg-[#a5b4fc]">
      <main className={roboto.className}>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] grid rounded shadow-sm md:grid-cols-2">
          <figure className="flex flex-col bg-white  border-gray-200 dark:border-gray-700 rounded-l">
            <blockquote className="max-w-2xl mx-auto mb-4 lg:mb-8">
              <div className="bg-gray-100 rounded m-8 mb-0 p-3 drop-shadow-md">
                <h1 className="text-4xl font-semibold text-indigo-900 pl-5">
                  LeapStart
                </h1>
                <p className="my-4 leading-6 text-lg">
                  LeapStart can provide aspiring entrepreneurs with a{" "}
                  <span className="text-indigo-900">strong foundation </span>
                  to pursue their aspirations and{" "}
                  <span className="text-indigo-900">
                    turn their dreams into reality.
                  </span>
                </p>
              </div>
            </blockquote>
            <div className="bg-gray-100 rounded mt-0 m-8 p-3 drop-shadow-md">
              <p className="text-lg font-semibold text-indigo-900">
                Some of LeapStart features:
              </p>
              <div className="text-base">
                <span>
                  Calenders
                  <br />
                  Chat
                  <br />
                  Video Meetings
                  <br />
                  Paypal payment
                  <br />
                  Ratings
                </span>
              </div>
            </div>
          </figure>
          <figure className="flex flex-col p-8 bg-white border-gray-200 dark:border-gray-700 rounded-r">
            <blockquote className="max-w-2xl mx-auto mb-4 lg:mb-8">
              <div className="bg-gray-100 rounded p-3 drop-shadow-md">
                <h3 className="text-lg font-semibold text-indigo-900">
                  How you can benefit from LeapStart?
                </h3>
                <p className="my-3">
                  After you create your account you have two choices:
                  <br />
                  continue as a <span className="text-indigo-900">
                    user
                  </span>{" "}
                  who is looking for experience, or apply to become an{" "}
                  <span className="text-indigo-900">expert</span> and share your
                  knowledge with others
                  <br />
                  .. Make sure to have a valid{" "}
                  <span className="text-indigo-900">paypal</span> account to get
                  your full benefits
                </p>
              </div>
            </blockquote>
            <div className="flex -mr-2 -mb-2 pt-10">
              <Link
                className="text-center bg-indigo-500 ml-2 text-white w-1/2 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-indigo-500 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-blue-800"
                href="/auth/login"
              >
                Login
              </Link>
              <Link
                className="text-center bg-indigo-500 ml-2 text-white w-1/2 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-indigo-500 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-blue-800"
                href="/auth/login"
              >
                Signup
              </Link>
            </div>
          </figure>
        </div>
      </main>
    </body>
  );
}
