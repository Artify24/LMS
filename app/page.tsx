
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
  Github
} from 'lucide-react';
import Button from '@/components/ui/Button';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0B0E14] text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0B0E14]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="font-bold text-xl">L</span>
            </div>
            <span className="text-xl font-bold tracking-tight">LMS Pro</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Resources</a>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost">Log in</Button>
            </Link>
            <Link href="/signup">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
            New Version 3.0 is live
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6">
            Learning experiences <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              that transform instruction
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            The all-in-one LMS platform designed to scale training, engage employees, and track performance effortlessly with modern tools.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link href="/signup">
              <Button size="lg" className="w-full sm:w-auto">Start Free Trial</Button>
            </Link>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto gap-2">
              <Play size={18} fill="currentColor" />
              Watch Demo
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4">
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-10 h-10 rounded-full border-2 border-[#0B0E14]" />
              ))}
              <div className="w-10 h-10 rounded-full bg-gray-800 border-2 border-[#0B0E14] flex items-center justify-center text-xs font-medium">
                +2k
              </div>
            </div>
            <span className="text-sm text-gray-500">Trusted by 10,000+ teams</span>
          </div>
        </div>

        {/* Product Preview Image */}
        <div className="mt-20 max-w-6xl mx-auto relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#161926] shadow-2xl">
            <img
              src="https://picsum.photos/1200/800?grayscale"
              alt="Platform Dashboard"
              className="w-full h-auto object-cover opacity-80"
            />
            {/* Overlay indicators simulation */}
            <div className="absolute top-8 left-8 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
              <p className="text-xs text-indigo-400 font-bold mb-1">Students</p>
              <div className="flex items-end gap-1">
                <span className="text-2xl font-bold">45%</span>
                <span className="text-[10px] text-green-400 mb-1">↑ 12%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-20 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-sm font-medium text-gray-500 uppercase tracking-widest mb-12">Trusted by leading innovators</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {['Acme Corp', 'GlobalBank', 'InfiniteTech', 'EcoSystems', 'FastForward'].map(brand => (
              <span key={brand} className="text-2xl font-bold text-gray-400">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 tracking-tight">Platform for joyful inclusive learning</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Everything you need to manage learning at scale, engage your team, and measure real impact.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Monitor className="text-purple-400" />, title: 'Curriculum Builder', desc: 'Create rich, interactive courses easily with our intuitive drag-and-drop course creation tools.' },
              { icon: <Trophy className="text-green-400" />, title: 'Gamification', desc: 'Boost engagement with built-in leaderboards, badges, and certificates to reward progress.' },
              { icon: <BarChart3 className="text-orange-400" />, title: 'Advanced Analytics', desc: 'Track learner performance, identify skill gaps, and prove ROI with detailed reports.' },
              { icon: <Smartphone className="text-blue-400" />, title: 'Mobile Learning', desc: 'Give your workforce the flexibility to access training materials from any device, anywhere.' },
            ].map((f, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-all group">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" className="gap-2 group">
              Explore all features
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-indigo-600/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-2">Loved by HR & L&D Teams</h2>
              <p className="text-gray-400">See how companies are transforming their training culture.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Jenkins', role: 'HR Director, TechCorp', text: 'This LMS transformed our onboarding process from weeks to days. The analytics helped us identify exactly where new hires were getting stuck.' },
              { name: 'Michael Chen', role: 'L&D Manager, Innovate Inc', text: 'The gamification features are a game changer. Our completion rates skyrocketed by 40% in the first month alone.' },
              { name: 'Emma Roberts', role: 'Head of People, GrowthCo', text: 'Support is phenomenal. We migrated 500 courses from our old system seamlessly with their help. Highly recommended.' },
            ].map((t, i) => (
              <div key={i} className="p-8 rounded-2xl bg-[#1A1D2B] border border-white/5">
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map(s => <span key={s} className="text-orange-400">★</span>)}
                </div>
                <p className="text-lg text-gray-300 mb-8 italic">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={`https://i.pravatar.cc/100?u=${t.name}`} className="w-12 h-12 rounded-full" />
                  <div>
                    <h4 className="font-bold">{t.name}</h4>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Simple, transparent pricing</h2>
            <p className="text-gray-400">Choose the plan that's right for your team size.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic */}
            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 flex flex-col h-full">
              <h3 className="text-xl font-bold mb-2">Starter</h3>
              <p className="text-sm text-gray-500 mb-6">For small teams getting started.</p>
              <div className="mb-8">
                <span className="text-4xl font-bold">$49</span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {['Up to 50 users', 'Basic reporting', 'Email support'].map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm text-gray-400">
                    <Check size={16} className="text-indigo-500" /> {f}
                  </li>
                ))}
              </ul>
              <Button variant="secondary" fullWidth>Get Started</Button>
            </div>

            {/* Pro */}
            <div className="p-8 rounded-3xl bg-indigo-600/10 border-2 border-indigo-600/50 flex flex-col h-full relative overflow-hidden scale-105">
              <div className="absolute top-0 right-0 bg-indigo-600 text-white text-[10px] font-bold py-1 px-4 rounded-bl-xl uppercase tracking-widest">
                Most Popular
              </div>
              <h3 className="text-xl font-bold mb-2">Professional</h3>
              <p className="text-sm text-gray-500 mb-6">For growing companies.</p>
              <div className="mb-8">
                <span className="text-4xl font-bold">$149</span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {['Up to 200 users', 'Advanced analytics', 'Course authoring tool', 'Priority support'].map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm text-gray-400">
                    <Check size={16} className="text-indigo-500" /> {f}
                  </li>
                ))}
              </ul>
              <Button fullWidth>Start Free Trial</Button>
            </div>

            {/* Enterprise */}
            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 flex flex-col h-full">
              <h3 className="text-xl font-bold mb-2">Enterprise</h3>
              <p className="text-sm text-gray-500 mb-6">For large organizations.</p>
              <div className="mb-8">
                <span className="text-4xl font-bold">Custom</span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {['Unlimited users', 'Custom integrations', 'Dedicated success manager', 'SLA & Security'].map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm text-gray-400">
                    <Check size={16} className="text-indigo-500" /> {f}
                  </li>
                ))}
              </ul>
              <Button variant="secondary" fullWidth>Contact Sales</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto rounded-[3rem] bg-gradient-to-br from-indigo-900 to-indigo-600 p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white rounded-full blur-[120px]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 relative z-10">Ready to transform your learning culture?</h2>
          <p className="text-indigo-100 text-lg mb-12 max-w-2xl mx-auto relative z-10">Join thousands of forward-thinking companies using LMS Pro to upskill their workforce today.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Button variant="secondary" size="lg" className="bg-white text-indigo-900 hover:bg-white/90">Get Started Now</Button>
            <Button variant="outline" size="lg" className="border-indigo-400 text-white hover:bg-indigo-700/50">Request Demo</Button>
          </div>
          <p className="text-indigo-300 text-xs mt-8">No credit card required. Cancel anytime.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-20 pb-10 border-t border-white/5 bg-[#080B10]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="font-bold text-xl">L</span>
                </div>
                <span className="text-xl font-bold tracking-tight">LMS Pro</span>
              </div>
              <p className="text-gray-500 max-w-xs mb-8">Making professional education accessible, engaging, and measurable for modern teams.</p>
              <div className="flex gap-4">
                <Facebook size={20} className="text-gray-500 hover:text-white cursor-pointer" />
                <Twitter size={20} className="text-gray-500 hover:text-white cursor-pointer" />
                <Linkedin size={20} className="text-gray-500 hover:text-white cursor-pointer" />
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6">Product</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li className="hover:text-white transition-colors cursor-pointer">Features</li>
                <li className="hover:text-white transition-colors cursor-pointer">Pricing</li>
                <li className="hover:text-white transition-colors cursor-pointer">Integrations</li>
                <li className="hover:text-white transition-colors cursor-pointer">Updates</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li className="hover:text-white transition-colors cursor-pointer">About Us</li>
                <li className="hover:text-white transition-colors cursor-pointer">Careers</li>
                <li className="hover:text-white transition-colors cursor-pointer">Blog</li>
                <li className="hover:text-white transition-colors cursor-pointer">Contact</li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-4 lg:col-span-1">
              <h4 className="font-bold mb-6">Subscribe</h4>
              <p className="text-sm text-gray-500 mb-4">Latest news and articles sent to your inbox.</p>
              <div className="flex flex-col gap-2">
                <input type="email" placeholder="Enter your email" className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-indigo-500" />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>© 2024 LMS Pro Inc. All rights reserved.</p>
            <div className="flex gap-8">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
