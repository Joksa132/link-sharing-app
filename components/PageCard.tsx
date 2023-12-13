"use client";

import Image from "next/image";
import Link from "next/link";

type Page = {
  id: string;
  avatar: string;
  firstName: string;
  lastName: string;
  email: string;
};

type Props = {
  page: Page;
  index: number;
  deletePage: (id: string) => void;
};

export default function PageCard({ page, index, deletePage }: Props) {
  const fullName = `${page.firstName} ${page.lastName}`;

  return (
    <div className="bg-white shadow-md rounded-3xl flex flex-col gap-2 py-2 px-4 items-center">
      <Link
        className="text-2xl font-bold underline max-lg:text-xl"
        href={`/${page.id}`}
      >
        Page #{index + 1}
      </Link>
      <div className="h-20 w-20 rounded-full relative">
        <Image
          className="h-20 w-20 rounded-full"
          src={page.avatar}
          alt="User's avatar"
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <span className="text-xl font-bold max-lg:text-sm text-center break-all">
        {fullName}
      </span>
      <span className="text-sm font-medium opacity-50 max-lg:text-xs break-all">
        {page.email}
      </span>
      <button
        className="border-[2px] border-violet-500 p-1 max-md:text-xs max-sm:py-1 max-sm:px-2 rounded-lg text-violet-500 font-semibold"
        onClick={() => deletePage(page.id)}
      >
        Delete Page
      </button>
    </div>
  );
}
