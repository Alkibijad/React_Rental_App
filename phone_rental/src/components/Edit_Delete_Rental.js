import React from "react";
import { Link } from "react-router-dom";

function Edit_Delete_Rental({ allUsersData, deleteRent }) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>

          </tr>
        </thead>

        <tbody>
          {allUsersData.map((el, index) => {
            return (
              <tr key={index}>
                <td>{el.firstname}</td>
                <td>{el.lastname}</td>
                <td>{el.email}</td>
                <td><Link to={ `/edit/${index}`} className="btnEdit">Edit</Link></td>




                <td><button className="btnDelete" onClick={() => { 
                  deleteRent(index)
                }}>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Edit_Delete_Rental;
