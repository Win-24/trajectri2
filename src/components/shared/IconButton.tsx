
"use client";

interface IconButtonProps {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const IconButton: React.FC<React.PropsWithChildren<IconButtonProps>> = ({
  children,
  className = "",
  onClick,
}) => {
  return (
    <div
      className={`cursor-pointer rounded-full p-2 hover:bg-gray-200 hover:text-gray-700 ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default IconButton;
