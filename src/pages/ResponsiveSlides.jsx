import { useState } from 'react';
import SlideContainer from '../components/SlideContainer';
import Slide from '../components/Slide';
import CodeCard, { Tag, Attr, Val, Comment } from '../components/CodeCard';
import { Smartphone, Tablet, Monitor, Move, LayoutTemplate, Image, CheckCircle, RotateCcw, Grid, BoxSelect, Maximize, Zap, Play } from 'lucide-react';

export default function ResponsiveSlides() {
  const [device, setDevice] = useState('desktop');

  return (
    <SlideContainer totalSlides={13} accentColor="rose">
      {(currentSlide, goToSlide) => (
        <>
          {/* Background Blobs */}
          <div className="fixed inset-0 pointer-events-none">
            <div className="blob bg-rose-600 w-96 h-96 rounded-full top-0 left-0 opacity-20 mix-blend-screen animate-move"></div>
            <div className="blob bg-orange-600 w-96 h-96 rounded-full bottom-0 right-0 opacity-20 mix-blend-screen" style={{animationDelay: '2s'}}></div>
            <div className="blob bg-pink-500 w-80 h-80 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20 mix-blend-screen"></div>
          </div>

          {/* SLIDE 0: Title */}
          <Slide isActive={currentSlide === 0}>
            <div className="text-center p-8 max-w-4xl z-10">
              <div className="inline-block p-6 rounded-3xl bg-gradient-to-br from-rose-500 to-orange-600 mb-6 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <Smartphone className="w-24 h-24 text-white" />
              </div>
              <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-orange-400 to-red-400">
                Responsive Design
              </h1>
              <p className="text-2xl text-slate-300 font-light max-w-2xl mx-auto">
                One Codebase, Every Device 📱💻
              </p>
            </div>
          </Slide>

          {/* SLIDE 1: What is Responsive Design? */}
          <Slide isActive={currentSlide === 1}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-rose-400">What is it? 🤔</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="bg-slate-800 p-6 rounded-xl border border-rose-500/30">
                    <p className="text-lg text-slate-300 leading-relaxed">
                      Responsive Web Design (RWD) ensures your website looks/functions well across all devices. It uses CSS to resize, hide, shrink, enlarge, or move content.
                    </p>
                  </div>
                  
                  {/* Device Table from rwd.md */}
                  <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700">
                    <h4 className="text-sm font-bold text-slate-400 mb-3 uppercase tracking-wider">Target Devices</h4>
                    <div className="grid grid-cols-3 gap-2 text-xs md:text-sm">
                        <div className="p-2 bg-slate-800 rounded text-center">
                            <Smartphone className="w-6 h-6 mx-auto mb-1 text-rose-400"/>
                            <div className="font-bold text-white">Mobile</div>
                            <div className="text-slate-500">320-768px</div>
                        </div>
                        <div className="p-2 bg-slate-800 rounded text-center">
                            <Tablet className="w-6 h-6 mx-auto mb-1 text-orange-400"/>
                            <div className="font-bold text-white">Tablet</div>
                            <div className="text-slate-500">768-1024px</div>
                        </div>
                        <div className="p-2 bg-slate-800 rounded text-center">
                            <Monitor className="w-6 h-6 mx-auto mb-1 text-blue-400"/>
                            <div className="font-bold text-white">Desktop</div>
                            <div className="text-slate-500">1024px+</div>
                        </div>
                    </div>
                  </div>

                  <div className="flex justify-between gap-4">
                      {['mobile', 'tablet', 'desktop'].map((d) => (
                        <div 
                            key={d}
                            className={`flex-1 flex flex-col items-center gap-2 p-3 rounded-xl cursor-pointer transition-all border ${device === d ? 'bg-rose-600/20 border-rose-500 shadow-[0_0_15px_rgba(225,29,72,0.3)]' : 'bg-slate-800 border-slate-700 hover:bg-slate-700'}`} 
                            onClick={() => setDevice(d)}
                        >
                            <span className="capitalize text-sm font-bold text-slate-300">{d}</span>
                        </div>
                      ))}
                  </div>
                </div>

                <div className="bg-white/5 p-8 rounded-2xl border border-white/10 flex items-center justify-center min-h-[400px]">
                     {/* Interactive Device Preview */}
                     <div 
                        className="bg-slate-900 border-4 border-slate-700 rounded-2xl overflow-hidden transition-all duration-500 shadow-2xl flex flex-col"
                        style={{
                            width: device === 'mobile' ? '220px' : device === 'tablet' ? '400px' : '580px',
                            height: '350px'
                        }}
                     >
                         <div className="bg-slate-800 p-2 text-xs text-center text-slate-500 border-b border-slate-700 flex justify-between px-4">
                             <span>MySite.com</span>
                             <span>{device === 'mobile' ? 'Mobile' : device === 'tablet' ? 'Tablet' : 'Desktop'}</span>
                         </div>
                         <div className="p-4 overflow-y-auto flex-1 bg-white relative">
                             <div className={`h-20 rounded-lg mb-4 flex items-center justify-center text-white font-bold transition-colors ${device === 'mobile' ? 'bg-rose-500' : 'bg-blue-600'}`}>
                                 Hero
                             </div>
                             <div className={`grid gap-2 transition-all duration-500 ${device === 'mobile' ? 'grid-cols-1' : device === 'tablet' ? 'grid-cols-2' : 'grid-cols-3'}`}>
                                 {[1, 2, 3].map(i => (
                                     <div key={i} className="h-24 bg-slate-200 rounded flex items-center justify-center text-slate-400">Content {i}</div>
                                 ))}
                             </div>
                         </div>
                     </div>
                </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 2: Breakpoints & Media Queries */}
          <Slide isActive={currentSlide === 2}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-10 text-center text-orange-400">Media Queries 📐</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                      <div className="bg-slate-800 p-4 rounded-xl border-l-4 border-green-500">
                          <span className="text-xs text-green-400 uppercase font-bold tracking-wider">Mobile First Strategy</span>
                          <p className="text-sm text-slate-300 mt-1">Start with default styles for mobile, then add <code className="text-orange-300 bg-orange-900/30 px-1 rounded">min-width</code> queries for larger screens.</p>
                      </div>

                      <CodeCard>
                        <Comment>/* Default (Mobile: 0px - 767px) */</Comment>{'\n'}
                        <Tag>body</Tag> {'{'}{'\n'}
                        {'  '}<Attr>background</Attr>: <Val>lightblue</Val>;{'\n'}
                        {'}'}{'\n'}
                        {'\n'}
                        <Comment>/* Tablet: 768px and up */</Comment>{'\n'}
                        <Tag>@media</Tag> <Attr>screen</Attr> and (<Attr>min-width</Attr>: <Val>768px</Val>) {'{'}{'\n'}
                        {'  '}<Tag>body</Tag> {'{'}{'\n'}
                        {'    '}<Attr>background</Attr>: <Val>lightgreen</Val>;{'\n'}
                        {'  '}{'}'}{'\n'}
                        {'}'}{'\n'}
                        {'\n'}
                        <Comment>/* Desktop: 1024px and up */</Comment>{'\n'}
                        <Tag>@media</Tag> <Attr>screen</Attr> and (<Attr>min-width</Attr>: <Val>1024px</Val>) {'{'}{'\n'}
                        {'  '}<Tag>body</Tag> {'{'}{'\n'}
                        {'    '}<Attr>background</Attr>: <Val>white</Val>;{'\n'}
                        {'  '}{'}'}{'\n'}
                        {'}'}
                      </CodeCard>
                  </div>

                  <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hidden md:flex items-center justify-center">
                      <div className="text-center w-full">
                         <h3 className="text-2xl font-bold text-white mb-6">Standard Breakpoints</h3>
                         <div className="space-y-4">
                             <div className="flex items-center gap-4 bg-slate-800 p-4 rounded-lg border border-slate-700 relative overflow-hidden group">
                                 <div className="absolute left-0 top-0 bottom-0 bg-rose-500/20 w-[10%] group-hover:w-full transition-all duration-700"></div>
                                 <Smartphone className="text-rose-400 shrink-0" />
                                 <div className="text-left flex-1 relative z-10">
                                     <div className="font-bold text-white">Mobile</div>
                                     <div className="text-xs text-slate-400">Default (No Query)</div>
                                 </div>
                             </div>
                             
                             <div className="flex items-center gap-4 bg-slate-800 p-4 rounded-lg border border-slate-700 relative overflow-hidden group">
                                 <div className="absolute left-0 top-0 bottom-0 bg-orange-500/20 w-[30%] group-hover:w-full transition-all duration-700"></div>
                                 <Tablet className="text-orange-400 shrink-0" />
                                 <div className="text-left flex-1 relative z-10">
                                     <div className="font-bold text-white">Tablet</div>
                                     <div className="text-xs text-slate-400">@media (min-width: 768px)</div>
                                 </div>
                             </div>

                             <div className="flex items-center gap-4 bg-slate-800 p-4 rounded-lg border border-slate-700 relative overflow-hidden group">
                                 <div className="absolute left-0 top-0 bottom-0 bg-blue-500/20 w-[60%] group-hover:w-full transition-all duration-700"></div>
                                 <Monitor className="text-blue-400 shrink-0" />
                                 <div className="text-left flex-1 relative z-10">
                                     <div className="font-bold text-white">Desktop</div>
                                     <div className="text-xs text-slate-400">@media (min-width: 1024px)</div>
                                 </div>
                             </div>
                             
                             <div className="flex items-center gap-4 bg-slate-800 p-4 rounded-lg border border-slate-700 relative overflow-hidden group">
                                 <div className="absolute left-0 top-0 bottom-0 bg-purple-500/20 w-[80%] group-hover:w-full transition-all duration-700"></div>
                                 <Maximize className="text-purple-400 shrink-0" />
                                 <div className="text-left flex-1 relative z-10">
                                     <div className="font-bold text-white">Large Screen</div>
                                     <div className="text-xs text-slate-400">@media (min-width: 1440px)</div>
                                 </div>
                             </div>
                         </div>
                      </div>
                  </div>
              </div>
            </div>
          </Slide>

           {/* SLIDE 3: CSS Grid - Manual (From rwd.md) */}
           <Slide isActive={currentSlide === 3}>
             <div className="max-w-6xl w-full p-8 z-10">
                <h2 className="text-5xl font-bold mb-8 text-center text-teal-400">Responsive Grid Layout 🏁</h2>
                
                <div className="flex flex-col md:flex-row gap-8 items-start">
                   <div className="w-full md:w-1/2">
                      <p className="text-slate-300 mb-4">
                          Using media queries to explicitly change column counts at specific breakpoints.
                      </p>
                      <CodeCard className="text-xs md:text-sm">
                        <Tag>.card-grid</Tag> {'{'}{'\n'}
                        {'  '}<Attr>display</Attr>: <Val>grid</Val>;{'\n'}
                        {'  '}<Attr>gap</Attr>: <Val>1rem</Val>;{'\n'}
                        {'  '}<Comment>/* Mobile: Single column */</Comment>{'\n'}
                        {'  '}<Attr>grid-template-columns</Attr>: <Val>1fr</Val>;{'\n'}
                        {'}'}{'\n'}
                        {'\n'}
                        <Tag>@media</Tag> (<Attr>min-width</Attr>: <Val>768px</Val>) {'{'}{'\n'}
                        {'  '}<Tag>.card-grid</Tag> {'{'}{'\n'}
                        {'    '}<Comment>/* Tablet: Two columns */</Comment>{'\n'}
                        {'    '}<Attr>grid-template-columns</Attr>: <Val>repeat(2, 1fr)</Val>;{'\n'}
                        {'  '}{'}'}{'\n'}
                        {'}'}{'\n'}
                        {'\n'}
                        <Tag>@media</Tag> (<Attr>min-width</Attr>: <Val>1024px</Val>) {'{'}{'\n'}
                        {'  '}<Tag>.card-grid</Tag> {'{'}{'\n'}
                        {'    '}<Comment>/* Desktop: Three columns */</Comment>{'\n'}
                        {'    '}<Attr>grid-template-columns</Attr>: <Val>repeat(3, 1fr)</Val>;{'\n'}
                        {'  '}{'}'}{'\n'}
                        {'}'}
                      </CodeCard>
                   </div>

                   <div className="w-full md:w-1/2 mt-4 space-y-4">
                       <div className="flex justify-center gap-4 mb-4">
                           <button onClick={() => setDevice('mobile')} className={`px-4 py-2 rounded ${device === 'mobile' ? 'bg-teal-600 text-white' : 'bg-slate-700 text-slate-300'}`}>Mobile</button>
                           <button onClick={() => setDevice('tablet')} className={`px-4 py-2 rounded ${device === 'tablet' ? 'bg-teal-600 text-white' : 'bg-slate-700 text-slate-300'}`}>Tablet</button>
                           <button onClick={() => setDevice('desktop')} className={`px-4 py-2 rounded ${device === 'desktop' ? 'bg-teal-600 text-white' : 'bg-slate-700 text-slate-300'}`}>Desktop</button>
                       </div>
                       
                       <div className="bg-slate-900 border border-slate-700 rounded-xl p-4 transition-all duration-300 mx-auto"
                            style={{ width: device === 'mobile' ? '250px' : device === 'tablet' ? '450px' : '100%' }}>
                           <div className={`grid gap-2 transition-all duration-500`}
                                style={{ 
                                    gridTemplateColumns: device === 'mobile' ? '1fr' : device === 'tablet' ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)' 
                                }}>
                               {[1, 2, 3, 4, 5, 6].map(n => (
                                   <div key={n} className="bg-teal-500/20 border border-teal-500/50 rounded h-16 flex items-center justify-center text-teal-300 font-bold">
                                       Card {n}
                                   </div>
                               ))}
                           </div>
                       </div>
                       <p className="text-center text-slate-400 text-sm">
                           Current: {device === 'mobile' ? '1 Column' : device === 'tablet' ? '2 Columns' : '3 Columns'}
                       </p>
                   </div>
                </div>
             </div>
           </Slide>

           {/* SLIDE 4: Flexbox Layouts (New from rwd.md) */}
           <Slide isActive={currentSlide === 4}>
             <div className="max-w-6xl w-full p-8 z-10">
                <h2 className="text-5xl font-bold mb-8 text-center text-purple-400">Flexbox Layouts 🧘</h2>
                
                <div className="flex flex-col md:flex-row gap-12">
                   <div className="w-full md:w-1/2">
                      <h3 className="text-xl font-bold text-white mb-4">Flexible Card Container</h3>
                      <CodeCard className="text-xs">
                        <Tag>.card-container</Tag> {'{'}{'\n'}
                        {'  '}<Attr>display</Attr>: <Val>flex</Val>;{'\n'}
                        {'  '}<Attr>flex-wrap</Attr>: <Val>wrap</Val>;{'\n'}
                        {'  '}<Attr>gap</Attr>: <Val>1rem</Val>;{'\n'}
                        {'}'}{'\n'}
                        {'\n'}
                        <Tag>.card</Tag> {'{'}{'\n'}
                        {'  '}<Comment>/* Mobile: Full Width */</Comment>{'\n'}
                        {'  '}<Attr>flex</Attr>: <Val>1 1 100%</Val>;{'\n'}
                        {'}'}{'\n'}
                        {'\n'}
                        <Tag>@media</Tag> (<Attr>min-width</Attr>: <Val>768px</Val>) {'{'}{'\n'}
                        {'  '}<Tag>.card</Tag> {'{'}{'\n'}
                        {'    '}<Comment>/* Tablet: 50% width */</Comment>{'\n'}
                        {'    '}<Attr>flex</Attr>: <Val>1 1 calc(50% - 0.5rem)</Val>;{'\n'}
                        {'  '}{'}'}{'\n'}
                        {'}'}
                      </CodeCard>
                   </div>
                   
                   <div className="w-full md:w-1/2">
                      <h3 className="text-xl font-bold text-white mb-4">Why Flexwrap?</h3>
                      <p className="text-slate-300 mb-6">
                          Properties like <code className="text-purple-300">flex-wrap: wrap</code> allow items to flow to the next line if there isn't enough space. 
                          Combined with <code className="text-purple-300">flex-basis</code> or widths, you create robust responsive grids without Grid.
                      </p>
                      
                      <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                          <h4 className="text-sm font-bold text-slate-500 mb-2">Live Example (Resize to see wrap)</h4>
                          <div className="flex flex-wrap gap-2">
                              <div className="flex-grow bg-purple-500/30 border border-purple-500 h-10 rounded min-w-[100px] flex items-center justify-center text-xs">A</div>
                              <div className="flex-grow bg-purple-500/30 border border-purple-500 h-10 rounded min-w-[100px] flex items-center justify-center text-xs">B</div>
                              <div className="flex-grow bg-purple-500/30 border border-purple-500 h-10 rounded min-w-[100px] flex items-center justify-center text-xs">C (Wraps first)</div>
                          </div>
                      </div>
                   </div>
                </div>
             </div>
           </Slide>

           {/* SLIDE 5: Flex Navigation (Updated from rwd.md) */}
           <Slide isActive={currentSlide === 5}>
             <div className="max-w-6xl w-full p-8 z-10">
               <h2 className="text-5xl font-bold mb-8 text-center text-blue-400">Responsive Navbar 🧭</h2>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <CodeCard className="text-xs">
                       <Tag>.nav-menu</Tag> {'{'}{'\n'}
                       {'  '}<Attr>display</Attr>: <Val>flex</Val>;{'\n'}
                       {'  '}<Comment>/* Mobile: Hidden/Stacked */</Comment>{'\n'}
                       {'  '}<Attr>flex-direction</Attr>: <Val>column</Val>;{'\n'}
                       {'  '}<Attr>position</Attr>: <Val>absolute</Val>;{'\n'}
                       {'  '}<Attr>top</Attr>: <Val>100%</Val>;{'\n'}
                       {'  '}<Attr>display</Attr>: <Val>none</Val>; <Comment>/* Or toggle class */</Comment>{'\n'}
                       {'}'}{'\n'}
                       {'\n'}
                       <Tag>@media</Tag> (<Attr>min-width</Attr>: <Val>768px</Val>) {'{'}{'\n'}
                       {'  '}<Tag>.nav-menu</Tag> {'{'}{'\n'}
                       {'    '}<Comment>/* Desktop: Visible Row */</Comment>{'\n'}
                       {'    '}<Attr>flex-direction</Attr>: <Val>row</Val>;{'\n'}
                       {'    '}<Attr>position</Attr>: <Val>static</Val>;{'\n'}
                       {'    '}<Attr>display</Attr>: <Val>flex</Val>;{'\n'}
                       {'  '}{'}'}{'\n'}
                       {'}'}
                   </CodeCard>

                   <div className="bg-slate-200 rounded-xl overflow-hidden shadow-2xl mx-auto w-full text-slate-800 flex flex-col h-full border-4 border-slate-800">
                       <div className="p-4 bg-slate-900 text-white flex justify-between items-center relative">
                           <div className="font-bold text-xl text-blue-400">Logo</div>
                           
                           {/* Desktop Nav */}
                           <div className="hidden md:flex gap-4 text-sm">
                               <span className="hover:text-blue-300 cursor-pointer">Home</span>
                               <span className="hover:text-blue-300 cursor-pointer">About</span>
                               <span className="hover:text-blue-300 cursor-pointer">Contact</span>
                           </div>
                           
                           {/* Mobile Toggle */}
                           <div className="md:hidden cursor-pointer">☰</div>
                       </div>
                       
                       {/* Mobile Menu Preview */}
                       <div className="md:hidden bg-slate-800 text-white p-4 space-y-2 border-t border-slate-700">
                           <div className="text-sm hover:text-blue-300">Home</div>
                           <div className="text-sm hover:text-blue-300">About</div>
                           <div className="text-sm hover:text-blue-300">Contact</div>
                       </div>

                       <div className="flex-1 bg-slate-100 p-8 flex items-center justify-center text-center text-slate-400">
                           <p>
                               <span className="block text-2xl mb-2">👆</span>
                               Resize window to toggle between "Burger + Stack" and "Row".
                           </p>
                       </div>
                   </div>
               </div>
             </div>
           </Slide>

          {/* SLIDE 6: Auto-fit Grid (Pro Tip) */}
          <Slide isActive={currentSlide === 6}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-8 text-center text-emerald-400">Pro Tip: Auto-Fit Grid 🚀</h2>
              
              <div className="flex flex-col md:flex-row gap-12 items-center">
                  <div className="md:w-1/2 space-y-6">
                      <p className="text-slate-300 text-lg">
                          Want responsive grids <strong>without</strong> writing media queries? Use CSS Grid's magical keywords.
                      </p>
                      <CodeCard>
                        <Tag>.grid-container</Tag> {'{'}{'\n'}
                        {'  '}<Attr>display</Attr>: <Val>grid</Val>;{'\n'}
                        {'  '}<Attr>grid-template-columns</Attr>:{'\n'}
                        {'    '}<Val>repeat(auto-fit, minmax(150px, 1fr))</Val>;{'\n'}
                        {'  '}<Attr>gap</Attr>: <Val>1rem</Val>;{'\n'}
                        {'}'}
                      </CodeCard>
                      <ul className="text-sm text-slate-400 list-disc pl-5 space-y-2">
                          <li><strong>minmax(150px, 1fr):</strong> Columns are at least 150px, but stretch to fill space.</li>
                          <li><strong>auto-fit:</strong> Fit as many columns as possible.</li>
                      </ul>
                  </div>
                  <div className="md:w-1/2 w-full">
                       <div className="bg-slate-800 p-4 rounded-xl border border-slate-600 h-64 overflow-hidden resize-x relative group shadow-2xl">
                           <div className="absolute top-2 right-2 text-xs text-slate-500 bg-black/50 px-2 py-1 rounded pointer-events-none z-10">Resize Me ↘</div>
                           <div className="grid gap-2 h-full w-full overflow-auto p-2" style={{
                               gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))'
                           }}>
                               {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                                   <div key={n} className="bg-emerald-500/20 border border-emerald-500 rounded flex items-center justify-center font-bold text-emerald-300 text-lg h-24">
                                       {n}
                                   </div>
                               ))}
                           </div>
                       </div>
                  </div>
              </div>
            </div>
          </Slide>

           {/* SLIDE 7: Common Patterns */}
           <Slide isActive={currentSlide === 7}>
             <div className="max-w-6xl w-full p-8 z-10">
                <h2 className="text-5xl font-bold mb-10 text-center text-yellow-400">Common Patterns 🏗️</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                   <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:scale-105 transition-transform">
                      <div className="h-24 bg-slate-700 rounded-lg mb-4 flex border border-slate-600">
                         <div className="w-1/3 border-r border-slate-600 bg-yellow-500/10"></div>
                         <div className="flex-1"></div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2"><LayoutTemplate size={20} /> Sidebar Layout</h3>
                      <p className="text-sm text-slate-400">Desktop: Sidebar + Main. Mobile: Stack them vertically.</p>
                   </div>

                   <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:scale-105 transition-transform">
                      <div className="h-24 bg-slate-700 rounded-lg mb-4 grid grid-cols-3 gap-1 p-1 border border-slate-600">
                         <div className="bg-blue-500/20 rounded"></div>
                         <div className="bg-blue-500/20 rounded"></div>
                         <div className="bg-blue-500/20 rounded"></div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2"><Grid size={20} /> Card Grid</h3>
                      <p className="text-sm text-slate-400">Classic portfolio/products layout. 1 col (Mob) &rarr; 2 col (Tab) &rarr; 3 col (Desk).</p>
                   </div>

                   <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:scale-105 transition-transform">
                      <div className="h-24 bg-slate-700 rounded-lg mb-4 flex flex-col items-center justify-center border border-slate-600">
                         <div className="w-10 h-2 bg-slate-500 rounded mb-1"></div>
                         <div className="w-16 h-6 bg-pink-500/50 rounded"></div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2"><BoxSelect size={20} /> Centered Hero</h3>
                      <p className="text-sm text-slate-400">Flexbox centering. Padding adjusts based on screen width.</p>
                   </div>
                </div>
             </div>
           </Slide>

          {/* SLIDE 8: Viewport Meta Tag */}
          <Slide isActive={currentSlide === 8}>
            <div className="max-w-4xl w-full p-8 z-10 text-center">
              <h2 className="text-5xl font-bold mb-8 text-red-400">The Magic Tag 🪄</h2>
              <p className="text-xl text-slate-300 mb-8">
                  Without this line in your HTML <code className="text-red-300 bg-red-900/30 px-2 py-1 rounded">&lt;head&gt;</code>, mobile browsers will zoom out your page to look like a desktop site (making it tiny!).
              </p>
              
              <div className="bg-slate-900 p-6 rounded-xl border border-slate-600 shadow-2xl inline-block text-left">
                  <CodeCard>
                    <Tag>&lt;meta</Tag>{'\n'}
                    {'  '}<Attr>name</Attr>=<Val>"viewport"</Val>{'\n'}
                    {'  '}<Attr>content</Attr>=<Val>"width=device-width, initial-scale=1.0"</Val>{'\n'}
                    <Tag>/&gt;</Tag>
                  </CodeCard>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-8 text-left max-w-2xl mx-auto">
                  <div className="bg-slate-800 p-4 rounded border border-red-500/30">
                      <strong className="text-red-400 block mb-1">width=device-width</strong>
                      <span className="text-slate-400 text-sm">Sets page width to match the screen's actual pixels.</span>
                  </div>
                  <div className="bg-slate-800 p-4 rounded border border-red-500/30">
                      <strong className="text-red-400 block mb-1">initial-scale=1.0</strong>
                      <span className="text-slate-400 text-sm">Sets zoom level to 100% on load.</span>
                  </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 9: Responsive Images */}
          <Slide isActive={currentSlide === 9}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-pink-400">Responsive Images 🖼️</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                      <div className="bg-slate-800 p-4 rounded-xl border-l-4 border-pink-500">
                          <h3 className="text-lg font-bold text-white mb-2">The Golden Rule</h3>
                          <p className="text-sm text-slate-300">Always add this CSS reset for images to prevent them from overflowing their containers.</p>
                      </div>
                      <CodeCard>
                        <Tag>img</Tag> {'{'}{'\n'}
                        {'  '}<Attr>max-width</Attr>: <Val>100%</Val>;{'\n'}
                        {'  '}<Attr>height</Attr>: <Val>auto</Val>;{'\n'}
                        {'}'}
                      </CodeCard>
                  </div>

                  <div className="bg-white/5 p-8 rounded-2xl border border-white/10 flex flex-col items-center">
                       <div className="w-48 bg-slate-700 rounded-lg overflow-hidden relative border-2 border-dashed border-slate-500 group resize-x" style={{minWidth: '150px', maxWidth: '100%'}}>
                           <div className="absolute inset-0 flex items-center justify-center text-slate-500 pointer-events-none z-10">
                               <span className="bg-black/50 px-2 rounded text-xs text-white">Resize Container</span>
                           </div>
                           <img 
                            src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1000" 
                            alt="Coding" 
                            className="w-full h-auto object-cover block"
                           />
                       </div>
                       <p className="text-sm text-slate-500 mt-4 text-center max-w-xs">
                           Image scales down, but never gets bigger than its original size or container.
                       </p>
                  </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 10: Performance & Best Practices */}
          <Slide isActive={currentSlide === 10}>
            <div className="max-w-6xl w-full p-8 z-10 text-center">
              <h2 className="text-5xl font-bold mb-8 text-white">Best Practices & Performance 🚀</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-left">
                <div className="bg-slate-800 p-6 rounded-xl border-t-4 border-emerald-500">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-2"><Smartphone size={20} /> Mobile First</h3>
                    <p className="text-slate-400 text-sm">Design for small screens first. It's easier to scale up than down.</p>
                </div>

                <div className="bg-slate-800 p-6 rounded-xl border-t-4 border-blue-500">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-2"><CheckCircle size={20} /> Touch Targets</h3>
                    <p className="text-slate-400 text-sm">Buttons/Links should be at least <strong className="text-blue-300">44px</strong> for easy tapping.</p>
                </div>
                
                 <div className="bg-slate-800 p-6 rounded-xl border-t-4 border-purple-500">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-2"><Zap size={20} /> Animations</h3>
                     <p className="text-slate-400 text-sm">Respect user preferences for reduced motion properties.</p>
                </div>
              </div>

              <div className="bg-slate-900 inline-block text-left p-6 rounded-xl border border-slate-700 mx-auto">
                   <CodeCard>
                       <Comment>/* Disable animations for users who prefer reduced motion */</Comment>{'\n'}
                       <Tag>@media</Tag> (<Attr>prefers-reduced-motion</Attr>: <Val>reduce</Val>) {'{'}{'\n'}
                       {'  '}<Tag>*</Tag> {'{'}{'\n'}
                       {'    '}<Attr>animation-duration</Attr>: <Val>0.01ms</Val> !important;{'\n'}
                       {'    '}<Attr>transition-duration</Attr>: <Val>0.01ms</Val> !important;{'\n'}
                       {'  '}{'}'}{'\n'}
                       {'}'}
                   </CodeCard>
              </div>
            </div>
          </Slide>

          {/* SLIDE 11: Practice */}
          <Slide isActive={currentSlide === 11}>
            <div className="text-center p-8 max-w-5xl z-10">
              <div className="inline-block p-4 bg-white/10 rounded-full mb-6 animate-bounce">
                <LayoutTemplate className="w-16 h-16 text-rose-400" />
              </div>
              <h1 className="text-6xl font-bold mb-8">Homework: Portfolio Layout 🎨</h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                  <div className="bg-slate-800 p-8 rounded-2xl border border-slate-600 shadow-2xl space-y-4">
                      <h3 className="text-xl font-bold text-rose-400 mb-2 border-b border-slate-700 pb-2">Your Mission</h3>
                      <ul className="list-disc pl-6 space-y-2 text-slate-300 text-sm">
                          <li>Create a <strong>Navigation Bar</strong> (Hamburger on Mobile, Row on Desktop).</li>
                          <li>Create a <strong>Project Grid</strong> (1 Col Mobile, 2 Col Tablet, 3 Col Desktop).</li>
                          <li>Add a <strong>Hero Section</strong> with responsive typography.</li>
                          <li>Ensure all <strong className="text-emerald-400">Buttons</strong> are touch-friendly (min 44px).</li>
                      </ul>
                  </div>

                  <div>
                      <h3 className="text-xl font-bold text-white mb-4">Structure Hint</h3>
                      <CodeCard className="text-xs">
                        <Tag>&lt;body&gt;</Tag>{'\n'}
                        {'  '}<Tag>&lt;header&gt;</Tag>...<Tag>&lt;/header&gt;</Tag>{'\n'}
                        {'  '}<Tag>&lt;main&gt;</Tag>{'\n'}
                        {'    '}<Tag>&lt;section</Tag> <Attr>class</Attr>=<Val>"hero"</Val><Tag>&gt;</Tag>...<Tag>&lt;/section&gt;</Tag>{'\n'}
                        {'    '}<Tag>&lt;section</Tag> <Attr>class</Attr>=<Val>"projects"</Val><Tag>&gt;</Tag>{'\n'}
                        {'       '}<Tag>&lt;div</Tag> <Attr>class</Attr>=<Val>"card"</Val><Tag>&gt;</Tag>...<Tag>&lt;/div&gt;</Tag>{'\n'}
                        {'       '}<Tag>&lt;div</Tag> <Attr>class</Attr>=<Val>"card"</Val><Tag>&gt;</Tag>...<Tag>&lt;/div&gt;</Tag>{'\n'}
                        {'    '}<Tag>&lt;/section&gt;</Tag>{'\n'}
                        {'  '}<Tag>&lt;/main&gt;</Tag>{'\n'}
                        {'  '}<Tag>&lt;footer&gt;</Tag>...<Tag>&lt;/footer&gt;</Tag>{'\n'}
                        <Tag>&lt;/body&gt;</Tag>
                      </CodeCard>
                  </div>
              </div>
            </div>
          </Slide>

           {/* SLIDE 12: Summary */}
           <Slide isActive={currentSlide === 12}>
            <div className="text-center p-8 max-w-4xl z-10">
              <h1 className="text-6xl font-bold mb-8">You're a Responsive Pro! 🎓</h1>
              <p className="text-2xl text-slate-300 mb-12">
                  You now have the power to make websites look amazing on any device, from a watch to a TV 📺.
              </p>

              <div className="mt-12">
                <button
                  onClick={() => goToSlide(0)}
                  className="px-8 py-4 bg-rose-600 hover:bg-rose-500 rounded-full font-bold transition-all hover:scale-105 flex items-center gap-2 mx-auto shadow-lg shadow-rose-500/20"
                >
                  <RotateCcw className="w-5 h-5" /> Start Over
                </button>
              </div>
            </div>
          </Slide>

        </>
      )}
    </SlideContainer>
  );
}
