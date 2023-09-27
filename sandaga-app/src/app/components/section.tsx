import { Heading } from "@chakra-ui/react";
import Link from "next/link";
import React, { FC, ReactNode } from "react";

interface props {
  title: string;
  children: ReactNode;
}

const Sections: FC<props> = ({ title, children }) => {
  return (
    <>
      <div className="h-full">
        <h2 className="text-2xl text-center">{title}</h2>
        <div className="w-3/4 mx-auto">{children}</div>
      </div>
    </>
  );
};

export default Sections;
