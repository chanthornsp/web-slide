import { useState } from 'react';
import SlideContainer from '../components/SlideContainer';
import Slide from '../components/Slide';
import CodeCard, { Tag, Attr, Val, Comment } from '../components/CodeCard';
import { Monitor, Square, Type, LayoutGrid, Layers, Ghost, MousePointer, BookOpen, RotateCcw, CheckCircle, MapPin, ArrowUpFromLine, Navigation, CreditCard, Grid3X3, ExternalLink } from 'lucide-react';

export default function CssDisplaySlides() {
  const [activeTab, setActiveTab] = useState('block');

  return (
    <SlideContainer totalSlides={16} accentColor="indigo">
      {(currentSlide, goToSlide) => (
        <>
          {/* Background Blobs */}
          <div className="fixed inset-0 pointer-events-none">
            <div className="blob bg-indigo-600 w-96 h-96 rounded-full top-0 left-0 opacity-20 mix-blend-screen animate-move"></div>
            <div className="blob bg-purple-600 w-96 h-96 rounded-full bottom-0 right-0 opacity-20 mix-blend-screen" style={{animationDelay: '2s'}}></div>
            <div className="blob bg-pink-500 w-80 h-80 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20 mix-blend-screen"></div>
          </div>

          {/* SLIDE 0: Title */}
          <Slide isActive={currentSlide === 0}>
            <div className="text-center p-8 max-w-4xl z-10">
              <div className="inline-block p-6 rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 mb-6 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <Monitor className="w-24 h-24 text-white" />
              </div>
              <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                CSS Display & Layout
              </h1>
              <p className="text-2xl text-slate-300 font-light max-w-2xl mx-auto">
                Controlling Layout, Flow & Position 📐
              </p>
            </div>
          </Slide>

          {/* SLIDE 1: Block Elements */}
          <Slide isActive={currentSlide === 1}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-indigo-400">1. Display: Block 🧱</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="bg-slate-800 p-6 rounded-xl border border-indigo-500/30">
                    <p className="text-lg text-slate-300 leading-relaxed">
                      Block elements take up the <strong className="text-indigo-400">full width</strong> available, with a new line before and after the element.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {['<div>', '<h1>-<h6>', '<p>', '<section>'].map(tag => (
                            <span key={tag} className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-md font-mono text-sm">{tag}</span>
                        ))}
                    </div>
                  </div>
                  <CodeCard>
                    <Tag>div</Tag> {'{'}{'\n'}
                    {'  '}<Attr>display</Attr>: <Val>block</Val>;{'\n'}
                    {'}'}
                  </CodeCard>
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 text-blue-200 text-sm">
                    ℹ️ Block elements can have width and height set, and they respect top and bottom margins.
                  </div>
                </div>

                <div className="bg-white/5 p-8 rounded-2xl border border-white/10 space-y-4">
                    <div className="bg-indigo-500 text-white p-4 text-center rounded">Block Element 1 (full width)</div>
                    <div className="bg-purple-500 text-white p-4 text-center rounded">Block Element 2 (full width)</div>
                    <div className="bg-pink-500 text-white p-4 text-center rounded">Block Element 3 (full width)</div>
                    <p className="text-center text-sm text-slate-400 mt-2">Notice how they stack vertically and take full width.</p>
                </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 2: Inline Elements */}
          <Slide isActive={currentSlide === 2}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-pink-400">2. Display: Inline 📝</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="bg-slate-800 p-6 rounded-xl border border-pink-500/30">
                    <p className="text-lg text-slate-300 leading-relaxed">
                      Inline elements do not start on a new line and only take up as much width as <strong className="text-pink-400">necessary</strong>. They flow within text.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {['<span>', '<a>', '<strong>', '<em>'].map(tag => (
                            <span key={tag} className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-md font-mono text-sm">{tag}</span>
                        ))}
                    </div>
                  </div>
                  <CodeCard>
                    <Tag>span</Tag> {'{'}{'\n'}
                    {'  '}<Attr>display</Attr>: <Val>inline</Val>;{'\n'}
                    {'}'}
                  </CodeCard>
                  <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded text-yellow-200 text-sm">
                    ⚠️ Inline elements cannot have width or height set, and they do not respect top and bottom margins.
                  </div>
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

          {/* SLIDE 3: Inline-Block */}
          <Slide isActive={currentSlide === 3}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-yellow-400">3. Display: Inline-Block 🍱</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="bg-slate-800 p-6 rounded-xl border border-yellow-500/30">
                    <p className="text-lg text-slate-300 leading-relaxed">
                      Inline-block elements are similar to inline elements but allow you to set <strong className="text-yellow-400">width and height</strong>. They do not start on a new line.
                    </p>
                    <p className="text-sm text-slate-400 mt-2">Great for navigation menus and grids of items.</p>
                  </div>
                  <CodeCard>
                    <Tag>span</Tag> {'{'}{'\n'}
                    {'  '}<Attr>display</Attr>: <Val>inline-block</Val>;{'\n'}
                    {'  '}<Attr>width</Attr>: <Val>100px</Val>;{'\n'}
                    {'  '}<Attr>height</Attr>: <Val>50px</Val>;{'\n'}
                    {'}'}
                  </CodeCard>
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 text-blue-200 text-sm">
                    ℹ️ Inline-block elements respect both horizontal and vertical margins, making them versatile for layout purposes.
                  </div>
                </div>

                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                    <div className="text-center">
                        <span className="inline-block w-24 h-24 bg-red-500 rounded-lg shadow-lg leading-[6rem] text-center mx-2">1</span>
                        <span className="inline-block w-24 h-24 bg-orange-500 rounded-lg shadow-lg leading-[6rem] text-center mx-2">2</span>
                        <span className="inline-block w-24 h-24 bg-yellow-500 rounded-lg shadow-lg leading-[6rem] text-center mx-2">3</span>
                        <span className="inline-block w-24 h-24 bg-green-500 rounded-lg shadow-lg leading-[6rem] text-center mx-2">4</span>
                    </div>
                    <p className="text-center text-sm text-slate-400 mt-4">Same line, but with width & height!</p>
                </div>
              </div>
            </div>
          </Slide>

           {/* SLIDE 4: Flexbox */}
          <Slide isActive={currentSlide === 4}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-8 text-center text-teal-400">4. Display: Flex 💪</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                      <p className="text-slate-300">Flexbox is a layout model that allows for responsive design and alignment of elements in a container.</p>
                      <CodeCard className="text-xs md:text-sm">
                        <Tag>.container</Tag> {'{'}{'\n'}
                        {'  '}<Attr>display</Attr>: <Val>flex</Val>;{'\n'}
                        {'  '}<Attr>flex-direction</Attr>: <Val>row</Val>;{'\n'}
                        {'  '}<Attr>justify-content</Attr>: <Val>center</Val>;{'\n'}
                        {'  '}<Attr>align-items</Attr>: <Val>center</Val>;{'\n'}
                        {'  '}<Attr>flex-wrap</Attr>: <Val>wrap</Val>;{'\n'}
                        {'  '}<Attr>gap</Attr>: <Val>10px</Val>;{'\n'}
                        {'}'}
                      </CodeCard>
                      
                      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 text-blue-200 text-sm">
                        ℹ️ Flex containers can have their children arranged in rows or columns, and they can grow or shrink to fit the available space.
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

          {/* SLIDE 5: Flex Properties Detail */}
          <Slide isActive={currentSlide === 5}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-4xl font-bold mb-8 text-center text-teal-400">Flex Properties Explained 📐</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                <div className="bg-slate-800 p-4 rounded-xl border border-slate-600">
                  <h3 className="text-teal-400 font-bold mb-2">flex-direction</h3>
                  <p className="text-slate-400 mb-2">Defines the direction of flex items</p>
                  <div className="space-y-1 text-xs">
                    <div className="bg-slate-700 px-2 py-1 rounded"><Val>row</Val> - horizontal (default)</div>
                    <div className="bg-slate-700 px-2 py-1 rounded"><Val>column</Val> - vertical</div>
                  </div>
                </div>

                <div className="bg-slate-800 p-4 rounded-xl border border-slate-600">
                  <h3 className="text-teal-400 font-bold mb-2">justify-content</h3>
                  <p className="text-slate-400 mb-2">Aligns items along the main axis</p>
                  <div className="space-y-1 text-xs">
                    <div className="bg-slate-700 px-2 py-1 rounded"><Val>center</Val> - centers items</div>
                    <div className="bg-slate-700 px-2 py-1 rounded"><Val>space-between</Val> - space between</div>
                    <div className="bg-slate-700 px-2 py-1 rounded"><Val>space-around</Val> - space around</div>
                  </div>
                </div>

                <div className="bg-slate-800 p-4 rounded-xl border border-slate-600">
                  <h3 className="text-teal-400 font-bold mb-2">align-items</h3>
                  <p className="text-slate-400 mb-2">Aligns items along the cross axis</p>
                  <div className="space-y-1 text-xs">
                    <div className="bg-slate-700 px-2 py-1 rounded"><Val>center</Val> - center vertically</div>
                    <div className="bg-slate-700 px-2 py-1 rounded"><Val>flex-start</Val> - align to start</div>
                    <div className="bg-slate-700 px-2 py-1 rounded"><Val>flex-end</Val> - align to end</div>
                  </div>
                </div>

                <div className="bg-slate-800 p-4 rounded-xl border border-slate-600">
                  <h3 className="text-teal-400 font-bold mb-2">flex-wrap</h3>
                  <p className="text-slate-400 mb-2">Allows items to wrap onto multiple lines</p>
                  <div className="space-y-1 text-xs">
                    <div className="bg-slate-700 px-2 py-1 rounded"><Val>nowrap</Val> - single line (default)</div>
                    <div className="bg-slate-700 px-2 py-1 rounded"><Val>wrap</Val> - wraps to new lines</div>
                  </div>
                </div>

                <div className="bg-slate-800 p-4 rounded-xl border border-slate-600">
                  <h3 className="text-teal-400 font-bold mb-2">gap</h3>
                  <p className="text-slate-400 mb-2">Sets space between flex items</p>
                  <div className="space-y-1 text-xs">
                    <div className="bg-slate-700 px-2 py-1 rounded"><Val>10px</Val> - equal gap</div>
                    <div className="bg-slate-700 px-2 py-1 rounded"><Val>10px 20px</Val> - row/column gap</div>
                  </div>
                </div>

                <div className="bg-slate-800 p-4 rounded-xl border border-slate-600">
                  <h3 className="text-teal-400 font-bold mb-2">flex (item)</h3>
                  <p className="text-slate-400 mb-2">Controls how items grow/shrink</p>
                  <div className="space-y-1 text-xs">
                    <div className="bg-slate-700 px-2 py-1 rounded"><Val>1 1 300px</Val></div>
                    <div className="text-slate-500">grow | shrink | basis</div>
                  </div>
                </div>
              </div>
            </div>
          </Slide>



          {/* SLIDE 6: Grid */}
          <Slide isActive={currentSlide === 6}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-8 text-center text-emerald-400">5. Display: Grid 🏁</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                      <p className="text-slate-300">Grid layout allows for two-dimensional layout control, enabling complex designs with rows and columns.</p>
                      <CodeCard className="text-xs md:text-sm">
                        <Tag>.container</Tag> {'{'}{'\n'}
                        {'  '}<Attr>display</Attr>: <Val>grid</Val>;{'\n'}
                        {'  '}<Attr>grid-template-columns</Attr>:{'\n'}
                        {'    '}<Val>repeat(auto-fill, minmax(200px, 1fr))</Val>;{'\n'}
                        {'  '}<Attr>grid-template-rows</Attr>: <Val>auto</Val>;{'\n'}
                        {'  '}<Attr>gap</Attr>: <Val>20px</Val>;{'\n'}
                        {'}'}
                      </CodeCard>
                      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 text-blue-200 text-sm">
                        ℹ️ Grid layout provides precise control over the placement of elements, allowing for responsive designs with ease.
                      </div>
                      <p className="text-sm text-slate-400 bg-emerald-900/20 p-3 rounded">
                        <strong className="text-emerald-400">fr</strong> = fraction of available space.
                        <br />
                        <strong className="text-emerald-400">auto-fill</strong> = creates as many columns as will fit.
                      </p>
                  </div>

                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                      <div className="grid grid-cols-3 gap-4 bg-slate-900/50 p-4 rounded-xl border-2 border-dashed border-slate-600">
                          {[1, 2, 3, 4, 5, 6].map(n => (
                              <div key={n} className="bg-emerald-600/80 h-20 rounded text-xl font-bold hover:bg-emerald-500 transition-colors text-center leading-[5rem]">
                                  {n}
                              </div>
                          ))}
                      </div>
                      <p className="text-center text-sm text-slate-500 mt-2">grid-template-columns: 1fr 1fr 1fr;</p>
                  </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 7: Display None */}
          <Slide isActive={currentSlide === 7}>
            <div className="max-w-4xl w-full p-8 z-10 text-center">
              <h2 className="text-5xl font-bold mb-8 text-slate-400">6. Display: None 👻</h2>
              
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-600 mb-8 inline-block">
                <Ghost className="w-24 h-24 text-slate-600 animate-pulse mx-auto mb-4" />
                <CodeCard>
                    <Tag>.hidden</Tag> {'{'}{'\n'}
                    {'  '}<Attr>display</Attr>: <Val>none</Val>;{'\n'}
                    {'}'}
                </CodeCard>
              </div>
              
              <p className="text-xl text-slate-300 max-w-xl mx-auto mb-6">
                The <code className="text-red-400">none</code> value removes the element from the document flow, making it invisible and not taking up any space.
              </p>
              
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 text-blue-200 text-sm max-w-xl mx-auto">
                ℹ️ Elements with <code>display: none</code> are not rendered on the page and do not affect the layout of other elements.
              </div>
            </div>
          </Slide>

          {/* SLIDE 8: Block vs Inline Example */}
          <Slide isActive={currentSlide === 8}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-4xl font-bold mb-8 text-center text-violet-400">Example: Block vs. Inline 🆚</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-300">HTML</h3>
                  <CodeCard className="text-xs">
                    {'<'}<Tag>div</Tag> <Attr>class</Attr>=<Val>"block-example"</Val>{'>'}{'\n'}
                    {'  This is a block element.'}{'\n'}
                    {'</'}<Tag>div</Tag>{'>'}{'\n'}
                    {'<'}<Tag>span</Tag> <Attr>class</Attr>=<Val>"inline-example"</Val>{'>'}{'\n'}
                    {'  This is an inline element.'}{'\n'}
                    {'</'}<Tag>span</Tag>{'>'}
                  </CodeCard>
                  
                  <h3 className="text-xl font-bold text-slate-300 mt-4">CSS</h3>
                  <CodeCard className="text-xs">
                    <Tag>.block-example</Tag> {'{'}{'\n'}
                    {'  '}<Attr>display</Attr>: <Val>block</Val>;{'\n'}
                    {'  '}<Attr>background-color</Attr>: <Val>lightblue</Val>;{'\n'}
                    {'  '}<Attr>padding</Attr>: <Val>10px</Val>;{'\n'}
                    {'}'}{'\n'}{'\n'}
                    <Tag>.inline-example</Tag> {'{'}{'\n'}
                    {'  '}<Attr>display</Attr>: <Val>inline</Val>;{'\n'}
                    {'  '}<Attr>background-color</Attr>: <Val>lightgreen</Val>;{'\n'}
                    {'  '}<Attr>padding</Attr>: <Val>5px</Val>;{'\n'}
                    {'}'}
                  </CodeCard>
                </div>

                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-bold text-slate-300 mb-4">Result:</h3>
                  <div className="bg-white rounded-lg p-4 text-gray-800">
                    <div className="bg-blue-200 p-2.5 mb-2 rounded">This is a block element.</div>
                    <span className="bg-green-200 p-1 rounded">This is an inline element.</span>
                  </div>
                  <p className="text-sm text-slate-400 mt-4">Notice: Block takes full width, inline only takes needed space.</p>
                </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 9: Navigation Bar Example */}
          <Slide isActive={currentSlide === 9}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-4xl font-bold mb-8 text-center text-orange-400">Example: Navigation Bar 🧭</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-300">HTML</h3>
                  <CodeCard className="text-xs">
                    {'<'}<Tag>nav</Tag> <Attr>class</Attr>=<Val>"navbar"</Val>{'>'}{'\n'}
                    {'  <'}<Tag>ul</Tag>{'>'}{'\n'}
                    {'    <'}<Tag>li</Tag>{'><'}<Tag>a</Tag> <Attr>href</Attr>=<Val>"#"</Val>{'>'}Home{'</'}<Tag>a</Tag>{'></'}<Tag>li</Tag>{'>'}{'\n'}
                    {'    <'}<Tag>li</Tag>{'><'}<Tag>a</Tag> <Attr>href</Attr>=<Val>"#"</Val>{'>'}About{'</'}<Tag>a</Tag>{'></'}<Tag>li</Tag>{'>'}{'\n'}
                    {'    <'}<Tag>li</Tag>{'><'}<Tag>a</Tag> <Attr>href</Attr>=<Val>"#"</Val>{'>'}Services{'</'}<Tag>a</Tag>{'></'}<Tag>li</Tag>{'>'}{'\n'}
                    {'    <'}<Tag>li</Tag>{'><'}<Tag>a</Tag> <Attr>href</Attr>=<Val>"#"</Val>{'>'}Contact{'</'}<Tag>a</Tag>{'></'}<Tag>li</Tag>{'>'}{'\n'}
                    {'  </'}<Tag>ul</Tag>{'>'}{'\n'}
                    {'</'}<Tag>nav</Tag>{'>'}
                  </CodeCard>
                  
                  <h3 className="text-xl font-bold text-slate-300 mt-4">CSS</h3>
                  <CodeCard className="text-xs">
                    <Tag>.navbar ul</Tag> {'{'}{'\n'}
                    {'  '}<Attr>list-style-type</Attr>: <Val>none</Val>;{'\n'}
                    {'  '}<Attr>padding</Attr>: <Val>0</Val>; <Attr>margin</Attr>: <Val>0</Val>;{'\n'}
                    {'}'}{'\n'}
                    <Tag>.navbar li</Tag> {'{'}{'\n'}
                    {'  '}<Attr>display</Attr>: <Val>inline-block</Val>;{'\n'}
                    {'  '}<Attr>margin-right</Attr>: <Val>20px</Val>;{'\n'}
                    {'}'}{'\n'}
                    <Tag>.navbar a</Tag> {'{'}{'\n'}
                    {'  '}<Attr>text-decoration</Attr>: <Val>none</Val>;{'\n'}
                    {'  '}<Attr>color</Attr>: <Val>#333</Val>;{'\n'}
                    {'}'}
                  </CodeCard>
                </div>

                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-bold text-slate-300 mb-4">Result:</h3>
                  <div className="bg-white rounded-lg p-4">
                    <nav>
                      <ul className="list-none p-0 m-0">
                        <li className="inline-block mr-5"><a href="#" className="text-gray-800 no-underline hover:text-orange-500 transition-colors">Home</a></li>
                        <li className="inline-block mr-5"><a href="#" className="text-gray-800 no-underline hover:text-orange-500 transition-colors">About</a></li>
                        <li className="inline-block mr-5"><a href="#" className="text-gray-800 no-underline hover:text-orange-500 transition-colors">Services</a></li>
                        <li className="inline-block"><a href="#" className="text-gray-800 no-underline hover:text-orange-500 transition-colors">Contact</a></li>
                      </ul>
                    </nav>
                  </div>
                  <p className="text-sm text-slate-400 mt-4">Using <code className="text-orange-400">inline-block</code> to display list items horizontally!</p>
                </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 10: Card Layout with Flexbox */}
          <Slide isActive={currentSlide === 10}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-4xl font-bold mb-8 text-center text-teal-400">Example: Card Layout with Flexbox 🃏</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-300">CSS</h3>
                  <CodeCard className="text-xs">
                    <Tag>.card-container</Tag> {'{'}{'\n'}
                    {'  '}<Attr>display</Attr>: <Val>flex</Val>;{'\n'}
                    {'  '}<Attr>flex-wrap</Attr>: <Val>wrap</Val>;{'\n'}
                    {'  '}<Attr>gap</Attr>: <Val>20px</Val>;{'\n'}
                    {'}'}{'\n'}{'\n'}
                    <Tag>.card</Tag> {'{'}{'\n'}
                    {'  '}<Attr>flex</Attr>: <Val>1 1 300px</Val>;{'\n'}
                    {'  '}<Comment>/* Grow, shrink, base width */</Comment>{'\n'}
                    {'  '}<Attr>background-color</Attr>: <Val>#f9f9f9</Val>;{'\n'}
                    {'  '}<Attr>padding</Attr>: <Val>20px</Val>;{'\n'}
                    {'  '}<Attr>border</Attr>: <Val>1px solid #ddd</Val>;{'\n'}
                    {'}'}
                  </CodeCard>
                </div>

                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-bold text-slate-300 mb-4">Result:</h3>
                  <div className="flex flex-wrap gap-4">
                    {[1, 2, 3, 4, 5, 6].map(n => (
                      <div key={n} className="flex-1 min-w-[120px] bg-slate-100 text-gray-800 p-4 rounded border border-gray-300 text-center">
                        Card {n}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-slate-400 mt-4">Cards wrap and grow/shrink responsively!</p>
                </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 11: Grid Layout Example */}
          <Slide isActive={currentSlide === 11}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-4xl font-bold mb-8 text-center text-emerald-400">Example: Grid Layout 📊</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-300">CSS</h3>
                  <CodeCard className="text-xs">
                    <Tag>.grid-container</Tag> {'{'}{'\n'}
                    {'  '}<Attr>display</Attr>: <Val>grid</Val>;{'\n'}
                    {'  '}<Attr>grid-template-columns</Attr>:{'\n'}
                    {'    '}<Val>repeat(auto-fill, minmax(200px, 1fr))</Val>;{'\n'}
                    {'  '}<Comment>/* Responsive columns */</Comment>{'\n'}
                    {'  '}<Attr>gap</Attr>: <Val>20px</Val>;{'\n'}
                    {'}'}{'\n'}{'\n'}
                    <Tag>.grid-item</Tag> {'{'}{'\n'}
                    {'  '}<Attr>background-color</Attr>: <Val>#f9f9f9</Val>;{'\n'}
                    {'  '}<Attr>padding</Attr>: <Val>20px</Val>;{'\n'}
                    {'  '}<Attr>border</Attr>: <Val>1px solid #ddd</Val>;{'\n'}
                    {'}'}
                  </CodeCard>
                </div>

                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-bold text-slate-300 mb-4">Result:</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5, 6].map(n => (
                      <div key={n} className="bg-slate-100 text-gray-800 p-4 rounded border border-gray-300 text-center">
                        Item {n}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-slate-400 mt-4">Grid auto-fills columns based on available space!</p>
                </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 12: Interactive Playground */}
          <Slide isActive={currentSlide === 12}>
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
                        <div className="bg-indigo-500 p-4 rounded text-white text-center">I am a Block DIV (full width)</div>
                        <div className="bg-purple-500 p-4 rounded text-white text-center">I am another Block DIV</div>
                        <div className="bg-pink-500 p-4 rounded text-white text-center">We stack automatically!</div>
                    </div>
                )}
                {activeTab === 'inline' && (
                    <div className="text-xl leading-relaxed text-white">
                        Here is some text with <span className="bg-indigo-500 p-2 rounded text-white">inline spans</span> inside it.
                        Unlike block elements, <span className="bg-purple-500 p-2 rounded text-white">they flow</span> with the text
                        and wrap naturally <span className="bg-pink-500 p-2 rounded text-white">when needed</span>.
                    </div>
                )}
                {activeTab === 'flex' && (
                    <div className="flex flex-wrap gap-4 justify-center items-center h-full">
                        {[1, 2, 3, 4, 5].map(n => (
                            <div key={n} className="w-24 h-24 bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl flex items-center justify-center text-2xl font-bold shadow-lg">
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

          {/* SLIDE 13: Summary */}
          <Slide isActive={currentSlide === 13}>
            <div className="max-w-5xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-10 text-center text-white">Summary 📋</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-indigo-500/20 border border-indigo-500/50 rounded-xl p-4">
                  <h3 className="text-indigo-400 font-bold mb-2">Block</h3>
                  <p className="text-sm text-slate-300">Full width, new line, can set dimensions</p>
                </div>
                <div className="bg-pink-500/20 border border-pink-500/50 rounded-xl p-4">
                  <h3 className="text-pink-400 font-bold mb-2">Inline</h3>
                  <p className="text-sm text-slate-300">Content width only, flows in text</p>
                </div>
                <div className="bg-yellow-500/20 border border-yellow-500/50 rounded-xl p-4">
                  <h3 className="text-yellow-400 font-bold mb-2">Inline-Block</h3>
                  <p className="text-sm text-slate-300">Best of both: inline + dimensions</p>
                </div>
                <div className="bg-teal-500/20 border border-teal-500/50 rounded-xl p-4">
                  <h3 className="text-teal-400 font-bold mb-2">Flex</h3>
                  <p className="text-sm text-slate-300">1D layout, powerful alignment</p>
                </div>
                <div className="bg-emerald-500/20 border border-emerald-500/50 rounded-xl p-4">
                  <h3 className="text-emerald-400 font-bold mb-2">Grid</h3>
                  <p className="text-sm text-slate-300">2D layout, rows & columns</p>
                </div>
                <div className="bg-slate-500/20 border border-slate-500/50 rounded-xl p-4">
                  <h3 className="text-slate-400 font-bold mb-2">None</h3>
                  <p className="text-sm text-slate-300">Completely hidden, no space</p>
                </div>
              </div>
              
              <p className="text-center text-slate-400 mt-8 text-lg">
                The <code className="text-indigo-400">display</code> property is fundamental to controlling layout and appearance of HTML elements!
              </p>
            </div>
          </Slide>

          {/* SLIDE 14: Homework */}
          <Slide isActive={currentSlide === 14}>
            <div className="text-center p-8 max-w-4xl z-10">
              <div className="inline-block p-4 bg-white/10 rounded-full mb-6 animate-bounce">
                <BookOpen className="w-16 h-16 text-indigo-400" />
              </div>
              <h1 className="text-6xl font-bold mb-8">Homework 📚</h1>

              <div className="bg-slate-800/80 backdrop-blur-md p-8 rounded-2xl border border-slate-600 text-left max-w-2xl mx-auto shadow-2xl space-y-6">
                <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-indigo-400 shrink-0 mt-1" />
                    <p className="text-slate-300">Create a simple webpage with a <strong className="text-white">header</strong>, a <strong className="text-white">navigation bar</strong>, and a <strong className="text-white">content section</strong>.</p>
                </div>
                <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-indigo-400 shrink-0 mt-1" />
                    <p className="text-slate-300">Use the <code className="text-yellow-400">display</code> property to style the navigation bar with <strong className="text-white">inline-block</strong> elements.</p>
                </div>
                <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-indigo-400 shrink-0 mt-1" />
                    <p className="text-slate-300">Create a <strong className="text-white">flexbox layout</strong> for the content section, displaying multiple cards.</p>
                </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 15: Resources */}
          <Slide isActive={currentSlide === 15}>
            <div className="text-center p-8 max-w-4xl z-10">
              <div className="inline-block p-4 bg-white/10 rounded-full mb-6">
                <ExternalLink className="w-16 h-16 text-blue-400" />
              </div>
              <h1 className="text-5xl font-bold mb-8">Additional Resources 🔗</h1>

              <div className="bg-slate-800/80 backdrop-blur-md p-8 rounded-2xl border border-slate-600 text-left max-w-2xl mx-auto shadow-2xl space-y-4">
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/display" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-xl hover:bg-slate-700 transition-colors group">
                    <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold">M</div>
                    <div>
                      <p className="text-white font-semibold group-hover:text-orange-400 transition-colors">MDN Web Docs - CSS Display</p>
                      <p className="text-slate-400 text-sm">Comprehensive reference documentation</p>
                    </div>
                </a>
                
                <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-xl hover:bg-slate-700 transition-colors group">
                    <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold">CT</div>
                    <div>
                      <p className="text-white font-semibold group-hover:text-teal-400 transition-colors">CSS Tricks - Guide to Flexbox</p>
                      <p className="text-slate-400 text-sm">Visual guide with examples</p>
                    </div>
                </a>
                
                <a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-xl hover:bg-slate-700 transition-colors group">
                    <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center text-white font-bold">CT</div>
                    <div>
                      <p className="text-white font-semibold group-hover:text-emerald-400 transition-colors">CSS Tricks - Guide to Grid</p>
                      <p className="text-slate-400 text-sm">Complete grid layout reference</p>
                    </div>
                </a>
                
                <a href="https://www.w3schools.com/cssref/pr_class_display.asp" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-xl hover:bg-slate-700 transition-colors group">
                    <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold">W3</div>
                    <div>
                      <p className="text-white font-semibold group-hover:text-green-400 transition-colors">W3Schools - CSS Display</p>
                      <p className="text-slate-400 text-sm">Interactive examples and tutorials</p>
                    </div>
                </a>
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
