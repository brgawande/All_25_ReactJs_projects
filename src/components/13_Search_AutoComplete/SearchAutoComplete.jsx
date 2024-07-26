import React, { useState, useEffect } from "react";
import DividerVariants from "./DropDown";

const SearchAutoComplete = () => {
  const [loading, setLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState(null);
  const [dataArray, setDataArray] = useState([]);

  const [searchParams, setSearchParams] = useState("");
  const [showDrapDown, setShowDropDown] = useState(false);
  const [filteredUser, setFilteredUsers] = useState([]);

  function handleClick(e) {
    console.log(e.target.innerText);
  }

  const handleChange = (e) => {
    //   first we will recieve quer(means - few letters)
    const query = e.target.value.toLowerCase();
    setSearchParams(query);
    // now we will check it the user is typing at least 2 charecters
    if (query.length > 1) {
      // abb wo query se jo data match kar raha ho usse filteredUser ki array me dal dete hai
      const filteredData =
        dataArray && dataArray.length
          ? //   this fliteres that in the items this query is present or not
            dataArray.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropDown(true);
    } else {
      setShowDropDown(false);
    }
  };
  console.log(dataArray, filteredUser);

  const searchAutoCompleteHandler = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://dummyjson.com/users?limit=100");
      if (!response.ok) {
        throw new Error("no data found");
      }
      const data = await response.json();
      //   console.log("data", data);
      // to make the array short and get only first name
      if (data && data.users && data.users.length) {
        setDataArray(data?.users.map((userItem) => userItem?.firstName));
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      setErrorMessage(error);
    }
  };

  useEffect(() => {
    searchAutoCompleteHandler();
  }, []);
  //   console.log("dataArray", dataArray);
  return (
    <div>
      <div>
        <h1 className="text-2xl font-semibold text-center py-3">
          AutoComplete Search Bar
        </h1>
        <div className="dflex">
          {/* whenevrer we are typing and if there is any match we will show the dropdown */}
          <input
            className="bb rounded-md w-[50%] px-6 py-2"
            type="text"
            name=""
            id=""
            placeholder="Enter Text Here"
            value={searchParams}
            onChange={handleChange}
          />
        </div>
        {showDrapDown && (
          <div className="dflex w-[60%] m-auto pt-2">
            {/* we will take handle click method to display the selected element */}
            <DividerVariants data={filteredUser} handlerClick={handleClick} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchAutoComplete;
