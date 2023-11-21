"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaLink, FaRegUserCircle } from "react-icons/fa";

export default function Header() {
  const pathName = usePathname();

  console.log(pathName);

  return (
    <header className="flex justify-between items-center p-2 bg-white rounded-lg">
      <div>Logo</div>
      <div className="flex gap-6">
        <Link
          href="/profile/links"
          className={`flex items-center gap-2 py-2 px-6 text-gray-600 font-semibold ${
            pathName === "/profile/links"
              ? "text-violet-500 bg-violet-300 bg-opacity-30 rounded-lg"
              : ""
          }`}
        >
          <FaLink /> Links
        </Link>
        <Link
          href="/profile/details"
          className={`flex items-center gap-2 py-2 px-6 text-gray-600 font-semibold ${
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
