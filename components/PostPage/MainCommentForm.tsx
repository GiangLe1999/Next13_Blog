import { CommentResponse } from "@/types/collection";
import axios from "axios";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { Spinner } from "../Assets/Icons";
import LoginPopup from "../Common/LoginPopup";

interface Props {
  locale: string;
  postId: string;
  commentId?: string;
  comments: CommentResponse[];
  setComments: Dispatch<SetStateAction<CommentResponse[]>>;
}

const MainCommentForm: FC<Props> = ({
  locale,
  postId,
  comments,
  setComments,
}): JSX.Element => {
  const [formContent, setFormContent] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const commentSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      const { data } = await axios.post("/api/comment/", {
        content: formContent,
        belongsTo: postId,
      });
      const newComment = data;
      if (newComment && comments) {
        setComments && setComments([...comments, newComment]);
      } else {
        setComments && setComments([newComment]);
      }
      setFormContent("");
      setSubmitting(false);
    } catch (error) {
      setSubmitting(false);
      LoginPopup(locale);
      console.log(error);
    }
  };

  return (
    <form className="shadow-md dark:p-8" onSubmit={commentSubmitHandler}>
      <div className="flex justify-between">
        <div>
          <h4 className="post-section-title">
            {locale === "en" && "Leave a comment"}
            {locale === "vi" && "Ý kiến của bạn"}
          </h4>
          <p className="mb-4 dark:text-gray-900 text-white">
            {locale === "en"
              ? "Comments are reviewed and must adhere to our comments policy."
              : "Bình luận sẽ được kiểm duyệt và phải tuân theo chính sách bình luận."}
          </p>
        </div>
      </div>

      <textarea
        name="body"
        id="body"
        value={formContent}
        rows={10}
        onChange={(e) => {
          setFormContent(e.target.value);
        }}
        placeholder={locale === "en" ? "Type here ..." : "Comment vào đây ..."}
        className="p-3 rounded-md resize-none text-white dark:text-gray-800 bg-[#202020] dark:bg-[#6d7c901a] border-2 dark:focus:bg-white hover:border-2
    hover:border-quaternary w-full focus:border-white focus:!border-2 dark:focus:border-quaternary transition"
      />

      <div className="flex justify-end mt-4">
        <button type="submit" className="post-btn rounded-3xl !py-4">
          {submitting && (
            <Spinner className="animate-spin w-5 h-5 text-white" />
          )}

          {locale === "en" && !submitting && "Submit comment"}
          {locale === "en" && submitting && "Submitting"}

          {locale === "vi" && !submitting && "Gửi comment"}
          {locale === "vi" && submitting && "Đang gửi"}
        </button>
      </div>
    </form>
  );
};

export default MainCommentForm;
