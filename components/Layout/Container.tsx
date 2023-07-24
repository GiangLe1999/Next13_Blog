import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const Container: FC<Props> = ({ children, className }): JSX.Element => {
  return (
    <div className={`paddingX w-full max-w-7xl mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;
