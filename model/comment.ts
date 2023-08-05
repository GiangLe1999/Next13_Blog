import { Model, ObjectId, Schema, model, models } from "mongoose";

export interface CommentProps {
  _id: ObjectId;
  belongsTo: string;
  owner: ObjectId;
  content: string;
  likes: ObjectId[];
  replies?: ObjectId[];
  repliedTo?: ObjectId;
  chiefComment?: boolean;
  createdAt?: string;
}

const CommentSchema = new Schema<CommentProps>(
  {
    belongsTo: { type: "string" },
    owner: { type: Schema.Types.ObjectId, ref: "User", required: true },
    content: { type: String, required: true },
    likes: { type: [{ type: Schema.Types.ObjectId, ref: "User" }] },
    replies: { type: [{ type: Schema.Types.ObjectId, ref: "Comment" }] },
    repliedTo: { type: Schema.Types.ObjectId, ref: "Comment" },
    chiefComment: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Comment = models?.Comment || model("Comment", CommentSchema);

export default Comment as Model<CommentProps>;
