import { Link, NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  
  const menus = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-neutral scale-150 border-b-2 border-neutral" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/tasks"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-neutral scale-150 border-b-2 border-neutral" : ""
          }
        >
          Tasks
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/calender"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-neutral scale-150 border-b-2 border-neutral" : ""
          }
        >
          Calender
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/projects"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-neutral scale-150 border-b-2 border-neutral" : ""
          }
        >
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/sign-in"}
          className='bg-neutral rounded-md'
        >
          Sign In
        </NavLink>
      </li>
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
                <ul className="menu menu-horizontal space-x-5 font-medium">
                  {/* Navbar menu content here */}
                 {menus}
                </ul>
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