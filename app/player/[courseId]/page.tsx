
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  ArrowLeft, CheckCircle2, PlayCircle, Lock, FileText, Download,
  ExternalLink, ChevronDown, ChevronRight, Menu, X, Play
} from 'lucide-react';
import Button from '@/components/ui/Button';

export default function CoursePlayer() {
  const params = useParams();
  const courseId = params.courseId;
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sections = [
    {
      title: '1. FOUNDATIONS',
      items: [
        { title: 'Introduction to UI', duration: '12:00', status: 'completed' },
        { title: 'Design Tools Overview', duration: '08:45', status: 'completed' },
      ]
    },
    {
      title: '2. VISUAL PRINCIPLES',
      items: [
        { title: 'Color Theory', duration: '25:10', status: 'completed' },
      ]
    },
    {
      title: '3. TYPOGRAPHY',
      items: [
        { title: 'Typography Systems', duration: 'Playing Now', status: 'active' },
        { title: 'Layout Grids', duration: '18:20', status: 'locked' },
      ]
    },
    {
      title: '4. INTERACTION',
      items: [
        { title: 'Micro-interactions', duration: 'Locked', status: 'locked' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B0E14] text-white flex flex-col overflow-hidden">
      {/* Top Navbar */}
      <nav className="h-20 border-b border-white/5 flex items-center justify-between px-6 bg-[#0F111A] shrink-0 z-50 shadow-2xl">
        <div className="flex items-center gap-6">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-600/20">
            <span className="font-bold text-2xl text-white">L</span>
          </div>
          <div className="h-8 w-px bg-white/10 hidden md:block"></div>
          <div>
            <h1 className="text-sm font-black uppercase tracking-tight text-white mb-1.5 hidden md:block">Mastering Advanced UI Design</h1>
            <div className="flex items-center gap-4">
              <div className="w-32 h-1.5 bg-white/5 rounded-full overflow-hidden hidden sm:block">
                <div className="h-full bg-indigo-500 w-[45%] rounded-full shadow-[0_0_8px_rgba(99,102,241,0.5)]"></div>
              </div>
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">45% Complete</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/student" className="hidden sm:block">
            <Button variant="secondary" size="sm" className="gap-2 h-11 px-6 border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:text-white">
              <ArrowLeft size={16} /> Back to Dashboard
            </Button>
          </Link>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden p-2.5 bg-white/5 rounded-xl border border-white/10 text-gray-400">
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <img src="https://i.pravatar.cc/100?u=student" className="w-10 h-10 rounded-full border border-white/10 ring-2 ring-indigo-500/10" alt="Student" />
        </div>
      </nav>

      <div className="flex flex-grow overflow-hidden relative">
        {/* Main Player Area */}
        <div className="flex-grow flex flex-col overflow-y-auto custom-scrollbar">
          <div className="aspect-video bg-black relative flex items-center justify-center m-4 md:m-10 rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.6)] ring-1 ring-white/10 group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end p-8">
              <div className="w-full flex items-center gap-6">
                <div className="h-1 flex-grow bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-500 w-[30%]"></div>
                </div>
                <span className="text-xs font-bold text-white uppercase tracking-widest">12:45 / 35:20</span>
              </div>
            </div>

            <div className="absolute inset-0 bg-[#2A2D3E] flex items-center justify-center">
              <div className="w-full h-full bg-[#1F2231] flex items-center justify-center relative">
                <img src="https://picsum.photos/1920/1080?grayscale" className="absolute inset-0 w-full h-full object-cover opacity-20" alt="Thumbnail" />
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-indigo-600 shadow-2xl shadow-indigo-600/40 flex items-center justify-center text-white group cursor-pointer hover:scale-110 active:scale-95 transition-all duration-300 z-20 border-8 border-[#1F2231]">
                  <Play size={48} fill="white" className="ml-1.5" />
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 md:px-16 py-8 md:py-12">
            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-8 mb-16">
              <div className="max-w-3xl">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="text-[10px] font-black px-3 py-1.5 rounded-xl bg-indigo-600/10 text-indigo-400 uppercase tracking-widest border border-indigo-600/10">Module 3</span>
                  <span className="text-[10px] text-gray-500 font-extrabold uppercase tracking-widest">Lesson 12 of 48</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black mb-10 leading-tight">Typography and Layout Systems</h2>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-indigo-600/10 rounded-2xl text-indigo-400 shadow-lg shadow-indigo-600/5"><FileText size={24} /></div>
                  <h3 className="text-xl font-bold uppercase tracking-tight">Lesson Notes</h3>
                </div>
              </div>
              <Button size="lg" className="h-16 px-12 rounded-[1.5rem] shadow-[0_20px_40px_rgba(99,102,241,0.3)] font-black uppercase text-xs tracking-widest hover:-translate-y-1 transition-all">Complete & Next <ChevronRight size={20} className="ml-2" /></Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 pb-20">
              <div className="lg:col-span-2 space-y-8 text-gray-400 leading-[1.8] text-lg font-medium">
                <p>In this lesson, we dive deep into the foundations of typography in digital interfaces. We will cover how to establish visual rhythm, consistent spacing scales, and how fonts interact with grid systems.</p>
                <ul className="space-y-4">
                  {[
                    'Hierarchical structures and visual weight for readability',
                    'Scale and rhythm in layout design using 8pt grid systems',
                    'Responsive typography techniques for multi-device support',
                    'Choosing the right font pairings for modern SaaS applications'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all group">
                      <div className="mt-1 flex-shrink-0"><CheckCircle2 size={20} className="text-emerald-500 opacity-60 group-hover:opacity-100 transition-opacity" /></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p>Remember that typography accounts for 90% of web design. Mastering these basics will allow you to build interfaces that aren't just pretty, but functional and accessible to everyone.</p>
              </div>

              <div className="bg-[#161926] p-10 rounded-[2.5rem] border border-white/5 h-fit shadow-2xl shadow-black/20">
                <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-10 text-center">Resources & Downloads</h3>
                <div className="space-y-4">
                  <div className="p-6 rounded-[2rem] bg-white/[0.03] border border-white/5 flex items-center gap-5 group cursor-pointer hover:bg-white/[0.08] transition-all hover:border-indigo-600/20">
                    <div className="w-16 h-16 rounded-[1.25rem] bg-red-500/10 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform"><FileText size={28} /></div>
                    <div className="flex-grow overflow-hidden">
                      <h4 className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors truncate">Lesson_Slides_v1.pdf</h4>
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">2.4 MB</p>
                    </div>
                    <Download size={20} className="text-gray-500 group-hover:text-white transition-colors" />
                  </div>
                  <div className="p-6 rounded-[2rem] bg-white/[0.03] border border-white/5 flex items-center gap-5 group cursor-pointer hover:bg-white/[0.08] transition-all hover:border-indigo-600/20">
                    <div className="w-16 h-16 rounded-[1.25rem] bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform"><ExternalLink size={28} /></div>
                    <div className="flex-grow overflow-hidden">
                      <h4 className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors truncate">Figma_Template_System</h4>
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">External Link</p>
                    </div>
                    <ExternalLink size={20} className="text-gray-500 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Course Content */}
        <div className={`fixed inset-y-0 right-0 w-80 sm:w-96 border-l border-white/5 bg-[#0F111A] z-40 lg:static transition-transform duration-300 transform lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-10 h-full flex flex-col">
            <div className="mb-12">
              <h3 className="text-2xl font-black mb-2 text-white">Course Content</h3>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">24 lessons remaining</p>
            </div>

            <div className="flex-grow overflow-y-auto custom-scrollbar pr-2 space-y-12">
              {sections.map((section, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between mb-6 group cursor-pointer">
                    <h4 className="text-[10px] font-black text-gray-500 group-hover:text-gray-400 transition-colors uppercase tracking-[0.15em]">{section.title}</h4>
                    {idx > 2 ? <Lock size={14} className="text-gray-700" /> : <ChevronDown size={14} className="text-gray-700" />}
                  </div>
                  <div className="space-y-4">
                    {section.items.map((item, i) => (
                      <div key={i} className={`p-5 rounded-[1.5rem] flex items-center gap-5 transition-all group ${item.status === 'active' ? 'bg-indigo-600/10 border border-indigo-600/20 shadow-xl shadow-indigo-600/5' :
                          item.status === 'completed' ? 'bg-white/[0.02] border border-transparent hover:bg-white/5 cursor-pointer' :
                            'opacity-30 pointer-events-none grayscale'
                        }`}>
                        {item.status === 'completed' ? <CheckCircle2 size={24} className="text-emerald-500" /> :
                          item.status === 'active' ? <PlayCircle size={24} className="text-indigo-400 animate-pulse" /> :
                            <Lock size={24} className="text-gray-500" />}
                        <div className="flex-grow min-w-0">
                          <h5 className={`text-sm font-bold truncate ${item.status === 'active' ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'}`}>{item.title}</h5>
                          <p className={`text-[10px] font-black uppercase tracking-widest mt-1.5 ${item.status === 'active' ? 'text-indigo-400' : 'text-gray-600'}`}>{item.duration}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
