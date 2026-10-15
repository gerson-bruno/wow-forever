/**
 * WoW Forever — Script principal
 *
 * Funcionalidades:
 * 1. Dados de classes e raças (CLASSES, RACES)
 * 2. Player de áudio (trilha sonora)
 * 3. Abas de facção + seletor de raças
 * 4. Alternância masculino/feminino nos retratos
 * 5. Grade de classes com cards
 * 6. Modal de classe com especializações
 * 7. Contagem regressiva para o lançamento
 * 8. Navegação ativa por scroll
 */

/* =========================================================
   1. Constantes e dados
   ========================================================= */

/** URL base dos ícones de classe/raça do Wowhead */
const ICON = "https://wow.zamimg.com/images/wow/icons/large/";

/** Cores oficiais de classe do WoW, dados e especializações */
const CLASSES = {
  druida: {
    name: "Druida",
    color: "#FF7C0A",
    difficulty: 4,
    role: "Tanque / Curandeiro / DPS",
    img: "classicon_druid.jpg",
    desc: "A classe mais versátil do jogo: assume qualquer papel de combate usando formas animais e a força da natureza.",
    specs: [
      ["Equilíbrio", "Dano mágico à distância com Fogo Lunar, Fogo Estelar e a Forma de Lunático."],
      ["Combate Feral", "Divide-se entre Urso, que tanqueia chefes, e Gato, que combina furtividade, sangramentos e pontos de combo."],
      ["Restauração", "Curandeiro de cura ao longo do tempo (Rejuvenescer, Recrescimento) com muita utilidade para o grupo."]
    ]
  },
  paladino: {
    name: "Paladino",
    color: "#F48CBA",
    difficulty: 2,
    role: "Tanque / Suporte / Curandeiro",
    img: "classicon_paladin.jpg",
    desc: "Campeões de armadura de placas fortalecidos pela Luz Sagrada. Protegem aliados, julgam inimigos e fortalecem o grupo com auras e bênçãos.",
    specs: [
      ["Sagrado", "Curandeiro de curas diretas e fortes (Luz Sagrada, Choque Sagrado), com Imposição de Mãos como recurso de emergência."],
      ["Proteção", "Tanque resistente com escudo, especialista em gerar ameaça em área com Consagração."],
      ["Retribuição", "Dano corpo a corpo sagrado, baseado em selos, julgamentos e armas de duas mãos."]
    ]
  },
  guerreiro: {
    name: "Guerreiro",
    color: "#C69B6D",
    difficulty: 3,
    role: "Tanque / DPS",
    img: "classicon_warrior.jpg",
    desc: "Mestres das armas e das posturas de combate. Acumulam fúria em combate para controlar o campo de batalha ou absorver dano pesado.",
    specs: [
      ["Armas", "Armas de duas mãos, Golpe Mortal e bom controle de posicionamento, muito usado em PvP."],
      ["Fúria", "Empunha duas armas e gera dano alto e constante, com fúria acelerando os ataques."],
      ["Proteção", "Tanque principal de grupos e raides: maximiza armadura, bloqueio e ameaça."]
    ]
  },
  mago: {
    name: "Mago",
    color: "#3FC7EB",
    difficulty: 3,
    role: "DPS Conjurador / Utilidade",
    img: "classicon_mage.jpg",
    desc: "Sábios arcanos que incineram, congelam e desintegram à distância, além de oferecer portais, comida e água mágicas ao grupo.",
    specs: [
      ["Arcano", "Explosões de dano com energia arcana, exigindo controle de mana."],
      ["Fogo", "Magias rápidas e críticos em sequência, com muito dano de pico."],
      ["Gelo", "Controle de multidões, lentidão e congelamento, com o Elemental de Água ao lado."]
    ]
  },
  xama: {
    name: "Xamã",
    color: "#0070DD",
    difficulty: 4,
    role: "Curandeiro / Híbrido",
    img: "classicon_shaman.jpg",
    desc: "Guiados pelos espíritos e pelos elementos, posicionam totens para fortalecer aliados, enfraquecer inimigos e liberar fúria elemental.",
    specs: [
      ["Elemental", "Conjurador de Raio, Choque e Lava, com bom dano à distância."],
      ["Aperfeiçoamento", "Combate corpo a corpo com armas imbuídas e o efeito de Fúria dos Ventos."],
      ["Restauração", "Curandeiro valorizado pela Cura em Cadeia e por totens de suporte."]
    ]
  },
  sacerdote: {
    name: "Sacerdote",
    color: "#FFFFFF",
    difficulty: 3,
    role: "Curandeiro / DPS Sombra",
    img: "classicon_priest.jpg",
    desc: "Canalizam a Luz para curar feridas ou a Sombra para corromper mentes e drenar a essência dos alvos.",
    specs: [
      ["Disciplina", "Proteção preventiva com escudos de absorção (Palavra de Poder: Escudo) e controle de mana."],
      ["Sagrado", "Curandeiro clássico de raide, com curas direcionadas e em área."],
      ["Sombra", "Dano ao longo do tempo na Forma de Sombra, com drenagem de mana e vida."]
    ]
  },
  ladino: {
    name: "Ladino",
    color: "#FFF468",
    difficulty: 4,
    role: "DPS Furtivo",
    img: "classicon_rogue.jpg",
    desc: "Assassinos que agem nas sombras. Usam energia, pontos de combo e venenos para golpes surpresa precisos.",
    specs: [
      ["Assassinato", "Adagas, venenos potentes e sangramentos prolongados."],
      ["Combate", "Dano constante em combate aberto, com Surto de Adrenalina e armas rápidas."],
      ["Subterfúgio", "Mestre da furtividade: ataques pelas costas de alto dano e muito controle tático."]
    ]
  },
  cacador: {
    name: "Caçador",
    color: "#AAD372",
    difficulty: 2,
    role: "DPS à Distância",
    img: "classicon_hunter.jpg",
    desc: "Atiradores mestres em rastreamento e sobrevivência, sempre acompanhados por um pet que luta ao lado deles.",
    specs: [
      ["Domínio das Feras", "Foco no vínculo com o pet, maximizando o dano dele em combate."],
      ["Precisão", "Tiros certeiros de longo alcance com arcos, bestas ou armas de fogo."],
      ["Sobrevivência", "Armadilhas, utilidade e ataques de curto alcance para se manter vivo."]
    ]
  },
  bruxo: {
    name: "Bruxo",
    color: "#8788EE",
    difficulty: 3,
    role: "DPS de Maldições",
    img: "classicon_warlock.jpg",
    desc: "Estudiosos das artes proibidas que sacrificam vitalidade para invocar demônios e corromper inimigos com maldições e fogo vil.",
    specs: [
      ["Suplício", "Dano ao longo do tempo (DoTs) e drenagem contínua de vida e mana."],
      ["Demonologia", "Fortalece demônios invocados, como o Guardião Vil e a Súcubo."],
      ["Destruição", "Dano direto de fogo vil, com Seta Sombria e Chuva de Fogo."]
    ]
  }
};

