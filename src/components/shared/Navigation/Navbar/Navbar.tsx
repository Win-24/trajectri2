
import React from "react";
import Search from "./Search";
import Link from "next/link";
import NavigationHeader from "../NavigationHeader";
import UserOptions from "./UserOptions/UserOptions";


const Navbar = () => {
   
  return (
    <div className="fixed w-full bg-slate-300 z-20 h-16 px-2 flex flex-row justify-between items-center dark:bg-gray-700 dark:text-white">
      <NavigationHeader />
      <Search />
      <UserOptions />
    </div>
  );
};

export default Navbar;
