import { useState } from 'react';
import SlideContainer from '../components/SlideContainer';
import Slide from '../components/Slide';
import CodeCard, { Tag, Attr, Val, Comment } from '../components/CodeCard';
import { Settings, Sliders, Sun, Moon, Calculator, Box, CheckCircle, Globe, Palette, RotateCcw, Smartphone, Monitor, XCircle, Layout } from 'lucide-react';

export default function CssVariablesSlides() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <SlideContainer totalSlides={11} accentColor="emerald">
      {(currentSlide, goToSlide) => (
        <>
          {/* Background Blobs */}
          <div className="fixed inset-0 pointer-events-none">
            <div className="blob bg-emerald-600 w-96 h-96 rounded-full top-0 left-0 opacity-20 mix-blend-screen animate-move"></div>
            <div className="blob bg-teal-600 w-96 h-96 rounded-full bottom-0 right-0 opacity-20 mix-blend-screen" style={{animationDelay: '2s'}}></div>
            <div className="blob bg-green-500 w-80 h-80 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20 mix-blend-screen"></div>
          </div>

          {/* SLIDE 0: Title */}
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

          {/* SLIDE 1: Basic Syntax */}
          <Slide isActive={currentSlide === 1}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-emerald-400">Basic Syntax 🔡</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="bg-slate-800 p-6 rounded-xl border border-emerald-500/30">
                    <h3 className="text-xl font-bold text-emerald-300 mb-4">1. Define</h3>
                    <CodeCard className="mb-6">
                      <Tag>:root</Tag> {'{'}{'\n'}
                      {'  '}<Attr>--primary-color</Attr>: <Val>#3498db</Val>;{'\n'}
                      {'  '}<Attr>--font-size</Attr>: <Val>16px</Val>;{'\n'}
                      {'}'}
                    </CodeCard>
                    
                    <h3 className="text-xl font-bold text-emerald-300 mb-4">2. Use</h3>
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
                        <p className="text-xl text-slate-300">Variables store values for reuse throughout your stylesheet.</p>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-xl border-l-4 border-emerald-500 w-full">
                        <div className="flex justify-between items-center text-lg">
                            <span className="text-emerald-300 font-mono">--primary-color</span>
                            <span className="flex items-center gap-2">
                                <span className="w-4 h-4 bg-[#3498db] rounded-full"></span>
                                #3498db
                            </span>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 2: Defining Variables (Global vs Local) */}
          <Slide isActive={currentSlide === 2}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-teal-400">Defining Variables 🌍</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                      <div className="flex items-center gap-3 mb-4">
                          <Globe className="w-8 h-8 text-blue-400" />
                          <h3 className="text-2xl font-bold text-white">Global Scope (Root)</h3>
                      </div>
                      <CodeCard>
                        <Tag>:root</Tag> {'{'}{'\n'}
                        {'  '}<Attr>--main-bg-color</Attr>: <Val>#ffffff</Val>;{'\n'}
                        {'  '}<Attr>--main-text-color</Attr>: <Val>#333333</Val>;{'\n'}
                        {'  '}<Attr>--border-radius</Attr>: <Val>8px</Val>;{'\n'}
                        {'  '}<Attr>--spacing-unit</Attr>: <Val>1rem</Val>;{'\n'}
                        {'}'}
                      </CodeCard>
                  </div>

                  <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                      <div className="flex items-center gap-3 mb-4">
                          <Box className="w-8 h-8 text-orange-400" />
                          <h3 className="text-2xl font-bold text-white">Local Scope (Element)</h3>
                      </div>
                      <CodeCard>
                        <Tag>.card</Tag> {'{'}{'\n'}
                        {'  '}<Attr>--card-padding</Attr>: <Val>2rem</Val>;{'\n'}
                        {'  '}<Attr>--card-shadow</Attr>: <Val>0 2px 10px rgba(0,0,0,0.1)</Val>;{'\n'}
                        {'\n'}
                        {'  '}<Attr>padding</Attr>: <Val>var(--card-padding)</Val>;{'\n'}
                        {'  '}<Attr>box-shadow</Attr>: <Val>var(--card-shadow)</Val>;{'\n'}
                        {'}'}
                      </CodeCard>
                  </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 3: Using Variables & Fallbacks */}
          <Slide isActive={currentSlide === 3}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-green-400">Using & Fallbacks 🕸️</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                  <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-white">Basic Usage</h3>
                      <CodeCard>
                        <Tag>.button</Tag> {'{'}{'\n'}
                        {'  '}<Attr>background-color</Attr>: <Val>var(--primary-color)</Val>;{'\n'}
                        {'  '}<Attr>color</Attr>: <Val>var(--button-text-color)</Val>;{'\n'}
                        {'  '}<Attr>padding</Attr>: <Val>var(--spacing-unit)</Val>;{'\n'}
                        {'}'}
                      </CodeCard>
                  </div>

                  <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-white">Fallback Values</h3>
                      <p className="text-slate-300">
                          Use a backup value if the variable is not defined.
                      </p>
                      <CodeCard>
                        <Tag>.element</Tag> {'{'}{'\n'}
                        {'  '}<Comment>/* Use #000000 if undefined */</Comment>{'\n'}
                        {'  '}<Attr>color</Attr>: <Val>var(--custom-color, #000000)</Val>;{'\n'}
                        {'\n'}
                        {'  '}<Comment>/* Multiple fallbacks */</Comment>{'\n'}
                        {'  '}<Attr>font-family</Attr>: <Val>var(--custom-font, var(--system-font, sans-serif))</Val>;{'\n'}
                        {'}'}
                      </CodeCard>
                  </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 4: Theme System */}
          <Slide isActive={currentSlide === 4}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-8 text-center text-purple-400">Theme System 🎨</h2>
              
              <div className="flex flex-col md:flex-row gap-8 justify-center items-start">
                  <div className="w-full md:w-5/12">
                      <CodeCard className="text-sm">
                        <Tag>:root</Tag> {'{'}{'\n'}
                        {'  '}<Comment>/* Light theme */</Comment>{'\n'}
                        {'  '}<Attr>--bg-color</Attr>: <Val>#ffffff</Val>;{'\n'}
                        {'  '}<Attr>--text-color</Attr>: <Val>#333333</Val>;{'\n'}
                        {'  '}<Attr>--accent-color</Attr>: <Val>#007bff</Val>;{'\n'}
                        {'}'}{'\n'}
                        {'\n'}
                        <Tag>.dark</Tag> {'{'}{'\n'}
                        {'  '}<Comment>/* Dark theme */</Comment>{'\n'}
                        {'  '}<Attr>--bg-color</Attr>: <Val>#121212</Val>;{'\n'}
                        {'  '}<Attr>--text-color</Attr>: <Val>#ffffff</Val>;{'\n'}
                        {'  '}<Attr>--accent-color</Attr>: <Val>#4fc3f7</Val>;{'\n'}
                        {'}'}{'\n'}
                        {'\n'}
                        <Tag>body</Tag> {'{'}{'\n'}
                        {'  '}<Attr>background-color</Attr>: <Val>var(--bg-color)</Val>;{'\n'}
                        {'  '}<Attr>color</Attr>: <Val>var(--text-color)</Val>;{'\n'}
                        {'}'}
                      </CodeCard>
                  </div>

                  <div className="w-full md:w-7/12">
                      <div 
                        className={`rounded-3xl p-8 shadow-2xl transition-all duration-500 border-4 ${isDarkTheme ? 'border-slate-700' : 'border-slate-200'}`}
                        style={{
                            backgroundColor: isDarkTheme ? '#121212' : '#ffffff',
                            color: isDarkTheme ? '#ffffff' : '#333333'
                        }}
                      >
                          <div className="flex justify-between items-center mb-8">
                              <h3 className="text-2xl font-bold">Theme Preview</h3>
                              <button 
                                onClick={() => setIsDarkTheme(!isDarkTheme)}
                                className="p-3 rounded-full transition-colors flex items-center gap-2 font-bold text-sm"
                                style={{
                                    backgroundColor: isDarkTheme ? '#333333' : '#e2e8f0',
                                    color: isDarkTheme ? '#ffffff' : '#333333' 
                                }}
                              >
                                  {isDarkTheme ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
                                  Toggle Class .dark
                              </button>
                          </div>

                          <div className="space-y-4">
                              <div className="p-4 rounded-xl" style={{ backgroundColor: isDarkTheme ? '#333' : '#f0f0f0' }}>
                                  <h4 className="font-bold mb-2">Content Card</h4>
                                  <p className="opacity-80">This component uses standard variables that change when the parent class changes.</p>
                              </div>
                              <button 
                                className="w-full py-3 rounded-lg font-bold text-white transition-colors"
                                style={{ backgroundColor: isDarkTheme ? '#4fc3f7' : '#007bff', color: isDarkTheme ? '#000' : '#fff' }}
                              >
                                Action Button
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          </Slide>

           {/* SLIDE 5: Calculations */}
           <Slide isActive={currentSlide === 5}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-orange-400">Calculations 🧮</h2>
              
              <div className="flex flex-col md:flex-row items-center gap-12">
                  <div className="w-full md:w-1/2">
                      <div className="bg-slate-800 p-6 rounded-2xl border-l-8 border-orange-500 mb-6">
                           <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-2">
                               <Calculator className="text-orange-400" /> calc()
                           </h3>
                           <p className="text-slate-300">
                               Combine <code className="text-orange-300">var()</code> with <code className="text-orange-300">calc()</code> for dynamic values.
                           </p>
                      </div>
                      <CodeCard>
                        <Tag>:root</Tag> {'{'}{'\n'}
                        {'  '}<Attr>--base-spacing</Attr>: <Val>1rem</Val>;{'\n'}
                        {'  '}<Attr>--header-height</Attr>: <Val>60px</Val>;{'\n'}
                        {'}'}{'\n'}
                        {'\n'}
                        <Tag>.content</Tag> {'{'}{'\n'}
                        {'  '}<Comment>/* 2rem */</Comment>{'\n'}
                        {'  '}<Attr>padding</Attr>: <Val>calc(var(--base-spacing) * 2)</Val>;{'\n'}
                        {'  '}<Comment>/* 60px + 1rem */</Comment>{'\n'}
                        {'  '}<Attr>margin-top</Attr>: <Val>calc(var(--header-height) + var(--base-spacing))</Val>;{'\n'}
                        {'}'}
                      </CodeCard>
                  </div>

                  <div className="w-full md:w-1/2 bg-white/5 p-8 rounded-2xl border border-white/10">
                       <div className="space-y-4">
                           <div className="flex items-center gap-4">
                               <span className="w-32 text-right text-sm text-slate-400 font-mono">--base-spacing</span>
                               <div className="h-4 w-16 bg-orange-500/20 border border-orange-500 rounded flex items-center justify-center text-[10px]">1rem</div>
                           </div>
                           <div className="flex items-center gap-4">
                               <span className="w-32 text-right text-sm text-slate-400 font-mono">padding (x2)</span>
                               <div className="h-8 w-32 bg-orange-500/50 border border-orange-500 rounded flex items-center justify-center text-xs">2rem</div>
                           </div>
                       </div>
                  </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 6: Responsive (Common Use Case) */}
           <Slide isActive={currentSlide === 6}>
             <div className="max-w-6xl w-full p-8 z-10 text-center">
                 <h2 className="text-5xl font-bold mb-8 text-cyan-400">Responsive Design 📱</h2>
                 <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
                    A common use case: change standard values at breakpoints without rewriting all properties.
                 </p>
                 
                 <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                    <div className="w-full max-w-lg text-left">
                        <CodeCard>
                           <Tag>:root</Tag> {'{'}{'\n'}
                           {'  '}<Attr>--text-size</Attr>: <Val>16px</Val>;{'\n'}
                           {'}'}{'\n'}
                           {'\n'}
                           <Tag>@media</Tag> (<Attr>min-width</Attr>: <Val>1024px</Val>) {'{'}{'\n'}
                           {'  '}<Tag>:root</Tag> {'{'}{'\n'}
                           {'    '}<Attr>--text-size</Attr>: <Val>20px</Val>;{'\n'}
                           {'  '}{'}'}{'\n'}
                           {'}'}
                        </CodeCard>
                    </div>
                 </div>
             </div>
           </Slide>

          {/* SLIDE 7: Best Practice - Naming */}
          <Slide isActive={currentSlide === 7}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-8 text-center text-white">Best Practice: Naming 🏷️</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-slate-800 p-6 rounded-2xl border-t-4 border-red-500">
                      <div className="flex items-center gap-2 mb-4 text-red-400">
                          <XCircle />
                          <h3 className="text-xl font-bold">Avoid Generic Names</h3>
                      </div>
                      <p className="text-slate-400 text-sm mb-4">Don't name variables after their appearance. What happens if the blue variable becomes red?</p>
                      <CodeCard>
                         <Tag>:root</Tag> {'{'}{'\n'}
                         {'  '}<Attr>--blue</Attr>: <Val>#007bff</Val>;{'\n'}
                         {'  '}<Attr>--big</Attr>: <Val>2rem</Val>;{'\n'}
                         {'  '}<Attr>--size1</Attr>: <Val>2rem</Val>;{'\n'}
                         {'}'}
                      </CodeCard>
                  </div>

                  <div className="bg-slate-800 p-6 rounded-2xl border-t-4 border-emerald-500">
                      <div className="flex items-center gap-2 mb-4 text-emerald-400">
                          <CheckCircle />
                          <h3 className="text-xl font-bold">Use Semantic Names</h3>
                      </div>
                      <p className="text-slate-400 text-sm mb-4">Describe the purpose of the variable.</p>
                      <CodeCard>
                         <Tag>:root</Tag> {'{'}{'\n'}
                         {'  '}<Attr>--color-primary</Attr>: <Val>#007bff</Val>;{'\n'}
                         {'  '}<Attr>--spacing-large</Attr>: <Val>2rem</Val>;{'\n'}
                         {'  '}<Attr>--font-size-heading</Attr>: <Val>2rem</Val>;{'\n'}
                         {'}'}
                      </CodeCard>
                  </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 8: Best Practice - Organization */}
          <Slide isActive={currentSlide === 8}>
            <div className="max-w-6xl w-full p-8 z-10 pb-0">
              <h2 className="text-4xl font-bold mb-6 text-center text-white">Best Practice: Organization 🗂️</h2>
              
              <div className="flex justify-center">
                  <div className="w-full max-w-3xl">
                      <CodeCard className="text-xs h-[50vh] overflow-y-auto custom-scrollbar">
                        <Tag>:root</Tag> {'{'}{'\n'}
                        {'  '}<Comment>/* Colors */</Comment>{'\n'}
                        {'  '}<Attr>--color-primary</Attr>: <Val>#007bff</Val>;{'\n'}
                        {'  '}<Attr>--color-secondary</Attr>: <Val>#6c757d</Val>;{'\n'}
                        {'  '}<Attr>--color-success</Attr>: <Val>#28a745</Val>;{'\n'}
                        {'  '}<Attr>--color-danger</Attr>: <Val>#dc3545</Val>;{'\n'}
                        {'\n'}
                        {'  '}<Comment>/* Typography */</Comment>{'\n'}
                        {'  '}<Attr>--font-family-base</Attr>: <Val>"Helvetica Neue", Arial, sans-serif</Val>;{'\n'}
                        {'  '}<Attr>--font-size-base</Attr>: <Val>1rem</Val>;{'\n'}
                        {'  '}<Attr>--line-height-base</Attr>: <Val>1.5</Val>;{'\n'}
                        {'\n'}
                        {'  '}<Comment>/* Spacing */</Comment>{'\n'}
                        {'  '}<Attr>--spacing-xs</Attr>: <Val>0.25rem</Val>;{'\n'}
                        {'  '}<Attr>--spacing-sm</Attr>: <Val>0.5rem</Val>;{'\n'}
                        {'  '}<Attr>--spacing-md</Attr>: <Val>1rem</Val>;{'\n'}
                        {'  '}<Attr>--spacing-lg</Attr>: <Val>2rem</Val>;{'\n'}
                        {'\n'}
                        {'  '}<Comment>/* Layout */</Comment>{'\n'}
                        {'  '}<Attr>--container-max-width</Attr>: <Val>1200px</Val>;{'\n'}
                        {'  '}<Attr>--border-radius</Attr>: <Val>4px</Val>;{'\n'}
                        {'  '}<Attr>--box-shadow</Attr>: <Val>0 2px 4px rgba(0, 0, 0, 0.1)</Val>;{'\n'}
                        {'}'}
                      </CodeCard>
                  </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 9: Browser Support */}
          <Slide isActive={currentSlide === 9}>
             <div className="max-w-6xl w-full p-8 z-10 text-center">
                 <h2 className="text-5xl font-bold mb-12 text-blue-300">Browser Support 🌐</h2>
                 
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                     <div className="bg-slate-800 p-6 rounded-2xl border border-slate-600 flex flex-col items-center">
                         <div className="text-4xl mb-4">🦊</div>
                         <h3 className="text-xl font-bold text-white">Firefox</h3>
                         <span className="text-emerald-400 font-mono text-lg">31+</span>
                     </div>
                     <div className="bg-slate-800 p-6 rounded-2xl border border-slate-600 flex flex-col items-center">
                         <div className="text-4xl mb-4">🧭</div>
                         <h3 className="text-xl font-bold text-white">Safari</h3>
                         <span className="text-emerald-400 font-mono text-lg">9.1+</span>
                     </div>
                     <div className="bg-slate-800 p-6 rounded-2xl border border-slate-600 flex flex-col items-center">
                         <div className="text-4xl mb-4">🌈</div>
                         <h3 className="text-xl font-bold text-white">Chrome</h3>
                         <span className="text-emerald-400 font-mono text-lg">49+</span>
                     </div>
                     <div className="bg-slate-800 p-6 rounded-2xl border border-slate-600 flex flex-col items-center">
                         <div className="text-4xl mb-4">🔵</div>
                         <h3 className="text-xl font-bold text-white">Edge</h3>
                         <span className="text-emerald-400 font-mono text-lg">15+</span>
                     </div>
                 </div>

                 <p className="mt-12 text-slate-400">
                     For older browsers, consider using a CSS Preprocessor like <span className="text-pink-400 font-bold">Sass</span>.
                 </p>
             </div>
          </Slide>

          {/* SLIDE 10: Summary */}
          <Slide isActive={currentSlide === 10}>
            <div className="text-center p-8 max-w-4xl z-10">
              <div className="inline-block p-4 bg-white/10 rounded-full mb-6 animate-pulse">
                <CheckCircle className="w-16 h-16 text-emerald-400" />
              </div>
              <h1 className="text-6xl font-bold mb-8">Summary ✅</h1>

              <div className="bg-slate-800/80 backdrop-blur-md p-8 rounded-2xl border border-slate-600 text-left max-w-2xl mx-auto shadow-2xl space-y-4">
                  <p className="text-xl text-slate-300 leading-relaxed mb-6">
                      CSS Variables are a powerful feature that makes your stylesheets more maintainable, flexible, and dynamic.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-2 text-emerald-300">
                          <Palette className="w-5 h-5" /> Theme Systems
                      </div>
                      <div className="flex items-center gap-2 text-emerald-300">
                          <Layout className="w-5 h-5" /> Responsive Layouts
                      </div>
                      <div className="flex items-center gap-2 text-emerald-300">
                          <Box className="w-5 h-5" /> Component Customization
                      </div>
                      <div className="flex items-center gap-2 text-emerald-300">
                          <RotateCcw className="w-5 h-5" /> Reducing Repetition
                      </div>
                  </div>
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
