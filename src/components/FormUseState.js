import React, { useState } from "react";

const FormUseState = () => {
  const [formState, setFormState] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });

    console.log("useStateForm", formState);
  };

  return (
    <form>
      <label>First Name</label>
      <input
        type="text"
        placeholder="First name"
        onChange={(e) => handleChange(e)}
      />
      <label>Last Name</label>
      <input
        type="text"
        placeholder="Last name"
        onChange={(e) => handleChange(e)}
      />
      <label>Email</label>
      <input
        type="text"
        placeholder="Your email"
        onChange={(e) => handleChange(e)}
      />
      <label>About you</label>
      <input
        type="text"
        placeholder="Something about you"
        onChange={(e) => handleChange(e)}
      />
      <button type="submit" onClick={console.log("Submitted")}>
        Submit
      </button>
    </form>
  );
};

export default FormUseState;
