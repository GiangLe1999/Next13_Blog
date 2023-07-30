import siteConfig from "@/config/site";
import { Dictionary } from "@/types/collection";
import Link from "next/link";
import { FC } from "react";

interface Props {
  dictionary: {
    address: string;
    postalCode: string;
    tel: string;
    email: string;
    followText: string;
    rightsText: string;
    creatorText: string;
  };
}

const Info: FC<Props> = ({ dictionary }): JSX.Element => {
  return (
    <div className="space-y-2">
      <div className="max-w-xs">
        <span className="info-title">{dictionary.address}: </span>
        <span className="info-detail">{siteConfig.address}</span>
      </div>

      <div className="max-w-xs">
        <span className="info-title">{dictionary.postalCode}: </span>
        <span className="info-detail">{siteConfig.postalCode}</span>
      </div>

      <div className="max-w-xs">
        <span className="info-title">{dictionary.tel}: </span>
        <Link className="info-detail" href={"tel:" + siteConfig.tel}>
          {siteConfig.tel}
        </Link>
      </div>

      <div className="max-w-xs">
        <span className="info-title">{dictionary.email}: </span>
        <Link className="info-detail" href={"mailto:" + siteConfig.email}>
          {siteConfig.email}
        </Link>
      </div>

      <div className="flex gap-1 items-center">
        <span className="info-title">{dictionary.followText}: </span>
        <div className="flex items-center gap-1 dark:text-neutral-600 text-neutral-300">
          {siteConfig.socialsLinks.map((social, index) => (
            <Link
              href={social.link}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              {index === 0 ? (
                <social.icon className="w-[22px] h-[21px]" />
              ) : (
                <social.icon className="w-6 h-6" />
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Info;
