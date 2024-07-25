import React from "react";
import MenuList from "./MenuList";

const MenuListItem = ({ singleMenuItem }) => {
  console.log(singleMenuItem);
  return (
    <div>
      <h1>{singleMenuItem.label}</h1>
      {singleMenuItem &&
      singleMenuItem.children &&
      singleMenuItem.children.length > 0 ? (
        <MenuList menulist={singleMenuItem.children} />
      ) : null}
    </div>
  );
};

export default MenuListItem;
