import { FC } from "react";
import ContactForm from "@/components/ContactPage/ContactForm";
import StarsCanvas from "@/components/ContactPage/StarsCanvas";
import { getDictionary } from "@/lib/getDictionary";

interface Props {
  params: { lang: string };
}

const Page: FC<Props> = async ({ params }) => {
  const dictionary = await getDictionary(params.lang);
  return (
    <div className="relative z-0">
      <ContactForm dictionary={dictionary.contact} />
      <StarsCanvas />
    </div>
  );
};

export default Page;
