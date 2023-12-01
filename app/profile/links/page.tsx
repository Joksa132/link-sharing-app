"use client";

import LinkCard from "@/components/LinkCard";
import PhonePreview from "@/components/PhonePreview";
import { FaPlus } from "react-icons/fa";
import { useContext } from "react";
import { ProfileContext } from "@/components/context/ProfileContext";

export default function ProfileLinks() {
  const { links, handleAddLink, handleRemoveLink, profileDetails } =
    useContext(ProfileContext);

  return (
    <main className="grid grid-cols-links gap-5 py-5">
      <section className="bg-white rounded-lg h-full flex justify-center items-center p-6">
        <PhonePreview links={links} profile={profileDetails} />
      </section>
      <section className="bg-white rounded-lg flex flex-col h-full">
        <div className="h-full px-8 py-10 flex flex-col gap-2">
          <h2 className="text-3xl font-bold">Customize your links</h2>
          <span className="text-sm font-medium opacity-50">
            Add/edit/remove links below and then share all your profiles with
            the world!
          </span>
          <button
            className="flex justify-center items-center gap-1 py-3 px-6 border-[2px] border-violet-500 rounded-lg text-violet-500 font-bold text-lg mt-6 mb-4"
            onClick={handleAddLink}
          >
            <FaPlus size={10} /> Add new link
          </button>
          <div
            className={`flex flex-col gap-6 max-h-[440px] ${
              links.length > 2 ? "overflow-y-scroll" : ""
            }`}
          >
            {links.map((link) => (
              <LinkCard
                linkNumber={links.indexOf(link) + 1}
                key={link.id}
                linkId={link.id}
                handleRemoveLink={() => handleRemoveLink(link.id)}
              />
            ))}
          </div>
        </div>
        <div className="h-[1.5px] w-full bg-gray-300 bg-opacity-60"></div>
        <div className="flex justify-end px-8 py-6">
          <button className="bg-[#633BFE] text-zinc-200 py-3 px-7 rounded-lg font-semibold">
            Save
          </button>
        </div>
      </section>
    </main>
  );
}
