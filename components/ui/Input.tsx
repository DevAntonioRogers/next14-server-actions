const Input = ({ name, type, placeholder }) => {
  return (
    <>
      <input
        className="border-gray-700 border"
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
