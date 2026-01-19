
"use client";
import React from 'react';
import { Video, Calendar, Clock, Users, Play, ExternalLink } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function StudentLiveClasses() {
    const upcomingClasses = [
        {
            title: 'Advanced UI Systems Workshop',
            instructor: 'Prof. Jenkins',
            time: 'Starts in 15m',
            date: 'Today, 02:00 PM',
            isLive: true,
            registered: '48/50',
        }
    ];

    const recordings = [
        { title: 'Design Systems Architecture', date: 'Oct 15, 2024', duration: '1h 20m', thumbnail: 'https://picsum.photos/400/225?v=1' },
        { title: 'Intro to Typography', date: 'Oct 12, 2024', duration: '45m', thumbnail: 'https://picsum.photos/400/225?v=2' },
        { title: 'Color Theory in SaaS', date: 'Oct 10, 2024', duration: '1h 05m', thumbnail: 'https://picsum.photos/400/225?v=3' },
        { title: 'Mobile First Design', date: 'Oct 05, 2024', duration: '55m', thumbnail: 'https://picsum.photos/400/225?v=4' },
    ];

    return (
        <div className="max-w-7xl mx-auto space-y-12">
            <header>
                <h1 className="text-3xl font-black text-white mb-1 tracking-tight">Live Classes</h1>
                <p className="text-gray-500 text-sm">Join ongoing sessions or watch past recordings.</p>
            </header>

            {/* Ongoing/Upcoming Session */}
            <section>
                <h2 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-6">Upcoming Session</h2>
                {upcomingClasses.map((cls, i) => (
                    <div key={i} className="p-8 md:p-10 rounded-[2.5rem] bg-indigo-600/10 border border-indigo-600/20 flex flex-col md:flex-row items-center gap-10 shadow-2xl shadow-indigo-600/5 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-700">
                            <Video size={120} />
                        </div>

                        <div className="w-24 h-24 rounded-[2rem] bg-indigo-600 flex items-center justify-center text-white shrink-0 shadow-xl shadow-indigo-600/40 relative z-10">
                            <Video size={40} />
                        </div>

                        <div className="flex-grow space-y-4 relative z-10 text-center md:text-left">
                            <div>
                                <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-black uppercase tracking-widest mb-3 border border-emerald-500/10 animate-pulse">
                                    {cls.time}
                                </span>
                                <h3 className="text-2xl md:text-3xl font-black text-white">{cls.title}</h3>
                                <p className="text-gray-400 font-medium">Instructor: {cls.instructor}</p>
                            </div>

                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-[10px] font-black text-gray-500 uppercase tracking-widest">
                                <span className="flex items-center gap-2"><Calendar size={14} /> {cls.date}</span>
                                <span className="flex items-center gap-2"><Users size={14} /> {cls.registered} Registered</span>
                            </div>
                        </div>

                        <div className="relative z-10 w-full md:w-auto">
                            <Button size="lg" className="h-16 px-12 rounded-2xl w-full md:w-auto">Join Session</Button>
                        </div>
                    </div>
                ))}
            </section>

            {/* Recordings Grid */}
            <section className="space-y-8">
                <div className="flex items-center justify-between">
                    <h2 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Past Class Recordings</h2>
                    <Button variant="ghost" className="text-[10px] font-black uppercase tracking-widest">View All</Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {recordings.map((rec, i) => (
                        <div key={i} className="bg-[#161926] rounded-[2rem] border border-white/5 p-1 group hover:border-white/10 transition-all overflow-hidden flex flex-col">
                            <div className="aspect-video bg-gray-800 rounded-[1.8rem] m-1 overflow-hidden relative">
                                <img src={rec.thumbnail} className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" alt={rec.title} />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black">
                                        <Play size={20} fill="black" className="ml-1" />
                                    </div>
                                </div>
                                <div className="absolute bottom-3 right-3 px-2 py-1 rounded-lg bg-black/60 text-[8px] font-black uppercase tracking-widest text-white">
                                    {rec.duration}
                                </div>
                            </div>
                            <div className="p-6">
                                <h4 className="font-bold text-white mb-2 leading-tight group-hover:text-indigo-400 transition-colors uppercase tracking-tight">{rec.title}</h4>
                                <div className="flex items-center justify-between mt-4">
                                    <span className="text-[10px] text-gray-600 font-bold uppercase tracking-tight">{rec.date}</span>
                                    <button className="p-2 text-gray-600 hover:text-white transition-colors">
                                        <ExternalLink size={14} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ/Resources Tip */}
            <section className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-10 flex flex-col md:flex-row items-center gap-8">
                <div className="w-16 h-16 rounded-2xl bg-orange-600/10 flex items-center justify-center text-orange-400 shrink-0">
                    <Clock size={32} />
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-2">Missing a session?</h3>
                    <p className="text-gray-500 text-sm font-medium leading-relaxed">All live workshops are recorded and uploaded within 24 hours. You can find them in the gallery above or in your course content library.</p>
                </div>
                <Button variant="secondary" className="md:ml-auto h-12 rounded-xl text-[10px] font-black uppercase tracking-widest px-8">Schedule Reminder</Button>
            </section>
        </div>
    );
}
