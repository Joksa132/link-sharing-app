"use client";

import { ProfileContext } from "@/components/context/ProfileContext";
import {
  AvatarSkeleton,
  EmailSkeleton,
  LinkSkeleton,
  NameSkeleton,
} from "@/components/skeletons";
import { FaArrowRight } from "react-icons/fa6";
import { getButtonIcon } from "@/utils/getButtonIcon";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { enqueueSnackbar } from "notistack";
import { getButtonColor } from "@/utils/getButtonColor";

export default function Preview() {
  const { links, profileDetails } = useContext(ProfileContext);
  const fullName = `${profileDetails.firstName} ${profileDetails.lastName}`;

  const handleSavePage = async () => {
    try {
      const response = await fetch("/api/page", {
        method: "POST",
        body: JSON.stringify({
          links,
          profileDetails,
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        enqueueSnackbar("Successfully saved this page", { variant: "success" });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen w-screen relative">
      <div className="h-80 bg-violet-600 rounded-b-3xl p-4">
        <header className="bg-white p-4 flex justify-between items-center rounded-lg">
          <Link
            href={"/profile/links"}
            className="border-[2px] border-violet-500 py-2 px-6 rounded-lg text-violet-500 font-semibold"
          >
            Back to Editor
          </Link>
          <button
            onClick={handleSavePage}
            className="bg-violet-500 py-2 px-6 text-white rounded-lg font-semibold"
          >
            Save Page
          </button>
        </header>
      </div>
      <div className="flex items-center justify-center relative">
        <div className="bg-white shadow-md absolute rounded-3xl flex flex-col gap-2 py-6 px-10 -top-28 items-center">
          {profileDetails.avatar ? (
            <Image
              className="h-20 w-20 rounded-full"
              src={profileDetails.avatar}
              alt="User's avatar"
            />
          ) : (
            <AvatarSkeleton />
          )}
          {fullName.trim() ? (
            <span className="text-2xl font-bold mt-2">{fullName}</span>
          ) : (
            <NameSkeleton />
          )}
          {profileDetails.email ? (
            <span className="text-sm font-medium opacity-50 mb-4">
              {profileDetails.email}
            </span>
          ) : (
            <EmailSkeleton />
          )}
          {links[0] && links[0].url ? (
            links.map((link) => (
              <a
                href={`//${link.url}`}
                key={link.id}
                target="_blank"
                className={`w-48 p-2 rounded-lg flex justify-between items-center font-medium ${getButtonColor(
                  link?.platform
                )}`}
              >
                <div className="flex gap-2 items-center">
                  {getButtonIcon(link.platform)}
                  {link.platform}
                </div>
                <FaArrowRight />
              </a>
            ))
          ) : (
            <LinkSkeleton />
          )}
        </div>
      </div>
    </div>
  );
}
