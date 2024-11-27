 
import React from "react";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import getCurrentSubscriptions from "@/actions/getCurrentSubscriptions";


const Navigation = async () => {
  const subscriptions = await getCurrentSubscriptions();

  return (
    <>
      <Navbar />
    </>
  );
};

export default Navigation;
