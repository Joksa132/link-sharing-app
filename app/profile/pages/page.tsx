import { getServerSession } from "next-auth";
import { sql } from "@vercel/postgres";
import PageCard from "@/components/PageCard";
import { revalidatePath } from "next/cache";

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

async function deletePage(pageId: string) {
  "use server";
  try {
    await sql`DELETE FROM links WHERE page_id = ${pageId}`;
    await sql`DELETE FROM page WHERE id = ${pageId}`;
    revalidatePath("/profile/pages");
  } catch (error) {
    console.error(error);
  }
}

export default async function SavedPages() {
  const session = await getServerSession();
  const pages = await fetchPages(session?.user?.email as string);

  return (
    <main className="p-10 grid grid-cols-4 max-xl:grid-cols-3 gap-8 max-md:grid-cols-2 max-sm:grid-cols-1">
      {pages.map((page, index) => (
        <PageCard
          page={page}
          index={index}
          key={page.id}
          deletePage={deletePage}
        />
      ))}
    </main>
  );
}
