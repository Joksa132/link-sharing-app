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
import { useContext, useState } from "react";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import { useSession } from "next-auth/react";

const getButtonColor = (platform: string) => {
  switch (platform.toLowerCase()) {
    case "github":
      return `bg-black text-white`;
    case "youtube":
      return "bg-red-500 text-white";
    case "linkedin":
      return "bg-blue-600 text-white";
    case "twitter":
      return "bg-sky-400 text-white";
    case "facebook":
      return "bg-blue-400 text-white";
    case "instagram":
      return "bg-violet-500 text-white";
    default:
      return "bg-gray-500 text-white";
  }
};

export default function Preview() {
  const { links, profileDetails } = useContext(ProfileContext);
  const fullName = `${profileDetails.firstName} ${profileDetails.lastName}`;
  const { data: session } = useSession();
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [pageId, setPageId] = useState<string>("");

  const handleSavePage = async () => {
    enqueueSnackbar("Saving this page to database. Please wait!", {
      variant: "info",
    });
    try {
      const response = await fetch("/api/page", {
        method: "POST",
        body: JSON.stringify({
          links,
          profileDetails,
          session,
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        setPageId(responseData.pageId.toString());
        enqueueSnackbar("Successfully saved this page to database", {
          variant: "success",
        });
        setIsSaved(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen w-screen relative">
      <div className="h-80 bg-violet-600 rounded-b-3xl p-4 max-sm:bg-inherit max-sm:h-48">
        <header className="bg-white p-4 flex justify-between items-center rounded-lg">
          <Link
            href={"/profile/links"}
            className="border-[2px] border-violet-500 py-2 px-6 rounded-lg text-violet-500 font-semibold max-sm:p-2 max-sm:text-sm"
          >
            Back to Editor
          </Link>
          {isSaved ? (
            <button
              onClick={() => {
                navigator.clipboard.writeText(
                  `${window.location.origin}/${pageId}`
                );
                enqueueSnackbar("Copied the page url!", {
                  variant: "success",
                });
              }}
              className="bg-violet-500 py-2 px-6 text-white rounded-lg font-semibold max-sm:p-2 max-sm:text-sm"
            >
              Copy Link
            </button>
          ) : (
            <button
              onClick={handleSavePage}
              className={`py-2 px-6 text-white rounded-lg font-semibold max-sm:p-2 max-sm:text-sm ${
                profileDetails.firstName === "" ||
                profileDetails.lastName === "" ||
                links.some((link) => link.platform === "" || link.url === "")
                  ? "bg-gray-400"
                  : "bg-violet-500"
              }`}
              disabled={
                profileDetails.firstName === "" ||
                profileDetails.lastName === "" ||
                links.some((link) => link.platform === "" || link.url === "")
              }
            >
              Save Page
            </button>
          )}
        </header>
      </div>
      <div className="flex items-center justify-center relative">
        <div className="bg-white shadow-md absolute rounded-3xl flex flex-col gap-2 py-6 px-10 -top-28 items-center max-sm:bg-inherit max-sm:shadow-none max-w-sm">
          {profileDetails.avatar ? (
            <div className="h-20 w-20 rounded-full relative">
              <Image
                className="h-20 w-20 rounded-full"
                src={profileDetails.avatar}
                alt="User's avatar"
                fill
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          ) : (
            <AvatarSkeleton />
          )}
          {fullName.trim() ? (
            <span className="text-2xl font-bold mt-2 break-all text-center">
              {fullName}
            </span>
          ) : (
            <NameSkeleton />
          )}
          {profileDetails.email ? (
            <span className="text-sm font-medium opacity-50 mb-4 break-all text-center">
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
                  link.platform
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
      <SnackbarProvider />
    </div>
  );
}
