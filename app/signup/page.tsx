
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail, Lock, User, BookOpen, GraduationCap, Facebook, ArrowRight, Hash, CheckCircle2 } from 'lucide-react';
import Button from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function SignUpPage() {
  const router = useRouter();
  const [role, setRole] = useState<'student' | 'teacher'>('student');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    router.push(role === 'teacher' ? '/teacher' : '/student');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col lg:flex-row">
      {/* Visual Sidebar */}
      <div className="hidden lg:flex flex-col w-[40%] bg-gradient-to-br from-primary via-indigo-900 to-background p-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 10px)', backgroundSize: '30px 30px' }}></div>

        <Link href="/" className="flex items-center gap-3 relative z-10 mb-20">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-2xl">
            <span className="font-bold text-2xl text-primary">L</span>
          </div>
          <span className="text-2xl font-black tracking-tight text-white uppercase">LMS Pro</span>
        </Link>

        <div className="mt-auto relative z-10">
          <div className="space-y-8 mb-12">
            {[
              "World-class curriculum builder",
              "Advanced analytics & reporting",
              "Integrated live classrooms",
              "Gamified learning experience"
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-4 text-white/90">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center border border-white/30">
                  <CheckCircle2 size={14} className="text-white" />
                </div>
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>

          <Card className="p-8 bg-white/10 backdrop-blur-xl border-white/20 shadow-2xl">
            <p className="text-xl font-bold text-white mb-6 leading-tight italic">"This platform transformed our training ROI. The engagement rates are through the roof!"</p>
            <div className="flex items-center gap-4">
              <img src="https://i.pravatar.cc/100?u=sarah" className="w-12 h-12 rounded-2xl ring-2 ring-white/20" alt="Testimonial" />
              <div>
                <h4 className="font-bold text-white">James Sterling</h4>
                <p className="text-[10px] text-white/60 font-black uppercase tracking-widest">Head of L&D, GlobalTech</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex-grow flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md animate-fade-in">
          <div className="mb-10 text-center lg:text-left">
            <h1 className="text-4xl font-black text-white mb-2 tracking-tight">Create Account</h1>
            <p className="text-muted-foreground text-sm font-medium">Join 10,000+ modern teams today.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4 mb-8">
              <button
                type="button"
                onClick={() => setRole('teacher')}
                className={`flex flex-col items-center justify-center gap-4 p-6 rounded-[2rem] border transition-all ${role === 'teacher' ? 'bg-primary/10 border-primary ring-2 ring-primary/20' : 'bg-secondary border-white/5 hover:border-white/20'
                  }`}
              >
                <BookOpen size={24} className={role === 'teacher' ? 'text-primary' : 'text-muted-foreground'} />
                <span className={`text-[10px] font-black uppercase tracking-widest ${role === 'teacher' ? 'text-primary' : 'text-muted-foreground'}`}>Teacher</span>
              </button>
              <button
                type="button"
                onClick={() => setRole('student')}
                className={`flex flex-col items-center justify-center gap-4 p-6 rounded-[2rem] border transition-all ${role === 'student' ? 'bg-primary/10 border-primary ring-2 ring-primary/20' : 'bg-secondary border-white/5 hover:border-white/20'
                  }`}
              >
                <GraduationCap size={24} className={role === 'student' ? 'text-primary' : 'text-muted-foreground'} />
                <span className={`text-[10px] font-black uppercase tracking-widest ${role === 'student' ? 'text-primary' : 'text-muted-foreground'}`}>Student</span>
              </button>
            </div>

            <div className="space-y-4">
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={18} />
                <input type="text" placeholder="Full Name" className="w-full bg-secondary border border-white/5 rounded-2xl py-4 pl-12 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" required />
              </div>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={18} />
                <input type="email" placeholder="Email Address" className="w-full bg-secondary border border-white/5 rounded-2xl py-4 pl-12 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" required />
              </div>
              {role === "student" && (
                <div className="relative group animate-slide-up">
                  <Hash className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={18} />
                  <input type="text" placeholder="Enter Teacher Code" className="w-full bg-secondary border border-white/5 rounded-2xl py-4 pl-12 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" required />
                </div>
              )}
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={18} />
                <input type="password" placeholder="Password" className="w-full bg-secondary border border-white/5 rounded-2xl py-4 pl-12 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" required />
              </div>
            </div>

            <Button type="submit" fullWidth isLoading={isLoading} className="h-14 shadow-2xl shadow-primary/20">
              Create Account {!isLoading && <ArrowRight size={18} className="ml-2" />}
            </Button>

            <div className="flex items-center justify-center gap-2 pt-6">
              <span className="text-sm text-muted-foreground">Already have an account?</span>
              <Link href="/login" className="text-sm font-black text-primary hover:underline underline-offset-4">Log in</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
