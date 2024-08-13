import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full flex flex-col items-center mt-14">{children}</div>
  );
};

export default RootLayout;
