
"use client";
import React from 'react';
import {
  Users, BookOpen, BarChart3, TrendingUp, Clock,
  ArrowUpRight, MoreVertical, Plus, MessageSquare, Star, Video
} from 'lucide-react';
import Button from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export default function TeacherDashboard() {
  const stats = [
    { label: 'Total Students', value: '1,284', grow: '+12%', icon: <Users className="text-blue-500" /> },
    { label: 'Active Courses', value: '12', grow: '+2', icon: <BookOpen className="text-purple-500" /> },
    { label: 'Total Revenue', value: '$12,450', grow: '+18%', icon: <TrendingUp className="text-emerald-500" /> },
    { label: 'Avg. Rating', value: '4.9', grow: '+0.1', icon: <Star className="text-amber-500" /> },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-10">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-white mb-1 tracking-tight">Instructor Dashboard</h1>
          <p className="text-muted-foreground text-sm font-medium">Monitoring your performance and student engagement.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="gap-2">Download Report</Button>
          <Button variant="primary" size="sm" className="gap-2"><Plus size={18} /> New Course</Button>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <Card key={i} className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                {stat.icon}
              </div>
              <Badge variant="success" className="text-[10px]">{stat.grow}</Badge>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">{stat.label}</p>
              <h3 className="text-3xl font-black text-white tracking-tight">{stat.value}</h3>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          <Card className="p-0 overflow-hidden">
            <CardHeader className="p-6 border-b border-white/5 flex flex-row items-center justify-between">
              <CardTitle>Recent Student Activity</CardTitle>
              <button className="text-muted-foreground hover:text-white transition-colors"><MoreVertical size={20} /></button>
            </CardHeader>
            <CardContent className="divide-y divide-white/5">
              {[
                { name: 'Alice Cooper', action: 'enrolled in', course: 'Advanced UI/UX', time: '2 mins ago', avatar: 'https://i.pravatar.cc/100?u=alice' },
                { name: 'John Doe', action: 'completed', course: 'React Fundamentals', time: '15 mins ago', avatar: 'https://i.pravatar.cc/100?u=john' },
                { name: 'Sarah Wilson', action: 'asked a question in', course: 'Data Science Basics', time: '1 hour ago', avatar: 'https://i.pravatar.cc/100?u=sarah' },
                { name: 'Mike Ross', action: 'submitted assignment for', course: 'Web Dev 101', time: '3 hours ago', avatar: 'https://i.pravatar.cc/100?u=mike' },
              ].map((activity, i) => (activity &&
                <div key={i} className="p-6 flex items-center justify-between group hover:bg-white/[0.02] transition-colors">
                  <div className="flex items-center gap-4">
                    <img src={activity.avatar} className="w-10 h-10 rounded-full" alt={activity.name} />
                    <div>
                      <p className="text-sm font-bold text-white">
                        {activity.name} <span className="font-normal text-muted-foreground">{activity.action}</span> <span className="text-primary font-bold">{activity.course}</span>
                      </p>
                      <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-widest mt-1">{activity.time}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">Contact</Button>
                </div>
              ))}
            </CardContent>
            <div className="p-4 bg-white/5 text-center">
              <button className="text-sm font-bold text-primary hover:underline">View All Activity</button>
            </div>
          </Card>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Instructor Insights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                <p className="text-xs font-bold text-primary mb-1 uppercase tracking-widest flex items-center gap-1.5"><Video size={12} /> Live Session Tip</p>
                <p className="text-sm text-white font-medium mb-3">Interactive quizzes during live classes increase retention by up to 40%.</p>
                <button className="text-xs font-bold text-primary hover:underline">Learn more</button>
              </div>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                  <p className="text-xs text-muted-foreground">New feature: Video compression is now 40% faster for all uploads.</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                  <p className="text-xs text-muted-foreground">Updated community guidelines for instructor responses.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white border-none shadow-xl shadow-indigo-500/20">
            <h4 className="text-xl font-black mb-2">Teacher of the Month!</h4>
            <p className="text-sm text-white/80 mb-6">Congratulations! Your student engagement is in the top 1% this month.</p>
            <div className="flex -space-x-3 mb-6">
              {[1, 2, 3, 4, 5].map(i => (
                <img key={i} src={`https://i.pravatar.cc/100?u=st${i}`} className="w-8 h-8 rounded-full border-2 border-indigo-600" alt="Student" />
              ))}
            </div>
            <Button variant="secondary" fullWidth className="bg-white/20 border-white/30 hover:bg-white/30 backdrop-blur-md">Claim Reward</Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
