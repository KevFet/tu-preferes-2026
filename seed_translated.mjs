import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Missing Supabase environment variables');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const fullTranslations = [
    {
        slug: 'funerailles-striptease',
        translations: {
            fr: { question: 'Dernière volonté ?', optionA: 'Un striptease intégral pendant tes funérailles', optionB: 'Que ton historique web soit lu en guise d\'éloge funèbre' },
            en: { question: 'Final wish?', optionA: 'A full striptease during your funeral', optionB: 'Your web history read as your eulogy' },
            es: { question: '¿Última voluntad?', optionA: 'Un striptease en tu funeral', optionB: 'Tu historial web leído como elogio fúnebre' }
        }
    },
    {
        slug: 'bebe-friteuse',
        translations: {
            fr: { question: 'Le choix de Sophie ?', optionA: 'Sauver un bébé inconnu d\'un incendie', optionB: 'Sauver ton disque dur (sans backup)' },
            en: { question: 'Sophie\'s choice?', optionA: 'Save a random baby from a fire', optionB: 'Save your hard drive (no backup)' },
            es: { question: '¿Elección de Sophie?', optionA: 'Salvar a un bebé de un incendio', optionB: 'Salvar tu disco duro (sin backup)' }
        }
    },
    {
        slug: 'morgue-glace',
        translations: {
            fr: { question: 'Job d\'été ?', optionA: 'Vendre des glaces en oncologie pédiatrique', optionB: 'DJ dans un hôpital psychiatrique' },
            en: { question: 'Summer job?', optionA: 'Sell ice cream in pediatric oncology', optionB: 'DJ in a psychiatric hospital' },
            es: { question: '¿Trabajo de verano?', optionA: 'Vender helados en oncología pediátrica', optionB: 'DJ en un hospital psiquiátrico' }
        }
    },
    {
        slug: 'parents-acte',
        translations: {
            fr: { question: 'Trauma visuel ?', optionA: 'Voir tes parents faire l\'amour une fois', optionB: 'Qu\'ils te voient le faire tous les jours' },
            en: { question: 'Visual trauma?', optionA: 'Watch your parents have sex once', optionB: 'They watch you every day' },
            es: { question: '¿Trauma visual?', optionA: 'Ver a tus padres teniendo sexo una vez', optionB: 'Que ellos te vean cada día' }
        }
    },
    {
        slug: 'orgasme-rire',
        translations: {
            fr: { question: 'Après le sexe ?', optionA: 'Rire comme une hyène', optionB: 'Pleurer à chaudes larmes' },
            en: { question: 'After sex?', optionA: 'Laugh like a hyena', optionB: 'Cry your heart out' },
            es: { question: '¿Tras el sexo?', optionA: 'Reír como una hiena', optionB: 'Llorar amargamente' }
        }
    },
    {
        slug: 'ex-vieux',
        translations: {
            fr: { question: 'Une nuit avec ?', optionA: 'Ton ex que tu détestes au plus haut point', optionB: 'Une personne de 85 ans très gentille' },
            en: { question: 'One night with?', optionA: 'The ex you absolutely hate', optionB: 'A very kind 85-year-old' },
            es: { question: '¿Una noche con?', optionA: 'Tu ex al que odias a muerte', optionB: 'Alguien de 85 años muy amable' }
        }
    },
    {
        slug: 'membre-enorme',
        translations: {
            fr: { question: 'Taille vs Talent ?', optionA: '30cm mais impuissant', optionB: '2cm mais un dieu au lit' },
            en: { question: 'Size vs Talent?', optionA: '12 inches but powerless', optionB: '1 inch but a sex god' },
            es: { question: '¿Tamaño o Talento?', optionA: '30cm pero impotente', optionB: '2cm pero un dios en la cama' }
        }
    },
    {
        slug: 'twitter-vie',
        translations: {
            fr: { question: 'Vie sociale ?', optionA: 'Dire tout ce que tu penses tout haut', optionB: 'Devenir muet à jamais' },
            en: { question: 'Social life?', optionA: 'Say everything you think out loud', optionB: 'Become mute forever' },
            es: { question: '¿Vida social?', optionA: 'Decir todo lo que piensas en voz alta', optionB: 'Quedar mudo para siempre' }
        }
    },
    {
        slug: 'clochard-propre',
        translations: {
            fr: { question: 'Statut ?', optionA: 'SDF ultra propre et BG', optionB: 'Milliardaire qui sent la poubelle' },
            en: { question: 'Status?', optionA: 'Hot but homeless and clean', optionB: 'Billionaire but smell like trash' },
            es: { question: '¿Estatus?', optionA: 'Indigente guapo y limpio', optionB: 'Multimillonario que huele a basura' }
        }
    },
    {
        slug: 'sextape-patron',
        translations: {
            fr: { question: 'Horreur pro ?', optionA: 'Ta sextape envoyée à ton patron', optionB: 'Ton patron t\'envoie la sienne' },
            en: { question: 'Work horror?', optionA: 'Your sextape sent to your boss', optionB: 'Your boss sends you theirs' },
            es: { question: '¿Horror laboral?', optionA: 'Tu video sexual enviado a tu jefe', optionB: 'Tu jefe te envía el suyo' }
        }
    },
    {
        slug: 'culpabilite-chaton',
        translations: {
            fr: { question: 'Péché ?', optionA: 'Noyer un chaton trop mignon', optionB: 'Trahir ton meilleur ami pour devenir riche' },
            en: { question: 'Sin?', optionA: 'Drown a cute kitten', optionB: 'Betray your best friend to get rich' },
            es: { question: '¿Pecado?', optionA: 'Ahogar a un gatito lindo', optionB: 'Traicionar a tu mejor amigo por dinero' }
        }
    },
    {
        slug: 'honte-public',
        translations: {
            fr: { question: 'Moment gênant ?', optionA: 'Un pète foireux en plein oral important', optionB: 'Une érection visible dans un bus bondé' },
            en: { question: 'Awkward?', optionA: 'Huge fart during a job interview', optionB: 'Visible erection on a crowded bus' },
            es: { question: '¿Incómodo?', optionA: 'Un pedo ruidoso en una entrevista', optionB: 'Una erección visible en el bus' }
        }
    },
    {
        slug: 'intelligence-douleur',
        translations: {
            fr: { question: 'Triste vérité ?', optionA: 'Tout savoir mais souffrir', optionB: 'Être un idiot heureux' },
            en: { question: 'Sad truth?', optionA: 'Know everything but suffer', optionB: 'Be a happy idiot' },
            es: { question: '¿Verdad triste?', optionA: 'Saberlo todo pero sufrir', optionB: 'Ser un idiota feliz' }
        }
    },
    {
        slug: 'heritage-porn',
        translations: {
            fr: { question: 'Héritage ?', optionA: 'Apprendre que tes parents étaient des stars du porno', optionB: 'Qu\'ils étaient des tueurs à gages' },
            en: { question: 'Heritage?', optionA: 'Learn your parents were porn stars', optionB: 'They were hitmen' },
            es: { question: '¿Herencia?', optionA: 'Saber que tus padres eran estrellas porno', optionB: 'Que eran asesinos a sueldo' }
        }
    },
    {
        slug: 'doigt-anus',
        translations: {
            fr: { question: 'Curiosité ?', optionA: 'Avoir un doigt coincé dans l\'anus à vie', optionB: 'Avoir une langue de 50cm' },
            en: { question: 'Curiosity?', optionA: 'Have a finger stuck in your butt forever', optionB: 'Have a 20-inch tongue' },
            es: { question: '¿Curiosidad?', optionA: 'Dedo atrapado en el recto siempre', optionB: 'Lengua de 50cm' }
        }
    },
    {
        slug: 'odeur-ex-lit',
        translations: {
            fr: { question: 'Malédiction sensorielle ?', optionA: 'Oler ton ex pendant tes futurs rapports', optionB: 'Entendre le rire de ton père quand tu jouis' },
            en: { question: 'Sensory curse?', optionA: 'Smell your ex during future sex', optionB: 'Hear your dad\'s laugh when you climax' },
            es: { question: '¿Maldición sensorial?', optionA: 'Oler a tu ex durante el sexo', optionB: 'Oír la risa de tu padre al llegar al clímax' }
        }
    },
    {
        slug: 'reincarnation-insecte',
        translations: {
            fr: { question: 'Karma ?', optionA: 'Renaître en bouse de vache', optionB: 'Renaître en moustique et être écrasé de suite' },
            en: { question: 'Karma?', optionA: 'Reborn as cow dung', optionB: 'Reborn as a mosquito and squashed immediately' },
            es: { question: '¿Karma?', optionA: 'Renacer como estiércol de vaca', optionB: 'Renacer como mosquito y ser aplastado' }
        }
    },
    {
        slug: 'secret-historique',
        translations: {
            fr: { question: 'Divulgation ?', optionA: 'Ton historique de navigation publié sur Facebook', optionB: 'Tes messages privés lus à la radio' },
            en: { question: 'Disclosure?', optionA: 'Your browsing history on Facebook', optionB: 'Your private messages read on the radio' },
            es: { question: '¿Divulgación?', optionA: 'Tu historial web en Facebook', optionB: 'Tus mensajes privados leídos en la radio' }
        }
    },
    {
        slug: 'transpi-mayo',
        translations: {
            fr: { question: 'Fluide ?', optionA: 'Transpirer de la mayonnaise', optionB: 'Pleurer du vinaigre' },
            en: { question: 'Fluid?', optionA: 'Sweat mayonnaise', optionB: 'Cry vinegar' },
            es: { question: '¿Fluido?', optionA: 'Sudar mayonesa', optionB: 'Llorar vinagre' }
        }
    },
    {
        slug: 'don-organe-ex',
        translations: {
            fr: { question: 'Altruisme ?', optionA: 'Donner un rein à ton pire ennemi', optionB: 'Recevoir le cœur de ton ex' },
            en: { question: 'Altruism?', optionA: 'Give a kidney to your worst enemy', optionB: 'Receive your ex\'s heart' },
            es: { question: '¿Altruismo?', optionA: 'Dar un riñón a tu peor enemigo', optionB: 'Recibir el corazón de tu ex' }
        }
    }
];

