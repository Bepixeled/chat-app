import React from "react";

const Conversation = () => {
  return (
    <>
    <div className="flex gap-2 items-center hover:bg-dcaribbean_current-300 rounded p-3 py-1 cursor-pointer">
      <div className="avatar online">
        <div className="w-12 rounded-full">
          <img
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            alt="user avatar"
          />
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <div >
            <p className="font-poppins font-bold text-white">Username</p>
        </div>
      </div>
    </div>

<div className="divider my-1 py-1 h-1"></div>


</>

  );
};

export default Conversation;
