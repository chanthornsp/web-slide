import { useState } from 'react';
import SlideContainer from '../components/SlideContainer';
import Slide from '../components/Slide';
import CodeCard, { Tag, Attr, Val, Comment } from '../components/CodeCard';
import { Send, Mail, MapPin, Truck, TextCursorInput, CircleDot, CheckSquare, List as ListIcon, MousePointer, Shield, ClipboardList, RotateCcw, CheckCircle, UserPlus, Grip, MousePointerClick, Calendar, Palette } from 'lucide-react';

export default function FormsSlides() {
  return (
    <SlideContainer totalSlides={10} accentColor="purple">
      {(currentSlide, goToSlide) => (
        <>
          {/* Background Blobs */}
          <div className="fixed inset-0 pointer-events-none">
            <div className="blob bg-purple-600 w-96 h-96 rounded-full top-0 left-0 opacity-20 mix-blend-screen animate-move"></div>
            <div className="blob bg-blue-600 w-96 h-96 rounded-full bottom-0 right-0 opacity-20 mix-blend-screen" style={{animationDelay: '2s'}}></div>
            <div className="blob bg-pink-500 w-80 h-80 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20 mix-blend-screen"></div>
          </div>

          {/* SLIDE 0: Title */}
          <Slide isActive={currentSlide === 0}>
            <div className="text-center p-8 max-w-4xl z-10">
              <div className="inline-block p-6 rounded-3xl bg-gradient-to-br from-purple-500 to-indigo-600 mb-6 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <Send className="w-24 h-24 text-white" />
              </div>
              <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
                HTML Forms
              </h1>
              <p className="text-2xl text-slate-300 font-light max-w-2xl mx-auto">
                Collecting Data & Talking to Servers 📨
              </p>
              <div className="mt-12 flex justify-center gap-6">
                <div className="bg-white/5 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/10 flex items-center gap-2">
                  <TextCursorInput className="w-5 h-5" /> Inputs
                </div>
                <div className="bg-white/5 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/10 flex items-center gap-2">
                  <CheckSquare className="w-5 h-5" /> Choices
                </div>
                <div className="bg-white/5 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/10 flex items-center gap-2">
                  <MousePointer className="w-5 h-5" /> Buttons
                </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 1: The Form Container */}
          <Slide isActive={currentSlide === 1}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-purple-400">The Envelope ✉️</h2>

              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="relative group">
                    <div className="bg-slate-800 p-8 rounded-2xl border-2 border-dashed border-slate-600 w-80 h-64 flex flex-col items-center justify-center relative hover:border-purple-400 transition-colors">
                      <Mail className="w-24 h-24 text-slate-500 mb-4 group-hover:text-purple-400 transition-colors" />
                      <span className="text-xl font-bold text-slate-400">&lt;form&gt;</span>
                      <div className="absolute top-4 right-4 rotate-12 bg-indigo-500 text-white text-xs p-2 rounded shadow-lg">
                        METHOD="POST"
                      </div>
                      <div className="absolute bottom-4 left-4 -rotate-2 bg-pink-500 text-white text-xs p-2 rounded shadow-lg">
                        ACTION="/login"
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-1/2 space-y-6">
                  <CodeCard>
                    <Tag>&lt;form </Tag><Attr>action</Attr>=<Val>"/login"</Val> <Attr>method</Attr>=<Val>"POST"</Val><Tag>&gt;</Tag>{'\n'}
                    {'\n'}
                    {'  '}<Comment>&lt;!-- Inputs go here --&gt;</Comment>{'\n'}
                    {'\n'}
                    <Tag>&lt;/form&gt;</Tag>
                  </CodeCard>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                      <div className="bg-pink-500/20 p-2 rounded text-pink-400">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-pink-300">action="..."</h3>
                        <p className="text-sm text-slate-400">Where to send the data? (The URL)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                      <div className="bg-indigo-500/20 p-2 rounded text-indigo-400">
                        <Truck className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-indigo-300">method="..."</h3>
                        <p className="text-sm text-slate-400">How to send it? (GET for reading, POST for sending secure data)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 2: More Inputs (UPDATED) */}
          <Slide isActive={currentSlide === 2}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-blue-400">Typing & Selecting Values ⌨️</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold text-blue-300">Common Inputs</h3>
                    <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">&lt;input&gt;</span>
                  </div>
                  <CodeCard className="text-sm mb-4">
                    <Tag>&lt;input </Tag><Attr>type</Attr>=<Val>"text"</Val><Tag>&gt;</Tag>{'\n'}
                    <Tag>&lt;textarea&gt;</Tag>...<Tag>&lt;/textarea&gt;</Tag>
                  </CodeCard>
                  <div className="space-y-3">
                    <input type="text" placeholder="Name" className="w-full bg-white/10 border-2 border-white/20 px-4 py-2 rounded-lg text-white" />
                    <textarea rows="2" className="w-full bg-white/10 border-2 border-white/20 px-4 py-2 rounded-lg text-white" placeholder="Message..."></textarea>
                  </div>
                </div>

                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold text-yellow-300">Fancy Inputs</h3>
                    <span className="text-xs bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded">HTML5</span>
                  </div>
                   <div className="grid grid-cols-2 gap-4">
                      <div>
                         <label className="text-xs text-slate-400 flex items-center gap-1 mb-1"><Calendar className="w-3 h-3"/> Date</label>
                         <input type="date" className="w-full bg-slate-900 border border-slate-600 rounded p-2 text-white" />
                      </div>
                      <div>
                         <label className="text-xs text-slate-400 flex items-center gap-1 mb-1"><Palette className="w-3 h-3"/> Color</label>
                         <input type="color" className="w-full h-10 bg-slate-900 border border-slate-600 rounded p-1" />
                      </div>
                      <div className="col-span-2">
                        <label className="text-xs text-slate-400 flex items-center gap-1 mb-1">File Upload</label>
                        <input type="file" className="w-full text-xs text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"/>
                      </div>
                   </div>
                   <div className="mt-4">
                      <CodeCard className="text-xs">
                         <Tag>&lt;input </Tag><Attr>type</Attr>=<Val>"date"</Val><Tag>&gt;</Tag>{'\n'}
                         <Tag>&lt;input </Tag><Attr>type</Attr>=<Val>"color"</Val><Tag>&gt;</Tag>
                      </CodeCard>
                   </div>
                </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 3: Making Choices */}
          <Slide isActive={currentSlide === 3}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-8 text-center text-pink-400">Making Choices 🗳️</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-pink-500 transition-colors">
                  <div className="text-center mb-4">
                    <CircleDot className="w-10 h-10 mx-auto text-pink-400 mb-2" />
                    <h3 className="text-xl font-bold">Radio Buttons</h3>
                    <p className="text-xs text-slate-400">Pick ONLY ONE</p>
                  </div>
                  <CodeCard className="text-xs mb-4">
                    <Tag>&lt;input </Tag><Attr>type</Attr>=<Val>"radio"</Val> <Attr>name</Attr>=<Val>"g"</Val><Tag>&gt;</Tag>
                  </CodeCard>
                  <div className="flex flex-col gap-2 bg-black/20 p-4 rounded text-sm">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="demo-radio" className="accent-pink-500" /> Pizza
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="demo-radio" className="accent-pink-500" /> Burger
                    </label>
                    <p className="text-xs text-slate-500 mt-2">*Must have same 'name'</p>
                  </div>
                </div>

                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors">
                  <div className="text-center mb-4">
                    <CheckSquare className="w-10 h-10 mx-auto text-blue-400 mb-2" />
                    <h3 className="text-xl font-bold">Checkboxes</h3>
                    <p className="text-xs text-slate-400">Pick MANY</p>
                  </div>
                  <CodeCard className="text-xs mb-4">
                    <Tag>&lt;input </Tag><Attr>type</Attr>=<Val>"checkbox"</Val><Tag>&gt;</Tag>
                  </CodeCard>
                  <div className="flex flex-col gap-2 bg-black/20 p-4 rounded text-sm">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="accent-pink-500" /> Extra Cheese
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="accent-pink-500" /> Mushrooms
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="accent-pink-500" /> Onions
                    </label>
                  </div>
                </div>

                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-green-500 transition-colors">
                  <div className="text-center mb-4">
                    <ListIcon className="w-10 h-10 mx-auto text-green-400 mb-2" />
                    <h3 className="text-xl font-bold">Dropdowns</h3>
                    <p className="text-xs text-slate-400">Save Space</p>
                  </div>
                  <CodeCard className="text-xs mb-4">
                    <Tag>&lt;select&gt;</Tag>{'\n'}
                    {'  '}<Tag>&lt;option&gt;</Tag>USA<Tag>&lt;/option&gt;</Tag>{'\n'}
                    <Tag>&lt;/select&gt;</Tag>
                  </CodeCard>
                  <div className="bg-black/20 p-4 rounded">
                    <select className="w-full bg-slate-700 p-2 rounded text-white">
                      <option>Choose Country...</option>
                      <option>USA</option>
                      <option>Canada</option>
                      <option>Cambodia</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </Slide>

          {/* SLIDE 4: Button Types (NEW) */}
          <Slide isActive={currentSlide === 4}>
            <div className="max-w-5xl w-full p-8 z-10">
               <h2 className="text-5xl font-bold mb-10 text-center text-indigo-400">Clicky Things: Buttons 🖱️</h2>
               
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-slate-800 p-6 rounded-2xl border border-indigo-500/30 flex flex-col items-center text-center">
                     <button className="bg-indigo-600 px-6 py-2 rounded-lg text-white font-bold mb-4 shadow-lg hover:bg-indigo-500 transition-colors pointer-events-none">Submit</button>
                     <code className="text-indigo-400 font-bold mb-2">type="submit"</code>
                     <p className="text-slate-400 text-sm">The default. Sends the form data to the server (action URL).</p>
                  </div>

                  <div className="bg-slate-800 p-6 rounded-2xl border border-indigo-500/30 flex flex-col items-center text-center">
                     <button className="bg-slate-600 px-6 py-2 rounded-lg text-white font-bold mb-4 shadow-lg hover:bg-slate-500 transition-colors pointer-events-none">Reset</button>
                     <code className="text-slate-400 font-bold mb-2">type="reset"</code>
                     <p className="text-slate-400 text-sm">Clears all inputs to their default values. The "Undo" button.</p>
                  </div>

                  <div className="bg-slate-800 p-6 rounded-2xl border border-indigo-500/30 flex flex-col items-center text-center">
                     <button className="bg-green-600 px-6 py-2 rounded-lg text-white font-bold mb-4 shadow-lg hover:bg-green-500 transition-colors pointer-events-none">Click Me</button>
                     <code className="text-green-400 font-bold mb-2">type="button"</code>
                     <p className="text-slate-400 text-sm">Does NOTHING... until you add JavaScript. Good for custom actions.</p>
                  </div>
               </div>

               <div className="mt-8 text-center">
                  <CodeCard className="inline-block text-left">
                     <Tag>&lt;button </Tag><Attr>type</Attr>=<Val>"submit"</Val><Tag>&gt;</Tag>Send<Tag>&lt;/button&gt;</Tag>
                  </CodeCard>
               </div>
            </div>
          </Slide>

          {/* SLIDE 5: Accessibility */}
          <Slide isActive={currentSlide === 5}>
            <div className="max-w-5xl w-full p-8 flex flex-col items-center z-10">
              <h2 className="text-5xl font-bold mb-8 text-orange-400">Connecting Labels 🔗</h2>
              <p className="text-xl text-slate-300 mb-8 text-center max-w-2xl">
                Labels help users (and screen readers) know what to click. Don't leave your inputs lonely!
              </p>

              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 w-full relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-1 bg-orange-400/50"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-orange-400 rounded-full animate-ping"></div>

                <div className="flex justify-between items-center relative z-10 gap-8">
                  <div className="bg-slate-800 p-4 rounded-xl border border-orange-400">
                    <span className="text-orange-400 font-bold text-xl">&lt;label for="user"&gt;</span>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-xl border border-orange-400">
                    <span className="text-orange-400 font-bold text-xl">&lt;input id="user"&gt;</span>
                  </div>
                </div>

                <div className="mt-8">
                  <CodeCard>
                    <Tag>&lt;label </Tag><Attr>for</Attr>=<Val>"email"</Val><Tag>&gt;</Tag>Email Address:<Tag>&lt;/label&gt;</Tag>{'\n'}
                    <Tag>&lt;input </Tag><Attr>type</Attr>=<Val>"email"</Val> <Attr>id</Attr>=<Val>"email"</Val><Tag>&gt;</Tag>
                  </CodeCard>
                </div>
              </div>

              <div className="mt-8 bg-orange-500/20 text-orange-200 p-4 rounded-xl flex items-center gap-3">
                <MousePointer className="w-6 h-6" />
                <span><strong>Pro Tip:</strong> Clicking the label focuses the input! Try it on the examples below.</span>
              </div>
            </div>
          </Slide>

           {/* SLIDE 6: Grouping (NEW) */}
          <Slide isActive={currentSlide === 6}>
             <div className="max-w-4xl w-full p-8 z-10">
                <h2 className="text-5xl font-bold mb-8 text-center text-cyan-400">Grouping Fields 📦</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                   <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
                      <fieldset className="border border-cyan-400/50 p-4 rounded bg-cyan-900/10">
                         <legend className="text-cyan-400 px-2 font-bold bg-slate-800 border border-cyan-400/50 rounded">Personal Info</legend>
                         <div className="space-y-4">
                           <input type="text" placeholder="First Name" className="w-full bg-slate-900 border border-slate-600 rounded p-2" />
                           <input type="text" placeholder="Last Name" className="w-full bg-slate-900 border border-slate-600 rounded p-2" />
                         </div>
                      </fieldset>
                   </div>
                   
                   <div className="space-y-4">
                      <p className="text-slate-300">
                        Use <code className="text-cyan-400 font-bold">&lt;fieldset&gt;</code> to group related inputs visually and semantically.
                      </p>
                      <p className="text-slate-300">
                        Use <code className="text-cyan-400 font-bold">&lt;legend&gt;</code> to give the group a title.
                      </p>
                      <CodeCard>
                         <Tag>&lt;fieldset&gt;</Tag>{'\n'}
                         {'  '}<Tag>&lt;legend&gt;</Tag>Personal Info<Tag>&lt;/legend&gt;</Tag>{'\n'}
                         {'  '}...Inputs...{'\n'}
                         <Tag>&lt;/fieldset&gt;</Tag>
                      </CodeCard>
                   </div>
                </div>
             </div>
          </Slide>

          {/* SLIDE 7: Validation */}
          <Slide isActive={currentSlide === 7}>
            <div className="max-w-6xl w-full p-8 z-10">
              <h2 className="text-5xl font-bold mb-12 text-center text-red-400">The Bouncer: Validation 🛡️</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="bg-slate-800 p-4 rounded-xl border border-red-400/30 flex items-center gap-4">
                    <span className="bg-red-500 text-white px-3 py-1 rounded font-mono text-sm">required</span>
                    <span className="text-slate-300">User MUST fill this out.</span>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-xl border border-blue-400/30 flex items-center gap-4">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded font-mono text-sm">type="email"</span>
                    <span className="text-slate-300">Must be user@example.com</span>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-xl border border-green-400/30 flex items-center gap-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded font-mono text-sm">min="18"</span>
                    <span className="text-slate-300">Number must be at least 18.</span>
                  </div>
                </div>

                <CodeCard className="text-sm">
                  <Tag>&lt;form&gt;</Tag>{'\n'}
                  Username:{'\n'}
                  <Tag>&lt;input </Tag><Attr>type</Attr>=<Val>"text"</Val> <Attr>required</Attr><Tag>&gt;</Tag>{'\n'}
                  {'\n'}
                  Age (18+):{'\n'}
                  <Tag>&lt;input </Tag><Attr>type</Attr>=<Val>"number"</Val> <Attr>min</Attr>=<Val>"18"</Val><Tag>&gt;</Tag>{'\n'}
                  {'\n'}
                  <Tag>&lt;button&gt;</Tag>Submit<Tag>&lt;/button&gt;</Tag>{'\n'}
                  <Tag>&lt;/form&gt;</Tag>
                </CodeCard>
              </div>
            </div>
          </Slide>

          {/* SLIDE 8: Form Example */}
          <Slide isActive={currentSlide === 8}>
            <div className="max-w-4xl w-full p-8 z-10">
              <h2 className="text-4xl font-bold mb-6 text-center">Let's Build It! 🏗️</h2>

              <div className="bg-slate-800 p-8 rounded-2xl border-2 border-slate-700 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 to-purple-500"></div>

                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <UserPlus className="text-pink-400" /> New User Registration
                </h3>

                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Form Submitted! (This is just a demo)'); }}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-slate-400 mb-1">Full Name</label>
                      <input type="text" className="w-full bg-slate-900 border-2 border-white/20 px-4 py-2 rounded-lg text-white focus:outline-none focus:border-pink-400 transition-colors" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm text-slate-400 mb-1">Email <span className="text-red-400">*</span></label>
                      <input type="email" required className="w-full bg-slate-900 border-2 border-white/20 px-4 py-2 rounded-lg text-white focus:outline-none focus:border-pink-400 transition-colors" placeholder="john@email.com" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-slate-400 mb-2">Membership Type</label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 cursor-pointer bg-slate-700 p-3 rounded-lg flex-1 border border-transparent hover:border-pink-400">
                        <input type="radio" name="plan" defaultChecked className="accent-pink-500" /> Free
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer bg-slate-700 p-3 rounded-lg flex-1 border border-transparent hover:border-pink-400">
                        <input type="radio" name="plan" className="accent-pink-500" /> Pro ($10)
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="accent-pink-500" /> I agree to the <span className="text-pink-400 underline">Terms</span>
                    </label>
                  </div>

                  <div className="flex gap-4">
                    <button className="flex-1 bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 rounded-lg transition-transform active:scale-95">
                      Register Now
                    </button>
                    <button type="reset" className="px-6 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors">
                      Reset
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </Slide>

          {/* SLIDE 9: Homework */}
          <Slide isActive={currentSlide === 9}>
            <div className="text-center p-8 max-w-4xl z-10">
              <div className="inline-block p-4 bg-white/10 rounded-full mb-6 animate-bounce">
                <ClipboardList className="w-16 h-16 text-indigo-400" />
              </div>
              <h1 className="text-6xl font-bold mb-8">Homework Time! 📝</h1>

              <div className="bg-slate-800/80 backdrop-blur-md p-8 rounded-2xl border border-slate-600 text-left max-w-2xl mx-auto shadow-2xl">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Build a Contact Form</h3>
                <ul className="space-y-4 text-lg text-slate-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-500 shrink-0 mt-1" />
                    <span>Fields: <strong>Name, Email, Subject, Message</strong>.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-500 shrink-0 mt-1" />
                    <span>Validation: Email must be valid. Name is required.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-500 shrink-0 mt-1" />
                    <span>Constraint: Subject must be at least 5 chars long (<code className="text-pink-400 text-sm">minlength="5"</code>).</span>
                  </li>
                </ul>
              </div>

              <div className="mt-12">
                <button
                  onClick={() => goToSlide(0)}
                  className="px-8 py-4 bg-purple-600 hover:bg-purple-500 rounded-full font-bold transition-all hover:scale-105 flex items-center gap-2 mx-auto shadow-lg shadow-purple-500/20"
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
