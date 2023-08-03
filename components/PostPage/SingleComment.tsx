import { FC } from "react";
import NextImage from "../Common/NextImage";
import { CommentResponse } from "@/types/collection";
import { formatDate } from "@/lib/helpers";

interface Props {
  comment: CommentResponse;
  locale: string;
}

const SingleComment: FC<Props> = ({ comment, locale }) => {
  return (
    <div className="flex gap-x-4 py-3">
      <div className="relative w-14 h-14 rounded-full overflow-hidden">
        <NextImage src={comment.owner.avatar || ""} alt={comment.owner.name} />
      </div>

      <div className="flex-1">
        <p className="text-xl font-bold text-gray-800">{comment.owner.name}</p>
        <p className="text-sm font-bold text-gray-500">
          {formatDate(comment.createdAt, locale)}
        </p>
        <p className="text-base font-medium text-gray-800 my-5">
          {comment.content}
        </p>
        <div className="text-right">
          <button className="post-btn rounded-3xl !w-28 !py-3">Reply</button>
        </div>
      </div>
    </div>
  );
};

export default SingleComment;
