"use client";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import { motion } from "framer-motion";

import { slideIn } from "@/utils/motion";
import EarthCanvas from "./EarthCanvas";
import SectionWrapper from "../Common/SectionWrapper";
import { ContactPage } from "@/types/collection";
import directus from "@/lib/directus";

interface Props {
  dictionary: ContactPage;
}

const formInitialValue = { name: "", email: "", message: "" };

const ContactForm: FC<Props> = ({ dictionary }): JSX.Element => {
  const [form, setForm] = useState(formInitialValue);
  const [isHandling, setIsHandling] = useState(false);

  const formChangeHandler = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const formSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setIsHandling(true);
      await directus.items("message").createOne({
        email: form.email,
        name: form.name,
        message: form.message,
      });

      setIsHandling(false);
      setForm(formInitialValue);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SectionWrapper>
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="min-w-[500px] bg-black-100 dark:bg-white-100 p-8 rounded-2xl"
        >
          <p className="sectionSubText">{dictionary.subTitle}</p>
          <h1 className="sectionHeadText">{dictionary.title}</h1>

          <form
            className="mt-12 flex flex-col gap-8"
            onSubmit={formSubmitHandler}
          >
            <label htmlFor="name" className="flex flex-col">
              <span className="text-white dark:text-neutral-500 font-medium mb-4">
                {dictionary.input1.label}
              </span>
              <input
                id="name"
                type="text"
                name="name"
                value={form.name}
                onChange={formChangeHandler}
                placeholder={dictionary.input1.placeholder}
                className="bg-tertiary dark:bg-slate-400 py-4 px-6 placeholder:text-secondary dark:placeholder:text-neutral-300 text-white
              rounded-lg font-medium border-transparent border focus:border-white focus:border dark:focus:border-quaternary"
              />
            </label>

            <label htmlFor="email" className="flex flex-col">
              <span className="text-white dark:text-neutral-500 font-medium mb-4">
                {dictionary.input2.label}
              </span>
              <input
                id="email"
                type="email"
                name="email"
                value={form.email}
                onChange={formChangeHandler}
                placeholder={dictionary.input2.placeholder}
                className="bg-tertiary dark:bg-slate-400 py-4 px-6 placeholder:text-secondary dark:placeholder:text-neutral-300 text-white
              rounded-lg font-medium border-transparent border focus:border-white focus:border dark:focus:border-quaternary"
              />
            </label>

            <label htmlFor="message" className="flex flex-col">
              <span className="text-white dark:text-neutral-500 font-medium mb-4">
                {dictionary.input3.label}
              </span>
              <textarea
                rows={7}
                id="message"
                name="message"
                value={form.message}
                onChange={formChangeHandler}
                placeholder={dictionary.input3.placeholder}
                className="resize-none bg-tertiary dark:bg-slate-400 py-4 px-6 placeholder:text-secondary dark:placeholder:text-neutral-300 text-white
              rounded-lg font-medium border-transparent border focus:border-white focus:border dark:focus:border-quaternary"
              />
            </label>

            <button
              className="py-3 px-8 bg-tertiary dark:bg-slate-400 outline-none w-fit text-white font-bold shawdow-md
            shadow-primary rounded-xl"
              type="submit"
            >
              {isHandling ? dictionary.busyButton : dictionary.button}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default ContactForm;
