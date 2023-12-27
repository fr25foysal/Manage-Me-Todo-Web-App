import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import useProvider from "../../Hooks/useProvider";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
const Navbar = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };


  const {user,logOut} = useProvider()
  const navigate = useNavigate()
  const handleLogOut=()=>{
    logOut()
    .then(()=>{
      navigate('/')
      toast.success('User Logged Out!')
    })
  }
  
  const menus = (
    <>
      <motion.li variants={item}>
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " scale-150 border-b-2 border-neutral"
              : ""
          }
        >
          Home
        </NavLink>
      </motion.li>
      <motion.li variants={item}>
        <NavLink
          to={"/tasks"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " scale-150 border-b-2 border-neutral"
              : ""
          }
        >
          Tasks
        </NavLink>
      </motion.li>
      <motion.li variants={item}>
        <NavLink
          to={"/calender"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " scale-150 border-b-2 border-neutral"
              : ""
          }
        >
          Calender
        </NavLink>
      </motion.li>
      <motion.li variants={item}>
        <NavLink
          to={"/projects"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " scale-150 border-b-2 border-neutral"
              : ""
          }
        >
          Projects
        </NavLink>
      </motion.li>

      {user ? (
        <motion.li initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }} onClick={handleLogOut} className="bg-neutral btn rounded-md">Sign Out</motion.li>
      ) : (
        <motion.li initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}>
          <NavLink to={"/sign-in"} className="bg-neutral rounded-md">
            Sign In
          </NavLink>
        </motion.li>
      )}
    </>
  );
    return (
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full bg-secondary">
         <div className="max-w-7xl mx-auto">
            <div className="navbar text-white">
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <Link className="flex-1 px-2 mx-2">ManageMe</Link>
              <div className="flex-none hidden lg:block">
                <motion.ul variants={container}
    initial="hidden"
    animate="visible" className="menu menu-horizontal  space-x-5 font-medium">
                  {/* Navbar menu content here */}
                 {menus}
                </motion.ul>
              </div>
            </div>
            </div>
          </div>
          {/* Page content here */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-1/2 min-h-full bg-neutral">
            {/* Sidebar content here */}
            <div className="w-1/2">
            {menus}
            </div>
           
          </ul>
        </div>
      </div>
    );
};

export default Navbar;