import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";

const Home = () => {
  return (
    <div className="flex items-center justify-center min-w-80 md:w-[750px] lg:w-[850px] mx-auto sm:h-[450px] md:h-[550px] max-h-[600px]">
      <div className="w-full p-6 rounded-lg shadow-md shadow-black bg-dprussian_blue-200 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <div className="flex">
           
        <Sidebar />
        
        <MessageContainer />
      </div></div>
    </div>
  );
};

export default Home;
