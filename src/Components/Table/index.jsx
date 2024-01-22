import React from "react";
import toast from "react-hot-toast";

const Table = () => {
  const handleDeleteUser = (task) => {
    console.log("Delete", task);
    // fetch(
    //   `https://task-manage-9e14yw343-th-raju.vercel.app/api/v1/task/${task._id}`,
    //   {
    //     method: "DELETE",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.success) {
    //       toast.success("Task Deleted successfully");
    //       refetch();
    //     }
    //   });
  };
  return (
    <div>
      <h1>Table Data</h1>
      <div className="overflow-x-auto pb-20">
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
                <div className="border border-blue-700 rounded-lg">
                  <div className="dropdown ">
                    <label tabIndex={0} className="btn m-1 btn-xs">
                      option
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32"
                    >
                      <li>
                        <button
                          className="btn btn-primary btn-sm"
                          // onClick={() => handleMakeUser(task._id)}
                          //   onClick={() =>
                          //     document.getElementById(task._id).showModal()
                          //   }
                        >
                          Edit
                        </button>
                      </li>
                      <li>
                        <label
                          onClick={() => handleDeleteUser("task")}
                          htmlFor="confirmation-modal"
                          className="btn bg-red-600 mt-1 hover:bg-red-900 text-white  btn-sm "
                        >
                          Delete
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
