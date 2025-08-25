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

const signinSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export default function SignInPage() {
  const form = useForm<z.infer<typeof signinSchema>>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof signinSchema>) {
    console.log(values);
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
          <h1 className="text-2xl font-bold text-foreground">Sign In</h1>
          <p className="text-muted-foreground">
            Welcome back! Please sign in to continue.
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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

              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </form>
          </Form>
          <p className="text-xs">
            Don&apos;t have an account? <span className="underline">
              <Link href={"/signup"}>
                sign up
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
