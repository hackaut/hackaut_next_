"use client";

import { useState } from "react";
import ResourceCard from "./resource-card";
import { ResourceWithAuthor } from "@/constants/type";
import SectionHeading from "./section-heading";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function ResourceSection({ resources }: { resources: ResourceWithAuthor[] }) {
  const [filter, setFilter] = useState<"Blog" | "Video">("Blog");
  const [page, setPage] = useState(1);
  const itemsPerPage = 6; // show 6 per page

  // Filtered resources
  const filteredResources = resources.filter(
    (r) => r.type.toLowerCase() === filter.toLowerCase()
  );

  const totalPages = Math.ceil(filteredResources.length / itemsPerPage);

  const paginatedResources = filteredResources.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <section className="w-full max-w-[1152px] p-2 bg-white/40 dark:bg-white/5 backdrop-blur-lg rounded-xl border border-gray-300/60 dark:border-white/20 shadow-md transition-all duration-300">
      <div className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-6 flex flex-col h-full">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-6">
          <SectionHeading title="Resources" />
          <select
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value as "Blog" | "Video");
              setPage(1); // reset page when filter changes
            }}
            className="border rounded-lg px-3 py-2 bg-gray-50 dark:bg-gray-800 dark:text-white"
          >
            <option value="Blog">Blog</option>
            <option value="Video">Video</option>
          </select>
        </div>

        {/* Grid */}
        {paginatedResources.length === 0 ? (
          <p className="text-gray-500 text-center min-h-[200px] flex items-center justify-center">
            No {filter}s available.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        )}


        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-6 flex justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (page > 1) setPage(page - 1);
                    }}
                    className={page === 1 ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>

                {Array.from({ length: totalPages }).map((_, i) => (
                  <PaginationItem key={i}>
                    <PaginationLink
                      href="#"
                      isActive={page === i + 1}
                      onClick={(e) => {
                        e.preventDefault();
                        setPage(i + 1);
                      }}
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}

                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (page < totalPages) setPage(page + 1);
                    }}
                    className={page === totalPages ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </div>
    </section>
  );
}
