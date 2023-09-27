import React, { FC, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/header";
import Sns from "./components/sns";
import Contact from "./components/contact";
import Kv from "./components/kv";
import Profile from "./components/profile";
import Skills from "./components/skills";
import Sections from "./components/section";
import Portfolio from "./components/portfolio";
import About from "./components/about";

const naviList = [
  { name: "about", component: About },
  { name: "profile", component: Profile },
  { name: "portfolio", component: Portfolio },
  { name: "skills", component: Skills },
  { name: "contact", component: Contact },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-300 text-stone-900">
      <Header naviList={naviList} />
      <article className="w-full">
        <Kv />
        {naviList.map((navItem, index) => {
          const Component = navItem.component;
          return (
            <Sections
              key={index}
              title={
                navItem.name.charAt(0).toUpperCase() + navItem.name.slice(1)
              }
            >
              <Component />
            </Sections>
          );
        })}
      </article>
      <Sns />
    </main>
  );
}
