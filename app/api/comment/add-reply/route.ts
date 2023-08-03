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

  const { repliedTo, content } = await req.json();

  if (!content && !content.trim())
    return NextResponse.json(
      { error: "Invalid comment!" },
      {
        status: 422,
      }
    );

  await dbConnect();

  const chiefComment = await Comment.findOne({
    _id: repliedTo,
    chiefComment: true,
  });

  if (!chiefComment) {
    return NextResponse.json(
      { error: "Comment not found!" },
      {
        status: 404,
      }
    );
  }

  const replyComment = new Comment({ owner: user.id, repliedTo, content });
  await replyComment.save();

  if (chiefComment.replies) {
    chiefComment.replies = [...chiefComment.replies, replyComment._id];
  }
  await chiefComment.save();

  return NextResponse.json(
    { comment: replyComment },
    {
      status: 201,
    }
  );
}
