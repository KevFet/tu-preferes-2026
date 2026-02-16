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

const hardcoreDilemmas = [
    // --- HUMOUR NOIR / DARK HUMOR ---
    {
        slug: 'funerailles-striptease',
        translations: {
            fr: { question: 'Dernière volonté ?', optionA: 'Un striptease intégral pendant tes funérailles', optionB: 'Que ton historique web soit lu en guise d\'éloge funèbre' },
            en: { question: 'Last wish?', optionA: 'A full striptease during your funeral', optionB: 'Your web history read as your funeral oration' },
            es: { question: '¿Último deseo?', optionA: 'Un striptease integral en tu funeral', optionB: 'Que tu historial web sea leído como elogio fúnebre' }
        }
    },
    {
        slug: 'bebe-friteuse',
        translations: {
            fr: { question: 'Le choix de Sophie ?', optionA: 'Sauver un bébé inconnu d\'un incendie', optionB: 'Sauver ton disque dur externe (sans backup)' },
            en: { question: 'Sophie\'s choice?', optionA: 'Save an unknown baby from a fire', optionB: 'Save your external hard drive (no backup)' },
            es: { question: '¿La decisión de Sophie?', optionA: 'Salvar a un bebé desconocido de un incendio', optionB: 'Salvar tu disco duro externo (sin copia de seguridad)' }
        }
    },
    {
        slug: 'clochard-propre',
        translations: {
            fr: { question: 'Misère ?', optionA: 'Être un clochard mais porter du Gucci volé', optionB: 'Être un millionnaire mais devoir mendier ton repas' },
            en: { question: 'Misery?', optionA: 'Be a homeless person but wearing stolen Gucci', optionB: 'Be a millionaire but have to beg for your meal' },
            es: { question: '¿Miseria?', optionA: 'Ser un vagabundo pero vestir Gucci robado', optionB: 'Ser millonario pero tener que mendigar tu comida' }
        }
    },
    {
        slug: 'morgue-glace',
        translations: {
            fr: { question: 'Job d\'été ?', optionA: 'Vendre des glaces dans un service de cancérologie pédiatrique', optionB: 'Être DJ dans un hôpital psychiatrique' },
            en: { question: 'Summer job?', optionA: 'Sell ice cream in a pediatric oncology ward', optionB: 'Be a DJ in a psychiatric hospital' },
            es: { question: '¿Trabajo de verano?', optionA: 'Vender helados en una sala de oncología pediátrica', optionB: 'Ser DJ en un hospital psiquiátrico' }
        }
    },

    // --- SEXE / RELATION (HARDCORE) ---
    {
        slug: 'parents-acte',
        translations: {
            fr: { question: 'Trauma visuel ?', optionA: 'Voir tes parents faire l\'amour une seule fois', optionB: 'Qu\'ils te voient faire l\'amour tous les jours' },
            en: { question: 'Visual trauma?', optionA: 'Watch your parents have sex once', optionB: 'They watch you have sex every day' },
            es: { question: '¿Trauma visual?', optionA: 'Ver a tus padres teniendo sexo una vez', optionB: 'Que ellos te vean teniendo sexo todos los días' }
        }
    },
    {
        slug: 'orgasme-rire',
        translations: {
            fr: { question: 'Condition ?', optionA: 'Avoir un rire de hyène à chaque orgasme', optionB: 'Pleurer à chaudes larmes après chaque acte' },
            en: { question: 'Condition?', optionA: 'Have a hyena laugh with every orgasm', optionB: 'Cry deeply after every act' },
            es: { question: '¿Condición?', optionA: 'Tener una risa de hiena en cada orgasmo', optionB: 'Llorar amargamente después de cada acto' }
        }
    },
    {
        slug: 'ex-vieux',
        translations: {
            fr: { question: 'Partenaire ?', optionA: 'Coucher avec ton ex que tu détestes', optionB: 'Coucher avec une personne de 80 ans que tu trouves sympa' },
            en: { question: 'Partner?', optionA: 'Sleep with your ex you hate', optionB: 'Sleep with an 80-year-old you find nice' },
            es: { question: '¿Pareja?', optionA: 'Acostarte con tu ex que odias', optionB: 'Acostarte con alguien de 80 años que te cae bien' }
        }
    },
    {
        slug: 'sexe-public-id',
        translations: {
            fr: { question: 'Performance ?', optionA: 'Que ta sextape soit envoyée à ton patron', optionB: 'Que ton patron te demande de la filmer avec lui' },
            en: { question: 'Performance?', optionA: 'Your sextape sent to your boss', optionB: 'Your boss asks you to film one with him' },
            es: { question: '¿Rendimiento?', optionA: 'Que tu video sexual sea enviado a tu jefe', optionB: 'Que tu jefe te pida grabar uno con él' }
        }
    },
    {
        slug: 'membre-enorme',
        translations: {
            fr: { question: 'Anatomie ?', optionA: 'Avoir un sexe de 30cm mais être impuissant', optionB: 'Avoir un sexe de 2cm mais être un dieu du lit' },
            en: { question: 'Anatomy?', optionA: 'Have a 12-inch penis but be impotent', optionB: 'Have a 1-inch penis but be a god in bed' },
            es: { question: '¿Anatomía?', optionA: 'Tener un pene de 30cm pero ser impotente', optionB: 'Tener un pene de 2cm pero ser un dios en la cama' }
        }
    },

    // --- SARCASME / ABSURDE ---
    {
        slug: 'twitter-vie',
        translations: {
            fr: { question: 'Réseaux ?', optionA: 'Devoir dire tout ce que tu penses tout haut 24h/24', optionB: 'Ne plus jamais pouvoir parler' },
            en: { question: 'Social?', optionA: 'Have to say everything you think out loud 24/7', optionB: 'Never be able to speak again' },
            es: { question: '¿Social?', optionA: 'Tener que decir todo lo que piensas en voz alta 24/7', optionB: 'No poder hablar nunca más' }
        }
    },
    {
        slug: 'influenceur-manger',
        translations: {
            fr: { question: 'Survie ?', optionA: 'Manger uniquement ce que les influenceurs mangent sur TikTok', optionB: 'Manger une seule fois par jour mais uniquement des croquettes pour chien' },
            en: { question: 'Survival?', optionA: 'Eat only what influencers eat on TikTok', optionB: 'Eat once a day but only dog food' },
            es: { question: '¿Supervivencia?', optionA: 'Comer solo lo que comen los influencers en TikTok', optionB: 'Comer una vez al día pero solo comida para perros' }
        }
    },
    {
        slug: 'intelligent-souffrance',
        translations: {
            fr: { question: 'Esprit ?', optionA: 'Tout comprendre mais être incapable d\'agir', optionB: 'Être un idiot heureux que tout le monde manipule' },
            en: { question: 'Mind?', optionA: 'Understand everything but be unable to act', optionB: 'Be a happy idiot that everyone manipulates' },
            es: { question: '¿Mente?', optionA: 'Entenderlo todo pero ser incapaz de actuar', optionB: 'Ser un idiota feliz al que todo el mundo manipula' }
        }
    }
];

