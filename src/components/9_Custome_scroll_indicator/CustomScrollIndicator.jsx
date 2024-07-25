import { document } from "postcss";
import React, { useEffect, useState } from "react";

const CustomScrollIndicator = () => {
  const link = "https://dummyjson.com/todos?limit=100";
  const [dataArray, setDataArray] = useState([]);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(link);
        if (!response.ok) {
          throw new Error("No Data Found");
        }
        const data = await response.json();
        if (data && data.todos.length > 0) {
          setDataArray(data.todos);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  //   console.log(dataArray);
  const handleScrollPercentage = () => {
    const doc = document.documentElement;
    if (doc) {
      const { scrollTop, scrollHeight, clientHeight } = doc;
      const winScroll = scrollTop;
      const height = scrollHeight - clientHeight;
      const scrolled = (winScroll / height) * 100;
      console.log(scrolled);
      setScrollPercentage(scrolled);
    }
  };

  useEffect(() => {
    const handleScroll = () => handleScrollPercentage();

    window.addEventListener("scroll", handleScroll);

    // Initial call to set the scroll percentage
    handleScrollPercentage();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="relative">
        <h1 className="text-4xl py-2 pb-5 font-bold text-center bg-green-900 text-white fixed top-0 left-0 right-0">
          Custom Scroll Indicator
        </h1>
        <div
          style={{
            width: "100%",
            backgroundColor: "#f1f1f1",
            position: "fixed",
            top: 0,
          }}
        >
          <div
            style={{
              width: `${scrollPercentage}%`,
              height: "4px",
              backgroundColor: "#4caf50",
            }}
          />
        </div>
        <div className="mt-10 h-[50px]"></div>
        {dataArray && dataArray.length > 0
          ? dataArray.map((item, index) => (
              <h1
                className="text-2xl font-semibold py-2 text-center"
                key={index}
              >
                {item?.todo}
              </h1>
            ))
          : null}
      </div>
    </div>
  );
};

export default CustomScrollIndicator;
