import React from "react";
import MenuListItem from "./MenuListItem";
import MenuList from "./MenuList";

const TreeViewMenuUi = ({ menu = [] }) => {
  return (
    <div className="bg-slate-200 min-h-screen relative">
      <div className="bg-pink-300 w-[300px] absolute top-0 bottom-0 left-0">
        <h1 className="text-2xl font-semibold text-center">TreeViewMenuUi</h1>
        <MenuList menulist={menu} />
      </div>
    </div>
  );
};

export default TreeViewMenuUi;
