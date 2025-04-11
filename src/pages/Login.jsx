
import React from "react";
import LoginForm from "@/components/LoginForm";
import Logo from "@/components/Logo";

const Login = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Form */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-6 md:p-12 animate-slide-up">
        <div className="mb-8 mt-4">
          <Logo size="lg" />
        </div>
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-packpal-dark mb-2">Welcome back</h1>
          <p className="text-gray-600">Sign in to manage your packing events</p>
        </div>
        <LoginForm />
        <div className="mt-12 text-center text-sm text-gray-500">
          <p>© 2025 PackPal. All rights reserved.</p>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="hidden lg:block lg:w-1/2 bg-hero-pattern bg-cover bg-center relative">
        <div className="absolute inset-0 bg-packpal-primary/20 backdrop-blur-sm"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-12">
          <div className="glass-card p-8 max-w-md text-center">
            <h2 className="text-3xl font-bold mb-4 text-packpal-dark">Organize Group Packing</h2>
            <p className="text-gray-700 mb-6">
              Create and manage packing lists for trips, events, and more with friends and family. Stay organized and never forget essential items again.
            </p>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-4 bg-white/80 rounded-lg shadow">
                <div className="font-bold text-packpal-primary text-2xl mb-1">100+</div>
                <div className="text-gray-600 text-sm">Built-in templates</div>
              </div>
              <div className="p-4 bg-white/80 rounded-lg shadow">
                <div className="font-bold text-packpal-primary text-2xl mb-1">10k+</div>
                <div className="text-gray-600 text-sm">Active users</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
