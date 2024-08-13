"use client";
import { useAppSelector } from "@/lib/store/hooks";
import data from "@/constants/data";
import React, { useState } from "react";
import { X } from "lucide-react";
import { showToast } from "@/components/toast";

const parsePrice = (price: string): number =>
  parseFloat(price.replace("₹", "").replace(",", ""));

const CartSummary = () => {
  const [coupon, setCoupon] = useState<string>("");
  const [appliedCoupon, setAppliedCoupon] = useState<string>("");
  const [couponMessage, setCouponMessage] = useState<string>("");
  const cartItems = useAppSelector((state) => state.cart.items) || [];
  const cartItemIds = cartItems.map((item) => item.id);

  const cartData = data.filter((item) => cartItemIds.includes(item.id));

  const cartTotal = cartData.reduce((acc, item) => {
    const itemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
    const quantity = itemInCart ? itemInCart.quantity : 0;
    return acc + parsePrice(item.prod_price) * quantity;
  }, 0);

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const discount = appliedCoupon === "SAVE10" ? 0.1 : 0;
  const discountedTotal = cartTotal * (1 - discount);

  const handleAddCoupon = () => {
    if (coupon === "SAVE10") {
      setAppliedCoupon(coupon);
      setCouponMessage("");
      showToast("Coupon applied successfully");
    } else {
      setCouponMessage("Invalid code");
      setAppliedCoupon("");
    }
  };

  return (
    <>
      {/* Apply coupon */}
      {cartItems.length > 0 && (
        <>
          <div className="w-full text-sm flex items-center justify-center border rounded overflow-hidden mt-4">
            {appliedCoupon ? (
              <div className="w-full bg-green-600/80 flex items-center justify-between px-3 py-2">
                <p className="text-white w-[90%]">
                  Coupon applied: {appliedCoupon}
                </p>
                <X
                  size={18}
                  className="text-white cursor-pointer"
                  onClick={() => setAppliedCoupon("")}
                />
              </div>
            ) : (
              <div className="flex w-full">
                <input
                  type="text"
                  placeholder="Enter coupon code"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  className="w-full p-2 outline-none"
                />
                <button
                  onClick={handleAddCoupon}
                  className="bg-black text-white px-3 py-2 rounded ml-2"
                >
                  Apply
                </button>
              </div>
            )}
          </div>

          {couponMessage && (
            <div className="text-red-500 text-start text-sm mt-2">
              {couponMessage}
            </div>
          )}
        </>
      )}

      <div className="w-full border mt-3 p-3 bg-gray-50 space-y-2 rounded">
        <h3 className="text-md font-medium border-b">Cart Summary</h3>
        <div className="text-sm space-y-2">
          <div>
            <p>
              Price ({totalQuantity} items): ₹ {cartTotal.toFixed(2)}
            </p>
            <p>Discount: {discount * 100}%</p>
          </div>
          <div className="pt-2">
            <strong className="text-md">
              Grand Total: ₹ {discountedTotal.toFixed(2)}
            </strong>
            <button className="bg-black text-white px-4 py-2 w-full mt-2 rounded">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSummary;
