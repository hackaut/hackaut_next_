"use client";

import Image from "next/image";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal"; // update path if needed

export default function AboutUsPage() {
    const content = [
        {
            title: "Who We Are",
            description:
                "HACKAUT is the technical club of Maulana Abul Kalam Azad University of Technology, West Bengal. We are a student-led community that learns together, builds together, and grows together—driven by curiosity and grit.",
            content: (
                <div className="relative h-full w-full overflow-hidden rounded-xl">
                    <img
                        src="/hackaut.png"
                        alt="HACKAUT Team"
                        className="h-full w-full object-cover"
                    />
                </div>
            ),
        },
        {
            title: "Mission & Vision",
            description:
                "We aim to cultivate an environment where knowledge flows freely, skills are sharpened through practice, and ideas convert into projects. Our vision is a thriving ecosystem that empowers students to ship real work and make a measurable impact.",
            content: (
                <div className="relative h-full w-full overflow-hidden rounded-xl">
                    <img
                        src="/mission.png"
                        alt="HACKAUT Mission"
                        className="h-full w-full object-cover"
                    />
                </div>
            ),
        },
        {
            title: "What We Do",
            description:
                "We host technical events and regular sessions, mentor freshers, build projects as hackathon-ready teams, and run coding challenges. The goal: learn in public, ship together, and raise the bar.",
            content: (
                <div className="relative h-full w-full overflow-hidden rounded-xl">
                    <img
                        src="/mission.png"
                        alt="HACKAUT Activities"
                        className="h-full w-full object-cover"
                    />
                </div>
            ),
        },
        {
            title: "Our Team",
            description:
                "Behind every build is a focused team. We value clear communication, ownership, and momentum—because progress loves speed and discipline.",
            content: (
                <div className="relative h-full w-full overflow-hidden rounded-xl">
                    <img
                        src="/wedo.png"
                        alt="HACKAUT Team Members"
                        className="h-full w-full object-cover"
                    />
                </div>
            ),
        },
        {
            title: "Impact",
            description:
                "We're just getting started. The seeds we're planting now will grow into outcomes you'll soon see—projects shipped, problems solved, students transformed. Watch this space.",
            content: (
                <div className="flex h-full w-full items-center justify-center rounded-xl bg-[linear-gradient(to_bottom_right,#0ea5e9,#22d3ee)] text-white">
                    <div className="text-center px-6 py-8">
                        <div className="text-xl md:text-2xl font-semibold">Coming Soon</div>
                        <div className="mt-1 text-sm opacity-90">
                            Impact updates will appear here.
                        </div>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div className="w-full flex flex-col items-center">
            {/* HERO */}
            <section className="relative w-full h-[48vh] min-h-[360px]">
                <Image
                    src="/banner.jpeg"
                    alt="HACKAUT Banner"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                    <div className="mb-4 overflow-hidden rounded-2xl bg-white/80 p-2 dark:bg-white/10">
                        <Image
                            src="/logo.png"
                            alt="HACKAUT Logo"
                            width={84}
                            height={84}
                            className="rounded-xl"
                        />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                        HACKAUT
                    </h1>
                    <p className="mt-1 text-white/90">Code Beyond Limits</p>
                </div>
            </section>

            {/* CONTENT WRAPPER */}
            <section className="w-full max-w-[1152px] px-4 sm:px-6 md:px-8 py-8">
                <div className="bg-gray-50 dark:bg-[#0b1921]/90 border border-gray-200 dark:border-white/20 rounded-2xl shadow-md p-4 sm:p-6 md:p-8 overflow-visible">
                    {/* Intro */}
                    <div className="mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                            About Us
                        </h2>
                        <p className="mt-2 text-base sm:text-lg tracking-tight text-gray-700 dark:text-gray-300">
                            We’re the technical club of MAKAUT, West Bengal—focused on learning
                            together, mentoring freshers, building teams for hackathons, and
                            shipping projects that matter.
                        </p>
                    </div>

                    {/* Sticky Scroll Reveal */}
                    <div className="w-full overflow-visible">
                        <section className="relative">
                            <StickyScroll content={content} />
                        </section>
                    </div>
                </div>
            </section>
        </div>
    );
}



{/* sticky reveal section */ }
