
"use client";
import React from 'react';
import { BookOpen, Users, Trophy, Clock, Copy, Trash2, Plus, Search } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function TeacherCoursesPage() {
  const courses = [
    { title: 'Mastering Advanced UI Design 2024', status: 'published', students: 1240, rating: 4.9, time: '12h 30m' },
    { title: 'Advanced React Patterns & SSR', status: 'draft', students: 0, rating: 0, time: 'Last edited 2d ago' },
    { title: 'Scalable Microservices Architecture', status: 'published', students: 386, rating: 4.8, time: '18h 45m' },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="text-3xl font-black text-white mb-1">Course Management</h1>
          <p className="text-gray-500 text-sm font-medium">Create and manage your educational content.</p>
        </div>
        <div className="flex gap-3">
           <div className="relative hidden lg:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input type="text" placeholder="Search courses..." className="bg-white/5 border border-white/10 rounded-xl h-12 pl-10 pr-4 text-sm w-64 focus:outline-none focus:border-indigo-500" />
           </div>
           <Button className="gap-2">
              <Plus size={18} /> New Course
           </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {courses.map((c, i) => (
          <div key={i} className="bg-[#161926] rounded-[2.5rem] border border-white/5 p-8 flex flex-col sm:flex-row gap-8 hover:border-white/10 transition-all group">
            <div className="w-full sm:w-44 aspect-square rounded-[2rem] bg-gray-800 relative overflow-hidden flex-shrink-0">
               <img src={`https://picsum.photos/400/400?sig=${i}`} className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" alt={c.title} />
               <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest text-white ${c.status === 'published' ? 'bg-emerald-500' : 'bg-gray-600'}`}>{c.status}</span>
            </div>
            <div className="flex-grow flex flex-col justify-between py-2 overflow-hidden">
               <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                     <h3 className="font-bold text-xl text-white leading-tight truncate">{c.title}</h3>
                  </div>
                  <div className="flex items-center flex-wrap gap-4 text-[10px] font-black text-gray-500 uppercase tracking-widest mb-8">
                     <span className="flex items-center gap-1.5"><Users size={12}/> {c.students}</span>
                     <span className="flex items-center gap-1.5"><Trophy size={12} className="text-orange-400"/> {c.rating}</span>
                     <span className="flex items-center gap-1.5"><Clock size={12}/> {c.time}</span>
                  </div>
               </div>
               <div className="grid grid-cols-2 gap-3">
                  <Button variant="secondary" className="h-10 text-[9px]">Edit</Button>
                  <Button variant="secondary" className="h-10 text-[9px] text-indigo-400 border-indigo-500/10">Analytics</Button>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
