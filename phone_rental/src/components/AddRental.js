import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function AddRental({ addRent }) {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    firstname: null,
    lastname: null,
    email: null,
  });

  const onInputHandle = (e) => {
    let newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };

  const onChangeHandle = (e) => {
    e.preventDefault();
    addRent(user);
    navigate("/rentals")
    
  };

  return (
    <div className="add_rental_form">
      <form onSubmit={onChangeHandle}>
        <input
          type="text"
          id="firstname"
          name="firstname"
          placeholder="First Name"
          onChange={onInputHandle}
        />
        <input
          type="text"
          id="lastname"
          name="lastname"
          placeholder="Last Name"
          onChange={onInputHandle}
        />
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          onChange={onInputHandle}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default AddRental;
