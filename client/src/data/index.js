import { BsPerson } from "react-icons/bs";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { TfiBriefcase, TfiRulerPencil } from "react-icons/tfi";

export const Admin_Sidebar_Items = [
  {
    header: "Classes",
    subHeaders: ["All Classes", "New Class", "Edit OR Delete"],
    icon: <TfiRulerPencil />,
  },
  {
    header: "Subjects",
    subHeaders: ["Class With Subjects", "Assign Subjects"],
    icon: <HiOutlineBookOpen />,
  },
  {
    header: "Students",
    subHeaders: ["All Students", "Add New Student"],
    icon: <BsPerson />,
  },
  {
    header: "Employees",
    subHeaders: ["All Employees", "Add New Employee"],
    icon: <TfiBriefcase />,
  },
];
