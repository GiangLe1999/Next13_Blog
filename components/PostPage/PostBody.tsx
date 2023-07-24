import { FC } from "react";

interface Props {
  body: string;
}

const PostBody: FC<Props> = ({ body }): JSX.Element => {
  return <div>PostBody</div>;
};

export default PostBody;
