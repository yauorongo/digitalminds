import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';

const ROOT = dirname(fileURLToPath(import.meta.url));

const data = [
  { slug:'pensee-creative', num:'01', title:'Pensée Créative', accent:'Créative', sub:'Imaginer et innover', icon:'lightbulb', color:'secondary',
    intro:"La pensée créative, c'est la capacité d'imaginer ce qui n'existe pas encore. Chez DigitalMinds, les jeunes apprennent à observer le monde, à poser les bonnes questions et à inventer des solutions qui leur ressemblent — un super-pouvoir indispensable à l'ère de l'IA.",
    why:"Pourquoi apprendre à imaginer et innover avec nous ?",
    topics:[
      ['Brainstorming Visuel',"Cartes mentales, post-it et croquis pour faire jaillir des dizaines d'idées sans jugement."],
      ['Défis Créatifs',"Mini-défis hebdomadaires : invente un objet, redessine un logo, imagine une appli pour ton quartier."],
      ['Pensée Latérale',"Apprendre à contourner les évidences et à associer des idées venues d'univers très différents."],
      ['Prototypage Rapide',"Donner vie à une idée en moins d'une heure avec papier, carton, code ou IA générative."],
      ['Storytelling',"Raconter ses idées de manière captivante pour embarquer parents, amis ou futurs partenaires."],
      ['Inspiration Multidisciplinaire',"Explorer art, science, jeux vidéo et nature pour nourrir son imagination."],
    ],
    bullets:["Développer la confiance pour proposer ses propres idées","Apprendre à transformer une idée vague en projet concret","Sortir de la peur de l'échec grâce à l'expérimentation","Renforcer l'agilité mentale, utile dans toutes les matières"] },

  { slug:'intelligence-artificielle', num:'02', title:'Intelligence Artificielle', accent:'Artificielle', sub:"Comprendre l'IA et l'automatisation", icon:'smart_toy', color:'tertiary',
    intro:"L'IA fait désormais partie de notre quotidien. Plutôt que de la subir, nous apprenons aux jeunes à la comprendre, à dialoguer intelligemment avec elle et à l'utiliser pour amplifier leur créativité — toujours avec un regard critique et éthique.",
    why:"Pourquoi apprendre à comprendre l'IA et l'automatisation avec nous ?",
    topics:[
      ["Comment Fonctionne l'IA","Comprendre simplement ce qu'est un modèle, comment il apprend et pourquoi il se trompe parfois."],
      ["L'Art du Prompt","Apprendre à formuler de bonnes questions pour obtenir d'excellentes réponses des IA génératives."],
      ['Créer son Assistant IA',"Configurer un chatbot personnalisé pour réviser, écrire des histoires ou aider sur un projet."],
      ['IA Générative',"Créer images, musiques, vidéos et personnages avec les outils IA les plus récents."],
      ['Automatiser le Quotidien',"Mettre en place des automatisations simples pour gagner du temps sur les tâches répétitives."],
      ['Éthique & Esprit Critique',"Reconnaître les biais, les fake news et apprendre à utiliser l'IA de manière responsable."],
    ],
    bullets:["Maîtriser les outils IA qui transforment toutes les professions","Garder un esprit critique face aux contenus générés","Gagner du temps grâce à l'automatisation intelligente","Comprendre les enjeux de société liés à l'IA"] },

  { slug:'programmation-technologie', num:'03', title:'Programmation & Technologie', accent:'Technologie', sub:'Créer des solutions digitales', icon:'code', color:'primary',
    intro:"Apprendre à coder, c'est apprendre à donner des instructions claires à une machine — et donc à structurer sa pensée. Nos jeunes passent du jeu visuel aux vrais langages, et lancent leurs propres applis, sites et jeux dès les premières semaines.",
    why:"Pourquoi apprendre à créer des solutions digitales avec nous ?",
    topics:[
      ['Premiers Pas avec Scratch',"Programmer ses premiers jeux et animations en glissant des blocs colorés."],
      ['Python & JavaScript',"Passer aux langages utilisés par Google, Netflix et la NASA pour de vrai."],
      ['Sites Web Interactifs',"Créer son propre site portfolio, blog ou mini-jeu accessible depuis n'importe quel téléphone."],
      ['Applications Mobiles',"Concevoir et publier de vraies applis pour iPhone et Android."],
      ['Jeux Vidéo',"Imaginer un univers, dessiner les personnages et coder les règles d'un jeu unique."],
      ['Pensée Algorithmique',"Apprendre à découper un problème complexe en petites étapes logiques."],
    ],
    bullets:["Acquérir une compétence valorisée dans tous les secteurs","Concrétiser ses idées en projets visibles et partageables","Développer rigueur, logique et patience","Avoir un avantage clair pour les études et les futurs métiers"] },

  { slug:'communication', num:'04', title:'Communication', accent:'Communication', sub:'Collaborer et partager ses idées', icon:'forum', color:'secondary',
    intro:"Avoir une bonne idée ne suffit pas : encore faut-il savoir la transmettre. Nos jeunes apprennent à présenter leurs projets avec clarté, à écouter les autres et à collaborer efficacement — en français et en anglais, à l'oral comme à l'écrit.",
    why:"Pourquoi apprendre à collaborer et partager ses idées avec nous ?",
    topics:[
      ['Pitcher son Projet',"Présenter une idée en 2 minutes de manière claire, structurée et convaincante."],
      ['Travail en Équipe',"Apprendre à se répartir les rôles, à donner et recevoir du feedback positif."],
      ['Communication Visuelle',"Créer slides, vidéos et infographies qui font passer un message en un coup d'œil."],
      ['Écoute Active',"Apprendre à comprendre vraiment ce que l'autre veut dire avant de répondre."],
      ['Anglais Tech',"Acquérir le vocabulaire anglais utilisé dans la tech mondiale, naturellement, par la pratique."],
      ['Gestion de Projet',"Découvrir les outils simples pour organiser un projet à plusieurs (Trello, Notion…)."],
    ],
    bullets:["Gagner en confiance à l'oral comme à l'écrit","Savoir convaincre, défendre et négocier ses idées","Apprendre à travailler avec des profils différents","Préparer naturellement les oraux scolaires et entretiens futurs"] },

  { slug:'donnees-analyse', num:'05', title:'Données, Analyse & Sécurité', accent:'Sécurité', sub:'Comprendre et exploiter les données', icon:'insights', color:'tertiary',
    intro:"Les données dirigent le monde moderne. Nous apprenons aux jeunes à les lire, à les sécuriser, à les contextualiser et à en tirer des conclusions visuelles — qu'il s'agisse de statistiques sportives, de résultats scolaires ou de tendances sur les réseaux.",
    why:"Pourquoi apprendre à comprendre et exploiter les données avec nous ?",
    topics:[
      ['Lire un Graphique',"Décoder facilement courbes, camemberts et histogrammes vus partout dans les médias."],
      ['Tableurs comme un Pro',"Maîtriser Google Sheets et Excel : formules, tris, tableaux croisés dynamiques."],
      ['Visualiser ses Données',"Transformer des chiffres bruts en infographies claires et belles."],
      ['Mini-Sondages',"Créer ses propres enquêtes et analyser les réponses pour comprendre un sujet."],
      ['Données du Quotidien',"Étudier ses statistiques de jeu, son temps d'écran ou son activité sportive."],
      ['Esprit Critique sur les Chiffres',"Détecter les graphiques trompeurs et les statistiques mal présentées."],
    ],
    bullets:["Prendre des décisions éclairées plutôt que par intuition","Repérer les manipulations de chiffres dans l'actualité","Acquérir une compétence très recherchée par les entreprises","Renforcer ses résultats en mathématiques de manière concrète"] },

  { slug:'leadership', num:'06', title:'Leadership', accent:'Leadership', sub:'Inspirer et guider les autres', icon:'groups', color:'primary',
    intro:"Le leadership ne s'improvise pas, il se cultive. Chez DigitalMinds, les jeunes prennent tour à tour la responsabilité d'un mini-projet : organiser, motiver, décider et assumer — autant de compétences qui forgent la personnalité.",
    why:"Pourquoi apprendre à inspirer et guider les autres avec nous ?",
    topics:[
      ['Confiance en Soi',"Exercices et défis progressifs pour oser prendre la parole et défendre ses idées."],
      ['Motiver une Équipe',"Apprendre à embarquer les autres autour d'une vision commune et engageante."],
      ['Prendre des Décisions',"Cadres simples pour choisir entre plusieurs options sans rester bloqué."],
      ['Gérer les Conflits',"Apprendre à écouter, à reformuler et à trouver des compromis dans une équipe."],
      ['Servant Leadership',"Découvrir que le meilleur leader est celui qui aide son équipe à briller."],
      ['Modèles Inspirants',"Étudier des parcours de leaders tech, sportifs, scientifiques et entrepreneurs."],
    ],
    bullets:["Oser prendre des initiatives à l'école comme à la maison","Devenir un référent positif pour ses camarades","Apprendre à gérer le stress des responsabilités","Construire une posture forte pour l'avenir personnel et pro"] },

  { slug:'entrepreneuriat', num:'07', title:'Entrepreneuriat', accent:'Entrepreneuriat', sub:'Créer des opportunités et innover', icon:'rocket_launch', color:'secondary',
    intro:"Entreprendre, c'est passer de « j'ai une idée » à « j'ai lancé quelque chose ». Nos jeunes apprennent à détecter un vrai besoin, à concevoir une mini-offre, à la tester auprès d'utilisateurs et à itérer — comme une vraie startup.",
    why:"Pourquoi apprendre à créer des opportunités et innover avec nous ?",
    topics:[
      ['Détecter un Besoin',"Observer son entourage pour repérer les vrais problèmes qui méritent une solution."],
      ['Prototyper en 1 Semaine',"Construire une première version simple d'un produit ou service en quelques jours."],
      ['Tester avec de Vrais Utilisateurs',"Recueillir des retours honnêtes auprès de ses pairs ou de sa famille."],
      ['Bases du Modèle Économique',"Comprendre comment une idée peut générer de la valeur (et parfois du revenu)."],
      ['Marketing Simple',"Créer un nom, un logo, un compte Instagram pour parler de son projet."],
      ['Échec & Itération',"Apprendre que chaque échec est une étape utile vers un projet meilleur."],
    ],
    bullets:["Cultiver l'autonomie et l'esprit d'initiative","Apprendre à passer à l'action plutôt qu'à attendre","Comprendre concrètement le monde du travail","Préparer la création de son propre projet ou entreprise"] },

  { slug:'creativite-digitale', num:'08', title:'Créativité Digitale', accent:'Digitale', sub:'Associer technologie et imagination', icon:'palette', color:'tertiary',
    intro:"La créativité digitale, c'est l'art de bricoler avec les outils du XXIᵉ siècle : design, IA, vidéo, 3D, code. Nos jeunes apprennent à créer leurs univers — du logo à l'animation, du jeu vidéo au court-métrage.",
    why:"Pourquoi apprendre à associer technologie et imagination avec nous ?",
    topics:[
      ['Design Graphique',"Bases du design avec Figma et Canva : couleurs, typographie, composition."],
      ['Animation 2D & 3D',"Donner vie à des personnages avec des outils accessibles et fun."],
      ['Vidéo & Montage',"Tourner, monter et publier ses propres vidéos courtes ou tutoriels."],
      ['Création Musicale',"Composer des musiques originales pour ses jeux, vidéos ou projets."],
      ['Mondes Virtuels',"Construire ses propres environnements 3D explorables (Roblox, Minecraft, Unity)."],
      ['Création Assistée par IA',"Utiliser l'IA générative comme partenaire créatif, pas comme un raccourci."],
    ],
    bullets:["Exprimer sa personnalité à travers des projets uniques","Acquérir des compétences directement utilisables sur les réseaux","Construire un portfolio créatif dès l'adolescence","Découvrir des métiers passion (game design, motion, UX…)"] },

  { slug:'apprentissage-continu', num:'09', title:'Apprentissage Continu', accent:'Continu', sub:"S'adapter et apprendre en permanence", icon:'school', color:'primary',
    intro:"Dans un monde qui change tous les six mois, savoir apprendre vite devient plus important que ce que l'on sait déjà. Nos jeunes développent leur curiosité, leur méthode et leur autonomie pour rester durablement à l'aise face au changement.",
    why:"Pourquoi apprendre à s'adapter et apprendre en permanence avec nous ?",
    topics:[
      ['Apprendre à Apprendre',"Découvrir les techniques scientifiques de mémorisation et de concentration."],
      ['Veille Technologique',"Identifier les sources fiables et suivre les nouveautés tech sans se noyer."],
      ['Auto-Discipline',"Mettre en place ses propres routines pour progresser un peu chaque semaine."],
      ['Mentorat & Pairs',"Apprendre des mentors et enseigner à plus jeune que soi pour fixer ses acquis."],
      ['Carnet de Bord',"Tenir un journal d'apprentissage pour visualiser ses progrès et garder la motivation."],
      ['Mindset de Croissance',"Voir chaque difficulté comme une occasion de grandir plutôt qu'un obstacle."],
    ],
    bullets:["Devenir autonome dans ses apprentissages, à vie","S'adapter rapidement aux nouveaux outils et métiers","Renforcer la confiance face à l'inconnu","Cultiver une curiosité durable, moteur de réussite"] },
];

