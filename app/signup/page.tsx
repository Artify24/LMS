
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail, Lock, User, BookOpen, GraduationCap, Facebook, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function SignUpPage() {
  const router = useRouter();
  const [role, setRole] = useState<'student' | 'teacher'>('student');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(role === 'teacher' ? '/teacher' : '/student');
  };

  return (
    <div className="min-h-screen bg-[#0B0E14] flex">
      <div className="hidden lg:flex flex-col flex-1 bg-gradient-to-br from-indigo-900 via-[#0B0E14] to-[#0B0E14] p-12 relative overflow-hidden">
        <div className="flex items-center gap-2 mb-20 relative z-10">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-600/30">
            <span className="font-bold text-2xl text-white">L</span>
          </div>
          <span className="text-2xl font-bold tracking-tight text-white uppercase">LMS Pro</span>
        </div>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #6366F1 0px, #6366F1 1px, transparent 1px, transparent 20px)' }}></div>
        <div className="mt-auto relative z-10 max-w-lg">
          <div className="p-10 rounded-[2.5rem] bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
            <p className="text-2xl font-black text-white mb-8 leading-tight italic">"The most intuitive learning platform we have ever used. Performance tracking is world-class."</p>
            <div className="flex items-center gap-4">
              <img src="https://i.pravatar.cc/100?u=admin" className="w-12 h-12 rounded-2xl ring-2 ring-indigo-500/20" alt="Testimonial" />
              <div>
                <h4 className="font-bold text-white">James Sterling</h4>
                <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Head of L&D, GlobalTech</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-grow flex items-center justify-center p-8 lg:max-w-2xl">
        <div className="w-full max-w-md">
          <div className="mb-10 text-center lg:text-left">
            <h1 className="text-4xl font-black text-white mb-2 tracking-tight">Create account</h1>
            <p className="text-gray-500 text-sm font-medium">Join 10,000+ modern teams today.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4 mb-8">
              <button
                type="button"
                onClick={() => setRole('teacher')}
                className={`flex flex-col items-center justify-center gap-4 p-6 rounded-[2rem] border transition-all ${
                  role === 'teacher' ? 'bg-indigo-600/10 border-indigo-600 ring-2 ring-indigo-600/20' : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
              >
                <BookOpen size={24} className={role === 'teacher' ? 'text-indigo-400' : 'text-gray-600'} />
                <span className="text-[10px] font-black uppercase tracking-widest">Teacher</span>
              </button>
              <button
                type="button"
                onClick={() => setRole('student')}
                className={`flex flex-col items-center justify-center gap-4 p-6 rounded-[2rem] border transition-all ${
                  role === 'student' ? 'bg-indigo-600/10 border-indigo-600 ring-2 ring-indigo-600/20' : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
              >
                <GraduationCap size={24} className={role === 'student' ? 'text-indigo-400' : 'text-gray-600'} />
                <span className="text-[10px] font-black uppercase tracking-widest">Student</span>
              </button>
            </div>

            <div className="space-y-4">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
                <input type="text" placeholder="Full Name" className="w-full bg-black/20 border border-white/10 rounded-2xl py-4 pl-12 text-sm text-white focus:outline-none focus:border-indigo-500" required />
              </div>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
                <input type="email" placeholder="Email Address" className="w-full bg-black/20 border border-white/10 rounded-2xl py-4 pl-12 text-sm text-white focus:outline-none focus:border-indigo-500" required />
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
                <input type="password" placeholder="Password" className="w-full bg-black/20 border border-white/10 rounded-2xl py-4 pl-12 text-sm text-white focus:outline-none focus:border-indigo-500" required />
              </div>
            </div>

            <Button type="submit" fullWidth size="lg" className="shadow-2xl shadow-indigo-600/30">
              Create Account <ArrowRight size={18} className="ml-2" />
            </Button>

            <div className="flex items-center justify-center gap-2 pt-6">
              <span className="text-sm text-gray-500">Already have an account?</span>
              <Link href="/login" className="text-sm font-black text-indigo-400 hover:underline underline-offset-4">Log in</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
