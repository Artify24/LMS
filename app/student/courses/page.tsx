
"use client";
import React from 'react';
import { Play } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function StudentCourses() {
  const courses = [
    { t: 'Advanced UI Design', i: 'Alex Rivers', p: 68, l: '2h ago' },
    { t: 'React Architecture', i: 'Sarah Jenkins', p: 45, l: 'Yesterday' },
    { t: 'Node.js Backend', i: 'Michael Scott', p: 12, l: '3 days ago' },
    { t: 'Cloud Architecture', i: 'Elena Rod', p: 0, l: 'Not started' },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <header className="mb-10">
        <h1 className="text-3xl font-black text-white mb-1 tracking-tight">My Enrolled Courses</h1>
        <p className="text-gray-500 text-sm">Continue your learning journey where you left off.</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((c, i) => (
          <div key={i} className="bg-[#161926] rounded-[2.5rem] border border-white/5 p-1 group hover:border-white/10 transition-all overflow-hidden">
            <div className="aspect-video bg-gray-800 rounded-[2.2rem] m-1 overflow-hidden relative">
              <img src={`https://picsum.photos/600/400?course=${i}`} className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" alt={c.t} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <Button size="sm" className="h-10 px-6 rounded-xl font-black uppercase text-[10px] tracking-widest">
                  <Play size={14} className="mr-2" fill="white" /> {c.p > 0 ? 'Resume' : 'Start'}
                </Button>
              </div>
            </div>
            <div className="p-8">
              <h4 className="text-xl font-black text-white mb-2 leading-tight pr-4">{c.t}</h4>
              <p className="text-xs text-gray-500 mb-8 font-medium">Instructor: {c.i}</p>
              <div className="space-y-3">
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-gray-600">
                  <span>Progress</span><span>{c.p}%</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-500" style={{ width: `${c.p}%` }}></div>
                </div>
                <p className="text-[10px] text-gray-600 font-black uppercase tracking-widest pt-2">Last Active: {c.l}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
