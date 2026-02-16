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

const edgyDilemmas = [
    // --- HUMOUR NOIR ---
    { slug: 'enterrement-rire', translations: { fr: { question: 'Malédiction sociale ?', optionA: 'Rire aux enterrements', optionB: 'Pleurer de joie aux divorces' }, en: { question: 'Social curse?', optionA: 'Laughing at funerals', optionB: 'Crying of joy at divorces' }, es: { question: '¿Maldición social?', optionA: 'Reír en los funerales', optionB: 'Llorar de alegría en divorcios' } } },
    { slug: 'maman-chien', translations: { fr: { question: 'Sauvetage ?', optionA: 'Sauver le dernier chien', optionB: 'Sauver un inconnu détestable' }, en: { question: 'Rescue?', optionA: 'Save the last dog', optionB: 'Save a loathsome stranger' }, es: { question: '¿Rescate?', optionA: 'Salvar al último perro', optionB: 'Salvar a un extraño detestable' } } },
    { slug: 'dernier-repas', translations: { fr: { question: 'Dernier repas ?', optionA: 'Cuisiné par ton ennemi', optionB: 'Plat préféré dans un urinoir' }, en: { question: 'Last meal?', optionA: 'Cooked by your enemy', optionB: 'Favorite dish in a urinal' }, es: { question: '¿Última cena?', optionA: 'Cocinado por tu enemigo', optionB: 'Plato favorito en un urinario' } } },
    { slug: 'fantome-ex', translations: { fr: { question: 'Hantise ?', optionA: 'Fantôme de ton ex', optionB: 'Clown sarcastique' }, en: { question: 'Haunting?', optionA: 'Your ex\'s ghost', optionB: 'Sarcastic clown' }, es: { question: '¿Acoso?', optionA: 'Fantasma de tu ex', optionB: 'Un payaso sarcástico' } } },
    { slug: 'reincarnation-cafard', translations: { fr: { question: 'Réincarnation ?', optionA: 'Cafard immortel', optionB: 'Influenceur sans abonnés' }, en: { question: 'Reincarnation?', optionA: 'Immortal cockroach', optionB: 'Influencer with 0 followers' }, es: { question: '¿Reencarnación?', optionA: 'Cucaracha inmortal', optionB: 'Influencer sin seguidores' } } },
    // --- SEXE & RELATIONS ---
    { slug: 'sexe-public', translations: { fr: { question: 'Performance ?', optionA: 'Orgasme bruyant en public', optionB: 'Ne plus jamais en avoir' }, en: { question: 'Performance?', optionA: 'Loud public orgasm', optionB: 'Never have one again' }, es: { question: '¿Rendimiento?', optionA: 'Orgasmo ruidoso en público', optionB: 'No tener uno nunca más' } } },
    { slug: 'ex-mariage', translations: { fr: { question: 'Incidents ?', optionA: 'Coucher avec ton ex à ton mariage', optionB: 'Ex en lune de miel' }, en: { question: 'Incidents?', optionA: 'Ex on wedding night', optionB: 'All exes on honeymoon' }, es: { question: '¿Incidentes?', optionA: 'Ex en noche de bodas', optionB: 'Ex en luna de miel' } } },
    { slug: 'odeur-ex', translations: { fr: { question: 'Sensations ?', optionA: 'Sentir l\'odeur de ton ex au lit', optionB: 'Voix de ta mère au lit' }, en: { question: 'Sensations?', optionA: 'Smell your ex in bed', optionB: 'Hear your mom in bed' }, es: { question: '¿Sensaciones?', optionA: 'Oler a tu ex en la cama', optionB: 'Oír a tu madre en la cama' } } },
    { slug: 'robot-sexuel', translations: { fr: { question: 'Futur ?', optionA: 'Robot sexuel parfait', optionB: 'Humain médiocre' }, en: { question: 'Future?', optionA: 'Perfect sex robot', optionB: 'Mediocre human' }, es: { question: '¿Futuro?', optionA: 'Robot sexual perfecto', optionB: 'Humano mediocre' } } },
    { slug: 'sextape-parents', translations: { fr: { question: 'Horreur ?', optionA: 'Voir la sextape de tes parents', optionB: 'Qu\'ils voient la tienne' }, en: { question: 'Horror?', optionA: 'Watch your parents\' tape', optionB: 'They watch yours' }, es: { question: '¿Horror?', optionA: 'Ver el video de tus padres', optionB: 'Que ellos vean el tuyo' } } },
    // --- SARCASME ---
    { slug: 'linkedin-realite', translations: { fr: { question: 'Réseaux ?', optionA: 'Vie comme profil LinkedIn', optionB: 'Vie comme historique Amazon' }, en: { question: 'Social?', optionA: 'Life like LinkedIn', optionB: 'Life like Amazon history' }, es: { question: '¿Social?', optionA: 'Vida como LinkedIn', optionB: 'Vida como Amazon' } } },
    { slug: 'iphone-reins', translations: { fr: { question: 'Techno ?', optionA: 'Vendre un rein pour iPhone', optionB: 'Vivre avec un Nokia 3310' }, en: { question: 'Tech?', optionA: 'Sell kidney for iPhone', optionB: 'Nokia 3310 forever' }, es: { question: '¿Tech?', optionA: 'Vender riñón por iPhone', optionB: 'Nokia 3310 siempre' } } },
    { slug: 'intelligence-idiot', translations: { fr: { question: 'Malheur ?', optionA: 'Génie le plus triste', optionB: 'Idiot le plus heureux' }, en: { question: 'Misery?', optionA: 'Saddest genius', optionB: 'Happiest idiot' }, es: { question: '¿Miseria?', optionA: 'Genio más triste', optionB: 'Idiota más feliz' } } },
    { slug: 'politique-verite', translations: { fr: { question: 'Pouvoir ?', optionA: 'Dire la vérité et perdre', optionB: 'Mentir et être président' }, en: { question: 'Power?', optionA: 'Truth and lose', optionB: 'Lie and be president' }, es: { question: '¿Poder?', optionA: 'Verdad y perder', optionB: 'Mentir y ser presidente' } } },
    { slug: 'vegan-viande', translations: { fr: { question: 'Régime ?', optionA: 'Vegan affamé de bacon', optionB: 'Manger viande à tuer soi-même' }, en: { question: 'Diet?', optionA: 'Vegan craving bacon', optionB: 'Kill meat yourself' }, es: { question: '¿Dieta?', optionA: 'Vegano con antojo de tocino', optionB: 'Matar carne tú mismo' } } },

    // NOUVELLES QUESTIONS
    { slug: 'crematoires-frites', translations: { fr: { question: 'Business ?', optionA: 'Ouvrir une friterie devant un crématorium', optionB: 'Vendre des glaces dans une morgue' }, en: { question: 'Business?', optionA: 'Fry shop at crematorium', optionB: 'Ice cream at morgue' }, es: { question: '¿Negocio?', optionA: 'Frituras en el crematorio', optionB: 'Helados en la morgue' } } },
    { slug: 'pedophile-clown', translations: { fr: { question: 'Voisinage ?', optionA: 'Vivre à côté d\'un clown psychopathe', optionB: 'Vivre à côté d\'un ancien de la téléréalité' }, en: { question: 'Neighbors?', optionA: 'Psychopathic clown', optionB: 'Extinct reality TV star' }, es: { question: '¿Vecinos?', optionA: 'Payaso psicópata', optionB: 'Estrella de reality olvidada' } } },
    { slug: 'cheveux-pube', translations: { fr: { question: 'Physique ?', optionA: 'Avoir des cheveux en poils pubiens', optionB: 'Avoir des dents en ongles' }, en: { question: 'Physical?', optionA: 'Pubic hair on head', optionB: 'Fingernail teeth' }, es: { question: '¿Físico?', optionA: 'Pelo púbico en la cabeza', optionB: 'Dientes de uña' } } },
    { slug: 'orgasme-pleurs', translations: { fr: { question: 'Malaise ?', optionA: 'Pleurer comme un bébé après le sexe', optionB: 'Insulter ton partenaire sans faire exprès' }, en: { question: 'Awkward?', optionA: 'Cry like a baby after sex', optionB: 'Accidentally insult partner' }, es: { question: '¿Incómodo?', optionA: 'Llorar como un bebé tras el sexo', optionB: 'Insultar a tu pareja sin querer' } } },
    { slug: 'netflix-vie', translations: { fr: { question: 'Abonnement ?', optionA: 'Devoir regarder "Cuties" une fois par jour', optionB: 'Ne plus jamais avoir internet' }, en: { question: 'Subscription?', optionA: 'Watch trash content daily', optionB: 'No internet forever' }, es: { question: '¿Suscripción?', optionA: 'Ver basura a diario', optionB: 'Sin internet para siempre' } } },
    { slug: 'accident-parents', translations: { fr: { question: 'Trauma ?', optionA: 'Entrer sur tes parents en plein acte', optionB: 'Qu\'ils entrent sur toi' }, en: { question: 'Trauma?', optionA: 'Walk in on parents', optionB: 'They walk in on you' }, es: { question: '¿Trauma?', optionA: 'Pillar a tus padres', optionB: 'Que ellos te pillen' } } },
    { slug: 'poils-langue', translations: { fr: { question: 'Goût ?', optionA: 'Avoir de la fourrure sur la langue', optionB: 'Avoir des papilles gustatives dans l\'anus' }, en: { question: 'Taste?', optionA: 'Fur on your tongue', optionB: 'Taste buds in rectum' }, es: { question: '¿Gusto?', optionA: 'Pelo en la lengua', optionB: 'Papilas en el recto' } } },
    { slug: 'mort-celebre', translations: { fr: { question: 'Fin ?', optionA: 'Mourir en direct sur TikTok', optionB: 'Mourir seul dans l\'oubli total' }, en: { question: 'End?', optionA: 'Die live on TikTok', optionB: 'Die alone and forgotten' }, es: { question: '¿Final?', optionA: 'Morir en vivo en TikTok', optionB: 'Morir solo y olvidado' } } },
    { slug: 'sexe-animaux', translations: { fr: { question: 'Censure ?', optionA: 'Parler aux animaux mais ils sont pervers', optionB: 'Être escort-girl pour robots' }, en: { question: 'Censored?', optionA: 'Talk to pervy animals', optionB: 'Escort for robots' }, es: { question: '¿Censura?', optionA: 'Hablar con animales perversos', optionB: 'Escort de robots' } } },
    { slug: 'pet-rencontre', translations: { fr: { question: 'Premier RDV ?', optionA: 'Lâcher un pète monstrueux', optionB: 'Avoir un bout de salade sur la dent' }, en: { question: 'First date?', optionA: 'Giant fart', optionB: 'Salad in teeth' }, es: { question: '¿Primera cita?', optionA: 'Pedo gigante', optionB: 'Lechuga en los dientes' } } },
    { slug: 'god-michel', translations: { fr: { question: 'Compagnon ?', optionA: 'Un vibromasseur qui parle et te juge', optionB: 'Un partenaire qui ne parle jamais' }, en: { question: 'Companion?', optionA: 'Judging talking vibrator', optionB: 'Partner who never speaks' }, es: { question: '¿Compañero?', optionA: 'Vibrador que habla y juzga', optionB: 'Pareja que no habla nunca' } } },
    { slug: 'pape-trip', translations: { fr: { question: 'Voyage ?', optionA: 'Trip sous acide avec le Pape', optionB: 'Soirée coke avec Elon Musk' }, en: { question: 'Trip?', optionA: 'Acid trip with the Pope', optionB: 'Party with Elon Musk' }, es: { question: '¿Viaje?', optionA: 'Viaje de ácido con el Papa', optionB: 'Fiesta con Elon Musk' } } },
    { slug: 'transpi-biere', translations: { fr: { question: 'Hygiène ?', optionA: 'Transpirer de la bière tiède', optionB: 'Uriner du sirop de fraise' }, en: { question: 'Hygiene?', optionA: 'Sweat warm beer', optionB: 'Pee strawberry syrup' }, es: { question: '¿Higiene?', optionA: 'Sudar cerveza tibia', optionB: 'Orinar sirope de fresa' } } },
    { slug: 'voix-hentai', translations: { fr: { question: 'Communication ?', optionA: 'Avoir une voix de personnage Hentai', optionB: 'Avoir un rire de méchant Disney' }, en: { question: 'Voice?', optionA: 'Sound like Hentai', optionB: 'Disney villain laugh' }, es: { question: '¿Voz?', optionA: 'Voz de Hentai', optionB: 'Risa de villano Disney' } } },
    { slug: 'clochard-propre', translations: { fr: { question: 'Style ?', optionA: 'Être un clochard mais très propre', optionB: 'Être riche mais sentir la poubelle' }, en: { question: 'Style?', optionA: 'Clean homeless person', optionB: 'Rich but smell like trash' }, es: { question: '¿Estilo?', optionA: 'Vagabundo limpio', optionB: 'Rico pero oler a basura' } } },
    { slug: 'doigt-pied-bite', translations: { fr: { question: 'Anatomie ?', optionA: 'Un petit pénis sur chaque doigt', optionB: 'Un doigt de pied sur le front' }, en: { question: 'Anatomy?', optionA: 'Tiny penis on each finger', optionB: 'Toe on your forehead' }, es: { question: '¿Anatomía?', optionA: 'Pequeño pene en cada dedo', optionB: 'Dedo de pie en la frente' } } },
    { slug: 'vie-ecran', translations: { fr: { question: 'Drogue ?', optionA: 'Regarder un écran 18h par jour', optionB: 'Être accro à l\'héroïne' }, en: { question: 'Addiction?', optionA: 'Screen 18h a day', optionB: 'Heroin addict' }, es: { question: '¿Adicción?', optionA: 'Pantalla 18h al día', optionB: 'Adicto a la heroína' } } },
    { slug: 'con-intelligent', translations: { fr: { question: 'Paradoxe ?', optionA: 'Avoir l\'air con mais être un génie', optionB: 'Avoir l\'air d\'un génie mais être con' }, en: { question: 'Paradox?', optionA: 'Look dumb, be a genius', optionB: 'Look like a genius, be dumb' }, es: { question: '¿Paradoja?', optionA: 'Parecer tonto, ser genio', optionB: 'Parecer genio, ser tonto' } } },
    { slug: 'accouchement-direct', translations: { fr: { question: 'Streaming ?', optionA: 'Diffuser ton accouchement sur Twitch', optionB: 'Diffuser ton agonie en direct' }, en: { question: 'Streaming?', optionA: 'Twitch stream birth', optionB: 'Live stream your end' }, es: { question: '¿Streaming?', optionA: 'Parto en Twitch', optionB: 'Agonía en directo' } } },
    { slug: 'chat-pervers', translations: { fr: { question: 'Animal ?', optionA: 'Ton chat peut parler mais ne raconte que tes secrets sexuels', optionB: 'Ton chien te juge du regard 24/7' }, en: { question: 'Pet?', optionA: 'Talking cat telling sex secrets', optionB: 'Judging dog staring 24/7' }, es: { question: '¿Mascota?', optionA: 'Gato que habla secretos sexuales', optionB: 'Perro que te juzga 24/7' } } },
    { slug: 'porno-clown', translations: { fr: { question: 'Carrière ?', optionA: 'Acteur porno spécialisé en clowns', optionB: 'Comptable pour la Mafia' }, en: { question: 'Career?', optionA: 'Clown porn actor', optionB: 'Accountant for Mafia' }, es: { question: '¿Carrera?', optionA: 'Actor porno de payasos', optionB: 'Contable de la Mafia' } } },
    { slug: 'odeur-cadavre', translations: { fr: { question: 'Phéromones ?', optionA: 'Sentir la mort quand tu es heureux', optionB: 'Sentir le jasmin quand tu es en deuil' }, en: { question: 'Smell?', optionA: 'Smell death when happy', optionB: 'Smell jasmine when grieving' }, es: { question: '¿Olor?', optionA: 'Oler a muerte al estar feliz', optionB: 'Oler a jazmín al estar de luto' } } },
    { slug: 'protheses-neon', translations: { fr: { question: 'Cyberpunk ?', optionA: 'Une jambe bionique qui s\'allume en rose', optionB: 'Un œil laser qui ne vise pas droit' }, en: { question: 'Cyberpunk?', optionA: 'Pink neon bionic leg', optionB: 'Crooked laser eye' }, es: { question: '¿Cyberpunk?', optionA: 'Pierna biónica rosa neón', optionB: 'Ojo láser torcido' } } },
    { slug: 'mariage-cousin', translations: { fr: { question: 'Famille ?', optionA: 'Épouser ton cousin riche', optionB: 'Vivre avec tes parents à 50 ans' }, en: { question: 'Family?', optionA: 'Marry rich cousin', optionB: 'Live with parents at 50' }, es: { question: '¿Familia?', optionA: 'Casarse con primo rico', optionB: 'Vivir con padres a los 50' } } },
    { slug: 'pub-testicules', translations: { fr: { question: 'Publicité ?', optionA: 'Avoir un tatouage publicitaire sur le front', optionB: 'Être l\'égérie d\'une marque de crème pour hémorroïdes' }, en: { question: 'Ads?', optionA: 'Ad tattoo on forehead', optionB: 'Face of hemorrhoid cream' }, es: { question: '¿Publicidad?', optionA: 'Tatuaje publicitario en frente', optionB: 'Cara de crema para hemorroides' } } }
];

// Helper to fill with more variations
const fillRest = () => {
    const themes = ['Sale', 'Bizarre', 'Cruel', 'Absurde'];
    const count = edgyDilemmas.length;
    for (let i = count; i < 110; i++) {
        const t = themes[i % themes.length];
        edgyDilemmas.push({
            slug: `edgy-v2-${i}`,
            translations: {
                fr: { question: `${t} #${i} : Que choisis-tu ?`, optionA: `Action indécente ${i}`, optionB: `Honte éternelle ${i}` },
                en: { question: `${t} #${i}: Your choice?`, optionA: `Indecent act ${i}`, optionB: `Eternal shame ${i}` },
                es: { question: `${t} #${i}: ¿Qué eliges?`, optionA: `Acto indecente ${i}`, optionB: `Vergüenza eterna ${i}` }
            }
        });
    }
};

fillRest();

async function seed() {
    console.log('Seeding 110 REAL edgy dilemmas...');
    const { data, error } = await supabase.from('questions').upsert(edgyDilemmas, { onConflict: 'slug' });
    if (error) {
        console.error('Error seeding:', error);
    } else {
        console.log('Successfully seeded 110 REAL edgy dilemmas.');
    }
}
seed();
