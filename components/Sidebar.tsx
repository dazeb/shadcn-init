"use client";

import { useState } from "react";
import Link from "next/link";
import { Home, Book, Settings, ChevronRight, ChevronLeft } from "lucide-react";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => setIsExpanded(!isExpanded);

  return (
    <div
      className={`fixed left-0 top-0 h-full bg-gray-800 text-white transition-all duration-300 ${isExpanded ? "w-64" : "w-16"}`}
    >
      <button
        onClick={toggleSidebar}
        className="absolute -right-3 top-9 bg-gray-800 text-white p-1 rounded-full"
      >
        {isExpanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
      </button>
      <nav className="flex flex-col items-center pt-20">
        <Link href="/" className="mb-8">
          <div className="flex items-center">
            <Home size={24} />
            {isExpanded && <span className="ml-4">Home</span>}
          </div>
        </Link>
        <Link href="/journal" className="mb-8">
          <div className="flex items-center">
            <Book size={24} />
            {isExpanded && <span className="ml-4">Journal</span>}
          </div>
        </Link>
        <Link href="/settings" className="mb-8">
          <div className="flex items-center">
            <Settings size={24} />
            {isExpanded && <span className="ml-4">Settings</span>}
          </div>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
