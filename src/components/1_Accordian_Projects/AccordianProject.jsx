import React, { useState } from "react";
import { accordiandata } from "./Accordiandata";
import Button from "@mui/material/Button";

const AccordianProject = () => {
  const [enableMultipleSelect, setEnableMultipleSelect] = useState(false);
  const [showAnswer, setShowAnswer] = useState(null);
  const [multipleItems, setMultipleItems] = useState([]);

  const showanswerHandler = (getCurrentId) => {
    //   if the current id is already selected then make it null otherwise add getCurrentId
    setShowAnswer(getCurrentId === showAnswer ? null : getCurrentId);
  };

  const enableMultiSelectHandler = (index) => {
    if (multipleItems.indexOf(index + 1) === -1) {
      multipleItems.push(index + 1);
    }
    console.log(multipleItems);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-4">
        Accordian Projects
      </h1>
      <div
        onClick={() => setEnableMultipleSelect(!enableMultipleSelect)}
        className="dflex my-6"
      >
        <Button variant="contained">Enable Multiple Selection</Button>
      </div>

      <div>
        <div className="faqs">
          {accordiandata && accordiandata.length > 0 ? (
            <div className="flex flex-col gap-4 w-[90%] md:w-[60%] m-auto">
              {accordiandata.map((item, index) => (
                <div key={item?.id} className="bg-blue-950 text-white px-4">
                  <div
                    onClick={
                      enableMultipleSelect
                        ? () => enableMultiSelectHandler(index)
                        : () => showanswerHandler(item?.id)
                    }
                    className="flex items-center justify-between"
                  >
                    <h1>{item?.question}</h1>
                    <h1 className="text-3xl mb-1 cursor-pointer">+</h1>
                  </div>
                  {showAnswer === item?.id ? (
                    <div className="py-2">
                      <h1>{item?.answer}</h1>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default AccordianProject;
