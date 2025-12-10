import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Code2, Layout, Table, FileInput } from 'lucide-react';

export default function Home() {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const newBubbles = [];
    for (let i = 0; i < 6; i++) {
      newBubbles.push({
        id: i,
        left: `${10 + i * 15}%`,
        width: `${50 + Math.random() * 50}px`,
        delay: `${i}s`,
      });
    }
    setBubbles(newBubbles);
  }, []);

  const slides = [
    {
      title: 'HTML Basics',
      path: '/basics',
      icon: Code2,
      gradient: 'from-pink-400 to-red-500',
      badge: '🎯 Beginner',
      badgeColor: 'bg-pink-100 text-pink-600',
      description: 'Start your journey with the fundamentals of HTML',
      shadowColor: 'hover:shadow-purple-500/50',
    },
    {
      title: 'HTML Structure',
      path: '/structure',
      icon: Layout,
      gradient: 'from-blue-400 to-indigo-500',
      badge: '📐 Essential',
      badgeColor: 'bg-blue-100 text-blue-600',
      description: 'Learn how to organize and structure your content',
      shadowColor: 'hover:shadow-blue-500/50',
    },
    {
      title: 'HTML Tables',
      path: '/tables',
      icon: Table,
      gradient: 'from-green-400 to-emerald-500',
      badge: '📊 Practical',
      badgeColor: 'bg-green-100 text-green-600',
      description: 'Master the art of creating beautiful data tables',
      shadowColor: 'hover:shadow-green-500/50',
    },
    {
      title: 'HTML Forms',
      path: '/forms',
      icon: FileInput,
      gradient: 'from-amber-400 to-orange-500',
      badge: '✨ Advanced',
      badgeColor: 'bg-amber-100 text-amber-600',
      description: 'Build interactive forms for user input',
      shadowColor: 'hover:shadow-amber-500/50',
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-700 overflow-x-hidden">
      {/* Animated Background Bubbles */}
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="bubble absolute rounded-full bg-white/10 pointer-events-none animate-rise"
          style={{
            left: bubble.left,
            width: bubble.width,
            height: bubble.width,
            animationDelay: bubble.delay,
            bottom: '-100px',
          }}
        />
      ))}

      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-7xl font-bold text-white mb-4 font-[family-name:var(--font-pacifico)] animate-float">
            🎨 HTML Presentation Slides
          </h1>
          <p className="text-2xl text-white/90 font-light">
            Choose your learning adventure! 🚀
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {slides.map((slide, index) => {
            const Icon = slide.icon;
            return (
              <Link
                key={slide.path}
                to={slide.path}
                className="block animate-bounce-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`bg-white rounded-3xl shadow-2xl p-8 h-full transition-all duration-300 hover:-translate-y-4 hover:rotate-2 ${slide.shadowColor}`}>
                  <div className="flex justify-center mb-6">
                    <div className={`bg-gradient-to-br ${slide.gradient} rounded-full p-6 animate-pulse-slow`}>
                      <Icon className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                    {slide.title}
                  </h2>
                  <p className="text-gray-600 text-center mb-6">
                    {slide.description}
                  </p>
                  <div className="flex justify-center">
                    <span className={`${slide.badgeColor} px-4 py-2 rounded-full text-sm font-semibold`}>
                      {slide.badge}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <p className="text-white/80 text-lg">
            💡 Click on any card to start learning!
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <span className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold">
              ⌨️ Use Arrow Keys to Navigate
            </span>
            <span className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold">
              🎨 Interactive & Fun
            </span>
            <span className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold">
              📱 Fully Responsive
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes rise {
          0% {
            bottom: -100px;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            bottom: 110%;
            opacity: 0;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes bounce-in {
          0% {
            transform: scale(0.3);
            opacity: 0;
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }

        @keyframes move {
          from {
            transform: translate(0, 0) scale(1);
          }
          to {
            transform: translate(20px, -20px) scale(1.1);
          }
        }

        .bubble {
          animation: rise 15s infinite ease-in;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-bounce-in {
          animation: bounce-in 1s ease-out;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-twinkle {
          animation: twinkle 4s infinite;
        }

        .animate-move {
          animation: move 10s infinite alternate;
        }

        .blob {
          position: absolute;
          filter: blur(40px);
          z-index: -1;
        }
      `}</style>
    </div>
  );
}
