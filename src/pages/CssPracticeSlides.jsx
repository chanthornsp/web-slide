import SlideContainer from '../components/SlideContainer';
import Slide from '../components/Slide';
import CodeCard, { Tag, Attr, Val, Comment } from '../components/CodeCard';
import { ShoppingBag, Palette, Type, Layout, MousePointer, Download, Layers, Smartphone, CheckCircle, RotateCcw, Eye } from 'lucide-react';
import ecommercePreview from '../assets/e-commerce.png';

export default function CssPracticeSlides() {
  return (
    <SlideContainer totalSlides={8} accentColor="blue">
      {(currentSlide, goToSlide) => (
        <>
          {/* Background Blobs */}
          <div className="fixed inset-0 pointer-events-none">
            <div className="blob bg-blue-600 w-96 h-96 rounded-full top-0 left-0 opacity-20 mix-blend-screen animate-move"></div>
            <div className="blob bg-indigo-600 w-96 h-96 rounded-full bottom-0 right-0 opacity-20 mix-blend-screen" style={{animationDelay: '2s'}}></div>
            <div className="blob bg-purple-500 w-80 h-80 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20 mix-blend-screen"></div>
          </div>

          {/* SLIDE 1: Intro */}
          <Slide isActive={currentSlide === 0}>
            <div className="text-center p-8 max-w-4xl z-10">
              <div className="inline-block p-6 rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600 mb-6 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <ShoppingBag className="w-24 h-24 text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                Project: EliteShop
              </h1>
              <p className="text-2xl text-slate-300 font-light max-w-2xl mx-auto mb-8">
                Building a Premium Ecommerce Design System 🛍️
              </p>
              <div className="bg-slate-800/50 backdrop-blur border border-slate-700 p-6 rounded-2xl max-w-xl mx-auto text-left">
                  <h3 className="text-xl font-bold text-white mb-2">Brand Overview</h3>
                  <ul className="space-y-2 text-slate-300">
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-400"/> Premium, clean, modern aesthetics</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-400"/> Trust & Security oriented</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-400"/> User-friendly & intuitive</li>
                  </ul>
              </div>
            </div>
          </Slide>

          {/* SLIDE 2: Color Palette */}
          <Slide isActive={currentSlide === 1}>
            <div className="max-w-6xl w-full p-8 z-10 overflow-y-auto max-h-screen">
              <h2 className="text-5xl font-bold mb-12 text-center text-blue-400 flex items-center justify-center gap-4">
                <Palette className="w-12 h-12" /> Color Palette
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Primary */}
                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white border-b border-white/10 pb-2">Primary</h3>
                    <div className="space-y-3">
                        <div className="flex items-center gap-4 bg-slate-800 p-3 rounded-lg border border-slate-700">
                            <div className="w-12 h-12 rounded-full shadow-lg" style={{background: '#2563eb'}}></div>
                            <div>
                                <div className="font-bold text-white">Primary Blue</div>
                                <div className="text-xs text-blue-300 font-mono">#2563eb</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 bg-slate-800 p-3 rounded-lg border border-slate-700">
                            <div className="w-12 h-12 rounded-full shadow-lg" style={{background: '#1d4ed8'}}></div>
                            <div>
                                <div className="font-bold text-white">Blue Hover</div>
                                <div className="text-xs text-blue-300 font-mono">#1d4ed8</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Secondary */}
                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white border-b border-white/10 pb-2">Secondary</h3>
                    <div className="space-y-3">
                        <div className="flex items-center gap-4 bg-slate-800 p-3 rounded-lg border border-slate-700">
                            <div className="w-12 h-12 rounded-full shadow-lg bg-gray-900 border border-white/20"></div>
                            <div>
                                <div className="font-bold text-white">Dark Slate</div>
                                <div className="text-xs text-slate-400 font-mono">#1e293b</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 bg-slate-800 p-3 rounded-lg border border-slate-700">
                            <div className="w-12 h-12 rounded-full shadow-lg bg-gray-50 text-black flex items-center justify-center text-xs">Bg</div>
                            <div>
                                <div className="font-bold text-white">Background</div>
                                <div className="text-xs text-slate-400 font-mono">#f8fafc</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Accent */}
                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white border-b border-white/10 pb-2">Accent</h3>
                    <div className="space-y-3">
                        <div className="flex items-center gap-4 bg-slate-800 p-3 rounded-lg border border-slate-700">
                            <div className="w-12 h-12 rounded-full shadow-lg" style={{background: '#f59e0b'}}></div>
                            <div>
                                <div className="font-bold text-white">Accent Orange</div>
                                <div className="text-xs text-amber-400 font-mono">#f59e0b</div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>

               <div className="mt-8 bg-slate-800 p-6 rounded-2xl border border-slate-700">
                  <h3 className="text-xl font-bold text-white mb-4">Gradients</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="h-24 rounded-xl flex items-center justify-center text-white font-bold shadow-lg" 
                           style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>Hero</div>
                      <div className="h-24 rounded-xl flex items-center justify-center text-white font-bold shadow-lg" 
                           style={{background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)'}}>Newsletter</div>
                      <div className="h-24 rounded-xl flex items-center justify-center text-slate-800 font-bold shadow-lg" 
                           style={{background: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)'}}>Product</div>
                  </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 3: Typography */}
          <Slide isActive={currentSlide === 2}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-indigo-400 flex items-center justify-center gap-4">
                <Type className="w-12 h-12" /> Typography
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 <div className="space-y-8">
                     <div className="bg-slate-800 p-6 rounded-xl border-l-4 border-indigo-500">
                         <h3 className="text-2xl font-bold text-white mb-2">Font Family</h3>
                         <p className="text-2xl font-light text-slate-300 font-sans">"Segoe UI", Tahoma, sans-serif</p>
                         <p className="text-sm text-slate-400 mt-2">Clean, native system fonts</p>
                     </div>

                     <div className="space-y-4">
                         <div className="flex items-baseline gap-4 border-b border-white/10 pb-2">
                             <span className="text-3xl font-bold text-white">H1</span>
                             <span className="text-slate-400">32px, Bold (Logo)</span>
                         </div>
                         <div className="flex items-baseline gap-4 border-b border-white/10 pb-2">
                             <span className="text-2xl font-bold text-white">H2</span>
                             <span className="text-slate-400">56px (Hero), 40px (Section)</span>
                         </div>
                         <div className="flex items-baseline gap-4 border-b border-white/10 pb-2">
                             <span className="text-xl font-bold text-white">H3</span>
                             <span className="text-slate-400">20-24px, Semi-Bold</span>
                         </div>
                         <div className="flex items-baseline gap-4">
                             <span className="text-lg text-white">Body</span>
                             <span className="text-slate-400">16px Regular, 1.6 Line Height</span>
                         </div>
                     </div>
                 </div>

                 <div className="bg-white text-slate-800 p-8 rounded-2xl shadow-2xl">
                     <h1 className="text-4xl font-bold mb-4" style={{color: '#1f2937'}}>Modern Commerce</h1>
                     <h2 className="text-2xl font-bold mb-4" style={{color: '#374151'}}>Featured Products</h2>
                     <p className="mb-4 text-lg" style={{color: '#6b7280', lineHeight: 1.6}}>
                         Experience the best in class design with our new collection. 
                         Every detail is crafted for perfection and user delight.
                     </p>
                     <div className="flex gap-2">
                         <span className="text-xs font-bold px-3 py-1 bg-blue-100 text-blue-600 rounded-full">New Arrival</span>
                         <span className="text-xs text-gray-400 flex items-center">120 reviews</span>
                     </div>
                 </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 4: Components */}
          <Slide isActive={currentSlide === 3}>
            <div className="max-w-6xl w-full p-8 z-10 overflow-y-auto max-h-screen">
              <h2 className="text-5xl font-bold mb-8 text-center text-purple-400 flex items-center justify-center gap-4">
                <MousePointer className="w-12 h-12" /> Components
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Buttons */}
                  <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-white">Buttons</h3>
                      <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 flex flex-wrap gap-4 items-center">
                          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition">Primary</button>
                          <button className="px-6 py-3 bg-transparent border-2 border-blue-600 text-blue-400 rounded-lg font-semibold hover:bg-blue-600/10 transition">Outline</button>
                      </div>
                      <CodeCard className="text-xs">
                        <Tag>.btn-primary</Tag> {'{'}{'\n'}
                        {'  '}<Attr>background</Attr>: <Val>#2563eb</Val>;{'\n'}
                        {'  '}<Attr>color</Attr>: <Val>white</Val>;{'\n'}
                        {'  '}<Attr>padding</Attr>: <Val>12px 30px</Val>;{'\n'}
                        {'  '}<Attr>border-radius</Attr>: <Val>8px</Val>;{'\n'}
                        {'}'}
                      </CodeCard>
                  </div>

                  {/* Cards */}
                  <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-white">Product Card</h3>
                      <div className="bg-white p-6 rounded-2xl shadow-xl text-slate-800 max-w-sm mx-auto transform hover:-translate-y-2 transition duration-300">
                          <div className="h-40 bg-gray-100 rounded-xl mb-4 flex items-center justify-center font-bold text-gray-300">Image</div>
                          <div className="flex justify-between items-start mb-2">
                              <h4 className="font-bold text-lg">Premium Watch</h4>
                              <span className="font-bold text-blue-600">$129</span>
                          </div>
                          <p className="text-sm text-gray-500 mb-4">Elegant styling for modern life.</p>
                          <button className="w-full py-2 bg-blue-600 text-white rounded-lg font-semibold text-sm">Add to Cart</button>
                      </div>
                      <CodeCard className="text-xs">
                        <Tag>.card</Tag> {'{'}{'\n'}
                        {'  '}<Attr>background</Attr>: <Val>white</Val>;{'\n'}
                        {'  '}<Attr>border-radius</Attr>: <Val>8px</Val>;{'\n'}
                        {'  '}<Attr>box-shadow</Attr>: <Val>0 4px 6px -1px rgba(0,0,0,0.1)</Val>;{'\n'}
                        {'  '}<Attr>transition</Attr>: <Val>transform 0.3s</Val>;{'\n'}
                        {'}'}
                      </CodeCard>
                  </div>
              </div>
            </div>
          </Slide>

           {/* SLIDE 5: Layout */}
           <Slide isActive={currentSlide === 4}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-teal-400 flex items-center justify-center gap-4">
                <Layout className="w-12 h-12" /> Layout & Spacing
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                      <h3 className="text-2xl font-bold text-white mb-6">Grid System</h3>
                      <div className="space-y-2">
                          <div className="flex gap-4">
                              <div className="flex-1 bg-teal-500/20 border border-teal-500 h-16 rounded flex items-center justify-center text-teal-300">1</div>
                              <div className="flex-1 bg-teal-500/20 border border-teal-500 h-16 rounded flex items-center justify-center text-teal-300">2</div>
                              <div className="flex-1 bg-teal-500/20 border border-teal-500 h-16 rounded flex items-center justify-center text-teal-300">3</div>
                              <div className="flex-1 bg-teal-500/20 border border-teal-500 h-16 rounded flex items-center justify-center text-teal-300">4</div>
                          </div>
                          <p className="text-sm text-slate-400 mt-2">Features: 4 Columns</p>
                          
                          <div className="flex gap-4 mt-6">
                              <div className="flex-1 bg-blue-500/20 border border-blue-500 h-24 rounded flex items-center justify-center text-blue-300">Prod 1</div>
                              <div className="flex-1 bg-blue-500/20 border border-blue-500 h-24 rounded flex items-center justify-center text-blue-300">Prod 2</div>
                              <div className="flex-1 bg-blue-500/20 border border-blue-500 h-24 rounded flex items-center justify-center text-blue-300">Prod 3</div>
                          </div>
                          <p className="text-sm text-slate-400 mt-2">Products: 3 Columns</p>
                      </div>
                  </div>

                  <div className="space-y-6">
                      <div className="bg-slate-800 p-6 rounded-xl border-l-4 border-orange-500">
                          <h3 className="text-xl font-bold text-white mb-2">Container</h3>
                          <ul className="text-slate-300 space-y-1">
                              <li>Max-width: <strong>1200px</strong></li>
                              <li>Padding: <strong>0 20px</strong></li>
                              <li>Aligned: <strong>Center</strong></li>
                          </ul>
                      </div>
                      
                      <div className="bg-slate-800 p-6 rounded-xl border-l-4 border-pink-500">
                          <h3 className="text-xl font-bold text-white mb-2">Spacing Scale</h3>
                          <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-300">
                              <span className="p-2 bg-slate-900 rounded">4px</span>
                              <span className="p-2 bg-slate-900 rounded">8px</span>
                              <span className="p-2 bg-slate-900 rounded">16px</span>
                              <span className="p-2 bg-slate-900 rounded">24px</span>
                              <span className="p-2 bg-slate-900 rounded">32px</span>
                              <span className="p-2 bg-slate-900 rounded">64px</span>
                          </div>
                      </div>

                      <div className="bg-slate-800 p-6 rounded-xl border-l-4 border-green-500">
                          <h3 className="text-xl font-bold text-white mb-2">Breakpoints</h3>
                          <ul className="text-slate-300 space-y-1">
                              <li>Mobile: <strong>&lt; 768px</strong></li>
                              <li>Tablet: <strong>768px - 1024px</strong></li>
                              <li>Desktop: <strong>&gt; 1024px</strong></li>
                          </ul>
                      </div>
                  </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 6: Assignment */}
          <Slide isActive={currentSlide === 5}>
            <div className="text-center p-8 max-w-4xl z-10">
              <div className="inline-block p-4 bg-white/10 rounded-full mb-6 animate-bounce">
                <Download className="w-16 h-16 text-yellow-400" />
              </div>
              <h1 className="text-6xl font-bold mb-8">Your Mission 🚀</h1>

              <div className="bg-slate-800/80 backdrop-blur-md p-8 rounded-2xl border border-slate-600 text-left max-w-3xl mx-auto shadow-2xl space-y-6">
                  
                  <div className="p-4 bg-blue-900/30 border border-blue-500/30 rounded-xl flex items-center justify-between group cursor-pointer hover:bg-blue-900/50 transition">
                      <div className="flex items-center gap-4">
                          <Layers className="w-8 h-8 text-blue-400" />
                          <div>
                              <h3 className="font-bold text-white">1. Structure the Project</h3>
                              <p className="text-sm text-slate-400">Create <code className="text-blue-300">index.html</code> and <code className="text-blue-300">css/styles.css</code></p>
                          </div>
                      </div>
                  </div>

                  <div className="p-4 bg-purple-900/30 border border-purple-500/30 rounded-xl flex items-center justify-between">
                      <div className="flex items-center gap-4">
                          <ShoppingBag className="w-8 h-8 text-purple-400" />
                          <div>
                              <h3 className="font-bold text-white">2. Build the Layout</h3>
                              <p className="text-sm text-slate-400">Implement Header (Flex), Hero (Flex), Categories (Grid), Products (Grid).</p>
                          </div>
                      </div>
                  </div>

                  <div className="p-4 bg-green-900/30 border border-green-500/30 rounded-xl flex items-center justify-between">
                      <div className="flex items-center gap-4">
                          <Download className="w-8 h-8 text-green-400" />
                          <div>
                              <h3 className="font-bold text-white">3. Download Assets</h3>
                              <p className="text-sm text-slate-400">Get images & icons from the repository.</p>
                          </div>
                      </div>
                      <a href="https://github.com/chanthornsp/webdev2/raw/refs/heads/main/assets.zip" className="px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg font-bold text-sm transition">
                          Download .zip
                      </a>
                  </div>

              </div>
            </div>
          </Slide>

            {/* SLIDE 7: Expected Output */}
          <Slide isActive={currentSlide === 6}>
            <div className="max-w-6xl w-full p-8 z-10 flex flex-col items-center justify-center h-full">
               <h2 className="text-4xl font-bold mb-8 text-white flex items-center gap-4">
                <Eye className="w-10 h-10 text-blue-400" /> Expected Output
              </h2>
              
              <div className="relative group max-w-4xl w-full rounded-xl overflow-hidden shadow-2xl border-[8px] border-slate-800 bg-slate-800 transform hover:scale-[1.02] transition-transform duration-500">
                  {/* Browser Mockup Header */}
                  <div className="h-8 bg-slate-800 flex items-center px-4 gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <div className="ml-4 flex-1 bg-slate-700/50 h-5 rounded-md text-[10px] flex items-center px-2 text-slate-400 font-mono">
                          localhost:3000
                      </div>
                  </div>
                  {/* Image Container with Scroll */}
                  <div className="max-h-[60vh] overflow-y-auto bg-white custom-scrollbar">
                     <img 
                        src={ecommercePreview} 
                        alt="Final Project Preview" 
                        className="w-full h-auto object-cover"
                      />
                  </div>
                  
                  {/* Overlay prompt */}
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      <span className="text-white font-bold text-xl px-6 py-3 bg-blue-600 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                          Goal: Pixel Perfection 🎯
                      </span>
                  </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 8: Footer/Reset */}
          <Slide isActive={currentSlide === 7}>
             <div className="flex flex-col items-center justify-center h-full z-10 p-8">
                 <h2 className="text-5xl font-bold mb-8 text-white">Good Luck! 👨‍💻</h2>
                 <p className="text-xl text-slate-300 mb-12 max-w-2xl text-center">
                     Remember to follow the guidelines strictly. Consistency is key to a premium feel.
                 </p>
                 <button
                  onClick={() => goToSlide(0)}
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-full font-bold transition-all hover:scale-105 flex items-center gap-2 shadow-lg shadow-blue-500/20"
                >
                  <RotateCcw className="w-5 h-5" /> Review Guidelines
                </button>
             </div>
          </Slide>

        </>
      )}
    </SlideContainer>
  );
}
