import {
  FacebookShare,
  LinkedinShare,
  PinterestShare,
  RedditShare,
  TwitterShare,
} from "@/icons";
import { FC } from "react";

interface Props {
  title: string;
  color: string;
  subColor: string;
}

const SocialShareButton: FC<Props> = ({
  title,
  color,
  subColor,
}): JSX.Element => {
  let Icon;
  switch (title) {
    case "Facebook":
      Icon = <FacebookShare className="w-5 h-5" />;
      break;
    case "Twitter":
      Icon = <TwitterShare className="w-5 h-5" />;
      break;
    case "Linkedin":
      Icon = <LinkedinShare className="w-5 h-5" />;
      break;
    case "Reddit":
      Icon = <RedditShare className="w-5 h-5" />;
      break;
    default:
      Icon = <PinterestShare className="w-5 h-5" />;
  }
  return (
    <div
      className="flex items-center h-11 w-full rounded-md text-white relative group overflow-hidden"
      style={{ backgroundColor: color }}
    >
      <div className="h-full flex items-center absolute -left-11 top-0 group-hover:left-0 transition-left duration-[400ms]">
        <div
          className="w-11 h-full grid place-items-center"
          style={{ backgroundColor: color }}
        >
          {Icon}
        </div>
        <div
          className="w-11 h-full grid place-items-center group-hover:-z-11 group-hover:opacity-0 
        transition-opacity duration-[400ms]"
          style={{ backgroundColor: subColor }}
        >
          {Icon}
        </div>
      </div>
      <div className="ml-11 relative z-10 flex flex-1 pl-4 font-semibold">
        {title}
      </div>
    </div>
  );
};

export default SocialShareButton;
