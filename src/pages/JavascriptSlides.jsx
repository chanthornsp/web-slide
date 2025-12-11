import { useState } from 'react';
import SlideContainer from '../components/SlideContainer';
import Slide from '../components/Slide';
import CodeCard, { Tag, Attr, Val, Comment } from '../components/CodeCard';
import { Sparkles, Terminal, FileCode, Play, Braces, MousePointer, Layers, Box, Coffee, RotateCcw } from 'lucide-react';

export default function JavascriptSlides() {
  return (
    <SlideContainer totalSlides={8} accentColor="yellow">
      {(currentSlide, goToSlide) => (
        <>
          {/* Background Blobs */}
          <div className="fixed inset-0 pointer-events-none">
            <div className="blob bg-yellow-500 w-96 h-96 rounded-full top-0 left-0 opacity-20 mix-blend-screen animate-move"></div>
            <div className="blob bg-orange-600 w-96 h-96 rounded-full bottom-0 right-0 opacity-20 mix-blend-screen" style={{animationDelay: '2s'}}></div>
            <div className="blob bg-amber-500 w-80 h-80 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20 mix-blend-screen"></div>
          </div>

          {/* SLIDE 1: Title */}
          <Slide isActive={currentSlide === 0}>
            <div className="text-center p-8 max-w-4xl z-10">
              <div className="inline-block p-6 rounded-3xl bg-gradient-to-br from-yellow-400 to-orange-500 mb-6 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <Sparkles className="w-24 h-24 text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400">
                JavaScript for Beginners
              </h1>
              <p className="text-2xl text-slate-300 font-light max-w-2xl mx-auto">
                Bringing your websites to life! ✨
              </p>
            </div>
          </Slide>

          {/* SLIDE 2: What is JavaScript? */}
          <Slide isActive={currentSlide === 1}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-yellow-400">What is JavaScript? 🤔</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                      <p className="text-xl text-slate-300 leading-relaxed">
                          JavaScript is the programming language of the web. It makes pages <strong>interactive</strong> and <strong>dynamic</strong>.
                      </p>
                      
                      <div className="grid grid-cols-3 gap-4 text-center">
                          <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                              <div className="font-bold text-slate-400 mb-2">HTML</div>
                              <div className="text-2xl">💀</div>
                              <div className="text-sm text-slate-500 mt-2">Skeleton</div>
                          </div>
                          <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                              <div className="font-bold text-slate-400 mb-2">CSS</div>
                              <div className="text-2xl">🎨</div>
                              <div className="text-sm text-slate-500 mt-2">Skin</div>
                          </div>
                          <div className="bg-slate-800 p-4 rounded-xl border-2 border-yellow-500 shadow-lg shadow-yellow-500/20">
                              <div className="font-bold text-yellow-400 mb-2">JS</div>
                              <div className="text-2xl">🧠</div>
                              <div className="text-sm text-yellow-200 mt-2">Brain</div>
                          </div>
                      </div>
                  </div>

                  <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700">
                      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><Terminal className="w-5 h-5 text-green-400"/> Interactive Example</h3>
                      <div className="bg-black/50 p-4 rounded-xl mb-4 text-center">
                          <button 
                            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-6 rounded-full transition-all active:scale-95"
                            onClick={(e) => {
                                e.target.innerText = "Clicked! 🎉";
                                e.target.classList.add('bg-green-500', 'text-white');
                                setTimeout(() => {
                                    e.target.innerText = "Click Me Again";
                                    e.target.classList.remove('bg-green-500', 'text-white');
                                }, 1500);
                            }}
                          >
                              Click Me
                          </button>
                      </div>
                      <CodeCard className="text-xs">
                          <Tag>button</Tag>.<Attr>onclick</Attr> = <Tag>function</Tag>() {'{'}{'\n'}
                          {'  '}<Tag>this</Tag>.<Attr>innerText</Attr> = <Val>"Clicked! 🎉"</Val>;{'\n'}
                          {'}'}
                      </CodeCard>
                  </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 3: Including JS */}
          <Slide isActive={currentSlide === 2}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-orange-400">Where does it go? 📍</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Inline */}
                  <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 opacity-70 hover:opacity-100 transition-opacity">
                      <div className="flex items-center gap-3 mb-4">
                           <FileCode className="w-6 h-6 text-red-400" />
                           <h3 className="text-xl font-bold text-white">1. Inline</h3>
                      </div>
                      <p className="text-sm text-slate-400 mb-4">Directly in HTML attributes. <span className="text-red-400 font-bold">Not recommended!</span></p>
                      <CodeCard className="text-xs">
                          <Tag>&lt;button</Tag> <Attr>onclick</Attr>=<Val>"alert('Hi')"</Val><Tag>&gt;</Tag>
                      </CodeCard>
                  </div>

                  {/* Internal */}
                  <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                      <div className="flex items-center gap-3 mb-4">
                           <FileCode className="w-6 h-6 text-yellow-400" />
                           <h3 className="text-xl font-bold text-white">2. Internal</h3>
                      </div>
                      <p className="text-sm text-slate-400 mb-4">Inside <code className="text-yellow-300">&lt;script&gt;</code> tags. Good for small scripts.</p>
                      <CodeCard className="text-xs">
                          <Tag>&lt;script&gt;</Tag>{'\n'}
                          {'  '}<Tag>alert</Tag>(<Val>'Hello'</Val>);{'\n'}
                          <Tag>&lt;/script&gt;</Tag>
                      </CodeCard>
                  </div>

                  {/* External */}
                  <div className="bg-slate-800 p-6 rounded-2xl border-2 border-green-500 shadow-lg shadow-green-500/10">
                      <div className="flex items-center gap-3 mb-4">
                           <FileCode className="w-6 h-6 text-green-400" />
                           <h3 className="text-xl font-bold text-white">3. External</h3>
                      </div>
                      <p className="text-sm text-slate-400 mb-4">In a separate <code>.js</code> file. <span className="text-green-400 font-bold">Best Practice!</span></p>
                      <CodeCard className="text-xs">
                          <Tag>&lt;script</Tag> <Attr>src</Attr>=<Val>"script.js"</Val><Tag>&gt;&lt;/script&gt;</Tag>
                      </CodeCard>
                  </div>
              </div>

               <div className="mt-8 bg-blue-500/20 border border-blue-500/40 p-4 rounded-xl text-center text-blue-200">
                   💡 <strong>Tip:</strong> Always put your script tag at the end of the <code className="bg-blue-900/50 px-2 py-0.5 rounded text-blue-100">&lt;body&gt;</code> so content loads first!
               </div>
            </div>
          </Slide>

          {/* SLIDE 4: Variables */}
          <Slide isActive={currentSlide === 3}>
             <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-teal-400">Variables 📦</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                   <div className="space-y-6">
                       <p className="text-xl text-slate-300">Variables are containers for storing information.</p>
                       
                       <div className="grid gap-4">
                           <div className="bg-slate-800 p-4 rounded-xl border-l-4 border-green-500">
                               <div className="font-mono text-green-400 font-bold mb-1">const</div>
                               <p className="text-sm text-slate-400">Value cannot change. Use by default.</p>
                           </div>
                           <div className="bg-slate-800 p-4 rounded-xl border-l-4 border-yellow-500">
                               <div className="font-mono text-yellow-400 font-bold mb-1">let</div>
                               <p className="text-sm text-slate-400">Value can change. Use for counters, totals, etc.</p>
                           </div>
                           <div className="bg-slate-800 p-4 rounded-xl border-l-4 border-red-500 opacity-60">
                               <div className="font-mono text-red-400 font-bold mb-1">var</div>
                               <p className="text-sm text-slate-400">Old way. Avoid usage.</p>
                           </div>
                       </div>
                   </div>

                   <CodeCard className="text-sm h-full">
                       <Comment>// Unchanging values</Comment>{'\n'}
                       <Tag>const</Tag> <Attr>appName</Attr> = <Val>"My App"</Val>;{'\n'}
                       <Tag>const</Tag> <Attr>taxRate</Attr> = <Val>0.08</Val>;{'\n'}
                       {'\n'}
                       <Comment>// Changeable values</Comment>{'\n'}
                       <Tag>let</Tag> <Attr>score</Attr> = <Val>0</Val>;{'\n'}
                       <Tag>let</Tag> <Attr>userName</Attr> = <Val>"Guest"</Val>;{'\n'}
                       {'\n'}
                       <Attr>score</Attr> = <Val>10</Val>; <Comment>// ✅ OK</Comment>{'\n'}
                       <Comment>// appName = "New App"; // ❌ Error!</Comment>
                   </CodeCard>
              </div>
             </div>
          </Slide>

          {/* SLIDE 5: Data Types & Arrays */}
          <Slide isActive={currentSlide === 4}>
             <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-purple-400">Data & Arrays 📊</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                      <h3 className="text-2xl font-bold text-white mb-6">Common Data Types</h3>
                      <ul className="space-y-4 font-mono text-sm">
                          <li className="flex items-center gap-4">
                              <span className="text-green-400">String</span>
                              <span className="text-slate-400">"Hello World"</span>
                          </li>
                          <li className="flex items-center gap-4">
                              <span className="text-blue-400">Number</span>
                              <span className="text-slate-400">42, 3.14</span>
                          </li>
                          <li className="flex items-center gap-4">
                              <span className="text-purple-400">Boolean</span>
                              <span className="text-slate-400">true, false</span>
                          </li>
                      </ul>
                  </div>

                  <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-white mb-2">Arrays (Lists)</h3>
                      <CodeCard className="text-sm">
                          <Tag>const</Tag> <Attr>fruits</Attr> = [<Val>"🍎"</Val>, <Val>"🍌"</Val>, <Val>"🍊"</Val>];{'\n'}
                          {'\n'}
                          <Comment>// Accessing</Comment>{'\n'}
                          <Tag>console</Tag>.<Attr>log</Attr>(<Attr>fruits</Attr>[<Val>1</Val>]); <Comment>// "🍌"</Comment>{'\n'}
                          {'\n'}
                          <Comment>// Adding</Comment>{'\n'}
                          <Attr>fruits</Attr>.<Attr>push</Attr>(<Val>"🍇"</Val>);{'\n'}
                          {'\n'}
                          <Comment>// Looping</Comment>{'\n'}
                          <Attr>fruits</Attr>.<Attr>forEach</Attr>(<Val>fruit</Val> <Tag>=&gt;</Tag> {'{'}{'\n'}
                          {'  '}<Tag>console</Tag>.<Attr>log</Attr>(<Val>fruit</Val>);{'\n'}
                          {'}'});
                      </CodeCard>
                  </div>
              </div>
             </div>
          </Slide>

          {/* SLIDE 6: DOM Manipulation */}
          <Slide isActive={currentSlide === 5}>
             <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-rose-400">The DOM 🌳</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="space-y-6">
                      <p className="text-xl text-slate-300">
                          The <strong className="text-rose-400">Document Object Model</strong> allows JS to change HTML & CSS.
                      </p>
                      
                      <div className="bg-slate-800 p-6 rounded-2xl space-y-4">
                          <div className="flex items-center justify-between bg-black/30 p-3 rounded text-sm text-slate-300">
                              <span>Get Element</span>
                              <code className="text-rose-300">document.getElementById()</code>
                          </div>
                          <div className="flex items-center justify-between bg-black/30 p-3 rounded text-sm text-slate-300">
                              <span>Change Text</span>
                              <code className="text-rose-300">el.innerText = "..."</code>
                          </div>
                          <div className="flex items-center justify-between bg-black/30 p-3 rounded text-sm text-slate-300">
                              <span>Change Style</span>
                              <code className="text-rose-300">el.style.color = "red"</code>
                          </div>
                          <div className="flex items-center justify-between bg-black/30 p-3 rounded text-sm text-slate-300">
                              <span>Add Class</span>
                              <code className="text-rose-300">el.classList.add()</code>
                          </div>
                      </div>
                  </div>

                  <div className="flex flex-col gap-6 items-center justify-center bg-white/5 p-8 rounded-2xl border border-white/10">
                       <h1 id="demo-text" className="text-4xl font-bold text-white transition-all">Hello! 👋</h1>
                       <div className="flex gap-2">
                           <button 
                               className="px-4 py-2 bg-rose-500 rounded text-white font-bold text-sm"
                               onClick={() => {
                                   const el = document.getElementById('demo-text');
                                   el.innerText = "Updated! 🚀";
                                   el.style.color = "#fb7185";
                                   el.style.transform = "scale(1.2)";
                               }}
                           >
                               Update Text
                           </button>
                           <button 
                               className="px-4 py-2 bg-slate-600 rounded text-white font-bold text-sm"
                               onClick={() => {
                                   const el = document.getElementById('demo-text');
                                   el.innerText = "Hello! 👋";
                                   el.style.color = "white";
                                   el.style.transform = "scale(1)";
                               }}
                           >
                               Reset
                           </button>
                       </div>
                       <CodeCard className="text-xs w-full">
                           <Tag>const</Tag> <Attr>title</Attr> = <Tag>document</Tag>.<Attr>getElementById</Attr>(<Val>"title"</Val>);{'\n'}
                           <Attr>title</Attr>.<Attr>innerText</Attr> = <Val>"Updated! 🚀"</Val>;{'\n'}
                           <Attr>title</Attr>.<Attr>style</Attr>.<Attr>color</Attr> = <Val>"pink"</Val>;
                       </CodeCard>
                  </div>
              </div>
             </div>
          </Slide>

          {/* SLIDE 7: Functions & Logic */}
          <Slide isActive={currentSlide === 6}>
             <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-blue-400">Functions & Logic ⚙️</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                   <div className="bg-slate-800 p-8 rounded-2xl border border-blue-500/30">
                       <h3 className="text-2xl font-bold text-white mb-6">Functions</h3>
                       <CodeCard className="text-sm">
                           <Comment>// Define</Comment>{'\n'}
                           <Tag>function</Tag> <Attr>greet</Attr>(<Val>name</Val>) {'{'}{'\n'}
                           {'  '}<Tag>return</Tag> <Val>"Hi, "</Val> + <Val>name</Val>;{'\n'}
                           {'}'}{'\n'}
                           {'\n'}
                           <Comment>// Call</Comment>{'\n'}
                           <Tag>console</Tag>.<Attr>log</Attr>(<Attr>greet</Attr>(<Val>"Sarah"</Val>));
                       </CodeCard>
                   </div>

                   <div className="bg-slate-800 p-8 rounded-2xl border border-yellow-500/30">
                       <h3 className="text-2xl font-bold text-white mb-6">Conditions (Logic)</h3>
                       <CodeCard className="text-sm">
                           <Tag>const</Tag> <Attr>age</Attr> = <Val>18</Val>;{'\n'}
                           {'\n'}
                           <Tag>if</Tag> (<Attr>age</Attr> &gt;= <Val>18</Val>) {'{'}{'\n'}
                           {'  '}<Tag>console</Tag>.<Attr>log</Attr>(<Val>"Adult"</Val>);{'\n'}
                           {'}'} <Tag>else</Tag> {'{'}{'\n'}
                           {'  '}<Tag>console</Tag>.<Attr>log</Attr>(<Val>"Child"</Val>);{'\n'}
                           {'}'}
                       </CodeCard>
                   </div>
              </div>
             </div>
          </Slide>

          {/* SLIDE 8: Summary */}
          <Slide isActive={currentSlide === 7}>
             <div className="text-center p-8 max-w-4xl z-10">
               <div className="inline-block p-4 bg-white/10 rounded-full mb-6 animate-bounce">
                <Coffee className="w-16 h-16 text-yellow-400" />
               </div>
               <h1 className="text-5xl font-bold mb-8 text-white">You're a Programmer! 💻</h1>
               <div className="text-xl text-slate-300 mb-12 space-y-4">
                   <p>You've learned the pillars of JS:</p>
                   <div className="flex flex-wrap justify-center gap-4">
                       <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full border border-green-500/30">Variables</span>
                       <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full border border-blue-500/30">Arrays</span>
                       <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full border border-purple-500/30">Functions</span>
                       <span className="bg-rose-500/20 text-rose-300 px-4 py-2 rounded-full border border-rose-500/30">DOM</span>
                   </div>
                   <p className="mt-8">Next Stop: Build something cool! 🚀</p>
               </div>
               <button
                  onClick={() => goToSlide(0)}
                  className="px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-black rounded-full font-bold transition-all hover:scale-105 flex items-center gap-2 mx-auto shadow-lg shadow-yellow-500/20"
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
