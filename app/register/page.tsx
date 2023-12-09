import RegisterForm from "@/components/forms/RegisterForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Register() {
  const session = await getServerSession();
  if (session) {
    redirect("/profile/links");
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <div>logo</div>
      <RegisterForm />
    </div>
  );
}
