"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import axios from "axios";
import { toast } from "sonner";

const signupSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(6),
});

export default function SignUpPage() {
    const form = useForm<z.infer<typeof signupSchema>>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    async function onSubmit(values: z.infer<typeof signupSchema>) {
        try {
            // Send form data to backend
            const res = await axios.post("/api/user/signup", values);
            console.log(res)

            if (res.status === 201) {
                toast.success(`${res.data.message}`);
                window.location.href = "/dashboard";
            }
        } catch (error: any) {
            if (axios.isAxiosError(error)) {
                console.error(error.response?.data.message)
                toast.error(`${error.response?.data.message}`);
            } else {
                console.error("Unexpected error:", error);
            }
        }
    }

    return (
        <div className="flex h-screen">
            {/* Left side image */}
            <div className="hidden lg:flex w-1/2 bg-muted items-center justify-center">
                <img
                    src="/makaut.jpeg"
                    alt="MAKAUT"
                    className="object-cover h-full w-full"
                />
            </div>

            {/* Right side form */}
            <div className="flex w-full lg:w-1/2 items-center justify-center p-8 bg-background">
                <div className="w-full max-w-md space-y-6">
                    <h1 className="text-2xl font-bold text-foreground">Create Account</h1>
                    <p className="text-muted-foreground">
                        Join us by creating a new account.
                    </p>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Full Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="John Doe" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="you@example.com" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input type="password" placeholder="••••••••" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button type="submit" className="w-full text-white ">
                                Sign Up
                            </Button>
                        </form>
                    </Form>
                    <p className="text-xs">
                        Already have an account? <span className="underline">
                            <Link href={"/signin"}>
                                sign in
                            </Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}
