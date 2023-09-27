import React, { useEffect } from "react";

const cardList = ["", "", "", "", "", "", ""];

const Kv = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="flex w-screen flex-wrap min-h-screen">
        {cardList.map((card, index) => {
          return (
            <div key={index} className={`w-1/4 bg-gray-300`}>
              {card}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Kv;
