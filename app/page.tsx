import { MdOutlineEmail } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <div>logo</div>
      <form className="bg-white rounded-lg px-8 py-10 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold">Login</h2>
          <span className="text-sm font-medium opacity-50">
            Add your details below to get back into the app
          </span>
        </div>
        <div className="flex flex-col mt-6">
          <label
            htmlFor="email"
            className="text-sm font-medium opacity-50 mb-2"
          >
            Email address
          </label>
          <div className="relative">
            <input
              type="email"
              name="email"
              id="email"
              required
              className="p-2 border border-gray-400 rounded-lg outline-none border-opacity-60 w-full px-10"
              placeholder="e.g. alex@email.com"
            />
            <MdOutlineEmail className="absolute pointer-events-none bottom-[12px] left-4 text-gray-400" />
          </div>
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="password"
            className="text-sm font-medium opacity-50 mb-2"
          >
            Password
          </label>
          <div className="relative">
            <input
              type="password"
              name="password"
              id="password"
              required
              className="p-2 border border-gray-400 rounded-lg outline-none border-opacity-60 w-full px-10"
              placeholder="Enter your password"
            />
            <IoMdLock className="absolute pointer-events-none bottom-[12px] left-4 text-gray-400" />
          </div>
        </div>
        <button className="bg-[#633CFF] text-zinc-200 py-3 rounded-lg font-semibold mt-1">
          Log in
        </button>
        <span className="text-center text-sm mt-2">
          Don't have an account?{" "}
          <Link href="/register" className="text-sky-500">
            Create account
          </Link>
        </span>
      </form>
    </div>
  );
}
