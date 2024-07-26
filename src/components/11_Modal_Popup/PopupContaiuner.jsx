import React from "react";
import { GiSplitCross } from "react-icons/gi";

const PopupContaiuner = ({ isOpen, handleClose, header }) => {
  if (!isOpen) return null;
  return (
    <div>
      <div className="bb w-[80%] md:w-[70%] lg:w-[60%] m-auto relative">
        <GiSplitCross
          //   yaha pe click karne se handle close activate ho jayenga aur parent ka function call honga
          onClick={handleClose}
          className="absolute right-5 top-2 text-3xl"
        />
        <div className="header bb py-6 dflex">
          <h1 className="text-2xl font-bold">{`${header}`}</h1>
        </div>
        <div className="body bb py-20 dflex">
          <h1 className="text-2xl font-bold">Body Section</h1>
        </div>
        <div className="footerr bb py-6 dflex">
          <h1 className="text-2xl font-bold">Footer Section</h1>
        </div>
      </div>
    </div>
  );
};

export default PopupContaiuner;
