
"use client";
import React from 'react';
import { Search, MoreVertical, Send } from 'lucide-react';

export default function StudentMessages() {
    return (
        <div className="max-w-7xl mx-auto">
            <header className="mb-10">
                <h1 className="text-3xl font-black text-white mb-1 tracking-tight">Messages</h1>
                <p className="text-gray-500 text-sm">Connect with your instructors and fellow students.</p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-[#161926] rounded-[2.5rem] border border-white/5 overflow-hidden min-h-[600px] shadow-2xl">
                <div className="border-r border-white/5 p-6 flex flex-col">
                    <div className="relative mb-6">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                        <input
                            type="text"
                            placeholder="Search chats..."
                            className="w-full bg-black/20 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-xs focus:outline-none focus:border-indigo-500"
                        />
                    </div>
                    <div className="space-y-2 overflow-y-auto custom-scrollbar pr-2">
                        {[
                            { name: 'Prof. Jenkins', lastMsg: 'Your assignment looks great...', time: '12m ago', active: true, online: true },
                            { name: 'Study Group: UI/UX', lastMsg: 'Alex: Did you see the new...', time: '2h ago', active: false, online: false },
                            { name: 'Maria Garcia', lastMsg: 'Thanks for the feedback!', time: '1d ago', active: false, online: true },
                        ].map((chat, i) => (
                            <div key={i} className={`p-4 rounded-2xl flex items-center gap-4 cursor-pointer transition-all ${chat.active ? 'bg-indigo-600/10 border border-indigo-600/20' : 'hover:bg-white/5'}`}>
                                <div className="relative">
                                    <img src={`https://i.pravatar.cc/100?u=${chat.name}`} className="w-10 h-10 rounded-full" alt={chat.name} />
                                    {chat.online && <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-[#161926] rounded-full"></div>}
                                </div>
                                <div className="flex-grow overflow-hidden">
                                    <div className="flex justify-between items-center mb-1">
                                        <p className="text-sm font-bold text-white truncate">{chat.name}</p>
                                        <span className="text-[8px] text-gray-500 font-black uppercase tracking-widest">{chat.time}</span>
                                    </div>
                                    <p className="text-[10px] text-gray-500 truncate">{chat.lastMsg}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="lg:col-span-2 flex flex-col h-full bg-black/10">
                    <div className="p-6 border-b border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <img src="https://i.pravatar.cc/100?u=teacher" className="w-12 h-12 rounded-full ring-2 ring-indigo-500/20" alt="Prof" />
                            <div>
                                <h4 className="font-bold text-white">Prof. Jenkins</h4>
                                <p className="text-[10px] text-emerald-400 font-black uppercase tracking-widest">Online</p>
                            </div>
                        </div>
                        <button className="p-2 text-gray-500 hover:text-white transition-colors"><MoreVertical size={20} /></button>
                    </div>
                    <div className="flex-grow p-6 overflow-y-auto custom-scrollbar space-y-6">
                        <div className="flex justify-center">
                            <span className="px-4 py-1 rounded-full bg-white/5 text-[8px] font-black text-gray-500 uppercase tracking-widest">Today</span>
                        </div>
                        <div className="flex gap-4 max-w-[80%]">
                            <img src="https://i.pravatar.cc/100?u=teacher" className="w-8 h-8 rounded-full shrink-0" alt="Prof" />
                            <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none border border-white/5">
                                <p className="text-sm text-gray-300">Hi Alex! I've reviewed your latest project submission. Great job on the visual hierarchy! I have a few suggestions for the mobile responsiveness though. Would you like to hop on a quick call?</p>
                                <span className="text-[8px] text-gray-500 font-black uppercase tracking-widest mt-2 block">10:45 AM</span>
                            </div>
                        </div>
                        <div className="flex gap-4 max-w-[80%] ml-auto flex-row-reverse">
                            <div className="bg-indigo-600 p-4 rounded-2xl rounded-tr-none shadow-lg shadow-indigo-600/20">
                                <p className="text-sm text-white">That sounds great, Professor! I'm free at 2 PM today if that works for you?</p>
                                <span className="text-[8px] text-indigo-200 font-black uppercase tracking-widest mt-2 block">10:52 AM</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 border-t border-white/5">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Type your message..."
                                className="w-full bg-black/20 border border-white/10 rounded-2xl py-4 pl-6 pr-14 text-sm focus:outline-none focus:border-indigo-500"
                            />
                            <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/20">
                                <Send size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
