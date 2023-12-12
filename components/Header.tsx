"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaLink, FaRegUserCircle, FaList } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";

export default function Header() {
  const pathName = usePathname();

  return (
    <header className="flex justify-between items-center p-2 bg-white rounded-lg">
      <button
        className="flex items-center gap-2 p-2 max-md:text-xs text-gray-600 font-semibold hover:text-violet-500 hover:bg-violet-300 hover:bg-opacity-30 hover:rounded-lg"
        onClick={() => signOut()}
      >
        <CiLogout className="max-sm:hidden" />{" "}
        <CiLogout className="hidden max-sm:block" size={15} />
        Logout
      </button>
      <div className="flex gap-6 max-md:gap-2">
        <Link
          href="/profile/links"
          className={`flex items-center gap-2 py-2 px-6 max-md:text-xs max-md:px-2 text-gray-600 font-semibold hover:text-violet-500 ${
            pathName === "/profile/links"
              ? "text-violet-500 bg-violet-300 bg-opacity-30 rounded-lg"
              : ""
          }`}
        >
          <FaLink className="max-sm:hidden" />{" "}
          <FaLink className="hidden max-sm:block" size={15} />
          <span className="max-md:hidden">Links</span>
        </Link>
        <Link
          href="/profile/details"
          className={`flex items-center gap-2 py-2 px-6 max-md:text-xs max-md:px-2 text-gray-600 font-semibold hover:text-violet-500 ${
            pathName === "/profile/details"
              ? "text-violet-500 bg-violet-300 bg-opacity-30 rounded-lg"
              : ""
          }`}
        >
          <FaRegUserCircle className="max-sm:hidden" />{" "}
          <FaRegUserCircle className="hidden max-sm:block" size={15} />
          <span className="max-md:hidden">Profile Details</span>
        </Link>
        <Link
          href="/profile/pages"
          className={`flex items-center gap-2 py-2 px-6 max-md:text-xs max-md:px-2 text-gray-600 font-semibold hover:text-violet-500 ${
            pathName === "/profile/pages"
              ? "text-violet-500 bg-violet-300 bg-opacity-30 rounded-lg"
              : ""
          }`}
        >
          <FaList className="max-sm:hidden" />
          <FaList className="hidden max-sm:block" size={15} />
          <span className="max-md:hidden">Saved Pages</span>
        </Link>
      </div>
      <Link
        href="/preview"
        className="border-[2px] border-violet-500 py-2 px-6 max-md:text-xs max-sm:py-1 max-sm:px-2 rounded-lg text-violet-500 font-semibold"
      >
        <MdOutlineRemoveRedEye className="hidden max-sm:block" size={20} />
        <span className="max-sm:hidden">Preview</span>
      </Link>
    </header>
  );
}
