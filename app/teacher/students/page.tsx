
"use client";
import React from 'react';
import { Users, Search, Filter, MoreHorizontal, Mail, Phone, Calendar, ArrowUpRight, CheckCircle2, Clock } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function TeacherStudents() {
    const students = [
        { name: 'Emma Wilson', email: 'emma@example.com', phone: '+1 234 567 890', joined: 'Oct 12, 2024', course: 'Advanced UI Design', progress: 85, active: true, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma' },
        { name: 'James Chen', email: 'james@example.com', phone: '+1 234 567 891', joined: 'Oct 10, 2024', course: 'Full-stack Dev', progress: 42, active: true, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James' },
        { name: 'Sarah Miller', email: 'sarah@example.com', phone: '+1 234 567 892', joined: 'Oct 05, 2024', course: 'UX Research', progress: 95, active: false, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah' },
        { name: 'David Smith', email: 'david@example.com', phone: '+1 234 567 893', joined: 'Sep 28, 2024', course: 'Advanced UI Design', progress: 12, active: true, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David' },
        { name: 'Olivia Brown', email: 'olivia@example.com', phone: '+1 234 567 894', joined: 'Sep 25, 2024', course: 'SaaS Architecture', progress: 68, active: true, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Olivia' },
    ];

    return (
        <div className="max-w-7xl mx-auto space-y-12">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-black text-white mb-1 tracking-tight">Student Directory</h1>
                    <p className="text-gray-500 text-sm font-medium">Manage your student roster and view their detailed learning progress.</p>
                </div>
                <div className="flex items-center gap-4">
                    <Button variant="secondary" className="gap-2 h-12 rounded-xl text-[10px]"><Mail size={14} /> Bulk Email</Button>
                    <Button className="h-12 rounded-xl text-[10px]">Add New Student</Button>
                </div>
            </header>

            {/* Search and Filters */}
            <div className="bg-[#161926] p-4 rounded-[2rem] border border-white/5 flex flex-col md:flex-row items-center gap-4">
                <div className="flex items-center gap-4 bg-white/5 px-4 h-14 rounded-2xl border border-white/5 flex-grow">
                    <Search size={18} className="text-gray-500" />
                    <input type="text" placeholder="Search by name, email or course..." className="bg-transparent border-none outline-none text-sm text-white w-full h-full font-medium" />
                </div>
                <div className="flex items-center gap-4 w-full md:w-auto">
                    <Button variant="outline" className="gap-2 h-14 rounded-2xl text-[10px] flex-grow md:flex-grow-0"><Filter size={14} /> Course: All</Button>
                    <Button variant="outline" className="gap-2 h-14 rounded-2xl text-[10px] flex-grow md:flex-grow-0"><Filter size={14} /> Status: Active</Button>
                </div>
            </div>

            {/* Students Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {students.map((s, i) => (
                    <div key={i} className="bg-[#161926] p-8 rounded-[2.5rem] border border-white/5 group hover:border-indigo-500/30 transition-all">
                        <div className="flex items-start justify-between mb-8">
                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <img src={s.avatar} className="w-16 h-16 rounded-2xl bg-indigo-500/10 shadow-xl shadow-black/20" alt={s.name} />
                                    {s.active && <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-[#161926] rounded-full"></div>}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white uppercase tracking-tight">{s.name}</h3>
                                    <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest">{s.course}</p>
                                </div>
                            </div>
                            <button className="text-gray-600 hover:text-white transition-colors"><MoreHorizontal size={20} /></button>
                        </div>

                        <div className="space-y-6">
                            <div className="space-y-3">
                                <div className="flex justify-between text-[10px] font-black text-gray-600 uppercase tracking-widest">
                                    <span>Course Progress</span>
                                    <span className="text-white">{s.progress}%</span>
                                </div>
                                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                                    <div className="h-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]" style={{ width: `${s.progress}%` }}></div>
                                </div>
                            </div>

                            <div className="pt-4 grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <p className="text-[8px] font-black text-gray-700 uppercase tracking-[0.2em]">Joined</p>
                                    <p className="text-[10px] font-bold text-white/70 flex items-center gap-2"><Calendar size={12} /> {s.joined}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[8px] font-black text-gray-700 uppercase tracking-[0.2em]">Last Activity</p>
                                    <p className="text-[10px] font-bold text-white/70 flex items-center gap-2"><Clock size={12} /> 2h ago</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 flex gap-3">
                            <Button variant="secondary" fullWidth className="h-11 rounded-xl text-[9px]">View Detail</Button>
                            <Button variant="outline" size="icon" className="h-11 w-11 shrink-0 rounded-xl"><Mail size={16} /></Button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination Footer */}
            <footer className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Showing 5 of 1,284 students registered in 12 courses</p>
                <div className="flex items-center gap-2">
                    {[1, 2, 3, '...', 12].map((p, i) => (
                        <button key={i} className={`w-10 h-10 rounded-xl text-[10px] font-black transition-all ${p === 1 ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' : 'bg-white/5 text-gray-500 hover:bg-white/10 hover:text-white'
                            }`}>
                            {p}
                        </button>
                    ))}
                </div>
            </footer>
        </div>
    );
}
