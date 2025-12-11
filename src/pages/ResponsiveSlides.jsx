import { useState } from 'react';
import SlideContainer from '../components/SlideContainer';
import Slide from '../components/Slide';
import CodeCard, { Tag, Attr, Val, Comment } from '../components/CodeCard';
import { Smartphone, Tablet, Monitor, Layout, Maximize, Image, CheckCircle, RotateCcw, Menu, Grid, Move, BoxSelect, CreditCard, LayoutTemplate } from 'lucide-react';

export default function ResponsiveSlides() {
  const [device, setDevice] = useState('desktop');

  return (
    <SlideContainer totalSlides={12} accentColor="rose">
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
                      Responsive Web Design (RWD) makes your web pages look good on all devices. It uses CSS to resize, hide, shrink, enlarge, or move the content to look good on any screen.
                    </p>
                  </div>
                  <div className="flex justify-between gap-4">
                      <div className={`flex flex-col items-center gap-2 p-4 rounded-xl cursor-pointer transition-all ${device === 'mobile' ? 'bg-rose-600 scale-105' : 'bg-slate-800 hover:bg-slate-700'}`} onClick={() => setDevice('mobile')}>
                          <Smartphone /> <span className="text-sm">Mobile</span>
                      </div>
                      <div className={`flex flex-col items-center gap-2 p-4 rounded-xl cursor-pointer transition-all ${device === 'tablet' ? 'bg-rose-600 scale-105' : 'bg-slate-800 hover:bg-slate-700'}`} onClick={() => setDevice('tablet')}>
                          <Tablet /> <span className="text-sm">Tablet</span>
                      </div>
                      <div className={`flex flex-col items-center gap-2 p-4 rounded-xl cursor-pointer transition-all ${device === 'desktop' ? 'bg-rose-600 scale-105' : 'bg-slate-800 hover:bg-slate-700'}`} onClick={() => setDevice('desktop')}>
                          <Monitor /> <span className="text-sm">Desktop</span>
                      </div>
                  </div>
                </div>

                <div className="bg-white/5 p-8 rounded-2xl border border-white/10 flex items-center justify-center">
                     {/* Interactive Device Preview */}
                     <div 
                        className="bg-slate-900 border-4 border-slate-700 rounded-2xl overflow-hidden transition-all duration-500 shadow-2xl flex flex-col"
                        style={{
                            width: device === 'mobile' ? '200px' : device === 'tablet' ? '400px' : '600px',
                            height: '350px'
                        }}
                     >
                         <div className="bg-slate-800 p-2 text-xs text-center text-slate-500 border-b border-slate-700">My Amazing Website</div>
                         <div className="p-4 overflow-auto flex-1 bg-white">
                             <div className={`h-24 rounded-lg mb-4 flex items-center justify-center text-white font-bold transition-colors ${device === 'mobile' ? 'bg-rose-500' : 'bg-blue-500'}`}>
                                 Hero Banner
                             </div>
                             <div className={`grid gap-2 ${device === 'mobile' ? 'grid-cols-1' : 'grid-cols-3'}`}>
                                 <div className="h-20 bg-slate-200 rounded"></div>
                                 <div className="h-20 bg-slate-200 rounded"></div>
                                 <div className="h-20 bg-slate-200 rounded"></div>
                             </div>
                             <p className="text-slate-500 text-xs mt-4">
                                 {device === 'mobile' ? 'Mobile Layout: Single column stuff.' : 'Desktop Layout: Multi-column goodness!'}
                             </p>
                         </div>
                     </div>
                </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 2: Breakpoints & Media Queries */}
          <Slide isActive={currentSlide === 2}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-orange-400">Media Queries 📐</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                      <p className="text-lg text-slate-300">
                          The heart of responsive design. Apply styles <strong className="text-orange-400">only if</strong> the screen size matches a condition.
                      </p>
                      
                      <div className="space-y-4">
                          <div className="bg-slate-800 p-4 rounded-xl border-l-4 border-green-500">
                              <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">Mobile First Strategy</span>
                              <p className="text-sm text-slate-300 mt-1">Start with base styles (mobile), then add <code className="text-orange-300">min-width</code> queries for larger screens.</p>
                          </div>
                      </div>

                      <CodeCard>
                        <Comment>/* Default (Mobile) */</Comment>{'\n'}
                        <Tag>body</Tag> {'{'}{'\n'}
                        {'  '}<Attr>background-color</Attr>: <Val>lightblue</Val>;{'\n'}
                        {'}'}{'\n'}
                        {'\n'}
                        <Comment>/* Tablet & Up */</Comment>{'\n'}
                        <Tag>@media</Tag> (<Attr>min-width</Attr>: <Val>768px</Val>) {'{'}{'\n'}
                        {'  '}<Tag>body</Tag> {'{'}{'\n'}
                        {'    '}<Attr>background-color</Attr>: <Val>lightgreen</Val>;{'\n'}
                        {'  '}{'}'}{'\n'}
                        {'}'}
                      </CodeCard>
                  </div>

                  <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hidden md:flex items-center justify-center">
                      <div className="text-center">
                         <div className="mb-4 text-6xl">🚦</div>
                         <h3 className="text-2xl font-bold text-white mb-2">Common Breakpoints</h3>
                         <ul className="text-left space-y-2 bg-slate-900 p-6 rounded-xl border border-slate-700 font-mono text-sm text-slate-300">
                             <li><span className="text-orange-400">min-width: 640px</span>  → Small Tablets</li>
                             <li><span className="text-orange-400">min-width: 768px</span>  → Tablets (iPad)</li>
                             <li><span className="text-orange-400">min-width: 1024px</span> → Laptops</li>
                             <li><span className="text-orange-400">min-width: 1280px</span> → Desktops</li>
                         </ul>
                      </div>
                  </div>
              </div>
            </div>
          </Slide>

           {/* SLIDE 3: Flex vs Grid (NEW) */}
           <Slide isActive={currentSlide === 3}>
             <div className="max-w-6xl w-full p-8 z-10">
                <h2 className="text-5xl font-bold mb-10 text-center text-purple-400">Flexbox vs Grid 🥊</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="bg-slate-800 p-6 rounded-2xl border-t-8 border-purple-500">
                      <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2"><Move /> Flexbox</h3>
                      <p className="text-slate-300 mb-4 h-12">One-dimensional. Perfect for aligning items in a row OR a column.</p>
                      <ul className="text-sm text-slate-400 space-y-2 mb-6">
                         <li>✅ Aligning icons in a button</li>
                         <li>✅ Navigation bars</li>
                         <li>✅ Centering content vertically/horizontally</li>
                      </ul>
                      <div className="bg-slate-900 p-4 rounded h-32 flex justify-between items-center px-8 border border-slate-700">
                         <div className="w-8 h-8 bg-purple-500 rounded"></div>
                         <div className="w-8 h-8 bg-purple-500 rounded"></div>
                         <div className="w-8 h-8 bg-purple-500 rounded"></div>
                      </div>
                   </div>

                   <div className="bg-slate-800 p-6 rounded-2xl border-t-8 border-emerald-500">
                      <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2"><Grid /> CSS Grid</h3>
                      <p className="text-slate-300 mb-4 h-12">Two-dimensional. Perfect for entire page layouts (Rows AND Columns).</p>
                      <ul className="text-sm text-slate-400 space-y-2 mb-6">
                         <li>✅ Photo galleries</li>
                         <li>✅ Page skeletons (Sidebar + Main + Footer)</li>
                         <li>✅ Complex dashboard layouts</li>
                      </ul>
                      <div className="bg-slate-900 p-4 rounded h-32 grid grid-cols-3 gap-2 border border-slate-700">
                         <div className="bg-emerald-500 rounded col-span-2"></div>
                         <div className="bg-emerald-500 rounded"></div>
                         <div className="bg-emerald-500 rounded"></div>
                         <div className="bg-emerald-500 rounded col-span-2"></div>
                      </div>
                   </div>
                </div>
             </div>
           </Slide>

          {/* SLIDE 4: Responsive Grid Layout */}
          <Slide isActive={currentSlide === 4}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-teal-400">Responsive Grids 🏁</h2>
              
              <div className="flex flex-col md:flex-row gap-12 items-center">
                  <div className="md:w-1/2 space-y-6">
                      <p className="text-slate-300 text-lg">
                          CSS Grid is magic for responsive layouts. Using <code className="bg-white/10 p-1 rounded">repeat()</code> and <code className="bg-white/10 p-1 rounded">minmax()</code>, you can make grids that wrap automatically without media queries!
                      </p>
                      <CodeCard>
                        <Tag>.grid-container</Tag> {'{'}{'\n'}
                        {'  '}<Attr>display</Attr>: <Val>grid</Val>;{'\n'}
                        {'  '}<Comment>/* Magic Line 👇 */</Comment>{'\n'}
                        {'  '}<Attr>grid-template-columns</Attr>:{'\n'}
                        {'    '}<Val>repeat(auto-fit, minmax(150px, 1fr))</Val>;{'\n'}
                        {'  '}<Attr>gap</Attr>: <Val>1rem</Val>;{'\n'}
                        {'}'}
                      </CodeCard>
                  </div>
                  <div className="md:w-1/2 w-full">
                       <div className="bg-slate-800 p-4 rounded-xl border border-slate-600 h-64 overflow-hidden resize-x relative group">
                           <div className="absolute top-2 right-2 text-xs text-slate-500 bg-black/50 px-2 py-1 rounded pointer-events-none">Resize Me ↘</div>
                           <div className="grid gap-2 h-full w-full" style={{
                               gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))'
                           }}>
                               {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                                   <div key={n} className="bg-teal-500/50 border border-teal-500 rounded flex items-center justify-center font-bold text-white text-lg">
                                       {n}
                                   </div>
                               ))}
                           </div>
                       </div>
                  </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 5: Flex Navigation Example */}
          <Slide isActive={currentSlide === 5}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-blue-400">Flex Navigation 🧭</h2>
              
              <div className="space-y-8">
                  <CodeCard className="text-xs md:text-sm">
                      <Tag>.nav</Tag> {'{'}{'\n'}
                      {'  '}<Attr>display</Attr>: <Val>flex</Val>;{'\n'}
                      {'  '}<Attr>justify-content</Attr>: <Val>space-between</Val>; <Comment>/* Logo left, Links right */</Comment>{'\n'}
                      {'  '}<Attr>align-items</Attr>: <Val>center</Val>;{'\n'}
                      {'}'}{'\n'}
                      <Tag>@media</Tag> (<Attr>max-width</Attr>: <Val>600px</Val>) {'{'}{'\n'}
                      {'  '}<Tag>.nav</Tag> {'{'} <Attr>flex-direction</Attr>: <Val>column</Val>; {'}'}{'\n'}
                      {'}'}
                  </CodeCard>

                  <div className="bg-white rounded-xl overflow-hidden shadow-2xl mx-auto w-full max-w-2xl text-slate-800">
                      <div className="p-4 bg-slate-900 text-white flex flex-wrap justify-between items-center gap-4">
                          <div className="font-bold text-xl text-blue-400">Logo</div>
                          <div className="flex gap-4 text-sm">
                              <span className="hover:text-blue-300 cursor-pointer">Home</span>
                              <span className="hover:text-blue-300 cursor-pointer">About</span>
                              <span className="hover:text-blue-300 cursor-pointer">Contact</span>
                          </div>
                      </div>
                      <div className="bg-slate-100 p-8 text-center text-slate-400">
                          Resize your browser to see how this could stack!
                      </div>
                  </div>
              </div>
            </div>
          </Slide>

           {/* SLIDE 6: Common Patterns (NEW) */}
           <Slide isActive={currentSlide === 6}>
             <div className="max-w-6xl w-full p-8 z-10">
                <h2 className="text-5xl font-bold mb-10 text-center text-yellow-400">Common Patterns 🏗️</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                   <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:scale-105 transition-transform">
                      <div className="h-32 bg-slate-700 rounded-lg mb-4 flex border border-slate-600">
                         <div className="w-1/3 border-r border-slate-600 bg-yellow-500/10"></div>
                         <div className="flex-1"></div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2"><LayoutTemplate size={20} /> Sidebar Layout</h3>
                      <p className="text-sm text-slate-400">Sidebar for navigation, main content area for the page. Use Grid.</p>
                   </div>

                   <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:scale-105 transition-transform">
                      <div className="h-32 bg-slate-700 rounded-lg mb-4 grid grid-cols-2 gap-2 p-2 border border-slate-600">
                         <div className="bg-blue-500/20 rounded"></div>
                         <div className="bg-blue-500/20 rounded"></div>
                         <div className="bg-blue-500/20 rounded"></div>
                         <div className="bg-blue-500/20 rounded"></div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2"><CreditCard size={20} /> Card Grid</h3>
                      <p className="text-sm text-slate-400">Repeating cards for products or posts. Use Grid (auto-fit).</p>
                   </div>

                   <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:scale-105 transition-transform">
                      <div className="h-32 bg-slate-700 rounded-lg mb-4 flex flex-col items-center justify-center border border-slate-600">
                         <div className="w-16 h-4 bg-slate-500 rounded mb-2"></div>
                         <div className="w-24 h-8 bg-pink-500/50 rounded"></div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2"><BoxSelect size={20} /> Centered Hero</h3>
                      <p className="text-sm text-slate-400">Content perfectly centered in a large banner. Use Flexbox.</p>
                   </div>
                </div>
             </div>
           </Slide>

          {/* SLIDE 7: Viewport Meta Tag */}
          <Slide isActive={currentSlide === 7}>
            <div className="max-w-4xl w-full p-8 z-10 text-center">
              <h2 className="text-5xl font-bold mb-8 text-red-400">The Magic Tag 🪄</h2>
              <p className="text-xl text-slate-300 mb-8">
                  Without this line of code in your HTML <code className="text-red-300 bg-red-900/30 px-2 py-1 rounded">&lt;head&gt;</code>, responsive design won't work on mobile phones!
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
                      <span className="text-slate-400 text-sm">Sets the page width to follow the screen-width of the device.</span>
                  </div>
                  <div className="bg-slate-800 p-4 rounded border border-red-500/30">
                      <strong className="text-red-400 block mb-1">initial-scale=1.0</strong>
                      <span className="text-slate-400 text-sm">Sets the initial zoom level when the page is first loaded.</span>
                  </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 8: Responsive Images */}
          <Slide isActive={currentSlide === 8}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-pink-400">Responsive Images 🖼️</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-white">Prevent Overflow</h3>
                      <p className="text-slate-300">
                          Images have fixed sizes by default. If an image is 1000px wide, it will cause horizontal scrolling on mobile.
                      </p>
                      <div className="bg-slate-800 p-4 rounded-xl border-l-4 border-pink-500">
                          <p className="text-sm text-slate-300">Always add this CSS reset for images:</p>
                      </div>
                      <CodeCard>
                        <Tag>img</Tag> {'{'}{'\n'}
                        {'  '}<Attr>max-width</Attr>: <Val>100%</Val>;{'\n'}
                        {'  '}<Attr>height</Attr>: <Val>auto</Val>;{'\n'}
                        {'}'}
                      </CodeCard>
                  </div>

                  <div className="bg-white/5 p-8 rounded-2xl border border-white/10 flex flex-col items-center">
                       <div className="w-full h-48 bg-slate-700 rounded-lg overflow-hidden relative border-2 border-dashed border-slate-500">
                           <div className="absolute inset-0 flex items-center justify-center text-slate-500">
                               <Image className="w-12 h-12" />
                           </div>
                           <img 
                            src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1000" 
                            alt="Coding" 
                            className="w-full h-full object-cover"
                           />
                       </div>
                       <p className="text-sm text-slate-500 mt-4 text-center">
                           With <code className="text-pink-400">max-width: 100%</code>, the image never exceeds its container's width.
                       </p>
                  </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 9: Best Practices */}
          <Slide isActive={currentSlide === 9}>
            <div className="max-w-4xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-white">Best Practices 🌟</h2>
              
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-slate-800 p-6 rounded-xl border-l-4 border-emerald-500 flex gap-4 items-center">
                    <CheckCircle className="w-8 h-8 text-emerald-500 shrink-0" />
                    <div>
                        <h3 className="text-xl font-bold text-white">Design Mobile First</h3>
                        <p className="text-slate-400 text-sm">It's easier to scale up (add complexity) than to scale down (remove it).</p>
                    </div>
                </div>

                <div className="bg-slate-800 p-6 rounded-xl border-l-4 border-blue-500 flex gap-4 items-center">
                    <CheckCircle className="w-8 h-8 text-blue-500 shrink-0" />
                    <div>
                        <h3 className="text-xl font-bold text-white">Use Relative Units</h3>
                        <p className="text-slate-400 text-sm">Use <code className="text-blue-300">%</code>, <code className="text-blue-300">rem</code>, or <code className="text-blue-300">vw</code> instead of fixed <code className="text-red-400">px</code> widths.</p>
                    </div>
                </div>

                <div className="bg-slate-800 p-6 rounded-xl border-l-4 border-yellow-500 flex gap-4 items-center">
                    <CheckCircle className="w-8 h-8 text-yellow-500 shrink-0" />
                    <div>
                        <h3 className="text-xl font-bold text-white">Touch Friendly Targets</h3>
                        <p className="text-slate-400 text-sm">Buttons should be at least 44px by 44px for easy tapping on phones.</p>
                    </div>
                </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 10: Practice */}
          <Slide isActive={currentSlide === 10}>
            <div className="text-center p-8 max-w-4xl z-10">
              <div className="inline-block p-4 bg-white/10 rounded-full mb-6 animate-bounce">
                <Layout className="w-16 h-16 text-rose-400" />
              </div>
              <h1 className="text-6xl font-bold mb-8">Homework: Portfolio Layout 🎨</h1>

              <div className="bg-slate-800/80 backdrop-blur-md p-8 rounded-2xl border border-slate-600 text-left max-w-2xl mx-auto shadow-2xl space-y-4">
                  <h3 className="text-xl font-bold text-rose-400 mb-2">Build a responsive profile page:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-slate-300">
                      <li><strong>Mobile:</strong> Stacked layout (Header, About, Projects, Contact).</li>
                      <li><strong>Tablet (768px+):</strong> Projects in a 2-column grid.</li>
                      <li><strong>Desktop (1024px+):</strong> Projects in a 3-column grid. Sidebar for About section.</li>
                      <li><strong>Nav:</strong> Hamburger menu on mobile (optional/advanced) or simple stack vs row.</li>
                  </ul>
              </div>
            </div>
          </Slide>

           {/* SLIDE 11: Summary */}
           <Slide isActive={currentSlide === 11}>
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
