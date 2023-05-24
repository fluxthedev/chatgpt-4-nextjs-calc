const Display = ({ value }) => {
  return (
    <div className="flex justify-end items-center w-full h-20 bg-gray-800 text-white p-4 rounded mb-4">
      {value}
    </div>
  );
};

export default Display;
