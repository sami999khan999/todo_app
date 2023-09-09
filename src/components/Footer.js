const Footer = () => {
  return (
    <footer className="footer w-2/4 bg-gray-900 container mx-auto text-center text-teal-600 font-semibold py-10 text-sm  border-t border-dashed border-teal-900">
      <p>&copy; {new Date().getFullYear()} Todo App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
