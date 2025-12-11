import { useState } from 'react';
import SlideContainer from '../components/SlideContainer';
import Slide from '../components/Slide';
import CodeCard, { Tag, Attr, Val, Comment } from '../components/CodeCard';
import { Settings, Sliders, Sun, Moon, Calculator, Box, CheckCircle, Globe, Palette, RotateCcw } from 'lucide-react';

export default function CssVariablesSlides() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <SlideContainer totalSlides={8} accentColor="emerald">
      {(currentSlide, goToSlide) => (
        <>
          {/* Background Blobs */}
          <div className="fixed inset-0 pointer-events-none">
            <div className="blob bg-emerald-600 w-96 h-96 rounded-full top-0 left-0 opacity-20 mix-blend-screen animate-move"></div>
            <div className="blob bg-teal-600 w-96 h-96 rounded-full bottom-0 right-0 opacity-20 mix-blend-screen" style={{animationDelay: '2s'}}></div>
            <div className="blob bg-green-500 w-80 h-80 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20 mix-blend-screen"></div>
          </div>

          {/* SLIDE 1: Title */}
          <Slide isActive={currentSlide === 0}>
            <div className="text-center p-8 max-w-4xl z-10">
              <div className="inline-block p-6 rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 mb-6 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <Sliders className="w-24 h-24 text-white" />
              </div>
              <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400">
                CSS Variables
              </h1>
              <p className="text-2xl text-slate-300 font-light max-w-2xl mx-auto">
                Custom Properties for Maintainable Code 🛠️
              </p>
            </div>
          </Slide>

          {/* SLIDE 2: Basic Syntax */}
          <Slide isActive={currentSlide === 1}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-emerald-400">The Syntax 🔡</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="bg-slate-800 p-6 rounded-xl border border-emerald-500/30">
                    <h3 className="text-xl font-bold text-emerald-300 mb-4">1. Define with <code className="bg-black/30 px-2 rounded">--</code></h3>
                    <CodeCard className="mb-6">
                      <Tag>:root</Tag> {'{'}{'\n'}
                      {'  '}<Attr>--primary-color</Attr>: <Val>#3498db</Val>;{'\n'}
                      {'  '}<Attr>--font-size</Attr>: <Val>16px</Val>;{'\n'}
                      {'}'}
                    </CodeCard>
                    
                    <h3 className="text-xl font-bold text-emerald-300 mb-4">2. Use with <code className="bg-black/30 px-2 rounded">var()</code></h3>
                    <CodeCard>
                      <Tag>.element</Tag> {'{'}{'\n'}
                      {'  '}<Attr>color</Attr>: <Val>var(--primary-color)</Val>;{'\n'}
                      {'  '}<Attr>font-size</Attr>: <Val>var(--font-size)</Val>;{'\n'}
                      {'}'}
                    </CodeCard>
                  </div>
                </div>

                <div className="bg-white/5 p-8 rounded-2xl border border-white/10 flex flex-col items-center justify-center">
                    <div className="text-center mb-8">
                        <div className="text-6xl mb-4">📦</div>
                        <p className="text-xl text-slate-300">Think of it as a <strong className="text-emerald-400">Label</strong> on a box.</p>
                    </div>
                    <div className="bg-slate-800 p-6 rounded-xl border-l-4 border-emerald-500 w-full max-w-sm">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-mono text-xs text-slate-500">VAR NAME</span>
                            <span className="font-mono text-xs text-slate-500">VALUE</span>
                        </div>
                        <div className="flex justify-between items-center text-lg">
                            <span className="text-emerald-300">--main-color</span>
                            <span className="flex items-center gap-2">
                                <span className="w-4 h-4 bg-blue-500 rounded-full"></span>
                                #3498db
                            </span>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 3: Scopes */}
          <Slide isActive={currentSlide === 2}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-teal-400">Global vs. Local 🌍</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                      <div className="flex items-center gap-3 mb-6">
                          <Globe className="w-8 h-8 text-blue-400" />
                          <h3 className="text-2xl font-bold text-white">Global Scope (:root)</h3>
                      </div>
                      <p className="text-slate-400 mb-4">Available everywhere in the document. Usually defined in <code className="text-emerald-300">:root</code>.</p>
                      <CodeCard>
                        <Tag>:root</Tag> {'{'}{'\n'}
                        {'  '}<Attr>--main-bg</Attr>: <Val>white</Val>;{'\n'}
                        {'}'}
                      </CodeCard>
                  </div>

                  <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                      <div className="flex items-center gap-3 mb-6">
                          <Box className="w-8 h-8 text-orange-400" />
                          <h3 className="text-2xl font-bold text-white">Local Scope</h3>
                      </div>
                      <p className="text-slate-400 mb-4">Available only within the specific element and its children.</p>
                      <CodeCard>
                        <Tag>.card</Tag> {'{'}{'\n'}
                        {'  '}<Attr>--card-padding</Attr>: <Val>20px</Val>;{'\n'}
                        {'}'}
                      </CodeCard>
                  </div>
              </div>

              <div className="mt-8 bg-white/5 p-6 rounded-xl border border-white/10 text-center">
                  <p className="text-lg text-slate-300">
                      Variables cascade! A child element can access variables defined on its parent.
                  </p>
              </div>
            </div>
          </Slide>

          {/* SLIDE 4: Using Variables & Fallbacks */}
          <Slide isActive={currentSlide === 3}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-green-400">Safety Net 🕸️</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-white">Fallback Values</h3>
                      <p className="text-slate-300 text-lg">
                          What if a variable isn't defined? You can provide a backup value as the second argument to <code className="font-mono text-green-300">var()</code>.
                      </p>
                      <CodeCard>
                        <Tag>.box</Tag> {'{'}{'\n'}
                        {'  '}<Comment>/* Use red if --my-color is missing */</Comment>{'\n'}
                        {'  '}<Attr>color</Attr>: <Val>var(--my-color, red)</Val>;{'\n'}
                        {'}'}
                      </CodeCard>
                  </div>

                  <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 flex flex-col gap-6">
                      <div className="p-4 rounded border border-slate-600 bg-slate-900">
                          <div className="text-sm text-slate-500 mb-2">Scenario A: Variable Exists</div>
                          <div style={{'--test-color': '#4ade80'}} className="text-lg font-bold">
                             <span style={{color: 'var(--test-color, red)'}}>I am Green</span> (var used)
                          </div>
                      </div>
                      <div className="p-4 rounded border border-slate-600 bg-slate-900">
                          <div className="text-sm text-slate-500 mb-2">Scenario B: Variable Missing</div>
                          <div className="text-lg font-bold">
                             <span style={{color: 'var(--missing-var, #f87171)'}}>I am Red</span> (fallback used)
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 5: Theme Demo */}
          <Slide isActive={currentSlide === 4}>
            <div className="max-w-6xl w-full p-8 z-10 text-center">
              <h2 className="text-5xl font-bold mb-8 text-purple-400">The Power of Themes 🎨</h2>
              <p className="text-xl text-slate-300 mb-12">Switching themes becomes instant by just changing variable values!</p>

              <div className="flex flex-col md:flex-row gap-8 justify-center items-start">
                  
                  <div className="w-full md:w-1/3 text-left">
                      <CodeCard className="text-xs md:text-sm">
                        <Tag>:root</Tag> {'{'}{'\n'}
                        {'  '}<Attr>--bg</Attr>: <Val>{isDarkTheme ? '#1e293b' : '#ffffff'}</Val>;{'\n'}
                        {'  '}<Attr>--text</Attr>: <Val>{isDarkTheme ? '#f1f5f9' : '#334155'}</Val>;{'\n'}
                        {'  '}<Attr>--accent</Attr>: <Val>{isDarkTheme ? '#818cf8' : '#4f46e5'}</Val>;{'\n'}
                        {'}'}{'\n'}
                        {'\n'}
                        <Tag>.card</Tag> {'{'}{'\n'}
                        {'  '}<Attr>background</Attr>: <Val>var(--bg)</Val>;{'\n'}
                        {'  '}<Attr>color</Attr>: <Val>var(--text)</Val>;{'\n'}
                        {'}'}
                      </CodeCard>
                  </div>

                  <div className="w-full md:w-1/2">
                      <div 
                        className="rounded-3xl p-8 shadow-2xl transition-colors duration-500 border-4 border-slate-500/20"
                        style={{
                            backgroundColor: isDarkTheme ? '#1e293b' : '#ffffff',
                            color: isDarkTheme ? '#f1f5f9' : '#334155'
                        }}
                      >
                          <div className="flex justify-between items-center mb-8">
                              <h3 className="text-2xl font-bold">My App</h3>
                              <button 
                                onClick={() => setIsDarkTheme(!isDarkTheme)}
                                className="p-3 rounded-full transition-colors"
                                style={{
                                    backgroundColor: isDarkTheme ? '#334155' : '#e2e8f0'
                                }}
                              >
                                  {isDarkTheme ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-slate-600" />}
                              </button>
                          </div>

                          <div className="space-y-4">
                              <div className="h-4 w-3/4 rounded opacity-20" style={{backgroundColor: 'currentColor'}}></div>
                              <div className="h-4 w-1/2 rounded opacity-20" style={{backgroundColor: 'currentColor'}}></div>
                              <div className="h-32 w-full rounded-xl mt-6 flex items-center justify-center font-bold text-white transition-colors duration-500"
                                   style={{ backgroundColor: isDarkTheme ? '#818cf8' : '#4f46e5' }}>
                                  Featured Content
                              </div>
                          </div>
                      </div>
                      <p className="mt-4 text-sm text-slate-400">Click the icon to swap variables!</p>
                  </div>

              </div>
            </div>
          </Slide>

          {/* SLIDE 6: Calculations */}
          <Slide isActive={currentSlide === 5}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-orange-400">Calculations 🧮</h2>
              
              <div className="flex flex-col md:flex-row items-center gap-12">
                  <div className="w-full md:w-1/2">
                      <div className="bg-slate-800 p-8 rounded-2xl border-l-8 border-orange-500 mb-6">
                           <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
                               <Calculator className="text-orange-400" /> calc() + var()
                           </h3>
                           <p className="text-slate-300">
                               You can use variables inside <code className="text-orange-300">calc()</code> to create dynamic values based on a base unit.
                           </p>
                      </div>
                      <CodeCard>
                        <Tag>:root</Tag> {'{'}{'\n'}
                        {'  '}<Attr>--base-unit</Attr>: <Val>8px</Val>;{'\n'}
                        {'}'}{'\n'}
                        {'\n'}
                        <Tag>.header</Tag> {'{'}{'\n'}
                        {'  '}<Attr>padding</Attr>: <Val>calc(var(--base-unit) * 2)</Val>;{'\n'}
                        {'  '}<Attr>margin-bottom</Attr>: <Val>calc(var(--base-unit) * 4)</Val>;{'\n'}
                        {'}'}
                      </CodeCard>
                  </div>

                  <div className="w-full md:w-1/2 bg-white/5 p-8 rounded-2xl">
                       <div className="space-y-2">
                           <div className="flex items-center gap-4">
                               <span className="w-24 text-right text-sm text-slate-400">Base Unit:</span>
                               <div className="h-8 w-8 bg-orange-500/20 border border-orange-500 flex items-center justify-center text-xs">1x</div>
                           </div>
                           <div className="flex items-center gap-4">
                               <span className="w-24 text-right text-sm text-slate-400">Padding (2x):</span>
                               <div className="flex gap-1">
                                   <div className="h-8 w-8 bg-orange-500/50 border border-orange-500"></div>
                                   <div className="h-8 w-8 bg-orange-500/50 border border-orange-500"></div>
                               </div>
                           </div>
                           <div className="flex items-center gap-4">
                               <span className="w-24 text-right text-sm text-slate-400">Margin (4x):</span>
                               <div className="flex gap-1">
                                   <div className="h-8 w-8 bg-orange-500/80 border border-orange-500"></div>
                                   <div className="h-8 w-8 bg-orange-500/80 border border-orange-500"></div>
                                   <div className="h-8 w-8 bg-orange-500/80 border border-orange-500"></div>
                                   <div className="h-8 w-8 bg-orange-500/80 border border-orange-500"></div>
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
              <h2 className="text-5xl font-bold mb-12 text-center text-white">Best Practices 🏆</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-slate-800 p-6 rounded-2xl border-t-4 border-emerald-500">
                      <div className="mb-4 bg-emerald-500/20 w-12 h-12 rounded-full flex items-center justify-center">
                          <Tag className="text-emerald-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">Meaningful Names</h3>
                      <p className="text-slate-400 text-sm mb-4">Describe <strong className="text-emerald-300">what it is</strong>, not what it looks like.</p>
                      <div className="p-3 bg-red-900/20 rounded mb-2 text-xs text-red-300">❌ --blue: #007bff;</div>
                      <div className="p-3 bg-green-900/20 rounded text-xs text-green-300">✅ --color-primary: #007bff;</div>
                  </div>

                  <div className="bg-slate-800 p-6 rounded-2xl border-t-4 border-teal-500">
                      <div className="mb-4 bg-teal-500/20 w-12 h-12 rounded-full flex items-center justify-center">
                          <Settings className="text-teal-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">Organize at Root</h3>
                      <p className="text-slate-400 text-sm">Keep all your global variables (colors, fonts, spacing) in <code className="text-teal-300">:root</code> for easy access.</p>
                  </div>

                  <div className="bg-slate-800 p-6 rounded-2xl border-t-4 border-cyan-500">
                      <div className="mb-4 bg-cyan-500/20 w-12 h-12 rounded-full flex items-center justify-center">
                          <Palette className="text-cyan-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">Design Tokens</h3>
                      <p className="text-slate-400 text-sm">Use variables to define your design system tokens (spacing-sm, spacing-md, color-brand, etc).</p>
                  </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 8: Summary */}
          <Slide isActive={currentSlide === 7}>
            <div className="text-center p-8 max-w-4xl z-10">
              <div className="inline-block p-4 bg-white/10 rounded-full mb-6 animate-pulse">
                <CheckCircle className="w-16 h-16 text-emerald-400" />
              </div>
              <h1 className="text-6xl font-bold mb-8">Ready to Refactor! 🧹</h1>

              <div className="bg-slate-800/80 backdrop-blur-md p-8 rounded-2xl border border-slate-600 text-left max-w-2xl mx-auto shadow-2xl space-y-4">
                  <p className="text-xl text-slate-300 leading-relaxed">
                      CSS Variables are widely supported (Chrome 49+, all modern browsers) and act as the backbone for modern CSS architecture.
                  </p>
                  <ul className="grid grid-cols-2 gap-4 mt-6">
                      <li className="flex items-center gap-2 text-emerald-300">
                          <CheckCircle className="w-4 h-4" /> Maintainable
                      </li>
                      <li className="flex items-center gap-2 text-emerald-300">
                          <CheckCircle className="w-4 h-4" /> Dynamic
                      </li>
                      <li className="flex items-center gap-2 text-emerald-300">
                          <CheckCircle className="w-4 h-4" /> Theming
                      </li>
                      <li className="flex items-center gap-2 text-emerald-300">
                          <CheckCircle className="w-4 h-4" /> DRY Code
                      </li>
                  </ul>
              </div>

              <div className="mt-12">
                <button
                  onClick={() => goToSlide(0)}
                  className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 rounded-full font-bold transition-all hover:scale-105 flex items-center gap-2 mx-auto shadow-lg shadow-emerald-500/20"
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
