'use client';

import { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase, getQuestions, getResults, castVote, type Question, type Locale } from '@/lib/supabase';
import { DilemmaCard } from '@/components/DilemmaCard';
import { LanguageSelector } from '@/components/LanguageSelector';
import { Sparkles, Trophy, Users, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Home() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [votedId, setVotedId] = useState<string | null>(null);
  const [votedOption, setVotedOption] = useState<'A' | 'B' | null>(null);
  const [results, setResults] = useState<{ percentA: number; percentB: number; total: number } | null>(null);
  const [loading, setLoading] = useState(true);
  const [locale, setLocale] = useState<Locale>('fr');
  const [userId] = useState(() => typeof window !== 'undefined' ? (localStorage.getItem('anonymous_id') || Math.random().toString(36).substring(2)) : '');

  // Save anonymous ID
  useEffect(() => {
    if (typeof window !== 'undefined' && !localStorage.getItem('anonymous_id')) {
      localStorage.setItem('anonymous_id', userId);
    }
  }, [userId]);

  // Initial Fetch
  useEffect(() => {
    const init = async () => {
      try {
        const data = await getQuestions();
        setQuestions(data);
        if (data.length > 0) {
          const initialResults = await getResults(data[0].id);
          setResults(initialResults);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    init();
  }, []);

  // Realtime Subscription
  useEffect(() => {
    if (questions.length === 0) return;

    const currentQuestion = questions[currentIndex];

    const channel = supabase
      .channel(`public:votes:question_id=eq.${currentQuestion.id}`)
      .on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: 'votes',
        filter: `question_id=eq.${currentQuestion.id}`
      }, async () => {
        // Refresh results when a new vote comes in
        const updatedResults = await getResults(currentQuestion.id);
        setResults(updatedResults);
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [currentIndex, questions]);

  const handleVote = async (option: 'A' | 'B') => {
    if (votedId === questions[currentIndex].id) return;

    const questionId = questions[currentIndex].id;
    setVotedId(questionId);
    setVotedOption(option);

    try {
      await castVote(questionId, option, userId);
      // Results will be updated by the realtime subscription, 
      // but we can fetch them immediately for better UX
      const updatedResults = await getResults(questionId);
      setResults(updatedResults);
    } catch (err) {
      console.error(err);
    }
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setVotedId(null);
      setVotedOption(null);
      setResults(null);
      // Fetch results for next question immediately
      getResults(questions[currentIndex + 1].id).then(setResults);
    }
  };

  const currentQuestion = questions[currentIndex];
  const translation = useMemo(() => {
    if (!currentQuestion) return null;
    return currentQuestion.translations[locale] || currentQuestion.translations['en'];
  }, [currentQuestion, locale]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full"
        />
      </div>
    );
  }

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-between p-6 overflow-hidden">
      {/* Mesh Gradient */}
      <div className="mesh-gradient" />

      {/* Header */}
      <header className="w-full max-w-5xl flex justify-between items-center z-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <Zap className="w-6 h-6 text-white fill-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight leading-none">TU PRÉFÈRES</h1>
            <span className="text-[10px] text-white/40 font-bold tracking-[0.2em] uppercase">2026 Edition</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <LanguageSelector currentLocale={locale} onChange={setLocale} />
        </motion.div>
      </header>

      {/* Content */}
      <div className="flex-1 w-full max-w-md flex flex-col justify-center gap-12 z-10 py-12">
        <AnimatePresence mode="wait">
          {currentQuestion && translation && (
            <motion.div
              key={currentQuestion.id}
              initial={{ opacity: 0, x: 20, rotateY: 10 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -20, rotateY: -10 }}
              transition={{ duration: 0.5, ease: 'circOut' }}
            >
              <DilemmaCard
                question={translation.question}
                optionA={translation.optionA}
                optionB={translation.optionB}
                onVote={handleVote}
                results={results || undefined}
                voted={votedOption || undefined}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Controls */}
        <div className="mt-8 flex flex-col items-center gap-6">
          <AnimatePresence>
            {votedId && (
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                onClick={nextQuestion}
                className="group relative px-8 py-4 bg-white text-black font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Question Suivante
                <div className="absolute inset-0 rounded-2xl bg-white blur-lg opacity-0 group-hover:opacity-20 transition-opacity" />
              </motion.button>
            )}
          </AnimatePresence>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex gap-8 text-white/40 text-xs font-medium uppercase tracking-widest"
          >
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>Live Players</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4" />
              <span>Streak: 0</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full text-center py-4 z-20">
        <p className="text-[10px] text-white/20 font-medium tracking-widest uppercase">
          Propulsé par Next.js 14 & Supabase Realtime
        </p>
      </footer>
    </main>
  );
}
