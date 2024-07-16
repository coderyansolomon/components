'use client'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <ul className="flex space-x-4">
        <li>
          <a href="/" className="hover:text-blue-400">Home</a>
        </li>
        <li>
          <a href="/about" className="hover:text-blue-400">About</a>
        </li>
        <li>
          <a href="/contact" className="hover:text-blue-400">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
