"use client";

import { FC } from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  RedditShareButton,
} from "next-share";

import SocialShareButton from "./SocialShareButton";

interface Props {
  slug: string;
  title: string;
  quote?: string;
}

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const SocialShare: FC<Props> = ({ slug, title, quote }): JSX.Element => {
  const url = baseURL + "/post/" + slug;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 w-full">
      <FacebookShareButton url={url} quote={quote} title={title}>
        <SocialShareButton
          title="Facebook"
          color="#404f89"
          subColor="#475899"
        />
      </FacebookShareButton>

      <TwitterShareButton url={url} title={title}>
        <SocialShareButton title="Twitter" color="#5d9ad7" subColor="#68abef" />
      </TwitterShareButton>

      <LinkedinShareButton url={url} title={title}>
        <SocialShareButton
          title="Linkedin"
          color="#446ea3"
          subColor="#4c7bb5"
        />
      </LinkedinShareButton>

      <PinterestShareButton url={url} description={title} media={title}>
        <SocialShareButton
          title="Pinterest"
          color="#9b1f15"
          subColor="#ad2217"
        />
      </PinterestShareButton>

      <RedditShareButton url={url} title={title}>
        <SocialShareButton title="Reddit" color="#d94800" subColor="#c74200" />
      </RedditShareButton>
    </div>
  );
};

export default SocialShare;