// ---- shared head/nav/footer ----
const head = (title, desc) => `<!DOCTYPE html>
<html class="light" lang="fr">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${title}</title>
<meta name="description" content="${desc}" />
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&display=swap" rel="stylesheet" />
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
<script>
  tailwind.config = { darkMode:"class", theme:{ extend:{ colors:{
    primary:"#004ac6","primary-container":"#2563eb","on-primary":"#ffffff",
    secondary:"#ff6b6b",tertiary:"#ff9f43",surface:"#faf8ff","on-surface":"#131b2e",
    background:"#ffffff","surface-variant":"#dae2fd","outline-variant":"#c3c6d7",
    "on-surface-variant":"#434655","on-background":"#131b2e","surface-container":"#f8f9ff",
    "surface-container-low":"#f2f3ff" }, borderRadius:{DEFAULT:"1rem",lg:"1.5rem",xl:"2.5rem",full:"9999px"},
    fontFamily:{sora:["Sora","sans-serif"],body:["Sora","sans-serif"]} } } };
</script>
<style>
  body{background:#fff;color:#131b2e;font-family:"Sora",sans-serif;}
  .creative-blob{position:absolute;filter:blur(80px);z-index:-1;opacity:.16;}
  .blob-1{top:-12%;right:-8%;width:420px;height:420px;background:#ff6b6b;border-radius:50%;}
  .blob-2{top:25%;left:-8%;width:320px;height:320px;background:#ff9f43;border-radius:45%;}
  .white-neat-card{background:#fff;border:1px solid #dae2fd;box-shadow:0 4px 20px -2px rgba(0,0,0,.05);transition:transform .4s cubic-bezier(.175,.885,.32,1.275),box-shadow .4s,border-color .4s;}
  .white-neat-card:hover{transform:translateY(-8px);box-shadow:0 20px 40px -10px rgba(0,0,0,.08);border-color:#ff6b6b;}
  .curved-edge{border-radius:2rem;}
  .soft-pill{border-radius:100px;transition:transform .3s ease,box-shadow .3s ease;}
  .soft-pill:hover{transform:scale(1.04);}
  .blob-animate{animation:blob 18s infinite alternate cubic-bezier(.45,0,.55,1);}
  @keyframes blob{0%{transform:translate(0,0) scale(1) rotate(0)}100%{transform:translate(18px,-26px) scale(1.12) rotate(10deg)}}
  [data-rv]{opacity:0;transform:translateY(24px);transition:opacity .7s cubic-bezier(.16,1,.3,1),transform .7s cubic-bezier(.16,1,.3,1);}
  [data-rv].in{opacity:1;transform:none;}
  .material-symbols-outlined{font-variation-settings:'FILL' 0,'wght' 400,'GRAD' 0,'opsz' 24;}
  @media (prefers-reduced-motion: reduce){.blob-animate{animation:none}[data-rv]{opacity:1;transform:none}}
</style>
</head>`;

