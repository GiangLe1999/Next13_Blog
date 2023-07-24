"use client";
import { ChangeEvent, FC, useState } from "react";
import { motion } from "framer-motion";

import SectionWrapper from "@/hoc/SectionWrapper";
import { slideIn } from "@/utils/motion";
import EarthCanvas from "./EarthCanvas";

interface Props {}

const ContactForm: FC<Props> = (props): JSX.Element => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const formChangeHandler = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {};
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="min-w-[500px] bg-black-100 dark:bg-white-100 p-8 rounded-2xl"
      >
        <p className="sectionSubText">Get in touch</p>
        <h1 className="sectionHeadText">Contact</h1>

        <form className="mt-12 flex flex-col gap-8">
          <label htmlFor="name" className="flex flex-col">
            <span className="text-white dark:text-neutral-500 font-medium mb-4">
              Your Name
            </span>
            <input
              id="name"
              type="text"
              name="name"
              value={form.name}
              onChange={formChangeHandler}
              placeholder="What's your name?"
              className="bg-tertiary dark:bg-slate-400 py-4 px-6 placeholder:text-secondary dark:placeholder:text-neutral-300 text-white
              rounded-lg font-medium border-transparent border focus:border-white focus:border dark:focus:border-quaternary"
            />
          </label>

          <label htmlFor="email" className="flex flex-col">
            <span className="text-white dark:text-neutral-500 font-medium mb-4">
              Your Email
            </span>
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={formChangeHandler}
              placeholder="What's your email?"
              className="bg-tertiary dark:bg-slate-400 py-4 px-6 placeholder:text-secondary dark:placeholder:text-neutral-300 text-white
              rounded-lg font-medium border-transparent border focus:border-white focus:border dark:focus:border-quaternary"
            />
          </label>

          <label htmlFor="message" className="flex flex-col">
            <span className="text-white dark:text-neutral-500 font-medium mb-4">
              Your Message
            </span>
            <textarea
              rows={7}
              id="message"
              name="message"
              value={form.message}
              onChange={formChangeHandler}
              placeholder="What do you want to say?"
              className="resize-none bg-tertiary dark:bg-slate-400 py-4 px-6 placeholder:text-secondary dark:placeholder:text-neutral-300 text-white
              rounded-lg font-medium border-transparent border focus:border-white focus:border dark:focus:border-quaternary"
            />
          </label>

          <button
            className="py-3 px-8 bg-tertiary dark:bg-slate-400 outline-none w-fit text-white font-bold shawdow-md
            shadow-primary rounded-xl"
            type="submit"
          >
            {loading ? "Sending" : "Send"}
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
  );
};

export default SectionWrapper(ContactForm);
