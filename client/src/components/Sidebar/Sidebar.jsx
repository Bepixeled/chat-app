import React from "react";
import Search from "./Search";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
  return (
    <div  className="flex flex-col justify-between max-h-[650px]">
      <Search />
      <div className="divider px-3"></div>
      <Conversations />
      <div className="divider px-3"></div>
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
