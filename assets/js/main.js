const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const languageItem = document.querySelector('.nav-item.language');
const languageMenu = document.querySelector('.dropdown-menu');
const cultureItem = document.querySelector('.nav-item.culture');
const cultureMenu = document.querySelector('.culture-menu');

if (burger && navLinks) {
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

const setupDropdown = (item, menu) => {
    if (!item || !menu) return;

    item.addEventListener('click', (event) => {
        if (window.innerWidth <= 768) {
            event.preventDefault();
            item.classList.toggle('open');
            menu.classList.toggle('open');
        }
    });

    document.addEventListener('click', (event) => {
        if (!item.contains(event.target)) {
            item.classList.remove('open');
            menu.classList.remove('open');
        }
    });
};

setupDropdown(languageItem, languageMenu);
setupDropdown(cultureItem, cultureMenu);

const isHomePage = () => {
    const path = window.location.pathname.split('/').pop() || '';
    return path === '' || path === 'index.html';
};

if (!isHomePage()) {
    const reminder = document.createElement('aside');
    reminder.className = 'language-reminder';
    reminder.setAttribute('aria-label', 'Rappel linguistique');
    reminder.innerHTML = `
        <div class="language-reminder__title">À RETENIR / RAAQIS</div>
        <p><strong>À retenir :</strong> seules <strong>trois lettres afar</strong> diffèrent du français :</p>
        <ul class="language-reminder__list">
            <li><strong>q</strong> = <em>ع</em></li>
            <li><strong>x</strong> = <em>د rétroflexe</em></li>
            <li><strong>c</strong> = <em>ح guttural</em></li>
        </ul>
        <p>Le <strong>h</strong> afar se prononce comme dans <em>هذ</em>.</p>
    `;
    document.body.appendChild(reminder);
}

const verbes = [
    { afar: 'Cate', fr: 'aider' },
    { afar: 'qelaagise', fr: 'consoler' },
    { afar: 'ceyse', fr: 'gêner' },
    { afar: 'yumbulle', fr: 'apparaître' },
    { afar: 'massoyse', fr: 'arranger' },
    { afar: 'gufe', fr: 'arriver' },
    { afar: 'essere', fr: 'demander' },
    { afar: 'diggoyse', fr: 'confirmer' },
    { afar: 'wariggise', fr: 'étonner' },
    { afar: 'yeeleme', fr: 'avouer' },
    { afar: 'leedise', fr: 'satisfaire' },
    { afar: 'warraye / tatre', fr: 'passer' },
    { afar: 'ekeelefe', fr: 'contredire' },
    { afar: 'kaqlise', fr: 'baigner / laver' },
    { afar: 'miraacise ( macaxu)', fr: 'commander (armée)' },
    { afar: 'nummayse', fr: 'approuver' },
    { afar: 'waklise', fr: 'accompagner' },
    { afar: 'warse', fr: 'informer' },
    { afar: 'barse', fr: 'enseigner' },
    { afar: 'taamite', fr: 'travailler' },
    { afar: 'osse', fr: 'ajouter' },
    { afar: 'ossokoote', fr: 'admirer / approuver' },
    { afar: 'oggole', fr: 'admettre / accepter' },
    { afar: 'bilqise', fr: 'orner / embellir' },
    { afar: 'karriqqi hee', fr: 'embellir' },
    { afar: 'arcise', fr: 'consolider' },
    { afar: 'arcisiyya', fr: 'consolidation' },
    { afar: 'seece', fr: 'appeler' },
    { afar: 'ukkuqe', fr: 'porter' },
    { afar: 'korse', fr: 'changer' },
    { afar: 'saytunnoyse', fr: 'nettoyer' },
    { afar: 'alfe', fr: 'fermer' },
    { afar: 'wakali', fr: 'compagnon' },
    { afar: 'maagoyse / kobxise', fr: 'rassembler' },
    { afar: 'Amrise', fr: 'commander' },
    { afar: 'xakbime', fr: 'communiquer / relier' },
    { afar: 'xibbaanise', fr: 'comparer' },
    { afar: 'rabe', fr: 'mourir' },
    { afar: 'qellite', fr: 'disparaître' },
    { afar: 'mekle', fr: 'distribuer' },
    { afar: 'kafe', fr: 'secher' },
    { afar: 'kafse', fr: 'assécher / dessécher' },
    { afar: 'Qedaadise', fr: 'economiser' },
    { afar: 'alayse', fr: 'cuisiner' },
    { afar: 'loowe', fr: 'compter' },
    { afar: 'cule', fr: 'entrer' },
    { afar: 'iqiyyire', fr: 'examiner / tester' },
    { afar: 'qaadite', fr: 'crier' },
    { afar: 'urse', fr: 'guérir' },
    { afar: 'ure', fr: 'guérir' },
    { afar: 'Gane / malmaale', fr: 'Abuser / tromper' },
    { afar: 'Daace', fr: 'manquer / diminuer' },
    { afar: 'Waddiroowe', fr: 'Tarder' },
    { afar: 'Essere', fr: 'Demander' },
    { afar: 'Safre', fr: 'Voyager' },
    { afar: 'Waglaale', fr: 'Intervenir' },
    { afar: 'ukme', fr: 'inventer' },
    { afar: 'Kaqte', fr: 'sauter' },
    { afar: 'Uguuguse', fr: 'exciter / susciter' },
    { afar: 'Xiiriye', fr: 'expluser' },
    { afar: 'Xabbacoyse', fr: 'Faciliter' },
    { afar: 'Kibe', fr: 'remplir' },
    { afar: 'Eleele', fr: 'rejoindre' },
    { afar: 'ariye ( kaa)', fr: 'ruer' },
    { afar: 'ceerise', fr: 'irriter' },
    { afar: 'yibxiye ( xeet kal )', fr: 'jeter ( la pierre sur lui )' },
    { afar: 'qide', fr: 'tuer' },
    { afar: 'fugte', fr: 'embrasser' },
    { afar: 'oogore', fr: 'frapper' },
    { afar: 'uyfukkune', fr: 'guider / orienter' },
    { afar: 'mayfakkana', fr: 'orientation' },
    { afar: 'barte', fr: 'apprendre' },
    { afar: 'kase', fr: 'rappeler' },
    { afar: 'digaale', fr: 'punir' },
    { afar: 'gutqe', fr: 'pousser' },
    { afar: 'keemaarise', fr: 'disputer' },
    { afar: 'cine', fr: 'refuser' },
    { afar: 'kaqle', fr: 'se laver' },
    { afar: 'wagte', fr: 'voir' },
    { afar: 'digbe', fr: 'se marier /épouser' },
    { afar: 'ramma hee', fr: 'baisser / réduire' },
    { afar: 'bicse', fr: 'réparer' },
    { afar: 'bayse', fr: 'perdre' },
    { afar: 'esgeyye', fr: 'secouer / agiter' },
    { afar: 'hawweene', fr: 'oublier' },
    { afar: 'engeyye', fr: 'trember / vibrer' },
    { afar: 'axaxite', fr: 'grelotter / fremir' },
    { afar: 'wagiteh', fr: 'regarder' },
    { afar: 'fake', fr: 'ouvrir' },
    { afar: 'eydelqe', fr: 'voir' },
    { afar: 'mulaate', fr: 'passer' },
    { afar: 'onkoyse / ifiile', fr: 'ramasser' },
    { afar: 'digre', fr: 'jouer' },
    { afar: 'xagnise', fr: 'promettre' },
    { afar: 'waase', fr: 'empêcher / interdire' },
    { afar: 'missoyse', fr: 'préparer' },
    { afar: 'imlike', fr: 'posséder' },
    { afar: 'ifdige', fr: 'résoudre' },
    { afar: 'suurute', fr: 'sentir' },
    { afar: 'uybulle', fr: 'montrer' },
    { afar: 'moole', fr: 'raser' },
    { afar: 'baxse', fr: 'séparer' },
    { afar: 'ekeele', fr: 'avouer' },
    { afar: 'esgelle', fr: 'mélanger' },
    { afar: 'eede', fr: 'rester' },
    { afar: 'soole', fr: "s'arrêter / se lever" },
    { afar: 'qansarite', fr: 'souffrir' },
    { afar: 'tammoyse', fr: 'Goûter' },
    { afar: 'qarqarise', fr: 'menacer' },
    { afar: 'oysoxooxoce', fr: 'reparer' },
    { afar: 'cane gacse', fr: 'venger' },
    { afar: 'galte', fr: 'recompenser' },
    { afar: 'cukuuke', fr: 'frotter' },
    { afar: 'yoxee', fr: 'attacher' },
    { afar: 'taqbise', fr: 'fatiguer' },
    { afar: 'igirribe', fr: 'essayer' },
    { afar: 'tamsiise', fr: 'employer / utiliser' },
    { afar: 'qambaale', fr: 'attendre' },
    { afar: 'gexe', fr: 'partir / aller' },
    { afar: 'faxe', fr: 'vouloir' },
    { afar: 'laqse', fr: 'chauffer' },
    { afar: 'miidaanise', fr: 'peser' },
    { afar: 'arquse', fr: 'mouiller' },
    { afar: 'cibbaarise', fr: 'avertir' },
    { afar: 'haade', fr: "voler / s'envoler" },
    { afar: 'Doore', fr: 'choisir' },
    { afar: 'ikcine', fr: 'aimer' },
    { afar: 'dabqe', fr: 'habiter' },
    { afar: 'ugute', fr: 'se lever' },
    { afar: 'imbide', fr: "s'eveiller / se réveiller" },
    { afar: 'qembise', fr: 'commencer' },
    { afar: 'are', fr: 'mordre' },
    { afar: 'fuufuye', fr: 'gonfler /souffler' },
    { afar: 'ufuy rube', fr: 'respirer' },
    { afar: 'iggile', fr: 'casser' },
    { afar: 'xise', fr: 'batir / construire' },
    { afar: 'carrise', fr: 'bruler' },
    { afar: 'xaamite', fr: 'acheter' },
    { afar: 'emeete', fr: 'venir' },
    { afar: 'irgiqe', fr: 'couper' },
    { afar: 'kude', fr: 'fuir' },
    { afar: 'ecee', fr: 'donner' },
    { afar: 'cate /embe', fr: 'grandir' },
    { afar: 'oobbe', fr: 'entendre' },
    { afar: 'daanise', fr: 'cacher' },
    { afar: 'kawse', fr: 'lire' },
    { afar: 'soole', fr: 'se lever' },
    { afar: 'ooqobe', fr: 'boire' },
    { afar: 'okme', fr: 'manger' },
    { afar: 'rade', fr: 'tomber' },
    { afar: 'ibbixe', fr: 'tenir' },
    { afar: 'cabe', fr: 'laisser' },
    { afar: 'eexege', fr: 'savoir / connaître' },
    { afar: 'inaaqite', fr: 'coucher' },
    { afar: 'duyye /uwwa', fr: 'bagage' },
    { afar: 'xiine', fr: 'dormir' },
    { afar: 'yaabe', fr: 'parler' },
    { afar: 'xiibite', fr: 'jurer' },
    { afar: 'daffe', fr: "s'asseoir" },
    { afar: 'feerayse', fr: 'ecrire' },
    { afar: 'sarte', fr: "s'habiller" },
    { afar: 'gasye', fr: 'jeter / lancer' },
    { afar: 'giire', fr: 'nager' },
    { afar: 'iyye', fr: 'dire' },
    { afar: 'ruube', fr: 'envoyer' },
    { afar: 'erde', fr: 'courir' },
    { afar: 'xaame', fr: 'vendre' }
];

const normaliseTexte = (value = '') =>
    value
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');

const lexiqueBrut = [
    { mot: 'a', definition: 'ce (proche)' },
    { mot: 'aagimiyya', definition: 'ignorer' },
    { mot: 'aaliyya', definition: 'avoir' },
    { mot: 'aaqitiyya', definition: 'piétiner' },
    { mot: 'aaqubiyya', definition: 'boire' },
    { mot: 'aaxigiyya', definition: 'connaître' },
    { mot: 'abba', definition: 'le père, le chef de la maison, le président' },
    { mot: 'abbiriyya', definition: 'attraper' },
    { mot: 'abiyya', definition: 'faire' },
    { mot: 'abukiyya', definition: 'naître' },
    { mot: 'abuuro', definition: 'l\'hyène, le veuf' },
    { mot: 'acuyyiyya', definition: 'donner, apporter' },
    { mot: 'adarras', definition: 'facile' },
    { mot: 'admo', definition: 'la chasse (admo abiyya = chasser)' },
    { mot: 'aduuriyya', definition: 'revenir' },
    { mot: 'afgidiyya', definition: 'débaler, détacher' },
    { mot: 'agansa', definition: 'le peigne à manche' },
    { mot: 'agdà', definition: 'la prospérité' },
    { mot: 'aggiliyya', definition: 'casser, démolir' },
    { mot: 'agilibiyya', definition: 'pêcher' },
    { mot: 'ah', definition: 'celui-ci' },
    { mot: 'akaxxiyya', definition: 'vieillir' },
    { mot: 'akciniyya', definition: 'être en train d\'aimer' },
    { mot: 'akki', definition: 'ou bien, soit…soit' },
    { mot: 'akmiyya', definition: 'manger' },
    { mot: 'alaahum', definition: 'les oursins' },
    { mot: 'alsa', definition: 'le mois' },
    { mot: 'alsà', definition: 'la lune' },
    { mot: 'amaatiyya', definition: 'venir, arriver' },
    { mot: 'amaggiyya', definition: 'devenir abondant' },
    { mot: 'amoyta', definition: 'le roi' },
    { mot: 'amoytà', definition: 'la reine' },
    { mot: 'amqiyya', definition: '1. se réconcilier - 2. devenir bon' },
    { mot: 'anaqtu', definition: 'l\'agneau seuvré' },
    { mot: 'angayiyya', definition: 'bouger' },
    { mot: 'angu', definition: 'le sein' },
    { mot: 'aniqniyya', definition: 'devenir chaud' },
    { mot: 'aniyya', definition: 'être (existence)' },
    { mot: 'ankacisiyya', definition: 'écouter' },
    { mot: 'anqibiyya', definition: 'se fâcher, détester' },
    { mot: 'anu', definition: 'moi, je' },
    { mot: 'anuuniyya', definition: 'reverdir, devenir mouillé' },
    { mot: 'aqunxiyya', definition: 'rajeunir' },
    { mot: 'arcidiyya', definition: 'enlever la peau, dépecer' },
    { mot: 'ardal', definition: 'la course' },
    { mot: 'ardiyya', definition: 'courir' },
    { mot: 'argiqiyya', definition: 'couper' },
    { mot: 'arho', definition: 'la caravanne' },
    { mot: 'baabur', definition: 'une voiture' },
    { mot: 'baad', definition: 'le monde' },
    { mot: 'baal', definition: 'la plume d\'autruche' },
    { mot: 'baan', definition: 'le monde' },
    { mot: 'baddi-faras', definition: 'l\'espadon' },
    { mot: 'baddi-keetal', definition: 'la pieuvre' },
    { mot: 'baddi-kooran', definition: 'la pieuvre' },
    { mot: 'baddi-lubak', definition: 'le requin' },
    { mot: 'baddi-magga', definition: 'la marée haute' },
    { mot: 'baddi-misaar', definition: 'le poisson-scie' },
    { mot: 'baddi-mixa', definition: 'les fruits de mer' },
    { mot: 'baddi-qirya', definition: 'la marée basse' },
    { mot: 'baham', definition: 'avant-hier' },
    { mot: 'bakaariyya', definition: 'avoir soif' },
    { mot: 'ballu', definition: 'beau-père' },
    { mot: 'bar', definition: 'la nuit' },
    { mot: 'barkumà', definition: 'un coussin' },
    { mot: 'barri', definition: 'la brousse' },
    { mot: 'basro', definition: 'la mauvaise ménagère' },
    { mot: 'basta', definition: 'les pâtes' },
    { mot: 'bayo', definition: 'le mauvais ménager' },
    { mot: 'bicisiyya', definition: 'préparer' },
    { mot: 'boolo', definition: 'le sommet, la crête' },
    { mot: 'boor', definition: 'le lambeau' },
    { mot: 'buuti', definition: 'la marmite' },
    { mot: 'buxà', definition: 'la maison' },
    { mot: 'buyyi', definition: 'le puits' },
    { mot: 'ta', definition: 'cette (proche)' },
    { mot: 'taagah', definition: 'la cause' },
    { mot: 'taama', definition: 'le travail' },
    { mot: 'taamitiyya', definition: 'travailler' },
    { mot: 'tah', definition: 'celle-ci' },
    { mot: 'tamatim', definition: 'la tomate' },
    { mot: 'tamira', definition: 'la datte, les dates' },
    { mot: 'tamitiyya', definition: 'travailler' },
    { mot: 'tascassem', definition: '' },
    { mot: 'tatree', definition: '' },
    { mot: 'tayse', definition: 'meilleur' },
    { mot: 'tece', definition: 'donné' },
    { mot: 'tet', definition: 'elle' },
    { mot: 'tet', definition: 'son, sa (pour une fille, = "her" anglais)' },
    { mot: 'tikibleytà', definition: 'une sorte d\'arbre' },
    { mot: 'tirik', definition: 'la lampe (arabe)' },
    { mot: 'toh', definition: 'celle-là' },
    { mot: 'too', definition: 'cette (éloigné)' },
    { mot: 'toobokoyta', definition: 'le frère, la fratrie' },
    { mot: 'tooma', definition: 'l\'ail' },
    { mot: 'tu', definition: 'une chose' },
    { mot: 'tufac', definition: 'la pomme (arabe)' },
    { mot: 'turaha', definition: 'un drap' },
    { mot: 'turru', definition: 'une blague' },
    { mot: 'sanat', definition: 'une année' },
    { mot: 'sangayya', definition: 'un crabe' },
    { mot: 'saqabi', definition: 'les algues' },
    { mot: 'sarisiyya', definition: 's\'habiller' },
    { mot: 'saritiyya', definition: 'habiller' },
    { mot: 'sin', definition: 'vous' },
    { mot: 'sinam', definition: 'les gens' },
    { mot: 'soolo', definition: 'debout' },
    { mot: 'sunku', definition: 'l\'épaule' },
    { mot: 'eebo', definition: 'une noix, un noyau' },
    { mot: 'ellel', definition: 'l\'échec' },
    { mot: 'elleliyya', definition: 'échouer' },
    { mot: 'can', definition: 'le lait' },
    { mot: 'cane', definition: 'la vengeance' },
    { mot: 'casa', definition: 'les coraux' },
    { mot: 'cawal', definition: 'la mer calme' },
    { mot: 'caydu', definition: 'le sang (poétique)' },
    { mot: 'ceber', definition: 'un grand serpent' },
    { mot: 'ceraaki', definition: 'une huître' },
    { mot: 'cerka', definition: 'les huîtres' },
    { mot: 'cibix', definition: 'un coquillage' },
    { mot: 'cibixxo', definition: 'les coquillages' },
    { mot: 'ciin', definition: 'l\'allergie' },
    { mot: 'ciniyya', definition: 'refuser' },
    { mot: 'cugbu', definition: 'petit plateau avec des arbustes et des cailloux' },
    { mot: 'cuggaytu', definition: 'le voisin' },
    { mot: 'culiyya', definition: 'rentrer' },
    { mot: 'kaa', definition: 'lui' },
    { mot: 'kabel', definition: 'les chaussures' },
    { mot: 'kamus', definition: 'la fesse' },
    { mot: 'kaqitiyya', definition: 'sauter' },
    { mot: 'kay', definition: 'son, sa' },
    { mot: 'kayyu', definition: 'le méhari' },
    { mot: 'kedo', definition: 'la tribu' },
    { mot: 'keeki', definition: 'un gâteau' },
    { mot: 'keetal', definition: 'le fouet (halanka)' },
    { mot: 'ken', definition: 'eux, elles' },
    { mot: 'ken', definition: 'leur, leurs' },
    { mot: 'kimal', definition: 'hier' },
    { mot: 'kimbiro', definition: 'l\'oiseau' },
    { mot: 'koo', definition: 'toi' },
    { mot: 'koofiyat', definition: 'le chapeau' },
    { mot: 'koomà', definition: 'la colline' },
    { mot: 'koqoso', definition: 'une balle' },
    { mot: 'koxxali', definition: 'le héron' },
    { mot: 'koyta', definition: 'bâton pour faire la selle des chameaux' },
    { mot: 'ku', definition: 'ton, ta' },
    { mot: 'kullum', definition: 'les poissons' },
    { mot: 'kullum-qari', definition: 'la poissonnerie' },
    { mot: 'kullumta', definition: 'le poisson' },
    { mot: 'kumaakum', definition: 'la sardine' },
    { mot: 'kundul', definition: 'la sardine (ce poisson sert aussi d\'appât)' },
    { mot: 'kusurà', definition: 'le jujubier' },
    { mot: 'kuta', definition: 'le chien' },
    { mot: 'kuxi', definition: 'la petite outre' },
    { mot: 'xaafu', definition: 'l\'insulte' },
    { mot: 'xaagu', definition: 'une nouvelle' },
    { mot: 'xaanu', definition: 'la corvée d\'eau' },
    { mot: 'xabcini', definition: 'fraîche, frais' },
    { mot: 'xaga', definition: 'une insulte' },
    { mot: 'xagiyya', definition: 'creuser' },
    { mot: 'xagtiyya', definition: 'insulter' },
    { mot: 'xeeri', definition: 'loin' },
    { mot: 'xer', definition: 'long' },
    { mot: 'xisiyya', definition: 'construire' },
    { mot: 'xuuneytà', definition: 'la fourmi' },
    { mot: 'immay', definition: 'mais' },
    { mot: 'irgiqiyya', definition: 'couper' },
    { mot: 'ixxu', definition: 'le nombre' },
    { mot: 'daaco', definition: 'le pipi, l\'urine' },
    { mot: 'daffeynà', definition: 'la réunion, l’assise' },
    { mot: 'dagom', definition: 'peu' },
    { mot: 'damaqtu', definition: 'le singe' },
    { mot: 'danan', definition: 'l\'âne' },
    { mot: 'darru', definition: 'poche après l\'intestin grêle' },
    { mot: 'dehaltu', definition: 'le veau seuvré' },
    { mot: 'dumbu', definition: 'le chat' },
    { mot: 'qaadà', definition: 'la tradition' },
    { mot: 'qabal', definition: 'le sang' },
    { mot: 'qabar', definition: 'la sécheresse' },
    { mot: 'qadaytu', definition: 'la brosse à dent traditionnelle' },
    { mot: 'qafootiyya', definition: 'être guéri' },
    { mot: 'qafoysiyya', definition: 'guérir' },
    { mot: 'qagli', definition: 'la carangue' },
    { mot: 'qale', definition: 'la montagne' },
    { mot: 'qali-kusar', definition: 'le mérou' },
    { mot: 'qallumme', definition: 'le vautour' },
    { mot: 'qambaliyya', definition: 'attendre' },
    { mot: 'qanaytu', definition: 'le criquet' },
    { mot: 'qandoola', definition: 'le héron' },
    { mot: 'qari', definition: 'la maison' },
    { mot: 'qarkayto', definition: 'le pouvoir, le fauteuil' },
    { mot: 'qas-baxà', definition: 'le rouget' },
    { mot: 'qasir', definition: 'la leçon' },
    { mot: 'qaybi', definition: 'la critique' },
    { mot: 'qefer', definition: 'une protection' },
    { mot: 'qibinà', definition: 'la mariée' },
    { mot: 'qidi', definition: 'blanc' },
    { mot: 'qidiyya', definition: '1. jeter - 2. tuer - 3. déposer quelqu’un quelque part' },
    { mot: 'qisi', definition: 'rouge' },
    { mot: 'qoobaare', definition: 'le dauphin' },
    { mot: 'qundugul', definition: 'le sommeil' },
    { mot: 'qunxuf', definition: 'les crachats' },
    { mot: 'raaqiyya', definition: 'rester' },
    { mot: 'rabiyya', definition: 'mourir' },
    { mot: 'radiyya', definition: 'tomber' },
    { mot: 'ribbooxa', definition: 'natte pour le bât des chameaux' },
    { mot: 'ruddi', definition: 'le riz' },
    { mot: 'faransa', definition: 'la france' },
    { mot: 'faransawi', definition: 'les français' },
    { mot: 'faransawita', definition: 'un français' },
    { mot: 'faransawità', definition: 'une française' },
    { mot: 'faras', definition: 'le cheval' },
    { mot: 'fiddimà', definition: 'natte afare, cérémonie funéraire' },
    { mot: 'fixxeyna', definition: 'le repose-tête' },
    { mot: 'fixxima', definition: 'le deuil (par extension, la natte afar tressée en feuilles de doum)' },
    { mot: 'footimà', definition: 'le niveau' },
    { mot: 'fulo', definition: 'un oreiller' },
    { mot: 'furun', definition: 'la baguette de pain (européen)' },
    { mot: 'gaadu', definition: 'l\'invasion' },
    { mot: 'gaantà', definition: 'le campement' },
    { mot: 'gaanu', definition: 'la jarre' },
    { mot: 'gabà', definition: 'la main' },
    { mot: 'gadda', definition: 'la richesse, la fortune' },
    { mot: 'galbo', definition: 'la peau' },
    { mot: 'gali', definition: 'la page, la plume' },
    { mot: 'galli', definition: 'le monde' },
    { mot: 'garba', definition: 'le ventre' },
    { mot: 'garrayto', definition: 'le palmier doum' },
    { mot: 'gaysà', definition: 'la corne' },
    { mot: 'gersi', definition: 'autre' },
    { mot: 'gib', definition: 'la poche' },
    { mot: 'gili', definition: 'le pouce' },
    { mot: 'gillabi', definition: 'la pêche' },
    { mot: 'gonà', definition: 'le coin' },
    { mot: 'goob', definition: 'le bouclier' },
    { mot: 'gubunà', definition: 'la veuve' },
    { mot: 'gulub', definition: 'le genou' },
    { mot: 'gumaytu', definition: 'un vautour' },
    { mot: 'guqul', definition: 'le pot-de-vin' },
    { mot: 'guub', definition: 'l\'adresse, l\'endroit où on habite' },
    { mot: 'oggoliyya', definition: 'accepter' },
    { mot: 'ogli', definition: 'un vieux bouc' },
    { mot: 'olloytà', definition: 'lit traditionnel' },
    { mot: 'ongoorowiyya', definition: 'rencontrer' },
    { mot: 'oobiyya', definition: 'descendre' },
    { mot: 'orbisiyya', definition: 'rentrer' },
    { mot: 'otcooga', definition: 'le veuf' },
    { mot: 'laale', definition: 'le vacher (une danse)' },
    { mot: 'laali', definition: 'la vachère' },
    { mot: 'lafà', definition: 'l\'os' },
    { mot: 'lagaddo', definition: 'l\'agneau non seuvré' },
    { mot: 'lageegu', definition: 'la salive' },
    { mot: 'laqafi', definition: 'un appât' },
    { mot: 'lee', definition: 'l\'eau' },
    { mot: 'lidda', definition: 'la tortue' },
    { mot: 'liggida', definition: 'l\'année, la date' },
    { mot: 'liim', definition: 'une orange' },
    { mot: 'maaqo', definition: 'les aliments' },
    { mot: 'macaliyya', definition: 'se fatiguer' },
    { mot: 'macti', definition: 'quoi' },
    { mot: 'maggom', definition: 'beaucoup, nombreux' },
    { mot: 'maqaane', definition: 'ce qui est bon' },
    { mot: 'mexexu', definition: 'un pépin, une graine' },
    { mot: 'minin', definition: 'le sourcil' },
    { mot: 'moogi', definition: 'les tourbillons' },
    { mot: 'mutuk', definition: 'la crème' },
    { mot: 'muufe', definition: 'le four traditionnel en terre. muufe gaqammo: le pain cuit dans ce four.' },
    { mot: 'muxi', definition: 'le testicule' },
    { mot: 'nabaru', definition: 'la baleine' },
    { mot: 'nakiyya', definition: 'boire du lait' },
    { mot: 'nanu', definition: 'nous' },
    { mot: 'nayyu', definition: 'corde pour porter quelque chose dans le dos' },
    { mot: 'nee', definition: 'nous' },
    { mot: 'ni', definition: 'notre, nos' },
    { mot: 'num', definition: 'l\'homme' },
    { mot: 'uli', definition: 'aucun' },
    { mot: 'ulluqta', definition: '' },
    { mot: 'ulqi', definition: 'l\'intestin grêle' },
    { mot: 'umaane', definition: 'ce qui est mauvais' },
    { mot: 'umman', definition: 'tout, toute' },
    { mot: 'usun', definition: 'ils, eux' },
    { mot: 'wagitiyya', definition: 'regarder' },
    { mot: 'wakri', definition: 'le renard' },
    { mot: 'walala', definition: 'la discussion, le dialogue' },
    { mot: 'wallu', definition: 'la carpette en peau de chèvre' },
    { mot: 'waqdi', definition: 'le moment' },
    { mot: 'warru', definition: 'le serpent' },
    { mot: 'wasif', definition: 'une femme divorcée qui se fait belle' },
    { mot: 'wayiyya', definition: 'être sans, manquer, ne pas trouver' },
    { mot: 'weqiyya', definition: 'pleurer, couler (pour un oued)' },
    { mot: 'woh', definition: 'celui-là' },
    { mot: 'woo', definition: 'ce (éloigné)' },
    { mot: 'haffo', definition: 'les vagues' },
    { mot: 'haffoyta', definition: 'une vague' },
    { mot: 'haiyya', definition: 'faire' },
    { mot: 'halanka', definition: 'le fouet' },
    { mot: 'hebeltoytà', definition: 'une telle' },
    { mot: 'hebelu', definition: 'untel' },
    { mot: 'yalla', definition: 'dieu (goyta)' },
    { mot: 'yangarri', definition: 'cheveux tressés qui descendent sur la poitrine' },
    { mot: 'yi', definition: 'mon, ma' },
    { mot: 'yoo', definition: 'moi' },
    { mot: 'iskoolu', definition: 'école' },
    { mot: 'saaqata / waqla', definition: 'heure' },
    { mot: 'lakqo', definition: 'argent' },
    { mot: 'sinaam / ummatta', definition: 'gens' },
    { mot: 'booku', definition: 'livre' },
    { mot: 'makiina / baaburu', definition: 'voiture' },
    { mot: 'cato', definition: 'aide' },
    { mot: 'kacanu', definition: 'amour' },
    { mot: 'bissa', definition: 'chat' },
    { mot: 'magaala', definition: 'ville' },
    { mot: 'ayro / saaku', definition: 'jour' },
    { mot: 'nabsi / maaqo', definition: 'nourriture' },
    { mot: 'bucre / malcino / ayyaama', definition: 'semaine' },
    { mot: 'sanata', definition: 'année' },
    { mot: 'kataysa / wakliita / fiqintu', definition: 'ami' },
    { mot: 'filmi / drama', definition: 'film' },
    { mot: 'buxammara', definition: 'famille' },
    { mot: 'bara', definition: 'nuit' },
    { mot: 'karambo / waane / gada', definition: 'musique' },
    { mot: 'sartiyya / qasunuk gaciyya', definition: 's’habiller / se déshabiller' },
    { mot: 'xisiyya / aggiliyya', definition: 'construire / détruire' },
    { mot: 'aabukiyya / rabiyya', definition: 'naître / mourir' },
    { mot: 'ambiyya / ayxuuriyya', definition: 'grandir / rétrécir' },
    { mot: 'gabliyya / qakkootiyya', definition: 'grossir / maigrir' },
    { mot: 'uktiyya / xiiniyya', definition: 'se réveiller / s’endormir' },
    { mot: 'kassitiyya / hawweeniyya', definition: 'se souvenir / oublier' },
    { mot: 'ayxeeriyya (fidsiyya) / ayxuuriyya', definition: 'allonger / raccourcir' },
    { mot: 'fikkiyya (kaqlisiyya) / wassakiysiyya', definition: 'nettoyer / salir' },
    { mot: 'facsiyya / xabbocoysiyya', definition: 'chauffer / refroidir' },
    { mot: 'xambaqiyya / fakiyya', definition: 'plier / déplier' },
    { mot: 'fakiyya / alfiyya', definition: 'ouvrir / fermer' },
    { mot: 'laahi-inti', definition: 'papillon' },
    { mot: 'ankaraaraqa', definition: 'mille-pattes' },
    { mot: 'xuune', definition: 'fourmi' },
    { mot: 'xayraytu', definition: 'chenille' },
    { mot: 'qoro', definition: 'tarentule' },
    { mot: 'igixxu', definition: 'scorpion' },
    { mot: 'numu', definition: 'un homme' },
    { mot: 'barra', definition: 'une femme' },
    { mot: 'awka', definition: 'un garçon' },
    { mot: 'awká', definition: 'une fille' },
    { mot: 'abba', definition: 'un père' },
    { mot: 'ina', definition: 'une mère' },
    { mot: 'toobokoyta', definition: 'un frère' },
    { mot: 'maqanxá', definition: 'une sœur' },
    { mot: 'baxa', definition: 'le fils' },
    { mot: 'baxá', definition: 'la fille' },
    { mot: 'xaylo', definition: 'les enfants' },
    { mot: 'daasa', definition: 'la classe' },
    { mot: 'galeysá', definition: 'le cahier' },
    { mot: 'kalama / baala', definition: 'le stylo' },
    { mot: 'santa', definition: 'le sac' },
    { mot: 'duuguma kala', definition: 'le crayon' },
    { mot: 'albaaba / afa baxa', definition: 'la porte' },
    { mot: 'miizi', definition: 'la table' },
    { mot: 'kursi', definition: 'la fenêtre' },
    { mot: 'kaqaada / olloyta', definition: 'le lit' },
    { mot: 'furunto', definition: 'pain' },
    { mot: 'kudra', definition: 'fruit' },
    { mot: 'caxaaxuwa', definition: 'le légume' },
    { mot: 'cana', definition: 'le lait' },
    { mot: 'kada / afxago', definition: 'le repas' },
    { mot: 'saga / kimbiro', definition: 'vache' },
    { mot: 'farasa / bakili', definition: 'cheval' },
    { mot: 'durtaheytá', definition: 'poule' },
    { mot: 'bisitté', definition: 'l’oiseau' },
    { mot: 'bulci', definition: 'bleu' },
    { mot: 'hurdi', definition: 'jaune' },
    { mot: 'inxixi', definition: 'vert' },
    { mot: 'diti', definition: 'noir' },
    { mot: 'qas walqinaana', definition: 'rose' },
    { mot: 'walqinaana', definition: 'violet' },
    { mot: 'soolo / coodo', definition: 'debout' },
    { mot: 'daffeyiyya', definition: 's’asseoir' },
    { mot: 'gexiyya', definition: 'marcher' },
    { mot: 'kaqtiyya', definition: 'sauter' },
    { mot: 'feeriyya / awqiyya / koriyya', definition: 'grimper' },
    { mot: 'abbaahiyiyya', definition: 'ramper' },
    { mot: 'gitimiyya', definition: 's’étirer' },
    { mot: 'hangoogiyya', definition: 'se pencher' },
    { mot: 'malmaalimiyya', definition: 'se tordre' },
    { mot: 'fayyahayiyya', definition: 'soulever' },
    { mot: 'gutqiyya', definition: 'pousser' },
    { mot: 'giitiyya', definition: 'tirer' },
    { mot: 'aryiyya / iba hayiyya', definition: 'donner un coup de pied' },
    { mot: 'bokosti hayiyya', definition: 'donner un coup de poing' },
    { mot: 'salam hayiyya', definition: 'saluer' },
    { mot: 'dimbato', definition: 'chat' },
    { mot: 'bakeela / pakeela', definition: 'lapin' },
    { mot: 'farasa', definition: 'cheval' },
    { mot: 'saga', definition: 'vache' },
    { mot: 'maruwu', definition: 'mouton' },
    { mot: 'danana', definition: 'âne' },
    { mot: 'lubaaka', definition: 'lion' },
    { mot: 'gareemaqada / kabqi', definition: 'tigre' },
    { mot: 'daqama / biqida', definition: 'zèbre' },
    { mot: 'gaalak-xeera', definition: 'girafe' },
    { mot: 'xabaado', definition: 'crocodile' },
    { mot: 'dakanu', definition: 'éléphant' },
    { mot: 'kulunta', definition: 'poisson' },
    { mot: 'waru', definition: 'serpent' },
    { mot: 'ikiqyo / hantuta / hantuuta', definition: 'souris / rat' },
    { mot: 'dalcu', definition: 'hyène' },
    { mot: 'durraheyta', definition: 'coq' },
    { mot: 'gawra / gawta', definition: 'plateau' },
    { mot: 'boyna', definition: 'volcan' },
    { mot: 'bacari', definition: 'plaine' },
    { mot: 'foyya-raasa / caxmali raasa', definition: 'désert' },
    { mot: 'lee oobisa dabba', definition: 'vallée' },
    { mot: 'lee oobissa foqo (golo) / dambiya', definition: 'canyon' },
    { mot: 'baddi caraata', definition: 'côte' },
    { mot: 'gacorta / gadiri', definition: 'île' },
    { mot: 'gaziira / gacooru', definition: 'presqu’île' },
    { mot: 'qammi / abu', definition: 'oncle paternel' },
    { mot: 'anna', definition: 'tante' },
    { mot: 'ballo', definition: 'belle-mère' },
    { mot: 'xaltani', definition: 'parents' },
    { mot: 'kaxxabba', definition: 'grand-père' },
    { mot: 'qammih baxa / abih baxa', definition: 'cousin de l’oncle / de la tante' },
    { mot: 'balli', definition: 'beau-frère' },
    { mot: 'aboyya', definition: 'grand-mère' },
    { mot: 'tobokoyti baxa / tobokoytà baxa', definition: 'neveu de l’oncle / de la tante' },
    { mot: 'aboyya yaa kaxxabba', definition: 'grands-parents' },
    { mot: 'saqalbaxá / maqanxá baxá', definition: 'nièce de l’oncle / de la tante' },
    { mot: 'tooboko', definition: 'frères ou sœurs' },
    { mot: 'cate', definition: 'aider' },
    { mot: 'qelaagise', definition: 'consoler' },
    { mot: 'ceyse', definition: 'gêner' },
    { mot: 'yumbulle', definition: 'apparaître' },
    { mot: 'massoyse', definition: 'arranger' },
    { mot: 'gufe', definition: 'arriver' },
    { mot: 'essere', definition: 'demander' },
    { mot: 'diggoyse', definition: 'confirmer' },
    { mot: 'wariggise', definition: 'étonner' },
    { mot: 'yeeleme', definition: 'avouer' },
    { mot: 'leedise', definition: 'satisfaire' },
    { mot: 'warraye / tatre', definition: 'passer' },
    { mot: 'ekeelefe', definition: 'contredire' },
    { mot: 'kaqlise', definition: 'baigner / laver' },
    { mot: 'miraacise (macaxu)', definition: 'commander (armée)' },
    { mot: 'nummayse', definition: 'approuver' },
    { mot: 'waklise', definition: 'accompagner' },
    { mot: 'warse', definition: 'informer' },
    { mot: 'barse', definition: 'enseigner' },
    { mot: 'taamite', definition: 'travailler' },
    { mot: 'osse', definition: 'ajouter' },
    { mot: 'ossokoote', definition: 'admirer / approuver' },
    { mot: 'oggole', definition: 'admettre / accepter' },
    { mot: 'bilqise', definition: 'orner / embellir' },
    { mot: 'karriqqi hee', definition: 'embellir' },
    { mot: 'arcise', definition: 'consolider' },
    { mot: 'arcisiyya', definition: 'consolidation' },
    { mot: 'seece', definition: 'appeler' },
    { mot: 'ukkuqe', definition: 'porter' },
    { mot: 'korse', definition: 'changer' },
    { mot: 'saytunnoyse', definition: 'nettoyer' },
    { mot: 'alfe', definition: 'fermer' },
    { mot: 'wakali', definition: 'compagnon' },
    { mot: 'maagoyse / kobxise', definition: 'rassembler' },
    { mot: 'amrise', definition: 'commander' },
    { mot: 'xakbime', definition: 'communiquer / relier' },
    { mot: 'xibbaanise', definition: 'comparer' },
    { mot: 'rabe', definition: 'mourir' },
    { mot: 'qellite', definition: 'disparaître' },
    { mot: 'mekle', definition: 'distribuer' },
    { mot: 'kafe', definition: 'sécher' },
    { mot: 'kafse', definition: 'assécher / dessécher' },
    { mot: 'qedaadise', definition: 'économiser' },
    { mot: 'alayse', definition: 'cuisiner' },
    { mot: 'loowe', definition: 'compter' },
    { mot: 'cule', definition: 'entrer' },
    { mot: 'iqiyyire', definition: 'examiner / tester' },
    { mot: 'entrer', definition: 'Culiyya' },
    { mot: 'sortir', definition: 'awqiyya' },
    { mot: 'monter', definition: 'Koriyya' },
    { mot: 'descendre', definition: 'oobiyya' },
    { mot: 'remplir', definition: 'Kibiyya' },
    { mot: 'vider', definition: 'caxiyya / faarigisiyya' },
    { mot: 'pousser', definition: 'Gutqiyya' },
    { mot: 'tirer', definition: 'giitiyya' },
    { mot: 'construire', definition: 'Xisiyya' },
    { mot: 'détruire', definition: 'aggiliyya' },
    { mot: 'allumer', definition: 'Ursiyya' },
    { mot: 'éteindre', definition: 'bargusiyya' },
    { mot: 'plier', definition: 'Xambaqiyya' },
    { mot: 'déplier', definition: 'fakiyya' },
    { mot: 'nouer', definition: 'Axiiyya' },
    { mot: 'dénouer', definition: 'fakiyya' },
    { mot: 'apparaître', definition: 'Ambulliyya' },
    { mot: 'disparaître', definition: 'bayiyya / sutiyya' },
    { mot: 'réussir', definition: 'Geyiyya' },
    { mot: 'échouer', definition: 'wayiyya' },
    { mot: 'aimer', definition: 'Faxiyya / akciniyya' },
    { mot: 'détester', definition: 'anqibiyya / xiqewayiyya' },
    { mot: 'rire', definition: 'asuuliyya' },
    { mot: 'pleurer', definition: 'boogisiyya' },
    { mot: 'ouvrir', definition: 'Fakiyya' },
    { mot: 'fermer', definition: 'alfiyya' },
    { mot: 'chauffer', definition: 'Facsiyya / aniqnisiyya' },
    { mot: 'refroidir', definition: 'xabbacoysiyya' },
    { mot: 'unir', definition: 'Inkittinoysiyya' },
    { mot: 'séparer', definition: 'baxsiyya' },
    { mot: 'protéger', definition: 'Catiyya / gamsiyya' },
    { mot: 'attaquer', definition: 'radiyya / raddiimiyya' },
    { mot: 'Paprika', definition: 'dukkusu' },
    { mot: 'Poivre noir', definition: 'Filfil/dat barbare' },
    { mot: 'Cannelle', definition: 'Karfa' },
    { mot: 'Gingembre', definition: 'Zinzibil' },
    { mot: 'Clou de girofle', definition: 'Koronfor' },
    { mot: 'Cardamome', definition: 'Heel' },
    { mot: 'Graine de coriandre', definition: 'Kudbara' },
    { mot: 'Safran', definition: 'qusfur ou zaqfaraan' },
    { mot: 'Curcuma', definition: 'hurdi' },
    { mot: 'Graine de fenouil', definition: 'Kammuun' },
    { mot: 'Brouette', definition: 'Gaari' },
    { mot: 'Graines', definition: 'mexexu/dariyyu' },
    { mot: 'Râteau', definition: 'caafara. Feeraarile birta' },
    { mot: 'Pelle', definition: 'akafa' },
    { mot: 'Arrosoir', definition: 'afnabo gomma/rabaxa/mafuq afeyna' },
    { mot: 'Sécateur', definition: 'maxbaxa/soreyna' },
    { mot: 'Terreau', definition: 'dariyyi oló' },
    { mot: 'Plantule', definition: 'caxfexxa : caxâ miru' },
    { mot: 'Botte en caoutchouc', definition: 'giitima kebel (elastic)' },
    { mot: 'Gant', definition: 'gabâ sibá' },
    { mot: 'Jardin', definition: 'gawrá/buqrê gasó' },
    { mot: 'Pot de fleur', definition: 'qobor gaamu' },
    { mot: 'Donner', definition: 'Aciiyya' },
    { mot: 'Chanter', definition: 'Gadabiyya' },
    { mot: 'Bavarder', definition: 'Walaliyya' },
    { mot: 'Aller', definition: 'Gexiyya' },
    { mot: 'Partir', definition: 'Fooriyya' },
    { mot: 'Boire', definition: 'Aaqubiyya' },
    { mot: 'Manger', definition: 'Akmiyya' },
    { mot: "S’habiller", definition: 'Sartiyya' },
    { mot: 'Pleurer', definition: 'Boogisiyya' },
    { mot: 'Crier', definition: 'Deerisiyya' },
    { mot: 'Jouer', definition: 'Digriyya' },
    { mot: 'Plonger', definition: 'Kumiyya' },
    { mot: 'Nager', definition: 'Giiriyya' },
    { mot: 'Sauter', definition: 'Kaqtiyya' },
    { mot: 'Regarder', definition: 'Waktiyya' },
    { mot: 'Se coucher', definition: 'Inaaqitiyya' },
    { mot: 'Dormir', definition: 'xiiniyya' },
    { mot: 'Rêver', definition: 'Soonitiyya' },
    { mot: 'Se réveiller', definition: 'Uktiyya' },
    { mot: 'Sortir', definition: 'Awqiyya' },
    { mot: 'Entrer', definition: 'Culiyya' },
    { mot: 'Téléphoner', definition: 'Silkihayiyya/seeciyya' },
    { mot: 'Tomber', definition: 'Radiyya' },
    { mot: 'Courir', definition: 'ardiyya' },
    { mot: 'Marcher', definition: 'Gexiyya' },
    { mot: 'Descendre', definition: 'Oobiyya' },
    { mot: 'Monter', definition: 'Koriyya' },
    { mot: 'Fermer', definition: 'Alfiyya' },
    { mot: 'Ouvrir', definition: 'Fakiyya' },
    { mot: 'Commencer', definition: 'Abdiqiyya' },
    { mot: 'Débuter', definition: 'Ukummusiyya' },
    { mot: 'Se produire', definition: 'Akkiyya' },
    { mot: 'Avoir lieu', definition: 'Akkiyya' },
    { mot: 'Rencontrer', definition: 'Angoorowiyya' },
    { mot: 'Voir', definition: 'Abliyya' },
    { mot: 'Venir', definition: 'Amaatiyya' },
    { mot: 'Arriver', definition: 'Gufiyya' },
    { mot: 'Retourner', definition: 'Aduuriyya' },
    { mot: 'Dire (à quelqu’un)', definition: 'Warsiyya' },
    { mot: 'Dire', definition: 'Axciyya' },
    { mot: 'Expliquer', definition: 'Maqnisiyya/affimisiyya' },
    { mot: 'Demander', definition: 'Esseriyya' },
    { mot: 'Répondre', definition: 'Gacsiyya' },
    { mot: 'Penser', definition: 'Afikkiriyya' },
    { mot: 'Savoir', definition: 'Aaxigiyya' },
    { mot: 'Décider', definition: 'Kuriyya/agdimiyya' },
    { mot: 'Planifier', definition: 'Massoysiyya' },
    { mot: 'Essayer', definition: 'Gabbatiyya' },
    { mot: 'Vouloir', definition: 'Faxiyya' },
    { mot: 'Avoir besoin de', definition: 'Atceegiyya' },
    { mot: 'Trouver', definition: 'Geyiyya' },
    { mot: 'Prendre', definition: 'Beyiyya' },
    { mot: 'Avoir', definition: 'Aaliyya' },
    { mot: 'Montrer', definition: 'Aybuliyya' },
    { mot: 'Suivre', definition: 'Kataatiyya' },
    { mot: 'Continuer', definition: 'Foocah beyiyya/gexiyya' },
    { mot: 'Arrêter', definition: 'Aysaadiyya' },
    { mot: 'Comprendre', definition: 'Geyiyya/affimiyya' },
    { mot: 'Se souvenir', definition: 'Kassitiyya' },
    { mot: 'Terminer', definition: 'Gabakaliyya' },
    { mot: 'Point', definition: 'Ximmo' },
    { mot: 'Virgule', definition: 'Catuffa' },
    { mot: 'Point-virgule', definition: 'Ximmo le catuffa' },
    { mot: 'Deux-points', definition: 'Lamma Ximmo' },
    { mot: 'Point d’interrogation', definition: 'Esser astá' },
    { mot: 'Point d’exclamation', definition: 'Cakkum astá' },
    { mot: 'Trait d’union', definition: 'Giitoh astá' },
    { mot: 'Guillemet', definition: 'Lamma galumu' },
    { mot: 'Bonjour', definition: 'Macisse' },
    { mot: 'Au revoir', definition: 'Salamata/maquuk' },
    { mot: 'S’il vous plaît', definition: 'Kumagan' },
    { mot: 'Merci', definition: 'Gaddagey' },
    { mot: 'Désolé', definition: 'Qafu gey' },
    { mot: 'Nuit', definition: 'Bara' },
    { mot: 'Ami', definition: 'Kataysa' },
    { mot: 'Oui', definition: 'Yey' },
    { mot: 'Non', definition: 'Maleey' },
    { mot: 'Argent', definition: 'Lakqo' },
    { mot: 'Peut-être', definition: 'Takkeh' },
    { mot: 'Aujourd’hui', definition: 'Asaaku' },
    { mot: 'Demain', definition: 'Beera' },
    { mot: 'Après-midi', definition: 'Carra' },
    { mot: 'Maison', definition: 'Qari' },
    { mot: 'Nourriture', definition: 'Maaqo' },
    { mot: 'Eau', definition: 'Lee' },
    { mot: 'Travail', definition: 'Taama' },
    { mot: 'Amour', definition: 'Kacanu' },
    { mot: 'Heure', definition: 'Saaqata' },
    { mot: 'Jamais', definition: 'Way' },
];


const lexique = (() => {
    const mots = new Map();

    for (const entree of lexiqueBrut) {
        const cle = entree.mot.trim().toLowerCase();
        const existant = mots.get(cle);

        if (!existant) {
            mots.set(cle, { ...entree, mot: entree.mot.trim() });
            continue;
        }

        // Conserver les définitions différentes d'un même mot.
        const definitions = [
            ...new Set(
                [existant.definition, entree.definition]
                    .filter(def => def && def.trim())
                    .flatMap(def => def.split(' / ').map(d => d.trim()))
            )
        ];

        existant.definition = definitions.join(' / ');
    }

    return [...mots.values()];
})();
const renderLexique = (query = '') => {
    const resultsContainer = document.getElementById('lexiqueResults');
    const summary = document.getElementById('lexiqueSummary');
    if (!resultsContainer) return;

    const texteRecherche = normaliseTexte(query.trim());
    resultsContainer.innerHTML = '';

    if (!texteRecherche) {
        if (summary) summary.textContent = `${lexique.length} mots disponibles`;
        const message = document.createElement('li');
        message.className = 'verbe-empty';
        message.textContent = 'Entrez une lettre ou un mot en afar ou en français : tous les mots correspondants s’afficheront automatiquement.';
        resultsContainer.appendChild(message);
        return;
    }

const lexiqueFiltres = lexique.filter((entry) => {
    const mot = normaliseTexte(entry.mot);
    return mot.includes(texteRecherche);
});

    if (summary) {
        const totalLabel = lexiqueFiltres.length === 1 ? '1 mot' : `${lexiqueFiltres.length} mots`;
        summary.textContent = totalLabel;
    }

    if (!lexiqueFiltres.length) {
        const item = document.createElement('li');
        item.className = 'verbe-empty';
        item.textContent = 'Aucun mot ne correspond à votre recherche.';
        resultsContainer.appendChild(item);
        return;
    }

    lexiqueFiltres.forEach((entry) => {
        const item = document.createElement('li');
        const definition = entry.definition ? entry.definition : '—';
        item.innerHTML = `<strong>${entry.mot}</strong> = ${definition}`;
        resultsContainer.appendChild(item);
    });
};

const renderVerbes = (query = '') => {
    const resultsContainer = document.getElementById('verbeResults');
    const summary = document.getElementById('verbeSummary');
    if (!resultsContainer) return;

    const texteRecherche = normaliseTexte(query.trim());
    const verbesFiltres = !texteRecherche
        ? verbes
        : verbes.filter((verbe) => {
            const mot = normaliseTexte(verbe.afar);
            const sens = normaliseTexte(verbe.fr);
            return mot.includes(texteRecherche) || sens.includes(texteRecherche);
        });

    resultsContainer.innerHTML = '';

    if (summary) {
        const totalLabel = verbesFiltres.length === 1 ? '1 verbe' : `${verbesFiltres.length} verbes`;
        summary.textContent = totalLabel;
    }

    if (!verbesFiltres.length) {
        const item = document.createElement('li');
        item.className = 'verbe-empty';
        item.textContent = 'Aucun verbe ne correspond à votre recherche.';
        resultsContainer.appendChild(item);
        return;
    }

    verbesFiltres.forEach((verbe) => {
        const item = document.createElement('li');
        item.innerHTML = `<strong>${verbe.afar}</strong> = ${verbe.fr}`;
        resultsContainer.appendChild(item);
    });
};

const searchInput = document.getElementById('verbeSearch');
const clearSearchBtn = document.getElementById('clearSearchBtn');

if (searchInput) {
    renderVerbes();

    searchInput.addEventListener('input', (event) => {
        renderVerbes(event.target.value);
    });

    if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', () => {
            searchInput.value = '';
            renderVerbes('');
            searchInput.focus();
        });
    }
}

const lexiqueSearchInput = document.getElementById('lexiqueSearch');
const clearLexiqueSearchBtn = document.getElementById('clearLexiqueSearchBtn');

if (lexiqueSearchInput) {
    renderLexique();

    lexiqueSearchInput.addEventListener('input', (event) => {
        renderLexique(event.target.value);
    });

    if (clearLexiqueSearchBtn) {
        clearLexiqueSearchBtn.addEventListener('click', () => {
            lexiqueSearchInput.value = '';
            renderLexique('');
            lexiqueSearchInput.focus();
        });
    }
}

window.firebaseConfig = {
    apiKey: "AIzaSyCWfYn3ipDWCn30jx68iz47YLnTmRdeZ_8",
    authDomain: "afar-site.firebaseapp.com",
    projectId: "afar-site",
    storageBucket: "afar-site.firebasestorage.app",
    messagingSenderId: "933404504042",
    appId: "1:933404504042:web:c1667f6ff1a5049952cc93",
    measurementId: "G-5L2ZWDJR8K"
};