import * as React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center text-sm text-neutral-500 py-8">
      <div className="w-2/3 h-px bg-neutral-700 mx-auto mb-4" />
      <p>&copy; {currentYear} Aaqeb. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
