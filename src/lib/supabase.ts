import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Locale = 'fr' | 'en' | 'es';

export type Translation = {
    question: string;
    optionA: string;
    optionB: string;
};

export type Question = {
    id: string;
    slug: string;
    translations: Record<string, Translation>;
    created_at: string;
};

export type Vote = {
    id: string;
    question_id: string;
    option: 'A' | 'B';
    user_id: string;
    created_at: string;
};

export async function getQuestions() {
    const { data, error } = await supabase
        .from('questions')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) throw error;
    return data as Question[];
}

export async function getResults(questionId: string) {
    const { data, error } = await supabase
        .from('votes')
        .select('option', { count: 'exact' })
        .eq('question_id', questionId);

    if (error) throw error;

    const total = data.length;
    const countA = data.filter(v => v.option === 'A').length;
    const countB = data.filter(v => v.option === 'B').length;

    return {
        total,
        countA,
        countB,
        percentA: total > 0 ? Math.round((countA / total) * 100) : 50,
        percentB: total > 0 ? Math.round((countB / total) * 100) : 50,
    };
}

export async function castVote(questionId: string, option: 'A' | 'B', userId: string) {
    const { error } = await supabase
        .from('votes')
        .insert({
            question_id: questionId,
            option,
            user_id: userId
        });

    if (error) throw error;
}
