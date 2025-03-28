"use client";

import React from "react";
import { BookOpen, Brain, HelpCircle, FileText, List } from "lucide-react";
import Link from "next/link";

const data = [

  {
    id: "6",
    title: "1 Competition and Markets",
    links: [
      {
        href: "/managerial-and-financial-analysis/chapter-7/competition-and-markets/original-content",
        text: "ORIGINAL CONTENT",
        icon: List,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-7/competition-and-markets/notes",
        text: "NOTES",
        icon: BookOpen,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-7/competition-and-markets/mind-map",
        text: "MIND MAP",
        icon: Brain,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-7/competition-and-markets/quiz",
        text: "MCQS",
        icon: HelpCircle,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-7/competition-and-markets/brief-questions",
        text: "BRIEF QUESTIONS",
        icon: FileText,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-7/competition-and-markets/detailed-questions",
        text: "DETAILED QUESTIONS",
        icon: List,
      },
    ],
  },

  {
    id: "6",
    title: "2. INDUSTRY COMPETITION: FIVE FORCES MODEL",
    links: [
      {
        href: "/managerial-and-financial-analysis/chapter-7/industry-competition-five-forces-model/original-content",
        text: "ORIGINAL CONTENT",
        icon: List,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-7/industry-competition-five-forces-model/notes",
        text: "NOTES",
        icon: BookOpen,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-7/industry-competition-five-forces-model/mind-map",
        text: "MIND MAP",
        icon: Brain,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-7/industry-competition-five-forces-model/quiz",
        text: "MCQS",
        icon: HelpCircle,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-7/industry-competition-five-forces-model/brief-questions",
        text: "BRIEF QUESTIONS",
        icon: FileText,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-7/industry-competition-five-forces-model/detailed-questions",
        text: "DETAILED QUESTIONS",
        icon: List,
      },
    ],
  },

  {
    id: "6",
    title: "3. LIFE CYCLE MODEL",
    links: [
      {
        href: "/managerial-and-financial-analysis/chapter-7/life-cycle-model/original-content",
        text: "ORIGINAL CONTENT",
        icon: List,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-7/life-cycle-model/notes",
        text: "NOTES",
        icon: BookOpen,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-7/life-cycle-model/mind-map",
        text: "MIND MAP",
        icon: Brain,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-7/life-cycle-model/quiz",
        text: "MCQS",
        icon: HelpCircle,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-7/life-cycle-model/brief-questions",
        text: "BRIEF QUESTIONS",
        icon: FileText,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-7/life-cycle-model/detailed-questions",
        text: "DETAILED QUESTIONS",
        icon: List,
      },
    ],
  },


  {
    id: "6",
    title: "4. STRATEGIC GROUPS AND MARKET SEGMENTATION",
    links: [
      {
        href: "/managerial-and-financial-analysis/chapter-7/strategic-groups-and-market-segementation/original-content",
        text: "ORIGINAL CONTENT",
        icon: List,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-7/strategic-groups-and-market-segementation/notes",
        text: "NOTES",
        icon: BookOpen,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-7/strategic-groups-and-market-segementation/mind-map",
        text: "MIND MAP",
        icon: Brain,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-7/strategic-groups-and-market-segementation/quiz",
        text: "MCQS",
        icon: HelpCircle,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-7/strategic-groups-and-market-segementation/brief-questions",
        text: "BRIEF QUESTIONS",
        icon: FileText,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-7/strategic-groups-and-market-segementation/detailed-questions",
        text: "DETAILED QUESTIONS",
        icon: List,
      },
    ],
  },

  
    
  {
    id: "6",
    title: "5. BOSTON CONSULTING GROUP MATRIX (BCG MATRIX)",
    links: [
      {
        href: "/managerial-and-financial-analysis/chapter-7/buston-consulting-group-matrix/original-content",
        text: "ORIGINAL CONTENT",
        icon: List,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-7/buston-consulting-group-matrix/notes",
        text: "NOTES",
        icon: BookOpen,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-7/buston-consulting-group-matrix/mind-map",
        text: "MIND MAP",
        icon: Brain,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-7/buston-consulting-group-matrix/quiz",
        text: "MCQS",
        icon: HelpCircle,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-7/buston-consulting-group-matrix/brief-questions",
        text: "BRIEF QUESTIONS",
        icon: FileText,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-7/buston-consulting-group-matrix/detailed-questions",
        text: "DETAILED QUESTIONS",
        icon: List,
      },
    ],
  },


  {
    id: "6",
    title: "6. OPPORTUNITIES AND THREATS",
    links: [
      {
        href: "/managerial-and-financial-analysis/chapter-7/opportunities-and-threats/original-content",
        text: "ORIGINAL CONTENT",
        icon: List,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-7/opportunities-and-threats/notes",
        text: "NOTES",
        icon: BookOpen,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-7/opportunities-and-threats/mind-map",
        text: "MIND MAP",
        icon: Brain,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-7/opportunities-and-threats/quiz",
        text: "MCQS",
        icon: HelpCircle,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-7/opportunities-and-threats/brief-questions",
        text: "BRIEF QUESTIONS",
        icon: FileText,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-7/opportunities-and-threats/detailed-questions",
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
      Competitive forces
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
