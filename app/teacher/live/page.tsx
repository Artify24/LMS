
"use client";
import React from 'react';
import { Video, Plus, Calendar, Clock, Users, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function TeacherLivePage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-3xl font-black text-white mb-1">Live Classes</h1>
        <p className="text-gray-500 text-sm font-medium">Schedule and manage your interactive video sessions.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="bg-[#161926] p-10 rounded-[2.5rem] border border-white/5 h-fit shadow-2xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-indigo-600/10 rounded-2xl flex items-center justify-center text-indigo-400">
              <Plus size={24} />
            </div>
            <h2 className="text-2xl font-black text-white">Schedule</h2>
          </div>
          <form className="space-y-8" onSubmit={e => e.preventDefault()}>
            <div>
              <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3 ml-1">Class Title</label>
              <input type="text" placeholder="Advanced UI Workshop" className="w-full bg-black/20 border border-white/10 rounded-2xl py-4 px-5 text-sm focus:outline-none focus:border-indigo-500" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3 ml-1">Date</label>
                <input type="date" className="w-full bg-black/20 border border-white/10 rounded-2xl py-4 px-5 text-sm" />
              </div>
              <div>
                <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3 ml-1">Time</label>
                <input type="time" className="w-full bg-black/20 border border-white/10 rounded-2xl py-4 px-5 text-sm" />
              </div>
            </div>
            <Button fullWidth size="lg">Create Live Session</Button>
          </form>
        </div>

        <div className="lg:col-span-2 space-y-8">
          <div className="bg-[#161926] p-10 rounded-[2.5rem] border border-white/5 shadow-2xl">
            <h3 className="text-xl font-bold mb-10 flex items-center justify-between">
              Upcoming Today
              <span className="text-[10px] px-3 py-1 bg-indigo-600/10 text-indigo-400 rounded-full border border-indigo-600/20 font-black uppercase tracking-widest">Live Now</span>
            </h3>
            <div className="p-8 rounded-[2rem] bg-indigo-600/5 border border-indigo-600/10 flex flex-col md:flex-row items-center gap-8 group">
              <div className="w-20 h-20 rounded-3xl bg-indigo-600/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                <Video size={32} />
              </div>
              <div className="flex-grow text-center md:text-left">
                <h4 className="text-xl font-bold text-white mb-2">Micro-interactions Deep Dive</h4>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-[10px] font-black text-gray-600 uppercase tracking-widest">
                  <span className="flex items-center gap-1.5 text-indigo-400"><Clock size={12}/> 02:00 PM</span>
                  <span className="flex items-center gap-1.5"><Users size={12}/> 48 Registered</span>
                </div>
              </div>
              <Button size="lg" className="shadow-lg shadow-indigo-600/30">Join Class <ArrowRight size={16} className="ml-2"/></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
