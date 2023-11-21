"use client";

import { HiOutlineMenuAlt4 } from "react-icons/hi";
import Select from "react-select";
import { FaGithub, FaYoutube, FaLinkedin, FaLink } from "react-icons/fa";

type LinkCardProps = {
  linkNumber: number;
};

const options = [
  {
    value: "github",
    label: (
      <div className="flex items-center gap-3">
        <FaGithub /> GitHub
      </div>
    ),
  },
  {
    value: "youtube",
    label: (
      <div className="flex items-center gap-3">
        <FaYoutube /> YouTube
      </div>
    ),
  },
  {
    value: "Linkedin",
    label: (
      <div className="flex items-center gap-3">
        <FaLinkedin /> Linkedin
      </div>
    ),
  },
];

export default function LinkCard({ linkNumber }: LinkCardProps) {
  return (
    <div className="bg-[#FAFAFA] p-4 flex flex-col gap-3">
      <div className="flex justify-between ">
        <div className="flex gap-1 items-center">
          <HiOutlineMenuAlt4 className="text-gray-500" />
          <span className="font-semibold text-gray-500">
            Link #{linkNumber}
          </span>
        </div>
        <button className="font-medium text-gray-500 text-opacity-80">
          Remove
        </button>
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="link-platform"
          className="text-xs text-gray-500 font-medium"
        >
          Platform
        </label>
        <Select options={options} />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="link-url" className="text-xs text-gray-500 font-medium">
          Link
        </label>
        <div className="relative">
          <input
            type="text"
            name="link-url"
            id="link-url"
            className="py-2 px-12 border border-gray-400 rounded-lg outline-none border-opacity-60 w-full"
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
