
"use client";
import React from 'react';
import { Megaphone, Send, Search, Users, Eye, MoreHorizontal, Calendar, Bell, Clock } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function TeacherAnnouncements() {
    const announcements = [
        {
            target: 'Advanced UI Design Students',
            title: 'Workshop rescheduled for Friday',
            date: 'Oct 18, 2024',
            sentAt: '2 hours ago',
            views: 145,
            status: 'Sent'
        },
        {
            target: 'All Students',
            title: 'New Module: "Design Systems with Tailwind" is live!',
            date: 'Oct 15, 2024',
            sentAt: '3 days ago',
            views: 1240,
            status: 'Sent'
        },
        {
            target: 'Full-stack Dev Students',
            title: 'Update on Final Project Requirements',
            date: 'Oct 12, 2024',
            sentAt: '1 week ago',
            views: 450,
            status: 'Sent'
        },
    ];

    return (
        <div className="max-w-7xl mx-auto space-y-12">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-black text-white mb-1 tracking-tight">Announcements</h1>
                    <p className="text-gray-500 text-sm font-medium">Broadcast updates and important news to your students.</p>
                </div>
                <Button className="gap-2 h-12 rounded-xl text-[10px]"><Megaphone size={14} /> Create New Announcement</Button>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Compose Section Placeholder */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="bg-[#161926] p-10 rounded-[2.5rem] border border-white/5 space-y-10">
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold uppercase tracking-tight">Compose Announcement</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="text-[10px] font-black text-gray-600 uppercase tracking-widest block mb-3">Recipients</label>
                                    <select className="w-full h-14 bg-white/5 border border-white/5 rounded-2xl px-6 text-sm text-white font-medium focus:ring-2 focus:ring-indigo-500 outline-none uppercase tracking-widest text-[10px] font-black">
                                        <option>All Students</option>
                                        <option>Advanced UI Design</option>
                                        <option>Full-stack Dev</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="text-[10px] font-black text-gray-600 uppercase tracking-widest block mb-3">Subject</label>
                                    <input type="text" placeholder="Enter announcement title..." className="w-full h-14 bg-white/5 border border-white/5 rounded-2xl px-6 text-sm text-white font-medium focus:ring-2 focus:ring-indigo-500 outline-none" />
                                </div>
                                <div>
                                    <label className="text-[10px] font-black text-gray-600 uppercase tracking-widest block mb-3">Message Body</label>
                                    <textarea rows={6} placeholder="Write your message here..." className="w-full bg-white/5 border border-white/5 rounded-2xl p-6 text-sm text-white font-medium focus:ring-2 focus:ring-indigo-500 outline-none resize-none" />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between pt-6 border-t border-white/5">
                            <div className="flex gap-4">
                                <Button variant="outline" size="icon" className="h-12 w-12 rounded-xl"><Bell size={18} /></Button>
                                <Button variant="outline" size="icon" className="h-12 w-12 rounded-xl"><Clock size={18} /></Button>
                            </div>
                            <Button className="h-14 px-12 rounded-2xl gap-2 font-black">
                                <Send size={18} /> Push Announcement
                            </Button>
                        </div>
                    </div>
                </div>

                {/* History / Tips */}
                <div className="space-y-10">
                    <div className="bg-indigo-600 p-8 rounded-[2.5rem] text-white space-y-6 shadow-2xl shadow-indigo-600/20">
                        <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center"><Megaphone size={24} /></div>
                        <h3 className="text-2xl font-black leading-tight">Effective Broadcasting</h3>
                        <p className="text-white/70 text-sm font-medium">Keep your announcements concise. Use bullet points for clear readability on mobile devices.</p>
                        <Button className="bg-white text-indigo-600 hover:bg-white/90 w-full h-14 rounded-2xl">View Samples</Button>
                    </div>

                    <div className="bg-[#161926] p-8 rounded-[2.5rem] border border-white/5 space-y-8">
                        <h3 className="text-xl font-bold uppercase tracking-tight">Quick Stats</h3>
                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest flex items-center gap-2"><Eye size={14} /> Total Reads</span>
                                <span className="text-sm font-bold text-white">4.2k</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest flex items-center gap-2"><Send size={14} /> Total Sent</span>
                                <span className="text-sm font-bold text-white">12</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Announcements History */}
            <section className="bg-[#161926] rounded-[2.5rem] border border-white/5 overflow-hidden">
                <div className="p-10 border-b border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <h3 className="text-xl font-bold uppercase tracking-tight">Announcement History</h3>
                    <div className="flex items-center gap-4 bg-white/5 px-4 h-12 rounded-2xl border border-white/5 flex-grow max-w-md">
                        <Search size={18} className="text-gray-500" />
                        <input type="text" placeholder="Search history..." className="bg-transparent border-none outline-none text-sm text-white w-full h-full font-medium" />
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-white/[0.02]">
                                <th className="px-10 py-6 text-[10px] font-black text-gray-600 uppercase tracking-widest">Announcement</th>
                                <th className="px-10 py-6 text-[10px] font-black text-gray-600 uppercase tracking-widest">Recipients</th>
                                <th className="px-10 py-6 text-[10px] font-black text-gray-600 uppercase tracking-widest">Reads</th>
                                <th className="px-10 py-6 text-[10px] font-black text-gray-600 uppercase tracking-widest">Sent Date</th>
                                <th className="px-10 py-6 text-[10px] font-black text-gray-600 uppercase tracking-widest"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {announcements.map((a, i) => (
                                <tr key={i} className="hover:bg-white/[0.01] transition-colors group">
                                    <td className="px-10 py-6">
                                        <div>
                                            <p className="text-sm font-bold text-white uppercase tracking-tight">{a.title}</p>
                                            <p className="text-[10px] text-gray-500 font-medium italic">{a.sentAt}</p>
                                        </div>
                                    </td>
                                    <td className="px-10 py-6">
                                        <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest flex items-center gap-2"><Users size={12} /> {a.target}</span>
                                    </td>
                                    <td className="px-10 py-6">
                                        <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest flex items-center gap-2"><Eye size={12} /> {a.views}</span>
                                    </td>
                                    <td className="px-10 py-6 text-[10px] font-black text-gray-500 uppercase tracking-widest">{a.date}</td>
                                    <td className="px-10 py-6 text-right">
                                        <button className="p-2 text-gray-600 hover:text-white transition-colors">
                                            <MoreHorizontal size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}
