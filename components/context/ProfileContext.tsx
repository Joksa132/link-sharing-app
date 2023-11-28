"use client";

import { Link, ProfileDetails } from "@/lib/types";
import { useState, createContext, useEffect } from "react";

type ProfileContext = {
  links: Link[];
  profileDetails: ProfileDetails;
  setProfileDetails: React.Dispatch<React.SetStateAction<ProfileDetails>>;
  handleAddLink: () => void;
  handleRemoveLink: (linkId: number) => void;
};

export const ProfileContext = createContext<ProfileContext>(
  {} as ProfileContext
);

export function ProfileProvider({ children }: { children: React.ReactNode }) {
  const [links, setLinks] = useState<Link[]>([
    {
      platform: "",
      url: "",
      number: 1,
      id: 1,
    },
  ]);
  const [profileDetails, setProfileDetails] = useState<ProfileDetails>({
    avatar: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleAddLink = () => {
    setLinks((prevLinks) => [
      ...prevLinks,
      {
        platform: "",
        url: "",
        number: links.length + 1,
        id: (prevLinks[prevLinks.length - 1].id || 0) + 1,
      },
    ]);
  };

  const handleRemoveLink = (linkId: number) => {
    setLinks(
      links.filter((link) => {
        return link.id !== linkId;
      })
    );
  };

  return (
    <ProfileContext.Provider
      value={{
        links,
        handleAddLink,
        handleRemoveLink,
        profileDetails,
        setProfileDetails,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}
