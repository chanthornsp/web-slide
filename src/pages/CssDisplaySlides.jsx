import { useState } from 'react';
import SlideContainer from '../components/SlideContainer';
import Slide from '../components/Slide';
import CodeCard, { Tag, Attr, Val, Comment } from '../components/CodeCard';
import { Monitor, Square, Type, LayoutGrid, Layers, Ghost, MousePointer, BookOpen, RotateCcw, CheckCircle } from 'lucide-react';

export default function CssDisplaySlides() {
  const [activeTab, setActiveTab] = useState('block');

  return (
    <SlideContainer totalSlides={9} accentColor="indigo">
      {(currentSlide, goToSlide) => (
        <>
          {/* Background Blobs */}
          <div className="fixed inset-0 pointer-events-none">
            <div className="blob bg-indigo-600 w-96 h-96 rounded-full top-0 left-0 opacity-20 mix-blend-screen animate-move"></div>
            <div className="blob bg-purple-600 w-96 h-96 rounded-full bottom-0 right-0 opacity-20 mix-blend-screen" style={{animationDelay: '2s'}}></div>
            <div className="blob bg-pink-500 w-80 h-80 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20 mix-blend-screen"></div>
          </div>

          {/* SLIDE 1: Title */}
          <Slide isActive={currentSlide === 0}>
            <div className="text-center p-8 max-w-4xl z-10">
              <div className="inline-block p-6 rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 mb-6 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <Monitor className="w-24 h-24 text-white" />
              </div>
              <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                CSS Display
              </h1>
              <p className="text-2xl text-slate-300 font-light max-w-2xl mx-auto">
                Controlling Layout & Flow 📐
              </p>
            </div>
          </Slide>

          {/* SLIDE 2: Block Elements */}
          <Slide isActive={currentSlide === 1}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-indigo-400">Display: Block 🧱</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="bg-slate-800 p-6 rounded-xl border border-indigo-500/30">
                    <p className="text-lg text-slate-300 leading-relaxed">
                      Block elements take up the <strong className="text-indigo-400">full width</strong> available. They start on a new line and push subsequent elements to the next line.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {['<div>', '<h1>', '<p>', '<section>'].map(tag => (
                            <span key={tag} className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-md font-mono text-sm">{tag}</span>
                        ))}
                    </div>
                  </div>
                  <CodeCard>
                    <Tag>div</Tag> {'{'}{'\n'}
                    {'  '}<Attr>display</Attr>: <Val>block</Val>;{'\n'}
                    {'}'}
                  </CodeCard>
                </div>

                <div className="bg-white/5 p-8 rounded-2xl border border-white/10 space-y-4">
                    <div className="bg-indigo-500 text-white p-4 text-center rounded">Block Element 1</div>
                    <div className="bg-purple-500 text-white p-4 text-center rounded">Block Element 2</div>
                    <div className="bg-pink-500 text-white p-4 text-center rounded">Block Element 3</div>
                    <p className="text-center text-sm text-slate-400 mt-2">Notice how they stack vertically.</p>
                </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 3: Inline Elements */}
          <Slide isActive={currentSlide === 2}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-pink-400">Display: Inline 📝</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="bg-slate-800 p-6 rounded-xl border border-pink-500/30">
                    <p className="text-lg text-slate-300 leading-relaxed">
                      Inline elements only take up as much width as <strong className="text-pink-400">necessary</strong>. They flow within text and do NOT start on a new line.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {['<span>', '<a>', '<strong>', '<em>'].map(tag => (
                            <span key={tag} className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-md font-mono text-sm">{tag}</span>
                        ))}
                    </div>
                    <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded text-yellow-200 text-sm">
                        ⚠️ Cannot set width/height or top/bottom margins!
                    </div>
                  </div>
                  <CodeCard>
                    <Tag>span</Tag> {'{'}{'\n'}
                    {'  '}<Attr>display</Attr>: <Val>inline</Val>;{'\n'}
                    {'}'}
                  </CodeCard>
                </div>

                <div className="bg-white/5 p-8 rounded-2xl border border-white/10 text-xl leading-loose text-white">
                    This is a normal paragraph text with some 
                    <span className="bg-pink-500/50 px-2 py-1 mx-1 rounded border border-pink-400">Inline Elements</span>
                    flowing right inside it. You can have 
                    <span className="bg-purple-500/50 px-2 py-1 mx-1 rounded border border-purple-400">multiple</span>
                    links or spans without breaking the line.
                </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 4: Inline-Block */}
          <Slide isActive={currentSlide === 3}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-yellow-400">Display: Inline-Block 🍱</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="bg-slate-800 p-6 rounded-xl border border-yellow-500/30">
                    <p className="text-lg text-slate-300 leading-relaxed">
                      The best of both worlds! Flows like <strong className="text-pink-400">Inline</strong>, but you can set width, height, and margins like <strong className="text-indigo-400">Block</strong>.
                    </p>
                    <p className="text-sm text-slate-400 mt-2">Great for navigation menus and grids of items.</p>
                  </div>
                  <CodeCard>
                    <Tag>.item</Tag> {'{'}{'\n'}
                    {'  '}<Attr>display</Attr>: <Val>inline-block</Val>;{'\n'}
                    {'  '}<Attr>width</Attr>: <Val>100px</Val>;{'\n'}
                    {'  '}<Attr>height</Attr>: <Val>100px</Val>;{'\n'}
                    {'}'}
                  </CodeCard>
                </div>

                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                    <div className="space-x-4">
                        <div className="inline-block w-24 h-24 bg-red-500 rounded-lg shadow-lg flex items-center justify-center">1</div>
                        <div className="inline-block w-24 h-24 bg-orange-500 rounded-lg shadow-lg flex items-center justify-center">2</div>
                        <div className="inline-block w-24 h-24 bg-yellow-500 rounded-lg shadow-lg flex items-center justify-center">3</div>
                        <div className="inline-block w-24 h-24 bg-green-500 rounded-lg shadow-lg flex items-center justify-center">4</div>
                    </div>
                </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 5: Flexbox */}
          <Slide isActive={currentSlide === 4}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-8 text-center text-teal-400">Display: Flex 💪</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                      <p className="text-slate-300">Layout model for one-dimensional layouts. Magically aligns items in a row or column.</p>
                      <CodeCard className="text-xs md:text-sm">
                        <Tag>.container</Tag> {'{'}{'\n'}
                        {'  '}<Attr>display</Attr>: <Val>flex</Val>;{'\n'}
                        {'  '}<Attr>justify-content</Attr>: <Val>center</Val>; <Comment>/* x-axis */</Comment>{'\n'}
                        {'  '}<Attr>align-items</Attr>: <Val>center</Val>; <Comment>/* y-axis */</Comment>{'\n'}
                        {'  '}<Attr>gap</Attr>: <Val>10px</Val>;{'\n'}
                        {'}'}
                      </CodeCard>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm text-slate-400">
                          <div className="bg-slate-800 p-2 rounded border border-slate-700">
                              <strong className="text-teal-400 block">Row (default)</strong>
                              Items side-by-side
                          </div>
                          <div className="bg-slate-800 p-2 rounded border border-slate-700">
                              <strong className="text-teal-400 block">Column</strong>
                              Items stacked top-to-bottom
                          </div>
                      </div>
                  </div>

                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex flex-col justify-center h-full min-h-[300px]">
                      <div className="flex justify-center items-center gap-4 bg-slate-900/50 p-4 rounded-xl h-full border-2 border-dashed border-slate-600">
                          <div className="w-16 h-16 bg-teal-500 rounded-lg flex items-center justify-center text-2xl animate-bounce">1</div>
                          <div className="w-16 h-16 bg-teal-600 rounded-lg flex items-center justify-center text-2xl animate-bounce" style={{animationDelay: '0.1s'}}>2</div>
                          <div className="w-16 h-16 bg-teal-700 rounded-lg flex items-center justify-center text-2xl animate-bounce" style={{animationDelay: '0.2s'}}>3</div>
                      </div>
                      <p className="text-center text-sm text-slate-500 mt-2">justify-content: center; align-items: center;</p>
                  </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 6: Grid */}
          <Slide isActive={currentSlide === 5}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-8 text-center text-emerald-400">Display: Grid 🏁</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                      <p className="text-slate-300">Layout model for two-dimensional layouts (Rows & Columns).</p>
                      <CodeCard className="text-xs md:text-sm">
                        <Tag>.container</Tag> {'{'}{'\n'}
                        {'  '}<Attr>display</Attr>: <Val>grid</Val>;{'\n'}
                        {'  '}<Attr>grid-template-columns</Attr>: <Val>1fr 1fr 1fr</Val>;{'\n'}
                        {'  '}<Attr>gap</Attr>: <Val>20px</Val>;{'\n'}
                        {'}'}
                      </CodeCard>
                      <p className="text-sm text-slate-400 bg-emerald-900/20 p-3 rounded">
                        <strong className="text-emerald-400">fr</strong> = fraction of available space.
                      </p>
                  </div>

                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                      <div className="grid grid-cols-3 gap-4 bg-slate-900/50 p-4 rounded-xl border-2 border-dashed border-slate-600">
                          {[1, 2, 3, 4, 5, 6].map(n => (
                              <div key={n} className="bg-emerald-600/80 h-20 rounded flex items-center justify-center text-xl font-bold hover:bg-emerald-500 transition-colors">
                                  {n}
                              </div>
                          ))}
                      </div>
                  </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 7: Display None */}
          <Slide isActive={currentSlide === 6}>
            <div className="max-w-4xl w-full p-8 z-10 text-center">
              <h2 className="text-5xl font-bold mb-8 text-slate-400">Display: None 👻</h2>
              
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-600 mb-8 inline-block">
                <Ghost className="w-24 h-24 text-slate-600 animate-pulse mx-auto mb-4" />
                <CodeCard>
                    <Tag>.hidden</Tag> {'{'}{'\n'}
                    {'  '}<Attr>display</Attr>: <Val>none</Val>;{'\n'}
                    {'}'}
                </CodeCard>
              </div>
              
              <p className="text-xl text-slate-300 max-w-xl mx-auto">
                Removes the element from the document flow entirely. It's invisible and takes up <strong className="text-red-400">zero space</strong>.
              </p>
            </div>
          </Slide>

          {/* SLIDE 8: Interactive Playground */}
          <Slide isActive={currentSlide === 7}>
            <div className="max-w-6xl w-full p-4 z-10 flex flex-col h-full">
              <h2 className="text-4xl font-bold mb-6 text-center text-white">Interactive Playground 🎮</h2>
              
              <div className="flex justify-center gap-4 mb-6">
                {['block', 'inline', 'flex', 'grid'].map((mode) => (
                    <button
                        key={mode}
                        onClick={() => setActiveTab(mode)}
                        className={`px-6 py-2 rounded-full font-bold transition-all ${activeTab === mode ? 'bg-indigo-500 text-white scale-105' : 'bg-slate-700 text-slate-400 hover:bg-slate-600'}`}
                    >
                        {mode.charAt(0).toUpperCase() + mode.slice(1)}
                    </button>
                ))}
              </div>

              <div className="flex-1 bg-slate-900 rounded-2xl border-2 border-slate-700 p-8 overflow-y-auto">
                {activeTab === 'block' && (
                    <div className="space-y-4">
                        <div className="bg-indigo-500 p-4 rounded text-white text-center">I am a Block DIV</div>
                        <div className="bg-purple-500 p-4 rounded text-white text-center">I am another Block DIV</div>
                        <div className="bg-pink-500 p-4 rounded text-white text-center">We stack automatically!</div>
                    </div>
                )}
                {activeTab === 'inline' && (
                    <div className="text-xl leading-relaxed text-white">
                        Here is some text with <span className="bg-indigo-500 p-2 rounded text-white">inline spans</span> inside it.
                        Unlike block elements, <span className="bg-purple-500 p-2 rounded text-white">they flow</span> with the text
                        and reset to the start <span className="bg-pink-500 p-2 rounded text-white">if the line</span> breaks.
                    </div>
                )}
                {activeTab === 'flex' && (
                    <div className="flex flex-wrap gap-4 justify-center items-center h-full">
                        {[1, 2, 3, 4, 5].map(n => (
                            <div key={n} className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl font-bold shadow-lg">
                                {n}
                            </div>
                        ))}
                    </div>
                )}
                {activeTab === 'grid' && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-full">
                        {[1, 2, 3, 4, 5, 6].map(n => (
                            <div key={n} className="bg-slate-800 border border-slate-600 rounded-xl p-4 flex flex-col items-center justify-center hover:border-emerald-500 transition-colors">
                                <span className="text-3xl mb-2">📦</span>
                                <span className="text-slate-400">Item {n}</span>
                            </div>
                        ))}
                    </div>
                )}
              </div>
            </div>
          </Slide>

          {/* SLIDE 9: Homework */}
          <Slide isActive={currentSlide === 8}>
            <div className="text-center p-8 max-w-4xl z-10">
              <div className="inline-block p-4 bg-white/10 rounded-full mb-6 animate-bounce">
                <BookOpen className="w-16 h-16 text-indigo-400" />
              </div>
              <h1 className="text-6xl font-bold mb-8">Homework 📚</h1>

              <div className="bg-slate-800/80 backdrop-blur-md p-8 rounded-2xl border border-slate-600 text-left max-w-2xl mx-auto shadow-2xl space-y-6">
                <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-indigo-400 shrink-0 mt-1" />
                    <p className="text-slate-300">Create a simple webpage with a header, nav bar, and content section.</p>
                </div>
                <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-indigo-400 shrink-0 mt-1" />
                    <p className="text-slate-300">Style the <strong className="text-white">navigation bar</strong> using <code>display: inline-block</code> for the links.</p>
                </div>
                <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-indigo-400 shrink-0 mt-1" />
                    <p className="text-slate-300">Create a <strong className="text-white">card layout</strong> in the content section using <code>display: flex</code> (or grid!).</p>
                </div>
              </div>

              <div className="mt-12">
                <button
                  onClick={() => goToSlide(0)}
                  className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 rounded-full font-bold transition-all hover:scale-105 flex items-center gap-2 mx-auto shadow-lg shadow-indigo-500/20"
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
