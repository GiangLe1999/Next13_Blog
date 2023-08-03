"use client";

import { FC, useState, useEffect } from "react";
import SingleComment from "./SingleComment";
import { CommentResponse } from "@/types/collection";
import axios from "axios";

interface Props {
  locale: string;
  postId: string;
}

const Comments: FC<Props> = ({ locale, postId }): JSX.Element => {
  const [comments, setComments] = useState<CommentResponse[]>();

  useEffect(() => {
    axios(`/api/comment?belongsTo=${postId}`)
      .then(({ data }) => setComments(data.comments))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h4 className="post-section-title">
        {locale === "en" ? "20 Comments" : "20 Bình luận"}
      </h4>
      <div className="p-8 shadow-md">
        <div>
          {comments?.map((comment) => (
            <SingleComment key={comment.id} comment={comment} locale={locale} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comments;
