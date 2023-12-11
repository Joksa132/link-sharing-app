import Link from "next/link";
import { FaRegFrown } from "react-icons/fa";

export default function NotFound() {
  return (
    <main className="flex flex-col h-screen items-center justify-center gap-2">
      <FaRegFrown size={50} />
      <h2 className="text-xl font-semibold">404 - Not Found</h2>
      <p>Could not find the requested page.</p>
      <Link
        href="/"
        className="mt-4 rounded-md bg-violet-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-violet-500"
      >
        Go Back
      </Link>
    </main>
  );
}
