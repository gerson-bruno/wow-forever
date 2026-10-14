// Base de dados completa com lore, mecânicas do WoW Forever, especializações detalhadas e índice de dificuldade para TODAS as classes
const foreverData = {
    factions: {
        alliance: [
            {
                name: "Humanos",
                desc: "Resilientes e versáteis de Stormwind. No WoW Forever, ganham acesso inédito à classe Caçador.",
                img: "https://render-us.worldofwarcraft.com/icons/56/achievement_character_human_male.jpg",
                classes: ["Guerreiro", "Paladino", "Caçador (Novo!)", "Ladino", "Sacerdote", "Mago", "Bruxo"]
            },
            {
                name: "Anões",
                desc: "Habitantes firmes de Ironforge. A grande novidade do Forever é a inclusão da classe Xamã para os Anões.",
                img: "https://render-us.worldofwarcraft.com/icons/56/achievement_character_dwarf_male.jpg",
                classes: ["Guerreiro", "Paladino", "Caçador", "Ladino", "Sacerdote", "Xamã (Novo!)"]
            },
            {
                name: "Elfos Noturnos",
                desc: "Sentinelas ancestrais de Kalimdor. Suas opções de classes mantêm o formato clássico tradicional.",
                img: "https://render-us.worldofwarcraft.com/icons/56/achievement_character_nightelf_male.jpg",
                classes: ["Guerreiro", "Caçador", "Ladino", "Sacerdote", "Druida"]
            },
            {
                name: "Gnomos",
                desc: "Mestres da engenharia e ciência. No Forever, os Gnomos agora podem canalizar a fé como Sacerdotes.",
                img: "https://render-us.worldofwarcraft.com/icons/56/achievement_character_gnome_male.jpg",
                classes: ["Guerreiro", "Ladino", "Mago", "Bruxo", "Sacerdote (Novo!)"]
            }
        ],
        horde: [
            {
                name: "Orcs",
                desc: "Guerreiros implacáveis de Orgrimmar. Agora possuem acesso aos estudos arcanos com a classe Mago.",
                img: "https://render-us.worldofwarcraft.com/icons/56/achievement_character_orc_male.jpg",
                classes: ["Guerreiro", "Caçador", "Ladino", "Xamã", "Bruxo", "Mago (Novo!)"]
            },
            {
                name: "Tauren",
                desc: "Filhos gentis e poderosos da Terra-Mãe. Suas combinações permanecem fiéis às raízes clássicas.",
                img: "https://render-us.worldofwarcraft.com/icons/56/achievement_character_tauren_male.jpg",
                classes: ["Guerreiro", "Caçador", "Xamã", "Druida"]
            },
            {
                name: "Trolls",
                desc: "Astutos membros da tribo Darkspear. No Forever, expandem suas artes sombrias tornando-se Bruxos.",
                img: "https://render-us.worldofwarcraft.com/icons/56/achievement_character_troll_male.jpg",
                classes: ["Guerreiro", "Caçador", "Ladino", "Sacerdote", "Xamã", "Mago", "Bruxo (Novo!)"]
            },
            {
                name: "Renascidos (Undead)",
                desc: "Mortos-vivos de Lordaeron. Recebem a bênção corrompida da Luz, podendo atuar como Paladinos.",
                img: "https://render-us.worldofwarcraft.com/icons/56/achievement_character_undead_male.jpg",
                classes: ["Guerreiro", "Ladino", "Sacerdote", "Mago", "Bruxo", "Paladino (Novo!)"]
            }
        ],
        skyborne: [
            {
                name: "Skyborne (Aliança)",
                desc: "A nova raça neutra que escolhe alinhar-se à Aliança, tendo acesso a Magos em seu currículo.",
                img: "https://render-us.worldofwarcraft.com/icons/56/ability_hunter_displacement.jpg",
                classes: ["Guerreiro", "Caçador", "Ladino", "Druida", "Mago (Exclusivo Aliança)"]
            },
            {
                name: "Skyborne (Horda)",
                desc: "A mesma linhagem Skyborne, mas alinhada à Horda, substituindo o acesso a magias arcanas por Xamanismo.",
                img: "https://render-us.worldofwarcraft.com/icons/56/spell_nature_spiritwalkersgrace.jpg",
                classes: ["Guerreiro", "Caçador", "Ladino", "Druida", "Xamã (Exclusivo Horda)"]
            }
        ]
    },
    classes: [
        {
            name: "Druida (Druid)",
            role: "Tanque / Curandeiro / DPS",
            difficulty: 4,
            desc: "Os druidas são a classe mais flexível de World of Warcraft: Forever, capazes de preencher qualquer papel de combate (Tanque, DPS corpo a corpo, DPS à distância ou Curandeiro) utilizando suas formas metamórficas sagradas e a força da natureza.",
            img: "https://render-us.worldofwarcraft.com/icons/56/ability_druid_flightform.jpg",
            specs: [
                { name: "Equilíbrio (Balance)", desc: "Especialista em dano mágico à distância utilizando o ciclo de Eclipse, Fogo Lunar, Raio Solar e magias estelares na Forma de Lunafúria." },
                { name: "Combate Feral (Feral Combat)", desc: "Divide-se entre Guardião (Urso para absorver dano e tancar chefes) e Feral DPS (Gato furtivo focado em sangramentos e combos rápidos)." },
                { name: "Restauração (Restoration)", desc: "Mestre em curas periódicas (HoTs como Rejuvenescer e Crescimento Silvestre) e utilidade com a Forma de Árvore da Vida." }
            ]
        },
        {
            name: "Paladino (Paladin)",
            role: "Tanque / Suporte / Curandeiro",
            difficulty: 2,
            desc: "Campeões indestrutíveis fortalecidos pela Luz Sagrada. Combinam armaduras de placas impenetráveis com a capacidade de proteger companheiros, julgar inimigos e aplicar auras estratégicas em grupo.",
            img: "https://render-us.worldofwarcraft.com/icons/56/class_paladin.jpg",
            specs: [
                { name: "Sagrado (Holy)", desc: "Curandeiro focado em curas diretas de altíssimo impacto (Luz Sagrada e Choque Sagrado) e utilidades defensivas fundamentais como Imposição de Mãos." },
                { name: "Proteção (Protection)", desc: "Tanque altamente resiliente com escudo e espada, especialista em controle de ameaça em área através de Consagração e retaliação sagrada." },
                { name: "Retribuição (Retribution)", desc: "Especialização focada em dano corpo a corpo divino, utilizando julgamentos, selos e o Veredito do Templário para punir oponentes." }
            ]
        },
        {
            name: "Guerreiro (Warrior)",
            role: "Tanque Principal / DPS",
            difficulty: 3,
            desc: "Mestres absolutos das armas e posturas de combate. O Guerreiro é a espinha dorsal de qualquer vanguarda, acumulando raiva através de golpes para controlar o campo de batalha ou absorver danos brutais.",
            img: "https://render-us.worldofwarcraft.com/icons/56/class_warrior.jpg",
            specs: [
                { name: "Armas (Arms)", desc: "Focado no uso de imensas armas de duas mãos, especialista em Golpes Mortais, controle de área e domínio tático do posicionamento." },
                { name: "Fúria (Fury)", desc: "Empunha duas armas pesadas simultaneamente (Titan's Grip), gerando fúria frenética para desferir cortes implacáveis em alta velocidade." },
                { name: "Proteção (Protection)", desc: "O protetor de aço intransigente. Focado em maximizar armadura, resistir a golpes críticos de chefes de raide e manter o aggro firme." }
            ]
        },
        {
            name: "Mago (Mage)",
            role: "DPS Caster / Utilidade",
            difficulty: 3,
            desc: "Sábios arcanos capazes de dobrar os elementos para incinerar, congelar ou desintegrar inimigos à distância, além de fornecer portais de teletransporte e comida mágica para o grupo.",
            img: "https://render-us.worldofwarcraft.com/icons/56/class_mage.jpg",
            specs: [
                { name: "Arcano (Arcane)", desc: "Manipula o tempo e pura energia arcana para momentos de explosão massiva de dano (Burst), exigindo controle rigoroso de mana." },
                { name: "Fogo (Fire)", desc: "Especialista em magias rápidas e críticas contínuas através de labaredas e combustões instantâneas de alta letalidade." },
                { name: "Gelo (Frost)", desc: "Mestre indiscutível do controle de multidões, congelando inimigos no lugar, invocando um Elemental de Água e dominando a segurança tática." }
            ]
        },
        {
            name: "Xamã (Shaman)",
            role: "Curandeiro / Híbrido DPS",
            difficulty: 4,
            desc: "Guiados pelos espíritos ancestrais e pelos quatro elementos, posicionam totens estratégicos no solo para fortalecer aliados, enfraquecer oponentes e desferir fúrias elementais devastadoras.",
            img: "https://render-us.worldofwarcraft.com/icons/56/class_shaman.jpg",
            specs: [
                { name: "Elemental", desc: "Conjurador de feitiços de raio, choque e explosões de lava à distância, oferecendo excelente dano explosivo." },
                { name: "Aperfeiçoamento (Enhancement)", desc: "Lutador híbrido corpo a corpo famoso pelo icônico efeito de Fúria dos Ventos (Windfury), desferindo ataques rápidos elementais." },
                { name: "Restauração (Restoration)", desc: "Um dos curandeiros mais cobiçados graças à Cura em Cadeia (Chain Heal) e totens utilitários de suporte incomparáveis." }
            ]
        },
        {
            name: "Sacerdote (Priest)",
            role: "Curandeiro / DPS Sombra",
            difficulty: 3,
            desc: "Canalizadores espirituais que equilibram a Luz Sagrada para curar feridas e a malevolência da Sombra para corromper mentes e drenar a essência de seus alvos.",
            img: "https://render-us.worldofwarcraft.com/icons/56/class_priest.jpg",
            specs: [
                { name: "Sagrado (Holy)", desc: "O arquétipo clássico de curandeiro de raide, dispondo de curas direcionadas eficientes e poderosas curas em área." },
                { name: "Disciplina (Discipline)", desc: "Especialista em proteção preventiva através de escudos divinos de absorção de dano (Power Word: Shield) antes dos impactos." },
                { name: "Sombra (Shadow)", desc: "Assume a temida Forma de Sombra para infligir danos periódicos intensos baseados em desespero e corrupção mental." }
            ]
        },
        {
            name: "Ladino (Rogue)",
            role: "DPS Furtivo",
            difficulty: 4,
            desc: "Assassinos implacáveis que operam nas sombras da furtividade. Utilizam barras de energia, pontos de combo e venenos letais para desferir ataques surpresa cirúrgicos.",
            img: "https://render-us.worldofwarcraft.com/icons/56/class_rogue.jpg",
            specs: [
                { name: "Assassinado (Assassination)", desc: "Especializado em adagas rápidas, aplicação de venenos químicos potentes e sangramentos prolongados." },
                { name: "Fora da Lei (Outlaw)", desc: "Combate ágil inspirado em espadachins e pistoleiros, com foco em versatilidade física de curta distância." },
                { name: "Subterfúgio (Subtlety)", desc: "O mestre absoluto das sombras puras, focado em ataques furtivos críticos de altíssimo dano e controle tático." }
            ]
        },
        {
            name: "Caçador (Hunter)",
            role: "DPS à Distância",
            difficulty: 2,
            desc: "Atiradores mestres no rastreamento e sobrevivência. No WoW Forever, contam com pets atualizados que escalam diretamente com os atributos do dono para dominar o campo de caça.",
            img: "https://render-us.worldofwarcraft.com/icons/56/class_hunter.jpg",
            specs: [
                { name: "Senhor das Feras (Beast Mastery)", desc: "Focado no vínculo inabalável com sua fera de estimação, maximizando o dano gerado pelo pet em combate." },
                { name: "Precisão (Marksmanship)", desc: "O atirador de elite clássico com arcos ou armas de fogo, especialista em tiros de longo alcance devastadores." },
                { name: "Sobrevivência (Survival)", desc: "Estilo corpo a corpo tático utilizando armadilhas ativas em combate e ataques frontais com lanças e explosivos." }
            ]
        },
        {
            name: "Bruxo (Warlock)",
            role: "DPS de Maldições",
            difficulty: 3,
            desc: "Estudiosos das artes proibidas que sacrificam a própria vitalidade para invocar demônios do Vazio e corromper inimigos com maldições de fogo vil e pestes.",
            img: "https://render-us.worldofwarcraft.com/icons/56/class_warlock.jpg",
            specs: [
                { name: "Suplício (Affliction)", desc: "Mestre em magias de dano ao longo do tempo (DoTs) e drenagem contínua de vida e mana dos adversários." },
                { name: "Demonologia (Demonology)", desc: "Inoca e comanda demônios poderosos (como Guardiões Vil e Succubus) para esmagar os oponentes." },
                { name: "Destruição (Destruction)", desc: "Especialista em pura destruição com magias de fogo vil massivas, como Seta do Caos e Chuva de Fogo." }
            ]
        }
    ]
};