/**
 * Combinações de raça-classe.
 * Baseadas nos guias de Mobalytics e Warcraft Tavern (set/2026).
 * "novo" = combinação que não existia no Classic original.
 */
const RACES = {
  alliance: [
    {
      name: "Humanos",
      img: "race_human_male.jpg",
      desc: "Resilientes e versáteis, os humanos de Stormwind ganham acesso inédito à classe Caçador.",
      classes: ["guerreiro", "paladino", "cacador", "ladino", "sacerdote", "mago", "bruxo"],
      novo: ["cacador"]
    },
    {
      name: "Anões",
      img: "race_dwarf_male.jpg",
      desc: "Habitantes firmes de Ironforge. A grande novidade é a classe Xamã para os anões.",
      classes: ["guerreiro", "paladino", "cacador", "ladino", "sacerdote", "xama"],
      novo: ["xama"]
    },
    {
      name: "Elfos Noturnos",
      img: "race_nightelf_male.jpg",
      desc: "Sentinelas ancestrais de Kalimdor. As opções de classe continuam as mesmas do Classic.",
      classes: ["guerreiro", "cacador", "ladino", "sacerdote", "druida"],
      novo: []
    },
    {
      name: "Gnomos",
      img: "race_gnome_male.jpg",
      desc: "Mestres da engenharia e da ciência. No Forever, os gnomos também podem ser Sacerdotes.",
      classes: ["guerreiro", "ladino", "mago", "bruxo", "sacerdote"],
      novo: ["sacerdote"]
    }
  ],
  horde: [
    {
      name: "Orcs",
      img: "race_orc_male.jpg",
      desc: "Guerreiros implacáveis de Orgrimmar. Agora também estudam as artes arcanas como Magos.",
      classes: ["guerreiro", "cacador", "ladino", "xama", "bruxo", "mago"],
      novo: ["mago"]
    },
    {
      name: "Taurens",
      img: "race_tauren_male.jpg",
      desc: "Filhos gentis e poderosos da Mãe Terra. As combinações seguem as do Classic.",
      classes: ["guerreiro", "cacador", "xama", "druida"],
      novo: []
    },
    {
      name: "Trolls",
      img: "race_troll_male.jpg",
      desc: "Astutos membros da tribo Lançanegra. No Forever, passam a poder ser Bruxos.",
      classes: ["guerreiro", "cacador", "ladino", "sacerdote", "xama", "mago", "bruxo"],
      novo: ["bruxo"]
    },
    {
      name: "Mortos-Vivos",
      img: ["race_scourge_male.jpg", "race_undead_male.jpg"],
      desc: "Os Renegados de Lordaeron recebem uma versão corrompida da Luz e podem ser Paladinos.",
      classes: ["guerreiro", "ladino", "sacerdote", "mago", "bruxo", "paladino"],
      novo: ["paladino"]
    }
  ],
  skyborne: [
    {
      name: "Skyborne da Aliança",
      img: ["race_skyborne_male.jpg", "race_skyborne_female.jpg"],
      desc: "Elfos descendentes de exilados altaelfos que fizeram um pacto com os elementais do Skywall. Ao se unirem à Aliança, ganham acesso a Mago.",
      classes: ["guerreiro", "cacador", "ladino", "druida", "mago"],
      novo: ["guerreiro", "cacador", "ladino", "druida", "mago"],
      exclusive: "mago"
    },
    {
      name: "Skyborne da Horda",
      img: ["race_skyborne_male.jpg", "race_skyborne_female.jpg"],
      desc: "A mesma linhagem, agora ao lado da Horda. Em vez de Mago, ela tem acesso a Xamã.",
      classes: ["guerreiro", "cacador", "ladino", "druida", "xama"],
      novo: ["guerreiro", "cacador", "ladino", "druida", "xama"],
      exclusive: "xama"
    }
  ]
};

