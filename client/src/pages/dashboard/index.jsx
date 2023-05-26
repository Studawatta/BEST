import { useState } from "react";
import { NavBar, Sidebar } from "../../components";

import { EmployeeForm } from "../../modules";

const Dashboard = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <div>
      <NavBar />
      <div className="mt-[50px] flex">
        <div>
          <Sidebar showForm={showForm} setShowForm={setShowForm} />
        </div>

        {/* MAIN_CONTIANER */}

        <div className="flex w-full  items-center justify-center">
          {showForm && <EmployeeForm />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
