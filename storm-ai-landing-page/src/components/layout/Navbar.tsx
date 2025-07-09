import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-80 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Storm AI
        </Link>
        <div className="space-x-4">
          <Link href="#features" className="text-gray-600 hover:text-gray-800">
            Features
          </Link>
          <Link href="#pricing" className="text-gray-600 hover:text-gray-800">
            Pricing
          </Link>
          <Link href="#contact" className="text-gray-600 hover:text-gray-800">
            Contact
          </Link>
          <Link
            href="/login"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