document.addEventListener("DOMContentLoaded", () => {
    initAudio();
    initFactionTabs();
    initClassGrid();
    initModalEvents();
});

function initAudio() {
    const audio = document.getElementById("bgMusic");
    const playBtn = document.getElementById("playBtn");
    const volumeSlider = document.getElementById("volumeSlider");
    const audioStatus = document.getElementById("audioStatus");

    audio.volume = volumeSlider.value;

    playBtn.addEventListener("click", () => {
        if (audio.paused) {
            audio.play().then(() => {
                playBtn.textContent = "⏸ Pausar";
                audioStatus.textContent = "Tocando...";
            });
        } else {
            audio.pause();
            playBtn.textContent = "▶ Tocar";
            audioStatus.textContent = "Pausado";
        }
    });

    volumeSlider.addEventListener("input", (e) => {
        audio.volume = e.target.value;
    });
}

function initFactionTabs() {
    const tabs = document.querySelectorAll(".faction-tab");
    
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            renderRaces(tab.dataset.faction);
        });
    });

    renderRaces("alliance");
}

function renderRaces(factionKey) {
    const selectorContainer = document.getElementById("raceSelector");
    selectorContainer.innerHTML = "";
    
    const races = foreverData.factions[factionKey];

    races.forEach((race, index) => {
        const btn = document.createElement("button");
        btn.className = `race-btn ${index === 0 ? 'active' : ''}`;
        btn.textContent = race.name;
        btn.addEventListener("click", () => {
            document.querySelectorAll(".race-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            renderRaceDetails(race);
        });
        selectorContainer.appendChild(btn);
    });

    renderRaceDetails(races[0]);
}

function renderRaceDetails(race) {
    document.getElementById("selectedRaceTitle").textContent = race.name;
    document.getElementById("selectedRaceDesc").textContent = race.desc;
    
    const imgEl = document.getElementById("selectedRaceImg");
    if (race.img) {
        imgEl.src = race.img;
        imgEl.style.display = "block";
    } else {
        imgEl.style.display = "none";
    }

    const classesList = document.getElementById("raceClassesList");
    classesList.innerHTML = "";
    
    race.classes.forEach(className => {
        const tag = document.createElement("span");
        tag.className = className.includes("Novo!") || className.includes("Exclusivo") ? "class-tag new-forever" : "class-tag";
        tag.textContent = className;
        classesList.appendChild(tag);
    });
}

function initClassGrid() {
    const gridContainer = document.getElementById("classGrid");
    gridContainer.innerHTML = "";

    foreverData.classes.forEach(cls => {
        const card = document.createElement("div");
        card.className = "class-card";

        card.innerHTML = `
            <div class="class-card-header">
                <div class="class-icon-wrapper">
                    <img src="${cls.img}" alt="${cls.name}">
                </div>
            </div>
            <div class="class-card-body">
                <h3>${cls.name}</h3>
                <span class="class-role">${cls.role}</span>
                <p>${cls.desc}</p>
            </div>
        `;

        card.addEventListener("click", () => {
            openClassModal(cls);
        });

        gridContainer.appendChild(card);
    });
}

function openClassModal(cls) {
    const modal = document.getElementById("classModal");
    
    document.getElementById("modalClassName").textContent = cls.name;
    document.getElementById("modalClassRole").textContent = cls.role;
    document.getElementById("modalClassDesc").textContent = cls.desc;
    document.getElementById("modalClassImg").src = cls.img;

    const difficultyContainer = document.getElementById("modalDifficulty");
    if (difficultyContainer) {
        const starsFilled = "★".repeat(cls.difficulty);
        const starsEmpty = "☆".repeat(5 - cls.difficulty);
        difficultyContainer.innerHTML = `<span class="difficulty-stars">${starsFilled}${starsEmpty}</span> (${cls.difficulty}/5)`;
    }

    const specsList = document.getElementById("modalSpecsList");
    specsList.innerHTML = "";

    if (cls.specs && cls.specs.length > 0) {
        cls.specs.forEach(spec => {
            const specDiv = document.createElement("div");
            specDiv.className = "spec-item";
            specDiv.innerHTML = `
                <h4>${spec.name}</h4>
                <p>${spec.desc}</p>
            `;
            specsList.appendChild(specDiv);
        });
    }

    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeClassModal() {
    const modal = document.getElementById("classModal");
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

function initModalEvents() {
    const modal = document.getElementById("classModal");
    const closeBtn = document.getElementById("closeModalBtn");

    closeBtn.addEventListener("click", closeClassModal);

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeClassModal();
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.style.display === "flex") {
            closeClassModal();
        }
    });
}