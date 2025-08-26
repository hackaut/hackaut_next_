// app/contact-us.tsx
"use client";

import { useState } from "react";
import SectionHeading from "./section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Linkedin, Github, Instagram, Twitter } from "lucide-react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  return (
    <section className="w-full max-w-[1152px] p-2 bg-white/40 dark:bg-white/5 backdrop-blur-lg rounded-xl border border-gray-300/60 dark:border-white/20 shadow-md transition-all duration-300" id="contact-us">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Contact Us" />

        <p className="text-center text-lg text-muted-foreground mt-2">
          We'd love to hear from you! Whether you have questions, ideas, or want to collaborate,
          feel free to reach out.
        </p>

        <div className="grid lg:grid-cols-2 gap-10 mt-12">
          {/* Contact Form */}
          <Card className="shadow-xl border border-border">
            <CardContent className="p-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <Input
                placeholder="What's this about?"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />
              <Textarea
                placeholder="Tell us about your project, question, or idea..."
                className="min-h-[120px]"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              <Button className="w-full bg-gradient-to-r from-sky-500 to-blue-600 text-white">
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="shadow-xl border border-border">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Contact Information</h3>
                <div className="flex items-center gap-3">
                  <MapPin className="text-primary" />
                  <p>Maulana Abul Kalam Azad University of Technology (MAKAUT), Haringhata, West Bengal, India</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-primary" />
                  <a href="mailto:hackaut@makaut.org" className="hover:underline">
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

            {/* Social Links */}
            <Card className="shadow-xl border border-border">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Follow Us</h3>
                <div className="grid grid-cols-2 gap-4">
                  <a href="#" target="_blank" className="flex items-center gap-2 hover:text-primary">
                    <Linkedin /> LinkedIn
                  </a>
                  <a href="#" target="_blank" className="flex items-center gap-2 hover:text-primary">
                    <Github /> GitHub
                  </a>
                  <a href="#" target="_blank" className="flex items-center gap-2 hover:text-primary">
                    <Instagram /> Instagram
                  </a>
                  <a href="#" target="_blank" className="flex items-center gap-2 hover:text-primary">
                    <Twitter /> Twitter
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Google Maps */}
            <Card className="shadow-xl border border-border">
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.6843195675084!2d88.5525!3d22.9507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89fb50a43d77f%3A0x5d7b6c18dbf3!2sMaulana%20Abul%20Kalam%20Azad%20University%20of%20Technology!5e0!3m2!1sen!2sin!4v1680000000000"
                  width="100%"
                  height="250"
                  loading="lazy"
                  className="rounded-xl"
                ></iframe>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
