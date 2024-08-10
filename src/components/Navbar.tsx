"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { status } = useSession();
  return (
    <div className="border p-2 flex justify-between items-center px-4">
      <Link href={"/dashboard"} className="font-semibold">
        Testimonial
      </Link>
      <div>
        {status === "authenticated" ? (
          <button
            onClick={() => signOut()}
            className="p-2 bg-indigo-600 text-white rounded px-4 ml-4"
          >
            Logout
          </button>
        ) : (
          <button className="p-2 bg-indigo-600 text-white rounded px-4">
            Sigin
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
