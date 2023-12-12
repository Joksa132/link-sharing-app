import Image from "next/image";
import Link from "next/link";

type Page = {
  id: number;
  avatar: string;
  firstName: string;
  lastName: string;
  email: string;
};

type Props = {
  page: Page;
  index: number;
};

export default function PageCard({ page, index }: Props) {
  const fullName = `${page.firstName} ${page.lastName}`;

  return (
    <div className="bg-white shadow-md rounded-3xl flex flex-col gap-2 py-2 px-4 items-center">
      <Link
        className="text-2xl font-bold underline max-lg:text-xl"
        href={`/${page.id}`}
      >
        Page #{index + 1}
      </Link>
      <Image
        className="h-20 w-20 rounded-full"
        src={page.avatar}
        alt="User's avatar"
      />
      <span className="text-xl font-bold max-lg:text-sm text-center break-all">
        {fullName}
      </span>
      <span className="text-sm font-medium opacity-50 max-lg:text-xs break-all">
        {page.email}
      </span>
    </div>
  );
}
