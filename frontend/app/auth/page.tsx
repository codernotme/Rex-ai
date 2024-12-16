"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { AtSign, Lock, Loader2 } from "lucide-react";
import { SidebarProvider } from '@/components/sidebar-provider';
import { Sidebar } from '@/components/Sidebar';
import { Navbar } from '@/components/navbar';

async function handleAuthAction(url: string, formData: FormData) {
  const username = formData.get("username") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    const response = await fetch(`http://127.0.0.1:8000${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });

    if (!response.ok) {
      const { message } = await response.json();
      throw new Error(message || "Action failed");
    }

    const data = await response.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
    }

    return { success: true, message: data.message };
  } catch (err: unknown) {
    return {
      success: false,
      message: err instanceof Error ? err.message : "An unknown error occurred",
    };
  }
}

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [isPending, setIsPending] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    setMessage(null);

    const formData = new FormData(e.currentTarget);
    const actionUrl = isLogin ? "/login/" : "/signup/";
    const result = await handleAuthAction(actionUrl, formData);

    setIsPending(false);
    setMessage(result.message);
    setIsSuccess(result.success);
  };

  const isAuthenticated = typeof window !== 'undefined' && localStorage.getItem('token') !== null;

  if (isAuthenticated) {
    return (
      <SidebarProvider>
        <div className="flex h-screen overflow-hidden">
          <Sidebar />
          <div className="flex flex-col flex-1 overflow-hidden">
            <Navbar />
            <main className="flex-1 overflow-auto p-6">
              {/* Render children or main content here */}
            </main>
          </div>
        </div>
      </SidebarProvider>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 p-4">
      <Card className="w-full max-w-md backdrop-blur-sm bg-white/10 shadow-xl border-0">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-white">
            {isLogin ? "Login" : "Signup"}
          </CardTitle>
          <CardDescription className="text-gray-200">
            {isLogin
              ? "Enter your credentials to access your account"
              : "Create a new account"}
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            {message && (
              <div
                className={`p-3 rounded-md text-sm ${
                  isSuccess
                    ? "bg-green-500/20 text-green-200"
                    : "bg-red-500/20 text-red-200"
                }`}
              >
                {message}
              </div>
            )}
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="username" className="text-gray-200">
                  Username
                </Label>
                <div className="relative">
                  <Input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Enter your username"
                    required={!isLogin}
                    className="pl-10 bg-white/20 border-gray-500 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                  />
                </div>
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-200">
                Email
              </Label>
              <div className="relative">
                <AtSign
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="pl-10 bg-white/20 border-gray-500 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-200">
                Password
              </Label>
              <div className="relative">
                <Lock
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                  className="pl-10 bg-white/20 border-gray-500 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
              disabled={isPending}
            >
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {isLogin ? "Logging in..." : "Signing up..."}
                </>
              ) : isLogin ? (
                "Login"
              ) : (
                "Signup"
              )}
            </Button>
            <Button
              type="button"
              className="w-full bg-transparent border border-gray-500 text-gray-200 font-semibold py-2 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Switch to Signup" : "Switch to Login"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
