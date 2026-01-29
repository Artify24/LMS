
"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  ArrowLeft, CheckCircle2, PlayCircle, Lock, FileText, Download,
  ExternalLink, ChevronDown, ChevronRight, Menu, X, Play, Clock
} from 'lucide-react';
import Button from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { apiService, Course } from '@/lib/api';

export default function CoursePlayer() {
  const params = useParams();
  const courseId = params.courseId as string;
  const [course, setCourse] = useState<Course | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      const data = await apiService.getCourseById(courseId);
      setCourse(data || null);
      setLoading(false);
    };
    fetchCourse();
  }, [courseId]);

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

  if (loading) return <div className="min-h-screen bg-background flex items-center justify-center font-black text-white uppercase tracking-[0.3em] animate-pulse">Loading Experience...</div>;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col overflow-hidden">
      {/* Top Navbar */}
      <nav className="h-20 glass-header flex items-center justify-between px-6 shrink-0 z-50">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
              <span className="font-bold text-2xl text-white">L</span>
            </div>
          </Link>
          <div className="h-8 w-px bg-white/10 hidden md:block"></div>
          <div>
            <h1 className="text-sm font-black uppercase tracking-tight text-white mb-1 hidden md:block line-clamp-1">{course?.title || 'Course Player'}</h1>
            <div className="flex items-center gap-4">
              <div className="w-32 h-1.5 bg-white/5 rounded-full overflow-hidden hidden sm:block">
                <div className="h-full bg-primary" style={{ width: `${course?.progress || 0}%` }}></div>
              </div>
              <span className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">{course?.progress || 0}% Complete</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/student" className="hidden sm:block">
            <Button variant="ghost" size="sm" className="gap-2 h-11 px-6 text-[10px] font-black uppercase tracking-widest transition-all hover:bg-white/5">
              <ArrowLeft size={16} /> Back to Dashboard
            </Button>
          </Link>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden p-2.5 bg-secondary rounded-xl border border-white/5 text-muted-foreground">
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <div className="w-10 h-10 rounded-full border border-white/10 p-0.5 overflow-hidden ring-2 ring-primary/10">
            <img src="https://i.pravatar.cc/100?u=student" className="w-full h-full rounded-full object-cover" alt="Student" />
          </div>
        </div>
      </nav>

      <div className="flex flex-grow overflow-hidden relative">
        {/* Main Player Area */}
        <div className="flex-grow flex flex-col overflow-y-auto custom-scrollbar bg-[radial-gradient(circle_at_center,_var(--card)_0%,_var(--background)_100%)]">
          <div className="aspect-video bg-black relative flex items-center justify-center m-4 md:m-8 rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-white/10 group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end p-8">
              <div className="w-full flex items-center gap-6">
                <div className="h-1 flex-grow bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[30%]"></div>
                </div>
                <span className="text-xs font-black text-white uppercase tracking-widest">12:45 / 35:20</span>
              </div>
            </div>

            <div className="absolute inset-0 bg-secondary/20 flex items-center justify-center">
              <div className="w-full h-full flex items-center justify-center relative">
                <img src={course?.thumbnail || "https://picsum.photos/1920/1080?grayscale"} className="absolute inset-0 w-full h-full object-cover opacity-30" alt="Thumbnail" />
                <div className="w-24 h-24 rounded-full bg-primary shadow-2xl shadow-primary/40 flex items-center justify-center text-white cursor-pointer hover:scale-110 active:scale-95 transition-all duration-300 z-20 border-8 border-background/50 backdrop-blur-sm">
                  <Play size={40} fill="white" className="ml-1.5" />
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 md:px-12 py-8">
            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-8 mb-12">
              <div className="max-w-3xl">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <Badge variant="purple">Module 3</Badge>
                  <span className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">Lesson 12 of 48</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight tracking-tight">Typography and Layout Systems</h2>
                <div className="flex items-center gap-3 text-primary">
                  <div className="p-3 bg-primary/10 rounded-2xl shadow-lg shadow-primary/5"><FileText size={24} /></div>
                  <h3 className="text-xl font-extrabold uppercase tracking-tight">Lesson Notes</h3>
                </div>
              </div>
              <Button size="lg" className="h-16 px-12 shadow-2xl shadow-primary/20">Complete & Next <ChevronRight size={20} className="ml-2" /></Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pb-20">
              <div className="lg:col-span-2 space-y-8 text-muted-foreground text-lg font-medium leading-relaxed">
                <p>In this lesson, we dive deep into the foundations of typography in digital interfaces. We will cover how to establish visual rhythm, consistent spacing scales, and how fonts interact with grid systems.</p>
                <div className="space-y-4">
                  {[
                    'Hierarchical structures and visual weight for readability',
                    'Scale and rhythm in layout design using 8pt grid systems',
                    'Responsive typography techniques for multi-device support',
                    'Choosing the right font pairings for modern SaaS applications'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all group">
                      <div className="mt-1 flex-shrink-0"><CheckCircle2 size={20} className="text-emerald-500 opacity-60 group-hover:opacity-100 transition-opacity" /></div>
                      <span className="text-base text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <Card className="p-8">
                  <h3 className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-8">Resources & Downloads</h3>
                  <div className="space-y-4">
                    {[
                      { name: 'Lesson_Slides_v1.pdf', size: '2.4 MB', type: 'pdf', icon: <FileText className="text-rose-500" /> },
                      { name: 'Figma_Template_System', size: 'External Link', type: 'link', icon: <ExternalLink className="text-primary" /> },
                    ].map((res, i) => (
                      <div key={i} className="p-4 rounded-2xl bg-secondary border border-white/5 flex items-center gap-4 group cursor-pointer hover:bg-white/10 transition-all">
                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">{res.icon}</div>
                        <div className="flex-grow min-w-0">
                          <h4 className="text-sm font-bold text-white truncate">{res.name}</h4>
                          <p className="text-[10px] text-muted-foreground font-black tracking-widest mt-0.5 uppercase">{res.size}</p>
                        </div>
                        <Download size={18} className="text-muted-foreground group-hover:text-white transition-colors" />
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Course Content */}
        <div className={`fixed inset-y-0 right-0 w-80 sm:w-96 glass-sidebar z-40 lg:static transition-shadow duration-300 ${sidebarOpen ? 'shadow-[-20px_0_50px_rgba(0,0,0,0.5)]' : ''} lg:block ${sidebarOpen ? 'block' : 'hidden'}`}>
          <div className="p-8 h-full flex flex-col">
            <div className="mb-10 pt-4 px-2">
              <h3 className="text-2xl font-black mb-1 text-white tracking-tight">Course Content</h3>
              <p className="text-muted-foreground text-xs font-black uppercase tracking-widest">24 lessons remaining</p>
            </div>

            <div className="flex-grow overflow-y-auto custom-scrollbar pr-2 space-y-10">
              {sections.map((section, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between mb-5 px-2">
                    <h4 className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">{section.title}</h4>
                    <ChevronDown size={14} className="text-white/20" />
                  </div>
                  <div className="space-y-3">
                    {section.items.map((item, i) => (
                      <div key={i} className={`p-4 rounded-2xl flex items-center gap-4 transition-all group ${item.status === 'active' ? 'bg-primary/10 border border-primary/20 shadow-xl shadow-primary/5' :
                        item.status === 'completed' ? 'hover:bg-white/[0.04] cursor-pointer' :
                          'opacity-30 pointer-events-none'
                        }`}>
                        {item.status === 'completed' ? <CheckCircle2 size={24} className="text-emerald-500" /> :
                          item.status === 'active' ? <PlayCircle size={24} className="text-primary animate-pulse" /> :
                            <Lock size={24} className="text-muted-foreground" />}
                        <div className="flex-grow min-w-0">
                          <h5 className={`text-sm font-bold truncate ${item.status === 'active' ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'}`}>{item.title}</h5>
                          <p className={`text-[10px] font-black uppercase tracking-widest mt-1 ${item.status === 'active' ? 'text-primary' : 'text-muted-foreground'}`}>{item.duration}</p>
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
