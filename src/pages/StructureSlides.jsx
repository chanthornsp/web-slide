import SlideContainer from '../components/SlideContainer';
import Slide from '../components/Slide';
import CodeCard, { Tag, Attr, Val } from '../components/CodeCard';
import { LayoutTemplate, Search, Eye, PanelTop, Newspaper, Box, Layers, FileText, Copyright, User, Mail, Map, Check, ThumbsUp, AlertTriangle, Smartphone, RotateCcw, Brain, Sidebar, Image, Type } from 'lucide-react';

export default function StructureSlides() {
  return (
    <SlideContainer totalSlides={10} accentColor="pink">
      {(currentSlide, goToSlide) => (
        <>
          {/* Background Blobs */}
          <div className="fixed inset-0 pointer-events-none">
            <div className="blob bg-purple-600 w-96 h-96 rounded-full top-0 left-0 opacity-30 mix-blend-multiply animate-move"></div>
            <div className="blob bg-cyan-500 w-96 h-96 rounded-full bottom-0 right-0 opacity-30 mix-blend-multiply" style={{ animationDelay: '2s' }}></div>
            <div className="blob bg-pink-500 w-80 h-80 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20 mix-blend-multiply"></div>
          </div>

          {/* SLIDE 0: Title */}
          <Slide isActive={currentSlide === 0}>
            <div className="text-center p-8 max-w-4xl z-10">
              <div className="inline-block p-4 rounded-3xl bg-gradient-to-br from-pink-500 to-purple-600 mb-6 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <LayoutTemplate className="w-20 h-20 text-white" />
              </div>
              <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
                HTML Structure
              </h1>
              <p className="text-2xl text-slate-300 font-light max-w-2xl mx-auto">
                The Blueprint of the Web 🏗️
              </p>
              <div className="mt-12 flex justify-center gap-4">
                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 flex items-center gap-2">
                  <span className="text-3xl">💀</span>
                  <span className="text-sm font-semibold">Skeleton</span>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 flex items-center gap-2">
                  <span className="text-3xl">🧠</span>
                  <span className="text-sm font-semibold">Semantics</span>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 flex items-center gap-2">
                  <span className="text-3xl">📦</span>
                  <span className="text-sm font-semibold">Containers</span>
                </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 1: What is Semantic HTML? */}
          <Slide isActive={currentSlide === 1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl p-8 items-center z-10">
              <div>
                <h2 className="text-5xl font-bold mb-8 text-cyan-400">Semantic HTML? 🤔</h2>
                <p className="text-2xl mb-6 leading-relaxed text-slate-200">
                  Tags that clearly describe their <span className="text-pink-400 font-bold bg-pink-400/10 px-2 rounded">meaning</span> to both the browser and the developer.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="bg-green-500/20 p-3 rounded-lg text-green-400"><Search className="w-6 h-6" /></div>
                    <div>
                      <h3 className="font-bold">Better SEO</h3>
                      <p className="text-sm text-slate-400">Google loves structure!</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="bg-blue-500/20 p-3 rounded-lg text-blue-400"><Eye className="w-6 h-6" /></div>
                    <div>
                      <h3 className="font-bold">Accessibility</h3>
                      <p className="text-sm text-slate-400">Helps screen readers understand content.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-lg opacity-30"></div>
                <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 relative">
                  <h3 className="text-xl font-bold mb-4 text-center text-red-400">Don't do this ❌</h3>
                  <CodeCard className="text-sm opacity-50 mb-6">
                    <Tag>&lt;div&gt;</Tag>{'\n'}
                    {'  '}<Tag>&lt;div&gt;</Tag>Menu<Tag>&lt;/div&gt;</Tag>{'\n'}
                    {'  '}<Tag>&lt;div&gt;</Tag>Content<Tag>&lt;/div&gt;</Tag>{'\n'}
                    {'  '}<Tag>&lt;div&gt;</Tag>Footer<Tag>&lt;/div&gt;</Tag>{'\n'}
                    <Tag>&lt;/div&gt;</Tag>
                  </CodeCard>
                  <h3 className="text-xl font-bold mb-4 text-center text-green-400">Do this ✅</h3>
                  <CodeCard className="text-lg">
                    <Tag>&lt;header&gt;</Tag>...<Tag>&lt;/header&gt;</Tag>{'\n'}
                    <Tag>&lt;main&gt;</Tag>...<Tag>&lt;/main&gt;</Tag>{'\n'}
                    <Tag>&lt;footer&gt;</Tag>...<Tag>&lt;/footer&gt;</Tag>
                  </CodeCard>
                </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 2: The Head Tag (NEW) */}
          <Slide isActive={currentSlide === 2}>
            <div className="max-w-6xl w-full p-8 z-10">
              <div className="text-center mb-12">
                 <div className="inline-block p-4 bg-purple-500/20 rounded-full mb-4">
                   <Brain className="w-16 h-16 text-purple-400" />
                 </div>
                 <h2 className="text-5xl font-bold text-slate-200">The Brain: &lt;head&gt; 🧠</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <CodeCard>
                  <Tag>&lt;head&gt;</Tag>{'\n'}
                  {'  '}<Tag>&lt;meta </Tag><Attr>charset</Attr>=<Val>"UTF-8"</Val><Tag>&gt;</Tag>{'\n'}
                  {'  '}<Tag>&lt;title&gt;</Tag>My Page<Tag>&lt;/title&gt;</Tag>{'\n'}
                  {'  '}<Tag>&lt;link </Tag><Attr>rel</Attr>=<Val>"stylesheet"</Val> <Attr>href</Attr>=<Val>"style.css"</Val><Tag>&gt;</Tag>{'\n'}
                  {'  '}<Tag>&lt;meta </Tag><Attr>name</Attr>=<Val>"viewport"</Val> <Attr>content</Attr>=<Val>"..."</Val><Tag>&gt;</Tag>{'\n'}
                  <Tag>&lt;/head&gt;</Tag>
                </CodeCard>

                <div className="space-y-6">
                   <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
                     <h3 className="font-bold text-pink-400 text-xl mb-2">&lt;meta&gt;</h3>
                     <p className="text-slate-300">Invisible settings. <code>charset="UTF-8"</code> lets you use emojis! 🚀</p>
                   </div>
                   <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
                     <h3 className="font-bold text-blue-400 text-xl mb-2">&lt;link&gt;</h3>
                     <p className="text-slate-300">Connects external files, like your CSS styles or Favicon.</p>
                   </div>
                   <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
                     <h3 className="font-bold text-yellow-400 text-xl mb-2">&lt;title&gt;</h3>
                     <p className="text-slate-300">The text shown on the browser <strong>Tab</strong> (not the page!).</p>
                   </div>
                </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 3: Header & Nav */}
          <Slide isActive={currentSlide === 3}>
            <div className="max-w-6xl w-full p-8 z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-yellow-400 rounded-lg text-black"><PanelTop className="w-8 h-8" /></div>
                <h2 className="text-5xl font-bold">The Top Floor: Header & Nav</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform">
                  <div className="bg-slate-100 p-2 border-b flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="p-6 border-b-4 border-yellow-400 bg-slate-50">
                    <div className="flex justify-between items-center">
                      <h1 className="text-3xl font-bold text-slate-800">DCS News</h1>
                      <div className="flex gap-4">
                        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-bold">Home</span>
                        <span className="text-slate-500 font-bold">Articles</span>
                        <span className="text-slate-500 font-bold">About</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-12 bg-slate-200 h-full flex items-center justify-center text-slate-400">
                    (Rest of website...)
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <CodeCard>
                    <Tag>&lt;header&gt;</Tag>{'\n'}
                    {'  '}<Tag>&lt;h1&gt;</Tag>DCS News<Tag>&lt;/h1&gt;</Tag>{'\n'}
                    {'  '}<Tag>&lt;nav&gt;</Tag>{'\n'}
                    {'    '}<Tag>&lt;ul&gt;</Tag>{'\n'}
                    {'      '}<Tag>&lt;li&gt;&lt;a </Tag><Attr>href</Attr>=<Val>"/"</Val><Tag>&gt;</Tag>Home<Tag>&lt;/a&gt;&lt;/li&gt;</Tag>{'\n'}
                    {'      '}<Tag>&lt;li&gt;&lt;a </Tag><Attr>href</Attr>=<Val>"/about"</Val><Tag>&gt;</Tag>About<Tag>&lt;/a&gt;&lt;/li&gt;</Tag>{'\n'}
                    {'    '}<Tag>&lt;/ul&gt;</Tag>{'\n'}
                    {'  '}<Tag>&lt;/nav&gt;</Tag>{'\n'}
                    <Tag>&lt;/header&gt;</Tag>
                  </CodeCard>
                  <div className="mt-6 flex gap-4">
                    <div className="bg-yellow-400/10 text-yellow-400 p-4 rounded-lg border border-yellow-400/20 flex-1">
                      <strong>&lt;header&gt;</strong>: Intro content & logos.
                    </div>
                    <div className="bg-blue-400/10 text-blue-400 p-4 rounded-lg border border-blue-400/20 flex-1">
                      <strong>&lt;nav&gt;</strong>: Links to travel the site.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 4: Main, Section, Article */}
          <Slide isActive={currentSlide === 4}>
            <div className="max-w-6xl w-full p-8 text-center z-10">
              <div className="inline-block p-3 bg-purple-500 rounded-xl mb-6 shadow-lg shadow-purple-500/40">
                <Newspaper className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-5xl font-bold mb-12">The Meat: Main, Section, Article</h2>
              
              <div className="flex flex-wrap md:flex-nowrap justify-center gap-6 items-stretch h-96">
                <div className="bg-slate-800 border-2 border-dashed border-slate-600 rounded-2xl p-6 flex flex-col items-center w-full md:w-1/3 hover:border-cyan-400 transition-colors group">
                  <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-bold mb-4">&lt;main&gt;</span>
                  <Box className="w-16 h-16 text-slate-600 mb-4 group-hover:text-cyan-400 transition-colors" />
                  <p className="text-slate-300">The primary content. <br/><span className="text-cyan-400 font-bold">Use once per page!</span></p>
                </div>

                <div className="bg-slate-800 border-2 border-dashed border-slate-600 rounded-2xl p-6 flex flex-col items-center w-full md:w-1/3 hover:border-purple-400 transition-colors group">
                  <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold mb-4">&lt;section&gt;</span>
                  <Layers className="w-16 h-16 text-slate-600 mb-4 group-hover:text-purple-400 transition-colors" />
                  <p className="text-slate-300">Groups related content.<br/>e.g., "Services", "Contact".</p>
                </div>

                <div className="bg-slate-800 border-2 border-dashed border-slate-600 rounded-2xl p-6 flex flex-col items-center w-full md:w-1/3 hover:border-pink-400 transition-colors group">
                  <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold mb-4">&lt;article&gt;</span>
                  <FileText className="w-16 h-16 text-slate-600 mb-4 group-hover:text-pink-400 transition-colors" />
                  <p className="text-slate-300">Self-contained content.<br/>e.g., A Blog Post, A Product.</p>
                </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 5: Aside & Figure (NEW) */}
          <Slide isActive={currentSlide === 5}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-teal-400">The Sidekicks: Aside & Figure 🦸</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 {/* Aside */}
                 <div className="bg-slate-800 p-8 rounded-2xl border border-teal-500/30 relative">
                    <div className="flex items-center gap-3 mb-4">
                       <Sidebar className="text-teal-400 w-8 h-8" />
                       <h3 className="text-3xl font-bold text-white">&lt;aside&gt;</h3>
                    </div>
                    <p className="text-slate-300 mb-6 min-h-[60px]">Content <strong>related</strong> to the main story, but separate. Like a sidebar, ad, or "Read Also".</p>
                    <div className="flex gap-4">
                       <div className="flex-1 bg-white/5 p-4 rounded h-32 border border-white/10">Main Content...</div>
                       <div className="w-1/3 bg-teal-500/20 border border-teal-500 p-2 rounded flex items-center justify-center text-teal-300 font-bold text-sm">
                          &lt;aside&gt;
                       </div>
                    </div>
                 </div>

                 {/* Figure */}
                 <div className="bg-slate-800 p-8 rounded-2xl border border-pink-500/30 relative">
                    <div className="flex items-center gap-3 mb-4">
                       <Image className="text-pink-400 w-8 h-8" />
                       <h3 className="text-3xl font-bold text-white">&lt;figure&gt;</h3>
                    </div>
                    <p className="text-slate-300 mb-6 min-h-[60px]">Wraps an image with its caption. Semantic way to show photos!</p>
                    <CodeCard className="text-sm">
                      <Tag>&lt;figure&gt;</Tag>{'\n'}
                      {'  '}<Tag>&lt;img </Tag><Attr>src</Attr>=<Val>"cat.jpg"</Val><Tag>/&gt;</Tag>{'\n'}
                      {'  '}<Tag>&lt;figcaption&gt;</Tag>My Cat<Tag>&lt;/figcaption&gt;</Tag>{'\n'}
                      <Tag>&lt;/figure&gt;</Tag>
                    </CodeCard>
                 </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 6: Footer */}
          <Slide isActive={currentSlide === 6}>
            <div className="max-w-4xl text-center p-8 z-10">
              <h2 className="text-5xl font-bold mb-8 text-slate-400">The Basement: Footer</h2>
              <div className="relative group">
                <div className="absolute inset-0 bg-slate-700 rounded-xl transform translate-y-2 translate-x-2"></div>
                <div className="bg-slate-800 p-8 rounded-xl border border-slate-600 relative z-10 text-left">
                  <CodeCard className="text-xl">
                    <Tag>&lt;footer&gt;</Tag>{'\n'}
                    {'  '}<Tag>&lt;p&gt;</Tag>&copy; 2025 DCS News<Tag>&lt;/p&gt;</Tag>{'\n'}
                    {'  '}<Tag>&lt;p&gt;</Tag>Contact: info@example.com<Tag>&lt;/p&gt;</Tag>{'\n'}
                    <Tag>&lt;/footer&gt;</Tag>
                  </CodeCard>
                </div>
              </div>
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <Copyright className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
                  <span className="text-sm">Copyright</span>
                </div>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <User className="w-8 h-8 mx-auto mb-2 text-green-400" />
                  <span className="text-sm">Author Info</span>
                </div>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <Mail className="w-8 h-8 mx-auto mb-2 text-pink-400" />
                  <span className="text-sm">Contact</span>
                </div>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <Map className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                  <span className="text-sm">Sitemap</span>
                </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 7: Block vs Inline (UPDATED) */}
          <Slide isActive={currentSlide === 7}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center">Block vs Inline 🧱</h2>
              
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1 bg-blue-900/30 p-8 rounded-2xl border border-blue-500/30 w-full">
                  <div className="flex items-center gap-3 mb-4">
                    <Box className="w-8 h-8 text-blue-400" />
                    <h3 className="text-3xl font-bold text-blue-400">Block Level</h3>
                  </div>
                  <ul className="space-y-3 mb-6 text-blue-100">
                    <li className="flex gap-2"><Check className="w-5 h-5" /> Starts on a NEW line</li>
                    <li className="flex gap-2"><Check className="w-5 h-5" /> Takes FULL width</li>
                  </ul>
                  <div className="bg-white text-slate-900 p-4 rounded font-bold text-center w-full mb-2">
                    &lt;div&gt;, &lt;h1&gt;, &lt;p&gt;
                  </div>
                  <div className="bg-white text-slate-900 p-4 rounded font-bold text-center w-full">
                    They stack like boxes!
                  </div>
                </div>

                <div className="text-2xl font-bold text-slate-500">VS</div>

                <div className="flex-1 bg-pink-900/30 p-8 rounded-2xl border border-pink-500/30 w-full">
                  <div className="flex items-center gap-3 mb-4">
                    <Type className="w-8 h-8 text-pink-400" />
                    <h3 className="text-3xl font-bold text-pink-400">Inline</h3>
                  </div>
                  <ul className="space-y-3 mb-6 text-pink-100">
                    <li className="flex gap-2"><Check className="w-5 h-5" /> Stays on SAME line</li>
                    <li className="flex gap-2"><Check className="w-5 h-5" /> Takes only NEEDED width</li>
                  </ul>
                  <div className="bg-slate-800 p-4 rounded text-center leading-loose">
                     This is a sentence with <span className="bg-pink-500 text-white px-2 py-1 rounded">&lt;span&gt;</span> inside it.
                     Also <span className="bg-blue-500 text-white px-2 py-1 rounded">&lt;a&gt;</span> links are inline.
                     They flow like text!
                  </div>
                </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 8: Best Practices */}
          <Slide isActive={currentSlide === 8}>
            <div className="max-w-4xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-yellow-400">🧠 Best Practices</h2>
              
              <div className="space-y-6">
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex items-start gap-6 hover:bg-white/10 transition-colors cursor-default">
                  <div className="bg-green-500 rounded-full p-3 mt-1 shadow-lg shadow-green-500/30">
                    <ThumbsUp className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Semantic First</h3>
                    <p className="text-slate-300 text-lg">Always try to find a semantic tag (<code className="text-pink-400">&lt;article&gt;</code>, <code className="text-pink-400">&lt;nav&gt;</code>) before using a generic one.</p>
                  </div>
                </div>

                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex items-start gap-6 hover:bg-white/10 transition-colors cursor-default">
                  <div className="bg-orange-500 rounded-full p-3 mt-1 shadow-lg shadow-orange-500/30">
                    <AlertTriangle className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Divs as Fallback</h3>
                    <p className="text-slate-300 text-lg">Use <code className="text-blue-400">&lt;div&gt;</code> and <code className="text-blue-400">&lt;span&gt;</code> only when no specific tag fits the content's meaning.</p>
                  </div>
                </div>

                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex items-start gap-6 hover:bg-white/10 transition-colors cursor-default">
                  <div className="bg-purple-500 rounded-full p-3 mt-1 shadow-lg shadow-purple-500/30">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Mobile Friendly</h3>
                    <p className="text-slate-300 text-lg">Good structure makes it way easier to create responsive designs for phones.</p>
                  </div>
                </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 9: Thank You */}
          <Slide isActive={currentSlide === 9}>
            <div className="text-center z-10">
              <h1 className="text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                You're Ready to Build! 🚀
              </h1>
              <p className="text-3xl text-slate-300 mb-12">Any Questions?</p>
              
              <div className="flex justify-center gap-4">
                <button onClick={() => goToSlide(0)} className="px-8 py-4 bg-slate-700 hover:bg-slate-600 rounded-full font-bold transition-all hover:scale-105 flex items-center gap-2">
                  <RotateCcw className="w-5 h-5" /> Restart
                </button>
              </div>

              <div className="mt-20 opacity-50 text-sm">
                Presentation created with React & Tailwind CSS
              </div>
            </div>
          </Slide>
        </>
      )}
    </SlideContainer>
  );
}
