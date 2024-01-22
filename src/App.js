import AddForm from "./Components/AddForm";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";

function App() {
  const { data: tasks = [], refetch } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/api/v1/task");
      const data = await res.json();
      return data?.data;
    },
  });
  console.log(tasks);

  return (
    <div className="pt-10 w-[80%] mx-auto">
      <div className="flex justify-between ">
        <h1 className="font-bold"> Hobbies</h1>
        <button
          className="btn btn-primary btn-xs text-xs"
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          + Add New Hobby
        </button>
      </div>
      <Toaster />
      <AddForm id={"my_modal_5"} refetch={refetch}/>
      <Home tasks={tasks} refetch={refetch} />
    </div>
  );
}

export default App;
