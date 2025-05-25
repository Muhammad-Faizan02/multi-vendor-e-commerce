'use client'; // Ye directive zaroori hai kyunki ye client-side hook istemal karta hai

import * as React from "react";
import { useTheme } from "next-themes"; // Light/Dark mode functionality ke liye

import { Button } from "@/components/ui/button"; // Shadcn UI Button component
import {
  DropdownMenu,
  DropdownMenuContent, // DropdownMenuContent import karein
  DropdownMenuItem,   // DropdownMenuItem import karein
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"; // Shadcn UI DropdownMenu components

import { MoonIcon, SunIcon } from 'lucide-react'; // Lucide React se icons import karein

export default function ThemeToggle() {
  const { setTheme } = useTheme(); // useTheme hook se setTheme function hasil karein

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="w-10 h-10 rounded-full">
          {/* SunIcon light mode ke liye */}
          <SunIcon className='h-[1.4rem] w-[1.4rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
          {/* MoonIcon dark mode ke liye */}
          <MoonIcon className='absolute h-[1.4rem] w-[1.4rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
          <span className="sr-only">Toggle theme</span>{/* Screen readers ke liye */}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {/* Light theme option */}
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        {/* Dark theme option */}
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        {/* System theme option */}
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
  
    </DropdownMenu>
  );
}