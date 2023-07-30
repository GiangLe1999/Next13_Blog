import { FC } from "react";
import { NewTab2 } from "../Assets/Icons";

interface Props {
  social: { name: string; link: string; icon: FC<{ className?: string }> };
  index: number;
}

const SocialLink: FC<Props> = ({ social, index }): JSX.Element => {
  return (
    <li className="flex">
      <a
        className="flex items-center gap-1 text-white text-sm"
        href={social.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {index === 0 ? (
          <social.icon className="w-[22px] h-[21px]" />
        ) : (
          <social.icon className="w-6 h-6" />
        )}
        {social.name}
        <NewTab2 className="relative -left-1 -top-1 w-3 h-3" />
      </a>
    </li>
  );
};

export default SocialLink;
