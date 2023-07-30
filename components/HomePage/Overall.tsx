import { FC } from "react";
import ScrollIcon from "../Common/ScrollIcon";
import Container from "../Layout/Container";
import { OverallDictionary } from "./Hero";

interface Props {
  dictionary: OverallDictionary;
}

const Overall: FC<Props> = ({ dictionary }) => {
  return (
    <Container
      className="absolute inset-0 top-[120px]
     flex flex-row items-start gap-5"
    >
      {/* Dot & line */}
      <div className="flex flex-col justify-center items-center mt-5">
        <div className="w-5 h-5 rounded-full bg-quaternary" />
        <div className="w-1 sm:h-80 h-40 pink-gradient"></div>
      </div>

      <div>
        <h1 className="heroHeadText">
          <span className="font-medium">{dictionary.title} </span>
          <span className="text-quaternary">River Lee</span>
        </h1>

        <p className="heroSubText flex flex-col">
          <span>{dictionary.subTitle1}</span>
          <span>{dictionary.subTitle2}</span>
        </p>
      </div>

      <ScrollIcon idName="categories" className="xs:left-16 left-6 bottom-10" />
    </Container>
  );
};

export default Overall;
