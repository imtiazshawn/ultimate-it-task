"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Dashboard from "@/components/Dashboard";

const Home = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      setIsLoading(false);
    }
  }, []);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      {isLoading ? (
        <div className="vh-100 d-flex justify-content-center align-items-center">
          <div
            className="spinner-grow spinner-grow-lg text-success"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="wrapper">
          <Header />
          <div className="d-flex ">
            <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
            <Dashboard />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
