"use client";

import { Resource } from "@/lib/generated/prisma";
import { useEffect, useState } from "react";
import axios from "axios";
import ResourceSection from "./resource-section";
import { ResourceWithAuthor } from "@/constants/type";

const ResourceSectionWrapper: React.FC = () => {
    const [resources, setResources] = useState<ResourceWithAuthor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const res = await axios.get("/api/resources");
        setResources(res.data);
      } catch (error) {
        console.error("Failed to fetch resources:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResources();
  }, []);
  return (
    <>
        <ResourceSection resources={resources} />
    </>
  )
}

export default ResourceSectionWrapper