import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { links, profileDetails, session } = await request.json();

    const userId = session.user.id ?? parseInt(session.user.sub);

    const pageRes = await sql`
      INSERT INTO page (user_id, first_name, last_name, email, avatar)
      VALUES (${userId}, ${profileDetails.firstName}, ${profileDetails.lastName}, ${profileDetails.email}, ${profileDetails.avatar})
      RETURNING id
    `;

    const pageId = pageRes.rows[0]?.id;

    for (const link of links) {
      await sql`
        INSERT INTO links (page_id, platform, url)
        VALUES (${pageId}, ${link.platform}, ${link.url})
      `;
    }

    return NextResponse.json({ message: "success", pageId });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error });
  }
}
