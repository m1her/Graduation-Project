"use client";
import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
export const HomeLayout = ({ children }) => {
  return (
    <div className="w-full h-full">
      <Navbar />
      <div className="flex justify-between gap-4">
        <Sidebar />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
