import AddForm from "./Components/AddForm";

function App() {
  return (
    <div className="pt-10 w-[80%] mx-auto">
      <div className="flex justify-between ">
        <h1 className="font-bold"> Hobbies</h1>
        <button
          className="btn btn-primary btn-xs text-xs"
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          + Add New Task
        </button>
      </div>
      <AddForm id={"my_modal_5"}/>
    </div>
  );
}

export default App;
