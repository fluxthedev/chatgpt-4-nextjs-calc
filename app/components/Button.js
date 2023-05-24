const Button = ({ value, onClick }) => (
  <button
    className="bg-gray-800 text-white w-24 h-20 rounded"
    onClick={onClick}
  >
    {value}
  </button>
);

export default Button;