const nav = `<header class="fixed top-0 w-full flex justify-between items-center px-4 md:px-10 py-4 bg-white/70 backdrop-blur-xl border-b border-surface-variant/50 z-50">
  <a href="/" class="flex items-center gap-2.5">
    <div class="w-10 h-10 bg-gradient-to-br from-secondary to-tertiary rounded-xl flex items-center justify-center shadow-sm"><span class="material-symbols-outlined text-white text-2xl" style="font-variation-settings:'FILL' 1;">rocket_launch</span></div>
    <h1 class="text-xl md:text-2xl font-bold text-on-background tracking-tight">DigitalMinds</h1>
  </a>
  <nav class="hidden md:flex gap-8 items-center">
    <a class="text-sm text-on-surface-variant hover:text-secondary transition-colors" href="/">Accueil</a>
    <a class="text-sm font-bold text-secondary" href="/competences">Les Compétences</a>
    <a class="text-sm text-on-surface-variant hover:text-secondary transition-colors" href="/membership">Devenir Membre</a>
    <a class="text-sm text-on-surface-variant hover:text-secondary transition-colors" href="/contact">Contact</a>
  </nav>
  <a href="/membership" class="hidden md:inline-block bg-primary text-on-primary px-6 py-2.5 soft-pill text-sm font-bold shadow-md hover:shadow-xl active:scale-95">Devenir Membre</a>
</header>`;

