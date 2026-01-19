
"use client";
import React from 'react';
import { CheckCircle2, Zap, Trophy } from 'lucide-react';

export default function StudentProgress() {
    return (
        <div className="max-w-7xl mx-auto">
            <header className="mb-10">
                <h1 className="text-3xl font-black text-white mb-1 tracking-tight">Your Progress</h1>
                <p className="text-gray-500 text-sm">Detailed breakdown of your learning achievements.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                <div className="bg-[#161926] p-10 rounded-[2.5rem] border border-white/5 flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-[1.5rem] bg-indigo-600/10 flex items-center justify-center text-indigo-400 mb-8"><CheckCircle2 size={40} /></div>
                    <p className="text-4xl font-black text-white mb-2">12</p>
                    <p className="text-xs text-gray-600 font-black uppercase tracking-widest">Courses Completed</p>
                </div>
                <div className="bg-[#161926] p-10 rounded-[2.5rem] border border-white/5 flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-[1.5rem] bg-orange-600/10 flex items-center justify-center text-orange-400 mb-8"><Zap size={40} /></div>
                    <p className="text-4xl font-black text-white mb-2">8</p>
                    <p className="text-xs text-gray-600 font-black uppercase tracking-widest">Certificates Earned</p>
                </div>
                <div className="bg-[#161926] p-10 rounded-[2.5rem] border border-white/5 flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-[1.5rem] bg-emerald-600/10 flex items-center justify-center text-emerald-400 mb-8"><Trophy size={40} /></div>
                    <p className="text-4xl font-black text-white mb-2">2,450</p>
                    <p className="text-xs text-gray-600 font-black uppercase tracking-widest">Global Rank: #422</p>
                </div>
            </div>

            <div className="bg-[#161926] p-10 rounded-[2.5rem] border border-white/5">
                <h3 className="text-xl font-bold mb-10">Monthly Engagement</h3>
                <div className="h-64 flex items-end justify-between gap-4 px-10">
                    {[30, 45, 60, 20, 80, 55, 90, 70, 65, 40, 85, 95].map((h, i) => (
                        <div key={i} className="flex-1 bg-white/5 rounded-t-xl relative group">
                            <div className="absolute bottom-0 left-0 right-0 bg-indigo-600 rounded-t-xl transition-all duration-700 opacity-60 group-hover:opacity-100" style={{ height: `${h}%` }}></div>
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black border border-white/10 px-2 py-1 rounded text-[8px] font-black text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">{h}%</div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between px-10 mt-6 text-[8px] font-black text-gray-700 uppercase tracking-[0.2em]">
                    <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
                </div>
            </div>
        </div>
    );
}
