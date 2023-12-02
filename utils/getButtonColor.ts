export const getButtonColor = (platform: string) => {
  switch (platform.toLowerCase()) {
    case "github":
      return "bg-black text-white";
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
