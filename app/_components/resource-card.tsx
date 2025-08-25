"use client";

import { Calendar, User } from "lucide-react";
import { format } from "date-fns";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ResourceWithAuthor } from "@/constants/type";

export default function ResourceCard({ resource }: { resource: ResourceWithAuthor }) {
  return (
    <Card
      onClick={() => window.open(resource.link, "_blank")}
      className="cursor-pointer hover:shadow-lg transition rounded-3xl border-2 border-[#3795c5] bg-white dark:bg-gray-900 flex flex-col"
    >
      <CardContent className="p-4 flex flex-col h-full min-h-[220px]"> 
        {/* Title */}
        <h3 className="text-lg font-semibold">{resource.name}</h3>

        {/* Footer pinned at bottom */}
        <div className="mt-auto space-y-3">
          {/* Author + Date */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>{resource.author?.name ?? "Unknown"}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{format(new Date(resource.createdAt), "MMM d, yyyy")}</span>
            </div>
          </div>

          {/* Keywords */}
          <div className="flex flex-wrap gap-2">
            {resource.keywords.map((kw) => (
              <Badge key={kw} variant="secondary" className="rounded-full">
                {kw}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
