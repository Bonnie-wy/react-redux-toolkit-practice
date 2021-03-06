import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { onChange, handleSubmit } from "../features/form";
const Form = () => {
  const { value } = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const processSubmit = (e) => {
    e.preventDefault();

    handleSubmit();

    console.log(value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    dispatch(onChange({ [name]: value }));

    console.log(value);
  };

  return (
    <form>
      <label>First Name</label>
      <input
        name="firstname"
        type="text"
        placeholder="First name"
        onChange={(e) => handleChange(e)}
      />
      <label>Last Name</label>
      <input
        name="lastname"
        type="text"
        placeholder="Last name"
        onChange={(e) => handleChange(e)}
      />
      <label>Email</label>
      <input
        name="email"
        type="text"
        placeholder="Your email"
        onChange={(e) => handleChange(e)}
      />
      <label>About you</label>
      <input
        name="bio"
        type="text"
        placeholder="Something about you"
        onChange={(e) => handleChange(e)}
      />
      <button type="submit" onClick={(e) => processSubmit(e)}>
        Submit
      </button>
      {/* <button type="submit" onClick={(e) => handleSubmit(e)}>
        Submit
      </button> */}
    </form>
  );
};

export default Form;
