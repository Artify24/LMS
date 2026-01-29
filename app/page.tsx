
"use client";
import React from 'react';
import Link from 'next/link';
import {
  Play,
  ArrowRight,
  Check,
  Monitor,
  Trophy,
  BarChart3,
  Smartphone,
  Facebook,
  Twitter,
  Linkedin,
  Github,
  Zap,
  ShieldCheck,
  Users
} from 'lucide-react';
import Button from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-header">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
              <span className="font-bold text-2xl text-white">L</span>
            </div>
            <span className="text-2xl font-black tracking-tight text-white">LMS Pro</span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            <a href="#features" className="text-sm font-bold text-muted-foreground hover:text-white transition-colors uppercase tracking-widest">Features</a>
            <a href="#pricing" className="text-sm font-bold text-muted-foreground hover:text-white transition-colors uppercase tracking-widest">Pricing</a>
            <a href="#testimonials" className="text-sm font-bold text-muted-foreground hover:text-white transition-colors uppercase tracking-widest">Reviews</a>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" size="sm">Log in</Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-44 pb-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-primary/5 blur-[120px] rounded-full -z-10" />

        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          <Badge variant="indigo" className="mb-8 px-4 py-1.5">
            <Zap size={12} className="mr-2 fill-current" /> New Version 3.0 is live
          </Badge>

          <h1 className="text-5xl md:text-8xl font-black leading-[1.05] mb-8 tracking-tighter">
            Learning experiences <br />
            <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-500 bg-clip-text text-transparent">
              that transform teams.
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            The all-in-one LMS platform designed to scale training, engage employees, and track performance effortlessly with modern tools.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Link href="/signup">
              <Button size="lg" className="w-full sm:w-auto h-16 px-10 rounded-2xl shadow-2xl shadow-primary/30">
                Start Free Trial <ArrowRight size={20} className="ml-2" />
              </Button>
            </Link>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto h-16 px-10 rounded-2xl gap-3">
              <Play size={20} fill="currentColor" />
              Watch Demo
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <img key={i} src={`https://i.pravatar.cc/100?u=user${i}`} className="w-12 h-12 rounded-full border-4 border-background" />
              ))}
              <div className="w-12 h-12 rounded-full bg-secondary border-4 border-background flex items-center justify-center text-xs font-black">
                +2k
              </div>
            </div>
            <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Trusted by 10,000+ teams</p>
          </div>
        </div>

        {/* Product Preview Image */}
        <div className="mt-24 max-w-6xl mx-auto relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-[2.5rem] blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
          <Card className="p-2 border-white/10 glass rounded-[2.5rem] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80"
              alt="Platform Dashboard"
              className="w-full h-auto object-cover rounded-[2rem] opacity-90 group-hover:opacity-100 transition-opacity"
            />

            {/* Floating UI Elements */}
            <div className="absolute top-12 left-12 p-6 glass rounded-2xl border-white/10 animate-slide-up shadow-2xl">
              <p className="text-[10px] text-primary font-black uppercase tracking-widest mb-2">Completion Rate</p>
              <div className="flex items-end gap-3">
                <span className="text-3xl font-black text-white">92.4%</span>
                <span className="text-xs text-emerald-400 font-bold mb-1 flex items-center">↑ 12%</span>
              </div>
            </div>

            <div className="absolute bottom-12 right-12 p-6 glass rounded-2xl border-white/10 animate-slide-up shadow-2xl delay-150">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2].map(i => <img key={i} src={`https://i.pravatar.cc/100?u=s${i}`} className="w-8 h-8 rounded-full border-2 border-white/10" />)}
                </div>
                <div>
                  <p className="text-[10px] text-white font-black">Alex Rivers</p>
                  <p className="text-[8px] text-muted-foreground uppercase">Started Course</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-24 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em] mb-16">Trusted by leading innovators</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            {['Acme Corp', 'GlobalBank', 'InfiniteTech', 'EcoSystems', 'FastForward'].map(brand => (
              <span key={brand} className="text-2xl font-black text-white tracking-tighter">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <Badge variant="purple" className="mb-6">Core Features</Badge>
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Platform for joyful inclusive learning</h2>
            <p className="text-xl text-muted-foreground font-medium">Everything you need to manage learning at scale, engage your team, and measure real impact.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Monitor, title: 'Curriculum Builder', desc: 'Create rich, interactive courses easily with our intuitive drag-and-drop course creation tools.', color: 'text-primary' },
              { icon: Trophy, title: 'Gamification', desc: 'Boost engagement with built-in leaderboards, badges, and certificates to reward progress.', color: 'text-emerald-400' },
              { icon: BarChart3, title: 'Advanced Analytics', desc: 'Track learner performance, identify skill gaps, and prove ROI with detailed reports.', color: 'text-orange-400' },
              { icon: Smartphone, title: 'Mobile Learning', desc: 'Give your workforce the flexibility to access training materials from any device, anywhere.', color: 'text-blue-400' },
            ].map((f, i) => (
              <Card key={i} className="p-8 group hover:bg-secondary/50 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                  <f.icon size={28} className={f.color} />
                </div>
                <h3 className="text-xl font-bold mb-4">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-medium">{f.desc}</p>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button variant="outline" size="lg" className="gap-3 group rounded-2xl">
              Explore all features
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center relative z-10">
          {[
            { label: 'Learners', value: '1M+' },
            { label: 'Courses', value: '50k+' },
            { label: 'Countries', value: '120+' },
            { label: 'Satisfaction', value: '99%' }
          ].map((stat, i) => (
            <div key={i} className="space-y-2">
              <p className="text-5xl md:text-7xl font-black text-white tracking-tighter">{stat.value}</p>
              <p className="text-xs font-black text-primary uppercase tracking-[0.2em]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-32 px-6 bg-primary/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <Badge variant="indigo" className="mb-6">Testimonials</Badge>
              <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">Loved by HR & L&D Teams</h2>
              <p className="text-xl text-muted-foreground font-medium">See how companies are transforming their training culture.</p>
            </div>
            <div className="flex gap-4">
              {/* Navigation Buttons would go here */}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Jenkins', role: 'HR Director, TechCorp', text: 'This LMS transformed our onboarding process from weeks to days. The analytics helped us identify exactly where new hires were getting stuck.' },
              { name: 'Michael Chen', role: 'L&D Manager, Innovate Inc', text: 'The gamification features are a game changer. Our completion rates skyrocketed by 40% in the first month alone.' },
              { name: 'Emma Roberts', role: 'Head of People, GrowthCo', text: 'Support is phenomenal. We migrated 500 courses from our old system seamlessly with their help. Highly recommended.' },
            ].map((t, i) => (
              <Card key={i} className="p-8 relative">
                <div className="flex gap-1 mb-6 text-amber-500">
                  {[1, 2, 3, 4, 5].map(s => <span key={s}>★</span>)}
                </div>
                <p className="text-lg text-white/80 mb-10 font-medium italic leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <img src={`https://i.pravatar.cc/100?u=${t.name}`} className="w-12 h-12 rounded-full ring-2 ring-primary/20" />
                  <div>
                    <h4 className="font-bold text-white">{t.name}</h4>
                    <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto rounded-[4rem] bg-gradient-to-br from-primary to-indigo-800 p-16 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-primary/30">
          <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-[150px]"></div>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 relative z-10 text-white tracking-tighter">Ready to transform your learning culture?</h2>
          <p className="text-primary-foreground/80 text-xl mb-12 max-w-2xl mx-auto relative z-10 font-medium">Join thousands of forward-thinking companies using LMS Pro to upskill their workforce today.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
            <Link href="/signup" className="w-full sm:w-auto">
              <Button size="lg" className="bg-white !text-primary hover:bg-white/90 h-16 px-10 rounded-2xl w-[170px]">Get Started</Button>
            </Link>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 h-16 px-10 rounded-2xl w-full">Request Demo</Button>
          </div>
          <p className="text-white/40 text-[10px] uppercase font-black tracking-[0.2em] mt-12">No credit card required • Cancel anytime</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-32 pb-16 border-t border-white/5 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                  <span className="font-bold text-2xl text-white">L</span>
                </div>
                <span className="text-2xl font-black tracking-tight text-white">LMS Pro</span>
              </div>
              <p className="text-muted-foreground max-w-xs mb-10 font-medium leading-relaxed">Making professional education accessible, engaging, and measurable for modern teams.</p>
              <div className="flex gap-6">
                <Facebook size={20} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
                <Twitter size={20} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
                <Linkedin size={20} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
                <Github size={20} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-8 uppercase tracking-widest text-xs">Product</h4>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                <li className="hover:text-primary transition-colors cursor-pointer">Features</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Pricing</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Integrations</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Updates</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-8 uppercase tracking-widest text-xs">Company</h4>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                <li className="hover:text-primary transition-colors cursor-pointer">About Us</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Careers</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Blog</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-8 uppercase tracking-widest text-xs">Legal</h4>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                <li className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Terms of Service</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Cookie Policy</li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">
            <p>© 2024 LMS Pro Inc. All rights reserved.</p>
            <div className="flex gap-10">
              <span className="cursor-pointer hover:text-white transition-colors">Security</span>
              <span className="cursor-pointer hover:text-white transition-colors">Status</span>
              <span className="cursor-pointer hover:text-white transition-colors">API Docs</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
