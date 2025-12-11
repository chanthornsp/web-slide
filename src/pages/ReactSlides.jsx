import { useState } from 'react';
import SlideContainer from '../components/SlideContainer';
import Slide from '../components/Slide';
import CodeCard, { Tag, Attr, Val, Comment } from '../components/CodeCard';
import { Atom, Play, Box, Layers, RefreshCw, Zap, CheckCircle, RotateCcw, Database, Repeat, Split, Type } from 'lucide-react';

export default function ReactSlides() {
  return (
    <SlideContainer totalSlides={12} accentColor="cyan">
      {(currentSlide, goToSlide) => (
        <>
          {/* Background Blobs */}
          <div className="fixed inset-0 pointer-events-none">
            <div className="blob bg-cyan-500 w-96 h-96 rounded-full top-0 left-0 opacity-20 mix-blend-screen animate-move"></div>
            <div className="blob bg-blue-600 w-96 h-96 rounded-full bottom-0 right-0 opacity-20 mix-blend-screen" style={{animationDelay: '2s'}}></div>
            <div className="blob bg-indigo-500 w-80 h-80 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20 mix-blend-screen"></div>
          </div>

          {/* SLIDE 0: Title */}
          <Slide isActive={currentSlide === 0}>
            <div className="text-center p-8 max-w-4xl z-10">
              <div className="inline-block p-6 rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-600 mb-6 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <Atom className="w-24 h-24 text-white animate-spin-slow" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
                ReactJS for Beginners
              </h1>
              <p className="text-2xl text-slate-300 font-light max-w-2xl mx-auto">
                Building Interactive UIs with Components ⚛️
              </p>
            </div>
            <style>{`
              .animate-spin-slow {
                animation: spin 8s linear infinite;
              }
              @keyframes spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
            `}</style>
          </Slide>

          {/* SLIDE 1: What is React? */}
          <Slide isActive={currentSlide === 1}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-cyan-400">What is React? ⚛️</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                      <p className="text-xl text-slate-300">
                          React is a JavaScript library for building user interfaces. It relies on a <strong>Component-Based</strong> architecture.
                      </p>
                      
                      <div className="grid gap-4">
                          <div className="bg-slate-800 p-4 rounded-xl border-l-4 border-cyan-500">
                              <div className="font-bold text-cyan-400 text-lg mb-1">Components</div>
                              <p className="text-sm text-slate-400">Build encapsulated parts that manage their own state.</p>
                          </div>
                      </div>
                  </div>

                  <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700 flex flex-col items-center justify-center gap-6">
                      <div className="text-center mb-4">
                          <span className="text-sm text-slate-500 uppercase tracking-wider">Example Component</span>
                      </div>
                      <CodeCard className="text-sm w-full">
                          <Tag>function</Tag> <Attr>Welcome</Attr>() {'{'}{'\n'}
                          {'  '}<Tag>return</Tag> <Tag>&lt;h1&gt;</Tag>Hello, React!<Tag>&lt;/h1&gt;</Tag>;{'\n'}
                          {'}'}
                      </CodeCard>
                  </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 2: Setup & Vite */}
          <Slide isActive={currentSlide === 2}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-indigo-400">Getting Started 🚀</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                   <div className="bg-slate-800 p-8 rounded-2xl border border-indigo-500/30">
                       <div className="flex items-center gap-3 mb-6">
                           <Zap className="w-8 h-8 text-yellow-400" />
                           <h3 className="text-2xl font-bold text-white">Create with Vite</h3>
                       </div>
                       <div className="bg-black/30 p-4 rounded-lg font-mono text-sm text-indigo-300 space-y-2">
                           <div>npm create vite@latest my-app -- --template react</div>
                           <div>cd my-app</div>
                           <div>npm install</div>
                           <div>npm run dev</div>
                       </div>
                   </div>

                   <div className="space-y-6">
                       <h3 className="text-2xl font-bold text-white mb-4">Project Structure</h3>
                       <div className="bg-slate-900 p-6 rounded-xl font-mono text-sm text-slate-300 border border-slate-700">
                           <div className="flex gap-2"><Box className="w-4 h-4 text-blue-400"/> src/</div>
                           <div className="pl-6 flex gap-2"><div className="w-4 border-l border-slate-600 h-full"></div> App.jsx <span className="text-slate-500">// Main component</span></div>
                           <div className="pl-6 flex gap-2"><div className="w-4 border-l border-slate-600 h-full"></div> main.jsx <span className="text-slate-500">// Entry point</span></div>
                       </div>
                   </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 3: JSX & Components */}
          <Slide isActive={currentSlide === 3}>
             <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-cyan-400">JSX & Components 🧩</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="space-y-6">
                      <div className="bg-slate-800 p-6 rounded-2xl border-l-4 border-cyan-500">
                          <h3 className="text-xl font-bold text-white mb-2">JSX Rules</h3>
                          <ul className="list-disc pl-5 text-slate-300 space-y-2">
                              <li>Return a <strong>single parent</strong> element.</li>
                              <li>Use <code>className</code> instead of <code>class</code>.</li>
                              <li>Close all tags (e.g., <code>&lt;img /&gt;</code>).</li>
                              <li>Embed JS with <code>{'{ }'}</code>.</li>
                          </ul>
                      </div>
                  </div>

                  <CodeCard className="text-sm">
                      <Tag>function</Tag> <Attr>App</Attr>() {'{'}{'\n'}
                      {'  '}<Tag>const</Tag> <Attr>name</Attr> = <Val>"React"</Val>;{'\n'}
                      {'  '}<Tag>return</Tag> ({'\n'}
                      {'    '}<Tag>&lt;div</Tag> <Attr>className</Attr>=<Val>"container"</Val><Tag>&gt;</Tag>{'\n'}
                      {'      '}<Tag>&lt;h1&gt;</Tag>Hello, {'{'}<Attr>name</Attr>{'}'}!<Tag>&lt;/h1&gt;</Tag>{'\n'}
                      {'    '}<Tag>&lt;/div&gt;</Tag>{'\n'}
                      {'  '});{'\n'}
                      {'}'}
                  </CodeCard>
              </div>
             </div>
          </Slide>

          {/* SLIDE 4: Props vs State (NEW) */}
          <Slide isActive={currentSlide === 4}>
             <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-blue-400">Props vs State 🥊</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Props */}
                  <div className="bg-blue-500/10 p-6 rounded-2xl border border-blue-500/30">
                      <div className="flex items-center gap-3 mb-4">
                          <Box className="w-8 h-8 text-blue-400" />
                          <h3 className="text-2xl font-bold text-white">Props</h3>
                      </div>
                      <p className="text-slate-300 mb-4 text-sm">
                          Arguments passed <strong>down</strong> to components. They are <strong>read-only</strong> (immutable).
                      </p>
                      <CodeCard className="text-xs">
                          <Tag>&lt;Welcome</Tag> <Attr>name</Attr>=<Val>"Alice"</Val> <Tag>/&gt;</Tag>
                      </CodeCard>
                      <p className="text-xs text-blue-300 mt-2">Like function arguments.</p>
                  </div>

                  {/* State */}
                  <div className="bg-green-500/10 p-6 rounded-2xl border border-green-500/30">
                      <div className="flex items-center gap-3 mb-4">
                          <Database className="w-8 h-8 text-green-400" />
                          <h3 className="text-2xl font-bold text-white">State</h3>
                      </div>
                      <p className="text-slate-300 mb-4 text-sm">
                          Data managed <strong>inside</strong> the component. Can change over time (mutable).
                      </p>
                      <CodeCard className="text-xs">
                          <Tag>const</Tag> [<Attr>count</Attr>, <Attr>setCount</Attr>] = <Attr>useState</Attr>(<Val>0</Val>);
                      </CodeCard>
                       <p className="text-xs text-green-300 mt-2">Like local variables.</p>
                  </div>
              </div>
             </div>
          </Slide>

          {/* SLIDE 5: useState Hook */}
          <Slide isActive={currentSlide === 5}>
             <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-green-400">Using State 🔄</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700 font-mono text-sm">
                      <CodeCard>
                          <Tag>import</Tag> {'{'} <Attr>useState</Attr> {'}'} <Tag>from</Tag> <Val>'react'</Val>;{'\n'}
                          {'\n'}
                          <Tag>function</Tag> <Attr>Counter</Attr>() {'{'}{'\n'}
                          {'  '}<Tag>const</Tag> [<Attr>count</Attr>, <Attr>setCount</Attr>] = <Attr>useState</Attr>(<Val>0</Val>);{'\n'}
                          {'\n'}
                          {'  '}<Tag>return</Tag> ({'\n'}
                          {'    '}<Tag>&lt;button</Tag> <Attr>onClick</Attr>={'{'}() <Tag>=&gt;</Tag> <Attr>setCount</Attr>(<Attr>count</Attr> + <Val>1</Val>){'}'}<Tag>&gt;</Tag>{'\n'}
                          {'      '}Clicked {'{'}<Attr>count</Attr>{'}'} times{'\n'}
                          {'    '}<Tag>&lt;/button&gt;</Tag>{'\n'}
                          {'  '});{'\n'}
                          {'}'}
                      </CodeCard>
                  </div>
              </div>
             </div>
          </Slide>

          {/* SLIDE 6: Handling Forms (NEW) */}
           <Slide isActive={currentSlide === 6}>
              <div className="max-w-6xl w-full p-8 z-10">
                <h2 className="text-5xl font-bold mb-12 text-center text-purple-400">Forms & Inputs 📝</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                   <div className="space-y-6">
                       <h3 className="text-2xl font-bold text-white">Controlled Components</h3>
                       <p className="text-slate-300">
                           In React, form inputs are "controlled". The React state is the single source of truth.
                       </p>
                       <ul className="list-decimal pl-5 text-slate-400 space-y-2">
                           <li>Create state for the input value.</li>
                           <li>Set the input's <code>value</code> prop to that state.</li>
                           <li>Update state using <code>onChange</code>.</li>
                       </ul>
                   </div>

                   <CodeCard className="text-sm">
                       <Tag>const</Tag> [<Attr>text</Attr>, <Attr>setText</Attr>] = <Attr>useState</Attr>(<Val>""</Val>);{'\n'}
                       {'\n'}
                       <Tag>return</Tag> ({'\n'}
                       {'  '}<Tag>&lt;input</Tag>{'\n'}
                       {'    '}<Attr>type</Attr>=<Val>"text"</Val>{'\n'}
                       {'    '}<Attr>value</Attr>={'{'}<Attr>text</Attr>{'}'}{'\n'}
                       {'    '}<Attr>onChange</Attr>={'{'}<Val>e</Val> <Tag>=&gt;</Tag> <Attr>setText</Attr>(<Val>e.target.value</Val>){'}'}{'\n'}
                       {'  '}<Tag>/&gt;</Tag>{'\n'}
                       );
                   </CodeCard>
                </div>
              </div>
           </Slide>

          {/* SLIDE 7: Conditional Rendering (NEW) */}
           <Slide isActive={currentSlide === 7}>
              <div className="max-w-6xl w-full p-8 z-10">
                <h2 className="text-5xl font-bold mb-12 text-center text-orange-400">Conditional Rendering 🔀</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                   <div className="bg-slate-800 p-6 rounded-2xl border border-orange-500/30">
                       <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><Split className="w-5 h-5 text-orange-400"/> Ternary Operator</h3>
                       <p className="text-sm text-slate-400 mb-4">Use for if/else logic inside JSX.</p>
                       <CodeCard className="text-xs">
                          {'{'}<Attr>isLoggedIn</Attr> ? <Tag>&lt;UserMenu /&gt;</Tag> : <Tag>&lt;LoginBtn /&gt;</Tag>{'}'}
                       </CodeCard>
                   </div>
                   
                   <div className="bg-slate-800 p-6 rounded-2xl border border-green-500/30">
                       <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-400"/> Short Circuit (&&)</h3>
                       <p className="text-sm text-slate-400 mb-4">Use when you want to render something OR nothing.</p>
                       <CodeCard className="text-xs">
                          {'{'}<Attr>showError</Attr> && <Tag>&lt;ErrorMsg /&gt;</Tag>{'}'}
                       </CodeCard>
                   </div>
                </div>
              </div>
           </Slide>

          {/* SLIDE 8: useEffect */}
          <Slide isActive={currentSlide === 8}>
             <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-purple-400">Side Effects 🔮</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                   <div className="bg-slate-800 p-8 rounded-2xl border-l-8 border-purple-500">
                       <h3 className="text-2xl font-bold text-white mb-4">useEffect Hook</h3>
                       <p className="text-slate-300 mb-6">Perform side effects like fetching data, timers, or DOM subscriptions.</p>
                   </div>

                   <CodeCard className="text-sm">
                       <Tag>useEffect</Tag>(() <Tag>=&gt;</Tag> {'{'}{'\n'}
                       {'  '}<Tag>console</Tag>.<Attr>log</Attr>(<Val>'Rendered!'</Val>);{'\n'}
                       {'}'}, []); <Comment>// Empty array = Run once</Comment>
                   </CodeCard>
              </div>
             </div>
          </Slide>

          {/* SLIDE 9: Lists & Keys */}
          <Slide isActive={currentSlide === 9}>
             <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-pink-400">Lists & Keys 📝</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                   <div className="space-y-6">
                       <p className="text-xl text-slate-300">
                           Render lists using <code className="text-pink-400">.map()</code>. Always provide a unique <code className="text-pink-400">key</code> prop!
                       </p>
                   </div>

                   <CodeCard className="text-sm">
                       {'{'}<Attr>items</Attr>.<Attr>map</Attr>(<Val>item</Val> <Tag>=&gt;</Tag> ({'\n'}
                       {'  '}<Tag>&lt;li</Tag> <Attr>key</Attr>={'{'}<Val>item.id</Val>{'}'}<Tag>&gt;</Tag>{'{'}<Val>item.name</Val>{'}'}<Tag>&lt;/li&gt;</Tag>{'\n'}
                       )){'}'}
                   </CodeCard>
              </div>
             </div>
          </Slide>

          {/* SLIDE 10: To-Do App Project */}
          <Slide isActive={currentSlide === 10}>
             <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-orange-400">Mini Project: To-Do ✅</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 h-96 overflow-y-auto custom-scrollbar">
                      <CodeCard className="text-xs border-none bg-transparent p-0">
                          <Tag>function</Tag> <Attr>TodoApp</Attr>() {'{'}{'\n'}
                          {'  '}<Tag>const</Tag> [<Attr>todos</Attr>, <Attr>setTodos</Attr>] = <Attr>useState</Attr>([]);{'\n'}
                          {'  '}<Tag>const</Tag> [<Attr>text</Attr>, <Attr>setText</Attr>] = <Attr>useState</Attr>(<Val>""</Val>);{'\n'}
                          {'\n'}
                          {'  '}<Tag>const</Tag> <Attr>add</Attr> = () <Tag>=&gt;</Tag> {'{'}{'\n'}
                          {'    '}<Attr>setTodos</Attr>([...<Attr>todos</Attr>, {'{'}<Attr>id</Attr>: <Attr>Date</Attr>.<Attr>now</Attr>(), <Attr>text</Attr>{'}'}]);{'\n'}
                          {'    '}<Attr>setText</Attr>(<Val>""</Val>);{'\n'}
                          {'  '}{'}'};{'\n'}
                          {'\n'}
                          {'  '}<Tag>return</Tag> ({'\n'}
                          {'    '}<Tag>&lt;div&gt;</Tag>{'\n'}
                          {'      '}<Tag>&lt;input</Tag> <Attr>value</Attr>={'{'}<Attr>text</Attr>{'}'} <Attr>onChange</Attr>={'{'}<Val>e</Val> <Tag>=&gt;</Tag> <Attr>setText</Attr>(<Val>e.target.value</Val>){'}'}<Tag>/&gt;</Tag>{'\n'}
                          {'      '}<Tag>&lt;button</Tag> <Attr>onClick</Attr>={'{'}<Attr>add</Attr>{'}'}<Tag>&gt;</Tag>Add<Tag>&lt;/button&gt;</Tag>{'\n'}
                          {'      '}<Tag>&lt;ul&gt;</Tag>{'\n'}
                          {'        '}{'{'}<Attr>todos</Attr>.<Attr>map</Attr>(<Val>t</Val> <Tag>=&gt;</Tag> <Tag>&lt;li</Tag> <Attr>key</Attr>={'{'}<Val>t.id</Val>{'}'}<Tag>&gt;</Tag>{'{'}<Val>t.text</Val>{'}'}<Tag>&lt;/li&gt;</Tag>){'}'}{'\n'}
                          {'      '}<Tag>&lt;/ul&gt;</Tag>{'\n'}
                          {'    '}<Tag>&lt;/div&gt;</Tag>{'\n'}
                          {'  '});{'\n'}
                          {'}'}
                      </CodeCard>
                  </div>

                  <div className="bg-white p-6 rounded-2xl shadow-xl text-slate-800 flex flex-col items-center justify-center">
                       <h3 className="text-2xl font-bold mb-4">React State Architecture</h3>
                       <div className="space-y-4 w-full">
                           <div className="flex items-center gap-2 p-3 bg-blue-100 rounded-lg">
                               <Database className="w-5 h-5 text-blue-600"/>
                               <span className="font-mono text-sm">todos: Array</span>
                           </div>
                           <div className="flex items-center gap-2 p-3 bg-green-100 rounded-lg">
                               <Type className="w-5 h-5 text-green-600"/>
                               <span className="font-mono text-sm">text: String</span>
                           </div>
                           <div className="flex justify-center">⬇️</div>
                           <div className="border-2 border-dashed border-slate-300 p-4 rounded-lg w-full text-center">
                               Render UI based on State
                           </div>
                       </div>
                  </div>
              </div>
             </div>
          </Slide>

          {/* SLIDE 11: Summary */}
          <Slide isActive={currentSlide === 11}>
             <div className="text-center p-8 max-w-4xl z-10">
               <div className="inline-block p-4 bg-white/10 rounded-full mb-6 animate-pulse">
                <CheckCircle className="w-16 h-16 text-cyan-400" />
               </div>
               <h1 className="text-5xl font-bold mb-8 text-white">You're a React Developer! ⚛️</h1>
               <div className="text-xl text-slate-300 mb-12 space-y-4">
                   <p>Master these core concepts:</p>
                   <div className="flex flex-wrap justify-center gap-4">
                       <span className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full border border-cyan-500/30">Components</span>
                       <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full border border-blue-500/30">Props</span>
                       <span className="bg-indigo-500/20 text-indigo-300 px-4 py-2 rounded-full border border-indigo-500/30">State (useState)</span>
                       <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full border border-purple-500/30">Effects (useEffect)</span>
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
