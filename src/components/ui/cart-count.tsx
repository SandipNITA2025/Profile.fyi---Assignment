"use client";
import { useAppSelector } from "@/lib/store/hooks";
import { ShoppingBag, User } from "lucide-react";
import Link from "next/link";
import React from "react";

const CartCount = () => {
  const cartItems = useAppSelector((state) => state.cart.items) || [];

  return (
    <div className="flex items-center gap-4 text-sm">
      <Link href="/cart">
        <div className="flex items-center gap-1 relative cursor-pointer">
          {cartItems.length > 0 && (
            <div className=" absolute -top-2 right-7 rounded-full bg-black text-white w-4 h-4 flex items-center justify-center">
              {cartItems.length}
            </div>
          )}
          <ShoppingBag size={19} />
          <p>Cart</p>
        </div>
      </Link>
      <div className="flex items-center gap-1 cursor-pointer">
        <User size={20} />
        <p>User</p>
      </div>
    </div>
  );
};

export default CartCount;
