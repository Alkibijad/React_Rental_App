import React from "react";

function Rental({ allUsersData }) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {allUsersData.map((el, index) => {
            return (
              <tr key={index}>
                <td>{el.firstname}</td>
                <td>{el.lastname}</td>
                <td>{el.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Rental;
