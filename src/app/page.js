"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Home() {

  return (
    <body className="bg-[#a5b4fc] select-none ">
      <motion.div
        id="container"
        className="fixed top-0 left-0 w-full h-screen flex justify-center items-center"
        initial={{scale: 1}}
      >
        <motion.div className="flex justify-between items-center text-indigo-500 z-20">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-52 h-52"
            initial={{ x: "-80vw", y: "100vh", scale: 1 }}
            animate={{
              x: 0,
              y: 0,
              scale: [1, 1, 1, 2, 1],
              transition: {
                type: "tween",
                duration: 2,
                ease: "linear",
              },
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
            />
          </motion.svg>
          <div className="flex flex-col">
            <motion.div
              className="font-semibold text-4xl ml-4"
              initial={{ opacity: 0, x: 110, y: -37 }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 2.2,
                duration: 0.4,
              }}
            >
              Leap Start
            </motion.div>
            <motion.div
              initial={{ width: 0, y: -37 }}
              animate={{ width: "94%" }}
              transition={{ duration: 0.6, delay: 2.8 }}
              style={{
                height: "3px",
                background: "#6366f1",
                position: "relative",
                marginLeft: "15px",
                marginTop: "4px",
              }}
            ></motion.div>
          </div>

          <motion.div
            className="flex -mr-2 -mb-2 pt-10"
            initial={{ x: -172, y: 0, scale: 0.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.3,
              delay: 3.4,
              type: "spring",
              stiffness: 120,
            }}
          >
            <motion.a
              className="text-center bg-indigo-500 ml-2 text-white w-1/2 -semibold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-indigo-500 dark:hover:bg-indigo-700 focus:outline-none"
              href="/authentication/login"
              whileHover={{ scale: 1.1, backgroundColor: "#4C51BF" }}
              transition={{ type: "tween", duration:0.1 }}
            >
              Login
            </motion.a>
            <motion.a
              className="text-center bg-indigo-500 text-white w-1/2 font-semibold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-indigo-500 dark:hover:bg-indigo-700 focus:outline-none"
              href="/authentication/sign-up"
              whileHover={{ scale: 1.1, backgroundColor: "#4C51BF" }}
              transition={{ type: "tween", duration:0.1 }}
            >
              Signup
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </body>
  );
}
