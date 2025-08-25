"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      };
      setDateTime(now.toLocaleDateString("en-US", options));
    };

    updateTime();
    const interval = setInterval(updateTime, 60000); // update every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full border-t bg-background text-foreground">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-6 gap-4">
        {/* Left side */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold">HACKAUT</h2>
          <p className="text-sm text-muted-foreground">
            Empowering students through technology and innovation.
          </p>
          <p className="text-xs mt-1 text-muted-foreground">{dateTime}</p>
        </div>

        {/* Social links */}
        <div className="flex space-x-4">
          <Link
            href="https://github.com/hackaut"
            target="_blank"
            className="text-muted-foreground hover:text-foreground transition"
          >
            <Github size={20} />
          </Link>
          <Link
            href="https://www.linkedin.com/company/hackaut-makaut/"
            target="_blank"
            className="text-muted-foreground hover:text-foreground transition"
          >
            <Linkedin size={20} />
          </Link>
          <Link
            href="https://x.com/hackaut2022"
            target="_blank"
            className="text-muted-foreground hover:text-foreground transition"
          >
            <Twitter size={20} />
          </Link>
          <Link
            href="https://www.instagram.com/hackaut.makaut/"
            target="_blank"
            className="text-muted-foreground hover:text-foreground transition"
          >
            <Instagram size={20} />
          </Link>
        </div>
      </div>

      {/* Bottom small text */}
      <div className="border-t py-3 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} HACKAUT, All rights reserved.
      </div>
    </footer>
  );
}
