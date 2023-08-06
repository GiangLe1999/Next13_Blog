"use client";

import { FC, useState, useEffect } from "react";
import SingleComment from "./SingleComment";
import { CommentResponse } from "@/types/collection";
import axios from "axios";
import { NextAuthProvider } from "@/app/providers";
import MainCommentForm from "./MainCommentForm";
import { countComments } from "@/lib/helpers";
import { NoComments, Spinner } from "../Assets/Icons";

interface Props {
  locale: string;
  postId: string;
}

const Comments: FC<Props> = ({ locale, postId }): JSX.Element => {
  const [comments, setComments] = useState<CommentResponse[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios(`/api/comment?belongsTo=${postId}`)
      .then(({ data }) => {
        setComments(data.comments);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div>
        {comments.length > 0 && (
          <h4 className="post-section-title">
            {countComments(comments, locale)}
          </h4>
        )}

        <div className="p-8 header-gradient dark:bg-none dark:bg-white shadow-md rounded-md min-h-[300px]">
          {!loading ? (
            <NextAuthProvider>
              <div>
                {comments.length > 0 ? (
                  comments?.map((comment) => (
                    <SingleComment
                      postId={postId}
                      key={comment.id}
                      comment={comment}
                      locale={locale}
                      comments={comments}
                      setComments={setComments}
                    />
                  ))
                ) : (
                  <div className="mt-12 flex flex-col items-center gap-3">
                    <NoComments className="w-8 h-8 fill-quaternary" />
                    <p className="empty-section-title">
                      {locale === "en"
                        ? "No Comments Yet"
                        : "Chưa có bình luận nào"}
                    </p>
                    <p className="empty-section-subtitle">
                      {locale === "en"
                        ? "Be the first to share what you think!"
                        : "Hãy là người đầu tiên bình luận!"}
                    </p>
                  </div>
                )}
              </div>
            </NextAuthProvider>
          ) : (
            <div className="w-full flex justify-center mt-[75px]">
              <div className="flex flex-col gap-3 items-center">
                <Spinner className="animate-spin text-quaternary w-10 h-10" />
                <p className="empty-section-subtitle">
                  {locale === "en"
                    ? "Loading comment ..."
                    : "Đang tải bình luận ..."}
                </p>
              </div>
            </div>
          )}
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
