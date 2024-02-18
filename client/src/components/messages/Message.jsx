import React from "react";

const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            alt="user avatar"
          />
        </div>
      </div>
      
      <div className="chat-bubble text-white bg-black bg-opacity-25 border border-dmidnight_green-200">Pew Pew</div>
      <div className="chat-footer text-xs text-dmidnight_green3-600">12:00</div>
    </div>
  );
};

export default Message;
