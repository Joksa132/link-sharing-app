"use client";

import { MdOutlineEmail } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { z, ZodError } from "zod";
import { useRouter } from "next/navigation";

const registerSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(4, "Password must be at least 4 characters"),
  confirmPassword: z.string(),
});

type RegisterFormData = z.infer<typeof registerSchema>;

export default function RegisterForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirm-password");

    try {
      const validatedData: RegisterFormData = registerSchema.parse({
        email,
        password,
        confirmPassword,
      });

      if (validatedData.password !== validatedData.confirmPassword) {
        setErrors({ confirmPassword: "Passwords don't match" });
        return;
      }

      setErrors({});

      const response = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        router.push("/");
      }
    } catch (error) {
      if (error instanceof ZodError) {
        const validationErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path) {
            validationErrors[err.path.join(".")] = err.message;
          }
        });
        setErrors(validationErrors);
      } else {
        console.error("Unexpected error:", error);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg px-8 py-10 flex flex-col gap-4"
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold">Create account</h2>
        <span className="text-sm font-medium opacity-50">
          {"Let's get you started sharing your links!"}
        </span>
      </div>
      <div className="flex flex-col mt-6">
        <label htmlFor="email" className="text-sm font-medium opacity-50 mb-2">
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
            placeholder="At least 8 characters"
          />
          <IoMdLock className="absolute pointer-events-none bottom-[12px] left-4 text-gray-400" />
        </div>
      </div>
      {errors.password && (
        <p className="text-red-500 text-xs mt-1">{errors.password}</p>
      )}
      <div className="flex flex-col">
        <label
          htmlFor="confirm-password"
          className="text-sm font-medium opacity-50 mb-2"
        >
          Confirm password
        </label>
        <div className="relative">
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
            required
            className="p-2 border border-gray-400 rounded-lg outline-none border-opacity-60 w-full px-10"
            placeholder="At least 8 characters"
          />
          <IoMdLock className="absolute pointer-events-none bottom-[12px] left-4 text-gray-400" />
        </div>
      </div>
      {errors.confirmPassword && (
        <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
      )}
      <button className="bg-[#633CFF] text-zinc-200 py-3 rounded-lg font-semibold mt-1">
        Create new account
      </button>
      <span className="text-center text-sm mt-2">
        Already have an account?{" "}
        <Link href="/" className="text-sky-500">
          Login
        </Link>
      </span>
    </form>
  );
}
