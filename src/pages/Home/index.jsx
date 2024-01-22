import React from "react";
import Table from "../../Components/Table";

const Home = ({ tasks, refetch }) => {
  return (
    <div>
      <Table tasks={tasks} refetch={refetch} />
    </div>
  );
};

export default Home;
