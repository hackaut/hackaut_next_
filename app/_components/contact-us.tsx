"use client";

import { useState } from "react";
import SectionHeading from "./section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  return (
    <section
      className="w-full max-w-[1152px] p-2 bg-white/40 dark:bg-white/5 backdrop-blur-lg rounded-xl border border-gray-300/60 dark:border-white/20 shadow-md transition-all duration-300"
      id="contact-us"
    >
      <div className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-6 flex flex-col h-full">
        {/* Header */}
        <div className="mb-6">
          <SectionHeading title="Contact Us" />
          <p className="text-lg text-muted-foreground mt-2">
            We'd love to hear from you! Whether you have questions, ideas, or want to
            collaborate, feel free to reach out.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="shadow-md border border-border h-full">
            <CardContent className="p-6 space-y-4 h-full flex flex-col">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <Input
                placeholder="What's this about?"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
              />
              <Textarea
                placeholder="Tell us about your project, question, or idea..."
                className="min-h-[150px] flex-1"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
              <Button className="w-full bg-[#3a97c7] text-white py-6 hover:bg-[#3a97c7]/90">
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info + Map */}
          <div className="flex flex-col gap-8 h-full">
            <Card className="shadow-md border border-border flex-1">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Contact Information</h3>
                <div className="flex items-start gap-3">
                  <MapPin className="text-primary shrink-0" />
                  <p>
                    Maulana Abul Kalam Azad University of Technology (MAKAUT),
                    Haringhata, West Bengal, India
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-primary" />
                  <a
                    href="mailto:hackaut@makaut.org"
                    className="hover:underline"
                  >
                    hackaut@makaut.org
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-primary" />
                  <a href="tel:+919876543210" className="hover:underline">
                    +91 98765 43XXXX
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md border border-border flex-1">
              <CardContent className="p-0 h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.6843195675084!2d88.5525!3d22.9507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89fb50a43d77f%3A0x5d7b6c18dbf3!2sMaulana%20Abul%20Kalam%20Azad%20University%20of%20Technology!5e0!3m2!1sen!2sin!4v1680000000000"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  className="rounded-xl min-h-[250px]"
                ></iframe>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
