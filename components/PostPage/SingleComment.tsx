"use client";

import { Dispatch, FC, SetStateAction, useState } from "react";
import NextImage from "../Common/NextImage";
import { CommentResponse } from "@/types/collection";
import { formatDate } from "@/lib/helpers";
import CommentForm from "./CommentForm";
import CommentOptions from "./CommentOptions";

interface Props {
  comment: CommentResponse;
  locale: string;
  postId: string;
  comments: CommentResponse[];
  setComments: Dispatch<SetStateAction<CommentResponse[]>>;
}

const SingleComment: FC<Props> = ({
  comment,
  locale,
  postId,
  comments,
  setComments,
}) => {
  const [showForm, setShowForm] = useState(false);
  const [isEditForm, setIsEditForm] = useState(false);
  const [isReplyForm, setIsReplyForm] = useState(false);
  const [formContent, setFormContent] = useState("");

  const showReplyFormHandler = () => {
    setShowForm(true);
    setIsReplyForm(true);
    setIsEditForm(false);
    setFormContent("");
  };

  return (
    <div className="">
      <div
        className={`flex gap-x-4 py-8  ${
          !showForm ? "border-b border-neutral-600 dark:border-neutral-300" : ""
        }`}
      >
        <div className="relative w-14 h-14 rounded-full overflow-hidden">
          <NextImage
            src={comment.owner.avatar || ""}
            alt={comment.owner.name}
          />
        </div>

        <div className="flex-1 text-white">
          <div className="flex justify-between items-center">
            {/* User profile */}
            <div>
              <p className="text-xl font-bold dark:text-gray-800">
                {comment.owner.name}
              </p>
              <p className="text-sm font-bold dark:text-gray-500">
                {formatDate(comment.createdAt, locale)}
              </p>
            </div>

            {/* Options */}
            <CommentOptions
              setShowForm={setShowForm}
              setIsEditForm={setIsEditForm}
              setIsReplyForm={setIsReplyForm}
              initialContent={comment.content}
              setFormContent={setFormContent}
              locale={locale}
              comment={comment}
              comments={comments}
              setComments={setComments}
            />
          </div>

          <p className="text-base font-medium dark:text-gray-800 my-5">
            {comment.content}
          </p>

          {/* Button */}
          <div className="flex items-center justify-between">
            <p className="text-quaternary text-sm font-bold">
              {comment.likes} people liked this comment
            </p>
            <button
              className="post-btn rounded-3xl !w-28 !py-3"
              onClick={showReplyFormHandler}
            >
              {locale === "en" ? "Reply" : "Phản hồi"}
            </button>
          </div>
        </div>
      </div>

      {/* Form */}
      {showForm && (
        <CommentForm
          locale={locale}
          commentId={comment.chiefComment ? comment.id : comment.repliedTo}
          editId={comment.id}
          setShowForm={setShowForm}
          comments={comments}
          setComments={setComments}
          isReplyForm={isReplyForm}
          isEditForm={isEditForm}
          setIsReplyForm={setIsReplyForm}
          setIsEditForm={setIsEditForm}
          formContent={formContent}
          setFormContent={setFormContent}
        />
      )}

      {/* Replies */}
      {comment.replies && comment.replies?.length > 0 ? (
        <div className="w-[93%] ml-auto space-y-3">
          {comment.replies?.map((reply) => (
            <SingleComment
              locale={locale}
              key={reply.id}
              postId={postId}
              comment={reply}
              comments={comments}
              setComments={setComments}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default SingleComment;
