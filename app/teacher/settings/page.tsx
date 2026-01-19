
"use client";
import React from 'react';
import { User, Lock, Bell, Shield, Database, Trash2, Camera, LogOut, ChevronRight, HardDrive, Globe } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function TeacherSettings() {
    const settingsOptions = [
        {
            title: 'Academy Profile',
            desc: 'Customize your public profile and academy branding.',
            icon: <User size={24} />,
            items: ['Profile Name', 'Biography', 'Professional Titling', 'Social Links']
        },
        {
            title: 'Academy Security',
            desc: 'Manage your credentials and secure your teaching account.',
            icon: <Shield size={24} />,
            items: ['Change Password', 'Two-Factor Authentication', 'Active Sessions']
        },
        {
            title: 'Course Management',
            desc: 'Configure global settings for your courses and enrollments.',
            icon: <Database size={24} />,
            items: ['Global Enrollments', 'Certificate Templates', 'Course Expiration']
        }
    ];

    return (
        <div className="max-w-4xl mx-auto space-y-12">
            <header>
                <h1 className="text-3xl font-black text-white mb-1 tracking-tight">System Settings</h1>
                <p className="text-gray-500 text-sm font-medium">Manage your instructor profile and educational environment.</p>
            </header>

            {/* Teacher Profile Banner */}
            <section className="bg-indigo-600 rounded-[2.5rem] p-10 flex flex-col md:flex-row items-center gap-10 shadow-2xl shadow-indigo-600/20 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none scale-150">
                    <Globe size={160} />
                </div>
                <div className="relative group">
                    <div className="w-32 h-32 rounded-[2.5rem] bg-white/20 border-2 border-white/40 flex items-center justify-center overflow-hidden">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=ProfJenkins" className="w-full h-full object-cover" alt="Avatar" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                            <Camera size={24} className="text-white" />
                        </div>
                    </div>
                </div>
                <div className="text-center md:text-left space-y-2 flex-grow relative z-10">
                    <h2 className="text-3xl font-black">Prof. Harrison Jenkins</h2>
                    <p className="text-indigo-100/70 font-bold uppercase tracking-widest text-[10px]">Senior Instructor • Certified Expert</p>
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
                        <Button size="sm" className="bg-white text-indigo-600 hover:bg-white/90 rounded-xl px-6">Edit Profile</Button>
                        <Button size="sm" variant="ghost" className="text-white hover:bg-white/10 rounded-xl px-6">Preview Page</Button>
                    </div>
                </div>
            </section>

            {/* Settings Sections */}
            <div className="space-y-8">
                {settingsOptions.map((opt, i) => (
                    <div key={i} className="bg-[#161926] rounded-[2.5rem] border border-white/5 overflow-hidden group hover:border-white/10 transition-all">
                        <div className="p-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                            <div className="flex gap-8">
                                <div className="w-16 h-16 rounded-[1.5rem] bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all shadow-xl shadow-black/20 shrink-0">
                                    {opt.icon}
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-xl font-bold text-white uppercase tracking-tight">{opt.title}</h3>
                                    <p className="text-gray-500 text-sm font-medium leading-relaxed max-w-md">{opt.desc}</p>
                                </div>
                            </div>
                            <Button variant="outline" className="h-12 px-8 rounded-xl text-[10px] hidden md:flex">Manage</Button>
                        </div>
                        <div className="px-10 pb-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {opt.items.map((item, idx) => (
                                <div key={idx} className="bg-white/[0.02] p-4 rounded-xl border border-white/5 flex items-center justify-between group/item hover:bg-white/5 transition-colors cursor-pointer">
                                    <span className="text-[10px] font-black text-gray-500 group-item-hover:text-white uppercase tracking-widest">{item}</span>
                                    <ChevronRight size={14} className="text-gray-700 group-item-hover:text-indigo-400" />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Storage & Advanced Info */}
            <section className="bg-[#161926] rounded-[2.5rem] border border-white/5 p-10 flex flex-col md:flex-row items-center gap-10">
                <div className="w-16 h-16 rounded-[1.5rem] bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0 animate-pulse">
                    <HardDrive size={28} />
                </div>
                <div className="flex-grow space-y-3">
                    <h4 className="text-lg font-bold uppercase tracking-tight">Enterprise Storage</h4>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500" style={{ width: '62%' }}></div>
                    </div>
                    <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest">62.4 GB of 100 GB used • 37.6 GB remaining</p>
                </div>
                <Button variant="secondary" className="h-14 px-10 rounded-2xl">Upgrade Plan</Button>
            </section>

            {/* Footer Actions */}
            <footer className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-8 text-[10px] font-black text-gray-600 uppercase tracking-widest">
                    <span>Academy ID: #8829-X</span>
                    <span>Server: AWS-US-EAST-1</span>
                </div>
                <div className="flex items-center gap-4">
                    <Button variant="ghost" className="text-red-400 hover:bg-red-500/10 hover:text-red-500 h-12 px-8 rounded-xl gap-2 font-black">
                        <LogOut size={16} /> Logout Account
                    </Button>
                </div>
            </footer>
        </div>
    );
}
