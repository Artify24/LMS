
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail, Lock, Eye, EyeOff, User, BookOpen, ArrowRight, Facebook } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState<'student' | 'teacher'>('student');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(role === 'teacher' ? '/teacher' : '/student');
  };

  return (
    <div className="min-h-screen bg-[#0B0E14] flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-indigo-500/20 rounded-full"></div>
      </div>

      <div className="w-full max-w-md bg-[#161926] rounded-3xl p-8 border border-white/10 relative z-10 shadow-2xl">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-indigo-600/20">
            <span className="font-bold text-2xl text-white">L</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Welcome Back</h1>
          <p className="text-gray-400 text-sm font-medium">Select your role to access your dashboard.</p>
        </div>

        <div className="flex p-1.5 bg-black/20 rounded-xl mb-8 border border-white/5">
          <button
            onClick={() => setRole('student')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold transition-all ${
              role === 'student' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            <User size={16} /> Student
          </button>
          <button
            onClick={() => setRole('teacher')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold transition-all ${
              role === 'teacher' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            <BookOpen size={16} /> Teacher
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
              <input 
                type="email" 
                placeholder="name@domain.com"
                className="w-full bg-black/20 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                required
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest">Password</label>
              {/* Fix: Removed invalid size prop from Link component */}
              <Link href="/forgot-password" className="text-[10px] text-indigo-400 hover:underline uppercase font-bold tracking-widest">Forgot Password?</Link>
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
              <input 
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className="w-full bg-black/20 border border-white/10 rounded-xl py-3.5 pl-12 pr-12 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                required
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <Button type="submit" fullWidth className="h-14 text-sm font-black uppercase tracking-widest shadow-xl shadow-indigo-600/30">
            Sign In <ArrowRight size={18} className="ml-2" />
          </Button>
        </form>

        <div className="mt-10">
          <div className="relative flex items-center justify-center mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/5"></div>
            </div>
            <span className="relative bg-[#161926] px-4 text-[10px] font-black text-gray-600 uppercase tracking-[0.2em]">Or continue with</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-bold text-gray-300 hover:bg-white/10 hover:text-white transition-all">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335" />
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-3 py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-bold text-gray-300 hover:bg-white/10 hover:text-white transition-all">
              <Facebook className="w-5 h-5 text-[#1877F2] fill-current" />
              Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
