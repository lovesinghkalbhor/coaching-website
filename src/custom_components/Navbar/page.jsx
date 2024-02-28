// import { Icons } from "@/components/icons";
import NavbarLink from "./Navbarlinks/page";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className=" md:p-2 mx-0 md:px-8 fixed z-20   w-full bg-slate-100 shadow-2xl">
      <div className=" hidden  container mx-auto md:flex justify-between relative content-center flex-wrap ">
        <h1 className="font-bold my-auto ">Logo ipsum</h1>
        <NavbarLink></NavbarLink>
        <Button size="sm">
          <Phone className="mr-2 h-4 w-4" /> Contact us
        </Button>
      </div>

      <div className="md:hidden block">
        <div className="navbar bg-slate-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
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
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-100 rounded-sm w-52"
              >
                <li>
                  <Link href="/">Homepage</Link>
                </li>
                <li>
                  <Link href="/courses-list">Courses</Link>
                </li>
                <li>
                  <Link href="/refund-policy">Refund & Return policy</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-center">
            <a className="btn btn-ghost text-xl">Arvind Kumar</a>
          </div>
          <div className="navbar-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <Image
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  width={100}
                  height={100}
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
