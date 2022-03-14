import React from "react";
import { useSelector } from "react-redux";

const Userdetails = () => {
  const { value } = useSelector((state) => state.form);

  console.log(value);

  return (
    <div>
      {value &&
        Object.entries(value).map((field) => {
          return (
            <div>
              <h1>{field[0]}</h1>
              <p>{field[1]}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Userdetails;
