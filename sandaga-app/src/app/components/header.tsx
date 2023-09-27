import Link from "next/link";
import React, { FC, ReactNode } from "react";

import Logo from "./logo";

interface props {
  naviList: {
    name: string;
  }[];
}

const Header: FC<props> = ({ naviList }) => {
  return (
    <header className="fixed flex w-full justify-between z-10">
      <Logo />
      <nav>
        <ul className="flex items-center p-3">
          {naviList.map((item, index) => (
            <li key={index} className="text-sm mx-2">
              <Link href={`/${item.name}`}>
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