const footer = `<footer class="bg-surface-container-low border-t border-surface-variant/30 px-4 md:px-10 pt-16 pb-10 mt-8">
  <div class="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-10">
    <div class="col-span-2">
      <div class="flex items-center gap-2.5 mb-4"><div class="w-9 h-9 bg-gradient-to-br from-secondary to-tertiary rounded-lg flex items-center justify-center"><span class="material-symbols-outlined text-white text-xl" style="font-variation-settings:'FILL' 1;">rocket_launch</span></div><span class="text-xl font-bold text-on-background">DigitalMinds</span></div>
      <p class="text-sm text-on-surface-variant max-w-xs leading-relaxed">Pas une école traditionnelle. Un centre d'innovation flexible où les enfants et les adolescents explorent, créent et acquièrent des compétences d'avenir à leur propre rythme.</p>
    </div>
    <div>
      <h4 class="font-bold text-sm text-on-background mb-4">Les Compétences</h4>
      <ul class="space-y-2.5 text-sm text-on-surface-variant">
        <li><a href="/competences/pensee-creative" class="hover:text-secondary transition-colors">Pensée Créative</a></li>
        <li><a href="/competences/intelligence-artificielle" class="hover:text-secondary transition-colors">Intelligence Artificielle</a></li>
        <li><a href="/competences/programmation-technologie" class="hover:text-secondary transition-colors">Programmation &amp; Technologie</a></li>
        <li><a href="/competences/communication" class="hover:text-secondary transition-colors">Communication</a></li>
        <li><a href="/competences/donnees-analyse" class="hover:text-secondary transition-colors">Données &amp; Analyse</a></li>
        <li><a href="/competences/leadership" class="hover:text-secondary transition-colors">Leadership</a></li>
        <li><a href="/competences/entrepreneuriat" class="hover:text-secondary transition-colors">Entrepreneuriat</a></li>
        <li><a href="/competences/creativite-digitale" class="hover:text-secondary transition-colors">Créativité Digitale</a></li>
        <li><a href="/competences/apprentissage-continu" class="hover:text-secondary transition-colors">Apprentissage Continu</a></li>
      </ul>
    </div>
    <div>
      <h4 class="font-bold text-sm text-on-background mb-4">Entreprise</h4>
      <ul class="space-y-2.5 text-sm text-on-surface-variant">
        <li><a href="/competences" class="hover:text-secondary transition-colors">Nos Compétences</a></li>
        <li><a href="/membership" class="hover:text-secondary transition-colors">Devenir Membre</a></li>
        <li><a href="/contact" class="hover:text-secondary transition-colors">Contactez-nous</a></li>
        <li><a href="#" class="hover:text-secondary transition-colors">À Propos de Nous</a></li>
      </ul>
    </div>
    <div>
      <h4 class="font-bold text-sm text-on-background mb-4">Rendez-nous Visite</h4>
      <ul class="space-y-2.5 text-sm text-on-surface-variant">
        <li>8 Rue Gitenberg</li><li>ZI de la Butte</li><li>91620 Nozay</li>
        <li><a href="mailto:hello@digitalminds.com" class="hover:text-secondary transition-colors">hello@digitalminds.com</a></li>
        <li><a href="tel:0170823120" class="hover:text-secondary transition-colors">01 70 82 31 20</a></li>
      </ul>
    </div>
  </div>
  <div class="max-w-6xl mx-auto mt-12 pt-6 border-t border-surface-variant/40 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-on-surface-variant/70">
    <span>© 2026 DigitalMinds. Tous droits réservés.</span>
    <div class="flex gap-5"><a href="#" class="hover:text-secondary transition-colors">Politique de Confidentialité</a><a href="#" class="hover:text-secondary transition-colors">Conditions d'Utilisation</a></div>
  </div>
</footer>`;

