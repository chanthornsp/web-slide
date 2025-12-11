import SlideContainer from '../components/SlideContainer';
import Slide from '../components/Slide';
import CodeCard, { Tag, Attr, Val, Comment } from '../components/CodeCard';
import { Table2, Square, Maximize, Grid, Info, Music, RotateCcw, CheckCircle, PaintBucket, AlertOctagon } from 'lucide-react';

export default function TablesSlides() {
  return (
    <SlideContainer totalSlides={9} accentColor="emerald">
      {(currentSlide, goToSlide) => (
        <>
          {/* Background Blobs */}
          <div className="fixed inset-0 pointer-events-none">
            <div className="blob bg-emerald-600 w-96 h-96 rounded-full top-0 left-0 opacity-20 mix-blend-screen animate-move"></div>
            <div className="blob bg-indigo-600 w-96 h-96 rounded-full bottom-0 right-0 opacity-20 mix-blend-screen" style={{animationDelay: '2s'}}></div>
            <div className="blob bg-orange-500 w-80 h-80 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20 mix-blend-screen"></div>
          </div>

          {/* SLIDE 0: Title */}
          <Slide isActive={currentSlide === 0}>
            <div className="text-center p-8 max-w-4xl z-10">
              <div className="inline-block p-6 rounded-3xl bg-gradient-to-br from-emerald-400 to-cyan-500 mb-6 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <Table2 className="w-24 h-24 text-white" />
              </div>
              <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                HTML Tables
              </h1>
              <p className="text-2xl text-slate-300 font-light max-w-2xl mx-auto">
                Organizing Data Like a Pro 📊
              </p>
              <div className="mt-12 flex justify-center gap-6">
                <div className="bg-white/5 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/10">
                  <span className="text-2xl">🧱</span> Rows
                </div>
                <div className="bg-white/5 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/10">
                  <span className="text-2xl">🏛️</span> Columns
                </div>
                <div className="bg-white/5 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/10">
                  <span className="text-2xl">📑</span> Data
                </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 1: Basic Ingredients */}
          <Slide isActive={currentSlide === 1}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-emerald-400">The Basic Ingredients 🥣</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800 p-6 rounded-xl border border-slate-600 hover:border-emerald-400 transition-colors">
                    <code className="text-2xl text-pink-400 font-bold mb-2 block">&lt;table&gt;</code>
                    <p className="text-slate-300">The wrapper. Everything lives inside this box.</p>
                  </div>
                  <div className="bg-slate-800 p-6 rounded-xl border border-slate-600 hover:border-yellow-400 transition-colors">
                    <code className="text-2xl text-yellow-400 font-bold mb-2 block">&lt;tr&gt;</code>
                    <p className="text-slate-300">Table Row. Creates a horizontal line.</p>
                  </div>
                  <div className="bg-slate-800 p-6 rounded-xl border border-slate-600 hover:border-blue-400 transition-colors">
                    <code className="text-2xl text-blue-400 font-bold mb-2 block">&lt;th&gt;</code>
                    <p className="text-slate-300">Table Header. Bold & Centered text. Use for titles.</p>
                  </div>
                  <div className="bg-slate-800 p-6 rounded-xl border border-slate-600 hover:border-green-400 transition-colors">
                    <code className="text-2xl text-green-400 font-bold mb-2 block">&lt;td&gt;</code>
                    <p className="text-slate-300">Table Data. The actual content cell.</p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur-lg opacity-20"></div>
                  <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 relative">
                    <CodeCard>
                      <Tag>&lt;table&gt;</Tag>{'\n'}
                      {'  '}<Tag>&lt;tr&gt;</Tag>{'\n'}
                      {'    '}<Tag>&lt;th&gt;</Tag>Fruit<Tag>&lt;/th&gt;</Tag>{'\n'}
                      {'    '}<Tag>&lt;th&gt;</Tag>Color<Tag>&lt;/th&gt;</Tag>{'\n'}
                      {'  '}<Tag>&lt;/tr&gt;</Tag>{'\n'}
                      {'  '}<Tag>&lt;tr&gt;</Tag>{'\n'}
                      {'    '}<Tag>&lt;td&gt;</Tag>Apple<Tag>&lt;/td&gt;</Tag>{'\n'}
                      {'    '}<Tag>&lt;td&gt;</Tag>Red<Tag>&lt;/td&gt;</Tag>{'\n'}
                      {'  '}<Tag>&lt;/tr&gt;</Tag>{'\n'}
                      <Tag>&lt;/table&gt;</Tag>
                    </CodeCard>
                  </div>
                </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 2: Table Sections */}
          <Slide isActive={currentSlide === 2}>
            <div className="max-w-5xl w-full p-8 text-center z-10">
              <h2 className="text-5xl font-bold mb-8">Table Anatomy 🦴</h2>
              <p className="text-xl text-slate-300 mb-12">
                Just like a document (or a person!), tables have a head, body, and feet.
              </p>

              <div className="flex flex-col md:flex-row gap-8 items-start justify-center">
                <div className="w-full md:w-1/2 space-y-2">
                  <div className="p-4 bg-pink-500/20 border-2 border-pink-500 rounded-t-lg text-pink-300 font-bold flex items-center justify-center gap-2">
                    &lt;thead&gt; → Headers
                  </div>
                  <div className="p-8 bg-emerald-500/20 border-2 border-emerald-500 text-emerald-300 font-bold h-32 flex items-center justify-center gap-2">
                    &lt;tbody&gt; → Main Data
                  </div>
                  <div className="p-4 bg-blue-500/20 border-2 border-blue-500 rounded-b-lg text-blue-300 font-bold flex items-center justify-center gap-2">
                    &lt;tfoot&gt; → Totals/Footer
                  </div>
                </div>

                <div className="w-full md:w-1/2">
                  <CodeCard className="text-sm">
                    <Tag>&lt;table&gt;</Tag>{'\n'}
                    {'  '}<Tag>&lt;thead&gt;</Tag>{'\n'}
                    {'    '}<Tag>&lt;tr&gt;</Tag>{'\n'}
                    {'      '}<Tag>&lt;th&gt;</Tag>Item<Tag>&lt;/th&gt;</Tag>{'\n'}
                    {'      '}<Tag>&lt;th&gt;</Tag>Cost<Tag>&lt;/th&gt;</Tag>{'\n'}
                    {'    '}<Tag>&lt;/tr&gt;</Tag>{'\n'}
                    {'  '}<Tag>&lt;/thead&gt;</Tag>{'\n'}
                    {'\n'}
                    {'  '}<Tag>&lt;tbody&gt;</Tag>{'\n'}
                    {'    '}<Tag>&lt;tr&gt;</Tag>{'\n'}
                    {'      '}<Tag>&lt;td&gt;</Tag>Phone<Tag>&lt;/td&gt;</Tag>{'\n'}
                    {'      '}<Tag>&lt;td&gt;</Tag>$999<Tag>&lt;/td&gt;</Tag>{'\n'}
                    {'    '}<Tag>&lt;/tr&gt;</Tag>{'\n'}
                    {'  '}<Tag>&lt;/tbody&gt;</Tag>{'\n'}
                    {'\n'}
                    {'  '}<Tag>&lt;tfoot&gt;</Tag>{'\n'}
                    {'    '}<Tag>&lt;tr&gt;</Tag>{'\n'}
                    {'      '}<Tag>&lt;td&gt;</Tag>Total<Tag>&lt;/td&gt;</Tag>{'\n'}
                    {'      '}<Tag>&lt;td&gt;</Tag>$999<Tag>&lt;/td&gt;</Tag>{'\n'}
                    {'    '}<Tag>&lt;/tr&gt;</Tag>{'\n'}
                    {'  '}<Tag>&lt;/tfoot&gt;</Tag>{'\n'}
                    <Tag>&lt;/table&gt;</Tag>
                  </CodeCard>
                </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 3: Live Example */}
          <Slide isActive={currentSlide === 3}>
            <div className="max-w-4xl w-full p-8 z-10">
              <h2 className="text-4xl font-bold mb-6 text-center">Product Inventory Example</h2>

              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-8 shadow-2xl">
                <table className="w-full border-collapse">
                  <caption className="text-slate-400 mb-2 italic">Product Inventory 2025</caption>
                  <thead>
                    <tr className="bg-pink-500/20">
                      <th className="border border-white/10 p-3 text-pink-400">Product Name</th>
                      <th className="border border-white/10 p-3 text-pink-400">Price (USD)</th>
                      <th className="border border-white/10 p-3 text-pink-400">Stock Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-white/10 p-3 text-slate-300">iPhone 15 Pro</td>
                      <td className="border border-white/10 p-3 text-slate-300">$999</td>
                      <td className="border border-white/10 p-3 text-green-400">In Stock</td>
                    </tr>
                    <tr>
                      <td className="border border-white/10 p-3 text-slate-300">MacBook Air M3</td>
                      <td className="border border-white/10 p-3 text-slate-300">$1,299</td>
                      <td className="border border-white/10 p-3 text-yellow-400">Low Stock</td>
                    </tr>
                    <tr>
                      <td className="border border-white/10 p-3 text-slate-300">AirPods Pro</td>
                      <td className="border border-white/10 p-3 text-slate-300">$249</td>
                      <td className="border border-white/10 p-3 text-red-400">Out of Stock</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="3" className="border border-white/10 p-2 text-slate-500 text-xs text-center">
                        Last updated: May 21, 2025 | Total Products: 3
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              <p className="text-center text-slate-300">
                Notice the <code className="bg-white/10 px-2 py-1 rounded text-pink-300">&lt;caption&gt;</code> at the top and the <code className="bg-white/10 px-2 py-1 rounded text-blue-300">&lt;tfoot&gt;</code> spanning all columns at the bottom!
              </p>
            </div>
          </Slide>

          {/* SLIDE 4: Attributes */}
          <Slide isActive={currentSlide === 4}>
            <div className="max-w-5xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-purple-400">Table Attributes 🎛️</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-purple-500 transition-all hover:-translate-y-2">
                  <div className="bg-purple-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-purple-400">
                    <Square className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">border</h3>
                  <p className="text-sm text-slate-400">Defines the thickness of the border around the table and cells.</p>
                  <code className="text-xs bg-black/30 p-1 rounded mt-2 block text-purple-300">border="1"</code>
                </div>

                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-pink-500 transition-all hover:-translate-y-2">
                  <div className="bg-pink-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-pink-400">
                    <Maximize className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">cellpadding</h3>
                  <p className="text-sm text-slate-400">Space between the cell content and its border. (Like internal cushion).</p>
                  <code className="text-xs bg-black/30 p-1 rounded mt-2 block text-pink-300">cellpadding="10"</code>
                </div>

                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all hover:-translate-y-2">
                  <div className="bg-cyan-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-cyan-400">
                    <Grid className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">cellspacing</h3>
                  <p className="text-sm text-slate-400">Space between the cells themselves.</p>
                  <code className="text-xs bg-black/30 p-1 rounded mt-2 block text-cyan-300">cellspacing="5"</code>
                </div>
              </div>

              <div className="mt-8 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg flex items-center gap-4">
                <Info className="text-yellow-400" />
                <p className="text-sm text-yellow-100">
                  <strong>Note:</strong> In modern web development, we usually control these with CSS (borders, padding, gap), but it's good to know the attributes exist!
                </p>
              </div>
            </div>
          </Slide>
          
          {/* SLIDE 5: Modern Styling (NEW) */}
          <Slide isActive={currentSlide === 5}>
             <div className="max-w-6xl w-full p-8 z-10 text-center">
               <div className="inline-block p-4 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full mb-6">
                  <PaintBucket className="w-12 h-12 text-white" />
               </div>
               <h2 className="text-5xl font-bold mb-8 text-rose-400">Modern Styling (CSS) 🎨</h2>
               <p className="text-xl text-slate-300 mb-12">
                   Don't use old attributes like `border="1"`. Use CSS to make it beautiful!
               </p>

               <div className="flex flex-col md:flex-row gap-8 justify-center">
                  <CodeCard className="text-lg text-left">
                    <Tag>&lt;style&gt;</Tag>{'\n'}
                    {'  '}table {'{'}{'\n'}
                    {'    '}width: 100%;{'\n'}
                    {'    '}border-collapse: collapse;{'\n'}
                    {'  '}{'}'}{'\n'}
                    {'  '}th, td {'{'}{'\n'}
                    {'    '}padding: 12px;{'\n'}
                    {'    '}border: 1px solid #ddd;{'\n'}
                    {'  '}{'}'}{'\n'}
                    <Tag>&lt;/style&gt;</Tag>
                  </CodeCard>
                  
                  <div className="bg-white rounded-lg overflow-hidden text-slate-800 p-4 shadow-xl w-full max-w-sm">
                     <table className="w-full text-left border-collapse">
                        <thead>
                           <tr className="bg-rose-500 text-white">
                              <th className="p-3 border-b">Name</th>
                              <th className="p-3 border-b">Role</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr className="bg-slate-50">
                              <td className="p-3 border-b border-slate-200">Alice</td>
                              <td className="p-3 border-b border-slate-200">Admin</td>
                           </tr>
                           <tr className="bg-white">
                              <td className="p-3 border-b border-slate-200">Bob</td>
                              <td className="p-3 border-b border-slate-200">User</td>
                           </tr>
                        </tbody>
                     </table>
                     <p className="mt-4 text-xs text-slate-500 text-center">A clean, CSS-styled table.</p>
                  </div>
               </div>
             </div>
          </Slide>

          {/* SLIDE 6: Merging Cells */}
          <Slide isActive={currentSlide === 6}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-8 text-center text-orange-400">Merging Magic 🪄</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-orange-500 text-white px-2 py-1 rounded text-sm font-bold">colspan</span>
                    <h3 className="text-2xl font-bold">Spanning Columns</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-4 bg-black/30 p-4 rounded-lg">
                    <div className="bg-orange-500/20 border border-orange-500 text-orange-300 p-4 rounded text-center col-span-2">
                      Header (colspan="2")
                    </div>
                    <div className="bg-slate-700 p-4 rounded text-center text-sm">Data</div>
                    <div className="bg-slate-700 p-4 rounded text-center text-sm">Data</div>
                  </div>
                  <CodeCard className="text-sm">
                    <Tag>&lt;th </Tag><Attr>colspan</Attr>=<Val>"2"</Val><Tag>&gt;</Tag>Header<Tag>&lt;/th&gt;</Tag>
                  </CodeCard>
                </div>

                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-indigo-500 text-white px-2 py-1 rounded text-sm font-bold">rowspan</span>
                    <h3 className="text-2xl font-bold">Spanning Rows</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-4 bg-black/30 p-4 rounded-lg">
                    <div className="bg-indigo-500/20 border border-indigo-500 text-indigo-300 p-4 rounded flex items-center justify-center row-span-2">
                      User (rowspan="2")
                    </div>
                    <div className="bg-slate-700 p-2 rounded text-center text-sm">Email</div>
                    <div className="bg-slate-700 p-2 rounded text-center text-sm">Phone</div>
                  </div>
                  <CodeCard className="text-sm">
                    <Tag>&lt;td </Tag><Attr>rowspan</Attr>=<Val>"2"</Val><Tag>&gt;</Tag>User<Tag>&lt;/td&gt;</Tag>
                  </CodeCard>
                </div>
              </div>
            </div>
          </Slide>
          
           {/* SLIDE 7: Common Mistakes (NEW) */}
          <Slide isActive={currentSlide === 7}>
            <div className="max-w-5xl w-full p-8 z-10">
               <h2 className="text-5xl font-bold mb-10 text-center text-red-400 flex items-center justify-center gap-4">
                 <AlertOctagon className="w-12 h-12" /> Common Mistakes
               </h2>
               
               <div className="space-y-6">
                  <div className="bg-slate-800 p-6 rounded-xl border-l-4 border-red-500">
                     <h3 className="text-xl font-bold text-white mb-2">1. Forgetting to close rows &lt;/tr&gt;</h3>
                     <p className="text-slate-400">If you don't close a row, your table will look like a staircase to nowhere!</p>
                  </div>
                  <div className="bg-slate-800 p-6 rounded-xl border-l-4 border-red-500">
                     <h3 className="text-xl font-bold text-white mb-2">2. Mismatched Cells</h3>
                     <p className="text-slate-400">If row 1 has 3 cells, row 2 needs 3 cells (unless you use colspan). Otherwise, it breaks.</p>
                  </div>
                  <div className="bg-slate-800 p-6 rounded-xl border-l-4 border-red-500">
                     <h3 className="text-xl font-bold text-white mb-2">3. Not using &lt;th&gt;</h3>
                     <p className="text-slate-400">Using standard &lt;td&gt; for headers hurts accessibility and styling. Use &lt;th&gt; for the title row!</p>
                  </div>
               </div>
            </div>
          </Slide>

          {/* SLIDE 8: Homework */}
          <Slide isActive={currentSlide === 8}>
            <div className="text-center p-8 max-w-4xl z-10">
              <div className="inline-block p-4 bg-white/10 rounded-full mb-6 animate-bounce">
                <Music className="w-16 h-16 text-pink-400" />
              </div>
              <h1 className="text-6xl font-bold mb-8">Homework Time! 📝</h1>

              <div className="bg-slate-800/80 backdrop-blur-md p-8 rounded-2xl border border-slate-600 text-left max-w-2xl mx-auto shadow-2xl">
                <h3 className="text-2xl font-bold mb-4 text-emerald-400">Create a "Favorite Songs" Table</h3>
                <ul className="space-y-4 text-lg text-slate-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
                    <span>Include columns for <strong>Song Title</strong>, <strong>Artist</strong>, and <strong>Year</strong>.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
                    <span>Use a <code className="text-pink-400">&lt;caption&gt;</code> to title your list.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
                    <span>Add a <code className="text-blue-400">&lt;tfoot&gt;</code> showing the total number of songs.</span>
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
