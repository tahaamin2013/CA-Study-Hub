"use client";

import React from "react";
import { BookOpen, Brain, HelpCircle, FileText, List } from "lucide-react";
import Link from "next/link";

const data = [

  {
    id: "6",
    title: "THE IMPACT OF TECHNOLOGICAL CHANGE ON WORKING METHODS",
    links: [
      {
        href: "/managerial-and-financial-analysis/chapter-4/the-impact-of-technological-change-on-working-methods/original-content",
        text: "ORIGINAL CONTENT",
        icon: List,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-4/the-impact-of-technological-change-on-working-methods/notes",
        text: "NOTES",
        icon: BookOpen,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-4/the-impact-of-technological-change-on-working-methods/mind-map",
        text: "MIND MAP",
        icon: Brain,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-4/the-impact-of-technological-change-on-working-methods/quiz",
        text: "MCQS",
        icon: HelpCircle,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-4/the-impact-of-technological-change-on-working-methods/brief-questions",
        text: "BRIEF QUESTIONS",
        icon: FileText,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-4/the-impact-of-technological-change-on-working-methods/detailed-questions",
        text: "DETAILED QUESTIONS",
        icon: List,
      },
    ],
  },

  {
    id: "6",
    title: "INFORMATION TECHNOLOGY AND INFORMATION SYSTEMS",
    links: [
      {
        href: "/managerial-and-financial-analysis/chapter-4/information-technology-and-information-systems/original-content",
        text: "ORIGINAL CONTENT",
        icon: List,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-4/information-technology-and-information-systems/notes",
        text: "NOTES",
        icon: BookOpen,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-4/information-technology-and-information-systems/mind-map",
        text: "MIND MAP",
        icon: Brain,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-4/information-technology-and-information-systems/quiz",
        text: "MCQS",
        icon: HelpCircle,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-4/information-technology-and-information-systems/brief-questions",
        text: "BRIEF QUESTIONS",
        icon: FileText,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-4/information-technology-and-information-systems/detailed-questions",
        text: "DETAILED QUESTIONS",
        icon: List,
      },
    ],
  },

  {
    id: "6",
    title: "IT CONTROL & EFFECTIVENESS",
    links: [
      {
        href: "/managerial-and-financial-analysis/chapter-4/control-&-effectiveness/original-content",
        text: "ORIGINAL CONTENT",
        icon: List,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-4/control-&-effectiveness/notes",
        text: "NOTES",
        icon: BookOpen,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-4/control-&-effectiveness/mind-map",
        text: "MIND MAP",
        icon: Brain,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-4/control-&-effectiveness/quiz",
        text: "MCQS",
        icon: HelpCircle,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-4/control-&-effectiveness/brief-questions",
        text: "BRIEF QUESTIONS",
        icon: FileText,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-4/control-&-effectiveness/detailed-questions",
        text: "DETAILED QUESTIONS",
        icon: List,
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
    </div>);
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
      Information and communication technologies              </h1>
      <div className="flex flex-wrap gap-5 justify-center">
        {data.map((section) => (
          <Section key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
};

export default ComputerSystemsDashboard;
