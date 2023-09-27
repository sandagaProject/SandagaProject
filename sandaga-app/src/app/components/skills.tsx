"use client";
import React, { useState } from "react";

const Skills = () => {
  const [skills, setSkills] = useState([
    "JavaScript",
    "React",
    "TypeScript",
    "HTML",
    "CSS",
    "Git",
    "GitHub",
    "UX/UIデザイン",
  ]);

  return (
    <div className="w-full py-10 px-2">
      <ul className="list-disc text-gray-700">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
