
"use client";
import React, { useState, useEffect } from 'react';
import { BookOpen, Users, Trophy, Clock, Copy, Trash2, Plus, Search, MoreHorizontal } from 'lucide-react';
import Button from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { apiService, Course } from '@/lib/api';

export default function TeacherCoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const data = await apiService.getCourses();
      setCourses(data);
      setLoading(false);
    };
    fetchCourses();
  }, []);

  if (loading) return <div className="flex items-center justify-center h-64 font-black text-muted-foreground uppercase tracking-[0.3em] animate-pulse">Fetching Courses...</div>;

  return (
    <div className="max-w-7xl mx-auto space-y-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div>
          <h1 className="text-4xl font-black text-white mb-2 tracking-tight">Course Management</h1>
          <p className="text-muted-foreground text-base font-medium">Create and manage your educational content with ease.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden lg:block group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={18} />
            <input
              type="text"
              placeholder="Search courses..."
              className="bg-secondary border border-white/5 rounded-2xl h-14 pl-12 pr-6 text-sm w-72 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
            />
          </div>
          <Button size="lg" className="gap-2 h-14 px-8 shadow-2xl shadow-primary/20">
            <Plus size={20} /> New Course
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {courses.map((c, i) => (
          <Card key={i} className="p-6 flex flex-col sm:flex-row gap-8 group">
            <div className="w-full sm:w-56 aspect-[4/3] rounded-3xl bg-secondary relative overflow-hidden flex-shrink-0">
              <img src={c.thumbnail} className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" alt={c.title} />
              <div className="absolute top-4 left-4">
                <Badge variant={i % 2 === 0 ? "success" : "indigo"} className="shadow-2xl">
                  {i % 2 === 0 ? 'Published' : 'Draft'}
                </Badge>
              </div>
            </div>
            <div className="flex-grow flex flex-col justify-between py-2">
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="font-bold text-2xl text-white leading-tight group-hover:text-primary transition-colors">{c.title}</h3>
                  <button className="text-muted-foreground hover:text-white transition-colors p-1"><MoreHorizontal size={20} /></button>
                </div>
                <div className="flex items-center flex-wrap gap-5 text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-8">
                  <span className="flex items-center gap-1.5"><Users size={14} className="text-primary" /> {((i + 1) * 452)} Students</span>
                  <span className="flex items-center gap-1.5"><Trophy size={14} className="text-amber-500" /> 4.9</span>
                  <span className="flex items-center gap-1.5"><Clock size={14} className="text-primary" /> 12h 45m</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="secondary" className="h-12 flex-grow text-xs rounded-xl font-bold uppercase tracking-widest border-white/5 bg-white/5 hover:bg-white/10">Edit Content</Button>
                <Button variant="outline" className="h-12 flex-grow text-xs rounded-xl font-bold uppercase tracking-widest border-white/5 hover:bg-primary/10 hover:border-primary/20 hover:text-primary">Performance</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {courses.length === 0 && (
        <div className="flex flex-col items-center justify-center py-32 bg-secondary/20 rounded-[3rem] border-2 border-dashed border-white/5">
          <div className="w-20 h-20 rounded-3xl bg-secondary flex items-center justify-center mb-6 text-muted-foreground">
            <BookOpen size={40} />
          </div>
          <p className="text-lg font-bold text-white mb-2">No courses created yet</p>
          <p className="text-muted-foreground mb-10">Start sharing your knowledge with the world.</p>
          <Button size="lg" className="gap-2 px-10 rounded-2xl">
            <Plus size={20} /> Create Your First Course
          </Button>
        </div>
      )}
    </div>
  );
}
