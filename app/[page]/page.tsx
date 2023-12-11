import { getButtonIcon } from "@/utils/getButtonIcon";
import { sql } from "@vercel/postgres";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { notFound } from "next/navigation";

async function fetchPage(pageId: number) {
  const page = await sql`SELECT * FROM page WHERE id = ${pageId}`;

  if (page.rows[0]) {
    const links = await sql`SELECT * FROM links WHERE page_id = ${pageId}`;
    const combined = {
      id: page.rows[0].id,
      userId: page.rows[0].user_id,
      firstName: page.rows[0].first_name,
      lastName: page.rows[0].last_name,
      email: page.rows[0].email,
      avatar: page.rows[0].avatar,
      links: links.rows,
    };

    return combined;
  }

  return null;
}

const getButtonColor = (platform: string) => {
  switch (platform.toLowerCase()) {
    case "github":
      return `bg-black text-white`;
    case "youtube":
      return "bg-red-500 text-white";
    case "linkedin":
      return "bg-blue-600 text-white";
    case "twitter":
      return "bg-sky-400 text-white";
    case "facebook":
      return "bg-blue-400 text-white";
    case "instagram":
      return "bg-violet-500 text-white";
    default:
      return "bg-gray-500 text-white";
  }
};

export default async function Page({ params }: { params: { page: number } }) {
  const page = await fetchPage(params.page);
  let fullName = "";
  if (page) {
    fullName = `${page.firstName} ${page.lastName}`;
  } else {
    notFound();
  }

  return (
    <div className="h-screen w-screen relative">
      <div className="h-80 bg-violet-600 rounded-b-3xl"></div>
      <main className="flex items-center justify-center relative">
        <div className="bg-white shadow-md absolute rounded-3xl flex flex-col gap-2 py-6 px-10 -top-28 items-center">
          <Image
            className="h-20 w-20 rounded-full"
            src={page.avatar}
            alt="User's avatar"
          />
          <span className="text-2xl font-bold mt-2">{fullName}</span>
          <span className="text-sm font-medium opacity-50 mb-4">
            {page.email}
          </span>
          {page.links.map((link) => (
            <a
              href={`//${link.url}`}
              key={link.id}
              target="_blank"
              className={`w-48 p-2 rounded-lg flex justify-between items-center font-medium ${getButtonColor(
                link.platform
              )}`}
            >
              <div className="flex gap-2 items-center">
                {getButtonIcon(link.platform)}
                {link.platform}
              </div>
              <FaArrowRight />
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
