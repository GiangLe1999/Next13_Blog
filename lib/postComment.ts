import { CommentProps } from "@/model/comment";
import { CommentResponse, UserProfile } from "@/types/collection";

const getLikedByOwner = (likes: any[], user: UserProfile) => {
  return likes.includes(user.id);
};

export const formatComment = (
  comment: CommentProps,
  user?: UserProfile
): CommentResponse => {
  const owner = comment.owner as any;

  return {
    id: comment._id.toString(),
    content: comment.content,
    likes: comment.likes.length,
    chiefComment: comment?.chiefComment || false,
    createdAt: comment.createdAt?.toString() || "",
    owner: { id: owner._id, name: owner.name, avatar: owner.avatar },
    repliedTo: comment?.repliedTo?.toString(),
    likedByOwner: user ? getLikedByOwner(comment.likes, user) : false,
  };
};
