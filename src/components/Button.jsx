const Button = ({ text, onClick, className }) => {
    return (
      <button
        onClick={onClick}
        className={`px-4 py-2 rounded-lg transition-all duration-300 ${className}`}
      >
        {text}
      </button>
    );
  };
  
  export default Button;
  