"use client";
import { CommentResponse } from "@/types/collection";
import axios from "axios";

import { Dispatch, FC, useState, SetStateAction } from "react";
import { Spinner } from "../Assets/Icons";

interface Props {
  locale: string;
  setShowForm?: Dispatch<SetStateAction<boolean>>;
  commentId?: string;
  comments: CommentResponse[];
  setComments: Dispatch<SetStateAction<CommentResponse[]>>;
  isEditForm?: boolean;
  isReplyForm?: boolean;
  setIsEditForm?: Dispatch<SetStateAction<boolean>>;
  setIsReplyForm?: Dispatch<SetStateAction<boolean>>;
  formContent: string;
  setFormContent: Dispatch<SetStateAction<string>>;
  editId?: string;
}

const CommentForm: FC<Props> = ({
  locale,
  isReplyForm,
  setShowForm,
  commentId,
  comments,
  setComments,
  isEditForm,
  setIsEditForm,
  setIsReplyForm,
  formContent,
  setFormContent,
  editId,
}): JSX.Element => {
  const [submitting, setSubmitting] = useState(false);

  const replySubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      const { data } = await axios.post("/api/comment/add-reply", {
        repliedTo: commentId,
        content: formContent,
      });
      setSubmitting(false);
      closeFormHandler();
      insertNewReplyHandler(data.comment);
    } catch (error) {
      console.log(error);
    }
  };

  const insertNewReplyHandler = (reply: CommentResponse) => {
    if (!comments) return;
    let updatedComments = [...comments];

    const chiefCommentIndex = updatedComments.findIndex(
      ({ id }) => id === reply.repliedTo
    );

    const { replies } = updatedComments[chiefCommentIndex];

    if (replies) {
      updatedComments[chiefCommentIndex].replies = [...replies, reply];
    } else {
      updatedComments[chiefCommentIndex].replies = [reply];
    }

    setComments([...updatedComments]);
  };

  const editSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      const { data } = await axios.patch(`/api/comment`, {
        commentId: editId,
        content: formContent,
      });
      setSubmitting(false);
      closeFormHandler();
      updateCommentHandler(data.comment);
    } catch (error) {
      console.log(error);
    }
  };

  const updateCommentHandler = (updatedComment: CommentResponse) => {
    if (!comments) return;

    let updatedComments = [...comments];
    //Nếu comment được update là chief comment
    if (updatedComment.chiefComment) {
      const index = comments.findIndex(({ id }) => id === updatedComment.id);
      updatedComments[index].content = updatedComment.content;
    }
    //Nếu comment được update là reply comment
    else {
      const chiefCommentIndex = updatedComments.findIndex(
        ({ id }) => id === updatedComment.repliedTo
      );

      let updatedReplies = updatedComments[chiefCommentIndex].replies;
      updatedReplies = updatedReplies?.map((comment) => {
        if (comment.id === updatedComment.id) {
          comment.content = updatedComment.content;
        }
        return comment;
      });

      updatedComments[chiefCommentIndex].replies = updatedReplies;
    }

    setComments([...updatedComments]);
  };

  const closeFormHandler = () => {
    setShowForm && setShowForm(false);
    isEditForm && setIsEditForm && setIsEditForm(false);
    isReplyForm && setIsReplyForm && setIsReplyForm(false);
  };

  return (
    <form
      className="pb-8 border-b"
      onSubmit={isReplyForm ? replySubmitHandler : editSubmitHandler}
    >
      <div className="flex justify-between">
        <div>
          <h4 className="post-section-title">
            {locale === "en" && isReplyForm && "Leave a reply"}
            {locale === "vi" && isReplyForm && "Phản hồi về comment này"}

            {locale === "en" && isEditForm && "Edit your comment"}
            {locale === "vi" && isEditForm && "Chỉnh sửa bình luận"}
          </h4>
          <p className="mb-4 dark:text-gray-900 text-white">
            {locale === "en"
              ? "Comments are reviewed and must adhere to our comments policy."
              : "Bình luận sẽ được kiểm duyệt và phải tuân theo chính sách bình luận."}
          </p>
        </div>

        {(isReplyForm || isEditForm) && (
          <button
            type="button"
            onClick={closeFormHandler}
            className="text-sm font-bold text-quaternary"
          >
            {locale === "en" ? "Cancel reply" : "Đóng form"}
          </button>
        )}
      </div>

      <textarea
        name="body"
        id="body"
        value={formContent}
        autoFocus
        rows={10}
        onChange={(e) => {
          setFormContent(e.target.value);
        }}
        placeholder={
          locale === "en" ? "Your opinion ..." : "Ý kiến của bạn ..."
        }
        className="p-3 rounded-md resize-none text-white dark:text-gray-800 bg-[#202020] dark:bg-[#6d7c901a] border-2 dark:focus:bg-white hover:border-2
        hover:border-quaternary w-full focus:border-white focus:!border-2 dark:focus:border-quaternary transition"
      ></textarea>

      <div className="flex justify-end mt-4">
        <button type="submit" className="post-btn rounded-3xl !w-44 !py-4">
          {submitting && (
            <Spinner className="animate-spin w-5 h-5 text-white" />
          )}

          {locale === "en" && isReplyForm && !submitting && "Send reply"}
          {locale === "vi" && isReplyForm && !submitting && "Gửi phản hồi"}

          {locale === "en" && isEditForm && !submitting && "Comfirm"}
          {locale === "vi" && isEditForm && !submitting && "Xác nhận"}

          {locale === "en" && submitting && "Sending"}
          {locale === "vi" && submitting && "Đang gửi"}
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
