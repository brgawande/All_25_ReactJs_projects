import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const style = {
  py: 0,
  width: "100%",
  maxWidth: 360,
  borderRadius: 2,
  border: "1px solid",
  borderColor: "divider",
  backgroundColor: "background.paper",
};

export default function DividerVariants({ data, handleClick }) {
  return (
    <div>
      {data && data.length
        ? data.map((item, index) => (
            <div className="w-full flex flex-col gap-5">
              <h1 key={index} onClick={handleClick}>
                {item}
              </h1>
            </div>
          ))
        : null}
    </div>
  );
}
