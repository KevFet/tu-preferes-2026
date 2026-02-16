'use client';

import { motion } from 'framer-motion';
import { Languages } from 'lucide-react';
import { cn } from '@/lib/utils';

export type Locale = 'fr' | 'en' | 'es';

interface LanguageSelectorProps {
    currentLocale: Locale;
    onChange: (locale: Locale) => void;
}

const languages: { code: Locale; label: string; flag: string }[] = [
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'es', label: 'Español', flag: '🇲🇽' },
];

export const LanguageSelector = ({ currentLocale, onChange }: LanguageSelectorProps) => {
    return (
        <div className="flex items-center gap-2 p-1 glass rounded-full">
            {languages.map((lang) => (
                <button
                    key={lang.code}
                    onClick={() => onChange(lang.code)}
                    className={cn(
                        "relative px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300",
                        currentLocale === lang.code ? "text-white" : "text-white/40 hover:text-white/60"
                    )}
                >
                    {currentLocale === lang.code && (
                        <motion.div
                            layoutId="active-lang"
                            className="absolute inset-0 bg-white/10 rounded-full z-0"
                            transition={{ type: "spring", duration: 0.5 }}
                        />
                    )}
                    <span className="relative z-10 flex items-center gap-1.5">
                        <span>{lang.flag}</span>
                        <span className="hidden sm:inline">{lang.code.toUpperCase()}</span>
                    </span>
                </button>
            ))}
        </div>
    );
};