/* =========================================================
   2. Utilitários
   ========================================================= */

/** Atalho para document.getElementById */
const $ = (id) => document.getElementById(id);

/** Estado global */
let currentFaction = "alliance";
let currentRaceIndex = 0;
let lastFocus = null;
let currentGender = loadGender();

/**
 * Troca _male/_female no nome do arquivo de imagem.
 * Aceita uma string ou um array de strings.
 */
function genderize(file, gender) {
  const swap = (f) => f.replace(/_(male|female)\.jpg$/, `_${gender}.jpg`);
  return Array.isArray(file) ? file.map(swap) : swap(file);
}

/** Carrega a preferência de gênero do localStorage */
function loadGender() {
  try {
    return localStorage.getItem("wowGender") === "female" ? "female" : "male";
  } catch {
    return "male";
  }
}

/* =========================================================
   3. Inicialização
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initAudio();
  initFactionTabs();
  initGender();
  initClassGrid();
  initModal();
  initCountdown();
  initNavHighlight();
  initMagicParticles();
  initScrollReveal();
});

/* =========================================================
   4. Ícones com fallback
   ========================================================= */

/**
 * Preenche um elemento com uma imagem de ícone.
 * Se a imagem falhar, exibe a primeira letra do label como fallback.
 * Aceita nomes de arquivo (usa Wowhead CDN) ou URLs completas.
 */
