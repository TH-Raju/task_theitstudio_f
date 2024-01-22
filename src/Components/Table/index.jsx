import React from "react";

const Table = () => {
  return (
    <div>
      <h1>Table Data</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Hobby</th>
              <th>Option</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>1</td>
              <td>Raju</td>
              <td>018</td>
              <td>gamil</td>
              <td>Coming</td>
              <th>
                <button className="btn btn-ghost btn-xs">update/delete</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
