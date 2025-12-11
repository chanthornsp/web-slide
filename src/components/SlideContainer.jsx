import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Home, LayoutGrid, X, ChevronRight } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { roadmap } from '../data/roadmap';

export default function SlideContainer({ children, totalSlides, accentColor = 'cyan' }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showGrid, setShowGrid] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Find current lesson and next lesson
  const allLessons = roadmap.flatMap(phase => phase.items);
  const currentLessonIndex = allLessons.findIndex(item => item.path === location.pathname);
  const nextLesson = allLessons[currentLessonIndex + 1];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (showGrid) {
        if (e.key === 'Escape') setShowGrid(false);
        return;
      }

      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, showGrid]);

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setShowGrid(false);
  };

  const colorClasses = {
    cyan: {
      button: 'bg-cyan-500 hover:bg-cyan-600 shadow-cyan-500/30',
      blob1: 'bg-cyan-400',
      blob2: 'bg-blue-600',
      text: 'text-cyan-400',
      border: 'border-cyan-500',
    },
    pink: {
      button: 'bg-pink-500 hover:bg-pink-600 shadow-pink-500/30',
      blob1: 'bg-purple-600',
      blob2: 'bg-pink-500',
      text: 'text-pink-400',
      border: 'border-pink-500',
    },
    emerald: {
      button: 'bg-emerald-500 hover:bg-emerald-600 shadow-emerald-500/30',
      blob1: 'bg-emerald-600',
      blob2: 'bg-indigo-600',
      text: 'text-emerald-400',
      border: 'border-emerald-500',
    },
    purple: {
      button: 'bg-purple-500 hover:bg-purple-600 shadow-purple-500/30',
      blob1: 'bg-purple-600',
      blob2: 'bg-blue-600',
      text: 'text-purple-400',
      border: 'border-purple-500',
    },
  };

  const colors = colorClasses[accentColor] || colorClasses.cyan;

  // Render Thumbnail Grid
  if (showGrid) {
    return (
      <div className="fixed inset-0 bg-slate-900/95 z-50 overflow-y-auto p-8 backdrop-blur-sm animate-fade-in">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8 sticky top-0 bg-slate-900/95 py-4 z-50 border-b border-slate-800">
             <h2 className="text-2xl font-bold text-white flex items-center gap-3">
               <LayoutGrid className={colors.text} /> Slide Overview
             </h2>
             <button 
               onClick={() => setShowGrid(false)}
               className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
             >
               <X className="w-6 h-6 text-white" />
             </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`group relative aspect-video bg-slate-800 rounded-xl overflow-hidden border-2 transition-all hover:scale-105 hover:shadow-xl ${currentSlide === i ? colors.border : 'border-slate-700 hover:border-slate-500'}`}
              >
                {/* Scaled Preview Container */}
                <div className="absolute inset-0 w-[400%] h-[400%] origin-top-left transform scale-[0.25] pointer-events-none select-none p-8 bg-slate-900 flex items-center justify-center">
                    {/* Hack: Render the slide logic but force 'isActive' to true for preview. 
                        We pass a no-op goToSlide function to prevent interaction errors. 
                    */}
                    <div className="w-full h-full relative">
                        {children(i, () => {})}
                    </div>
                </div>
                
                {/* Overlay Number */}
                <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur px-3 py-1 rounded-full text-xs font-bold border border-white/10">
                  {i + 1}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden md:overflow-hidden bg-slate-900 text-white">
      {/* Top Navigation Bar */}
      <div className="fixed top-4 left-4 md:top-8 md:left-8 z-50 flex gap-4">
        <Link
          to="/"
          className="p-2 md:p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all hover:scale-110 active:scale-95 border border-white/20 flex items-center gap-2 group text-sm md:text-base"
          title="Back to Home"
        >
          <Home className="w-5 h-5 md:w-6 md:h-6" />
        </Link>
        <button
          onClick={() => setShowGrid(true)}
          className="p-2 md:p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all hover:scale-110 active:scale-95 border border-white/20 flex items-center gap-2 group text-sm md:text-base"
          title="View All Slides"
        >
          <LayoutGrid className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>

      {/* Navigation Controls */}
      <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 flex gap-2 md:gap-4 items-center">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`p-2 md:p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all hover:scale-110 active:scale-95 border border-white/20 ${currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        
        <span className="flex items-center font-bold text-sm md:text-lg bg-white/10 px-3 md:px-4 rounded-full border border-white/20 backdrop-blur-md h-10 md:h-12">
          {currentSlide + 1} / {totalSlides}
        </span>
        
        {/* Next Slide OR Next Lesson Button */}
        {currentSlide === totalSlides - 1 && nextLesson ? (
           <button
             onClick={() => navigate(nextLesson.path)}
             className={`px-4 md:px-6 py-2 md:py-3 rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg flex items-center gap-2 font-bold animate-pulse ${colors.button}`}
           >
             <span>Next: {nextLesson.title}</span>
             <ChevronRight className="w-5 h-5" />
           </button>
        ) : (
          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            className={`p-2 md:p-3 rounded-full transition-all hover:scale-110 active:scale-95 shadow-lg ${colors.button} ${currentSlide === totalSlides - 1 ? 'opacity-50 cursor-not-allowed bg-slate-700 shadow-none' : ''}`}
          >
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        )}
      </div>

      {/* Slides */}
      {/* 
        We pass isActive as boolean derived from index comparison.
        The wrapper div handles visibility.
      */}
      {children(currentSlide, goToSlide)}
    </div>
  );
}