function fillIcon(el, file, label) {
  el.innerHTML = "";

  const fallback = () => {
    el.textContent = label.charAt(0);
  };

  const files = Array.isArray(file) ? file : [file];
  const candidates = files.map((f) => (f.includes("/") ? f : ICON + f));

  const img = new Image();
  img.alt = "";
  let i = 0;

  delete el.dataset.kind;

  img.onload = () => {
    el.dataset.kind = candidates[i].startsWith(ICON) ? "icon" : "art";
  };

  img.onerror = () => {
    i++;
    if (i < candidates.length) {
      img.src = candidates[i];
    } else {
      img.remove();
      fallback();
    }
  };

  img.src = candidates[0];
  el.appendChild(img);
}

/* =========================================================
   5. Player de áudio
   ========================================================= */

function initAudio() {
  const audio = $("bgMusic");
  const btn = $("playBtn");
  const vol = $("volumeSlider");
  const status = $("audioStatus");

  audio.volume = vol.value;
  const audioBar = document.querySelector(".audio-bar");

  const setState = (playing, text) => {
    btn.textContent = playing ? "⏸ Pausar" : "▶ Tocar";
    btn.setAttribute("aria-pressed", String(playing));
    status.textContent = text;
    if (audioBar) {
      audioBar.classList.toggle("is-playing", playing);
    }
  };

  btn.addEventListener("click", async () => {
    if (audio.paused) {
      try {
        await audio.play();
        setState(true, "Tocando");
      } catch {
        setState(false, "Não foi possível tocar o áudio");
      }
    } else {
      audio.pause();
      setState(false, "Pausado");
    }
  });

  vol.addEventListener("input", (e) => {
    audio.volume = e.target.value;
  });
}

/* =========================================================
   6. Abas de facção e raças
   ========================================================= */

function initFactionTabs() {
  const tabs = document.querySelectorAll(".faction-tab");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });

      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
      currentFaction = tab.dataset.faction;
      currentRaceIndex = 0;
      $("skyNotice").hidden = currentFaction !== "skyborne";
      renderRaces();
    });

    /* Navegação por seta entre abas (acessibilidade) */
    tab.addEventListener("keydown", (e) => {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;

      const list = [...tabs];
      const offset = e.key === "ArrowRight" ? 1 : list.length - 1;
      const next = list[(list.indexOf(tab) + offset) % list.length];
      next.focus();
      next.click();
    });
  });

  $("onlyNew").addEventListener("change", () => renderRaceDetails());
  renderRaces();
}

function renderRaces() {
  const box = $("raceSelector");
  box.innerHTML = "";

  RACES[currentFaction].forEach((race, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "race-btn" + (i === currentRaceIndex ? " active" : "");
    btn.textContent = race.name;
    btn.setAttribute("aria-pressed", String(i === currentRaceIndex));

    btn.addEventListener("click", () => {
      currentRaceIndex = i;
      box.querySelectorAll(".race-btn").forEach((b, j) => {
        b.classList.toggle("active", j === i);
        b.setAttribute("aria-pressed", String(j === i));
      });
      renderRaceDetails();
    });

    box.appendChild(btn);
  });

  renderRaceDetails();
}

