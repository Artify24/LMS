
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail, Lock, Eye, EyeOff, User, BookOpen, ArrowRight, Facebook, ShieldCheck } from 'lucide-react';
import Button from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState<'student' | 'teacher'>('student');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login delay
    await new Promise(resolve => setTimeout(resolve, 800));
    router.push(role === 'teacher' ? '/teacher' : '/student');
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/10 rounded-full"></div>
      </div>

      <Card className="w-full max-w-md p-8 relative z-10 shadow-2xl glass border-white/10">
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/30 rotate-3">
              <span className="font-bold text-2xl text-white">L</span>
            </div>
            <span className="text-2xl font-black tracking-tight text-white">LMS Pro</span>
          </Link>
          <h1 className="text-3xl font-black text-white mb-2 tracking-tight">Welcome Back</h1>
          <p className="text-muted-foreground text-sm font-medium">Please enter your details to sign in.</p>
        </div>

        <div className="flex p-1 bg-secondary rounded-xl mb-8 border border-white/5">
          <button
            onClick={() => setRole('student')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${role === 'student' ? 'bg-primary text-white shadow-lg' : 'text-muted-foreground hover:text-white'
              }`}
          >
            <User size={16} /> Student
          </button>
          <button
            onClick={() => setRole('teacher')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${role === 'teacher' ? 'bg-primary text-white shadow-lg' : 'text-muted-foreground hover:text-white'
              }`}
          >
            <BookOpen size={16} /> Teacher
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-[10px] font-black text-muted-foreground uppercase tracking-widest ml-1">Email Address</label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={18} />
              <input
                type="email"
                placeholder="name@domain.com"
                className="w-full bg-secondary border border-white/5 rounded-xl py-4 pl-12 pr-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center mb-1">
              <label className="block text-[10px] font-black text-muted-foreground uppercase tracking-widest ml-1">Password</label>
              <Link href="/forgot-password" virtual-link="true" className="text-[10px] text-primary hover:text-primary/80 uppercase font-black tracking-widest">Forgot Password?</Link>
            </div>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={18} />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className="w-full bg-secondary border border-white/5 rounded-xl py-4 pl-12 pr-12 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <Button type="submit" fullWidth isLoading={isLoading} className="h-14 shadow-xl shadow-primary/20">
            Sign In {!isLoading && <ArrowRight size={18} className="ml-2" />}
          </Button>
        </form>

        <div className="mt-10">
          <div className="relative flex items-center justify-center mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/5"></div>
            </div>
            <span className="relative bg-card px-4 text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Or continue with</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 py-3 rounded-xl bg-secondary border border-white/5 text-sm font-bold text-gray-300 hover:bg-white/10 hover:text-white transition-all">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335" />
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-3 py-3 rounded-xl bg-secondary border border-white/5 text-sm font-bold text-gray-300 hover:bg-white/10 hover:text-white transition-all">
              <Facebook className="w-5 h-5 text-[#1877F2] fill-current" />
              Facebook
            </button>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Don't have an account? <Link href="/signup" className="text-primary font-bold hover:underline">Create one for free</Link>
        </p>
      </Card>
    </div>
  );
}
