"use client";
import useAuth from "@/hook/useAuth";
import axios from "axios";

import { FC, useState } from "react";

interface Props {
  locale: string;
  postId: string;
}

const CommentForm: FC<Props> = ({ locale, postId }): JSX.Element => {
  const [content, setContent] = useState("");
  const user = useAuth();

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/comment/", {
        content,
        belongsTo: postId,
      });
      // const newComment = data.comment;
      // if (newComment && comments) {
      //   setComments([...comments, newComment]);
      // } else setComments([newComment]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="p-8 shadow-md" onSubmit={submitHandler}>
      <h4 className="post-section-title">
        {locale === "en" ? "Leave a comment" : "Ý kiến của bạn"}
      </h4>
      <p className="mb-4">
        Comments are reviewed and must adhere to our comments policy.
      </p>

      <textarea
        name="body"
        id="body"
        rows={10}
        onChange={(e) => {
          setContent(e.target.value);
        }}
        placeholder={locale === "en" ? "Type here ..." : "Comment vào đây ..."}
        className="p-3 rounded-md resize-none bg-[#6d7c901a] border-2 focus:bg-white hover:border-2
        hover:border-quaternary w-full focus:border-white focus:!border-2 dark:focus:border-quaternary transition"
      ></textarea>

      <div className="text-right mt-4">
        <button type="submit" className="post-btn rounded-3xl !w-40 !py-4">
          {locale === "en" ? "Submit comment" : "Gửi comment"}
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
