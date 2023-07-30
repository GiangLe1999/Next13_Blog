import { FC } from "react";
import siteConfig from "@/config/site";
import SocialLink from "./SocialLink";
import CTAForm from "./CTAForm";

interface Props {
  dictionary: {
    title: string;
    description: string;
    button: string;
    placeholder: string;
    followText: string;
  };
}

const CTACard: FC<Props> = ({ dictionary }): JSX.Element => {
  return (
    <div
      className="rounded-md bg-slate-10 md:h-[300px] md:gap-28 gap-10 py-10 px-6 relative
    overflow-hidden flex flex-col md:flex-row items-center"
    >
      {/* Overlay */}
      <div className="absolute z-10 inset-0 bg-gradient-to-r from-pink-600 to-pink-700"></div>

      {/* Content container */}
      <div className="relative z-10 md:w-[60%]">
        <h3 className="text-xl font-bold text-white">{dictionary.title}</h3>
        <p className="max-w-md mt-2 text-sm text-white">
          {dictionary.description}
        </p>

        {/* Form */}
        <CTAForm
          buttonText={dictionary.button}
          placeholder={dictionary.placeholder}
        />
      </div>

      <div className="hidden xs:block relative z-10 space-y-2 flex-1">
        <h3 className="text-xl font-bold text-white">
          {dictionary.followText}
        </h3>
        <ul className="md:space-y-2 md:flex md:flex-col md:items-start flex flex-row items-center md:gap-0 gap-3">
          {siteConfig.socialsLinks.map((social, index) => (
            <SocialLink key={index} index={index} social={social} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CTACard;
