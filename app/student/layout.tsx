
"use client";
import React, { useState, useEffect } from 'react';
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
import { mockUser } from '@/lib/api';

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
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Navigation</p>
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
          <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-primary/10 relative overflow-hidden group">
            <div className="absolute -right-2 -top-2 w-16 h-16 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500" />
            <p className="text-xs font-bold text-primary mb-1 relative z-10">Pro Plan</p>
            <p className="text-[10px] text-muted-foreground mb-3 relative z-10">Access all premium courses</p>
            <Button variant="premium" size="sm" fullWidth className="text-[10px] h-8 relative z-10">Upgrade</Button>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/5">
            <img src={mockUser.avatar} className="w-10 h-10 rounded-full ring-2 ring-primary/20" alt="Student" />
            <div className="flex-grow overflow-hidden">
              <p className="text-sm font-bold text-white truncate">{mockUser.name}</p>
              <p className="text-[10px] text-muted-foreground truncate uppercase font-bold tracking-wider">{mockUser.level}</p>
            </div>
          </div>
          <button onClick={handleLogout} className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-destructive hover:bg-destructive/5 transition-all">
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
                placeholder="Search courses, lessons..."
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
                <p className="text-sm font-bold text-white group-hover:text-primary transition-colors">{mockUser.name}</p>
                <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-tighter">Level {mockUser.level.split(' ')[0]}</p>
              </div>
              <img src={mockUser.avatar} className="w-10 h-10 rounded-full border border-white/10 group-hover:border-primary transition-all" alt="User avatar" />
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
