import React, { useState } from "react";
import Button from "@mui/material/Button";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";

const CustomeTabs = () => {
  const [tabs, setTabs] = useState("tab1");
  console.log(tabs);
  return (
    <div>
      <div className="dflex gap-10 my-6">
        <Button onClick={() => setTabs("tab1")} variant="contained">
          Tab1
        </Button>
        <Button onClick={() => setTabs("tab2")} variant="contained">
          Tab2
        </Button>
        <Button onClick={() => setTabs("tab3")} variant="contained">
          Tab3
        </Button>
      </div>
      <div className="contentt">
        {tabs === "tab1" && <Tab1 />}

        {tabs === "tab2" && <Tab2 />}

        {tabs === "tab3" && <Tab3 />}
      </div>
    </div>
  );
};

export default CustomeTabs;