const reveal = `<script>
  const io=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}})},{threshold:.12});
  document.querySelectorAll('[data-rv]').forEach((el,i)=>{el.style.transitionDelay=(i%3)*70+'ms';io.observe(el);});
</script>`;

const titleHtml = (c) => c.title === c.accent
  ? `<span class="text-primary italic">${c.title}</span>`
  : `${c.title.replace(c.accent, `</span><span class="text-primary italic">${c.accent}</span><span>`)}`.replace(/^/, '<span>') + '</span>';

function buildCompetence(c) {
  const topics = c.topics.map(([t,d],i)=>`
        <div class="white-neat-card p-7 curved-edge" data-rv>
          <div class="flex items-center justify-between mb-4">
            <span class="text-xs font-bold uppercase tracking-widest text-${c.color}">Domaine ${String(i+1).padStart(2,'0')}</span>
            <span class="material-symbols-outlined text-${c.color}/40">arrow_outward</span>
          </div>
          <h3 class="text-xl font-bold text-on-background mb-2">${t}</h3>
          <p class="text-sm text-on-surface-variant leading-relaxed">${d}</p>
        </div>`).join('');

  const bullets = c.bullets.map(b=>`
          <li class="flex items-start gap-3" data-rv>
            <span class="material-symbols-outlined text-${c.color} mt-0.5" style="font-variation-settings:'FILL' 1;">check_circle</span>
            <span class="text-on-surface-variant">${b}</span>
          </li>`).join('');

  return `${head(`${c.title} — DigitalMinds`, c.intro.slice(0,150))}
<body class="overflow-x-hidden pb-10">
<div class="creative-blob blob-1"></div>
<div class="creative-blob blob-2"></div>
${nav}
<main class="pt-24 md:pt-28">

  <!-- HERO -->
  <section class="px-4 md:px-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center py-12 md:py-20">
    <div class="space-y-6">
      <a href="/competences" class="inline-flex items-center gap-1.5 text-sm text-on-surface-variant hover:text-secondary transition-colors"><span class="material-symbols-outlined text-base">arrow_back</span> Tous les domaines</a>
      <div><span class="inline-block px-4 py-1.5 rounded-full bg-${c.color}/10 text-${c.color} text-xs font-bold uppercase tracking-widest">${c.sub}</span></div>
      <h1 class="text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight text-on-background">${titleHtml(c)}</h1>
      <p class="text-lg text-on-surface-variant leading-relaxed max-w-lg">${c.intro}</p>
      <div class="flex flex-wrap gap-4 pt-2">
        <a href="/membership" class="bg-primary text-on-primary px-8 py-4 soft-pill font-bold shadow-md hover:shadow-xl active:scale-95">Devenir Membre</a>
        <a href="/competences" class="bg-white border border-surface-variant text-on-background px-8 py-4 soft-pill font-bold hover:border-secondary transition-colors">Voir tous les domaines</a>
      </div>
    </div>
    <div class="relative flex justify-center md:justify-end">
      <div class="absolute w-72 h-72 bg-gradient-to-br from-${c.color} via-tertiary to-primary rounded-full blur-3xl opacity-30 blob-animate"></div>
      <div class="relative w-64 h-64 md:w-80 md:h-80 rounded-[3rem] bg-white border border-surface-variant shadow-2xl grid place-items-center">
        <span class="material-symbols-outlined text-${c.color}" style="font-size:120px;font-variation-settings:'FILL' 1;">${c.icon}</span>
      </div>
    </div>
  </section>

  <!-- EXPLORE -->
  <section class="bg-surface-container py-20 md:py-28 px-4 md:px-10">
    <div class="max-w-6xl mx-auto">
      <div class="max-w-2xl mb-14" data-rv>
        <h2 class="text-3xl md:text-4xl font-bold text-on-background tracking-tight">Ce Que Les Enfants Vont Explorer</h2>
        <p class="text-on-surface-variant mt-3 text-lg">Pas de cours rigides. Ce sont des domaines passionnants où les enfants peuvent expérimenter, construire et découvrir leurs passions.</p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">${topics}
      </div>
    </div>
  </section>

  <!-- WHY -->
  <section class="px-4 md:px-10 max-w-6xl mx-auto py-20 md:py-28 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
    <div data-rv>
      <h2 class="text-3xl md:text-4xl font-bold text-on-background tracking-tight">${c.why}</h2>
      <p class="text-on-surface-variant mt-4 text-lg leading-relaxed">Nous croyons en l'apprentissage par la pratique. Notre environnement offre le mélange parfait de conseils, de liberté et d'outils de pointe.</p>
    </div>
    <ul class="space-y-5">${bullets}
    </ul>
  </section>

  <!-- CTA -->
  <section class="px-4 md:px-10 pb-8">
    <div class="max-w-5xl mx-auto bg-gradient-to-br from-primary via-primary-container to-secondary rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl" data-rv>
      <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
      <div class="relative z-10 space-y-6 max-w-xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-extrabold text-white">Prêt à commencer l'exploration ?</h2>
        <p class="text-white/90 text-lg">Une seule adhésion débloque ce domaine et les 8 autres. Toute l'année, à ton rythme.</p>
        <a href="/membership" class="inline-block bg-white text-primary px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-transform active:scale-95">Devenir Membre</a>
      </div>
    </div>
  </section>
</main>
${footer}
${reveal}
</body></html>`;
}

