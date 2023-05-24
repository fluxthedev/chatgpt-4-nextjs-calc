const Button = ({ value, onClick }) => (
  <button
    className="bg-gray-800 hover:bg-gray-700 active:bg-gray-600 text-white w-20 h-20 m-2 rounded"
    onClick={onClick}
  >
    {value}
  </button>
);

export default Button;
