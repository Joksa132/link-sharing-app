export const getButtonColor = (platform: string) => {
  switch (platform.toLowerCase()) {
    case "github":
      return "bg-black text-white";
    case "youtube":
      return "bg-red-500 text-white";
    case "linkedin":
      return "bg-blue-500 text-white";
    default:
      return "bg-gray-500 text-black";
  }
};