for (const c of data) {
  const dir = join(ROOT, 'competences', c.slug);
  await mkdir(dir, { recursive: true });
  await writeFile(join(dir, 'index.html'), buildCompetence(c), 'utf8');
  console.log('wrote competences/' + c.slug + '/index.html');
}
// ---------- /competences (listing) ----------
const indexDesc = {
  "pensee-creative":"Apprendre à explorer librement, à proposer des idées originales et à transformer les défis en opportunités créatives.",
  "intelligence-artificielle":"Découvrir le fonctionnement des modèles d'IA, apprendre à les utiliser de manière responsable et automatiser des tâches du quotidien.",
  "programmation-technologie":"De Scratch à Python en passant par le web et les applications, transformer les idées en projets numériques fonctionnels.",
  "communication":"Savoir présenter un projet, écouter activement et travailler en équipe pour porter des idées plus loin.",
  "donnees-analyse":"Collecter, visualiser et interpréter les données pour prendre de meilleures décisions et raconter des histoires avec les chiffres.",
  "leadership":"Développer la confiance en soi, apprendre à fédérer une équipe autour d'un objectif et à prendre des décisions avec courage.",
  "entrepreneuriat":"Passer de l'idée à l'action : détecter un besoin, concevoir une mini-offre, la tester et itérer comme une vraie startup.",
  "creativite-digitale":"Bricoler avec les outils du XXIᵉ siècle — design, IA, vidéo, 3D, code — pour créer ses propres univers numériques.",
  "apprentissage-continu":"Développer curiosité, méthode et autonomie pour rester durablement à l'aise face au changement.",
};

function buildIndex() {
  const cards = data.map(c=>`
        <a href="/competences/${c.slug}" class="white-neat-card p-7 curved-edge group block" data-rv>
          <div class="flex items-center justify-between mb-5">
            <div class="w-14 h-14 rounded-2xl bg-${c.color}/10 flex items-center justify-center"><span class="material-symbols-outlined text-${c.color}" style="font-variation-settings:'FILL' 1;">${c.icon}</span></div>
            <span class="text-3xl font-extrabold text-surface-variant">${c.num}</span>
          </div>
          <h3 class="text-xl font-bold text-on-background">${c.title}</h3>
          <p class="text-${c.color} text-sm font-semibold mt-1">${c.sub}</p>
          <p class="text-on-surface-variant mt-3 text-sm leading-relaxed">${indexDesc[c.slug]}</p>
          <span class="mt-4 inline-flex items-center gap-1.5 text-${c.color} font-bold text-sm group-hover:gap-2.5 transition-all">Découvrir <span class="material-symbols-outlined text-base">east</span></span>
        </a>`).join('');
  return `${head('Les 9 Compétences — DigitalMinds','Neuf compétences essentielles mêlant technologie, créativité et savoir-être.')}
<body class="overflow-x-hidden pb-10">
<div class="creative-blob blob-1"></div><div class="creative-blob blob-2"></div>
${nav}
<main class="pt-24 md:pt-28">
  <section class="px-4 md:px-10 max-w-4xl mx-auto text-center py-12 md:py-16 space-y-5">
    <span class="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-widest">Les 9 Trains de Compétences</span>
    <h1 class="text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight text-on-background">9 Compétences pour <span class="text-primary italic">Construire l'Avenir</span></h1>
    <p class="text-lg text-on-surface-variant max-w-2xl mx-auto">DigitalMinds forme les enfants et adolescents autour de neuf compétences essentielles, mêlant technologie, créativité et savoir-être pour les préparer au monde de demain.</p>
  </section>
  <section class="px-4 md:px-10 max-w-6xl mx-auto pb-8">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">${cards}
    </div>
  </section>
  <section class="px-4 md:px-10 py-16">
    <div class="max-w-5xl mx-auto bg-gradient-to-br from-primary via-primary-container to-secondary rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl" data-rv>
      <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
      <div class="relative z-10 space-y-6 max-w-xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-extrabold text-white">Prêt à développer ces 9 compétences ?</h2>
        <p class="text-white/90 text-lg">Une seule adhésion = accès à tous les domaines, toute l'année.</p>
        <a href="/membership" class="inline-block bg-white text-primary px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-transform active:scale-95">Devenir Membre</a>
      </div>
    </div>
  </section>
</main>
${footer}${reveal}
</body></html>`;
}

