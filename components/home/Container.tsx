import React, { HTMLProps } from "react";

interface ContainerProps extends HTMLProps<HTMLDivElement> {
  className?: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={`container mx-auto px-3 md:px-4 lg:px-6 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
