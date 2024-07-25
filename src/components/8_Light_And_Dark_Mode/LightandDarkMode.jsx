import React from "react";
import Button from "@mui/material/Button";

const LightandDarkMode = () => {
  return (
    <div className="dflex min-h-screen">
      <div className="flex flex-col items-center justify-center gap-10">
        <h1 className="text-5xl font-bold">Hello World !</h1>
        <Button variant="contained">Change Theme</Button>
      </div>
    </div>
  );
};

export default LightandDarkMode;
