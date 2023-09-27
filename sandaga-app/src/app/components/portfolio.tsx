"use client";
import React, { useState } from "react";

const Portfolio = () => {
  const [name, setName] = useState("John Doe");
  const [skills, setSkills] = useState(["JavaScript", "React", "TypeScript"]);
  const [experience, setExperience] = useState(3);
  const [strengths, setStrengths] = useState([
    "Learn new technologies",
    "User-centered design",
    "Collaboration",
  ]);

  return (
    <div className="w-full py-10 px-2">
      <h2 className="text-2xl text-center">自己PR</h2>
      <p className="text-lg text-center">
        フロントエンドエンジニアとして3年間の経験があります。
        最新の技術やトレンドを積極的に学び、ユーザー中心のUI/UXデザインを得意としています。
        また、チームで協力して成果を出すこともできます。
      </p>
      <div className="flex justify-center">
        <div className="w-4/5">
          <ul className="list-disc text-gray-700">
            <li>スキル：{skills.join(", ")}</li>
            <li>経験：{experience}年</li>
            <li>強み：{strengths.join(", ")}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
