import React, { useState } from "react";
import toast from "react-hot-toast";
import EditModal from "../EditModal";
import { FaEye } from "react-icons/fa";
import { LuSendHorizonal } from "react-icons/lu";

const Table = ({ tasks, refetch }) => {
  const [selectedTasks, setSelectedTasks] = useState([]);
  const handleDeleteUser = (task) => {
    // console.log("Delete", task);
    fetch(
      `https://task-theitstudio-backend-ozb62nwnw-th-raju.vercel.app/api/v1/task/${task._id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("Hobby Deleted successfully");
          refetch();
        }
      });
  };

  const handleCheckboxChange = (taskId) => {
    setSelectedTasks((prevSelectedTasks) => {
      // Check if the task ID is already in the array
      const isTaskSelected = prevSelectedTasks.includes(taskId);

      if (isTaskSelected) {
        // If selected, remove it from the array
        const updatedArray = prevSelectedTasks.filter((id) => id !== taskId);
        // console.log(updatedArray); // Log the array when a checkbox is deselected
        return updatedArray;
      } else {
        // If not selected, add it to the array
        const updatedArray = [...prevSelectedTasks, taskId];
        // console.log(updatedArray); // Log the array when a checkbox is selected
        return updatedArray;
      }
    });
  };

  const send = () => {
    toast.error("Node mailer isn't used for paid purpose!");
  };
  return (
    <div>
      {selectedTasks?.length >= 1 && <h1> {selectedTasks.length} Selected</h1>}
      <div className="overflow-x-auto pb-20">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="">
                <label className="hidden">
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Hobby</th>
              <th>Option</th>
              <th>Send</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {tasks?.map((task, i) => (
              <tr>
                <th>
                  <label>
                    <input
                      type="checkbox"
                      onClick={() => handleCheckboxChange(task._id)}
                      checked={selectedTasks.includes(task._id)}
                      className="checkbox"
                    />
                  </label>
                </th>
                <td>{i + 1}</td>
                <td>{task.name}</td>
                <td>{task?.phone}</td>
                <td>{task?.email}</td>
                <td>
                  <button
                    className="btn btn-sm"
                    onClick={() =>
                      document.getElementById(task?._id).showModal()
                    }
                  >
                    <FaEye />
                  </button>
                  <dialog id={task?._id} className="modal">
                    <div className="modal-box">
                      <form method="dialog">
                        <button className="btn bg-yellow-300 btn-sm btn-circle btn-ghost absolute right-2 top-2">
                          ✕
                        </button>
                      </form>
                      <h3 className="font-bold text-lg">
                        {task?.name}'s Hobby
                      </h3>
                      <p className="py-4">{task?.hobbies}</p>
                    </div>
                  </dialog>
                </td>

                <th>
                  <div className=" rounded-lg">
                    <div className="dropdown ">
                      <label tabIndex={0} className="btn btn-info btn-xs">
                        option
                      </label>
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32"
                      >
                        <li>
                          <button
                            className="btn btn-primary btn-sm hover:text-black"
                            // onClick={() => handleMakeUser(task._id)}
                            onClick={() =>
                              document.getElementById(task?._id).showModal()
                            }
                          >
                            Edit
                          </button>
                          <EditModal
                            id={task._id}
                            task={task}
                            refetch={refetch}
                          />
                        </li>
                        <li>
                          <label
                            onClick={() => handleDeleteUser(task)}
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
                <td>
                  <button onClick={() => send()}>
                    <LuSendHorizonal />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