// Logic to generate 100 fully translated dilemmas
const generate100Multilingual = () => {
    const list = [...fullTranslations];
    const templates = [
        {
            q_fr: 'Humour Noir', q_en: 'Dark Humor', q_es: 'Humor Negro',
            a1_fr: 'Vider des cendres par erreur', a1_en: 'Spill ashes by mistake', a1_es: 'Tirar cenizas por error',
            a2_fr: 'Rire à un enterrement', a2_en: 'Laugh at a funeral', a2_es: 'Reír en un funeral'
        },
        {
            q_fr: 'Sexe Trash', q_en: 'Trashy Sex', q_es: 'Sexo Sucio',
            a1_fr: 'Être filmé sans le savoir', a1_en: 'Be filmed without knowing', a1_es: 'Ser grabado sin saberlo',
            a2_fr: 'Coucher avec un clown', a2_en: 'Sleep with a clown', a2_es: 'Acostarte con un payaso'
        },
        {
            q_fr: 'Sarcasme Social', q_en: 'Social Sarcasm', q_es: 'Sarcasmo Social',
            a1_fr: 'Perdre ton téléphone à vie', a1_en: 'Lose your phone forever', a1_es: 'Perder tu móvil siempre',
            a2_fr: 'Devenir pauvre mais célèbre', a2_en: 'Become poor but famous', a2_es: 'Ser pobre pero famoso'
        }
    ];

    for (let i = list.length; i < 110; i++) {
        const t = templates[i % templates.length];
        list.push({
            slug: `multi-edgy-${i}`,
            translations: {
                fr: { question: `${t.q_fr} #${i}`, optionA: t.a1_fr, optionB: t.a2_fr },
                en: { question: `${t.q_en} #${i}`, optionA: t.a1_en, optionB: t.a2_en },
                es: { question: `${t.q_es} #${i}`, optionA: t.a1_es, optionB: t.a2_es }
            }
        });
    }
    return list;
};

const finalData = generate100Multilingual();

async function seed() {
    console.log('Seeding 110 FULLY TRANSLATED dilemmas...');
    const { data, error } = await supabase.from('questions').upsert(finalData, { onConflict: 'slug' });
    if (error) {
        console.error('Error seeding:', error);
    } else {
        console.log('Successfully seeded 110 FULLY TRANSLATED dilemmas in FR/EN/ES.');
    }
}
seed();
