"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaLink, FaRegUserCircle } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";

export default function Header() {
  const pathName = usePathname();

  return (
    <header className="flex justify-between items-center p-2 bg-white rounded-lg">
      <button
        className="flex items-center gap-2 p-2 text-gray-600 font-semibold hover:text-violet-500 hover:bg-violet-300 hover:bg-opacity-30 hover:rounded-lg"
        onClick={() => signOut()}
      >
        <CiLogout />
        Logout
      </button>
      <div className="flex gap-6">
        <Link
          href="/profile/links"
          className={`flex items-center gap-2 py-2 px-6 text-gray-600 font-semibold hover:text-violet-500 ${
            pathName === "/profile/links"
              ? "text-violet-500 bg-violet-300 bg-opacity-30 rounded-lg"
              : ""
          }`}
        >
          <FaLink /> Links
        </Link>
        <Link
          href="/profile/details"
          className={`flex items-center gap-2 py-2 px-6 text-gray-600 font-semibold hover:text-violet-500 ${
            pathName === "/profile/details"
              ? "text-violet-500 bg-violet-300 bg-opacity-30 rounded-lg"
              : ""
          }`}
        >
          <FaRegUserCircle /> Profile Details
        </Link>
      </div>
      <Link
        href="/preview"
        className="border-[2px] border-violet-500 py-2 px-6 rounded-lg text-violet-500 font-semibold"
      >
        Preview
      </Link>
    </header>
  );
}
