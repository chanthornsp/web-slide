import { useState } from 'react';
import SlideContainer from '../components/SlideContainer';
import Slide from '../components/Slide';
import CodeCard, { Tag, Attr, Val, Comment } from '../components/CodeCard';
import { Atom, Play, Box, Layers, RefreshCw, Zap, CheckCircle, RotateCcw, Database } from 'lucide-react';

export default function ReactSlides() {
  return (
    <SlideContainer totalSlides={9} accentColor="cyan">
      {(currentSlide, goToSlide) => (
        <>
          {/* Background Blobs */}
          <div className="fixed inset-0 pointer-events-none">
            <div className="blob bg-cyan-500 w-96 h-96 rounded-full top-0 left-0 opacity-20 mix-blend-screen animate-move"></div>
            <div className="blob bg-blue-600 w-96 h-96 rounded-full bottom-0 right-0 opacity-20 mix-blend-screen" style={{animationDelay: '2s'}}></div>
            <div className="blob bg-indigo-500 w-80 h-80 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20 mix-blend-screen"></div>
          </div>

          {/* SLIDE 1: Title */}
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

          {/* SLIDE 2: What is React? */}
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
                          <div className="bg-slate-800 p-4 rounded-xl border-l-4 border-blue-500">
                              <div className="font-bold text-blue-400 text-lg mb-1">Virtual DOM</div>
                              <p className="text-sm text-slate-400">Optimizes rendering for better performance.</p>
                          </div>
                          <div className="bg-slate-800 p-4 rounded-xl border-l-4 border-indigo-500">
                              <div className="font-bold text-indigo-400 text-lg mb-1">JSX</div>
                              <p className="text-sm text-slate-400">Write HTML-like syntax directly in JavaScript.</p>
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
                      <div className="bg-white text-black px-6 py-3 rounded shadow-lg font-bold">
                          Hello, React!
                      </div>
                  </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 3: Setup & Vite */}
          <Slide isActive={currentSlide === 2}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-indigo-400">Getting Started 🚀</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                   <div className="bg-slate-800 p-8 rounded-2xl border border-indigo-500/30">
                       <div className="flex items-center gap-3 mb-6">
                           <Zap className="w-8 h-8 text-yellow-400" />
                           <h3 className="text-2xl font-bold text-white">Create with Vite</h3>
                       </div>
                       <p className="text-slate-300 mb-6">Vite is the modern, fast way to scaffold React projects.</p>
                       <div className="bg-black/30 p-4 rounded-lg font-mono text-sm text-indigo-300 space-y-2">
                           <div><span className="text-slate-500"># Create project</span></div>
                           <div>npm create vite@latest my-app -- --template react</div>
                           <div><span className="text-slate-500"># Install dependencies</span></div>
                           <div>cd my-app</div>
                           <div>npm install</div>
                           <div><span className="text-slate-500"># Run dev server</span></div>
                           <div>npm run dev</div>
                       </div>
                   </div>

                   <div className="space-y-6">
                       <h3 className="text-2xl font-bold text-white mb-4">Project Structure</h3>
                       <div className="bg-slate-900 p-6 rounded-xl font-mono text-sm text-slate-300 border border-slate-700">
                           <div className="flex gap-2"><Box className="w-4 h-4 text-blue-400"/> src/</div>
                           <div className="pl-6 flex gap-2"><div className="w-4 border-l border-slate-600 h-full"></div> App.jsx <span className="text-slate-500">// Main component</span></div>
                           <div className="pl-6 flex gap-2"><div className="w-4 border-l border-slate-600 h-full"></div> main.jsx <span className="text-slate-500">// Entry point</span></div>
                           <div className="pl-6 flex gap-2"><div className="w-4 border-l border-slate-600 h-full"></div> index.css <span className="text-slate-500">// Global styles</span></div>
                           <div className="flex gap-2 mt-2"><Box className="w-4 h-4 text-orange-400"/> index.html</div>
                           <div className="flex gap-2"><Box className="w-4 h-4 text-green-400"/> package.json</div>
                       </div>
                   </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 4: JSX & Components */}
          <Slide isActive={currentSlide === 3}>
             <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-cyan-400">JSX & Components 🧩</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="space-y-6">
                      <div className="bg-slate-800 p-6 rounded-2xl border-l-4 border-cyan-500">
                          <h3 className="text-xl font-bold text-white mb-2">JSX Rules</h3>
                          <ul className="list-disc pl-5 text-slate-300 space-y-2">
                              <li>Return a <strong>single parent</strong> element (or fragment <code>&lt;&gt;...&lt;/&gt;</code>).</li>
                              <li>Use <code>className</code> instead of <code>class</code>.</li>
                              <li>Close all tags (e.g., <code>&lt;img /&gt;</code>).</li>
                              <li>Embed JS with <code>{'{ }'}</code>.</li>
                          </ul>
                      </div>
                      
                      <div className="bg-slate-800 p-6 rounded-2xl border-l-4 border-blue-500">
                           <h3 className="text-xl font-bold text-white mb-2">Props</h3>
                           <p className="text-slate-300">Pass data to components like HTML attributes.</p>
                      </div>
                  </div>

                  <CodeCard className="text-sm">
                      <Tag>function</Tag> <Attr>Greeting</Attr>(<Val>props</Val>) {'{'}{'\n'}
                      {'  '}<Tag>return</Tag> <Tag>&lt;h2&gt;</Tag>Hello, {'{'}<Val>props</Val>.<Attr>name</Attr>{'}'}!<Tag>&lt;/h2&gt;</Tag>;{'\n'}
                      {'}'}{'\n'}
                      {'\n'}
                      <Tag>function</Tag> <Attr>App</Attr>() {'{'}{'\n'}
                      {'  '}<Tag>return</Tag> ({'\n'}
                      {'    '}<Tag>&lt;div</Tag> <Attr>className</Attr>=<Val>"container"</Val><Tag>&gt;</Tag>{'\n'}
                      {'      '}<Tag>&lt;Greeting</Tag> <Attr>name</Attr>=<Val>"Alice"</Val> <Tag>/&gt;</Tag>{'\n'}
                      {'      '}<Tag>&lt;Greeting</Tag> <Attr>name</Attr>=<Val>"Bob"</Val> <Tag>/&gt;</Tag>{'\n'}
                      {'    '}<Tag>&lt;/div&gt;</Tag>{'\n'}
                      {'  '});{'\n'}
                      {'}'}
                  </CodeCard>
              </div>
             </div>
          </Slide>

          {/* SLIDE 5: State (useState) */}
          <Slide isActive={currentSlide === 4}>
             <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-green-400">State & Events 🔄</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                      <p className="text-xl text-slate-300">
                          <strong>State</strong> is data that changes over time. When state updates, the component re-renders.
                      </p>
                      
                      <div className="bg-slate-800 p-6 rounded-2xl border border-green-500/30">
                          <h3 className="text-lg font-bold text-green-400 mb-2">useState Hook</h3>
                          <code className="block bg-black/30 p-3 rounded text-green-300 mb-2">const [count, setCount] = useState(0);</code>
                          <ul className="text-sm text-slate-400 space-y-2">
                              <li><code>count</code>: Current value</li>
                              <li><code>setCount</code>: Function to update value</li>
                              <li><code>0</code>: Initial value</li>
                          </ul>
                      </div>
                  </div>

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
                      
                      <div className="mt-6 flex justify-center">
                           <button className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-6 rounded transition-all active:scale-95 shadow-lg shadow-green-500/20">
                               Clicked 0 times
                           </button>
                      </div>
                  </div>
              </div>
             </div>
          </Slide>

          {/* SLIDE 6: Effects (useEffect) */}
          <Slide isActive={currentSlide === 5}>
             <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-purple-400">Side Effects 🔮</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                   <div className="bg-slate-800 p-8 rounded-2xl border-l-8 border-purple-500">
                       <h3 className="text-2xl font-bold text-white mb-4">useEffect Hook</h3>
                       <p className="text-slate-300 mb-6">Perform side effects like fetching data, timers, or DOM subscriptions.</p>
                       
                       <div className="space-y-4">
                           <div className="bg-black/30 p-4 rounded-lg">
                               <div className="text-purple-300 font-mono text-xs mb-1">Dependent on nothing (Runs once)</div>
                               <code className="text-slate-300 text-sm">useEffect(fn, []);</code>
                           </div>
                           <div className="bg-black/30 p-4 rounded-lg">
                               <div className="text-purple-300 font-mono text-xs mb-1">Dependent on prop/state</div>
                               <code className="text-slate-300 text-sm">useEffect(fn, [userId]);</code>
                           </div>
                       </div>
                   </div>

                   <CodeCard className="text-sm">
                       <Tag>useEffect</Tag>(() <Tag>=&gt;</Tag> {'{'}{'\n'}
                       {'  '}<Comment>// 1. Run effect</Comment>{'\n'}
                       {'  '}<Tag>const</Tag> <Attr>timer</Attr> = <Attr>setInterval</Attr>(() <Tag>=&gt;</Tag> {'{'}{'\n'}
                       {'    '}<Tag>console</Tag>.<Attr>log</Attr>(<Val>'Tick'</Val>);{'\n'}
                       {'  '}{'}'}, <Val>1000</Val>);{'\n'}
                       {'\n'}
                       {'  '}<Comment>// 2. Cleanup (Optional)</Comment>{'\n'}
                       {'  '}<Tag>return</Tag> () <Tag>=&gt;</Tag> <Attr>clearInterval</Attr>(<Attr>timer</Attr>);{'\n'}
                       {'}'}, []); <Comment>// 3. Dependencies</Comment>
                   </CodeCard>
              </div>
             </div>
          </Slide>

          {/* SLIDE 7: Lists & Keys */}
          <Slide isActive={currentSlide === 6}>
             <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-pink-400">Lists & Keys 📝</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                   <div className="space-y-6">
                       <p className="text-xl text-slate-300">
                           Render lists using <code className="text-pink-400">.map()</code>. Always provide a unique <code className="text-pink-400">key</code> prop!
                       </p>
                       <ul className="list-disc pl-5 text-slate-300 space-y-2">
                           <li>Keys help React identify which items have changed.</li>
                           <li>Use stable IDs (like database IDs), not array indexes if possible.</li>
                       </ul>
                   </div>

                   <CodeCard className="text-sm">
                       <Tag>const</Tag> <Attr>tasks</Attr> = [<Val>'Eat'</Val>, <Val>'Sleep'</Val>, <Val>'Code'</Val>];{'\n'}
                       {'\n'}
                       <Tag>return</Tag> ({'\n'}
                       {'  '}<Tag>&lt;ul&gt;</Tag>{'\n'}
                       {'    '}{'{'}<Attr>tasks</Attr>.<Attr>map</Attr>((<Val>task</Val>, <Val>id</Val>) <Tag>=&gt;</Tag> ({'\n'}
                       {'      '}<Tag>&lt;li</Tag> <Attr>key</Attr>={'{'}<Val>id</Val>{'}'}<Tag>&gt;</Tag>{'\n'}
                       {'        '}{'{'}<Val>task</Val>{'}'}{'\n'}
                       {'      '}<Tag>&lt;/li&gt;</Tag>{'\n'}
                       {'    '})){'}'}{'\n'}
                       {'  '}<Tag>&lt;/ul&gt;</Tag>{'\n'}
                       );
                   </CodeCard>
              </div>
             </div>
          </Slide>

          {/* SLIDE 8: To-Do App Project */}
          <Slide isActive={currentSlide === 7}>
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
                               <Keyboard className="w-5 h-5 text-green-600"/>
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

          {/* SLIDE 9: Summary */}
          <Slide isActive={currentSlide === 8}>
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

// Helper icon component for illustration
function Keyboard(props) {
  return (
    <svg 
      {...props}
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" ry="2"/>
      <path d="M6 8h.01"/><path d="M10 8h.01"/><path d="M14 8h.01"/><path d="M18 8h.01"/>
      <path d="M6 12h.01"/><path d="M10 12h.01"/><path d="M14 12h.01"/><path d="M18 12h.01"/>
      <path d="M7 16h10"/>
    </svg>
  )
}
