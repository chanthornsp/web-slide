import { useState, useEffect } from 'react';
import SlideContainer from '../components/SlideContainer';
import Slide from '../components/Slide';
import CodeCard, { Tag, Attr, Val, Comment } from '../components/CodeCard';
import { Sparkles, Terminal, FileCode, Play, Braces, MousePointer, Layers, Box, Coffee, RotateCcw, Repeat, Settings, Zap, Globe, CheckSquare, Plus, Trash } from 'lucide-react';

export default function JavascriptSlides() {
  // Demo State for Project
  const [todos, setTodos] = useState(['Learn JS', 'Build App']);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <SlideContainer totalSlides={15} accentColor="yellow">
      {(currentSlide, goToSlide) => (
        <>
          {/* Background Blobs */}
          <div className="fixed inset-0 pointer-events-none">
            <div className="blob bg-yellow-500 w-96 h-96 rounded-full top-0 left-0 opacity-20 mix-blend-screen animate-move"></div>
            <div className="blob bg-orange-600 w-96 h-96 rounded-full bottom-0 right-0 opacity-20 mix-blend-screen" style={{animationDelay: '2s'}}></div>
            <div className="blob bg-amber-500 w-80 h-80 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20 mix-blend-screen"></div>
          </div>

          {/* SLIDE 0: Title */}
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

          {/* SLIDE 1: What is JavaScript? */}
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

          {/* SLIDE 2: Including JS */}
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
            </div>
          </Slide>

          {/* SLIDE 3: Variables */}
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

          {/* SLIDE 4: Data Types */}
          <Slide isActive={currentSlide === 4}>
             <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-purple-400">Data Types 📊</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                 {/* String */}
                 <div className="bg-slate-800 p-6 rounded-2xl border border-green-500/30">
                    <h3 className="text-xl font-bold text-green-400 mb-2">String</h3>
                    <p className="text-slate-400 text-sm mb-4">Textual data.</p>
                    <CodeCard className="text-xs">
                        <Tag>const</Tag> <Attr>name</Attr> = <Val>"Alice"</Val>;
                    </CodeCard>
                 </div>

                 {/* Number */}
                 <div className="bg-slate-800 p-6 rounded-2xl border border-blue-500/30">
                    <h3 className="text-xl font-bold text-blue-400 mb-2">Number</h3>
                    <p className="text-slate-400 text-sm mb-4">Integers or decimals.</p>
                    <CodeCard className="text-xs">
                        <Tag>let</Tag> <Attr>count</Attr> = <Val>42</Val>;
                    </CodeCard>
                 </div>

                 {/* Boolean */}
                 <div className="bg-slate-800 p-6 rounded-2xl border border-purple-500/30">
                    <h3 className="text-xl font-bold text-purple-400 mb-2">Boolean</h3>
                    <p className="text-slate-400 text-sm mb-4">True or False logic.</p>
                    <CodeCard className="text-xs">
                        <Tag>let</Tag> <Attr>isActive</Attr> = <Val>true</Val>;
                    </CodeCard>
                 </div>

                 {/* Array */}
                 <div className="bg-slate-800 p-6 rounded-2xl border border-yellow-500/30">
                    <h3 className="text-xl font-bold text-yellow-400 mb-2">Array</h3>
                    <p className="text-slate-400 text-sm mb-4">A list of items.</p>
                    <CodeCard className="text-xs">
                        <Tag>const</Tag> <Attr>colors</Attr> = [<Val>"red"</Val>, <Val>"blue"</Val>];
                    </CodeCard>
                 </div>

                 {/* Object */}
                 <div className="bg-slate-800 p-6 rounded-2xl border border-orange-500/30">
                    <h3 className="text-xl font-bold text-orange-400 mb-2">Object</h3>
                    <p className="text-slate-400 text-sm mb-4">Key-value pair collection.</p>
                    <CodeCard className="text-xs">
                        <Tag>const</Tag> <Attr>user</Attr> = {'{'}<Attr>name</Attr>: <Val>"Bob"</Val>{'}'};
                    </CodeCard>
                 </div>

                 {/* Null/Undef */}
                 <div className="bg-slate-800 p-6 rounded-2xl border border-slate-500/30">
                    <h3 className="text-xl font-bold text-slate-400 mb-2">Null / Undefined</h3>
                    <p className="text-slate-400 text-sm mb-4">Empty or missing value.</p>
                    <CodeCard className="text-xs">
                        <Tag>let</Tag> <Attr>empty</Attr> = <Val>null</Val>;
                    </CodeCard>
                 </div>
              </div>
             </div>
          </Slide>

          {/* SLIDE 5: Arrays */}
          <Slide isActive={currentSlide === 5}>
              <div className="max-w-6xl w-full p-8 z-10">
                <h2 className="text-5xl font-bold mb-12 text-center text-pink-400">Arrays [] 📋</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <p className="text-slate-300">Organize lists of data. Access items by their index (starting at 0).</p>
                        
                        <div className="bg-slate-800 p-4 rounded-xl space-y-2">
                             <div className="flex justify-between font-mono text-sm border-b border-slate-700 pb-2">
                                 <span className="text-slate-500">Index</span>
                                 <span className="text-slate-200">Value</span>
                             </div>
                             <div className="flex justify-between font-mono text-sm">
                                 <span className="text-pink-400">0</span>
                                 <span className="text-white">"Apple"</span>
                             </div>
                             <div className="flex justify-between font-mono text-sm">
                                 <span className="text-pink-400">1</span>
                                 <span className="text-white">"Banana"</span>
                             </div>
                             <div className="flex justify-between font-mono text-sm">
                                 <span className="text-pink-400">2</span>
                                 <span className="text-white">"Cherry"</span>
                             </div>
                        </div>
                    </div>

                    <CodeCard className="text-sm">
                        <Tag>const</Tag> <Attr>fruits</Attr> = [<Val>"Apple"</Val>, <Val>"Banana"</Val>, <Val>"Cherry"</Val>];{'\n'}
                        {'\n'}
                        <Comment>// Access</Comment>{'\n'}
                        <Tag>console</Tag>.<Attr>log</Attr>(<Attr>fruits</Attr>[<Val>0</Val>]); <Comment>// "Apple"</Comment>{'\n'}
                        {'\n'}
                        <Comment>// Modify</Comment>{'\n'}
                        <Attr>fruits</Attr>.<Attr>push</Attr>(<Val>"Date"</Val>); <Comment>// Adds to end</Comment>{'\n'}
                        <Attr>fruits</Attr>.<Attr>pop</Attr>(); <Comment>// Removes last</Comment>
                    </CodeCard>
                </div>
              </div>
          </Slide>

          {/* SLIDE 6: Loops (NEW) */}
           <Slide isActive={currentSlide === 6}>
              <div className="max-w-6xl w-full p-8 z-10">
                <h2 className="text-5xl font-bold mb-10 text-center text-amber-400">Loops & Iteration 🔄</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                   {/* Classical For */}
                   <div className="bg-slate-800 p-6 rounded-2xl border border-amber-500/30">
                       <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><Repeat /> For Loop</h3>
                       <p className="text-sm text-slate-400 mb-4">Run code multiple times based on a counter.</p>
                       <CodeCard className="text-sm">
                          <Tag>for</Tag> (<Tag>let</Tag> <Attr>i</Attr>=<Val>0</Val>; <Attr>i</Attr>&lt;<Val>5</Val>; <Attr>i</Attr>++) {'{'}{'\n'}
                          {'  '}<Tag>console</Tag>.<Attr>log</Attr>(<Attr>i</Attr>);{'\n'}
                          {'}'}
                       </CodeCard>
                   </div>
                   
                   {/* Modern Methods */}
                   <div className="bg-slate-800 p-6 rounded-2xl border border-green-500/30">
                       <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><Zap /> Modern Methods</h3>
                       <p className="text-sm text-slate-400 mb-4">Cleaner ways to iterate arrays.</p>
                       <CodeCard className="text-sm">
                          <Tag>const</Tag> <Attr>nums</Attr> = [<Val>1</Val>, <Val>2</Val>, <Val>3</Val>];{'\n'}
                          {'\n'}
                          <Attr>nums</Attr>.<Attr>map</Attr>(<Attr>n</Attr> <Tag>=&gt;</Tag> <Attr>n</Attr> * <Val>2</Val>); <Comment>// [2, 4, 6]</Comment>{'\n'}
                          <Attr>nums</Attr>.<Attr>filter</Attr>(<Attr>n</Attr> <Tag>=&gt;</Tag> <Attr>n</Attr> &gt; <Val>1</Val>); <Comment>// [2, 3]</Comment>
                       </CodeCard>
                   </div>
                </div>
              </div>
           </Slide>

          {/* SLIDE 7: Objects (NEW) */}
          <Slide isActive={currentSlide === 7}>
              <div className="max-w-6xl w-full p-8 z-10">
                <h2 className="text-5xl font-bold mb-8 text-center text-indigo-400">Objects {'{}'} 🧊</h2>
                
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="w-full md:w-1/2 space-y-6">
                        <p className="text-slate-300 text-lg">
                            Objects group related data and functionality together using <strong>key-value</strong> pairs.
                        </p>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-indigo-500 rounded-full"></div> <strong>Properties:</strong> Data (name, age, color)</li>
                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-pink-500 rounded-full"></div> <strong>Methods:</strong> Functions (actions the object can do)</li>
                        </ul>
                    </div>
                    
                    <div className="w-full md:w-1/2">
                        <CodeCard>
                            <Tag>const</Tag> <Attr>car</Attr> = {'{'}{'\n'}
                            {'  '}<Attr>brand</Attr>: <Val>"Tesla"</Val>,{'\n'}
                            {'  '}<Attr>model</Attr>: <Val>"Model 3"</Val>,{'\n'}
                            {'  '}<Attr>drive</Attr>: <Tag>function</Tag>() {'{'}{'\n'}
                            {'     '}<Tag>console</Tag>.<Attr>log</Attr>(<Val>"Vroom!"</Val>);{'\n'}
                            {'  '}{'}'}{'\n'}
                            {'}'};{'\n'}
                            {'\n'}
                            <Tag>console</Tag>.<Attr>log</Attr>(<Attr>car</Attr>.<Attr>brand</Attr>); <Comment>// "Tesla"</Comment>{'\n'}
                            <Attr>car</Attr>.<Attr>drive</Attr>(); <Comment>// "Vroom!"</Comment>
                        </CodeCard>
                    </div>
                </div>
              </div>
          </Slide>

          {/* SLIDE 8: Functions */}
          <Slide isActive={currentSlide === 8}>
             <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-blue-400">Functions ⚙️</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                   <div className="bg-slate-800 p-8 rounded-2xl border border-blue-500/30">
                       <h3 className="text-2xl font-bold text-white mb-6">Regular Function</h3>
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
                       <h3 className="text-2xl font-bold text-white mb-6">Conditionals</h3>
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

          {/* SLIDE 9: ES6 Modern JS (NEW) */}
           <Slide isActive={currentSlide === 9}>
              <div className="max-w-6xl w-full p-8 z-10">
                <h2 className="text-5xl font-bold mb-10 text-center text-emerald-400">Modern ES6+ 🚀</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                   {/* Arrow Functions */}
                   <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                       <h3 className="text-xl font-bold text-white mb-2">Arrow Functions</h3>
                       <p className="text-xs text-slate-400 mb-2">Shorter syntax for functions.</p>
                       <CodeCard className="text-xs">
                          <Tag>const</Tag> <Attr>add</Attr> = (<Val>a</Val>, <Val>b</Val>) <Tag>=&gt;</Tag> <Attr>a</Attr> + <Attr>b</Attr>;
                       </CodeCard>
                   </div>

                   {/* Template Literals */}
                   <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                       <h3 className="text-xl font-bold text-white mb-2">Template Literals</h3>
                       <p className="text-xs text-slate-400 mb-2">Backticks for string interpolation.</p>
                       <CodeCard className="text-xs">
                          <Tag>const</Tag> <Attr>msg</Attr> = <Val>`Hello ${'{'}<Attr>name</Attr>{'}'}!`</Val>;
                       </CodeCard>
                   </div>

                   {/* Destructuring */}
                   <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                       <h3 className="text-xl font-bold text-white mb-2">Destructuring</h3>
                       <p className="text-xs text-slate-400 mb-2">Unpack values from arrays/objects.</p>
                       <CodeCard className="text-xs">
                          <Tag>const</Tag> {'{'}<Attr>name</Attr>, <Attr>age</Attr>{'}'} = <Attr>user</Attr>;
                       </CodeCard>
                   </div>

                   {/* Spread Operator */}
                   <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                       <h3 className="text-xl font-bold text-white mb-2">Spread Operator ...</h3>
                       <p className="text-xs text-slate-400 mb-2">Expand arrays or objects.</p>
                       <CodeCard className="text-xs">
                          <Tag>const</Tag> <Attr>combined</Attr> = [...<Attr>arr1</Attr>, ...<Attr>arr2</Attr>];
                       </CodeCard>
                   </div>
                </div>
              </div>
           </Slide>

          {/* SLIDE 10: The DOM */}
          <Slide isActive={currentSlide === 10}>
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
                              <code className="text-rose-300">document.querySelector()</code>
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
                           <Tag>const</Tag> <Attr>el</Attr> = <Tag>document</Tag>.<Attr>getElementById</Attr>(<Val>"demo-text"</Val>);{'\n'}
                           <Attr>el</Attr>.<Attr>innerText</Attr> = <Val>"Updated! 🚀"</Val>;{'\n'}
                           <Attr>el</Attr>.<Attr>style</Attr>.<Attr>color</Attr> = <Val>"pink"</Val>;
                       </CodeCard>
                  </div>
              </div>
             </div>
          </Slide>

          {/* SLIDE 11: Events Deep Dive (NEW) */}
           <Slide isActive={currentSlide === 11}>
              <div className="max-w-6xl w-full p-8 z-10">
                <h2 className="text-5xl font-bold mb-8 text-center text-cyan-400">Events 🎬</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <p className="text-slate-300">
                            Events wait for something to happen: a click, a keypress, a mouse movement.
                        </p>
                        <CodeCard>
                            <Tag>const</Tag> <Attr>btn</Attr> = <Tag>document</Tag>.<Attr>querySelector</Attr>(<Val>'button'</Val>);{'\n'}
                            {'\n'}
                            <Attr>btn</Attr>.<Attr>addEventListener</Attr>(<Val>'click'</Val>, (<Attr>event</Attr>) <Tag>=&gt;</Tag> {'{'}{'\n'}
                            {'  '}<Tag>console</Tag>.<Attr>log</Attr>(<Val>"Clicked!"</Val>);{'\n'}
                            {'}'});
                        </CodeCard>
                        <div className="flex gap-2 flex-wrap">
                            {['click', 'mouseover', 'keydown', 'submit', 'scroll'].map(e => (
                                <span key={e} className="px-2 py-1 bg-cyan-900/50 text-cyan-300 rounded text-xs font-mono">{e}</span>
                            ))}
                        </div>
                    </div>

                    <div className="bg-slate-800 p-8 rounded-2xl border border-slate-600 text-center">
                        <div className="p-12 bg-red-500 rounded-xl cursor-pointer hover:bg-red-400 transition-colors"
                             onClick={() => alert("Red Box Clicked!")}>
                            <h3 className="text-white font-bold">Parent (Red)</h3>
                            <button 
                                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    alert("Button Clicked! (Propagation Stopped)");
                                }}
                            >
                                Child Button
                            </button>
                        </div>
                        <p className="text-xs text-slate-400 mt-4">
                            Try clicking the Red Box vs the Blue Button to see <strong>Bubbling</strong>!
                        </p>
                    </div>
                </div>
              </div>
           </Slide>

          {/* SLIDE 12: Async JS (NEW) */}
           <Slide isActive={currentSlide === 12}>
              <div className="max-w-6xl w-full p-8 z-10">
                <h2 className="text-5xl font-bold mb-8 text-center text-purple-400">Async JS ⏳</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                   <div className="space-y-4">
                       <h3 className="text-2xl font-bold text-white mb-2">Promises & Fetch</h3>
                       <p className="text-slate-300">
                           JavaScript is single-threaded. We use <strong>Async/Await</strong> to handle tasks that take time (like fetching data) without freezing the page.
                       </p>
                       <CodeCard className="text-xs">
                          <Tag>async function</Tag> <Attr>getData</Attr>() {'{'}{'\n'}
                          {'  '}<Tag>const</Tag> <Attr>res</Attr> = <Tag>await</Tag> <Attr>fetch</Attr>(<Val>'api/data'</Val>);{'\n'}
                          {'  '}<Tag>const</Tag> <Attr>data</Attr> = <Tag>await</Tag> <Attr>res</Attr>.<Attr>json</Attr>();{'\n'}
                          {'  '}<Tag>console</Tag>.<Attr>log</Attr>(<Attr>data</Attr>);{'\n'}
                          {'}'}
                       </CodeCard>
                   </div>

                   <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex flex-col items-center justify-center">
                       <div className="flex gap-4 mb-8">
                           <div className="w-16 h-16 rounded-full border-4 border-purple-500 border-t-transparent animate-spin"></div>
                       </div>
                       <p className="text-purple-300 font-mono text-sm">Loading Data...</p>
                       <div className="mt-4 p-4 bg-green-500/20 text-green-300 rounded-lg text-xs w-full">
                           {'{'} "status": "success", "user": "Chanthorn" {'}'}
                       </div>
                   </div>
                </div>
              </div>
           </Slide>

          {/* SLIDE 13: Project (NEW) */}
          <Slide isActive={currentSlide === 13}>
              <div className="max-w-4xl w-full p-8 z-10">
                <h2 className="text-5xl font-bold mb-8 text-center text-white">Mini Project: To-Do 📝</h2>
                
                <div className="bg-white text-slate-800 rounded-2xl shadow-2xl overflow-hidden max-w-md mx-auto">
                    <div className="bg-yellow-500 p-6 flex justify-between items-center">
                        <h3 className="font-bold text-xl text-white">My Tasks</h3>
                        <span className="text-yellow-100 text-sm">{todos.length} items</span>
                    </div>
                    
                    <div className="p-6">
                        <div className="flex gap-2 mb-6">
                            <input 
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && addTodo()}
                                placeholder="Add a new task..."
                                className="flex-1 px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-yellow-500"
                            />
                            <button 
                                onClick={addTodo}
                                className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-lg transition-colors"
                            >
                                <Plus />
                            </button>
                        </div>

                        <ul className="space-y-2">
                            {todos.map((todo, index) => (
                                <li key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg group">
                                    <div className="flex items-center gap-3">
                                        <div className="w-5 h-5 border-2 border-slate-300 rounded cursor-pointer hover:border-yellow-500"></div>
                                        <span>{todo}</span>
                                    </div>
                                    <button 
                                        onClick={() => removeTodo(index)}
                                        className="text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
                                    >
                                        <Trash size={18} />
                                    </button>
                                </li>
                            ))}
                            {todos.length === 0 && (
                                <li className="text-center text-slate-400 py-4 italic">No tasks yet. Add one!</li>
                            )}
                        </ul>
                    </div>
                </div>
              </div>
          </Slide>

          {/* SLIDE 14: Summary */}
          <Slide isActive={currentSlide === 14}>
            <div className="text-center p-8 max-w-4xl z-10">
              <div className="inline-block p-4 bg-white/10 rounded-full mb-6 animate-bounce">
                <Coffee className="w-16 h-16 text-yellow-400" />
              </div>
              <h1 className="text-5xl font-bold mb-8 text-white">You're a Programmer! 💻</h1>
              <div className="text-xl text-slate-300 mb-12 space-y-4">
                  <p>You've mastered the pillars of modern JS:</p>
                  <div className="flex flex-wrap justify-center gap-4">
                      <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full border border-green-500/30">ES6+</span>
                      <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full border border-blue-500/30">Async/Await</span>
                      <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full border border-purple-500/30">DOM Events</span>
                      <span className="bg-rose-500/20 text-rose-300 px-4 py-2 rounded-full border border-rose-500/30">Logic</span>
                  </div>
                  <p className="mt-8">Next Stop: <strong>React Frameworks</strong>! ⚛️</p>
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
