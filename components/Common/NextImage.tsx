"use client";

import Image, { StaticImageData } from "next/image";
import { FC, useState } from "react";

interface Props {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  priority?: boolean;
}

const common = "duration-700 ease-in-out";

const NextImage: FC<Props> = ({
  src,
  alt,
  className,
  priority,
}): JSX.Element => {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      src={src}
      alt={alt}
      fill={true}
      style={{
        objectFit: "cover",
        objectPosition: "center",
      }}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className={`${className} ${common} ${
        isLoading ? "blur-2xl grayscale" : "blur-0 grayscale-0"
      }`}
      onLoadingComplete={() => setLoading(false)}
      priority={priority}
    />
  );
};

export default NextImage;
