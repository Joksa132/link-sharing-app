import { getServerSession } from "next-auth";
import { sql } from "@vercel/postgres";
import PageCard from "@/components/PageCard";

async function fetchPages(userEmail: string) {
  const userId = await sql`SELECT id FROM users WHERE email = ${userEmail}`;
  const pages =
    await sql`SELECT * FROM page WHERE user_id = ${userId.rows[0].id}`;

  const fixedPages = pages.rows.map((row) => ({
    id: row.id,
    avatar: row.avatar,
    firstName: row.first_name,
    lastName: row.last_name,
    email: row.email,
  }));

  return fixedPages;
}

export default async function SavedPages() {
  const session = await getServerSession();
  const pages = await fetchPages(session?.user?.email as string);

  return (
    <main className="p-10 grid grid-cols-4 gap-8">
      {pages.map((page, index) => (
        <PageCard page={page} index={index} key={page.id} />
      ))}
    </main>
  );
}