// ---------- /membership ----------
function buildMembership() {
  const inclusions = [
    "Accès illimité 7j/7 au labo",
    "Les 9 Trains de Compétences inclus",
    "Mentorat individuel par nos experts",
    "Outils d'IA avancés (sécurisés)",
    "Création d'un portfolio de projets",
    "Ateliers exclusifs le week-end",
    "Stage professionnel garanti",
    "Attestation officielle valorisable sur Parcoursup",
  ].map(t=>`<li class="flex items-start gap-3"><span class="material-symbols-outlined text-primary" style="font-variation-settings:'FILL' 1;">check_circle</span><span class="text-on-surface-variant">${t}</span></li>`).join('');
  const guarantees = [
    ["handshake","Réseau d'entreprises partenaires","Startups tech, agences de développement web, studios de création de jeux vidéo, entreprises spécialisées en IA."],
    ["support_agent","Accompagnement personnalisé","Aide à la rédaction du CV, préparation aux entretiens, mise en relation directe avec nos partenaires."],
    ["verified","Stage garanti par défaut","Si aucun stage externe n'est trouvé, votre enfant effectue automatiquement un stage d'immersion de 1 à 2 semaines au sein de notre centre."],
    ["workspace_premium","Attestation officielle","Document valorisable sur Parcoursup, le CV et auprès des établissements scolaires."],
  ].map(([i,t,d])=>`
        <div class="white-neat-card p-7 curved-edge" data-rv>
          <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4"><span class="material-symbols-outlined text-primary" style="font-variation-settings:'FILL' 1;">${i}</span></div>
          <h3 class="text-lg font-bold text-on-background mb-2">${t}</h3>
          <p class="text-sm text-on-surface-variant leading-relaxed">${d}</p>
        </div>`).join('');
  return `${head('Devenir Membre — DigitalMinds',"Une seule adhésion. Tous les Trains de Compétences débloqués. Toute l'année.")}
<body class="overflow-x-hidden pb-10">
<div class="creative-blob blob-1"></div><div class="creative-blob blob-2"></div>
${nav}
<main class="pt-24 md:pt-28">
  <section class="px-4 md:px-10 max-w-3xl mx-auto text-center py-12 md:py-16 space-y-5">
    <span class="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-widest">Adhésion</span>
    <h1 class="text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight text-on-background">Devenir <span class="text-primary italic">Membre</span></h1>
    <p class="text-lg text-on-surface-variant">Une seule adhésion. Tous les Trains de Compétences débloqués. Toute l'année.</p>
  </section>
  <section class="px-4 md:px-10 pb-8">
    <div class="max-w-xl mx-auto white-neat-card curved-edge p-8 md:p-10 text-center" data-rv>
      <span class="inline-block px-4 py-1.5 rounded-full bg-tertiary/10 text-tertiary text-xs font-bold uppercase tracking-widest mb-6">Offre unique — Tout inclus</span>
      <p class="text-sm font-semibold text-on-surface-variant uppercase tracking-wide">Adhésion Annuelle</p>
      <div class="flex items-end justify-center gap-1 mt-2"><span class="text-6xl md:text-7xl font-extrabold text-on-background">250</span><span class="text-2xl font-bold text-on-surface-variant mb-2">€ / an</span></div>
      <p class="text-sm text-on-surface-variant mt-1">Soit moins de 21 € par mois.</p>
      <ul class="text-left space-y-3 mt-8 max-w-md mx-auto">${inclusions}</ul>
      <a href="/contact" class="mt-8 inline-block bg-primary text-on-primary px-10 py-4 soft-pill font-bold shadow-md hover:shadow-xl active:scale-95">Devenir Membre — 250 € / an</a>
    </div>
  </section>
  <section class="bg-surface-container py-20 md:py-28 px-4 md:px-10">
    <div class="max-w-6xl mx-auto">
      <div class="max-w-2xl mb-12" data-rv>
        <span class="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">Garantie Stage</span>
        <h2 class="text-3xl md:text-4xl font-bold text-on-background tracking-tight">Accompagnement Stage Professionnel Garanti</h2>
        <p class="text-on-surface-variant mt-4 text-lg leading-relaxed">Toute adhésion garantit un stage — auprès de nos partenaires, ou directement au sein de notre école si aucun stage externe n'est trouvé. Chaque membre bénéficie d'un accompagnement personnalisé pour décrocher un stage professionnel.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">${guarantees}</div>
    </div>
  </section>
  <section class="px-4 md:px-10 py-16">
    <div class="max-w-5xl mx-auto bg-gradient-to-br from-primary via-primary-container to-secondary rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl" data-rv>
      <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
      <div class="relative z-10 space-y-6 max-w-xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-extrabold text-white">Une question avant de rejoindre ?</h2>
        <p class="text-white/90 text-lg">Besoin d'une solution pour une école ou un groupe ? Parlons-en.</p>
        <a href="/contact" class="inline-block bg-white text-primary px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-transform active:scale-95">Nous Contacter</a>
      </div>
    </div>
  </section>
</main>
${footer}${reveal}
</body></html>`;
}

