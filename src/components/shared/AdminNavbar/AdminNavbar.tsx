import Image from "next/image";
import Link from "next/link";

const AdminNavbar = () => {
  return (
    <div className="navbar w-full bg-base-100">
      {/* <div className="navbar-start">
        <div className="dropdown">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/dashboard">All Products</Link>
            </li>
          </ul>
        </div>
        <Link href="/dashboard">Dashboard</Link>
      </div> */}
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-5">
          <li>
            <Link href="/dashboard">All Products</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div
          tabIndex={0}
          className="mt-3 z-[1] card card-compact dropdown-content w-36 bg-base-100"
        >
          <div>
            <h1>Shoriful Islam</h1>
            <p>Admin</p>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <button
            tabIndex={0}
            className="btn btn-ghost btn-circle avatar"
            aria-label="User menu"
          >
            <div className="w-10 rounded-full">
              <Image
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.PMhANanxddOBObcYxcYOcwHaGy%26pid%3DApi&f=1&ipt=f37bc228df029766dfe1a36ffe93fc3538a59e35ac12daabb31ae3a9a9e84682&ipo=images"
                width={40}
                height={40}
                alt="admin profile image"
              />
            </div>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          ></ul>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
