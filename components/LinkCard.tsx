"use client";

import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaLink } from "react-icons/fa";
import { useId, useContext } from "react";
import { ProfileContext } from "./context/ProfileContext";

type LinkCardProps = {
  linkNumber: number;
  linkId: number;
  handleRemoveLink: () => void;
};

export default function LinkCard({
  linkNumber,
  linkId,
  handleRemoveLink,
}: LinkCardProps) {
  const id = useId();
  const { links, setLinks } = useContext(ProfileContext);
  const linkIndex = links.findIndex((link) => link.id === linkId);

  const handlePlatformChange = (e: React.FormEvent<HTMLSelectElement>) => {
    const selectedPlatform = (e.target as HTMLSelectElement).value;

    if (selectedPlatform !== "") {
      if (linkIndex !== -1) {
        const updatedLinks = [...links];
        updatedLinks[linkIndex].platform = selectedPlatform;
        setLinks(updatedLinks);
      }
    }
  };

  const handleUrlChange = (e: React.FormEvent<HTMLInputElement>) => {
    if (linkIndex !== -1) {
      const updatedLinks = [...links];
      updatedLinks[linkIndex].url = (e.target as HTMLInputElement).value;

      setLinks(updatedLinks);
    }
  };

  return (
    <div className="bg-[#FAFAFA] p-4 flex flex-col gap-3 rounded-lg">
      <div className="flex justify-between ">
        <div className="flex gap-1 items-center">
          <HiOutlineMenuAlt4 className="text-gray-500" />
          <span className="font-semibold text-gray-500">
            Link #{linkNumber}
          </span>
        </div>
        <button
          className="font-medium text-gray-500 text-opacity-80"
          onClick={handleRemoveLink}
        >
          Remove
        </button>
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor={`select-${id}`}
          className="text-xs text-gray-500 font-medium"
        >
          Platform
        </label>
        <select
          name="platform"
          id={`select-${id}`}
          onChange={handlePlatformChange}
          className="py-2 px-12 border border-gray-400 rounded-lg outline-none border-opacity-60 w-full"
          value={links[linkIndex].platform}
          required
        >
          <option value="" hidden>
            Select a platform
          </option>
          <option value="GitHub">GitHub</option>
          <option value="YouTube">YouTube</option>
          <option value="Linkedin">Linkedin</option>
          <option value="Twitter">Twitter</option>
          <option value="Facebook">Facebook</option>
          <option value="Instagram">Instagram</option>
        </select>
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor={`input-${id}`}
          className="text-xs text-gray-500 font-medium"
        >
          Link
        </label>
        <div className="relative">
          <input
            type="text"
            name="link-url"
            id={`input-${id}`}
            className="py-2 px-12 border border-gray-400 rounded-lg outline-none border-opacity-60 w-full"
            onChange={handleUrlChange}
            value={links[linkIndex].url}
            required
          />
          <FaLink
            size={14}
            className="absolute pointer-events-none bottom-[14px] left-5 text-gray-400"
          />
        </div>
      </div>
    </div>
  );
}
