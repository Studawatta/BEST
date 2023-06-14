import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const SidebarItem = ({ subHeaders, header, icon, showForm, setShowForm }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  console.log("onItem", showForm);

  return (
    <div>
      <div
        className="flex cursor-pointer  items-center justify-between py-3 text-slate-500 hover:text-blue-500"
        onClick={() => setShowDropDown(!showDropDown)}
      >
        <div className="flex  items-center gap-5 font-semibold  hover:text-blue-500 ">
          <span className="text-[18px]">{icon}</span>
          {header}
        </div>
        <AiOutlinePlus className=" text-[18px]" />
      </div>

      {/* DROP_DOWN */}

      {showDropDown && (
        <div className="flex  h-fit flex-col gap-3  border-l-[1px] border-blue-500 pl-6 text-slate-500">
          {subHeaders.map((subheader) => {
            if (subheader === "Add New Employee") {
              return (
                <div
                  className="flex cursor-pointer items-center gap-[25px] hover:text-blue-500"
                  key={subheader}
                  onClick={() => setShowForm(!showForm)}
                >
                  {subheader}
                </div>
              );
            } else {
              return (
                <div
                  className="flex cursor-pointer items-center gap-[25px] hover:text-blue-500"
                  key={subheader}
                >
                  {subheader}
                </div>
              );
            }
          })}
        </div>
      )}
    </div>
  );
};

export default SidebarItem;
