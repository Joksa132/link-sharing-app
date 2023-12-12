import LoginForm from "@/components/forms/LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession();

  if (session) {
    redirect("/profile/links");
  }
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <LoginForm />
    </div>
  );
}
