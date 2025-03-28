"use client";

import React from "react";
import { BookOpen, Brain, HelpCircle, FileText, List } from "lucide-react";
import Link from "next/link";

const data = [

  {
    id: "6",
    title: "1. Strategic Capability",
    links: [
      {
        href: "/managerial-and-financial-analysis/chapter-8/strategic-capabillity/original-content",
        text: "ORIGINAL CONTENT",
        icon: List,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-8/strategic-capabillity/notes",
        text: "NOTES",
        icon: BookOpen,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-8/strategic-capabillity/mind-map",
        text: "MIND MAP",
        icon: Brain,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-8/strategic-capabillity/quiz",
        text: "MCQS",
        icon: HelpCircle,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-8/strategic-capabillity/brief-questions",
        text: "BRIEF QUESTIONS",
        icon: FileText,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-8/strategic-capabillity/detailed-questions",
        text: "DETAILED QUESTIONS",
        icon: List,
      },
    ],
  },

  {
    id: "6",
    title: "2. Customer Needs",
    links: [
      {
        href: "/managerial-and-financial-analysis/chapter-8/customer-needs/original-content",
        text: "ORIGINAL CONTENT",
        icon: List,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-8/customer-needs/notes",
        text: "NOTES",
        icon: BookOpen,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-8/customer-needs/mind-map",
        text: "MIND MAP",
        icon: Brain,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-8/customer-needs/quiz",
        text: "MCQS",
        icon: HelpCircle,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-8/customer-needs/brief-questions",
        text: "BRIEF QUESTIONS",
        icon: FileText,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-8/customer-needs/detailed-questions",
        text: "DETAILED QUESTIONS",
        icon: List,
      },
    ],
  },

  {
    id: "6",
    title: "3. Critical Success Factors for Products and Services",
    links: [
      {
        href: "/managerial-and-financial-analysis/chapter-8/critical-success-factors-for-products-and-services/original-content",
        text: "ORIGINAL CONTENT",
        icon: List,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-8/critical-success-factors-for-products-and-services/notes",
        text: "NOTES",
        icon: BookOpen,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-8/critical-success-factors-for-products-and-services/mind-map",
        text: "MIND MAP",
        icon: Brain,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-8/critical-success-factors-for-products-and-services/quiz",
        text: "MCQS",
        icon: HelpCircle,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-8/critical-success-factors-for-products-and-services/brief-questions",
        text: "BRIEF QUESTIONS",
        icon: FileText,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-8/critical-success-factors-for-products-and-services/detailed-questions",
        text: "DETAILED QUESTIONS",
        icon: List,
      },
    ],
  },

  {
    id: "6",
    title: "4. Value Chain",
    links: [
      {
        href: "/managerial-and-financial-analysis/chapter-8/value-chain/original-content",
        text: "ORIGINAL CONTENT",
        icon: List,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-8/value-chain/notes",
        text: "NOTES",
        icon: BookOpen,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-8/value-chain/mind-map",
        text: "MIND MAP",
        icon: Brain,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-8/value-chain/quiz",
        text: "MCQS",
        icon: HelpCircle,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-8/value-chain/brief-questions",
        text: "BRIEF QUESTIONS",
        icon: FileText,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-8/value-chain/detailed-questions",
        text: "DETAILED QUESTIONS",
        icon: List,
      },
    ],
  },


  {
    id: "6",
    title: "4. Value Chain",
    links: [
      {
        href: "/managerial-and-financial-analysis/chapter-8/value-chain/original-content",
        text: "ORIGINAL CONTENT",
        icon: List,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-8/value-chain/notes",
        text: "NOTES",
        icon: BookOpen,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-8/value-chain/mind-map",
        text: "MIND MAP",
        icon: Brain,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-8/value-chain/quiz",
        text: "MCQS",
        icon: HelpCircle,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-8/value-chain/brief-questions",
        text: "BRIEF QUESTIONS",
        icon: FileText,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-8/value-chain/detailed-questions",
        text: "DETAILED QUESTIONS",
        icon: List,
      },
    ],
  },


  {
    id: "6",
    title: "5. Resources and Competences",
    links: [
      {
        href: "/managerial-and-financial-analysis/chapter-8/resourses-and-competences/original-content",
        text: "ORIGINAL CONTENT",
        icon: List,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-8/resourses-and-competences/notes",
        text: "NOTES",
        icon: BookOpen,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-8/resourses-and-competences/mind-map",
        text: "MIND MAP",
        icon: Brain,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-8/resourses-and-competences/quiz",
        text: "MCQS",
        icon: HelpCircle,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-8/resourses-and-competences/brief-questions",
        text: "BRIEF QUESTIONS",
        icon: FileText,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-8/resourses-and-competences/detailed-questions",
        text: "DETAILED QUESTIONS",
        icon: List,
      },
    ],
  },

  {
    id: "6",
    title: "6. Capabilities and Competitive Advantage",
    links: [
      {
        href: "/managerial-and-financial-analysis/chapter-8/capabilities-and-competitive-advantage/original-content",
        text: "ORIGINAL CONTENT",
        icon: List,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-8/capabilities-and-competitive-advantage/notes",
        text: "NOTES",
        icon: BookOpen,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-8/capabilities-and-competitive-advantage/mind-map",
        text: "MIND MAP",
        icon: Brain,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-8/capabilities-and-competitive-advantage/quiz",
        text: "MCQS",
        icon: HelpCircle,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-8/capabilities-and-competitive-advantage/brief-questions",
        text: "BRIEF QUESTIONS",
        icon: FileText,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-8/capabilities-and-competitive-advantage/detailed-questions",
        text: "DETAILED QUESTIONS",
        icon: List,
      },
    ],
  },

  {
    id: "6",
    title: "7. Analysing Strengths and Weaknesses",
    links: [
      {
        href: "/managerial-and-financial-analysis/chapter-8/analysing-stregths-and-weaknesses/original-content",
        text: "ORIGINAL CONTENT",
        icon: List,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-8/analysing-stregths-and-weaknesses/notes",
        text: "NOTES",
        icon: BookOpen,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-8/analysing-stregths-and-weaknesses/mind-map",
        text: "MIND MAP",
        icon: Brain,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-8/analysing-stregths-and-weaknesses/quiz",
        text: "MCQS",
        icon: HelpCircle,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-8/analysing-stregths-and-weaknesses/brief-questions",
        text: "BRIEF QUESTIONS",
        icon: FileText,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-8/analysing-stregths-and-weaknesses/detailed-questions",
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
      Internal analysis
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
