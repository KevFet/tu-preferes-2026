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

const dilemmas = [
    {
        slug: 'voler-invisible',
        translations: {
            fr: { question: 'Quel super-pouvoir choisirais-tu ?', optionA: 'Pouvoir voler', optionB: 'Être invisible' },
            en: { question: 'Which superpower would you choose?', optionA: 'Being able to fly', optionB: 'Being invisible' },
            es: { question: '¿Qué superpoder elegirías?', optionA: 'Poder volar', optionB: 'Ser invisible' }
        }
    },
    {
        slug: 'futur-passe',
        translations: {
            fr: { question: 'Où voyagerais-tu ?', optionA: '100 ans dans le futur', optionB: '100 ans dans le passé' },
            en: { question: 'Where would you travel?', optionA: '100 years into the future', optionB: '100 years into the past' },
            es: { question: '¿A dónde viajarías?', optionA: '100 años al futuro', optionB: '100 años al pasado' }
        }
    },
    {
        slug: 'chaleur-froid',
        translations: {
            fr: { question: 'Quel climat préfères-tu ?', optionA: 'Chaleur tropicale constante', optionB: 'Hiver polaire éternel' },
            en: { question: 'Which climate do you prefer?', optionA: 'Constant tropical heat', optionB: 'Eternal polar winter' },
            es: { question: '¿Qué clima prefieres?', optionA: 'Calor tropical constante', optionB: 'Invierno polar eterno' }
        }
    },
    {
        slug: 'pensee-langue',
        translations: {
            fr: { question: 'Quel talent aimerais-tu avoir ?', optionA: 'Lire dans les pensées', optionB: 'Parler toutes les langues' },
            en: { question: 'Which talent would you like to have?', optionA: 'Read minds', optionB: 'Speak all languages' },
            es: { question: '¿Qué talento te gustaría tener?', optionA: 'Leer mentes', optionB: 'Hablar todos los idiomas' }
        }
    },
    {
        slug: 'pizza-burger',
        translations: {
            fr: { question: 'Un seul plat pour le reste de ta vie ?', optionA: 'Pizza illimitée', optionB: 'Burgers gourmets' },
            en: { question: 'Only one dish for the rest of your life?', optionA: 'Unlimited Pizza', optionB: 'Gourmet Burgers' },
            es: { question: '¿Un solo plato por el resto de tu vida?', optionA: 'Pizza ilimitada', optionB: 'Hamburguesas gourmet' }
        }
    },
    {
        slug: 'espace-ocean',
        translations: {
            fr: { question: 'Quelle exploration te tente ?', optionA: 'Marcher sur Mars', optionB: 'Explorer les abysses' },
            en: { question: 'Which exploration tempts you?', optionA: 'Walking on Mars', optionB: 'Exploring the abyss' },
            es: { question: '¿Qué exploración te tienta?', optionA: 'Caminar sobre Marte', optionB: 'Explorar los abismos' }
        }
    },
    {
        slug: 'richesse-bonheur',
        translations: {
            fr: { question: 'Que choisis-tu ?', optionA: 'Richesse infinie mais seul', optionB: 'Vie modeste mais entouré d\'amour' },
            en: { question: 'What do you choose?', optionA: 'Infinite wealth but alone', optionB: 'Modest life but surrounded by love' },
            es: { question: '¿Qué eliges?', optionA: 'Riqueza infinita pero solo', optionB: 'Vida modesta pero rodeado de amor' }
        }
    },
    {
        slug: 'vitesse-force',
        translations: {
            fr: { question: 'Capacité physique ?', optionA: 'Vitesse de la lumière', optionB: 'Force herculéenne' },
            en: { question: 'Physical ability?', optionA: 'Speed of light', optionB: 'Herculean strength' },
            es: { question: '¿Capacidad física?', optionA: 'Velocidad de la luz', optionB: 'Fuerza hercúlea' }
        }
    },
    {
        slug: 'celebre-incognito',
        translations: {
            fr: { question: 'Style de vie ?', optionA: 'Célébrité mondiale', optionB: 'Anonymat total' },
            en: { question: 'Lifestyles?', optionA: 'World fame', optionB: 'Total anonymity' },
            es: { question: '¿Estilo de vida?', optionA: 'Fama mundial', optionB: 'Anonimato total' }
        }
    },
    {
        slug: 'musique-silence',
        translations: {
            fr: { question: 'Sens à sacrifier ?', optionA: 'Vivre sans musique', optionB: 'Vivre sans couleurs' },
            en: { question: 'Sense to sacrifice?', optionA: 'Life without music', optionB: 'Life without colors' },
            es: { question: '¿Sentido a sacrificar?', optionA: 'Vivir sin música', optionB: 'Vivir sin colores' }
        }
    },
    {
        slug: 'robot-nature',
        translations: {
            fr: { question: 'Habitat ?', optionA: 'Cité futuriste ultra-tech', optionB: 'Cabane isolée en pleine nature' },
            en: { question: 'Habitat?', optionA: 'Ultra-tech futuristic city', optionB: 'Isolated cabin in nature' },
            es: { question: '¿Hábitat?', optionA: 'Ciudad futurista ultra-tech', optionB: 'Cabaña aislada en plena naturaleza' }
        }
    },
    {
        slug: 'immortel-vie-courte',
        translations: {
            fr: { question: 'Longévité ?', optionA: 'Vivre éternellement', optionB: 'Vivre 50 ans intensément' },
            en: { question: 'Longevity?', optionA: 'Live forever', optionB: 'Live 50 years intensely' },
            es: { question: '¿Longevidad?', optionA: 'Vivir eternamente', optionB: 'Vivir 50 años intensamente' }
        }
    },
    {
        slug: 'teleport-temps',
        translations: {
            fr: { question: 'Maîtrise ?', optionA: 'Téléportation instantanée', optionB: 'Arrêter le temps' },
            en: { question: 'Mastery?', optionA: 'Instant teleportation', optionB: 'Stop time' },
            es: { question: '¿Maestría?', optionA: 'Teletransportación instantánea', optionB: 'Detener el tiempo' }
        }
    },
    {
        slug: 'chien-chat',
        translations: {
            fr: { question: 'Meilleur compagnon ?', optionA: 'Un chien fidèle', optionB: 'Un chat indépendant' },
            en: { question: 'Best companion?', optionA: 'A loyal dog', optionB: 'An independent cat' },
            es: { question: '¿Mejor compañero?', optionA: 'Un perro fiel', optionB: 'Un gato independiente' }
        }
    },
    {
        slug: 'ete-hiver',
        translations: {
            fr: { question: 'Saison préférée ?', optionA: 'Été caniculaire', optionB: 'Hiver enneigé' },
            en: { question: 'Favorite season?', optionA: 'Scorching summer', optionB: 'Snowy winter' },
            es: { question: '¿Estación favorita?', optionA: 'Verano caluroso', optionB: 'Invierno nevado' }
        }
    },
    {
        slug: 'film-livre',
        translations: {
            fr: { question: 'Divertissement ?', optionA: 'Regarder un film', optionB: 'Lire un bon livre' },
            en: { question: 'Entertainment?', optionA: 'Watch a movie', optionB: 'Read a good book' },
            es: { question: '¿Entretenimiento?', optionA: 'Ver una película', optionB: 'Leer un buen libro' }
        }
    },
    {
        slug: 'matin-nuit',
        translations: {
            fr: { question: 'Rythme ?', optionA: 'Lève-tôt dynamique', optionB: 'Oiseau de nuit créatif' },
            en: { question: 'Rhythm?', optionA: 'Dynamic early bird', optionB: 'Creative night owl' },
            es: { question: '¿Ritmo?', optionA: 'Madrugador dinámico', optionB: 'Búho nocturno creativo' }
        }
    },
    {
        slug: 'sucre-sale',
        translations: {
            fr: { question: 'Goût ?', optionA: 'Toujours sucré', optionB: 'Toujours salé' },
            en: { question: 'Taste?', optionA: 'Always sweet', optionB: 'Always salty' },
            es: { question: '¿Gusto?', optionA: 'Siempre dulce', optionB: 'Siempre salado' }
        }
    },
    {
        slug: 'ville-campagne',
        translations: {
            fr: { question: 'Environnement ?', optionA: 'Métropole bouillonnante', optionB: 'Campagne paisible' },
            en: { question: 'Environment?', optionA: 'Bubbling metropolis', optionB: 'Peaceful countryside' },
            es: { question: '¿Entorno?', optionA: 'Metrópolis burbujeante', optionB: 'Campo tranquilo' }
        }
    },
    {
        slug: 'montagne-plage',
        translations: {
            fr: { question: 'Vacances ?', optionA: 'Sommets enneigés', optionB: 'Sable chaud' },
            en: { question: 'Holidays?', optionA: 'Snowy peaks', optionB: 'Warm sand' },
            es: { question: '¿Vacaciones?', optionA: 'Cumbres nevadas', optionB: 'Arena caliente' }
        }
    },
    {
        slug: 'avion-bateau',
        translations: {
            fr: { question: 'Transport ?', optionA: 'Croisière de luxe', optionB: 'Jet privé ultra-rapide' },
            en: { question: 'Transport?', optionA: 'Luxury cruise', optionB: 'Ultra-fast private jet' },
            es: { question: '¿Transporte?', optionA: 'Crucero de lujo', optionB: 'Jet privado ultra rápido' }
        }
    },
    {
        slug: 'travail-loisir',
        translations: {
            fr: { question: 'Priorité ?', optionA: 'Carrière fulgurante', optionB: 'Temps libre maximum' },
            en: { question: 'Priority?', optionA: 'Meteoritic career', optionB: 'Maximum free time' },
            es: { question: '¿Prioridad?', optionA: 'Carrera meteórica', optionB: 'Máximo tiempo libre' }
        }
    },
    {
        slug: 'seul-foule',
        translations: {
            fr: { question: 'Soirée ?', optionA: 'Seul à la maison', optionB: 'Grosse fête bondée' },
            en: { question: 'Evening?', optionA: 'Home alone', optionB: 'Big crowded party' },
            es: { question: '¿Noche?', optionA: 'Solo en casa', optionB: 'Gran fiesta llena de gente' }
        }
    },
    {
        slug: 'podcast-radio',
        translations: {
            fr: { question: 'Audio ?', optionA: 'Podcasts éducatifs', optionB: 'Musique à fond' },
            en: { question: 'Audio?', optionA: 'Educational podcasts', optionB: 'Blasting music' },
            es: { question: '¿Audio?', optionA: 'Podcasts educativos', optionB: 'Música a tope' }
        }
    },
    {
        slug: 'serieux-drole',
        translations: {
            fr: { question: 'Partenaire ?', optionA: 'Brillant et sérieux', optionB: 'Moyen mais hilarant' },
            en: { question: 'Partner?', optionA: 'Brilliant and serious', optionB: 'Average but hilarious' },
            es: { question: '¿Pareja?', optionA: 'Brillante y serio', optionB: 'Promedio pero hilarante' }
        }
    },
    {
        slug: 'cafe-the',
        translations: {
            fr: { question: 'Boisson ?', optionA: 'Café serré', optionB: 'Thé délicat' },
            en: { question: 'Drink?', optionA: 'Strong coffee', optionB: 'Delicate tea' },
            es: { question: '¿Bebida?', optionA: 'Café cargado', optionB: 'Té delicado' }
        }
    },
    {
        slug: 'vélo-voiture',
        translations: {
            fr: { question: 'Mobilité ?', optionA: 'Vélo écolo', optionB: 'Voiture autonome' },
            en: { question: 'Mobility?', optionA: 'Eco-friendly bike', optionB: 'Autonomous car' },
            es: { question: '¿Movilidad?', optionA: 'Bicicleta ecológica', optionB: 'Coche autónomo' }
        }
    },
    {
        slug: 'sport-e-sport',
        translations: {
            fr: { question: 'Compétition ?', optionA: 'Sport physique intense', optionB: 'E-sport de haut niveau' },
            en: { question: 'Competition?', optionA: 'Intense physical sport', optionB: 'High-level e-sport' },
            es: { question: '¿Competición?', optionA: 'Deporte físico intenso', optionB: 'E-sport de alto nivel' }
        }
    },
    {
        slug: 'parler-écouter',
        translations: {
            fr: { question: 'Communication ?', optionA: 'Être un grand orateur', optionB: 'Être un excellent écouteur' },
            en: { question: 'Communication?', optionA: 'Being a great speaker', optionB: 'Being an excellent listener' },
            es: { question: '¿Comunicación?', optionA: 'Ser un gran orador', optionB: 'Ser un excelente oyente' }
        }
    },
    {
        slug: 'connu-oublié',
        translations: {
            fr: { question: 'Héritage ?', optionA: 'Entrer dans l\'histoire', optionB: 'Vivre heureux, oublié de tous' },
            en: { question: 'Legacy?', optionA: 'Enter history', optionB: 'Live happily, forgotten by all' },
            es: { question: '¿Legado?', optionA: 'Entrar en la historia', optionB: 'Vivir feliz, olvidado por todos' }
        }
    }
];

async function seed() {
    console.log('Seeding dilemmas...');
    const { data, error } = await supabase.from('questions').upsert(dilemmas, { onConflict: 'slug' });

    if (error) {
        console.error('Error seeding data:', error);
    } else {
        console.log('Successfully seeded 30 dilemmas.');
    }
}

seed();
