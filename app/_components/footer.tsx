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
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between px-4 py-8 gap-6">
        {/* Left side */}
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold tracking-tight">HACKAUT</h2>
          <p className="text-sm text-muted-foreground max-w-sm">
            Empowering students through technology and innovation.
          </p>
          <p className="text-xs text-muted-foreground">{dateTime}</p>
        </div>

        {/* Social links */}
        <div className="flex gap-4">
          <Link
            href="https://github.com/hackaut"
            target="_blank"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github size={20} />
          </Link>
          <Link
            href="https://www.linkedin.com/company/hackaut-makaut/"
            target="_blank"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin size={20} />
          </Link>
          <Link
            href="https://x.com/hackaut2022"
            target="_blank"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Twitter size={20} />
          </Link>
          <Link
            href="https://www.instagram.com/hackaut.makaut/"
            target="_blank"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Instagram size={20} />
          </Link>
        </div>
      </div>

      {/* Bottom small text */}
      <div className="border-t py-4 text-center md:text-left text-xs text-muted-foreground px-4 max-w-7xl mx-auto">
        © {new Date().getFullYear()} HACKAUT, All rights reserved.
      </div>
    </footer>
  );
}
