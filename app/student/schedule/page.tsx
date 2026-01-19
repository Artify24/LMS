
"use client";
import React from 'react';
import { Calendar as CalendarIcon, Clock, ChevronLeft, ChevronRight, Video, FileText, HelpCircle } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function StudentSchedule() {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const currentMonth = "October 2024";

    const events = [
        { day: 15, title: 'UI Systems Workshop', time: '02:00 PM', type: 'live', color: 'indigo' },
        { day: 15, title: 'Component Library Quiz', time: '04:30 PM', type: 'quiz', color: 'orange' },
        { day: 18, title: 'Project Proposal Due', time: '11:59 PM', type: 'assignment', color: 'emerald' },
        { day: 22, title: 'Live Q&A Session', time: '10:00 AM', type: 'live', color: 'indigo' },
    ];

    return (
        <div className="max-w-7xl mx-auto space-y-10">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-black text-white mb-1 tracking-tight">Your Schedule</h1>
                    <p className="text-gray-500 text-sm">Keep track of your classes, assignments, and exams.</p>
                </div>
                <div className="flex items-center gap-4 bg-[#161926] p-2 rounded-2xl border border-white/5">
                    <Button variant="ghost" size="icon" className="rounded-xl"><ChevronLeft size={20} /></Button>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] px-4">{currentMonth}</span>
                    <Button variant="ghost" size="icon" className="rounded-xl"><ChevronRight size={20} /></Button>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-7 gap-8">
                {/* Calendar Grid */}
                <div className="lg:col-span-5 space-y-6">
                    <div className="bg-[#161926] rounded-[2.5rem] border border-white/5 overflow-hidden shadow-2xl">
                        <div className="grid grid-cols-7 border-b border-white/5 bg-white/[0.02]">
                            {days.map(d => (
                                <div key={d} className="py-6 text-center text-[10px] font-black text-gray-500 uppercase tracking-widest">{d}</div>
                            ))}
                        </div>
                        <div className="grid grid-cols-7">
                            {Array.from({ length: 31 }, (_, i) => i + 1).map(d => {
                                const dayEvents = events.filter(e => e.day === d);
                                const isToday = d === 15;
                                return (
                                    <div key={d} className={`min-h-[140px] p-4 border-r border-b border-white/5 last:border-r-0 relative group hover:bg-white/[0.01] transition-colors ${isToday ? 'bg-indigo-600/5' : ''}`}>
                                        <span className={`text-[10px] font-black ${isToday ? 'bg-indigo-600 text-white w-6 h-6 rounded-lg flex items-center justify-center' : 'text-gray-600'}`}>{d}</span>
                                        <div className="mt-4 space-y-2">
                                            {dayEvents.map((e, idx) => (
                                                <div key={idx} className={`p-2 rounded-xl text-[8px] font-black uppercase tracking-tight border ${e.color === 'indigo' ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400' :
                                                        e.color === 'orange' ? 'bg-orange-500/10 border-orange-500/20 text-orange-400' :
                                                            'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                                                    }`}>
                                                    {e.title}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Upcoming Events List */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="bg-[#161926] p-8 rounded-[2.5rem] border border-white/5 space-y-8">
                        <h3 className="text-xl font-bold">Today's Focus</h3>
                        <div className="space-y-6">
                            {events.filter(e => e.day === 15).map((e, i) => (
                                <div key={i} className="flex gap-4 group">
                                    <div className={`w-12 h-12 rounded-2xl shrink-0 flex items-center justify-center ${e.type === 'live' ? 'bg-indigo-500/10 text-indigo-400' : 'bg-orange-500/10 text-orange-400'
                                        }`}>
                                        {e.type === 'live' ? <Video size={20} /> : <HelpCircle size={20} />}
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors uppercase tracking-tight">{e.title}</p>
                                        <p className="text-[10px] text-gray-600 font-black uppercase tracking-widest flex items-center gap-2"><Clock size={12} /> {e.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <hr className="border-white/5" />
                        <div className="pt-4">
                            <Button fullWidth variant="outline" className="h-14 rounded-2xl">Add to Google Calendar</Button>
                        </div>
                    </div>

                    <div className="bg-indigo-600 p-8 rounded-[2.5rem] text-white space-y-6 shadow-2xl shadow-indigo-600/20">
                        <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center"><FileText size={24} /></div>
                        <h3 className="text-2xl font-black leading-tight">Prepare for the Design Quiz!</h3>
                        <p className="text-white/70 text-sm font-medium">Your quiz starts in 4 hours. Make sure to review the Design Systems documentation.</p>
                        <Button className="bg-white text-indigo-600 hover:bg-white/90 w-full h-14 rounded-2xl">Study Resources</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
