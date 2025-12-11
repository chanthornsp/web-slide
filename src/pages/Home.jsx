import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Code2, Layout, Table, FileInput, 
  Palette, Monitor, Sliders, ShoppingBag, Smartphone, 
  Package, Wind, Terminal, Atom,
  ChevronRight, Map, Star, Award, Zap, Github
} from 'lucide-react';

import { roadmap } from '../data/roadmap';

export default function Home() {
  const [activePhase, setActivePhase] = useState(0);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30 pb-20 overflow-x-hidden">
        {/* Background Grid & Effects */}
        <div className="fixed inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute left-0 top-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]"></div>
            <div className="absolute right-0 bottom-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]"></div>
        </div>

        {/* Hero Section */}
        <div className="relative pt-20 pb-16 text-center z-10 px-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-700 text-cyan-400 text-sm font-medium mb-6 animate-fade-in-up">
                <Map className="w-4 h-4" />
                <span>Learning Path 2025</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400 animate-slide-down">
                Frontend Developer<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Mastery Roadmap</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in">
                Follow this step-by-step guide to master web development. From HTML basics to modern React applications.
            </p>
            <div className="flex justify-center gap-4 animate-fade-in">
                <button onClick={() => document.getElementById('phase-0').scrollIntoView({ behavior: 'smooth' })} className="px-8 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-lg text-white font-bold transition-all shadow-lg shadow-cyan-500/20 hover:scale-105 flex items-center gap-2">
                    Start Journey <ChevronRight className="w-4 h-4" />
                </button>
            </div>
        </div>

        {/* Roadmap Timeline */}
        <div className="relative max-w-5xl mx-auto px-4 z-10">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-4 bottom-0 w-1 bg-slate-800 transform -translate-x-1/2 hidden md:block"></div>
            
            {roadmap.map((phase, index) => {
                const isLeft = index % 2 === 0;
                return (
                    <div key={phase.id} id={`phase-${index}`} className={`relative mb-24 md:flex items-start ${isLeft ? 'flex-row-reverse' : ''} group`}>
                        
                        {/* Timeline Node (Center) */}
                        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 top-0 flex-col items-center">
                            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${phase.color} flex items-center justify-center shadow-lg shadow-black/50 z-20 border-4 border-slate-950`}>
                                <phase.icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="h-full w-1 bg-gradient-to-b from-transparent via-slate-700 to-transparent my-2"></div>
                        </div>

                        {/* Content Card (Left or Right) */}
                        <div className={`md:w-1/2 ${isLeft ? 'md:pr-16' : 'md:pl-16'} relative`}>
                            {/* Phase Header */}
                            <div className={`mb-8 ${isLeft ? 'md:text-right' : 'md:text-left'} text-left md:items-${isLeft ? 'end' : 'start'} flex flex-col`}>
                                <div className={`inline-block px-3 py-1 rounded text-xs font-bold tracking-wider uppercase mb-2 bg-gradient-to-r ${phase.color} text-white`}>
                                    {phase.title}
                                </div>
                                <h2 className="text-3xl font-bold text-white mb-3">{phase.subtitle}</h2>
                                <p className="text-slate-400 leading-relaxed text-sm md:text-base max-w-sm">
                                    {phase.description}
                                </p>
                            </div>

                            {/* Slides Grid for this Phase */}
                            <div className="grid grid-cols-1 gap-4">
                                {phase.items.map((item, itemIdx) => (
                                    <Link 
                                        to={item.path} 
                                        key={itemIdx}
                                        className="block group/card relative overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 rounded-xl transition-all duration-300 group-hover/card:border-slate-500 group-hover/card:shadow-xl group-hover/card:shadow-cyan-500/10"></div>
                                        
                                        {/* Hover Gradient Overlay */}
                                        <div className={`absolute inset-0 opacity-0 group-hover/card:opacity-10 bg-gradient-to-r ${phase.color} transition-opacity duration-300`}></div>

                                        <div className="relative p-5 flex items-center gap-4">
                                            <div className={`w-12 h-12 rounded-lg bg-slate-950 flex items-center justify-center border border-slate-800 group-hover/card:scale-110 transition-transform duration-300`}>
                                                <item.icon className={`w-6 h-6 text-slate-400 group-hover/card:text-white transition-colors`} />
                                            </div>
                                            
                                            <div className="flex-1">
                                                <div className="flex items-center justify-between mb-1">
                                                    <h3 className="text-lg font-bold text-white group-hover/card:text-cyan-300 transition-colors">{item.title}</h3>
                                                    <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-slate-950 text-slate-500 border border-slate-800`}>
                                                        {item.difficulty}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-slate-500 group-hover/card:text-slate-400 transition-colors">{item.desc}</p>
                                            </div>

                                            <ChevronRight className="w-5 h-5 text-slate-600 group-hover/card:text-white group-hover/card:translate-x-1 transition-all" />
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Empty side for balance on desktop */}
                        <div className="hidden md:block md:w-1/2"></div>
                    </div>
                );
            })}
        </div>

        {/* Completion Star at the bottom */}
        <div className="text-center pb-12 mt-20">
            <div className="inline-block p-4 rounded-full bg-slate-900 border border-slate-800 mb-4 animate-bounce">
                <Star className="w-8 h-8 text-yellow-500 fill-yellow-500" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Keep Learning!</h2>
            <p className="text-slate-400">The web is constantly evolving. Stay curious.</p>
        </div>

        {/* Footer / Credits */}
        <footer className="border-t border-slate-800 pt-12 pb-8 mt-12 bg-slate-950/50 backdrop-blur-sm">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <div className="flex flex-col items-center gap-4">
                     <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-500 p-[2px]">
                        <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
                             {/* Placeholder for avatar if available, or just initials */}
                             <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">HC</span>
                        </div>
                     </div>
                     
                     <div className="space-y-1">
                        <h3 className="text-xl font-bold text-white">HOEUN Chanthorn</h3>
                        <p className="text-cyan-400 font-medium text-sm">Full Stack Developer</p>
                     </div>

                     <p className="text-slate-500 text-sm max-w-md mx-auto">
                        Passionate about building beautiful, functional, and scalable web applications. Sharing knowledge to help others grow.
                     </p>

                     <a 
                        href="https://github.com/chanthornsp" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-2 bg-slate-800 hover:bg-slate-700 rounded-full text-slate-300 hover:text-white transition-all group mt-2 border border-slate-700 hover:border-slate-500"
                     >
                        <Github className="w-5 h-5" />
                        <span>github.com/chanthornsp</span>
                     </a>
                </div>
                
                <div className="mt-12 text-slate-600 text-xs">
                    &copy; {new Date().getFullYear()} Web Slide. Handcrafted with React & Tailwind.
                </div>
            </div>
        </footer>
    </div>
  );
}
