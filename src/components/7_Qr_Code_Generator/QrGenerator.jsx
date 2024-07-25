import React, { useState } from "react";
import QRCode from "react-qr-code";

const QrGenerator = () => {
  const [value, setValue] = useState("");

  const submitHandler = () => {
    e.preventDefault();
    setValue(value);
  };
  console.log(value);
  return (
    <div>
      <h1 className="text-3xl font-bold text-center py-2">QR Code Generator</h1>
      <div>
        <form action="" onSubmit={submitHandler}>
          <input
            type="text"
            name=""
            id=""
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter Your Value"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="w-[500px] m-auto">
        <QRCode
          size={16}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={value}
          viewBox={`0 0 26 26`}
        />
      </div>
    </div>
  );
};

export default QrGenerator;
