// components/hero/CodeCanvasHero.tsx
import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface CodeLine {
  id: number;
  text: string;
  indent: number;
  color: string;
}

const codeSnippets = {
  web: [
    { id: 1, text: 'import React from "react";', indent: 0, color: '#fed864' },
    { id: 2, text: 'import { motion } from "framer-motion";', indent: 0, color: '#fed864' },
    { id: 3, text: '', indent: 0, color: '#fff' },
    { id: 4, text: 'function App() {', indent: 0, color: '#0462e6' },
    { id: 5, text: 'return (', indent: 1, color: '#fff' },
    { id: 6, text: '<motion.div', indent: 2, color: '#fed864' },
    { id: 7, text: 'animate={{ opacity: 1 }}', indent: 3, color: '#0462e6' },
    { id: 8, text: 'className="app"', indent: 3, color: '#0462e6' },
    { id: 9, text: '>', indent: 2, color: '#fed864' },
    { id: 10, text: '<h1>Built by Arvana</h1>', indent: 3, color: '#fff' },
    { id: 11, text: '</motion.div>', indent: 2, color: '#fed864' },
    { id: 12, text: ');', indent: 1, color: '#fff' },
    { id: 13, text: '}', indent: 0, color: '#0462e6' },
  ],
  mobile: [
    { id: 1, text: 'import Flutter from "flutter";', indent: 0, color: '#fed864' },
    { id: 2, text: '', indent: 0, color: '#fff' },
    { id: 3, text: 'class ArvanaApp extends StatelessWidget {', indent: 0, color: '#0462e6' },
    { id: 4, text: '@override', indent: 1, color: '#fed864' },
    { id: 5, text: 'Widget build(BuildContext context) {', indent: 1, color: '#0462e6' },
    { id: 6, text: 'return MaterialApp(', indent: 2, color: '#fff' },
    { id: 7, text: 'home: Scaffold(', indent: 3, color: '#fff' },
    { id: 8, text: 'appBar: AppBar(', indent: 4, color: '#fff' },
    { id: 9, text: 'title: Text("Arvana"),', indent: 5, color: '#0462e6' },
    { id: 10, text: '),', indent: 4, color: '#fff' },
    { id: 11, text: '),', indent: 3, color: '#fff' },
    { id: 12, text: ');', indent: 2, color: '#fff' },
    { id: 13, text: '}', indent: 1, color: '#0462e6' },
    { id: 14, text: '}', indent: 0, color: '#0462e6' },
  ],
};

function TypewriterCode({ lines }: { lines: CodeLine[] }) {
  const [displayedLines, setDisplayedLines] = useState<CodeLine[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex < lines.length) {
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, lines[currentLineIndex]]);
        setCurrentLineIndex((prev) => prev + 1);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [currentLineIndex, lines]);

  return (
    <div className="font-mono text-sm md:text-base leading-relaxed">
      {displayedLines.map((line, index) => (
        <motion.div
          key={line.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          style={{ paddingLeft: `${line.indent * 20}px` }}
        >
          <span style={{ color: line.color }}>{line.text}</span>
          {index === displayedLines.length - 1 && (
            <motion.span
              className="inline-block w-2 h-5 bg-[#fed864] ml-1"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}

function PreviewWindow({ type }: { type: 'web' | 'mobile' }) {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: [0, 1],
      scale: [0.8, 1],
      transition: { duration: 0.8, delay: 2 },
    });
  }, [type, controls]);

  return (
    <motion.div
      animate={controls}
      className="w-full h-full bg-gradient-to-br from-[#1a1a2e] to-[#0d1526] rounded-2xl p-8 border border-[#0462e6]/30 relative overflow-hidden"
    >
      {/* Mock UI Elements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.5 }}
        className="space-y-4"
      >
        {/* Header */}
        <div className="h-12 bg-gradient-to-r from-[#0462e6] to-[#0352c7] rounded-lg flex items-center px-4">
          <div className="w-32 h-4 bg-white/20 rounded" />
        </div>

        {/* Content Cards */}
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.5 + i * 0.2, duration: 0.5 }}
            className="h-20 bg-[#0462e6]/10 rounded-lg border border-[#fed864]/20 p-4"
          >
            <div className="w-24 h-3 bg-[#fed864]/40 rounded mb-2" />
            <div className="w-full h-2 bg-white/10 rounded" />
          </motion.div>
        ))}
      </motion.div>

      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0462e6]/20 to-transparent pointer-events-none" />
    </motion.div>
  );
}

export default function CodeCanvasHero() {
  const [activeTab, setActiveTab] = useState<'web' | 'mobile'>('web');
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0f1e] via-[#0d1526] to-[#1a1a2e] px-6">
      {/* Custom Cursor */}
      <motion.div
        ref={cursorRef}
        className="fixed w-6 h-6 border-2 border-[#fed864] rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{ translateX: '-50%', translateY: '-50%' }}
      />

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(4, 98, 230, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(4, 98, 230, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Code Editor */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Tabs */}
            <div className="flex gap-4 mb-6">
              {(['web', 'mobile'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                    activeTab === tab
                      ? 'bg-[#0462e6] text-white'
                      : 'bg-white/5 text-slate-400 hover:bg-white/10'
                  }`}
                >
                  {tab === 'web' ? 'Web App' : 'Mobile App'}
                </button>
              ))}
            </div>

            {/* Editor Window */}
            <div className="bg-[#0d0d0d] rounded-2xl border border-[#0462e6]/30 overflow-hidden">
              {/* Editor Header */}
              <div className="bg-[#1a1a1a] px-4 py-3 flex items-center gap-2 border-b border-[#fed864]/20">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-slate-400 text-sm ml-4">
                  {activeTab === 'web' ? 'App.jsx' : 'main.dart'}
                </span>
              </div>

              {/* Code Content */}
              <div className="p-6">
                <TypewriterCode key={activeTab} lines={codeSnippets[activeTab]} />
              </div>
            </div>
          </motion.div>

          {/* Right: Preview + Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Heading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl md:text-7xl font-bold"
              >
                <span className="bg-gradient-to-r from-[#0462e6] via-[#fed864] to-[#0462e6] bg-clip-text text-transparent">
                  Arvana
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-xl md:text-2xl text-slate-300"
              >
                Where innovation meets execution
              </motion.p>
            </div>

            {/* Preview Window */}
            <div className="aspect-video">
              <PreviewWindow key={activeTab} type={activeTab} />
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-[#0462e6] to-[#0352c7] text-white rounded-full font-semibold"
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(4, 98, 230, 0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                Start Project
              </motion.button>

              <motion.button
                className="px-8 py-4 border-2 border-[#fed864] text-[#fed864] rounded-full font-semibold"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(254, 216, 100, 0.1)' }}
                whileTap={{ scale: 0.95 }}
              >
                Get Quote
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}