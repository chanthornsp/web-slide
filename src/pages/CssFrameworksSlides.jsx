import { useState } from 'react';
import SlideContainer from '../components/SlideContainer';
import Slide from '../components/Slide';
import CodeCard, { Tag, Attr, Val, Comment } from '../components/CodeCard';
import { Package, Grid, Zap, Smartphone, Settings, Users, Wind, Layers, Box, Layout, RotateCcw, ThumbsUp, ThumbsDown, Scale } from 'lucide-react';

export default function CssFrameworksSlides() {
  return (
    <SlideContainer totalSlides={7} accentColor="cyan">
      {(currentSlide, goToSlide) => (
        <>
          {/* Background Blobs */}
          <div className="fixed inset-0 pointer-events-none">
            <div className="blob bg-cyan-600 w-96 h-96 rounded-full top-0 left-0 opacity-20 mix-blend-screen animate-move"></div>
            <div className="blob bg-sky-600 w-96 h-96 rounded-full bottom-0 right-0 opacity-20 mix-blend-screen" style={{animationDelay: '2s'}}></div>
            <div className="blob bg-blue-500 w-80 h-80 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20 mix-blend-screen"></div>
          </div>

          {/* SLIDE 0: Title */}
          <Slide isActive={currentSlide === 0}>
            <div className="text-center p-8 max-w-4xl z-10">
              <div className="inline-block p-6 rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 mb-6 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <Package className="w-24 h-24 text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
                CSS Frameworks
              </h1>
              <p className="text-2xl text-slate-300 font-light max-w-2xl mx-auto">
                Accelerate your development 🚀
              </p>
            </div>
          </Slide>

          {/* SLIDE 1: What are they? */}
          <Slide isActive={currentSlide === 1}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-cyan-400">What are they? 🤔</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className="bg-slate-800 p-8 rounded-2xl border-l-8 border-cyan-500">
                      <p className="text-xl text-slate-300 leading-relaxed">
                          CSS frameworks are <strong className="text-cyan-300">pre-written libraries</strong> of styles and components. They provide standardized tools to help you create responsive, visually appealing websites without starting from scratch.
                      </p>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                      <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center gap-4">
                          <div className="bg-green-500/20 p-2 rounded-full"><Zap className="w-6 h-6 text-green-400" /></div>
                          <span className="text-lg text-white">Faster Development</span>
                      </div>
                      <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center gap-4">
                          <div className="bg-purple-500/20 p-2 rounded-full"><Smartphone className="w-6 h-6 text-purple-400" /></div>
                          <span className="text-lg text-white">Responsive by Default</span>
                      </div>
                      <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center gap-4">
                          <div className="bg-orange-500/20 p-2 rounded-full"><Layout className="w-6 h-6 text-orange-400" /></div>
                          <span className="text-lg text-white">Consistent Design</span>
                      </div>
                  </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 2: Pros & Cons (NEW) */}
          <Slide isActive={currentSlide === 2}>
             <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-emerald-400">To Use or Not to Use? ⚖️</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                   {/* Pros */}
                   <div className="bg-slate-800 p-6 rounded-2xl border-t-4 border-green-500">
                       <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3"><ThumbsUp className="text-green-400"/> Pros</h3>
                       <ul className="space-y-4">
                           <li className="flex gap-3">
                               <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                               <span className="text-slate-300"><strong>Speed:</strong> Build complex UIs in minutes.</span>
                           </li>
                           <li className="flex gap-3">
                               <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                               <span className="text-slate-300"><strong>Consistency:</strong> Everything looks uniform.</span>
                           </li>
                           <li className="flex gap-3">
                               <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                               <span className="text-slate-300"><strong>Cross-Browser:</strong> Works on all modern browsers.</span>
                           </li>
                       </ul>
                   </div>

                   {/* Cons */}
                   <div className="bg-slate-800 p-6 rounded-2xl border-t-4 border-red-500">
                       <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3"><ThumbsDown className="text-red-400"/> Cons</h3>
                       <ul className="space-y-4">
                           <li className="flex gap-3">
                               <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                               <span className="text-slate-300"><strong>Generic Look:</strong> Sites can look "Bootstrap-y".</span>
                           </li>
                           <li className="flex gap-3">
                               <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                               <span className="text-slate-300"><strong>File Size:</strong> Loads unused styles (bloat).</span>
                           </li>
                           <li className="flex gap-3">
                               <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                               <span className="text-slate-300"><strong>Overriding:</strong> Fighting the framework's defaults.</span>
                           </li>
                       </ul>
                   </div>
              </div>
             </div>
          </Slide>

          {/* SLIDE 3: Key Features */}
          <Slide isActive={currentSlide === 3}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-blue-400">Key Features 🔑</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                      { icon: Grid, title: 'Grid Systems', desc: 'Layout tools for rows & columns', color: 'text-blue-400' },
                      { icon: Package, title: 'Components', desc: 'Prebuilt buttons, navbars, cards', color: 'text-cyan-400' },
                      { icon: Settings, title: 'Utilities', desc: 'Quick styling classes (margin, padding)', color: 'text-teal-400' },
                      { icon: Users, title: 'Community', desc: 'Plugins, themes, and support', color: 'text-indigo-400' },
                  ].map((feature, i) => (
                      <div key={i} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-slate-500 transition-colors">
                          <feature.icon className={`w-12 h-12 mb-4 ${feature.color}`} />
                          <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                          <p className="text-sm text-slate-400">{feature.desc}</p>
                      </div>
                  ))}
              </div>
            </div>
          </Slide>

          {/* SLIDE 4: Comparisons (NEW) */}
          <Slide isActive={currentSlide === 4}>
             <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-pink-400">Components vs Utility 🥊</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Component Based */}
                  <div className="bg-[#7952b3]/20 p-6 rounded-2xl border border-[#7952b3]/50">
                      <div className="flex items-center gap-3 mb-4">
                          <Box className="w-8 h-8 text-[#7952b3]" />
                          <h3 className="text-2xl font-bold text-white">Component-Based</h3>
                      </div>
                      <p className="text-slate-300 mb-4 text-sm">
                          <strong>Ex: Bootstrap, Foundation.</strong> You use high-level classes that do many things at once.
                      </p>
                      <CodeCard className="text-xs">
                          <Tag>&lt;div</Tag> <Attr>class</Attr>=<Val>"card"</Val><Tag>&gt;</Tag>{'\n'}
                          {'  '}<Tag>&lt;div</Tag> <Attr>class</Attr>=<Val>"card-body"</Val><Tag>&gt;</Tag>...<Tag>&lt;/div&gt;</Tag>{'\n'}
                          <Tag>&lt;/div&gt;</Tag>
                      </CodeCard>
                      <ul className="mt-4 text-xs text-slate-400 list-disc pl-4 space-y-1">
                          <li>Easy to read HTML</li>
                          <li>Harder to customize</li>
                      </ul>
                  </div>

                  {/* Utility First */}
                  <div className="bg-[#06b6d4]/20 p-6 rounded-2xl border border-[#06b6d4]/50">
                      <div className="flex items-center gap-3 mb-4">
                          <Wind className="w-8 h-8 text-[#06b6d4]" />
                          <h3 className="text-2xl font-bold text-white">Utility-First</h3>
                      </div>
                      <p className="text-slate-300 mb-4 text-sm">
                          <strong>Ex: Tailwind CSS.</strong> You combine small, single-purpose classes to build elements.
                      </p>
                      <CodeCard className="text-xs">
                          <Tag>&lt;div</Tag> <Attr>class</Attr>=<Val>"p-6 bg-white rounded-xl shadow-lg"</Val><Tag>&gt;</Tag>{'\n'}
                          {'  '}...{'\n'}
                          <Tag>&lt;/div&gt;</Tag>
                      </CodeCard>
                      <ul className="mt-4 text-xs text-slate-400 list-disc pl-4 space-y-1">
                          <li>Infinite customization</li>
                          <li>"Messy" HTML classes</li>
                      </ul>
                  </div>
              </div>
             </div>
          </Slide>

          {/* SLIDE 5: Popular Choices */}
          <Slide isActive={currentSlide === 5}>
            <div className="max-w-6xl w-full p-8 z-10 text-center">
              <h2 className="text-5xl font-bold mb-12 text-center text-indigo-400">Popular Choices 🏆</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {/* Bootstrap */}
                  <div className="bg-[#7952b3] p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-transform">
                      <div className="flex justify-center mb-6">
                          <Box className="w-16 h-16 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4">Bootstrap</h3>
                      <p className="text-white/90 mb-6">The classic component-based framework. Great for getting a site up quickly with pre-styled elements.</p>
                      <CodeCard className="text-left text-xs bg-black/30 border-none">
                          <Tag>&lt;button</Tag> <Attr>class</Attr>=<Val>"btn btn-primary"</Val><Tag>&gt;</Tag>{'\n'}
                          {'  '}Click Me{'\n'}
                          <Tag>&lt;/button&gt;</Tag>
                      </CodeCard>
                  </div>

                  {/* Tailwind */}
                  <div className="bg-[#06b6d4] p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-transform">
                      <div className="flex justify-center mb-6">
                          <Wind className="w-16 h-16 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4">Tailwind CSS</h3>
                      <p className="text-white/90 mb-6">A utility-first framework. Build custom designs directly in your HTML without fighting defaults.</p>
                      <CodeCard className="text-left text-xs bg-black/30 border-none">
                          <Tag>&lt;button</Tag> <Attr>class</Attr>=<Val>"bg-blue-500 text-white px-4 py-2 rounded"</Val><Tag>&gt;</Tag>{'\n'}
                          {'  '}Click Me{'\n'}
                          <Tag>&lt;/button&gt;</Tag>
                      </CodeCard>
                  </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 6: Summary */}
          <Slide isActive={currentSlide === 6}>
             <div className="text-center p-8 max-w-4xl z-10">
               <div className="inline-block p-4 bg-white/10 rounded-full mb-6 animate-pulse">
                <Layout className="w-16 h-16 text-cyan-400" />
               </div>
               <h1 className="text-5xl font-bold mb-8 text-white">Which one to pick? 🤷‍♂️</h1>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto mb-12">
                   <div className="bg-slate-800 p-6 rounded-xl">
                       <h3 className="text-lg font-bold text-white mb-2">Choose Bootstrap IF:</h3>
                       <p className="text-slate-400 text-sm">You need a working backend dashboard quickly and don't care much about unique branding.</p>
                   </div>
                   <div className="bg-slate-800 p-6 rounded-xl">
                       <h3 className="text-lg font-bold text-white mb-2">Choose Tailwind IF:</h3>
                       <p className="text-slate-400 text-sm">You are building a custom design, a modern React app, or want full control over the UI.</p>
                   </div>
               </div>
               <button
                  onClick={() => goToSlide(0)}
                  className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 rounded-full font-bold transition-all hover:scale-105 flex items-center gap-2 mx-auto shadow-lg shadow-cyan-500/20"
                >
                  <RotateCcw className="w-5 h-5" /> Start Over
                </button>
             </div>
          </Slide>
        </>
      )}
    </SlideContainer>
  );
}

// Helper icon component
function CheckCircle({ className }) {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
}
