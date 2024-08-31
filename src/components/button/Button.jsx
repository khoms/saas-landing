const Button = ({ size, className, varient, title, ...props }) => {
  const sizeDesign =
    size === "sm" ? "px-8 py-3 " : size === "lg" ? "px-10 py-5 " : "px-8 py-4";
  const varientDesign =
    varient === "outlined"
      ? "bg-transparent border"
      : "bg-gradient-to-r hover:bg-gradient-to-l from-[#6A36FF] to-[#AC5FE6]";
  return (
    <button
      className={
        ` rounded-[10px] font-bold text-lg  ${className} ` +
        sizeDesign +
        varientDesign
      }
      {...props}
    >
      {title}
    </button>
  );
};

export default Button;
