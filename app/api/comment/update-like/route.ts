import dbConnect from "@/lib/dbConnect";
import { isAuth } from "@/lib/isAuth";
import Comment from "@/model/comment";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const user = await isAuth();

  if (!user)
    return NextResponse.json(
      { error: "Unauthorized request!" },
      {
        status: 403,
      }
    );

  const { commentId } = await req.json();

  await dbConnect();

  const comment = await Comment.findById(commentId);
  if (!comment) {
    return NextResponse.json(
      { error: "Comment not found!" },
      {
        status: 404,
      }
    );
  }

  const oldLikes = comment.likes || [];
  const likedBy = user.id as any;

  if (oldLikes.includes(likedBy)) {
    comment.likes = oldLikes.filter(
      (like) => like.toString() !== likedBy.toString()
    );
  } else {
    comment.likes = [...oldLikes, likedBy];
  }

  await comment.save();

  return NextResponse.json(
    { comment },
    {
      status: 201,
    }
  );
}
