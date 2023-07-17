import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Container: FC<Props> = ({ children }): JSX.Element => {
  return <div className="px-8 w-full max-w-7xl mx-auto">{children}</div>;
};

export default Container;
