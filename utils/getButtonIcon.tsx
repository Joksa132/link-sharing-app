import {
  FaGithub,
  FaYoutube,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLink,
} from "react-icons/fa";

export const getButtonIcon = (platform: string) => {
  switch (platform.toLowerCase()) {
    case "github":
      return <FaGithub />;
    case "youtube":
      return <FaYoutube />;
    case "linkedin":
      return <FaLinkedin />;
    case "twitter":
      return <FaTwitter />;
    case "facebook":
      return <FaFacebook />;
    case "instagram":
      return <FaInstagram />;
    default:
      return <FaLink />;
  }
};
