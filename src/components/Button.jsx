export default function Button({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 cursor-pointer text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors ${className}`}
    >
      {children}
    </button>
  );
}