import { useState } from 'react';
import SlideContainer from '../components/SlideContainer';
import Slide from '../components/Slide';
import CodeCard, { Tag, Attr, Val, Comment } from '../components/CodeCard';
import { Wind, Code, Layout, Palette, Smartphone, Layers, Command, Play, CheckCircle, RotateCcw, LayoutGrid, Monitor } from 'lucide-react';

export default function TailwindSlides() {
  const [activeRes, setActiveRes] = useState('mobile');

  return (
    <SlideContainer totalSlides={8} accentColor="cyan">
      {(currentSlide, goToSlide) => (
        <>
          {/* Background Blobs */}
          <div className="fixed inset-0 pointer-events-none">
            <div className="blob bg-cyan-500 w-96 h-96 rounded-full top-0 left-0 opacity-20 mix-blend-screen animate-move"></div>
            <div className="blob bg-sky-600 w-96 h-96 rounded-full bottom-0 right-0 opacity-20 mix-blend-screen" style={{animationDelay: '2s'}}></div>
            <div className="blob bg-teal-500 w-80 h-80 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20 mix-blend-screen"></div>
          </div>

          {/* SLIDE 1: Intro */}
          <Slide isActive={currentSlide === 0}>
            <div className="text-center p-8 max-w-4xl z-10">
              <div className="inline-block p-6 rounded-3xl bg-gradient-to-br from-cyan-400 to-sky-500 mb-6 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <Wind className="w-24 h-24 text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400">
                Tailwind CSS v4
              </h1>
              <p className="text-2xl text-slate-300 font-light max-w-2xl mx-auto">
                Utility-First CSS for Rapid UI Development ⚡
              </p>
            </div>
          </Slide>

          {/* SLIDE 2: Installation */}
          <Slide isActive={currentSlide === 1}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-cyan-400">Quick Start 🚀</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="bg-slate-800 p-8 rounded-2xl border-l-8 border-cyan-500">
                      <div className="flex items-center gap-3 mb-6">
                          <Command className="w-8 h-8 text-cyan-400" />
                          <h3 className="text-2xl font-bold text-white">CLI Installation</h3>
                      </div>
                      <div className="space-y-4">
                          <div className="bg-black/30 p-4 rounded-lg font-mono text-sm text-slate-300">
                             <div className="flex gap-2"><span className="text-green-400">$</span> npm init -y</div>
                             <div className="flex gap-2"><span className="text-green-400">$</span> npm install tailwindcss @tailwindcss/cli</div>
                          </div>
                          <div className="bg-black/30 p-4 rounded-lg font-mono text-sm text-slate-300">
                             <div className="text-slate-500 mb-2"># src/input.css</div>
                             <div className="text-cyan-300">@import "tailwindcss";</div>
                          </div>
                      </div>
                  </div>

                  <div className="bg-slate-800 p-8 rounded-2xl border-l-8 border-sky-500">
                       <div className="flex items-center gap-3 mb-6">
                            <Play className="w-8 h-8 text-sky-400" />
                            <h3 className="text-2xl font-bold text-white">Run Build</h3>
                       </div>
                       <p className="text-slate-300 mb-4">Start the CLI in watch mode to automatically compile your changes.</p>
                       <div className="bg-black/30 p-4 rounded-lg font-mono text-xs text-sky-300 break-all">
                           npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
                       </div>
                  </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 3: Utility First */}
          <Slide isActive={currentSlide === 2}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-blue-400">Utility First 🧠</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                   <div className="space-y-6 text-slate-300">
                       <p className="text-xl">Instead of writing custom CSS classes like <code className="text-blue-300">.btn-primary</code>, you apply utility classes directly in HTML.</p>
                       <ul className="space-y-3">
                           <li className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-500 rounded-full"></div> <code className="text-cyan-300">text-3xl</code> → font-size: 30px</li>
                           <li className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-500 rounded-full"></div> <code className="text-cyan-300">font-bold</code> → font-weight: 700</li>
                           <li className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-500 rounded-full"></div> <code className="text-cyan-300">text-blue-600</code> → color: #2563eb</li>
                       </ul>
                   </div>

                   <div className="bg-slate-900 p-8 rounded-2xl flex flex-col items-center justify-center gap-8 border border-slate-700">
                       <h1 className="text-3xl font-bold text-blue-600 bg-white px-4 py-2 rounded shadow">
                           Hello Tailwind!
                       </h1>
                       <CodeCard className="text-xs w-full">
                           <Tag>&lt;h1</Tag> <Attr>class</Attr>=<Val>"text-3xl font-bold text-blue-600"</Val><Tag>&gt;</Tag>{'\n'}
                           {'  '}Hello Tailwind!{'\n'}
                           <Tag>&lt;/h1&gt;</Tag>
                       </CodeCard>
                   </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 4: Layout & Spacing */}
          <Slide isActive={currentSlide === 3}>
             <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-teal-400">Layout & Spacing 📐</h2>
               
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                   <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                       <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><Layout className="w-5 h-5 text-teal-400"/> Flexbox</h3>
                       <div className="flex gap-4 p-4 bg-slate-900 rounded-xl mb-4">
                           <div className="flex-1 bg-teal-500/20 text-teal-300 border border-teal-500/50 p-2 text-center rounded">1</div>
                           <div className="flex-1 bg-teal-500/20 text-teal-300 border border-teal-500/50 p-2 text-center rounded">2</div>
                           <div className="flex-1 bg-teal-500/20 text-teal-300 border border-teal-500/50 p-2 text-center rounded">3</div>
                       </div>
                       <CodeCard className="text-xs">
                           <Attr>class</Attr>=<Val>"flex gap-4"</Val>
                       </CodeCard>
                   </div>

                   <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                       <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><LayoutGrid className="w-5 h-5 text-orange-400"/> Grid</h3>
                       <div className="grid grid-cols-2 gap-4 p-4 bg-slate-900 rounded-xl mb-4">
                           <div className="bg-orange-500/20 text-orange-300 border border-orange-500/50 p-2 text-center rounded">1</div>
                           <div className="bg-orange-500/20 text-orange-300 border border-orange-500/50 p-2 text-center rounded">2</div>
                           <div className="bg-orange-500/20 text-orange-300 border border-orange-500/50 p-2 text-center rounded">3</div>
                           <div className="bg-orange-500/20 text-orange-300 border border-orange-500/50 p-2 text-center rounded">4</div>
                       </div>
                       <CodeCard className="text-xs">
                           <Attr>class</Attr>=<Val>"grid grid-cols-2 gap-4"</Val>
                       </CodeCard>
                   </div>
               </div>
               
               <div className="mt-8 bg-slate-800 p-6 rounded-2xl border border-slate-700 text-center">
                   <h3 className="text-xl font-bold text-white mb-4">Spacing Scale</h3>
                   <div className="flex justify-center gap-4 flex-wrap font-mono text-sm text-slate-300">
                       <span className="p-2 border border-slate-600 rounded">p-4 (1rem)</span>
                       <span className="p-2 border border-slate-600 rounded">m-8 (2rem)</span>
                       <span className="p-2 border border-slate-600 rounded">gap-2 (0.5rem)</span>
                   </div>
               </div>
             </div>
          </Slide>

          {/* SLIDE 5: Styling Components */}
          <Slide isActive={currentSlide === 4}>
             <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-purple-400">Styling Components 🎨</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-white">Interactive States</h3>
                      <p className="text-slate-300">Add prefixes like <code className="text-purple-300">hover:</code>, <code className="text-purple-300">focus:</code>, or <code className="text-purple-300">active:</code> to style states.</p>
                      
                      <div className="p-8 bg-white rounded-xl shadow-lg flex justify-center">
                          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition-colors shadow focus:ring-4 ring-blue-300 outline-none">
                              Hover Me!
                          </button>
                      </div>
                  </div>

                  <CodeCard className="text-xs">
                      <Tag>&lt;button</Tag>{'\n'}
                      {'  '}<Attr>class</Attr>=<Val>"</Val>{'\n'}
                      {'    '}<Val>bg-blue-600</Val> <Comment>/* Default */</Comment>{'\n'}
                      {'    '}<Val>hover:bg-blue-700</Val> <Comment>/* Hover */</Comment>{'\n'}
                      {'    '}<Val>text-white</Val>{'\n'}
                      {'    '}<Val>font-bold</Val>{'\n'}
                      {'    '}<Val>py-2 px-6</Val>{'\n'}
                      {'    '}<Val>rounded shadow</Val>{'\n'}
                      {'    '}<Val>transition-colors</Val>{'\n'}
                      {'  '}<Val>"</Val>{'\n'}
                      <Tag>&gt;</Tag>{'\n'}
                      {'  '}Hover Me!{'\n'}
                      <Tag>&lt;/button&gt;</Tag>
                  </CodeCard>
              </div>
             </div>
          </Slide>

          {/* SLIDE 6: Responsive Design */}
          <Slide isActive={currentSlide === 5}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-rose-400">Responsive Design 📱</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                   <div className="space-y-6">
                       <p className="text-xl text-slate-300">Prefix utilities with breakpoint names to apply them at specific screen widths.</p>
                       <ul className="space-y-3 font-mono text-sm text-slate-400">
                           <li className="flex justify-between border-b border-slate-700 pb-2"><span>sm:</span> <span>640px+</span></li>
                           <li className="flex justify-between border-b border-slate-700 pb-2"><span>md:</span> <span>768px+</span></li>
                           <li className="flex justify-between border-b border-slate-700 pb-2"><span>lg:</span> <span>1024px+</span></li>
                           <li className="flex justify-between border-b border-slate-700 pb-2"><span>xl:</span> <span>1280px+</span></li>
                       </ul>
                   </div>

                   <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 flex flex-col gap-6 items-center">
                       <div className="flex gap-2">
                            <button onClick={()=>setActiveRes('mobile')} className={`p-2 rounded ${activeRes==='mobile'?'bg-rose-500 text-white':'bg-slate-700 text-slate-400'}`}><Smartphone className="w-4 h-4"/></button>
                            <button onClick={()=>setActiveRes('desktop')} className={`p-2 rounded ${activeRes==='desktop'?'bg-rose-500 text-white':'bg-slate-700 text-slate-400'}`}><Monitor className="w-4 h-4"/></button>
                       </div>
                       
                       <div className={`transition-all duration-500 bg-white rounded-xl shadow-lg p-4 ${activeRes==='mobile' ? 'w-48' : 'w-full'}`}>
                            <div className="bg-blue-100 p-4 rounded text-center text-blue-800 font-bold">
                                {activeRes==='mobile' ? 'Stack (Block)' : 'Grid (3 Cols)'}
                            </div>
                            {activeRes === 'desktop' && (
                                <div className="grid grid-cols-3 gap-2 mt-2">
                                     <div className="bg-blue-100 p-4 rounded"></div>
                                     <div className="bg-blue-100 p-4 rounded"></div>
                                     <div className="bg-blue-100 p-4 rounded"></div>
                                </div>
                            )}
                            {activeRes === 'mobile' && (
                                <div className="flex flex-col gap-2 mt-2">
                                     <div className="bg-blue-100 p-4 rounded"></div>
                                     <div className="bg-blue-100 p-4 rounded"></div>
                                     <div className="bg-blue-100 p-4 rounded"></div>
                                </div>
                            )}
                       </div>
                       <CodeCard className="text-xs w-full">
                           <Attr>class</Attr>=<Val>"{activeRes==='mobile' ? 'grid-cols-1' : 'md:grid-cols-3'} grid gap-4"</Val>
                       </CodeCard>
                   </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 7: Pro Tips */}
          <Slide isActive={currentSlide === 6}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-emerald-400">Pro Tips 💡</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-slate-800 p-6 rounded-xl border-t-4 border-emerald-500">
                      <div className="flex items-center gap-3 mb-3">
                          <Code className="w-6 h-6 text-emerald-400" />
                          <h3 className="text-xl font-bold text-white">IntelliSense</h3>
                      </div>
                      <p className="text-slate-300 text-sm">Install the <strong>Tailwind CSS IntelliSense</strong> VS Code extension for autocomplete, syntax highlighting, and hover previews.</p>
                  </div>

                   <div className="bg-slate-800 p-6 rounded-xl border-t-4 border-sky-500">
                      <div className="flex items-center gap-3 mb-3">
                          <Layers className="w-6 h-6 text-sky-400" />
                          <h3 className="text-xl font-bold text-white">Prettier Sorting</h3>
                      </div>
                      <p className="text-slate-300 text-sm">Use the Prettier plugin to automatically sort your classes. No more arguing about class order!</p>
                  </div>

                  <div className="bg-slate-800 p-6 rounded-xl border-t-4 border-purple-500">
                      <div className="flex items-center gap-3 mb-3">
                          <Palette className="w-6 h-6 text-purple-400" />
                          <h3 className="text-xl font-bold text-white">Arbitrary Values</h3>
                      </div>
                      <p className="text-slate-300 text-sm">Need a specific pixel value? Use square brackets: <code className="text-purple-300">w-[350px]</code> or <code className="text-purple-300">bg-[#bada55]</code>.</p>
                  </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 8: Summary */}
          <Slide isActive={currentSlide === 7}>
             <div className="text-center p-8 max-w-4xl z-10">
               <div className="inline-block p-4 bg-white/10 rounded-full mb-6 animate-pulse">
                <CheckCircle className="w-16 h-16 text-cyan-400" />
               </div>
               <h1 className="text-5xl font-bold mb-8 text-white">Ready to Build? 🛠️</h1>
               <p className="text-xl text-slate-300 mb-12">
                   Tailwind CSS speeds up your workflow by keeping you in your HTML. Start with mobile styles, add responsive prefixes, and enjoy the speed!
               </p>
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
