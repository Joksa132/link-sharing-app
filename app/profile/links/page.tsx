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
    <main className="grid grid-cols-links gap-5 py-5 max-md:grid-cols-1">
      <section className="bg-white rounded-lg h-full flex justify-center items-center p-6 max-md:hidden">
        <PhonePreview links={links} profile={profileDetails} />
      </section>
      <section className="bg-white rounded-lg flex flex-col h-full">
        <div className="h-full px-8 py-10 flex flex-col gap-2">
          <h2 className="text-3xl font-bold max-sm:text-xl">
            Customize your links
          </h2>
          <span className="text-sm font-medium opacity-50 max-sm:text-xs">
            Add/edit/remove links below and then share all your profiles with
            the world!
          </span>
          <button
            className="flex justify-center items-center gap-1 py-3 px-6 border-[2px] border-violet-500 rounded-lg text-violet-500 font-bold text-lg mt-6 mb-4 max-sm:p-1 max-sm:text-sm"
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
      </section>
    </main>
  );
}
