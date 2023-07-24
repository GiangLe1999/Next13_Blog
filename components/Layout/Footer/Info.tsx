import siteConfig from "@/config/site";
import Link from "next/link";
import { FC } from "react";

interface Props {}

const Info: FC<Props> = (props): JSX.Element => {
  return (
    <div className="space-y-2">
      <div className="max-w-xs">
        <span className="info-title">Address: </span>
        <span className="info-detail">{siteConfig.address}</span>
      </div>

      <div className="max-w-xs">
        <span className="info-title">Postal Code: </span>
        <span className="info-detail">{siteConfig.postalCode}</span>
      </div>

      <div className="max-w-xs">
        <span className="info-title">Tel: </span>
        <Link className="info-detail" href={"tel:" + siteConfig.tel}>
          {siteConfig.tel}
        </Link>
      </div>

      <div className="max-w-xs">
        <span className="info-title">Email: </span>
        <Link className="info-detail" href={"mailto:" + siteConfig.email}>
          {siteConfig.email}
        </Link>
      </div>

      <div className="flex gap-1 items-center">
        <span className="info-title">Follow me on: </span>
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
