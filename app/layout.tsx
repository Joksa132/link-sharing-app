import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ProfileProvider } from "@/components/context/ProfileContext";
import { getServerSession } from "next-auth";
import SessionProvider from "@/components/context/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Link-Sharing App",
  description: "Link-Sharing App created in Next.js 14",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#FAFAFA]`}>
        <SessionProvider session={session}>
          <ProfileProvider>{children}</ProfileProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
