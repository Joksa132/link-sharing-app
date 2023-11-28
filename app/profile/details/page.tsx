"use client";

import PhonePreview from "@/components/PhonePreview";
import { ProfileContext } from "@/components/context/ProfileContext";
import { ProfileDetails } from "@/lib/types";
import { useContext } from "react";

export default function ProfileDetails() {
  const { links, profileDetails, setProfileDetails } =
    useContext(ProfileContext);

  const handleSubmit = () => {};

  return (
    <main className="grid grid-cols-links gap-5 py-5">
      <section className="bg-white rounded-lg h-full flex justify-center items-center p-6">
        <PhonePreview links={links} profile={profileDetails} />
      </section>
      <section className="bg-white rounded-lg h-full px-8 py-10 flex flex-col gap-2">
        <h2 className="text-3xl font-bold">Profile details</h2>
        <span className="text-sm font-medium opacity-50">
          Add your details to create a personal touch to your profile.
        </span>
        <form
          className="flex flex-col gap-4 bg-[#FAFAFA] px-4 py-6 rounded-lg"
          onSubmit={handleSubmit}
        >
          <div className="flex items-center justify-between">
            <label
              htmlFor="first-name"
              className="text-sm font-medium opacity-50 w-28 mr-20"
            >
              First name*
            </label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              required
              className="p-2 border border-gray-400 rounded-lg outline-none border-opacity-60 w-full"
              value={profileDetails.firstName}
              onChange={(e) =>
                setProfileDetails({
                  ...profileDetails,
                  firstName: e.target.value,
                })
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="last-name"
              className="text-sm font-medium opacity-50 w-28 mr-20"
            >
              Last name*
            </label>
            <input
              type="text"
              name="last-name"
              id="last-name"
              required
              className="p-2 border border-gray-400 rounded-lg outline-none border-opacity-60 w-full"
              value={profileDetails.lastName}
              onChange={(e) =>
                setProfileDetails({
                  ...profileDetails,
                  lastName: e.target.value,
                })
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="email"
              className="text-sm font-medium opacity-50 w-28 mr-20"
            >
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="p-2 border border-gray-400 rounded-lg outline-none border-opacity-60 w-full"
              value={profileDetails.email}
              onChange={(e) =>
                setProfileDetails({ ...profileDetails, email: e.target.value })
              }
            />
          </div>
        </form>
      </section>
    </main>
  );
}
