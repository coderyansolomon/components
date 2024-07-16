'use client'

const Button = () => {
  
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
    >
      Click Me
    </button>
  );
};

export default Button;
