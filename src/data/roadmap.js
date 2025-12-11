import { 
  Code2, Layout, Table, FileInput, 
  Palette, Monitor, Sliders, ShoppingBag, Smartphone, 
  Package, Wind, Terminal, Atom, Zap
} from 'lucide-react';

export const roadmap = [
  {
    id: 'html',
    title: "Phase 1: The Foundation",
    subtitle: "Structure & Semantics",
    description: "Every journey begins with a solid foundation. Master HTML to structure your content meaningfully.",
    color: "from-pink-500 to-rose-600",
    icon: Layout,
    items: [
      { title: 'HTML Basics', path: '/basics', icon: Code2, desc: 'Tags, Attributes & Elements', difficulty: 'Beginner' },
      { title: 'HTML Structure', path: '/structure', icon: Layout, desc: 'Semantic HTML5', difficulty: 'Essential' },
      { title: 'HTML Tables', path: '/tables', icon: Table, desc: 'Organizing Data', difficulty: 'Practical' },
      { title: 'HTML Forms', path: '/forms', icon: FileInput, desc: 'User Input & Validation', difficulty: 'Advanced' },
    ]
  },
  {
    id: 'css',
    title: "Phase 2: The Art of Styling",
    subtitle: "Design & Responsiveness",
    description: "Bring your websites to life. Learn how to style, layout, and make your designs adaptable to any device.",
    color: "from-blue-500 to-cyan-500",
    icon: Palette,
    items: [
      { title: 'CSS Intro', path: '/css', icon: Palette, desc: 'Selectors, Colors & Fonts', difficulty: 'Creative' },
      { title: 'CSS Display', path: '/css-display', icon: Monitor, desc: 'Flexbox & Grid Layouts', difficulty: 'Core' },
      { title: 'CSS Variables', path: '/css-variables', icon: Sliders, desc: 'Theming & Maintainability', difficulty: 'Modern' },
      { title: 'Responsive Web', path: '/responsive', icon: Smartphone, desc: 'Mobile-First Design', difficulty: 'Critical' },
      { title: 'CSS Project', path: '/css-practice', icon: ShoppingBag, desc: 'Build an E-commerce UI', difficulty: 'Practice' },
    ]
  },
  {
    id: 'js',
    title: "Phase 3: The Brains",
    subtitle: "Logic & Interactivity",
    description: "Step into programming. Make your site dynamic, handle events, and manipulate the DOM.",
    color: "from-yellow-400 to-orange-500",
    icon: Terminal,
    items: [
      { title: 'JavaScript Basics', path: '/javascript', icon: Terminal, desc: 'Variables, Logic & DOM', difficulty: 'Programming' },
    ]
  },
  {
    id: 'frameworks',
    title: "Phase 4: Modern Ecosystem",
    subtitle: "Scale & Architecture",
    description: "Level up with professional tools. Use frameworks to build faster, scalable, and manageable applications.",
    color: "from-purple-500 to-indigo-600",
    icon: Zap,
    items: [
      { title: 'CSS Frameworks', path: '/css-frameworks', icon: Package, desc: 'Overview of Tools', difficulty: 'Speed' },
      { title: 'Tailwind CSS', path: '/tailwind', icon: Wind, desc: 'Utility-First Styling', difficulty: 'Modern' },
      { title: 'ReactJS', path: '/react', icon: Atom, desc: 'Component Architecture', difficulty: 'Framework' },
    ]
  }
];
