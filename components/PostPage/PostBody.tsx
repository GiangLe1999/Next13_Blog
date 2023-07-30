"use client";

import { FC, useEffect, useState } from "react";

import NextImage from "../Common/NextImage";
import ReactMarkdown from "react-markdown";

import Code from "./Code";
import TOC from "./TOC";

const customRenderers = {
  img(image: any) {
    return (
      <div className="relative aspect-video max-h-[400px]">
        <NextImage
          className="m-0 dark:m-0 rounded-md"
          src={image.src}
          alt={image.alt}
        />
      </div>
    );
  },
  code(code: any) {
    const { children } = code;
    return <Code content={children} />;
  },
};

interface Props {
  body: string;
}

const PostBody: FC<Props> = ({ body }): JSX.Element => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      {domLoaded && (
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr,0.4fr] gap-20">
          <main className="dark:prose prose prose-invert max-w-none rich-text content">
            <ReactMarkdown components={customRenderers}>{body}</ReactMarkdown>
          </main>
          <TOC selector=".content" />
        </div>
      )}
    </>
  );
};

export default PostBody;
