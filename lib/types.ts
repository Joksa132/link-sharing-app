export type ProfileDetails = {
  avatar: string;
  firstName: string;
  lastName: string;
  email: string;
};

export type Link = {
  platform: string;
  url: string;
  number: number;
  id: number;
};

export type ProfilePreview = {
  links: Link[];
} & ProfileDetails;
