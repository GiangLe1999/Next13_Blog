import { FC } from "react";
import ContactForm from "@/components/ContactPage/ContactForm";
import StarsCanvas from "@/components/ContactPage/StarsCanvas";

interface Props {}

const Page: FC<Props> = (props): JSX.Element => {
  return (
    <div className="relative z-0">
      <ContactForm />
      <StarsCanvas />
    </div>
  );
};

export default Page;
