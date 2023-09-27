"use client";
import React, { useState } from "react";

const Profile = () => {
  const [projects, setProjects] = useState([
    {
      title: "My First Project",
      client: "Acme Corporation",
      period: "2022-01-01 ~ 2022-03-31",
      technology: ["JavaScript", "React", "TypeScript"],
      achievement: "Built a simple web site for a local business.",
    },
    {
      title: "My Second Project",
      client: "XYZ Company",
      period: "2022-04-01 ~ 2022-06-30",
      technology: ["JavaScript", "React", "Next.js"],
      achievement: "Developed a web application for a social media platform.",
    },
  ]);

  return (
    <div className="w-full py-10 px-2">
      <h2 className="text-2xl text-center">制作実績</h2>
      <ul className="list-disc text-gray-700">
        {projects.map((project) => (
          <li key={project.title}>
            <a
              href="/projects/[project.title]"
              className="text-blue-500 hover:text-blue-700"
            >
              {project.title}
            </a>
            <p className="mt-2">
              {project.client}
              <br />
              {project.period}
              <br />
              {project.technology}
              <br />
              {project.achievement}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
