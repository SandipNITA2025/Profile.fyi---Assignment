"use client";
import { useAppSelector } from "@/lib/store/hooks";
import React from "react";

const CartCount = () => {
  const cartItems = useAppSelector((state) => state.cart.items) || [];
  return <>{cartItems.length}</>;
};

export default CartCount;
