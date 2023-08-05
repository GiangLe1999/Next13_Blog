import useDropdown from "@/hook/useDropdown";
import { Dispatch, FC, SetStateAction, useState } from "react";
import {
  ArrowUp,
  BreakHeart,
  Edit,
  Heart,
  ThreeDots,
  TrashBin,
} from "../Assets/Icons";
import Swal from "sweetalert2";
import { CommentResponse } from "@/types/collection";
import axios from "axios";
import useAuth from "@/hook/useAuth";

interface Props {
  setShowForm: Dispatch<SetStateAction<boolean>>;
  setIsEditForm: Dispatch<SetStateAction<boolean>>;
  setIsReplyForm: Dispatch<SetStateAction<boolean>>;
  initialContent: string;
  setFormContent?: Dispatch<SetStateAction<string>>;
  locale: string;
  comment: CommentResponse;
  comments: CommentResponse[];
  setComments: Dispatch<SetStateAction<CommentResponse[]>>;
}

const common = "absolute transition-all cate-shadow";
const liCommon =
  "flex items-center gap-x-1 py-1 px-3 border-b transition hover:text-quaternary";

const CommentOptions: FC<Props> = ({
  setShowForm,
  setIsEditForm,
  setIsReplyForm,
  setFormContent,
  initialContent,
  locale,
  comment,
  comments,
  setComments,
}): JSX.Element => {
  const { show, setShow, innerRef } = useDropdown();
  const user = useAuth();

  const showEditFormHandler = () => {
    setShowForm(true);
    setIsEditForm(true);
    setIsReplyForm(false);
    setFormContent && setFormContent(initialContent);
  };

  const confirmDeleteHandler = async () => {
    try {
      const { data } = await axios.delete(
        `/api/comment?commentId=${comment.id}`
      );
      if (data.removed) {
        updateDeletedComments(comment);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateDeletedComments = (deletedComment: CommentResponse) => {
    if (!comments) return;
    let updatedComments = [...comments];

    //Nếu comment bị delete là chief comment
    if (deletedComment.chiefComment) {
      updatedComments = updatedComments.filter(
        ({ id }) => id !== deletedComment.id
      );
      //Nếu comment bị delete là reply comment
    } else {
      const chiefCommentIndex = updatedComments.findIndex(
        ({ id }) => id === deletedComment.repliedTo
      );

      const updatedReplies = updatedComments[chiefCommentIndex].replies?.filter(
        ({ id }) => id !== deletedComment.id
      );
      updatedComments[chiefCommentIndex].replies = updatedReplies;
    }

    setComments([...updatedComments]);
  };

  const openModalHandler = () => {
    Swal.fire({
      title: locale === "en" ? "Are you sure?" : "Bạn chắc chắn chứ?",
      text:
        locale === "en"
          ? "You won't be able to revert this comment!"
          : "Bạn sẽ không thể khôi phục lại comment này!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: locale === "en" ? "Yes, delete it!" : "Tôi chắc chắn",
      cancelButtonText: locale === "en" ? "Cancel" : "Hủy",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await confirmDeleteHandler();
        Swal.fire(
          locale === "en" ? "Deleted!" : "Đã xóa",
          locale === "en"
            ? "Your comment has been deleted."
            : "Comment của bạn đã được xóa thành công",
          "success"
        );
      }
    });
  };

  const likeCommentHandler = async () => {
    try {
      const { data } = await axios.post("/api/comment/update-like", {
        commentId: comment.id,
      });
      updateLikedComments(data.comment);
    } catch (error) {
      console.log(error);
    }
  };

  const updateLikedComments = (likedComment: CommentResponse) => {
    if (!comments) return;
    let updatedComments = [...comments];
    //Nếu comment được like là chief comment thì update lại comment đó bằng comment nhận về từ response
    if (likedComment.chiefComment) {
      updatedComments = updatedComments.map((comment) => {
        if (comment.id === likedComment.id) {
          return likedComment;
        }
        return comment;
      });
      //Nếu comment được like là reply comment
    } else {
      const chiefCommentIndex = updatedComments.findIndex(
        ({ id }) => id === likedComment.repliedTo
      );

      const updatedReplies = updatedComments[chiefCommentIndex].replies?.map(
        (reply) => {
          if (reply.id === likedComment.id) {
            return likedComment;
          }
          return reply;
        }
      );
      updatedComments[chiefCommentIndex].replies = updatedReplies;
    }

    setComments([...updatedComments]);
  };

  return (
    <div
      className="cursor-pointer relative"
      ref={innerRef}
      onClick={() => setShow(true)}
    >
      <ThreeDots className="w-6 h-6 dark:text-gray-700" />

      <div
        className={`${common} bottom-[1px] right-[25px] text-white z-50`}
        style={{
          transform: show ? "scale(1)" : "scale(0)",
          transformOrigin: "-10px 0px",
        }}
      >
        <ArrowUp className="w-5 h-5 z-50 transition-opacity rotate-90" />
      </div>

      {user?.id === comment.owner.id ? (
        <ul
          style={{
            transform: show ? "scale(1)" : "scale(0)",
            transformOrigin: "100px 50px",
          }}
          className={`${common} right-[40px] -top-10 py-1 pl-2 pr-3 bg-white text-gray-700 rounded`}
        >
          <li className={liCommon} onClick={showEditFormHandler}>
            <Edit /> Edit
          </li>
          <li className={`${liCommon} py-[6px]`} onClick={openModalHandler}>
            <TrashBin />
            Delete
          </li>
          <li
            className={`${liCommon} ml-[3px] gap-x-[6px] py-1 px-3 border-b-0`}
            onClick={likeCommentHandler}
          >
            {comment.likedByOwner ? (
              <>
                <BreakHeart className="w-3 h-3" />
                Unlike
              </>
            ) : (
              <>
                <Heart className="w-3 h-3" />
                Like
              </>
            )}
          </li>
        </ul>
      ) : (
        <div
          style={{
            transform: show ? "scale(1)" : "scale(0)",
            transformOrigin: "100px 10px",
          }}
          className={`${common} right-[40px] -top-[3px] py-1 px-3 bg-white text-gray-700
          rounded flex items-center gap-1 hover:text-quaternary`}
        >
          {comment.likedByOwner ? (
            <>
              <BreakHeart className="w-3 h-3" />
              Unlike
            </>
          ) : (
            <>
              <Heart className="w-3 h-3" />
              Like
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default CommentOptions;
