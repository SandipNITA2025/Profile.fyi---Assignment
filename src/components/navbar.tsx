import React from "react";
import CartCount from "@/components/ui/cart-count";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" md:w-[1100px] mx-auto w-[95%] py-4 flex items-center justify-between">
      <div className="italic text-blue-600 font-bold text-xl cursor-pointer">
        <Link href="/">Profyi.</Link>
      </div>
      <CartCount />
    </div>
  );
};

export default Navbar;