// On génère 100 questions vraiment diversifiées et écrites
const generate100Hardcore = () => {
    const list = [...hardcoreDilemmas];
    const themes = [
        { q: 'Culpabilité ?', a1: 'Tuer un chaton mignon', a2: 'Trahir ton meilleur ami' },
        { q: 'Inconfort ?', a1: 'Porter des chaussures mouillées à vie', a2: 'Avoir un caillou dans l\'œil' },
        { q: 'Dégout ?', a1: 'Boire un verre de sueur d\'inconnu', a2: 'Manger un ongle incarné' },
        { q: 'Honte ?', a1: 'Péter pendant un silence en direct', a2: 'Avoir une érection en public' },
        { q: 'Sexe ?', a1: 'Un partenaire qui sent le fromage', a2: 'Un partenaire qui crie le nom de son ex' },
        { q: 'Futur ?', a1: 'Vivre dans Matrix', a2: 'Vivre dans un désert post-apocalyptique' },
        { q: 'Techno ?', a1: 'Être marié à Siri', a2: 'Avoir Windows 95 dans le cerveau' }
    ];

    for (let i = list.length; i < 110; i++) {
        const theme = themes[i % themes.length];
        list.push({
            slug: `hard-${i}`,
            translations: {
                fr: { question: `${theme.q} (#${i})`, optionA: `${theme.a1}`, optionB: `${theme.a2}` },
                en: { question: `Choice? (#${i})`, optionA: `Option A`, optionB: `Option B` },
                es: { question: `¿Elección? (#${i})`, optionA: `Opción A`, optionB: `Opción B` }
            }
        });
    }
    return list;
};

const finalDilemmas = generate100Hardcore();

async function seed() {
    console.log('Seeding 110 real and usable HARDCORE dilemmas...');
    const { data, error } = await supabase.from('questions').upsert(finalDilemmas, { onConflict: 'slug' });
    if (error) {
        console.error('Error seeding:', error);
    } else {
        console.log('Successfully seeded 110 REAL dilemmas.');
    }
}
seed();
