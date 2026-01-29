
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  LayoutDashboard, BookOpen, BarChart3, Video, FileBox,
  Megaphone, Users, Settings, LogOut, X, Menu, Bell, Search, Plus
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
    <div className="flex min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 z-40 lg:hidden transition-opacity duration-300 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 w-64 border-r border-white/5 bg-card flex flex-col z-50 transition-transform duration-300 transform lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
              <span className="font-bold text-xl text-white">L</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-white">LMS Pro</span>
          </Link>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-muted-foreground hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        <nav className="flex-grow px-4 mt-6 space-y-1 overflow-y-auto custom-scrollbar">
          <div className="px-4 mb-2">
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Instructor Portal</p>
          </div>
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.path}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all group ${pathname === item.path
                  ? 'bg-primary/10 text-primary border border-primary/20 shadow-lg shadow-primary/5'
                  : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                }`}
            >
              <span className={`transition-transform duration-200 ${pathname === item.path ? 'scale-110' : 'group-hover:scale-110'}`}>
                {item.icon}
              </span>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-4 mt-auto space-y-4">
          <Button variant="primary" fullWidth className="gap-2 rounded-2xl py-6 shadow-xl shadow-primary/20">
            <Plus size={20} /> Create New Course
          </Button>

          <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/5">
            <img src="https://i.pravatar.cc/150?u=teacher" className="w-10 h-10 rounded-full ring-2 ring-primary/20" alt="Teacher" />
            <div className="flex-grow overflow-hidden">
              <p className="text-sm font-bold text-white truncate">Dr. Sarah Chen</p>
              <p className="text-[10px] text-muted-foreground truncate uppercase font-bold tracking-wider">Senior Instructor</p>
            </div>
          </div>
          <button onClick={() => router.push('/')} className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-destructive hover:bg-destructive/5 transition-all">
            <LogOut size={20} /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow lg:ml-64 min-h-screen flex flex-col">
        {/* Top Header */}
        <header className="h-20 glass-header px-6 md:px-10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 bg-secondary rounded-xl text-muted-foreground">
              <Menu size={20} />
            </button>
            <div className="relative hidden md:block group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={18} />
              <input
                type="text"
                placeholder="Search students, courses, data..."
                className="bg-secondary border border-white/5 rounded-xl pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 w-64 lg:w-96 transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2.5 bg-secondary rounded-xl text-muted-foreground hover:text-white transition-colors relative">
              <Bell size={20} />
              <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-primary border-2 border-background rounded-full"></span>
            </button>
            <div className="h-10 w-[1px] bg-white/5 mx-2"></div>
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-white group-hover:text-primary transition-colors">Dr. Sarah Chen</p>
                <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-tighter">Verified Instructor</p>
              </div>
              <img src="https://i.pravatar.cc/150?u=teacher" className="w-10 h-10 rounded-full border border-white/10 group-hover:border-primary transition-all" alt="User avatar" />
            </div>
          </div>
        </header>

        <section className="p-6 md:p-10 flex-grow animate-fade-in">
          {children}
        </section>
      </main>
    </div>
  );
}
