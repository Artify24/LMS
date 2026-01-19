
"use client";
import React from 'react';
import { BarChart3, TrendingUp, Users, Award, Download, Filter, Search, MoreHorizontal, ArrowUpRight } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function TeacherAnalytics() {
    const stats = [
        { label: 'Active Students', value: '1,284', trend: '+12%', icon: <Users size={20} />, color: 'indigo' },
        { label: 'Avg. Course Progress', value: '64%', trend: '+5%', icon: <TrendingUp size={20} />, color: 'emerald' },
        { label: 'Certificates Issued', value: '856', trend: '+18%', icon: <Award size={20} />, color: 'orange' },
        { label: 'Total Revenue', value: '$42.5k', trend: '+8%', icon: <BarChart3 size={20} />, color: 'indigo' },
    ];

    const students = [
        { name: 'Emma Wilson', email: 'emma@example.com', course: 'Advanced UI Design', progress: 85, status: 'Active', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma' },
        { name: 'James Chen', email: 'james@example.com', course: 'Full-stack Dev', progress: 42, status: 'Active', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James' },
        { name: 'Sarah Miller', email: 'sarah@example.com', course: 'UX Research', progress: 95, status: 'Completed', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah' },
        { name: 'David Smith', email: 'david@example.com', course: 'Advanced UI Design', progress: 12, status: 'Inactive', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David' },
    ];

    return (
        <div className="max-w-7xl mx-auto space-y-12">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-black text-white mb-1 tracking-tight">Analytics & Insights</h1>
                    <p className="text-gray-500 text-sm font-medium">Monitor student performance and platform growth.</p>
                </div>
                <div className="flex items-center gap-4">
                    <Button variant="secondary" className="gap-2 h-12 rounded-xl text-[10px]"><Download size={14} /> Export CSV</Button>
                    <Button className="h-12 rounded-xl text-[10px]">Generate Report</Button>
                </div>
            </header>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((s, i) => (
                    <div key={i} className="bg-[#161926] p-8 rounded-[2.5rem] border border-white/5 space-y-4 hover:border-white/10 transition-all">
                        <div className="flex items-center justify-between">
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${s.color === 'emerald' ? 'bg-emerald-500/10 text-emerald-400' :
                                    s.color === 'orange' ? 'bg-orange-500/10 text-orange-400' :
                                        'bg-indigo-500/10 text-indigo-400'
                                }`}>
                                {s.icon}
                            </div>
                            <span className="flex items-center gap-1 text-emerald-400 text-[10px] font-black uppercase tracking-widest">
                                {s.trend} <ArrowUpRight size={12} />
                            </span>
                        </div>
                        <div>
                            <p className="text-2xl font-black text-white">{s.value}</p>
                            <p className="text-[10px] text-gray-600 font-black uppercase tracking-widest">{s.label}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Performance Chart Placeholder */}
                <div className="lg:col-span-2 bg-[#161926] p-10 rounded-[2.5rem] border border-white/5 space-y-8">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold uppercase tracking-tight">Learning Engagement</h3>
                        <div className="flex gap-2">
                            <Button variant="secondary" size="sm" className="h-9 px-4 rounded-lg text-[8px]">Weekly</Button>
                            <Button variant="ghost" size="sm" className="h-9 px-4 rounded-lg text-[8px]">Monthly</Button>
                        </div>
                    </div>
                    <div className="h-64 bg-white/[0.02] rounded-3xl border border-dashed border-white/10 flex items-center justify-center">
                        <div className="text-center space-y-2">
                            <BarChart3 size={40} className="text-gray-700 mx-auto mb-4" />
                            <p className="text-[10px] font-black text-gray-700 uppercase tracking-widest">Growth Visualization coming soon</p>
                        </div>
                    </div>
                </div>

                {/* Distribution Summary */}
                <div className="bg-[#161926] p-10 rounded-[2.5rem] border border-white/5 space-y-8">
                    <h3 className="text-xl font-bold uppercase tracking-tight">Course Completion</h3>
                    <div className="space-y-6">
                        {[
                            { label: 'Module 1', prog: 85, color: 'bg-indigo-500' },
                            { label: 'Module 2', prog: 62, color: 'bg-emerald-500' },
                            { label: 'Module 3', prog: 34, color: 'bg-orange-500' },
                        ].map((m, i) => (
                            <div key={i} className="space-y-3">
                                <div className="flex justify-between text-[10px] font-black text-gray-500 uppercase tracking-widest">
                                    <span>{m.label}</span>
                                    <span className="text-white">{m.prog}%</span>
                                </div>
                                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                    <div className={`h-full ${m.color}`} style={{ width: `${m.prog}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Student Roster Table */}
            <section className="bg-[#161926] rounded-[2.5rem] border border-white/5 overflow-hidden">
                <div className="p-10 border-b border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <h3 className="text-xl font-bold uppercase tracking-tight">Student Roster</h3>
                    <div className="flex items-center gap-4 bg-white/5 px-4 h-12 rounded-2xl border border-white/5 flex-grow max-w-md">
                        <Search size={18} className="text-gray-500" />
                        <input type="text" placeholder="Search students..." className="bg-transparent border-none outline-none text-sm text-white w-full h-full font-medium" />
                    </div>
                    <Button variant="secondary" className="gap-2 h-12 rounded-xl text-[10px]"><Filter size={14} /> Filters</Button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-white/[0.02]">
                                <th className="px-10 py-6 text-[10px] font-black text-gray-600 uppercase tracking-widest">Student</th>
                                <th className="px-10 py-6 text-[10px] font-black text-gray-600 uppercase tracking-widest">Course</th>
                                <th className="px-10 py-6 text-[10px] font-black text-gray-600 uppercase tracking-widest">Progress</th>
                                <th className="px-10 py-6 text-[10px] font-black text-gray-600 uppercase tracking-widest">Status</th>
                                <th className="px-10 py-6 text-[10px] font-black text-gray-600 uppercase tracking-widest"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {students.map((s, i) => (
                                <tr key={i} className="hover:bg-white/[0.01] transition-colors group">
                                    <td className="px-10 py-6">
                                        <div className="flex items-center gap-4">
                                            <img src={s.avatar} className="w-10 h-10 rounded-xl bg-indigo-500/10" alt={s.name} />
                                            <div>
                                                <p className="text-sm font-bold text-white uppercase tracking-tight">{s.name}</p>
                                                <p className="text-[10px] text-gray-500 font-medium">{s.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-10 py-6 text-sm font-medium text-gray-400">{s.course}</td>
                                    <td className="px-10 py-6">
                                        <div className="flex items-center gap-4 min-w-[120px]">
                                            <div className="flex-grow h-1.5 bg-white/5 rounded-full overflow-hidden">
                                                <div className="h-full bg-indigo-500" style={{ width: `${s.progress}%` }}></div>
                                            </div>
                                            <span className="text-[10px] font-black text-white">{s.progress}%</span>
                                        </div>
                                    </td>
                                    <td className="px-10 py-6">
                                        <span className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-[0.15em] border ${s.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/10' :
                                                s.status === 'Active' ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/10' :
                                                    'bg-white/5 text-gray-500 border-white/5'
                                            }`}>
                                            {s.status}
                                        </span>
                                    </td>
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
                <div className="p-8 border-t border-white/5 flex items-center justify-between">
                    <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Showing 4 of 1,284 students</p>
                    <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="rounded-lg h-10 w-10 p-0"><ArrowUpRight size={14} className="rotate-[225deg]" /></Button>
                        <Button variant="outline" size="sm" className="rounded-lg h-10 w-10 p-0"><ArrowUpRight size={14} className="rotate-45" /></Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
