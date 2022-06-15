import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Edit({ allUsersData, editRent }) {
  const params = useParams();
  const [data, setData] = useState({
    firstname: null,
    lastname: null,
    email: null,
  });

  useEffect(() => {
    setData(allUsersData[params.index]);
  }, []);

  const onInputHandle = (e) => {
    let updatedData = [...data];
    updatedData[e.target.name] = e.target.value;
    setData(updatedData);
  };

  const onChangeHandle = () => {
    console.log("on change Handle");
  };
  return (
    <div className="add_rental_form">
      <p>Edit Form</p>
      <form onSubmit={onChangeHandle}>
        <input
          value={data.firstname}
          type="text"
          id="firstname"
          name="firstname"
          onChange={onInputHandle}
        />
        <input
          //   value={data.lastname}
          type="text"
          id="lastname"
          name="lastname"
          placeholder="Last Name"
          onChange={onInputHandle}
        />
        <input
          //   value={data.email}
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

export default Edit;
