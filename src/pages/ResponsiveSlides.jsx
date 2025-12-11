import { useState } from 'react';
import SlideContainer from '../components/SlideContainer';
import Slide from '../components/Slide';
import CodeCard, { Tag, Attr, Val, Comment } from '../components/CodeCard';
import { Smartphone, Monitor, Tablet, LayoutGrid, Maximize, SmartphoneCharging, Play, CheckCircle, RotateCcw, Image } from 'lucide-react';

export default function ResponsiveSlides() {
  const [activeTab, setActiveTab] = useState('mobile');

  return (
    <SlideContainer totalSlides={9} accentColor="rose">
      {(currentSlide, goToSlide) => (
        <>
          {/* Background Blobs */}
          <div className="fixed inset-0 pointer-events-none">
            <div className="blob bg-rose-600 w-96 h-96 rounded-full top-0 left-0 opacity-20 mix-blend-screen animate-move"></div>
            <div className="blob bg-orange-600 w-96 h-96 rounded-full bottom-0 right-0 opacity-20 mix-blend-screen" style={{animationDelay: '2s'}}></div>
            <div className="blob bg-pink-500 w-80 h-80 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20 mix-blend-screen"></div>
          </div>

          {/* SLIDE 1: Title */}
          <Slide isActive={currentSlide === 0}>
            <div className="text-center p-8 max-w-4xl z-10">
              <div className="inline-block p-6 rounded-3xl bg-gradient-to-br from-rose-500 to-orange-600 mb-6 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-end gap-2 text-white">
                    <Smartphone className="w-12 h-12" />
                    <Tablet className="w-16 h-16" />
                    <Monitor className="w-20 h-20" />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-orange-400 to-yellow-400">
                Responsive Web Design
              </h1>
              <p className="text-2xl text-slate-300 font-light max-w-2xl mx-auto">
                One Codebase, Every Device 📱💻
              </p>
            </div>
          </Slide>

          {/* SLIDE 2: Breakpoints & Media Queries */}
          <Slide isActive={currentSlide === 1}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-rose-400">Breakpoints & Media Queries 📏</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="bg-slate-800 p-6 rounded-xl border border-rose-500/30">
                    <table className="w-full text-left text-slate-300">
                        <thead>
                            <tr className="border-b border-slate-700 text-rose-400">
                                <th className="pb-2">Device</th>
                                <th className="pb-2">Width</th>
                            </tr>
                        </thead>
                        <tbody className="font-mono text-sm">
                            <tr className="border-b border-slate-700/50">
                                <td className="py-3 flex items-center gap-2"><Smartphone className="w-4 h-4"/> Mobile</td>
                                <td className="py-3">&lt; 768px</td>
                            </tr>
                            <tr className="border-b border-slate-700/50">
                                <td className="py-3 flex items-center gap-2"><Tablet className="w-4 h-4"/> Tablet</td>
                                <td className="py-3">768px - 1024px</td>
                            </tr>
                            <tr>
                                <td className="py-3 flex items-center gap-2"><Monitor className="w-4 h-4"/> Desktop</td>
                                <td className="py-3">&ge; 1024px</td>
                            </tr>
                        </tbody>
                    </table>
                  </div>
                  <CodeCard>
                    <Comment>/* Mobile First (Base styles) */</Comment>{'\n'}
                    <Tag>body</Tag> {'{'}{'\n'}
                    {'  '}<Attr>background</Attr>: <Val>white</Val>;{'\n'}
                    {'}'}{'\n'}
                    {'\n'}
                    <Tag>@media</Tag> <Attr>screen</Attr> and (<Attr>min-width</Attr>: <Val>768px</Val>) {'{'}{'\n'}
                    {'  '}<Tag>body</Tag> {'{'} <Attr>background</Attr>: <Val>lightblue</Val>; {'}'}{'\n'}
                    {'}'}
                  </CodeCard>
                </div>

                <div className="bg-white/5 p-8 rounded-2xl border border-white/10 flex flex-col items-center justify-center gap-6">
                    <div className="flex gap-2 mb-4">
                        <button onClick={() => setActiveTab('mobile')} className={`px-4 py-2 rounded flex items-center gap-2 ${activeTab==='mobile' ? 'bg-rose-500 text-white' : 'bg-slate-700 text-slate-400'}`}>
                            <Smartphone className="w-4 h-4" /> Mobile
                        </button>
                        <button onClick={() => setActiveTab('tablet')} className={`px-4 py-2 rounded flex items-center gap-2 ${activeTab==='tablet' ? 'bg-rose-500 text-white' : 'bg-slate-700 text-slate-400'}`}>
                            <Tablet className="w-4 h-4" /> Tablet
                        </button>
                        <button onClick={() => setActiveTab('desktop')} className={`px-4 py-2 rounded flex items-center gap-2 ${activeTab==='desktop' ? 'bg-rose-500 text-white' : 'bg-slate-700 text-slate-400'}`}>
                            <Monitor className="w-4 h-4" /> Desktop
                        </button>
                    </div>
                    
                    <div 
                        className={`transition-all duration-500 ease-in-out bg-white rounded-xl shadow-2xl flex items-center justify-center text-slate-800 font-bold overflow-hidden`}
                        style={{
                            width: activeTab === 'mobile' ? '200px' : activeTab === 'tablet' ? '350px' : '500px',
                            height: '300px',
                            backgroundColor: activeTab === 'mobile' ? 'white' : activeTab === 'tablet' ? 'lightblue' : 'lightgreen'
                        }}
                    >
                        <div className="text-center p-4">
                            <div className="text-2xl mb-2">
                                {activeTab === 'mobile' ? 'Mobile View' : activeTab === 'tablet' ? 'Tablet View' : 'Desktop View'}
                            </div>
                            <div className="font-mono text-sm text-slate-600">
                                {activeTab === 'mobile' ? 'bg: white' : activeTab === 'tablet' ? 'bg: lightblue' : 'bg: lightgreen'}
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 3: Grid Layouts */}
          <Slide isActive={currentSlide === 2}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-orange-400">Responsive Grids 🕸️</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                  <div className="space-y-4">
                      <p className="text-slate-300">Change the number of columns based on screen size using <code className="text-orange-400">grid-template-columns</code>.</p>
                      <CodeCard className="text-sm">
                        <Tag>.card-grid</Tag> {'{'}{'\n'}
                        {'  '}<Attr>display</Attr>: <Val>grid</Val>;{'\n'}
                        {'  '}<Attr>grid-template-columns</Attr>: <Val>1fr</Val>; <Comment>/* Mobile: 1 col */</Comment>{'\n'}
                        {'}'}{'\n'}
                        {'\n'}
                        <Tag>@media</Tag> (<Attr>min-width</Attr>: <Val>768px</Val>) {'{'}{'\n'}
                        {'  '}<Tag>.card-grid</Tag> {'{'}{'\n'}
                        {'    '}<Attr>grid-template-columns</Attr>: <Val>repeat(2, 1fr)</Val>; <Comment>/* Tablet: 2 cols */</Comment>{'\n'}
                        {'  '}{'}'}{'\n'}
                        {'}'}{'\n'}
                        {'\n'}
                        <Tag>@media</Tag> (<Attr>min-width</Attr>: <Val>1024px</Val>) {'{'}{'\n'}
                        {'  '}<Tag>.card-grid</Tag> {'{'}{'\n'}
                        {'    '}<Attr>grid-template-columns</Attr>: <Val>repeat(3, 1fr)</Val>; <Comment>/* Desktop: 3 cols */</Comment>{'\n'}
                        {'  '}{'}'}{'\n'}
                        {'}'}
                      </CodeCard>
                  </div>

                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10 h-full">
                       <div className="flex justify-between items-center text-sm text-slate-400 mb-4 font-mono w-full">
                           <span>Resize Browser ➡️</span>
                           <span className="hidden md:inline lg:hidden text-orange-400 font-bold">Tablet Match</span>
                           <span className="hidden lg:inline text-green-400 font-bold">Desktop Match</span>
                           <span className="inline md:hidden text-rose-400 font-bold">Mobile Match</span>
                       </div>
                       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                           {[1, 2, 3, 4, 5, 6].map(i => (
                               <div key={i} className="bg-gradient-to-br from-orange-500 to-rose-500 h-24 rounded-lg flex items-center justify-center text-white font-bold shadow-lg">
                                   Card {i}
                               </div>
                           ))}
                       </div>
                  </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 4: Flexbox Navigation */}
          <Slide isActive={currentSlide === 3}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-yellow-400">Flex Navigation 🧭</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                   <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 h-full flex flex-col justify-center">
                        <div className="w-full max-w-sm mx-auto bg-white rounded-xl overflow-hidden shadow-2xl">
                             {/* Mock Browser Header */}
                             <div className="bg-slate-100 p-2 border-b flex gap-1">
                                 <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                 <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                 <div className="w-3 h-3 rounded-full bg-green-400"></div>
                             </div>
                             {/* Nav Example */}
                             <div className="bg-slate-800 p-4 text-white flex justify-between items-center relative">
                                 <div className="font-bold">Logo</div>
                                 
                                 {/* Desktop Menu */}
                                 <ul className="hidden md:flex gap-4 text-sm text-slate-300">
                                     <li>Home</li>
                                     <li>About</li>
                                     <li>Contact</li>
                                 </ul>

                                 {/* Mobile Menu Icon */}
                                 <div className="md:hidden">☰</div>
                             </div>
                             <div className="p-8 text-center text-slate-500">
                                 <p className="text-xs mb-2 bg-yellow-100 text-yellow-800 inline-block px-2 rounded">Try Resizing</p>
                                 <p className="text-sm">
                                     On <strong className="text-rose-500">Mobile</strong>, the menu hides behind the ☰.<br/>
                                     On <strong className="text-green-500">Desktop</strong>, it expands to a row.
                                 </p>
                             </div>
                        </div>
                   </div>

                   <div className="space-y-4">
                      <CodeCard className="text-sm">
                        <Tag>.navbar</Tag> {'{'}{'\n'}
                        {'  '}<Attr>display</Attr>: <Val>flex</Val>;{'\n'}
                        {'  '}<Attr>justify-content</Attr>: <Val>space-between</Val>;{'\n'}
                        {'}'}{'\n'}
                        {'\n'}
                        <Tag>.menu</Tag> {'{'}{'\n'}
                        {'  '}<Attr>display</Attr>: <Val>none</Val>; <Comment>/* Mobile: Hidden */</Comment>{'\n'}
                        {'}'}{'\n'}
                        {'\n'}
                        <Tag>@media</Tag> (<Attr>min-width</Attr>: <Val>768px</Val>) {'{'}{'\n'}
                        {'  '}<Tag>.menu</Tag> {'{'}{'\n'}
                        {'    '}<Attr>display</Attr>: <Val>flex</Val>; <Comment>/* Tablet+: Show Row */</Comment>{'\n'}
                        {'    '}<Attr>flex-direction</Attr>: <Val>row</Val>;{'\n'}
                        {'  '}{'}'}{'\n'}
                        {'}'}
                      </CodeCard>
                  </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 5: Essentials */}
          <Slide isActive={currentSlide === 4}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-teal-400">Essential Tech 🛠️</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="bg-slate-800 p-8 rounded-2xl border-l-8 border-teal-500">
                      <div className="flex items-center gap-3 mb-4">
                          <Maximize className="w-8 h-8 text-teal-400" />
                          <h3 className="text-2xl font-bold text-white">1. Viewport Meta Tag</h3>
                      </div>
                      <p className="text-slate-300 mb-6">Critically important! Without this, mobile browsers will zoom out to fit a desktop width, making text tiny.</p>
                      <CodeCard className="text-xs">
                          <Tag>&lt;meta</Tag> <Attr>name</Attr>=<Val>"viewport"</Val> <Attr>content</Attr>=<Val>"width=device-width, initial-scale=1.0"</Val> <Tag>/&gt;</Tag>
                      </CodeCard>
                  </div>

                  <div className="bg-slate-800 p-8 rounded-2xl border-l-8 border-pink-500">
                      <div className="flex items-center gap-3 mb-4">
                          <LayoutGrid className="w-8 h-8 text-pink-400" />
                          <h3 className="text-2xl font-bold text-white">2. Responsive Images</h3>
                      </div>
                      <p className="text-slate-300 mb-6">Ensure images never overflow their container.</p>
                      <CodeCard className="text-xs">
                          <Tag>img</Tag> {'{'}{'\n'}
                          {'  '}<Attr>max-width</Attr>: <Val>100%</Val>;{'\n'}
                          {'  '}<Attr>height</Attr>: <Val>auto</Val>;{'\n'}
                          {'}'}
                      </CodeCard>
                      <div className="mt-4 bg-white/10 rounded-lg p-4 overflow-hidden">
                          <div className="w-[150%] h-8 bg-red-400/20 mb-2 rounded relative">
                              <span className="absolute left-2 text-xs text-red-300">Overflows without max-width :(</span>
                          </div>
                          <div className="w-full h-8 bg-green-400/20 rounded relative">
                              <span className="absolute left-2 text-xs text-green-300">Fits nicely with max-width: 100% :)</span>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 6: Object Fit */}
          <Slide isActive={currentSlide === 5}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-purple-400">Object Fit 🖼️</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                      <div className="bg-slate-800 p-6 rounded-2xl border-l-8 border-purple-500">
                          <h3 className="text-2xl font-bold text-white mb-4">Handling Aspect Ratios</h3>
                          <p className="text-slate-300 mb-4">When resizing images responsively, they can get distorted. <code className="text-purple-400">object-fit</code> fixes this by telling the image how to fit its container.</p>
                      </div>
                      
                      <CodeCard className="text-sm">
                          <Tag>.img-cover</Tag> {'{'}{'\n'}
                          {'  '}<Attr>width</Attr>: <Val>100%</Val>;{'\n'}
                          {'  '}<Attr>height</Attr>: <Val>200px</Val>;{'\n'}
                          {'  '}<Attr>object-fit</Attr>: <Val>cover</Val>; <Comment>/* Crops to fill */</Comment>{'\n'}
                          {'}'}{'\n'}
                          {'\n'}
                          <Tag>.img-contain</Tag> {'{'}{'\n'}
                          {'  '}<Attr>object-fit</Attr>: <Val>contain</Val>; <Comment>/* Show whole image */</Comment>{'\n'}
                          {'}'}
                      </CodeCard>
                  </div>

                  <div className="space-y-8 bg-white/5 p-8 rounded-2xl border border-white/10">
                      <div>
                          <p className="text-sm text-slate-400 mb-2">Original Image (Square)</p>
                          <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg mx-auto">
                              Img
                          </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                              <p className="text-xs text-red-400 font-bold">Without object-fit (Stretch)</p>
                              <div className="w-full h-32 bg-slate-900 rounded-lg overflow-hidden border border-slate-700">
                                  <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold transform scale-x-[2]">
                                      Img
                                  </div>
                              </div>
                          </div>
                          
                          <div className="space-y-2">
                              <p className="text-xs text-green-400 font-bold">object-fit: cover (Crop)</p>
                              <div className="w-full h-32 bg-slate-900 rounded-lg overflow-hidden border border-slate-700 relative group">
                                  <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                                      Img
                                  </div>
                                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-xs text-white transition-opacity">
                                      Cropped Top/Bottom
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 7: Best Practices */}
          <Slide isActive={currentSlide === 6}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-white">Best Practices 🌟</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-slate-800 p-6 rounded-2xl border-t-4 border-rose-500 hover:-translate-y-2 transition-transform">
                      <SmartphoneCharging className="w-12 h-12 text-rose-400 mb-4" />
                      <h3 className="text-xl font-bold text-white mb-2">Mobile First</h3>
                      <p className="text-slate-400 text-sm">Write styles for mobile first, then use <code>min-width</code> media queries to add complexity for larger screens. It's faster and cleaner.</p>
                  </div>

                  <div className="bg-slate-800 p-6 rounded-2xl border-t-4 border-orange-500 hover:-translate-y-2 transition-transform">
                      <CheckCircle className="w-12 h-12 text-orange-400 mb-4" />
                      <h3 className="text-xl font-bold text-white mb-2">Touch Targets</h3>
                      <p className="text-slate-400 text-sm">Fingers are bigger than mouse pointers. Ensure buttons are at least <strong className="text-orange-300">44 x 44px</strong> for easy tapping.</p>
                  </div>

                  <div className="bg-slate-800 p-6 rounded-2xl border-t-4 border-yellow-500 hover:-translate-y-2 transition-transform">
                      <RotateCcw className="w-12 h-12 text-yellow-400 mb-4" />
                      <h3 className="text-xl font-bold text-white mb-2">Testing</h3>
                      <p className="text-slate-400 text-sm">Don't just trust the resize handle. Use DevTools device mode and test on real phones whenever possible.</p>
                  </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 8: Practice */}
          <Slide isActive={currentSlide === 7}>
            <div className="text-center p-8 max-w-4xl z-10">
              <div className="inline-block p-4 bg-white/10 rounded-full mb-6 animate-bounce">
                <Play className="w-16 h-16 text-rose-400" />
              </div>
              <h1 className="text-6xl font-bold mb-8">Practice: Portfolio 💼</h1>

              <div className="bg-slate-800/80 backdrop-blur-md p-8 rounded-2xl border border-slate-600 text-left max-w-3xl mx-auto shadow-2xl space-y-4">
                  <h3 className="text-2xl font-bold text-rose-400">Build a Responsive Layout</h3>
                  <div className="space-y-3 text-slate-300">
                      <p className="flex items-center gap-2"><div className="w-2 h-2 bg-rose-500 rounded-full"></div> <strong>Navigation:</strong> Hamburger menu on mobile, row on desktop.</p>
                      <p className="flex items-center gap-2"><div className="w-2 h-2 bg-rose-500 rounded-full"></div> <strong>Project Grid:</strong> 1 column (mobile) ➡️ 2 columns (tablet) ➡️ 3 columns (desktop).</p>
                      <p className="flex items-center gap-2"><div className="w-2 h-2 bg-rose-500 rounded-full"></div> <strong>Typography:</strong> Readable font sizes on all screens.</p>
                  </div>
                  <div className="mt-4 p-4 bg-black/30 rounded-xl border border-white/10 text-sm font-mono text-slate-400">
                      &lt;nav&gt;...&lt;/nav&gt;<br/>
                      &lt;main class="project-grid"&gt;...&lt;/main&gt;<br/>
                      &lt;footer&gt;...&lt;/footer&gt;
                  </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 9: Summary */}
          <Slide isActive={currentSlide === 8}>
            <div className="text-center p-8 max-w-4xl z-10 flex flex-col items-center justify-center h-full">
               <h2 className="text-5xl font-bold mb-8 text-white">Summary 📝</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-2xl">
                   <div className="bg-rose-500/20 p-6 rounded-xl border border-rose-500/50">
                       <strong className="text-rose-300 block text-lg mb-2">Techniques</strong>
                       <ul className="list-disc pl-4 text-slate-300 space-y-1">
                           <li>Viewport Meta Tag</li>
                           <li>Media Queries (@media)</li>
                           <li>Flexible Grids & Flexbox</li>
                           <li>Fluid Images</li>
                       </ul>
                   </div>
                   <div className="bg-orange-500/20 p-6 rounded-xl border border-orange-500/50">
                       <strong className="text-orange-300 block text-lg mb-2">Goals</strong>
                       <ul className="list-disc pl-4 text-slate-300 space-y-1">
                           <li>Usable on any device</li>
                           <li>Readable text everywhere</li>
                           <li>No horizontal scrolling</li>
                           <li>Fast & Performance friendly</li>
                       </ul>
                   </div>
               </div>
               
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
