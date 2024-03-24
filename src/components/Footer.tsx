import React from "react";

const Footer = () => {
  const today = new Date().getFullYear();
  return (
    <div className="flex justify-center gap-2 text-sm items-center sticky top-full bottom-0 mt-8">
      <p className="text-gray-600">&copy;</p>
      <p className="text-gray-600">{today}</p>
      <p className="text-gray-600">All rights reserved.</p>
    </div>
  );
};

export default Footer;