function renderRaceDetails() {
  const card = $("raceDetailsCard");
  if (card) {
    card.classList.remove("race-card-updating");
    void card.offsetWidth;
    card.classList.add("race-card-updating");
  }

  const race = RACES[currentFaction][currentRaceIndex];
  $("selectedRaceTitle").textContent = race.name;
  $("selectedRaceDesc").textContent = race.desc;
  fillIcon($("racePortrait"), genderize(race.img, currentGender), race.name);

  const list = $("raceClassesList");
  list.innerHTML = "";
  const onlyNew = $("onlyNew").checked;
  const ids = race.classes.filter((id) => !onlyNew || race.novo.includes(id));

  if (!ids.length) {
    const li = document.createElement("li");
    li.className = "empty-msg";
    li.textContent = "Esta raça não tem combinações novas. Desmarque o filtro para ver todas as classes.";
    list.appendChild(li);
    return;
  }

  ids.forEach((id) => {
    const cls = CLASSES[id];
    const isNew = race.novo.includes(id);
    const li = document.createElement("li");
    const tag = document.createElement("button");

    tag.type = "button";
    tag.className = "class-tag" + (isNew ? " is-new" : "");
    tag.style.setProperty("--c", cls.color);
    tag.textContent = cls.name;

    if (isNew) {
      const flag = document.createElement("span");
      flag.className = "flag";
      flag.textContent = race.exclusive === id ? "EXCLUSIVO" : "NOVO";
      tag.appendChild(flag);
    }

    tag.addEventListener("click", () => openClassModal(id));
    li.appendChild(tag);
    list.appendChild(li);
  });
}

/* =========================================================
   7. Alternância de gênero (masculino / feminino)
   ========================================================= */

function initGender() {
  const buttons = document.querySelectorAll(".gender-btn");

  const sync = () =>
    buttons.forEach((b) => {
      const on = b.dataset.gender === currentGender;
      b.classList.toggle("active", on);
      b.setAttribute("aria-pressed", String(on));
    });

  buttons.forEach((b) =>
    b.addEventListener("click", () => {
      currentGender = b.dataset.gender;
      try {
        localStorage.setItem("wowGender", currentGender);
      } catch {
        /* localStorage indisponível */
      }
      sync();
      renderRaceDetails();
    })
  );

  sync();
}

/* =========================================================
   8. Grade de classes
   ========================================================= */

function initClassGrid() {
  const grid = $("classGrid");

  Object.entries(CLASSES).forEach(([id, cls]) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "class-card";
    card.style.setProperty("--c", cls.color);

    card.innerHTML = `
      <div class="card-head">
        <div class="icon"></div>
        <div><h3></h3><span class="class-role"></span></div>
      </div>
      <p></p>`;

    card.querySelector("h3").textContent = cls.name;
    card.querySelector(".class-role").textContent = cls.role;
    card.querySelector("p").textContent = cls.desc;
    fillIcon(card.querySelector(".icon"), cls.img, cls.name);

    card.addEventListener("click", () => openClassModal(id));
    grid.appendChild(card);
  });
}

/* =========================================================
   9. Modal de classe
   ========================================================= */

function openClassModal(id) {
  const cls = CLASSES[id];
  const modal = $("classModal");
  lastFocus = document.activeElement;

  modal.querySelector(".modal").style.setProperty("--c", cls.color);
  $("modalClassName").textContent = cls.name;
  $("modalClassRole").textContent = cls.role;
  $("modalClassDesc").textContent = cls.desc;

  /* Arte grande em img/classes/<id>.jpg|png|webp; se não existir, usa o ícone */
  const art = ["jpg", "png", "webp"].map((ext) => `img/classes/${id}.${ext}`);
  fillIcon($("modalPortrait"), [...art, cls.img], cls.name);

  const diff = $("modalDifficulty");
  diff.innerHTML = `<span class="stars" aria-hidden="true">${"★".repeat(cls.difficulty)}${"☆".repeat(5 - cls.difficulty)}</span>`;
  diff.setAttribute("aria-label", `${cls.difficulty} de 5`);

  const specs = $("modalSpecsList");
  specs.innerHTML = "";

  cls.specs.forEach(([name, desc]) => {
    const div = document.createElement("div");
    div.className = "spec-item";
    div.innerHTML = "<h4></h4><p></p>";
    div.querySelector("h4").textContent = name;
    div.querySelector("p").textContent = desc;
    specs.appendChild(div);
  });

  modal.hidden = false;
  document.body.style.overflow = "hidden";
  $("closeModalBtn").focus();
}

