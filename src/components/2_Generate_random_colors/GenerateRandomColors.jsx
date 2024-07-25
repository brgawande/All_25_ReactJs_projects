import React, { useState } from "react";
import Button from "@mui/material/Button";

const GenerateRandomColors = () => {
  const [typeOfColors, setTypeOfcolors] = useState("rgb");
  const [bgcolors, setBgColors] = useState("rgb(0, 0, 0)");

  function randomValueGenerator(value) {
    return Math.floor(Math.random() * value);
  }

  console.log(typeOfColors);

  const randomRGBColorGenerator = () => {
    let r = randomValueGenerator(255);
    let g = randomValueGenerator(255);
    let b = randomValueGenerator(255);
    setBgColors(`rgb(${r},${g},${b})`);
    console.log(bgcolors);
  };
  const randomHEXColorGenerator = () => {
    let ranges = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let length = ranges.length;

    let hex = "#";
    for (let i = 1; i <= 6; i++) {
      let value = randomValueGenerator(length);
      hex += ranges[value];
    }
    console.log(hex);
    setBgColors(hex);
  };
  return (
    <div style={{ backgroundColor: bgcolors }} className={`min-h-screen`}>
      <div className="flex items-center justify-evenly py-5">
        <Button onClick={() => setTypeOfcolors("rgb")} variant="contained">
          Generate RGB Colors
        </Button>
        <Button onClick={() => setTypeOfcolors("hex")} variant="contained">
          Generate HEX Colors
        </Button>
        <Button
          onClick={
            typeOfColors === "rgb"
              ? randomRGBColorGenerator
              : randomHEXColorGenerator
          }
          variant="contained"
        >
          Generate Random Colors
        </Button>
      </div>
    </div>
  );
};

export default GenerateRandomColors;
