
"use client";
import React from 'react';
import Link from 'next/link';
import { Mail, ArrowLeft, Send, RotateCcw } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-[#0B0E14] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#161926] rounded-[2.5rem] p-10 border border-white/10 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-indigo-600"></div>
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-indigo-600/10 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-indigo-600/20 text-indigo-400">
            <RotateCcw size={40} />
          </div>
          <h1 className="text-3xl font-black text-white mb-2">Forgot password?</h1>
          <p className="text-gray-500 text-sm font-medium">We'll send recovery instructions to your email.</p>
        </div>

        <form className="space-y-8">
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full bg-black/20 border border-white/10 rounded-2xl py-4 pl-12 text-sm text-white focus:outline-none focus:border-indigo-500" 
              required 
            />
          </div>

          <Button type="submit" fullWidth size="lg">
            <Send size={18} className="mr-2" /> Reset Password
          </Button>

          <Link href="/login" className="flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-white transition-colors group uppercase font-black tracking-widest text-[10px]">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to login
          </Link>
        </form>
      </div>
    </div>
  );
}
