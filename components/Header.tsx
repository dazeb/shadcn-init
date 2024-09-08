"use client";
import { useUser } from "@clerk/nextjs";

import Link from "next/link";

export default function Header() {
  const { user } = useUser();
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold">
            <h1 className="text-2xl font-bold mb-4 ml-2">
              Welcome {user?.firstName || "Grower"}!
            </h1>
          </Link>
        </div>
      </div>
    </header>
  );
}
