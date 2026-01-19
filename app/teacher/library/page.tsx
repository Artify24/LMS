
"use client";
import React from 'react';
import { Folder, File, Video, Music, Image as ImageIcon, Search, Plus, MoreVertical, Download, Trash2, ExternalLink } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function TeacherLibrary() {
    const folders = [
        { name: 'UI Masterclass Assets', items: 24, size: '1.2 GB' },
        { name: 'Recorded Workshops', items: 12, size: '4.5 GB' },
        { name: 'Templates & Logos', items: 45, size: '250 MB' },
        { name: 'Student Submissions', items: 156, size: '840 MB' },
    ];

    const files = [
        { name: 'syllabus_v2.pdf', type: 'PDF', size: '2.4 MB', date: 'Oct 15, 2024' },
        { name: 'hero_section_tutorial.mp4', type: 'Video', size: '145 MB', date: 'Oct 12, 2024' },
        { name: 'design_tokens.json', type: 'JSON', size: '12 KB', date: 'Oct 10, 2024' },
        { name: 'marketing_assets.zip', type: 'ZIP', size: '42 MB', date: 'Oct 08, 2024' },
    ];

    const getFileIcon = (type: string) => {
        switch (type) {
            case 'Video': return <Video size={18} />;
            case 'Image': return <ImageIcon size={18} />;
            default: return <File size={18} />;
        }
    };

    return (
        <div className="max-w-7xl mx-auto space-y-12">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-black text-white mb-1 tracking-tight">Content Library</h1>
                    <p className="text-gray-500 text-sm font-medium">Manage and organize your course assets and resources.</p>
                </div>
                <div className="flex items-center gap-4">
                    <Button variant="secondary" className="gap-2 h-12 rounded-xl text-[10px]"><Folder size={14} /> New Folder</Button>
                    <Button className="gap-2 h-12 rounded-xl text-[10px]"><Plus size={14} /> Upload Files</Button>
                </div>
            </header>

            {/* Folders Grid */}
            <section className="space-y-8">
                <h2 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Quick Folders</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {folders.map((f, i) => (
                        <div key={i} className="bg-[#161926] p-8 rounded-[2rem] border border-white/5 group hover:border-indigo-500/30 transition-all cursor-pointer">
                            <div className="flex items-start justify-between mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                                    <Folder size={28} />
                                </div>
                                <button className="text-gray-600 hover:text-white transition-colors"><MoreVertical size={18} /></button>
                            </div>
                            <h3 className="font-bold text-white mb-2 uppercase tracking-tight">{f.name}</h3>
                            <div className="flex items-center justify-between text-[10px] font-black text-gray-600 uppercase tracking-widest">
                                <span>{f.items} Items</span>
                                <span>{f.size}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Recent Files Table */}
            <section className="bg-[#161926] rounded-[2.5rem] border border-white/5 overflow-hidden">
                <div className="p-10 border-b border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <h3 className="text-xl font-bold uppercase tracking-tight">Recent Uploads</h3>
                    <div className="flex items-center gap-4 bg-white/5 px-4 h-12 rounded-2xl border border-white/5 flex-grow max-w-md">
                        <Search size={18} className="text-gray-500" />
                        <input type="text" placeholder="Search files..." className="bg-transparent border-none outline-none text-sm text-white w-full h-full font-medium" />
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-white/[0.02]">
                                <th className="px-10 py-6 text-[10px] font-black text-gray-600 uppercase tracking-widest">File Name</th>
                                <th className="px-10 py-6 text-[10px] font-black text-gray-600 uppercase tracking-widest">Type</th>
                                <th className="px-10 py-6 text-[10px] font-black text-gray-600 uppercase tracking-widest">Size</th>
                                <th className="px-10 py-6 text-[10px] font-black text-gray-600 uppercase tracking-widest">Date Uploaded</th>
                                <th className="px-10 py-6 text-[10px] font-black text-gray-600 uppercase tracking-widest"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {files.map((f, i) => (
                                <tr key={i} className="hover:bg-white/[0.01] transition-colors group">
                                    <td className="px-10 py-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400">
                                                {getFileIcon(f.type)}
                                            </div>
                                            <span className="text-sm font-bold text-white uppercase tracking-tight">{f.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-10 py-6">
                                        <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{f.type}</span>
                                    </td>
                                    <td className="px-10 py-6 text-[10px] font-black text-gray-500 uppercase tracking-widest">{f.size}</td>
                                    <td className="px-10 py-6 text-[10px] font-black text-gray-500 uppercase tracking-widest">{f.date}</td>
                                    <td className="px-10 py-6">
                                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Button variant="ghost" size="icon" className="h-10 w-10"><Download size={16} /></Button>
                                            <Button variant="ghost" size="icon" className="h-10 w-10"><ExternalLink size={16} /></Button>
                                            <Button variant="ghost" size="icon" className="h-10 w-10 text-red-500 hover:bg-red-500/10"><Trash2 size={16} /></Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Storage Indicator */}
            <section className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-10 flex flex-col md:flex-row items-center gap-10">
                <div className="flex-grow space-y-4">
                    <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold uppercase tracking-tight">Cloud Storage Usage</h4>
                        <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">48.5 GB of 100 GB used</span>
                    </div>
                    <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-500" style={{ width: '48.5%' }}></div>
                    </div>
                </div>
                <Button variant="secondary" className="h-14 px-10 rounded-2xl whitespace-nowrap">Upgrade Storage</Button>
            </section>
        </div>
    );
}
