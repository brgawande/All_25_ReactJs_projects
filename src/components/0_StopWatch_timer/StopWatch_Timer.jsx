import React, { useRef, useState } from "react";
import Button from "@mui/material/Button";

const StopWatch_Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const intervalRef = useRef(null);

  const startHandler = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 59) {
            setMinutes((prevMinutes) => {
              if (prevMinutes === 59) {
                setHours((prevHours) => prevHours + 1);
                return 0;
              }
              return prevMinutes + 1;
            });
            return 0;
          }
          return prevSeconds + 1;
        });
      }, 1000);
    }
  };

  const stopHandler = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const resetHandler = () => {
    stopHandler();
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  };
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold text-center my-4">
          React StopWatch And Timer
        </h1>
        <h1 className="text-5xl font-bold my-10 text-center">
          {String(hours).padStart(2, "0")}:{String(minutes).padStart(2, "0")}:
          {String(seconds).padStart(2, "0")}
        </h1>
        <div className="buttons dflex gap-10">
          <Button onClick={startHandler} variant="contained">
            Start
          </Button>
          <Button onClick={stopHandler} variant="contained">
            Stop
          </Button>
          <Button onClick={resetHandler} variant="contained">
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StopWatch_Timer;
