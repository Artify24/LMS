
"use client";
import React from 'react';
import Link from 'next/link';
import { Target, Zap, Trophy, Upload, MessageSquare, Clock, ArrowRight, Play, BookOpen, Star } from 'lucide-react';
import Button from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { mockCourses, mockUser } from '@/lib/api';

export default function StudentDashboard() {
  const activeCourse = mockCourses[0];
  const assignedCourses = mockCourses.slice(1, 4);

  return (
    <div className="max-w-7xl mx-auto space-y-10">
      {/* Welcome Header */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-white mb-1 tracking-tight">Welcome back, {mockUser.name.split(' ')[0]}! 👋</h1>
          <p className="text-muted-foreground text-sm font-medium">You've completed 75% of your weekly goal. Keep it up!</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            {[1, 2, 3].map(i => (
              <img key={i} src={`https://i.pravatar.cc/100?u=friend${i}`} className="w-8 h-8 rounded-full border-2 border-background" alt="Friend" />
            ))}
          </div>
          <p className="text-xs text-muted-foreground"><span className="text-primary font-bold">12 friends</span> are online</p>
        </div>
      </header>

      {/* Hero / Active Course */}
      <div className="relative rounded-[2.5rem] bg-indigo-600 overflow-hidden group shadow-2xl shadow-indigo-600/20">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-indigo-600/80 to-transparent z-10" />
        <img
          src={activeCourse.thumbnail}
          className="absolute inset-0 w-full h-full object-cover object-center opacity-40 group-hover:scale-105 transition-transform duration-700"
          alt="Course Hero"
        />

        <div className="relative z-20 p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl text-center lg:text-left">
            <Badge variant="indigo" className="bg-white/10 text-white border-white/20 mb-6">Last Active Course</Badge>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-[1.1] tracking-tight">{activeCourse.title}</h2>

            <div className="flex flex-col sm:flex-row items-center gap-8 mt-10">
              <Link href={`/player/${activeCourse.id}`}>
                <Button size="lg" variant="secondary" className="bg-white !text-indigo-600 hover:bg-white/90 rounded-2xl group/btn">
                  Resume Learning
                  <Play size={18} className="ml-2 fill-current" />
                </Button>
              </Link>
              <div className="flex flex-col gap-2 w-full sm:w-48">
                <div className="flex justify-between text-xs font-bold text-white/80">
                  <span>Current Progress</span>
                  <span>{activeCourse.progress}%</span>
                </div>
                <div className="h-2 bg-black/20 rounded-full overflow-hidden">
                  <div className="h-full bg-white rounded-full transition-all duration-1000" style={{ width: `${activeCourse.progress}%` }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:grid grid-cols-2 gap-4 shrink-0">
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-center">
              <p className="text-2xl font-black text-white">12</p>
              <p className="text-[10px] text-white/60 font-bold uppercase tracking-widest">Lessons Left</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-center">
              <p className="text-2xl font-black text-white">45m</p>
              <p className="text-[10px] text-white/60 font-bold uppercase tracking-widest">Est. Time</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-black tracking-tight flex items-center gap-3">
              <BookOpen className="text-primary" />
              Your Courses
            </h3>
            <Link href="/student/courses" className="text-sm font-bold text-primary hover:underline flex items-center gap-1">
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {assignedCourses.map((course) => (
              <Card key={course.id} className="p-4 group">
                <div className="aspect-video relative rounded-xl overflow-hidden mb-4">
                  <img src={course.thumbnail} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={course.title} />
                  <div className="absolute top-2 right-2">
                    <Badge variant="purple">{course.category}</Badge>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-white group-hover:text-primary transition-colors line-clamp-1">{course.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">By {course.instructor}</p>
                  </div>

                  <div className="flex items-center justify-between text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                    <span className="flex items-center gap-1"><Clock size={12} /> {course.duration}</span>
                    <span className="flex items-center gap-1"><Star size={12} className="text-amber-500 fill-amber-500" /> {course.rating}</span>
                  </div>

                  <div className="space-y-2 pt-2">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="text-primary">{course.progress}%</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-primary transition-all duration-700" style={{ width: `${course.progress}%` }}></div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <Card className="bg-gradient-to-br from-card to-secondary">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Zap size={20} className="text-amber-500" />
                Learning Blast
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500"><Target size={20} /></div>
                <div><p className="text-xl font-black text-white">12h 45m</p><p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Time Spent Today</p></div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500"><Zap size={20} /></div>
                <div><p className="text-xl font-black text-white">85%</p><p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Avg Quiz Score</p></div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-500"><Trophy size={20} /></div>
                <div><p className="text-xl font-black text-white">2,450</p><p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Total Points</p></div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-primary/5">
            <h4 className="font-bold text-white mb-2">Need help?</h4>
            <p className="text-xs text-muted-foreground mb-4">Our mentors are online and ready to assist you with your courses.</p>
            <Button variant="outline" size="sm" fullWidth className="gap-2">
              <MessageSquare size={14} /> Open Support
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
