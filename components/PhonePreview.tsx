import { ProfilePreview } from "@/lib/types";
import {
  AvatarSkeleton,
  EmailSkeleton,
  LinkSkeleton,
  NameSkeleton,
} from "./skeletons";
import Image from "next/image";
import { getButtonColor } from "@/utils/getPlatformColor";

export default function PhonePreview({ links, profile }: ProfilePreview) {
  const fullName = `${profile.firstName} ${profile.lastName}`;

  return (
    <div className="h-full w-full flex flex-col items-center relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="308"
        height="632"
        fill="none"
        viewBox="0 0 308 632"
      >
        <path
          stroke="#737373"
          d="M1 54.5C1 24.953 24.953 1 54.5 1h199C283.047 1 307 24.953 307 54.5v523c0 29.547-23.953 53.5-53.5 53.5h-199C24.953 631 1 607.047 1 577.5v-523Z"
        />
        <path
          fill="#fff"
          stroke="#737373"
          d="M12 55.5C12 30.923 31.923 11 56.5 11h24C86.851 11 92 16.149 92 22.5c0 8.008 6.492 14.5 14.5 14.5h95c8.008 0 14.5-6.492 14.5-14.5 0-6.351 5.149-11.5 11.5-11.5h24c24.577 0 44.5 19.923 44.5 44.5v521c0 24.577-19.923 44.5-44.5 44.5h-195C31.923 621 12 601.077 12 576.5v-521Z"
        />
      </svg>
      <div className="absolute top-14 flex flex-col items-center gap-4">
        {profile.avatar ? (
          <Image
            className="h-20 w-20 rounded-full"
            src={profile.avatar}
            alt="User's avatar"
          />
        ) : (
          <AvatarSkeleton />
        )}
        {fullName.trim() ? <span>{fullName}</span> : <NameSkeleton />}
        {profile.email ? <span>{profile.email}</span> : <EmailSkeleton />}
        {links[0].url ? (
          links.map((link) => (
            <a
              href={`//${link.url}`}
              key={link.id}
              target="_blank"
              className={`h-8 w-44 rounded-lg flex justify-center items-center ${getButtonColor(
                link.platform
              )}`}
            >
              {link.platform}
            </a>
          ))
        ) : (
          <LinkSkeleton />
        )}
      </div>
    </div>
  );
}
