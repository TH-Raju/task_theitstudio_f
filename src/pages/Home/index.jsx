import React from "react";
import Table from "../../Components/Table";

const Home = ({tasks, refetch}) => {
  return (
    <div>
      <h1>Home</h1>
      <Table tasks={tasks} refetch={refetch} />
    </div>
  );
};

export default Home;
