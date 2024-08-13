"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "@/lib/store/store";
import { addToCart } from "@/lib/store/features/cart/cartSlice";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
    // Send the initial state to the store
    // storeRef.current.dispatch(addToCart(1));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
