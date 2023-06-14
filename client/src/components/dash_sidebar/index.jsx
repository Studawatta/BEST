import { HiOutlineHome } from "react-icons/hi";
import { Admin_Sidebar_Items } from "../../data";
import SidebarItem from "./SidebarItem";

const Sidebar = ({ showForm, setShowForm }) => {
  return (
    <div>
      <div className=" flex h-[calc(100vh-50px)] w-[250px] items-center justify-center border-r-2 border-[#ccc] ">
        <div className="h-[calc(100%-30px)] w-[80%]">
          {/* LEFT_BAR_HEADER */}

          <div className="flex  py-1 ">
            <span className="flex items-center gap-5 text-[16px] font-bold text-blue-600 ">
              <HiOutlineHome className="text-[18px]" />
              Dashboard
            </span>
          </div>

          {/* LEFT_BAR_ITEMS */}

          {Admin_Sidebar_Items.map((item) => (
            <SidebarItem
              key={item.header}
              {...item}
              showForm={showForm}
              setShowForm={setShowForm}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
