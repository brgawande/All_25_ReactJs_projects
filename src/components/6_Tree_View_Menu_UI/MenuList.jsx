import React from "react";
import MenuListItem from "./MenuListItem";

const MenuList = ({ menulist = [] }) => {
  return (
    <div>
      <div>
        {menulist && menulist.length > 0
          ? menulist.map((listItem) => (
              <MenuListItem singleMenuItem={listItem} />
            ))
          : null}
      </div>
    </div>
  );
};

export default MenuList;
