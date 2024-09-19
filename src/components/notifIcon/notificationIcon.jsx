import React from "react";

const NotificationIcon = ({ cart }) => {
  return (
    <>
      {cart.length ? (
        <span className="bg-red-400 text-white p-1 px-2 text-[10px] rounded-full absolute -top-2 -right-2">
          {cart.length}
        </span>
      ) : null}
    </>
  );
};

export default NotificationIcon;
