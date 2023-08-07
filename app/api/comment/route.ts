import dbConnect from "@/lib/dbConnect";
import { isAuth } from "@/lib/isAuth";
import { formatComment } from "@/lib/postComment";
import Comment from "@/model/comment";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const user = (await isAuth()) as any;

  const { searchParams } = new URL(req.url);
  const belongsTo = searchParams.get("belongsTo");

  if (!belongsTo)
    return NextResponse.json(
      { error: "Invalid request!" },
      {
        status: 422,
      }
    );

  const comments = await Comment.find({ belongsTo })
    .populate({ path: "owner", select: "name avatar" })
    .populate({
      path: "replies",
      populate: { path: "owner", select: "name avatar" },
    });

  if (!comments) return NextResponse.json({ comments });
  const fortmattedComment = comments.map((comment) => ({
    ...formatComment(comment, user),
    replies: comment.replies?.map((reply: any) => formatComment(reply, user)),
  }));
  return NextResponse.json({ comments: fortmattedComment });
}

export async function POST(req: Request) {
  const user = await isAuth();

  if (!user)
    return NextResponse.json(
      { error: "Unauthorized request!" },
      {
        status: 403,
      }
    );

  const { content, belongsTo } = await req.json();

  if (!content && !content.trim())
    return NextResponse.json(
      { error: "Invalid comment!" },
      {
        status: 422,
      }
    );

  await dbConnect();

  const comment = new Comment({
    content,
    belongsTo,
    owner: user.id,
    chiefComment: true,
  });

  await comment.save();

  const commentWithOwner = await comment.populate("owner");

  return NextResponse.json(formatComment(commentWithOwner), {
    status: 201,
  });
}

export async function PATCH(req: Request) {
  const user = await isAuth();

  if (!user)
    return NextResponse.json(
      { error: "Unauthorized request!" },
      {
        status: 403,
      }
    );

  const { commentId, content } = await req.json();
  const comment = await Comment.findOne({ _id: commentId, owner: user.id });

  if (!comment) {
    return NextResponse.json(
      { error: "Comment not found!" },
      {
        status: 404,
      }
    );
  }

  comment.content = content;
  await comment.save();

  return NextResponse.json(
    { comment: formatComment(comment) },
    {
      status: 201,
    }
  );
}

export async function DELETE(req: Request) {
  const user = await isAuth();

  if (!user)
    return NextResponse.json(
      { error: "Unauthorized request!" },
      {
        status: 403,
      }
    );

  const { searchParams } = new URL(req.url);
  const commentId = searchParams.get("commentId");

  if (!commentId) {
    return NextResponse.json(
      { error: "Comment not found!" },
      {
        status: 404,
      }
    );
  }

  const comment = await Comment.findOne({ _id: commentId, owner: user.id });

  if (!comment) {
    return NextResponse.json(
      { error: "Comment not found!" },
      {
        status: 404,
      }
    );
  }

  // Remove reply (if any)
  if (comment.chiefComment) {
    await Comment.deleteMany({ repliesTo: commentId });
  } else {
    const chiefComment = await Comment.findById(comment.repliedTo);
    if (chiefComment?.replies?.includes(commentId as any)) {
      chiefComment.replies = chiefComment.replies.filter(
        (replyId) => replyId.toString() !== commentId.toString()
      );
    }

    await chiefComment?.save();
  }

  // Remove chieftComent
  await Comment.findByIdAndDelete(commentId);

  return NextResponse.json(
    { removed: true },
    {
      status: 200,
    }
  );
}
