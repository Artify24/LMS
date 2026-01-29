
"use client";
import React, { useState, useEffect } from 'react';
import { Play, Search, Filter, Clock, Star, BookOpen } from 'lucide-react';
import Button from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { apiService, Course } from '@/lib/api';
import Link from 'next/link';

export default function StudentCourses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchCourses = async () => {
      const data = await apiService.getCourses();
      setCourses(data);
      setLoading(false);
    };
    fetchCourses();
  }, []);

  const filteredCourses = filter === 'all'
    ? courses
    : courses.filter(c => filter === 'completed' ? c.progress === 100 : c.progress < 100);

  return (
    <div className="max-w-7xl mx-auto space-y-10">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-white mb-1 tracking-tight">My Learning Journey</h1>
          <p className="text-muted-foreground text-sm font-medium">You have {courses.length} courses in progress.</p>
        </div>

        <div className="flex items-center gap-2 p-1 bg-secondary rounded-xl border border-white/5">
          {['all', 'ongoing', 'completed'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${filter === tab
                  ? 'bg-primary text-white shadow-lg shadow-primary/20'
                  : 'text-muted-foreground hover:text-white'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </header>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-80 bg-white/5 rounded-[2.5rem] animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((c) => (
            <Card key={c.id} className="p-0 overflow-hidden group border-white/5 hover:border-primary/20 transition-all duration-500">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={c.thumbnail}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt={c.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link href={`/player/${c.id}`} className="w-full">
                    <Button fullWidth variant="primary" className="gap-2">
                      <Play size={16} fill="white" /> Resume Learning
                    </Button>
                  </Link>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge variant="purple">{c.category}</Badge>
                </div>
                {c.progress === 100 && (
                  <div className="absolute top-4 right-4">
                    <Badge variant="success">Completed</Badge>
                  </div>
                )}
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h4 className="text-lg font-bold text-white leading-tight group-hover:text-primary transition-colors line-clamp-2">{c.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">Instructor: {c.instructor}</p>
                </div>

                <div className="flex items-center justify-between text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                  <span className="flex items-center gap-1"><Clock size={12} /> {c.duration}</span>
                  <span className="flex items-center gap-1"><BookOpen size={12} /> 24 Lessons</span>
                </div>

                <div className="space-y-2 pt-2">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-primary">
                    <span>Course Progress</span>
                    <span>{c.progress}%</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-1000 ease-out"
                      style={{ width: `${c.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {filteredCourses.length === 0 && !loading && (
        <div className="text-center py-20 bg-white/[0.02] rounded-[3rem] border border-dashed border-white/10">
          <BookOpen size={48} className="mx-auto text-muted-foreground mb-4 opacity-20" />
          <h3 className="text-xl font-bold text-white mb-2">No courses found</h3>
          <p className="text-muted-foreground">Try adjusting your filters or browse the catalog.</p>
          <Button variant="outline" className="mt-6" onClick={() => setFilter('all')}>Show All Courses</Button>
        </div>
      )}
    </div>
  );
}
