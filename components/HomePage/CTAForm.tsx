"use client";

import directus from "@/lib/directus";
import { FC, FormEvent, useState } from "react";

interface Props {
  buttonText: string;
  placeholder: string;
}

const CTAForm: FC<Props> = ({ buttonText, placeholder }): JSX.Element => {
  const [email, setEmail] = useState("");
  const [isHandling, setIsHandling] = useState(false);

  const submitHandler = async (e: FormEvent) => {
    try {
      e.preventDefault();
      setIsHandling(true);
      await directus.items("subscribers").createOne({
        email,
      });
      setIsHandling(false);
      setEmail("");
    } catch (error) {
      console.log(error);
      setIsHandling(false);
    }
  };

  return (
    <form onSubmit={submitHandler} className="mt-6 flex items-center gap-2">
      <input
        placeholder={placeholder}
        type="email"
        name="email"
        value={email}
        className="flex-1 bg-white text-base rounded-md py-3 px-4 outline-none
    focus:ring-2 ring-neutral-600 w-full"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="w-28 px-4 py-[13px] bg-neutral-900 rounded-md text-neutral-200 font-semibold">
        {buttonText}
      </button>
    </form>
  );
};

export default CTAForm;
