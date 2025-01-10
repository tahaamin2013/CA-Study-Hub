"use client";

import React from "react";
import { BookOpen, Brain, HelpCircle, FileText, List } from "lucide-react";
import Link from "next/link";

const data = [
  {
    id: "1",
    title: "ISLAMIC BELIEFS.",
    links: [
      {
        href: "/islam-our-glorious-religion/volume-1/a-summary-of-islamic-beliefs",
        text: "A SUMMARY OF ISLAMIC BELIEFS",
        icon: List,
      },
      {
        href: "/islam-our-glorious-religion/volume-1/the-definations-of-islam",
        text: "THE DEFINITION OF ISLAM",
        icon: BookOpen,
      },
      {
        href: "/islam-our-glorious-religion/volume-1/islamic-faith-and-infidelity",
        text: "ISLAMIC FAITH & INFIDELITY",
        icon: HelpCircle,
      },
      {
        href: "/islam-our-glorious-religion/volume-1/about-paradise",
        text: "ABOUT PARADISE",
        icon: Brain,
      },
      {
        href: "/islam-our-glorious-religion/volume-1/about-hell",
        text: "ABOUT HELL",
        icon: FileText,
      },
      {
        href: "/islam-our-glorious-religion/volume-1/the-impeccable-life-of-allah-beloved-prophet",
        text: "THE IMPECCABLE LIFE OF ALLAH'S BELOVED PROPHET",
        icon: Brain,
      },
      {
        href: "/islam-our-glorious-religion/volume-1/about-the-holy-quran",
        text: "ABOUT THE HOLY QUR'AN",
        icon: Brain,
      },
      {
        href: "/islam-our-glorious-religion/volume-1/excellence-of-salaat",
        text: "EXCELLENCE OF SALAAT (PRAYER).",
        icon: Brain,
      },
    ],
  },
];

const Section = ({ section }: any) => {
  return (
    <div className="w-[400px] mb-6 py-6 px-5 rounded-3xl transition-all duration-300 hover:shadow-2xl bg-gradient-to-br from-purple-900 to-indigo-900 border border-purple-700">
      <h2 className="text-xl font-bold text-white mb-2">{section.title}</h2>
      <div className="grid grid-cols-2 gap-3">
        {section.links.map((link: any) => (
          <Link
            key={link.href}
            href={link.href}
            className="flex items-center space-x-3 p-3 rounded-xl text-white hover:bg-white hover:bg-opacity-10 transition-all duration-200 group"
          >
            <div className="p-2 bg-purple-700 rounded-lg group-hover:bg-purple-600 transition-colors duration-200">
              {React.createElement(link.icon, { size: 20 })}
            </div>
            <span className="text-sm font-medium">{link.text}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

const ComputerSystemsDashboard = () => {
  return (
    <div
      className="min-h-screen text-white p-8 bg-gradient-to-br from-gray-900 to-gray-800"
      style={{
        fontFamily: '"Poppins", sans-serif',
      }}
    >
      <h1 className="text-5xl font-extrabold mb-12 text-center text-white">
        Hamara Islam / Volume 1{" "}
      </h1>
      <div className="flex flex-wrap gap-5 justify-center">
        {data.map((section) => (
          <Section key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
};

export default ComputerSystemsDashboard;
