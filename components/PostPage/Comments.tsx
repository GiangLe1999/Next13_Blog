"use client";

import { FC, useState, useEffect } from "react";
import SingleComment from "./SingleComment";
import { CommentResponse } from "@/types/collection";
import axios from "axios";
import { NextAuthProvider } from "@/app/providers";
import MainCommentForm from "./MainCommentForm";

interface Props {
  locale: string;
  postId: string;
}

const Comments: FC<Props> = ({ locale, postId }): JSX.Element => {
  const [comments, setComments] = useState<CommentResponse[]>([]);

  useEffect(() => {
    axios(`/api/comment?belongsTo=${postId}`)
      .then(({ data }) => setComments(data.comments))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div>
        <h4 className="post-section-title">
          {locale === "en" ? "20 Comments" : "20 Bình luận"}
        </h4>

        <div className="p-8 header-gradient dark:bg-none dark:bg-white shadow-md rounded-md">
          <NextAuthProvider>
            <div>
              {comments?.map((comment) => (
                <SingleComment
                  postId={postId}
                  key={comment.id}
                  comment={comment}
                  locale={locale}
                  comments={comments}
                  setComments={setComments}
                />
              ))}
            </div>
          </NextAuthProvider>
        </div>
      </div>

      <div>
        <NextAuthProvider>
          <MainCommentForm
            comments={comments}
            setComments={setComments}
            locale={locale}
            postId={postId}
          />
        </NextAuthProvider>
      </div>
    </>
  );
};

export default Comments;
