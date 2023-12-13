"use client";

import PhonePreview from "@/components/PhonePreview";
import { ProfileContext } from "@/components/context/ProfileContext";
import { ProfileDetails } from "@/lib/types";
import { useContext } from "react";
import { UploadButton } from "@/utils/uploadthing";
import { SnackbarProvider, enqueueSnackbar } from "notistack";

export default function ProfileDetails() {
  const { links, profileDetails, setProfileDetails } =
    useContext(ProfileContext);

  return (
    <main className="grid grid-cols-links gap-5 py-5 max-md:grid-cols-1">
      <section className="bg-white rounded-lg h-full flex justify-center items-center p-6 max-md:hidden">
        <PhonePreview links={links} profile={profileDetails} />
      </section>
      <section className="bg-white rounded-lg h-full px-8 py-10 flex flex-col gap-2">
        <h2 className="text-3xl font-bold max-sm:text-xl">Profile details</h2>
        <span className="text-sm font-medium opacity-50 max-sm:text-xs">
          Add your details to create a personal touch to your profile.
        </span>
        <div className="bg-[#FAFAFA] flex items-center justify-between px-4 py-6 rounded-lg">
          <span className="text-sm font-medium opacity-50 w-28 mr-20 max-sm:text-xs">
            Profile picture
          </span>
          <UploadButton
            endpoint="profilePicture"
            onClientUploadComplete={(res) => {
              if (res) {
                setProfileDetails({
                  ...profileDetails,
                  avatar: res[0].url,
                });
                enqueueSnackbar("Image upload success!", {
                  variant: "success",
                });
              }
            }}
            onUploadError={(error: Error) => {
              enqueueSnackbar("Image upload failed!", {
                variant: "error",
              });
            }}
          />
        </div>
        <form className="flex flex-col gap-4 bg-[#FAFAFA] px-4 py-6 rounded-lg">
          <div className="flex items-center justify-between max-sm:flex-col max-sm:items-start max-sm:gap-2">
            <label
              htmlFor="first-name"
              className="text-sm font-medium opacity-50 w-28 mr-20 max-sm:text-xs"
            >
              First name*
            </label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              required
              className="p-2 border border-gray-400 rounded-lg outline-none border-opacity-60 w-full max-sm:text-sm"
              value={profileDetails.firstName}
              onChange={(e) =>
                setProfileDetails({
                  ...profileDetails,
                  firstName: e.target.value,
                })
              }
              maxLength={40}
            />
          </div>
          <div className="flex items-center justify-between max-sm:flex-col max-sm:items-start max-sm:gap-2">
            <label
              htmlFor="last-name"
              className="text-sm font-medium opacity-50 w-28 mr-20 max-sm:text-xs"
            >
              Last name*
            </label>
            <input
              type="text"
              name="last-name"
              id="last-name"
              required
              className="p-2 border border-gray-400 rounded-lg outline-none border-opacity-60 w-full max-sm:text-sm"
              value={profileDetails.lastName}
              onChange={(e) =>
                setProfileDetails({
                  ...profileDetails,
                  lastName: e.target.value,
                })
              }
              maxLength={40}
            />
          </div>
          <div className="flex items-center justify-between max-sm:flex-col max-sm:items-start max-sm:gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium opacity-50 w-28 mr-20 max-sm:text-xs"
            >
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="p-2 border border-gray-400 rounded-lg outline-none border-opacity-60 w-full max-sm:text-sm"
              value={profileDetails.email}
              onChange={(e) =>
                setProfileDetails({ ...profileDetails, email: e.target.value })
              }
              maxLength={50}
            />
          </div>
        </form>
      </section>
      <SnackbarProvider />
    </main>
  );
}
