
"use client";
import React from 'react';
import Link from 'next/link';
import { Target, Zap, Trophy, Upload, MessageSquare } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function StudentDashboard() {
  return (
    <div className="max-w-7xl mx-auto space-y-12">
      <header>
        <h1 className="text-3xl font-black text-white mb-1 tracking-tight">Welcome back, Alex! 👋</h1>
        <p className="text-gray-500 text-sm">You've completed 75% of your weekly goal.</p>
      </header>

      <div className="relative rounded-[2.5rem] bg-indigo-600 overflow-hidden p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between shadow-2xl shadow-indigo-600/30">
        <div className="relative z-10 max-w-2xl text-center lg:text-left">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[10px] font-black text-white uppercase tracking-widest mb-6 backdrop-blur-md">Last Active Course</span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-[1.1]">Advanced UI/UX Design Masterclass</h2>
          <div className="flex flex-col sm:flex-row items-center gap-8 mt-10">
            <Link href="/player/1">
              <Button size="lg" className="bg-white text-indigo-900 hover:bg-white/90 font-black rounded-2xl transition-all">Resume Learning</Button>
            </Link>
            <div className="flex items-center gap-4">
               <div className="w-32 h-2 bg-black/20 rounded-full overflow-hidden">
                  <div className="h-full bg-white w-[68%] rounded-full"></div>
               </div>
               <span className="text-sm font-black text-white">68% Complete</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          <h3 className="text-2xl font-black tracking-tight">Assigned Courses</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Full-stack Web Dev', instr: 'David Miller', prog: 45, tag: 'TECH' },
              { title: 'Data Science Basics', instr: 'Dr. Sarah Chen', prog: 12, tag: 'DATA' },
            ].map((c, i) => (
              <div key={i} className="bg-[#161926] rounded-[2rem] border border-white/5 p-6 group hover:border-white/10 transition-all">
                 <div className="aspect-video bg-gray-800 rounded-2xl relative overflow-hidden mb-6">
                    <img src={`https://picsum.photos/400/250?v=s${i}`} className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform" />
                 </div>
                 <h4 className="font-bold text-lg text-white mb-1">{c.title}</h4>
                 <p className="text-xs text-gray-500 mb-8">Instructor: {c.instr}</p>
                 <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-500" style={{width: `${c.prog}%`}}></div>
                 </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-10">
           <div className="bg-[#161926] p-8 rounded-[2.5rem] border border-white/5">
              <h3 className="text-xl font-bold mb-8">Learning Stats</h3>
              <div className="space-y-8">
                 <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-orange-600/10 flex items-center justify-center text-orange-400 shrink-0"><Target size={24}/></div>
                    <div><p className="text-2xl font-black text-white">12h 45m</p><p className="text-[10px] text-gray-600 font-black uppercase tracking-widest">Time Spent Today</p></div>
                 </div>
                 <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-600/10 flex items-center justify-center text-emerald-400 shrink-0"><Zap size={24}/></div>
                    <div><p className="text-2xl font-black text-white">85%</p><p className="text-[10px] text-gray-600 font-black uppercase tracking-widest">Avg Quiz Score</p></div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
