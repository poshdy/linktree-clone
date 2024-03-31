import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <section className="w-[90%] mx-auto space-y-4 p-2">{children}</section>;
};

export default Container;
