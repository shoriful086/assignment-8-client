import Container from "@/components/container/Container";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar w-full bg-orange-500 text-white lg:px-72 mb-2">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black"
          >
            <Link href="/">Home</Link>
            <Link href="/categories">Categories</Link>
            <Link href="/dishwashing-items">Products</Link>
            <Link href="/flash-sale">Flash Sale</Link>
            <Link href="/about-us">About Us</Link>
            <Link href="/contact-us">Contact Us</Link>
            <Link href="/dashboard/all-products">Dashboard</Link>
          </ul>
        </div>
        <Link href="/" className="font-medium text-xl">
          Dish Washing
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-5">
          <Link href="/">Home</Link>
          <Link href="/categories">Categories</Link>
          <Link href="/dishwashing-items">Products</Link>
          <Link href="/flash-sale">Flash Sale</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/contact-us">Contact Us</Link>
          <Link href="/dashboard/all-products">Dashboard</Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