// ---------- /contact ----------
function buildContact() {
  const details = [
    ["location_on","Emplacement","8 Rue Gitenberg, ZI de la Butte, 91620 Nozay"],
    ["mail","E-mail","hello@digitalminds.com"],
    ["call","Téléphone","01 70 82 31 20"],
    ["schedule","Heures d'Ouverture","Lun–Ven : 15h00 – 20h00 · Sam–Dim : 10h00 – 18h00"],
  ].map(([i,t,d])=>`<div class="white-neat-card curved-edge p-5 flex items-start gap-4"><div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0"><span class="material-symbols-outlined text-primary">${i}</span></div><div><p class="text-sm font-bold text-on-background">${t}</p><p class="text-sm text-on-surface-variant mt-0.5">${d}</p></div></div>`).join('');
  return `${head('Contactez-nous — DigitalMinds','Questions sur nos abonnements, nos domaines ou une visite du labo ? Écrivez-nous.')}
<body class="overflow-x-hidden pb-10">
<div class="creative-blob blob-1"></div><div class="creative-blob blob-2"></div>
${nav}
<main class="pt-24 md:pt-28">
  <section class="px-4 md:px-10 max-w-3xl mx-auto text-center py-12 md:py-14 space-y-5">
    <span class="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-widest">Contact</span>
    <h1 class="text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight text-on-background">Contactez-<span class="text-primary italic">nous</span></h1>
    <p class="text-lg text-on-surface-variant">Vous avez des questions sur nos abonnements, nos domaines d'apprentissage ou vous souhaitez planifier une visite du labo ? Nous sommes là pour vous aider.</p>
  </section>
  <section class="px-4 md:px-10 max-w-6xl mx-auto pb-12 grid md:grid-cols-2 gap-8">
    <div class="space-y-5">
      <h2 class="text-2xl font-bold text-on-background">Détails du Labo</h2>
      ${details}
    </div>
    <form id="contactForm" class="white-neat-card curved-edge p-7 md:p-8 space-y-5">
      <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY" />
      <input type="hidden" name="subject" value="Nouveau message — Site DigitalMinds" />
      <input type="hidden" name="from_name" value="Site DigitalMinds" />
      <input type="checkbox" name="botcheck" class="hidden" style="display:none" tabindex="-1" autocomplete="off" />
      <div>
        <label class="block text-sm font-semibold text-on-background mb-2">Nom du Parent / Tuteur</label>
        <input name="Nom" type="text" required placeholder="Votre nom" class="w-full rounded-xl bg-surface border border-surface-variant focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none px-4 py-3 text-sm" />
      </div>
      <div>
        <label class="block text-sm font-semibold text-on-background mb-2">Adresse E-mail</label>
        <input name="email" type="email" required placeholder="vous@exemple.com" class="w-full rounded-xl bg-surface border border-surface-variant focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none px-4 py-3 text-sm" />
      </div>
      <div>
        <label class="block text-sm font-semibold text-on-background mb-2">Sujet</label>
        <input name="Sujet" type="text" placeholder="Abonnement, visite du labo…" class="w-full rounded-xl bg-surface border border-surface-variant focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none px-4 py-3 text-sm" />
      </div>
      <div>
        <label class="block text-sm font-semibold text-on-background mb-2">Message</label>
        <textarea name="message" rows="4" required placeholder="Votre message…" class="w-full rounded-xl bg-surface border border-surface-variant focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none px-4 py-3 text-sm resize-y"></textarea>
      </div>
      <button id="cf-submit" type="submit" class="w-full bg-primary text-on-primary py-3.5 soft-pill font-bold shadow-md hover:shadow-xl active:scale-95 disabled:opacity-60">Envoyer le Message</button>
      <p id="cf-status" class="text-sm font-medium hidden" role="status" aria-live="polite"></p>
    </form>
  </section>
</main>
${footer}
<script>
  const io=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}})},{threshold:.12});
  document.querySelectorAll('[data-rv]').forEach(el=>io.observe(el));
  (function(){
    const form=document.getElementById('contactForm'); if(!form) return;
    const status=document.getElementById('cf-status'), btn=document.getElementById('cf-submit');
    const show=(ok,m)=>{status.textContent=m;status.classList.remove('hidden');status.style.color=ok?'#15803d':'#ba1a1a';};
    form.addEventListener('submit',async(e)=>{
      e.preventDefault();
      const key=form.querySelector('[name=access_key]').value;
      if(!key||key.indexOf('YOUR_WEB3FORMS')!==-1){show(false,"\\u26a0\\ufe0f Formulaire non configuré : ajoutez votre clé Web3Forms.");return;}
      const lbl=btn.textContent; btn.disabled=true; btn.textContent='Envoi en cours…';
      try{
        const res=await fetch('https://api.web3forms.com/submit',{method:'POST',headers:{'Accept':'application/json'},body:new FormData(form)});
        const d=await res.json();
        if(d.success){show(true,'\\u2705 Merci ! Votre message a bien été envoyé.');form.reset();}
        else{show(false,d.message||'Une erreur est survenue. Réessayez.');}
      }catch(err){show(false,'Connexion impossible. Réessayez.');}
      finally{btn.disabled=false;btn.textContent=lbl;}
    });
  })();
</script>
</body></html>`;
}

await writeFile(join(ROOT,'competences','index.html'), buildIndex(), 'utf8'); console.log('wrote competences/index.html');
await mkdir(join(ROOT,'membership'),{recursive:true}); await writeFile(join(ROOT,'membership','index.html'), buildMembership(), 'utf8'); console.log('wrote membership/index.html');
await mkdir(join(ROOT,'contact'),{recursive:true}); await writeFile(join(ROOT,'contact','index.html'), buildContact(), 'utf8'); console.log('wrote contact/index.html');

console.log('Done: ' + (data.length + 3) + ' pages.');
