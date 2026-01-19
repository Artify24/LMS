
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  LayoutDashboard, BookOpen, Video, LineChart, MessageSquare,
  Search, Bell, LogOut, ChevronRight, Play, Calendar,
  MoreVertical, Plus, Send, Trophy, Menu, X, Clock, Settings,
  CheckCircle2, ArrowRight, Users, FileBox, Upload, Filter,
  ArrowUpRight, Target, Zap, ShieldCheck, Edit2, ShieldAlert
} from 'lucide-react';
import Button from '@/components/ui/Button';

export default function StudentLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/student' },
    { icon: <BookOpen size={20} />, label: 'My Courses', path: '/student/courses' },
    { icon: <Video size={20} />, label: 'Live Classes', path: '/student/live' },
    { icon: <LineChart size={20} />, label: 'Progress', path: '/student/progress' },
    { icon: <MessageSquare size={20} />, label: 'Messages', path: '/student/messages' },
    { icon: <Calendar size={20} />, label: 'Schedule', path: '/student/schedule' },
    { icon: <Settings size={20} />, label: 'Settings', path: '/student/settings' },
  ];

  const handleLogout = () => {
    router.push('/');
  };

  return (
    <div className="flex min-h-screen bg-[#0B0E14] text-white overflow-x-hidden">
      {/* Sidebar Overlay */}
      <div className={`fixed inset-0 bg-black/60 z-40 lg:hidden transition-opacity duration-300 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setSidebarOpen(false)} />

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 w-64 border-r border-white/5 bg-[#0F111A] flex flex-col z-50 transition-transform duration-300 transform lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-600/20">
              <span className="font-bold text-xl text-white">L</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-white">LMS Pro</span>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-gray-500"><X size={20} /></button>
        </div>
        <nav className="flex-grow px-4 space-y-1 overflow-y-auto custom-scrollbar">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.path}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${pathname === item.path
                  ? 'bg-indigo-600/10 text-indigo-400 border border-indigo-600/20 shadow-xl shadow-indigo-600/5'
                  : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'
                }`}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="p-4 mt-auto border-t border-white/5 bg-[#0D0F17]">
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 mb-4 border border-white/5">
            <img src="https://i.pravatar.cc/100?u=student" className="w-10 h-10 rounded-full ring-2 ring-indigo-500/20 shadow-lg shadow-indigo-500/10" alt="Student" />
            <div className="flex-grow overflow-hidden">
              <p className="text-sm font-bold text-white truncate">Alex Johnson</p>
              <p className="text-[10px] text-gray-500 truncate font-black uppercase tracking-widest">Premium Student</p>
            </div>
          </div>
          <button onClick={handleLogout} className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium text-gray-500 hover:text-red-400 hover:bg-red-400/5 transition-all">
            <LogOut size={20} /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow lg:ml-64 p-6 md:p-10 w-full">
        <header className="flex items-center justify-between gap-4 mb-10 lg:hidden">
          <button onClick={() => setSidebarOpen(true)} className="p-2.5 bg-white/5 rounded-xl border border-white/10 text-gray-400">
            <Menu size={20} />
          </button>
          <div className="flex items-center gap-3">
            <Bell size={20} className="text-gray-500" />
            <img src="https://i.pravatar.cc/100?u=student" className="w-8 h-8 rounded-full" />
          </div>
        </header>
        {children}
      </main>
    </div>
  );
}
