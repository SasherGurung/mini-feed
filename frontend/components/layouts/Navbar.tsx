import Image from "next/image";
import { FaHouse } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaPlus } from "react-icons/fa6";
import Link from "next/link";

function Navbar() {
  return (
    <header className="border flex justify-center bg-zinc-50">
      <nav className="flex flex-col justify-between py-13 w-full px-1">
        <div className="px-6">
          <Image
            src="/images/logo/logo.png"
            alt="logo"
            width={70}
            height={70}
            className="border cursor-pointer"
          />
        </div>

        <ul className="flex flex-col">
          <li>
            <Link
              href={""}
              className="flex items-center gap-3 cursor-pointer hover:bg-zinc-100 px-6 py-3 rounded-xl"
            >
              <FaHouse className="h-6 w-6" />
              Home
            </Link>
          </li>
          <li>
            <Link
              href={""}
              className="flex items-center gap-3 cursor-pointer hover:bg-zinc-100 px-6 py-3 rounded-xl"
            >
              <FaSearch className="h-6 w-6" />
              Search
            </Link>
          </li>
          <li>
            <Link
              href={""}
              className="flex items-center gap-3 cursor-pointer hover:bg-zinc-100 px-6 py-3 rounded-xl"
            >
              <FaHeart className="h-6 w-6 shrink-0" />
              Notifications
            </Link>
          </li>
          <li>
            <Link
              href={""}
              className="flex items-center gap-3 cursor-pointer hover:bg-zinc-100 px-6 py-3 rounded-xl"
            >
              <FaPlus className="h-6 w-6" />
              Create
            </Link>
          </li>
          <li>
            <Link
              href={""}
              className="flex items-center gap-3 cursor-pointer hover:bg-zinc-100 px-6 py-3 rounded-xl"
            >
              <CgProfile className="h-6 w-6" />
              Profile
            </Link>
          </li>
        </ul>

        <div></div>
      </nav>
    </header>
  );
}

export default Navbar;