function closeClassModal() {
  $("classModal").hidden = true;
  document.body.style.overflow = "";
  if (lastFocus) lastFocus.focus();
}

function initModal() {
  const modal = $("classModal");

  $("closeModalBtn").addEventListener("click", closeClassModal);

  /* Fecha ao clicar no overlay */
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeClassModal();
  });

  /* Trap de foco e Escape */
  document.addEventListener("keydown", (e) => {
    if (modal.hidden) return;

    if (e.key === "Escape") {
      closeClassModal();
      return;
    }

    if (e.key === "Tab") {
      const items = modal.querySelectorAll(
        "button, [href], input, [tabindex]:not([tabindex='-1'])"
      );
      if (!items.length) return;

      const first = items[0];
      const last = items[items.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
}

/* =========================================================
   10. Contagem regressiva para o lançamento
   ========================================================= */

function initCountdown() {
  /* Data de lançamento: 4 de novembro de 2026 às 15:00 PST (UTC-8) */
  const launchDate = new Date("2026-11-04T23:00:00Z");

  const days = $("countDays");
  const hours = $("countHours");
  const minutes = $("countMinutes");
  const seconds = $("countSeconds");

  if (!days || !hours || !minutes || !seconds) return;

  function update() {
    const now = new Date();
    const diff = launchDate - now;

    if (diff <= 0) {
      days.textContent = "0";
      hours.textContent = "0";
      minutes.textContent = "0";
      seconds.textContent = "0";
      return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    days.textContent = String(d).padStart(2, "0");
    hours.textContent = String(h).padStart(2, "0");
    minutes.textContent = String(m).padStart(2, "0");
    seconds.textContent = String(s).padStart(2, "0");
  }

  update();
  setInterval(update, 1000);
}

/* =========================================================
   11. Navbar fixa com Menu Hambúrguer (Mobile) e scroll styling
   ========================================================= */

function initNavbar() {
  const nav = $("siteNav");
  const toggle = $("navToggle");
  const backdrop = $("navBackdrop");
  if (!nav || !toggle) return;

  const openMenu = () => {
    nav.classList.add("menu-open");
    toggle.classList.add("is-active");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Fechar menu de navegação");
    if (backdrop) backdrop.classList.add("is-visible");
    document.body.classList.add("nav-menu-locked");
  };

  const closeMenu = () => {
    nav.classList.remove("menu-open");
    toggle.classList.remove("is-active");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menu de navegação");
    if (backdrop) backdrop.classList.remove("is-visible");
    document.body.classList.remove("nav-menu-locked");
  };

  const toggleMenu = () => {
    if (nav.classList.contains("menu-open")) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  toggle.addEventListener("click", toggleMenu);

  if (backdrop) {
    backdrop.addEventListener("click", closeMenu);
  }

  /* Fecha o menu ao clicar em qualquer link da navbar */
  const links = nav.querySelectorAll(".nav-link");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  /* Fecha o menu com tecla Escape */
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("menu-open")) {
      closeMenu();
      toggle.focus();
    }
  });

  /* Fecha o menu se a janela for redimensionada para desktop */
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768 && nav.classList.contains("menu-open")) {
      closeMenu();
    }
  });

  /* Reforço de sombra/estilo ao rolar a página */
  const handleScroll = () => {
    if (window.scrollY > 20) {
      nav.classList.add("is-scrolled");
    } else {
      nav.classList.remove("is-scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
}

/* =========================================================
   12. Navegação ativa por scroll (Intersection Observer)
   ========================================================= */

function initNavHighlight() {
  const navLinks = document.querySelectorAll(".nav-link[href^='#']");
  if (!navLinks.length) return;

  /* Mapa de ID da seção → link da nav */
  const linkMap = new Map();
  navLinks.forEach((link) => {
    const id = link.getAttribute("href").slice(1);
    if (id) linkMap.set(id, link);
  });

  /* Encontra as seções correspondentes */
  const sections = [];
  linkMap.forEach((link, id) => {
    const section = document.getElementById(id);
    if (section) sections.push({ id, el: section, link });
  });

  if (!sections.length) return;

  const setActive = (targetLink) => {
    navLinks.forEach((l) => l.classList.remove("active"));
    if (targetLink) targetLink.classList.add("active");
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const match = sections.find((s) => s.el === entry.target);
        if (!match) return;

        if (entry.isIntersecting) {
          setActive(match.link);
        }
      });
    },
    {
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0
    }
  );

  sections.forEach((s) => observer.observe(s.el));

  /* Se estiver no topo da página, força o link 'Início' */
  window.addEventListener(
    "scroll",
    () => {
      if (window.scrollY < 120 && linkMap.has("top")) {
        setActive(linkMap.get("top"));
      }
    },
    { passive: true }
  );
}

