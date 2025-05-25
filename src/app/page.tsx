import Image from "next/image";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/shared/theme-toggle";

export default function Home() {
  return (
    <div className="p-5">
      <div className="w-100 flex justify-end">
        <ThemeToggle />
      </div>
      <h1 className="font-bold text-blue-500">Welcome to the course</h1>
      <Button variant="destructive">Click ME</Button>
    </div>
  );
}
