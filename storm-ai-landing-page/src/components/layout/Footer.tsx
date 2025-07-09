const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-6 py-8 text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} Storm AI. All rights reserved.</p>
        <p className="mt-2">
          <a href="/privacy" className="hover:text-gray-800">
            Privacy Policy
          </a>{' '}
          |{' '}
          <a href="/terms" className="hover:text-gray-800">
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
