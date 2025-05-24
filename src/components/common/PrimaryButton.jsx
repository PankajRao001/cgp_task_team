const PrimaryButton = ({ text, className = "", ...props }) => {
  return (
    <button className={className} {...props}>
      {text}
    </button>
  );
};

export default PrimaryButton;
