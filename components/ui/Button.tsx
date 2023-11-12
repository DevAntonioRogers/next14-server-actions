import clsx from "clsx";

const Button = ({
  type,
  text,
  onClick,
  actionButton,
  classname,
}) => {
  return (
    <>
      <button
        onClick={onClick}
        type={type}
        className={clsx(
          actionButton &&
            `bg-orange-700 rounded-full p-2 text-white`,
          `bg-orange-700 px-2 text-white`
        )}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
