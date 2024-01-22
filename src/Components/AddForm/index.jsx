import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddForm = ({ id, refetch }) => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    // console.log(data);
    fetch(
      "https://task-theitstudio-backend-ozb62nwnw-th-raju.vercel.app/api/v1/task/create",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.success) {
          console.log(data);
          toast.success("Task Added Successfully.");
          document.getElementById("my_modal_5").close();
          refetch();
          reset();
        } else {
          toast.error("Can't added Task");
        }
      });
  };
  return (
    <div>
      <dialog
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle text-black"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg text-black">Set your Hobby</h3>

          <form
            onSubmit={handleSubmit(onSubmit)}
            action=""
            className="mx-auto mb-0 mt-3 max-w-md space-y-4"
          >
            <div>
              <label className={`block  my-2 font-bold`}>
                Name <span className="text-red-600">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter Your Name"
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
                  placeholder="Enter Your Phone Number"
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
                  placeholder="Enter Your Email"
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
                  placeholder="Write your Hobby"
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
                Create
              </button>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-warning">Close</button>
                </form>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default AddForm;
