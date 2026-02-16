'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

interface DilemmaCardProps {
    question: string;
    optionA: string;
    optionB: string;
    onVote: (option: 'A' | 'B') => void;
    results?: {
        percentA: number;
        percentB: number;
        total: number;
    };
    voted?: 'A' | 'B';
}

export const DilemmaCard: React.FC<DilemmaCardProps> = ({
    question,
    optionA,
    optionB,
    onVote,
    results,
    voted,
}) => {
    const [hovered, setHovered] = useState<boolean>(false);

    // 3D Tilt Effect logic
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        setHovered(false);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative w-full max-w-md mx-auto perspective-1000"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => setHovered(true)}
        >
            <motion.div
                style={{
                    rotateX: voted ? 0 : rotateX,
                    rotateY: voted ? 0 : rotateY,
                }}
                className={cn(
                    "glass rounded-3xl p-8 flex flex-col gap-8 transition-shadow duration-500",
                    hovered && !voted ? "shadow-[0_20px_50px_rgba(100,60,255,0.2)]" : "shadow-xl"
                )}
            >
                <div className="space-y-2 text-center">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        className="text-xs uppercase tracking-[0.2em] font-medium text-electric-purple"
                    >
                        Dilemme du moment
                    </motion.span>
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white leading-tight">
                        {question}
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-4">
                    {/* Option A */}
                    <VoteButton
                        label={optionA}
                        option="A"
                        voted={voted === 'A'}
                        hasVoted={!!voted}
                        percentage={results?.percentA}
                        onClick={() => onVote('A')}
                        color="indigo"
                    />

                    <div className="relative h-px flex items-center justify-center">
                        <span className="bg-black px-4 text-xs font-bold text-white/30 z-10">OU</span>
                        <div className="absolute inset-x-0 h-px bg-white/10" />
                    </div>

                    {/* Option B */}
                    <VoteButton
                        label={optionB}
                        option="B"
                        voted={voted === 'B'}
                        hasVoted={!!voted}
                        percentage={results?.percentB}
                        onClick={() => onVote('B')}
                        color="purple"
                    />
                </div>

                {voted && results && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center text-sm text-white/50"
                    >
                        {results.total.toLocaleString()} votes au total
                    </motion.div>
                )}
            </motion.div>
        </motion.div>
    );
};

interface VoteButtonProps {
    label: string;
    option: 'A' | 'B';
    voted: boolean;
    hasVoted: boolean;
    percentage?: number;
    onClick: () => void;
    color: 'indigo' | 'purple';
}

const VoteButton: React.FC<VoteButtonProps> = ({
    label,
    voted,
    hasVoted,
    percentage,
    onClick,
    color,
}) => {
    return (
        <motion.button
            whileHover={hasVoted ? {} : { scale: 1.02 }}
            whileTap={hasVoted ? {} : { scale: 0.95 }}
            onClick={hasVoted ? undefined : onClick}
            disabled={hasVoted}
            className={cn(
                "relative w-full text-left overflow-hidden rounded-2xl p-6 transition-all duration-300",
                hasVoted ? "cursor-default" : "cursor-pointer active:scale-95",
                voted
                    ? (color === 'indigo' ? "bg-indigo-600/20 ring-2 ring-indigo-500/50" : "bg-purple-600/20 ring-2 ring-purple-500/50")
                    : "bg-white/5 hover:bg-white/10"
            )}
        >
            {/* Percentage Bar */}
            {hasVoted && (
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 1, ease: 'circOut' }}
                    className={cn(
                        "absolute inset-y-0 left-0 z-0 opacity-20",
                        color === 'indigo' ? "bg-indigo-500" : "bg-purple-500"
                    )}
                />
            )}

            <div className="relative z-10 flex justify-between items-center w-full">
                <span className={cn(
                    "font-medium transition-colors duration-300",
                    voted ? "text-white" : "text-white/80"
                )}>
                    {label}
                </span>

                {hasVoted && (
                    <motion.span
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-lg font-bold tabular-nums"
                    >
                        {percentage}%
                    </motion.span>
                )}
            </div>
        </motion.button>
    );
};
