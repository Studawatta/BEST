import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const { user } = useSelector((state) => state.auth);

  const linkStyle = " hover:text-slate-400";

  return (
    <div>
      <div className="fixed top-0 z-10  flex h-[50px] w-[100%] items-center justify-center border-b-2 bg-black font-bold text-white">
        <div className=" flex  w-[90%] justify-between ">
          <div
            className=" cursor-pointer xs:hidden"
            onClick={() => {
              setShowDropdown(!showDropdown);
            }}
          >
            <HiMenu className="text-[32px] " />
          </div>

          {/* NAVBAR LEFT*/}
          {user ? (
            <h1 className="text-white">ddd</h1>
          ) : (
            <div className="hidden gap-[20px] xs:flex sm:gap-[40px]  ">
              <Link className={linkStyle} to="/">
                Home
              </Link>
              <Link className={linkStyle} to="/about">
                About
              </Link>
              <Link className={linkStyle} to="/contact">
                Contact
              </Link>
            </div>
          )}

          {/* NAVBAR RIGHT */}
          {user ? (
            <button>Logout</button>
          ) : (
            <div className="flex gap-[20px] sm:gap-[40px] ">
              <Link className={linkStyle} to="/login">
                Login
              </Link>
              <Link className={linkStyle} to="register">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* DROPDOWN */}

      {showDropdown ? (
        <div className="absolute  flex w-fit flex-col gap-[20px] bg-black p-4 font-bold text-white ">
          <Link className={linkStyle} to="/">
            {" "}
            Home
          </Link>
          <Link className={linkStyle} to="/about">
            About
          </Link>
          <Link className={linkStyle} to="/contact">
            Contact
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default NavBar;
