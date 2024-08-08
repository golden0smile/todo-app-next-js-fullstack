
'use client'
 
import { usePathname } from 'next/navigation'
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const pathname = usePathname()
  console.log({pathname})
  return (
    <div className="flex justify-around py-5 bg-navColor">
      <h1 className="text-lg font-semibold">TODO APP</h1>
      <ul className="flex gap-[40px] text-lg">
        <li className={`${pathname === '/' ? 'active' : ''}`}>
          <Link  href="/">Home</Link>
        </li>
        <li className={`${pathname === '/tododrag' ? 'active' : ''}`}>
          {" "}
          <Link href="/tododrag">Todo With Drag</Link>
        </li>
        <li className={`${pathname === '/about' ? 'active' : ''}`}>
          <Link href="/about">About</Link>
        </li>
        <li className={`${pathname === '/contact' ? 'active' : ''}`}>
          {" "}
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
