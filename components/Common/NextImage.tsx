import Image, { StaticImageData } from "next/image";
import { FC } from "react";

interface Props {
  src: string | StaticImageData;
  alt: string;
  className?: string;
}

const NextImage: FC<Props> = ({ src, alt, className }): JSX.Element => {
  return (
    <Image
      src={src}
      alt={alt}
      fill={true}
      style={{ objectFit: "cover", objectPosition: "center" }}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className={className}
    />
  );
};

export default NextImage;
