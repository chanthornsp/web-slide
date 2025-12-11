import { useEffect, useState } from 'react';
import SlideContainer from '../components/SlideContainer';
import Slide from '../components/Slide';
import CodeCard, { Tag, Attr, Val } from '../components/CodeCard';
import { Rocket, AlignLeft, List, ListOrdered, Globe, Image as ImageIcon, Flag, RotateCcw, Layers, Files, Navigation, Link, CheckCircle, MessageSquare, Hash, FolderTree } from 'lucide-react';

export default function BasicsSlides() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const newStars = [];
    for (let i = 0; i < 100; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 5,
      });
    }
    setStars(newStars);
  }, []);

  return (
    <SlideContainer totalSlides={13} accentColor="cyan">
      {(currentSlide, goToSlide) => (
        <>
          {/* Stars Background */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            {stars.map((star) => (
              <div
                key={star.id}
                className="absolute bg-white rounded-full animate-twinkle"
                style={{
                  width: `${star.size}px`,
                  height: `${star.size}px`,
                  left: `${star.left}vw`,
                  top: `${star.top}vh`,
                  animationDelay: `${star.delay}s`,
                }}
              />
            ))}
          </div>

          {/* SLIDE 0: Intro */}
          <Slide isActive={currentSlide === 0}>
            <div className="text-center p-8 max-w-4xl z-10">
              <div className="inline-block p-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 mb-8 shadow-2xl shadow-cyan-500/20 animate-bounce">
                <Rocket className="w-24 h-24 text-white" />
              </div>
              <h1 className="text-7xl md:text-8xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400">
                HTML Basics
              </h1>
              <p className="text-2xl text-slate-300 font-light max-w-2xl mx-auto">
                Your Journey Into Web Space Begins! 👨‍🚀
              </p>
              <div className="mt-12 flex justify-center gap-4 text-sm text-slate-400 font-mono">
                <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">&lt;setup&gt;</span>
                <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">&lt;tags&gt;</span>
                <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">&lt;elements&gt;</span>
              </div>
            </div>
          </Slide>

          {/* SLIDE 1: Structure */}
          <Slide isActive={currentSlide === 1}>
            <div className="max-w-6xl w-full p-8">
              <h2 className="text-5xl font-bold mb-12 text-center text-cyan-400">The Space Suit 👨‍🚀</h2>
              <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                <div className="w-full md:w-1/3 space-y-4">
                  <div className="bg-slate-800 p-4 rounded-xl border-l-4 border-pink-500">
                    <strong className="text-pink-400 block mb-1">&lt;!DOCTYPE html&gt;</strong>
                    <span className="text-slate-300 text-sm">Tells the browser: "This is modern HTML5!"</span>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-xl border-l-4 border-blue-500">
                    <strong className="text-blue-400 block mb-1">&lt;html&gt;</strong>
                    <span className="text-slate-300 text-sm">The root container. The spaceship itself.</span>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-xl border-l-4 border-yellow-500">
                    <strong className="text-yellow-400 block mb-1">&lt;head&gt;</strong>
                    <span className="text-slate-300 text-sm">Meta info (Title, SEO). Invisible to users.</span>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-xl border-l-4 border-green-500">
                    <strong className="text-green-400 block mb-1">&lt;body&gt;</strong>
                    <span className="text-slate-300 text-sm">Visible content. Text, images, everything you see.</span>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <CodeCard>
                    <Tag>&lt;!DOCTYPE html&gt;</Tag>{'\n'}
                    <Tag>&lt;html&gt;</Tag>{'\n'}
                    {'  '}<Tag>&lt;head&gt;</Tag>{'\n'}
                    {'    '}<Tag>&lt;title&gt;</Tag>My First Page<Tag>&lt;/title&gt;</Tag>{'\n'}
                    {'  '}<Tag>&lt;/head&gt;</Tag>{'\n'}
                    {'  '}<Tag>&lt;body&gt;</Tag>{'\n'}
                    {'    '}<Tag>&lt;h1&gt;</Tag>Hello Universe!<Tag>&lt;/h1&gt;</Tag>{'\n'}
                    {'    '}<Tag>&lt;p&gt;</Tag>We come in peace.<Tag>&lt;/p&gt;</Tag>{'\n'}
                    {'  '}<Tag>&lt;/body&gt;</Tag>{'\n'}
                    <Tag>&lt;/html&gt;</Tag>
                  </CodeCard>
                </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 2: Anatomy of an Element */}
          <Slide isActive={currentSlide === 2}>
            <div className="max-w-6xl w-full p-8">
              <h2 className="text-5xl font-bold mb-12 text-center text-purple-400">The Element Anatomy 🧬</h2>
              <div className="flex flex-col items-center gap-12">
                <div className="flex items-center gap-2 text-2xl md:text-4xl font-mono bg-white/5 p-8 rounded-2xl border border-white/10">
                  <div className="flex flex-col items-center">
                    <span className="text-pink-400">&lt;h1&gt;</span>
                    <span className="text-xs text-slate-500 mt-2 font-sans uppercase tracking-widest">Start Tag</span>
                  </div>
                  <div className="flex flex-col items-center px-4">
                    <span>Hello</span>
                    <span className="text-xs text-slate-500 mt-2 font-sans uppercase tracking-widest">Content</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-pink-400">&lt;/h1&gt;</span>
                    <span className="text-xs text-slate-500 mt-2 font-sans uppercase tracking-widest">End Tag</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
                  <div className="bg-slate-800 p-6 rounded-xl border border-slate-600">
                    <h3 className="text-xl font-bold mb-3 text-cyan-300">Standard Elements</h3>
                    <p className="text-slate-400 mb-4">Have a start and end tag.</p>
                    <code className="bg-black/30 p-2 rounded block text-sm">&lt;p&gt;Text&lt;/p&gt;</code>
                    <code className="bg-black/30 p-2 rounded block text-sm mt-2">&lt;h1&gt;Title&lt;/h1&gt;</code>
                  </div>
                  <div className="bg-slate-800 p-6 rounded-xl border border-slate-600">
                    <h3 className="text-xl font-bold mb-3 text-red-300">Empty Elements</h3>
                    <p className="text-slate-400 mb-4">No content, no end tag (Self-closing).</p>
                    <code className="bg-black/30 p-2 rounded block text-sm mb-2">&lt;br&gt; <span className="text-slate-500">// Line Break</span></code>
                    <code className="bg-black/30 p-2 rounded block text-sm">&lt;hr&gt; <span className="text-slate-500">// Horizontal Line</span></code>
                  </div>
                </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 3: Comments (NEW) */}
          <Slide isActive={currentSlide === 3}>
             <div className="max-w-6xl w-full p-8 text-center">
               <div className="inline-block p-4 bg-slate-700/50 rounded-full mb-6">
                 <MessageSquare className="w-12 h-12 text-slate-300" />
               </div>
               <h2 className="text-5xl font-bold mb-8 text-slate-300">Secret Notes (Comments) 🤫</h2>
               <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
                 Comments are notes for you and other developers. The browser <strong>completely ignores</strong> them!
               </p>
               
               <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700 max-w-3xl mx-auto text-left shadow-2xl">
                 <CodeCard>
                    <Tag>&lt;!-- This is a comment --&gt;</Tag>{'\n'}
                    <Tag>&lt;p&gt;</Tag>I am visible!<Tag>&lt;/p&gt;</Tag>{'\n'}
                    <Tag>&lt;!--</Tag>{'\n'}
                    {'  '}You can even comment out multiple lines{'\n'}
                    {'  '}to hide code temporarily!{'\n'}
                    <Tag>--&gt;</Tag>
                 </CodeCard>
               </div>

               <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                 <div className="bg-green-500/10 p-4 rounded-xl border border-green-500/20 text-green-200 text-sm">
                    ✅ <strong>Do use comments</strong> to explain complex code or leave "TODO" reminders.
                 </div>
                 <div className="bg-red-500/10 p-4 rounded-xl border border-red-500/20 text-red-200 text-sm">
                    ❌ <strong>Don't comment</strong> obvious things like "This is a paragraph" on a p tag.
                 </div>
               </div>
             </div>
          </Slide>

          {/* SLIDE 4: Attributes (UPDATED) */}
          <Slide isActive={currentSlide === 4}>
            <div className="max-w-6xl w-full p-8">
              <h2 className="text-5xl font-bold mb-12 text-center text-green-400">Attributes: The Settings ⚙️</h2>
              <p className="text-center text-slate-300 mb-8 max-w-2xl mx-auto">
                Attributes provide extra info. They always live in the <strong>Start Tag</strong>.
              </p>
              <div className="flex flex-col items-center gap-8">
                <CodeCard className="text-xl md:text-2xl">
                  <Tag>&lt;p </Tag>
                  <Attr>id</Attr>=<Val>"hero"</Val>{' '}
                  <Attr>class</Attr>=<Val>"big-text"</Val>{' '}
                  <Attr>style</Attr>=<Val>"color:blue"</Val>
                  <Tag>&gt;</Tag>{'\n'}
                  {'  '}Hover me{'\n'}
                  <Tag>&lt;/p&gt;</Tag>
                </CodeCard>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                   {/* ID & Class */}
                   <div className="bg-slate-800 p-6 rounded-xl border border-slate-600 hover:border-blue-400 transition-colors">
                     <div className="flex items-center gap-3 mb-2">
                        <Hash className="text-blue-400 w-5 h-5"/>
                        <code className="text-blue-300 font-bold">id="..."</code>
                     </div>
                     <p className="text-sm text-slate-400 mb-2">A <strong>unique</strong> name for one element.</p>
                     <p className="text-xs text-slate-500">Like a Social Security Number.</p>
                   </div>

                   <div className="bg-slate-800 p-6 rounded-xl border border-slate-600 hover:border-yellow-400 transition-colors">
                     <div className="flex items-center gap-3 mb-2">
                        <Layers className="text-yellow-400 w-5 h-5"/>
                        <code className="text-yellow-300 font-bold">class="..."</code>
                     </div>
                     <p className="text-sm text-slate-400 mb-2">A <strong>group</strong> name for many elements.</p>
                     <p className="text-xs text-slate-500">Like "Student" or "Teacher".</p>
                   </div>

                   {/* Other Attributes */}
                   <div className="bg-slate-800 p-6 rounded-xl border border-slate-600 hover:border-green-400 transition-colors">
                     <code className="text-green-300 font-bold block mb-2">style="..."</code>
                     <p className="text-sm text-slate-400">Directly change appearance (inline CSS).</p>
                   </div>
                   <div className="bg-slate-800 p-6 rounded-xl border border-slate-600 hover:border-pink-400 transition-colors">
                     <code className="text-pink-300 font-bold block mb-2">title="..."</code>
                     <p className="text-sm text-slate-400">Shows a tooltip when hovering.</p>
                   </div>
                </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 5: Headings */}
          <Slide isActive={currentSlide === 5}>
            <div className="max-w-6xl w-full p-8">
              <h2 className="text-5xl font-bold mb-8 text-center text-yellow-400">Headings Hierarchy 👑</h2>
              <p className="text-center text-slate-300 mb-8">
                From the Captain down to the Cadets. Use these for importance, not just size!
              </p>
              <div className="flex gap-8 items-start justify-center">
                <div className="bg-white text-slate-900 p-8 rounded-xl shadow-2xl w-full md:w-1/2 space-y-2">
                  <h1 className="text-4xl font-bold border-b border-slate-200 pb-2">H1: Main Title</h1>
                  <h2 className="text-3xl font-bold text-slate-700">H2: Major Section</h2>
                  <h3 className="text-2xl font-bold text-slate-600">H3: Sub-section</h3>
                  <h4 className="text-xl font-bold text-slate-500">H4: Detail Title</h4>
                  <h5 className="text-lg font-bold text-slate-400">H5: Minor Note</h5>
                  <h6 className="text-base font-bold text-slate-400 uppercase tracking-widest">H6: Tiny Header</h6>
                </div>
                <div className="hidden md:block w-1/3">
                  <CodeCard className="text-sm">
                    <Tag>&lt;h1&gt;</Tag>Most Important<Tag>&lt;/h1&gt;</Tag>{'\n'}
                    <Tag>&lt;h2&gt;</Tag>Second Level<Tag>&lt;/h2&gt;</Tag>{'\n'}
                    <Tag>&lt;h3&gt;</Tag>Third Level<Tag>&lt;/h3&gt;</Tag>{'\n'}
                    <Tag>&lt;h4&gt;</Tag>Fourth Level<Tag>&lt;/h4&gt;</Tag>{'\n'}
                    <Tag>&lt;h5&gt;</Tag>Fifth Level<Tag>&lt;/h5&gt;</Tag>{'\n'}
                    <Tag>&lt;h6&gt;</Tag>Least Important<Tag>&lt;/h6&gt;</Tag>
                  </CodeCard>
                  <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg text-yellow-200 text-sm">
                    ⚠️ <strong>Tip:</strong> Only use one <code className="bg-black/30 px-1 rounded">&lt;h1&gt;</code> per page!
                  </div>
                </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 6: Paragraphs */}
          <Slide isActive={currentSlide === 6}>
            <div className="max-w-4xl w-full p-8 text-center">
              <div className="inline-block p-4 bg-green-500/20 rounded-full mb-6">
                <AlignLeft className="w-12 h-12 text-green-400" />
              </div>
              <h2 className="text-5xl font-bold mb-6 text-green-400">The Paragraph &lt;p&gt;</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
                <CodeCard>
                  <Tag>&lt;p&gt;</Tag>{'\n'}
                  This is a paragraph of text.{'\n'}
                  HTML ignores extra spaces and lines!{'\n'}
                  <Tag>&lt;/p&gt;</Tag>
                </CodeCard>
                <div className="bg-white text-slate-800 p-6 rounded-xl text-left leading-relaxed shadow-lg relative">
                  <div className="absolute -top-3 -left-3 bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">
                    Output
                  </div>
                  This is a paragraph of text. HTML ignores extra spaces and lines!
                </div>
              </div>
              <p className="mt-12 text-slate-400 text-lg">
                Paragraphs automatically add some space (margin) before and after themselves.
              </p>
            </div>
          </Slide>

          {/* SLIDE 7: Lists */}
          <Slide isActive={currentSlide === 7}>
            <div className="max-w-6xl w-full p-8">
              <h2 className="text-5xl font-bold mb-8 text-center text-orange-400">Organizing Lists 📋</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                  <div className="flex items-center gap-3 mb-4">
                    <List className="text-orange-400" />
                    <h3 className="text-2xl font-bold text-orange-300">Unordered &lt;ul&gt;</h3>
                  </div>
                  <CodeCard className="text-sm mb-4">
                    <Tag>&lt;ul </Tag><Attr>type</Attr>=<Val>"square"</Val><Tag>&gt;</Tag>{'\n'}
                    {'  '}<Tag>&lt;li&gt;</Tag>Apples<Tag>&lt;/li&gt;</Tag>{'\n'}
                    {'  '}<Tag>&lt;li&gt;</Tag>Bananas<Tag>&lt;/li&gt;</Tag>{'\n'}
                    <Tag>&lt;/ul&gt;</Tag>
                  </CodeCard>
                  <div className="bg-black/30 p-4 rounded-lg pl-8">
                    <ul className="list-disc text-slate-300 space-y-2">
                      <li>Apples</li>
                      <li>Bananas</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                  <div className="flex items-center gap-3 mb-4">
                    <ListOrdered className="text-blue-400" />
                    <h3 className="text-2xl font-bold text-blue-300">Ordered &lt;ol&gt;</h3>
                  </div>
                  <CodeCard className="text-sm mb-4">
                    <Tag>&lt;ol </Tag><Attr>type</Attr>=<Val>"1"</Val><Tag>&gt;</Tag>{'\n'}
                    {'  '}<Tag>&lt;li&gt;</Tag>Wake up<Tag>&lt;/li&gt;</Tag>{'\n'}
                    {'  '}<Tag>&lt;li&gt;</Tag>Code<Tag>&lt;/li&gt;</Tag>{'\n'}
                    <Tag>&lt;/ol&gt;</Tag>
                  </CodeCard>
                  <div className="bg-black/30 p-4 rounded-lg pl-8">
                    <ol className="list-decimal text-slate-300 space-y-2">
                      <li>Wake up</li>
                      <li>Code</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 8: Nested Lists */}
          <Slide isActive={currentSlide === 8}>
            <div className="max-w-6xl w-full p-8">
              <h2 className="text-5xl font-bold mb-8 text-center text-teal-400">Nested Elements 🪆</h2>
              <p className="text-center text-slate-300 mb-8">
                You can put lists inside lists! This is great for sub-categories.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="bg-slate-800 p-8 rounded-2xl border-2 border-teal-500/50 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Layers className="w-32 h-32" />
                  </div>
                  <h3 className="text-2xl font-bold text-teal-300 mb-4 border-b border-teal-500/30 pb-2">
                    Pixel 9 Pro Features
                  </h3>
                  <div className="text-lg">
                    <ul className="space-y-2">
                      <li className="text-slate-200">
                        Display
                        <ul className="pl-6 mt-1 space-y-1 text-slate-400">
                          <li>6.7 inch screen</li>
                          <li>120Hz refresh</li>
                        </ul>
                      </li>
                      <li className="text-slate-200 mt-3">
                        Camera
                        <ul className="pl-6 mt-1 space-y-1 text-slate-400">
                          <li>50MP Main</li>
                          <li>12MP Wide</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <CodeCard className="h-full flex items-center">
                  <Tag>&lt;ul&gt;</Tag>{'\n'}
                  {'  '}<Tag>&lt;li&gt;</Tag>Display{'\n'}
                  {'    '}<Tag>&lt;ul&gt;</Tag>{'\n'}
                  {'      '}<Tag>&lt;li&gt;</Tag>6.7 inch<Tag>&lt;/li&gt;</Tag>{'\n'}
                  {'      '}<Tag>&lt;li&gt;</Tag>120Hz<Tag>&lt;/li&gt;</Tag>{'\n'}
                  {'    '}<Tag>&lt;/ul&gt;</Tag>{'\n'}
                  {'  '}<Tag>&lt;/li&gt;</Tag>{'\n'}
                  {'  '}<Tag>&lt;li&gt;</Tag>Camera...<Tag>&lt;/li&gt;</Tag>{'\n'}
                  <Tag>&lt;/ul&gt;</Tag>
                </CodeCard>
              </div>
            </div>
          </Slide>

          {/* SLIDE 9: Links */}
          <Slide isActive={currentSlide === 9}>
            <div className="max-w-5xl w-full p-8">
              <h2 className="text-5xl font-bold mb-12 text-center text-blue-400">Hyperlinks &lt;a&gt; 🔗</h2>
              <div className="flex flex-col items-center gap-8">
                <div className="bg-slate-800 p-8 rounded-2xl border-2 border-dashed border-slate-600 relative hover:border-blue-500 transition-colors">
                  <Globe className="w-16 h-16 text-slate-500 mx-auto mb-4" />
                  <CodeCard className="text-xl">
                    <Tag>&lt;a </Tag><Attr>href</Attr>=<Val>"https://google.com"</Val> <Attr>target</Attr>=<Val>"_blank"</Val><Tag>&gt;</Tag>{'\n'}
                    Click Here{'\n'}
                    <Tag>&lt;/a&gt;</Tag>
                  </CodeCard>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                  <div className="bg-blue-500/10 p-6 rounded-xl border border-blue-500/20 flex items-start gap-4">
                    <div className="bg-blue-500 text-white px-2 py-1 rounded font-mono font-bold">href</div>
                    <div>
                      <h3 className="font-bold text-blue-300">Hypertext Reference</h3>
                      <p className="text-sm text-slate-400">The destination address (URL).</p>
                    </div>
                  </div>
                  <div className="bg-purple-500/10 p-6 rounded-xl border border-purple-500/20 flex items-start gap-4">
                    <div className="bg-purple-500 text-white px-2 py-1 rounded font-mono font-bold">target</div>
                    <div>
                      <h3 className="font-bold text-purple-300">Target Window</h3>
                      <p className="text-sm text-slate-400"><code>_blank</code> opens in a new tab!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 10: File Paths (NEW) */}
          <Slide isActive={currentSlide === 10}>
            <div className="max-w-6xl w-full p-8">
              <h2 className="text-5xl font-bold mb-10 text-center text-amber-400">The Map: File Paths 🗺️</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                   <div className="flex items-center gap-3 mb-6">
                     <FolderTree className="text-amber-400 w-8 h-8" />
                     <h3 className="text-2xl font-bold text-white">Project Folder</h3>
                   </div>
                   <div className="font-mono text-sm space-y-2 text-slate-300 bg-black/40 p-4 rounded-lg">
                      <div className="text-amber-400">📂 my-website</div>
                      <div className="pl-4">📄 index.html</div>
                      <div className="pl-4">📂 images</div>
                      <div className="pl-8 text-green-400">🖼️ logo.png</div>
                      <div className="pl-4">📂 pages</div>
                      <div className="pl-8 text-blue-400">📄 about.html</div>
                   </div>
                </div>

                <div className="space-y-6">
                   <div className="bg-slate-800 p-4 rounded-xl border-l-4 border-green-400">
                     <strong className="text-green-400 block mb-1">Looking Down (Children)</strong>
                     <p className="text-slate-300 text-sm mb-2">To get <code>logo.png</code> from <code>index.html</code>:</p>
                     <code className="bg-black/30 px-2 py-1 rounded text-cyan-300">images/logo.png</code>
                   </div>
                   <div className="bg-slate-800 p-4 rounded-xl border-l-4 border-blue-400">
                     <strong className="text-blue-400 block mb-1">Looking Up (Parent)</strong>
                     <p className="text-slate-300 text-sm mb-2">To get <code>logo.png</code> from <code>about.html</code>:</p>
                     <code className="bg-black/30 px-2 py-1 rounded text-cyan-300">../images/logo.png</code>
                     <p className="text-xs text-slate-500 mt-2">The <code>..</code> means "go back one folder".</p>
                   </div>
                   <div className="bg-slate-800 p-4 rounded-xl border-l-4 border-purple-400">
                     <strong className="text-purple-400 block mb-1">Current Folder</strong>
                     <code className="bg-black/30 px-2 py-1 rounded text-cyan-300">./file.html</code>
                     <p className="text-xs text-slate-500 mt-2">The <code>.</code> means "right here".</p>
                   </div>
                </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 11: Images */}
          <Slide isActive={currentSlide === 11}>
            <div className="max-w-6xl w-full p-8">
              <h2 className="text-5xl font-bold mb-8 text-center text-pink-400">Images &lt;img&gt; 🖼️</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <CodeCard className="text-sm">
                    <Tag>&lt;img </Tag><Attr>src</Attr>=<Val>"images/rocket.jpg"</Val>{'\n'}
                    {'     '}<Attr>alt</Attr>=<Val>"A Rocket"</Val>{'\n'}
                    {'     '}<Attr>width</Attr>=<Val>"300"</Val> <Tag>/&gt;</Tag>
                  </CodeCard>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-pink-400 font-mono font-bold">src</span>
                      <span className="text-slate-400 text-sm">Source path (use what you learned!)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-pink-400 font-mono font-bold">alt</span>
                      <span className="text-slate-400 text-sm">Alternative text (for accessibility)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-pink-400 font-mono font-bold">Self-Closing</span>
                      <span className="text-slate-400 text-sm">No closing tag needed!</span>
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000"></div>
                  <div className="relative bg-slate-900 rounded-lg p-2 border border-slate-700">
                    <img
                      src="https://images.unsplash.com/photo-1517976487492-5750f3195933?w=500&auto=format&fit=crop&q=60"
                      alt="Rocket"
                      className="rounded w-full h-64 object-cover"
                    />
                    <div className="p-2 text-center text-xs text-slate-500 font-mono">src="images/rocket.jpg"</div>
                  </div>
                </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 12: Homework */}
          <Slide isActive={currentSlide === 12}>
            <div className="text-center p-8 max-w-4xl">
              <div className="inline-block p-4 bg-white/10 rounded-full mb-6 animate-pulse">
                <Flag className="w-16 h-16 text-red-400" />
              </div>
              <h1 className="text-6xl font-bold mb-8">Final Mission: The Website 🚀</h1>
              <div className="bg-slate-800/80 backdrop-blur-md p-8 rounded-2xl border border-slate-600 text-left max-w-3xl mx-auto shadow-2xl relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-16 bg-slate-500 rounded-full border-4 border-slate-700"></div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-400 mt-4">Build a Multi-Page Site</h3>
                <ul className="space-y-4 text-lg text-slate-300">
                  <li className="flex items-start gap-3">
                    <Files className="w-6 h-6 text-cyan-500 shrink-0 mt-1" />
                    <span>Create 3 HTML files: <strong>index.html</strong>, <strong>about.html</strong>, <strong>contact.html</strong>.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Navigation className="w-6 h-6 text-cyan-500 shrink-0 mt-1" />
                    <span>Create a <strong>Navigation Bar</strong> using <code className="text-pink-400">&lt;ul&gt;</code> and <code className="text-pink-400">&lt;li&gt;</code>.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Link className="w-6 h-6 text-cyan-500 shrink-0 mt-1" />
                    <span>Use <code className="text-pink-400">&lt;a&gt;</code> tags to link all pages together in the nav bar.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-cyan-500 shrink-0 mt-1" />
                    <span>Test that you can click between all 3 pages!</span>
                  </li>
                </ul>
              </div>
              <div className="mt-12">
                <button
                  onClick={() => goToSlide(0)}
                  className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 rounded-full font-bold transition-all hover:scale-105 flex items-center gap-2 mx-auto shadow-lg shadow-cyan-500/20"
                >
                  <RotateCcw className="w-5 h-5" /> Restart Mission
                </button>
              </div>
            </div>
          </Slide>
        </>
      )}
    </SlideContainer>
  );
}
