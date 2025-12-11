import { useState } from 'react';
import SlideContainer from '../components/SlideContainer';
import Slide from '../components/Slide';
import CodeCard, { Tag, Attr, Val, Comment } from '../components/CodeCard';
import { Palette, Box, FileCode, CheckCircle, RotateCcw, PaintBucket, Layout, Type } from 'lucide-react';

export default function CssSlides() {
  return (
    <SlideContainer totalSlides={9} accentColor="blue">
      {(currentSlide, goToSlide) => (
        <>
          {/* Background Blobs */}
          <div className="fixed inset-0 pointer-events-none">
            <div className="blob bg-blue-600 w-96 h-96 rounded-full top-0 left-0 opacity-20 mix-blend-screen animate-move"></div>
            <div className="blob bg-purple-600 w-96 h-96 rounded-full bottom-0 right-0 opacity-20 mix-blend-screen" style={{animationDelay: '2s'}}></div>
            <div className="blob bg-cyan-500 w-80 h-80 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20 mix-blend-screen"></div>
          </div>

          {/* SLIDE 1: Title */}
          <Slide isActive={currentSlide === 0}>
            <div className="text-center p-8 max-w-4xl z-10">
              <div className="inline-block p-6 rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-600 mb-6 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <Palette className="w-24 h-24 text-white" />
              </div>
              <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
                Introduction to CSS
              </h1>
              <p className="text-2xl text-slate-300 font-light max-w-2xl mx-auto">
                Styling the Web with Style Sheets 🎨
              </p>
            </div>
          </Slide>

          {/* SLIDE 2: What is CSS? */}
          <Slide isActive={currentSlide === 1}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-blue-400">What is CSS? 🤔</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 text-xl text-slate-300">
                  <p className="bg-slate-800/50 p-6 rounded-xl border border-blue-500/30">
                    <strong className="text-blue-400">C</strong>ascading <strong className="text-blue-400">S</strong>tyle <strong className="text-blue-400">S</strong>heets
                  </p>
                  <p>
                    CSS is used to style and layout web pages — for example, to alter the font, color, size, and spacing of your content, split it into multiple columns, or add animations and other decorative features.
                  </p>
                  <div className="flex gap-4">
                     <div className="bg-slate-800 p-4 rounded-xl text-center flex-1">
                        <Type className="w-8 h-8 mx-auto mb-2 text-pink-400" />
                        <span className="text-sm">Fonts</span>
                     </div>
                     <div className="bg-slate-800 p-4 rounded-xl text-center flex-1">
                        <PaintBucket className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
                        <span className="text-sm">Colors</span>
                     </div>
                     <div className="bg-slate-800 p-4 rounded-xl text-center flex-1">
                        <Layout className="w-8 h-8 mx-auto mb-2 text-green-400" />
                        <span className="text-sm">Layout</span>
                     </div>
                  </div>
                </div>

                <div className="bg-slate-800 p-8 rounded-2xl border-2 border-slate-700 shadow-xl">
                    <div className="flex gap-4 mb-4 border-b border-slate-700 pb-4">
                        <div className="font-mono text-sm text-slate-500">Separation of Concerns</div>
                    </div>
                    <div className="flex justify-between items-center gap-4">
                        <div className="text-center p-4 bg-orange-900/30 rounded-lg border border-orange-500/30 w-1/2">
                            <div className="font-bold text-orange-400 mb-2">HTML</div>
                            <div className="text-xs text-orange-200">Content & Structure</div>
                            <div className="mt-2 text-2xl">🦴</div>
                        </div>
                        <div className="text-2xl text-slate-500">+</div>
                        <div className="text-center p-4 bg-blue-900/30 rounded-lg border border-blue-500/30 w-1/2">
                            <div className="font-bold text-blue-400 mb-2">CSS</div>
                            <div className="text-xs text-blue-200">Presentation & Style</div>
                            <div className="mt-2 text-2xl">👕</div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 3: CSS Syntax */}
          <Slide isActive={currentSlide === 2}>
            <div className="max-w-5xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-cyan-400">CSS Syntax 📝</h2>

              <div className="flex flex-col items-center gap-8">
                <CodeCard className="text-lg md:text-xl w-full max-w-3xl">
                  <Tag>selector</Tag> {'{'}{'\n'}
                  {'  '}<Attr>property</Attr>: <Val>value</Val>;{'\n'}
                  {'  '}<Attr>another-property</Attr>: <Val>another-value</Val>;{'\n'}
                  {'}'}
                </CodeCard>
                
                <div className="relative w-full max-w-3xl mt-8">
                     {/* Diagram for Syntax */}
                     <div className="bg-white/5 p-8 rounded-2xl border border-white/10 relative">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex items-center gap-4">
                                <div className="bg-pink-500/20 p-2 rounded text-pink-400 font-mono">h1</div>
                                <div className="text-sm text-slate-400">← Selector (What to style)</div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-indigo-500/20 p-2 rounded text-indigo-400 font-mono">color: blue;</div>
                                <div className="text-sm text-slate-400">← Declaration (How to style)</div>
                            </div>
                        </div>
                     </div>
                </div>

                 <CodeCard className="text-sm w-full max-w-xl">
                  <Tag>h1</Tag> {'{'}{'\n'}
                  {'  '}<Attr>color</Attr>: <Val>blue</Val>;{'\n'}
                  {'  '}<Attr>font-size</Attr>: <Val>12px</Val>;{'\n'}
                  {'}'}
                </CodeCard>
              </div>
            </div>
          </Slide>

          {/* SLIDE 4: Selectors */}
          <Slide isActive={currentSlide === 3}>
            <div className="max-w-6xl w-full p-8 z-10 block overflow-y-auto max-h-screen">
               {/* Added overflow auto for smaller screens/content safety */}
              <h2 className="text-5xl font-bold mb-12 text-center text-green-400">Selectors 🎯</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Element Selector */}
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-green-400 transition-colors">
                    <h3 className="text-xl font-bold text-green-300 mb-2">Element Selector</h3>
                    <p className="text-sm text-slate-400 mb-4">Targets all elements of a type.</p>
                    <CodeCard className="text-sm">
                        <Tag>p</Tag> {'{'}{'\n'}
                        {'  '}<Attr>color</Attr>: <Val>blue</Val>;{'\n'}
                        {'}'}
                    </CodeCard>
                </div>

                {/* Class Selector */}
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-yellow-400 transition-colors">
                    <h3 className="text-xl font-bold text-yellow-300 mb-2">Class Selector (.)</h3>
                    <p className="text-sm text-slate-400 mb-4">Targets elements with a class attribute.</p>
                    <CodeCard className="text-sm">
                        <Tag>.my-class</Tag> {'{'}{'\n'}
                        {'  '}<Attr>font-size</Attr>: <Val>16px</Val>;{'\n'}
                        {'}'}
                    </CodeCard>
                </div>

                {/* ID Selector */}
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-pink-400 transition-colors">
                    <h3 className="text-xl font-bold text-pink-300 mb-2">ID Selector (#)</h3>
                    <p className="text-sm text-slate-400 mb-4">Targets a unique element (only one per page).</p>
                    <CodeCard className="text-sm">
                        <Tag>#my-id</Tag> {'{'}{'\n'}
                        {'  '}<Attr>background-color</Attr>: <Val>yellow</Val>;{'\n'}
                        {'}'}
                    </CodeCard>
                </div>

                {/* Attribute Selector */}
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-blue-400 transition-colors">
                    <h3 className="text-xl font-bold text-blue-300 mb-2">Attribute Selector []</h3>
                    <p className="text-sm text-slate-400 mb-4">Targets elements based on attributes.</p>
                    <CodeCard className="text-sm">
                        <Tag>input</Tag>[<Attr>type</Attr>=<Val>"text"</Val>] {'{'}{'\n'}
                        {'  '}<Attr>border</Attr>: <Val>1px solid black</Val>;{'\n'}
                        {'}'}
                    </CodeCard>
                </div>

              </div>
            </div>
          </Slide>

           {/* SLIDE 5: Including CSS */}
           <Slide isActive={currentSlide === 4}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-purple-400">Including CSS 🔌</h2>
              
              <div className="space-y-8">
                
                <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="w-full md:w-1/3">
                        <h3 className="text-2xl font-bold text-red-400 mb-2">Inline CSS</h3>
                        <p className="text-slate-400 text-sm">Directly on the element.</p>
                        <span className="inline-block mt-2 px-2 py-1 bg-red-500/20 text-red-300 text-xs rounded">Not Recommended</span>
                    </div>
                    <div className="w-full md:w-2/3">
                        <CodeCard className="text-sm">
                             <Tag>&lt;p </Tag><Attr>style</Attr>=<Val>"color: red;"</Val><Tag>&gt;</Tag>Hello<Tag>&lt;/p&gt;</Tag>
                        </CodeCard>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="w-full md:w-1/3">
                        <h3 className="text-2xl font-bold text-yellow-400 mb-2">Internal CSS</h3>
                        <p className="text-slate-400 text-sm">Ideally in the &lt;head&gt;.</p>
                        <span className="inline-block mt-2 px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded">Good for single pages</span>
                    </div>
                    <div className="w-full md:w-2/3">
                        <CodeCard className="text-sm">
                             <Tag>&lt;head&gt;</Tag>{'\n'}
                             {'  '}<Tag>&lt;style&gt;</Tag>{'\n'}
                             {'    '}<Tag>body</Tag> {'{'}{'\n'}
                             {'      '}<Attr>background-color</Attr>: <Val>lightblue</Val>;{'\n'}
                             {'    '}{'}'}{'\n'}
                             {'  '}<Tag>&lt;/style&gt;</Tag>{'\n'}
                             <Tag>&lt;/head&gt;</Tag>
                        </CodeCard>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 items-start">
                     <div className="w-full md:w-1/3">
                        <h3 className="text-2xl font-bold text-green-400 mb-2">External CSS</h3>
                        <p className="text-slate-400 text-sm">Linked from a separate file.</p>
                        <span className="inline-block mt-2 px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded">Best Practice! 🏆</span>
                    </div>
                    <div className="w-full md:w-2/3">
                        <CodeCard className="text-sm">
                             <Tag>&lt;head&gt;</Tag>{'\n'}
                             {'  '}<Tag>&lt;link </Tag><Attr>rel</Attr>=<Val>"stylesheet"</Val> <Attr>href</Attr>=<Val>"styles.css"</Val> <Tag>/&gt;</Tag>{'\n'}
                             <Tag>&lt;/head&gt;</Tag>
                        </CodeCard>
                    </div>
                </div>

              </div>
            </div>
          </Slide>

          {/* SLIDE 6: Common Properties */}
          <Slide isActive={currentSlide === 5}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-teal-400">Common Properties 🎨</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  
                  <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Type className="text-teal-400" /> Typography</h3>
                      <CodeCard className="text-sm">
                          <Tag>p</Tag> {'{'}{'\n'}
                          {'  '}<Attr>color</Attr>: <Val>red</Val>;{'\n'}
                          {'  '}<Attr>font-size</Attr>: <Val>24px</Val>;{'\n'}
                          {'  '}<Attr>text-align</Attr>: <Val>center</Val>;{'\n'}
                          {'}'}
                      </CodeCard>
                      <div className="mt-4 p-4 bg-white rounded border border-gray-200">
                          <p style={{color: 'red', fontSize: '24px', textAlign: 'center'}}>Preview Text</p>
                      </div>
                  </div>

                  <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Box className="text-teal-400" /> Spacing & Layout</h3>
                      <CodeCard className="text-sm">
                          <Tag>div</Tag> {'{'}{'\n'}
                          {'  '}<Attr>background-color</Attr>: <Val>lightgray</Val>;{'\n'}
                          {'  '}<Attr>margin</Attr>: <Val>10px</Val>;{'\n'}
                          {'  '}<Attr>padding</Attr>: <Val>20px</Val>;{'\n'}
                          {'}'}
                      </CodeCard>
                      <div className="mt-4 p-4 bg-white rounded border border-gray-200">
                           <div style={{backgroundColor: 'lightgray', margin: '10px', padding: '20px', display: 'inline-block'}}>Box Example</div>
                           <span>Other Content</span>
                      </div>
                  </div>

              </div>
            </div>
          </Slide>

          {/* SLIDE 7: Box Model */}
          <Slide isActive={currentSlide === 6}>
            <div className="max-w-5xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-8 text-center text-orange-400">The Box Model 📦</h2>
              <p className="text-center text-slate-300 mb-12 text-lg">Every element on a web page is a box.</p>
              
              <div className="flex flex-col md:flex-row items-center gap-12">
                  <div className="w-full md:w-1/2 flex justify-center">
                    {/* CSS Box Model Visual */}
                    <div className="relative w-80 h-80 bg-orange-200/20 border-2 border-dashed border-orange-300/50 flex items-center justify-center p-8 text-xs text-orange-200">
                        Top Margin
                        <div className="w-full h-full bg-yellow-400/20 border-2 border-yellow-500 flex items-center justify-center p-8 text-yellow-200 relative">
                             Border
                             <div className="w-full h-full bg-green-400/20 border-2 border-dashed border-green-400 flex items-center justify-center p-8 text-green-200 absolute inset-4">
                                Padding
                                <div className="w-full h-full bg-blue-500 flex items-center justify-center text-white font-bold absolute inset-4">
                                    Content
                                </div>
                             </div>
                        </div>
                    </div>
                  </div>
                  
                  <div className="w-full md:w-1/2 space-y-4">
                      <div className="flex items-center gap-4">
                          <div className="w-6 h-6 bg-blue-500 rounded"></div>
                          <span className="text-lg"><strong>Content</strong>: The text/image.</span>
                      </div>
                      <div className="flex items-center gap-4">
                          <div className="w-6 h-6 bg-green-400/40 border border-green-400 rounded"></div>
                          <span className="text-lg"><strong>Padding</strong>: Space inside border.</span>
                      </div>
                      <div className="flex items-center gap-4">
                          <div className="w-6 h-6 bg-yellow-400/40 border border-yellow-400 rounded"></div>
                          <span className="text-lg"><strong>Border</strong>: Line around padding.</span>
                      </div>
                      <div className="flex items-center gap-4">
                          <div className="w-6 h-6 bg-orange-400/20 border border-dashed border-orange-400 rounded"></div>
                          <span className="text-lg"><strong>Margin</strong>: Space outside.</span>
                      </div>
                  </div>
              </div>
            </div>
          </Slide>

           {/* SLIDE 8: Best Practices */}
           <Slide isActive={currentSlide === 7}>
            <div className="max-w-4xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-white">Best Practices 🌟</h2>
              
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-slate-800 p-6 rounded-xl border-l-4 border-purple-500 flex gap-4 items-start hover:scale-105 transition-transform">
                    <CheckCircle className="w-8 h-8 text-purple-500 shrink-0" />
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">Use External Stylesheets</h3>
                        <p className="text-slate-400">Keep your HTML clean and your styles reusable across multiple pages.</p>
                    </div>
                </div>

                <div className="bg-slate-800 p-6 rounded-xl border-l-4 border-blue-500 flex gap-4 items-start hover:scale-105 transition-transform">
                    <CheckCircle className="w-8 h-8 text-blue-500 shrink-0" />
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">Classes vs IDs</h3>
                        <p className="text-slate-400">Use <strong>Classes (.)</strong> for multiple elements. Use <strong>IDs (#)</strong> rarely, for unique elements.</p>
                    </div>
                </div>

                <div className="bg-slate-800 p-6 rounded-xl border-l-4 border-green-500 flex gap-4 items-start hover:scale-105 transition-transform">
                    <CheckCircle className="w-8 h-8 text-green-500 shrink-0" />
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">Organize with Comments</h3>
                        <p className="text-slate-400">Comment your CSS code to keeps sections clear and maintainable.</p>
                    </div>
                </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 9: Homework */}
          <Slide isActive={currentSlide === 8}>
            <div className="text-center p-8 max-w-4xl z-10">
              <div className="inline-block p-4 bg-white/10 rounded-full mb-6 animate-bounce">
                <FileCode className="w-16 h-16 text-yellow-400" />
              </div>
              <h1 className="text-6xl font-bold mb-8">Homework: Style a Page 🏡</h1>

              <div className="bg-slate-800/80 backdrop-blur-md p-8 rounded-2xl border border-slate-600 text-left max-w-2xl mx-auto shadow-2xl">
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">Create "My Hobby" Page</h3>
                <div className="space-y-4 text-slate-300">
                    <p><strong>1. HTML File:</strong> Heading, 3-4 paragraphs, list, image.</p>
                    <p><strong>2. External CSS File:</strong></p>
                    <ul className="list-disc pl-6 space-y-2 text-sm">
                        <li>Change font of entire document.</li>
                        <li>Make heading different color.</li>
                        <li>Add padding/margin to paragraphs.</li>
                        <li>Style list items differently.</li>
                        <li>Add border to the image.</li>
                    </ul>
                </div>
              </div>

              <div className="mt-12">
                <button
                  onClick={() => goToSlide(0)}
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-full font-bold transition-all hover:scale-105 flex items-center gap-2 mx-auto shadow-lg shadow-blue-500/20"
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
