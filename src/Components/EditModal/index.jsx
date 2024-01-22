/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

const EditModal = ({ id, task, refetch }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    // console.log(id);
    fetch(
      `https://task-theitstudio-backend-ozb62nwnw-th-raju.vercel.app/api/v1/task/update/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          document.getElementById(id).close();
          toast.success("updated successfully");
        }
        refetch();
        reset();
      });
  };

  return (
    <div>
      <dialog id={id} className="modal modal-bottom sm:modal-middle text-black">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-black">Update your Hobby</h3>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto mb-0 mt-3 max-w-md space-y-4"
          >
            <div>
              <label className={`block  my-2 font-bold`}>
                Name <span className="text-red-600">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  defaultValue={task?.name}
                  {...register("name", { required: true })}
                  className="w-full border  px-4 py-3 rounded-md border-gray-700 bg-white text-black focus:dark:border-violet-400"
                />
              </div>
            </div>
            <div>
              <label className={`block  my-2 font-bold`}>
                Phone Number <span className="text-red-600">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  defaultValue={task?.phone}
                  {...register("phone", { required: true })}
                  className="w-full border  px-4 py-3 rounded-md border-gray-700 bg-white text-black focus:dark:border-violet-400"
                />
              </div>
            </div>

            <div>
              <label className={`block my-2 font-bold`}>
                Email <span className="text-red-600">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  defaultValue={task?.email}
                  {...register("email", { required: true })}
                  className="w-full border  px-4 py-3 rounded-md border-gray-700 bg-white text-black focus:dark:border-violet-400"
                />
              </div>
            </div>

            <div>
              <label className={`block my-2 font-bold`}>
                Hobbies <span className="text-red-600">*</span>
              </label>
              <div className="relative">
                <textarea
                  type="text"
                  defaultValue={task?.hobbies}
                  {...register("hobbies", { required: true })}
                  className="w-full border  px-4 py-3 rounded-md border-gray-700 bg-white text-black focus:dark:border-violet-400"
                />
              </div>
            </div>

            <div className="flex items-baseline justify-end gap-4">
              <button
                type="submit"
                className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white hover:bg-blue-900 duration-150"
              >
                Update
              </button>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-warning">Cancel</button>
                </form>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default EditModal;
