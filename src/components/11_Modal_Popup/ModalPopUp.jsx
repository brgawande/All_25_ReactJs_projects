import React, { useState } from "react";
import Button from "@mui/material/Button";
import PopupContaiuner from "./PopupContaiuner";

const ModalPopUp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <div className="dflex my-6">
        <Button onClick={() => setIsOpen(true)} variant="contained">
          Open Modal PopUp
        </Button>
      </div>
      {/* yaha pe handleClose call honga aur phir function call honga */}
      {isOpen && (
        <PopupContaiuner
          isOpen={isOpen}
          handleClose={handleClose}
          header={"This is Header"}
        />
      )}
    </div>
  );
};

export default ModalPopUp;