/* =========================================================
   12. Partículas mágicas sutis (Hero, Panels, Footer)
   ========================================================= */

function initMagicParticles() {
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  /* 1. Partículas no Hero (ambiente denso e suave com brasas douradas e celestes) */
  const heroContainer = document.querySelector(".hero-particles");
  if (heroContainer) {
    createParticleCloud(heroContainer, {
      count: 16,
      minSize: 2.5,
      maxSize: 5,
      minDur: 5,
      maxDur: 9,
      types: ["gold", "sky", "amber"],
      minTravel: -160,
      maxTravel: -100
    });
  }

  /* 2. Partículas nos Panels (presença sutil de magia ao longo da página) */
  const panelContainers = document.querySelectorAll(".panel-particles");
  panelContainers.forEach((container) => {
    createParticleCloud(container, {
      count: 4,
      minSize: 2,
      maxSize: 4,
      minDur: 6,
      maxDur: 10,
      types: ["gold", "sky"],
      minTravel: -100,
      maxTravel: -60
    });
  });

  /* 3. Partículas no Footer */
  const footerContainer = document.querySelector(".footer-particles");
  if (footerContainer) {
    createParticleCloud(footerContainer, {
      count: 6,
      minSize: 2,
      maxSize: 4,
      minDur: 6,
      maxDur: 10,
      types: ["gold"],
      minTravel: -80,
      maxTravel: -40
    });
  }
}

function createParticleCloud(container, config) {
  const frag = document.createDocumentFragment();

  for (let i = 0; i < config.count; i++) {
    const spark = document.createElement("span");
    const type = config.types[Math.floor(Math.random() * config.types.length)];
    spark.className = `magic-spark magic-spark--${type}`;

    const size = (Math.random() * (config.maxSize - config.minSize) + config.minSize).toFixed(1);
    const left = (Math.random() * 94 + 3).toFixed(1);
    const bottom = (Math.random() * 45 + 5).toFixed(1);
    const dur = (Math.random() * (config.maxDur - config.minDur) + config.minDur).toFixed(2);
    const delay = (Math.random() * 5).toFixed(2);
    const travel = Math.round(Math.random() * (config.maxTravel - config.minTravel) + config.minTravel);
    const drift = Math.round((Math.random() - 0.5) * 44);
    const opacity = (Math.random() * 0.35 + 0.35).toFixed(2);

    spark.style.width = `${size}px`;
    spark.style.height = `${size}px`;
    spark.style.left = `${left}%`;
    spark.style.bottom = `${bottom}%`;
    spark.style.setProperty("--spark-dur", `${dur}s`);
    spark.style.setProperty("--spark-delay", `${delay}s`);
    spark.style.setProperty("--spark-travel", `${travel}px`);
    spark.style.setProperty("--spark-drift", `${drift}px`);
    spark.style.setProperty("--spark-op", opacity);

    frag.appendChild(spark);
  }

  container.appendChild(frag);
}

/* =========================================================
   13. Scroll Reveal refinado para seções e cards
   ========================================================= */

function initScrollReveal() {
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const panels = document.querySelectorAll(".panel");
  if (!panels.length) return;

  panels.forEach((p) => p.classList.add("reveal-ready"));

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: "0px 0px -50px 0px",
      threshold: 0.08
    }
  );

  panels.forEach((p) => observer.observe(p));
}