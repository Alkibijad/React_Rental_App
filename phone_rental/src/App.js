import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

import Rental from "./components/Rental";
import AddRental from "./components/AddRental";
import Edit_Delete_Rental from "./components/Edit_Delete_Rental";
import Edit from "./components/Edit";

function App() {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
 
    if (localStorage.hasOwnProperty("rents")) {
      setAllUsers(JSON.parse(localStorage.getItem("rents")));
    }
  }, []);

  const saveToLocalStorage = (allUsers) => {
    localStorage.setItem("rents", JSON.stringify(allUsers));
  };

  const addRent = (rent) => {
    let copyAllUsers = [...allUsers];
    copyAllUsers.push(rent);
    setAllUsers(copyAllUsers);
    saveToLocalStorage(copyAllUsers);
  };

  const deleteRent = (index) => {
    let copyAllUsers = [...allUsers];
    copyAllUsers.splice(index, 1);
    setAllUsers(copyAllUsers);
    saveToLocalStorage(copyAllUsers);
    console.log("delete rent index", index);
  };

  const editRent = () => { 
    console.log('radi');
  }

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/rentals"
          element={<Rental allUsersData={allUsers} />}
        ></Route>
        <Route
          path="/add_rental"
          element={<AddRental addRent={addRent} />}
        ></Route>
        <Route
          path="/edit_delete_rental"
          element={
            <Edit_Delete_Rental
              allUsersData={allUsers}
              deleteRent={deleteRent}
            />
          }
        ></Route>
        <Route path="/edit/:index" element={allUsers.length && <Edit allUsersData={allUsers} editRent={editRent} /> } />
      </Routes>
    </div>
  );
}

export default App;
