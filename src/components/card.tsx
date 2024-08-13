"use client";
import { useState } from "react";
import Image from "next/image";
import { Product } from "@/types";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { addToCart } from "@/lib/store/features/cart/cartSlice";
import { useRouter } from "next/navigation";
import { showToast } from "./toast";

// Heart icon
const HeartIcon = ({
  isLiked,
  onClick,
}: {
  isLiked: boolean;
  onClick: () => void;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 48 48"
    onClick={onClick}
    style={{ cursor: "pointer" }}
  >
    <defs>
      <mask id="ipSLoveAndHelp0">
        <g
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="8"
        >
          <path
            fill="#fff"
            stroke="#fff"
            d="M15 7C8.925 7 4 11.925 4 18c0 11 13 21 20 23.326C31 39 44 29 44 18c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.99 10.99 0 0 0 15 7"
          />
        </g>
      </mask>
    </defs>
    <path
      fill={isLiked ? "#FF0000" : "#E0E0E0"}
      d="M0 0h48v48H0z"
      mask="url(#ipSLoveAndHelp0)"
    />
  </svg>
);

// Card component
const Card = ({ id, prod_name, prod_img, prod_price }: Product) => {
  const [isLiked, setIsLiked] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const cartItems =
    useAppSelector((state) => state.cart.items.map((item) => item.id)) || [];

  const handleLikeToggle = () => setIsLiked((prev) => !prev);

  const handleAddToCart = () => {
    if (cartItems.includes(id)) {
      router.push("/cart");
    } else {
      dispatch(addToCart(id));
      showToast("Added to cart");
    }
  };

  const isInCart = cartItems.includes(id);

  return (
    <div className="w-full hover:shadow-lg transition-all rounded cursor-pointer overflow-hidden min-h-[350px] max-w-[350px] md:min-h-[380px] md:max-w-[380px] relative group">
      <div className="absolute top-3 right-3 z-10">
        <HeartIcon isLiked={isLiked} onClick={handleLikeToggle} />
      </div>
      <div className="relative w-full h-[260px] md:h-[280px] md:max-h-[300px]">
        <Image
          src={prod_img}
          alt={prod_name}
          className="object-cover w-full h-full"
          fill
        />
      </div>
      <div className="px-2 pt-3 text-sm absolute bottom-0 left-0 right-0 transition-transform transform group-hover:translate-y-[-15px] bg-white">
        <p className="line-clamp-1">{prod_name}</p>
        <div className="w-[80px] h-[10px] relative italic font-medium text-blue-500">
          Assured
        </div>
        <div className="flex md:items-center flex-col md:flex-row gap-2 md:gap-0 justify-between py-3">
          <p className="text-green-600 text-sm">{prod_price}</p>
          <button
            onClick={handleAddToCart}
            className="bg-black text-white px-4 py-1 rounded md:w-fit w-full"
          >
            {isInCart ? "Go to cart" : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
