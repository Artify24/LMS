
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { 
  LayoutDashboard, BookOpen, BarChart3, Video, FileBox, 
  Megaphone, Users, Settings, LogOut, X, Menu, Bell
} from 'lucide-react';
import Button from '@/components/ui/Button';

export default function TeacherLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/teacher' },
    { icon: <BookOpen size={20} />, label: 'My Courses', path: '/teacher/courses' },
    { icon: <BarChart3 size={20} />, label: 'Analytics', path: '/teacher/analytics' },
    { icon: <Video size={20} />, label: 'Live Classes', path: '/teacher/live' },
    { icon: <FileBox size={20} />, label: 'Content Library', path: '/teacher/library' },
    { icon: <Megaphone size={20} />, label: 'Announcements', path: '/teacher/announcements' },
    { icon: <Users size={20} />, label: 'Students', path: '/teacher/students' },
    { icon: <Settings size={20} />, label: 'Settings', path: '/teacher/settings' },
  ];

  return (
    <div className="flex min-h-screen bg-[#0B0E14] text-white">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 w-64 border-r border-white/5 bg-[#0F111A] flex flex-col z-50 transition-transform duration-300 transform lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-600/20">
              <span className="font-bold text-xl text-white">L</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-white">LMS Pro</span>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-gray-500"><X size={20}/></button>
        </div>
        <nav className="flex-grow px-4 space-y-1 overflow-y-auto custom-scrollbar">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                pathname === item.path 
                  ? 'bg-indigo-600/10 text-indigo-400 border border-indigo-600/20' 
                  : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'
              }`}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="p-4 mt-auto border-t border-white/5 bg-[#0D0F17]">
          <button onClick={() => router.push('/')} className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium text-gray-500 hover:text-red-400 hover:bg-red-400/5 transition-all">
            <LogOut size={20} /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className={`flex-grow lg:ml-64 p-6 md:p-10 w-full`}>
        <header className="flex items-center justify-between mb-10 lg:hidden">
          <button onClick={() => setSidebarOpen(true)} className="p-2.5 bg-white/5 rounded-xl border border-white/10 text-gray-400">
            <Menu size={20}/>
          </button>
          <div className="flex items-center gap-3">
             <Bell size={20} className="text-gray-500" />
             <img src="https://i.pravatar.cc/100?u=teacher" className="w-8 h-8 rounded-full" />
          </div>
        </header>
        {children}
      </div>
    </div>
  );
}
