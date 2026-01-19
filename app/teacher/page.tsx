
"use client";
import React from 'react';
import { Users, BookOpen, ArrowUpRight, Clock, Video } from 'lucide-react';
import Button from '@/components/ui/Button';

function StatsCard({ label, value, change, icon }: any) {
  return (
    <div className="bg-[#161926] p-8 rounded-[2rem] border border-white/5 flex flex-col gap-6 relative overflow-hidden group hover:border-white/10 transition-all">
      <div className="flex justify-between items-start relative z-10">
        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        {change && (
          <span className="text-[10px] font-bold px-2 py-1 rounded-lg bg-white/5 text-green-500 uppercase tracking-widest">
            {change}
          </span>
        )}
      </div>
      <div className="relative z-10">
        <p className="text-[10px] text-gray-500 uppercase tracking-widest font-extrabold mb-1">{label}</p>
        <p className="text-3xl font-black text-white">{value}</p>
      </div>
    </div>
  );
}

export default function TeacherDashboard() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">Teacher Overview</h1>
          <p className="text-gray-500 text-sm">Monitor your students' performance and manage your curriculum.</p>
        </div>
        <Button className="h-11 px-6 shadow-xl uppercase text-xs font-black tracking-widest">
          + New Course
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <StatsCard label="Total Students" value="1,284" change="+12%" icon={<Users size={24}/>} />
        <StatsCard label="Active Courses" value="8" icon={<BookOpen size={24} />} />
        <StatsCard label="Engagement Score" value="92%" change="+5.4%" icon={<ArrowUpRight size={24}/>} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-[#161926] p-8 rounded-[2rem] border border-white/5">
          <h2 className="text-xl font-bold mb-8">Recent Student Activity</h2>
          <div className="space-y-4">
            {[
              { name: 'Alex Johnson', action: 'completed Module 4 of', target: 'UI/UX Masterclass', time: '2 minutes ago', avatar: 'https://i.pravatar.cc/100?u=alex' },
              { name: 'Maria Garcia', action: 'submitted project', target: 'Data Pipeline Design', time: '15 minutes ago', avatar: 'https://i.pravatar.cc/100?u=maria' },
            ].map((activity, i) => (
              <div key={i} className="flex items-center gap-5 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all group">
                <img src={activity.avatar} className="w-12 h-12 rounded-full ring-2 ring-white/5" alt={activity.name} />
                <div className="flex-grow">
                  <p className="text-sm text-gray-300">
                    <span className="font-bold text-white group-hover:text-indigo-400 transition-colors">{activity.name}</span> {activity.action} <span className="font-bold text-white">"{activity.target}"</span>
                  </p>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1 flex items-center gap-1.5"><Clock size={10}/> {activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-indigo-600/10 p-8 rounded-[2rem] border border-indigo-600/20">
           <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 flex items-center justify-center text-indigo-400 mb-6"><Video size={24}/></div>
           <h3 className="font-bold text-lg mb-2">Live Session Tip</h3>
           <p className="text-xs text-gray-500 font-medium leading-relaxed mb-6">Interactive quizzes during live classes increase retention by up to 40%.</p>
           <Button variant="secondary" fullWidth className="h-11 border-indigo-600/20 text-indigo-400 text-[10px] font-black uppercase tracking-widest">Learn More</Button>
        </div>
      </div>
    </div>
  );
}
