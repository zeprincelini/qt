"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <div className="py-3 px-2 w-full bg-blue-500">
      <p
        className="text-white text-[18px] cursor-pointer"
        onClick={() => router.push("/")}
      >
        Question Time
      </p>
    </div>
  );
};

export default Header;
