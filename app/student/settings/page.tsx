
"use client";
import React from 'react';
import { User, Lock, Bell, Eye, LogOut, ChevronRight, Camera } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function StudentSettings() {
    const sections = [
        {
            id: 'profile',
            title: 'Profile Settings',
            desc: 'Manage your public informations and avatar.',
            icon: <User size={24} />,
            fields: [
                { label: 'Full Name', value: 'Alex Thompson' },
                { label: 'Email Address', value: 'alex.t@example.com' },
                { label: 'Learning Goal', value: 'UI/UX Design Master' },
            ]
        },
        {
            id: 'security',
            title: 'Security & Privacy',
            desc: 'Update your password and manage active sessions.',
            icon: <Lock size={24} />,
            fields: [
                { label: 'Password', value: '••••••••••••' },
                { label: 'Two-Factor Auth', value: 'Enabled' },
            ]
        },
        {
            id: 'notifications',
            title: 'Notifications',
            desc: 'Choose how you want to be notified.',
            icon: <Bell size={24} />,
            fields: [
                { label: 'Push Notifications', value: 'On' },
                { label: 'Email Alerts', value: 'Off' },
            ]
        }
    ];

    return (
        <div className="max-w-4xl mx-auto space-y-12">
            <header>
                <h1 className="text-3xl font-black text-white mb-1 tracking-tight">Settings</h1>
                <p className="text-gray-500 text-sm">Personalize your learning experience.</p>
            </header>

            {/* Avatar Section */}
            <section className="bg-[#161926] rounded-[2.5rem] p-10 border border-white/5 flex flex-col md:flex-row items-center gap-10">
                <div className="relative group">
                    <div className="w-32 h-32 rounded-[2.5rem] bg-indigo-600/20 border-2 border-dashed border-indigo-600/40 flex items-center justify-center overflow-hidden">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" className="w-full h-full object-cover" alt="Avatar" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                            <Camera size={24} className="text-white" />
                        </div>
                    </div>
                </div>
                <div className="text-center md:text-left space-y-4 flex-grow">
                    <h2 className="text-2xl font-black text-white">Alex Thompson</h2>
                    <p className="text-gray-500 text-sm font-medium">Student • Member since October 2024</p>
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
                        <Button size="sm" className="rounded-xl">Change Photo</Button>
                        <Button size="sm" variant="secondary" className="rounded-xl">Remove</Button>
                    </div>
                </div>
            </section>

            {/* Settings Grid */}
            <div className="space-y-8">
                {sections.map(section => (
                    <div key={section.id} className="bg-[#161926] rounded-[2.5rem] border border-white/5 overflow-hidden">
                        <div className="p-10 border-b border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div className="flex gap-6">
                                <div className="w-14 h-14 rounded-2xl bg-indigo-600/10 flex items-center justify-center text-indigo-400 shrink-0">
                                    {section.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1 uppercase tracking-tight">{section.title}</h3>
                                    <p className="text-gray-500 text-xs font-medium">{section.desc}</p>
                                </div>
                            </div>
                            <Button variant="outline" size="sm" className="h-11 rounded-xl px-6">Edit Section</Button>
                        </div>
                        <div className="p-10 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                            {section.fields.map((field, i) => (
                                <div key={i} className="space-y-2">
                                    <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest">{field.label}</p>
                                    <p className="text-sm font-bold text-white/80">{field.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Danger Zone */}
            <section className="bg-red-500/5 rounded-[2.5rem] p-10 border border-red-500/10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="space-y-1 text-center md:text-left">
                    <h3 className="text-xl font-bold text-red-500 uppercase tracking-tight">Danger Zone</h3>
                    <p className="text-gray-500 text-xs font-medium">Permanently delete your account and all learning data.</p>
                </div>
                <Button variant="danger" className="h-14 px-10 rounded-2xl">Delete Account</Button>
            </section>

            <footer className="pt-8 flex items-center justify-between">
                <p className="text-xs text-gray-600 font-bold uppercase tracking-widest">v2.4.0 Stable Build</p>
                <Button variant="ghost" className="gap-2 text-red-400 hover:bg-red-500/10 hover:text-red-500">
                    <LogOut size={16} /> Sign Out
                </Button>
            </footer>
        </div>
    );
}
