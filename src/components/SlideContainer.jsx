import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SlideContainer({ children, totalSlides, accentColor = 'cyan' }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
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
  }, [currentSlide]);

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
  };

  const colorClasses = {
    cyan: {
      button: 'bg-cyan-500 hover:bg-cyan-600 shadow-cyan-500/30',
      blob1: 'bg-cyan-400',
      blob2: 'bg-blue-600',
    },
    pink: {
      button: 'bg-pink-500 hover:bg-pink-600 shadow-pink-500/30',
      blob1: 'bg-purple-600',
      blob2: 'bg-pink-500',
    },
    emerald: {
      button: 'bg-emerald-500 hover:bg-emerald-600 shadow-emerald-500/30',
      blob1: 'bg-emerald-600',
      blob2: 'bg-indigo-600',
    },
    purple: {
      button: 'bg-purple-500 hover:bg-purple-600 shadow-purple-500/30',
      blob1: 'bg-purple-600',
      blob2: 'bg-blue-600',
    },
  };

  const colors = colorClasses[accentColor] || colorClasses.cyan;

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-900 text-white">
      {/* Home Button */}
      <div className="fixed top-8 left-8 z-50">
        <Link
          to="/"
          className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all hover:scale-110 active:scale-95 border border-white/20 flex items-center gap-2 group"
          title="Back to Home"
        >
          <Home className="w-6 h-6" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
            Home
          </span>
        </Link>
      </div>

      {/* Navigation Controls */}
      <div className="fixed bottom-8 right-8 z-50 flex gap-4">
        <button
          onClick={prevSlide}
          className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all hover:scale-110 active:scale-95 border border-white/20"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <span className="flex items-center font-bold text-lg bg-white/10 px-4 rounded-full border border-white/20 backdrop-blur-md">
          {currentSlide + 1} / {totalSlides}
        </span>
        <button
          onClick={nextSlide}
          className={`p-3 rounded-full transition-all hover:scale-110 active:scale-95 shadow-lg ${colors.button}`}
        >
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>

      {/* Slides */}
      {children(currentSlide, goToSlide)}
    </div>
  );
}
