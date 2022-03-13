import React from "react";

const Form = () => {
  return (
    <form>
      <label>First Name</label>
      <input type="text" placeholder="First name" />
      <label>Last Name</label>
      <input type="text" placeholder="Last name" />
      <label>Email</label>
      <input type="text" placeholder="Your email" />
      <label>About you</label>
      <input type="text" placeholder="Something about you" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
