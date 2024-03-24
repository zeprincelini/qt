"use client";

import React from "react";
import { redirect } from "next/navigation";

const Header = () => {
  return (
    <div className="py-3 px-2 w-full bg-blue-500">
      <p
        className="text-white text-[18px] cursor-pointer"
        onClick={() => redirect("/")}
      >
        Question Time
      </p>
    </div>
  );
};

export default Header;
