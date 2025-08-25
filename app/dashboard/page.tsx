"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function DashboardPage() {
  const handleClick = () => {
    toast.info("This section is still under review 🚧");
  };

  return (
    <div className="w-full h-full flex justify-center items-center p-6 mt-20">
      <Card className="max-w-lg w-full shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">HACKAUT Dashboard</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-base text-gray-700">
            Welcome to the <span className="font-semibold">HACKAUT</span>
            Here, developers collaborate, learn, and grow together.  
          </p>
          <p className="text-gray-500 italic">
            Dashboard section is still under review. Stay tuned for updates!
          </p>
          <Button className="text-white" onClick={handleClick}>Notify Me</Button>
        </CardContent>
      </Card>
    </div>
  );
}
