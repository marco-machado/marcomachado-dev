export const defaultLang = "en" as const;
export const showDefaultLang = false;

export const languages = {
  en: "English",
  pt: "Português",
} as const;

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    "site.title": "Marco Machado",
    "site.description":
      "Software engineer, writer, and builder. Personal site and blog.",

    "nav.home": "Home",
    "nav.blog": "Posts",
    "nav.about": "About",
    "nav.ai": "AI",
    "nav.uses": "Stack",

    "lang.switch": "Ler em Português",
    "topbar.index": "[ Index ]",
    "topbar.switchLanguage": "Switch language",
    "topbar.online": "ONLINE",
    "location.home": "HOME",
    "location.about": "ABOUT",
    "location.ai": "AI",

    "home.greeting": "Hey, I'm Marco.",
    "home.greeting.line1": "Engineer.",
    "home.greeting.line2": "Operator.",
    "home.greeting.line3": "Builder.",
    "home.intro":
      "Software engineer building things for the web. I write about engineering, tools, and the craft of building software.",
    "home.eyebrow": "Select your control mode",
    "home.cta.blog": "Read the blog",
    "home.cta.blog.label": "Read",
    "home.cta.blog.sub": "Latest posts",
    "home.cta.about": "More about me",
    "home.cta.about.label": "About",
    "home.cta.about.sub": "More about me",
    "home.cta.work.label": "Work",
    "home.cta.work.sub": "Selected projects",
    "home.latestPosts": "Latest Posts",
    "home.viewAll": "View all posts",

    "about.title": "About",
    "about.heading": "About me",
    "about.intro":
      "I'm a software engineer who builds web applications and writes about how the work is changing.",
    "about.eyebrow": "/ operator profile",
    "about.meta.name": "NAME · MARCO MACHADO",
    "about.meta.role": "ROLE · SOFTWARE ENGINEER",
    "about.meta.base": "BASE · BRAZIL → REMOTE",
    "about.meta.since": "SINCE · 2014",
    "about.content.p1":
      "Software Engineer with deep full-stack expertise in PHP, Laravel, JavaScript, and Vue.js—and a growing focus on how intelligent, system-driven workflows are reshaping the way software gets built. I've spent years architecting and shipping scalable web applications with US-based teams of all sizes, from early-stage startups to mature enterprise platforms.",
    "about.content.p2":
      "I care about clean code, pragmatic technical decisions, resilient data architecture, and seamless user experiences. But I'm equally drawn to what's next: leveraging intelligent automation and modern tooling to reduce friction, eliminate repetitive work, and let engineers focus on the problems that actually matter.",
    "about.content.p3":
      "Adaptable and quick to master new technologies, I bring strong engineering fundamentals and a collaborative mindset to every project.",

    "uses.title": "Uses",
    "uses.heading": "Stack",
    "uses.intro":
      "Tools, hardware, and software that I use daily. Inspired by uses.tech.",
    "uses.hardware": "Hardware",
    "uses.dev": "Development",
    "uses.software": "Software",
    "uses.terminal": "Terminal",
    "uses.services": "Services",
    "uses.audio": "Audio",
    "uses.section.hardware": "Hardware",
    "uses.section.dev": "Development",
    "uses.section.terminal": "Terminal",
    "uses.section.software": "Software",
    "uses.section.services": "Services",
    "uses.section.audio": "Audio",
    "uses.eyebrow": "/ daily kit",

    "ai.title": "AI",
    "ai.heading": "AI",
    "ai.intro": "AI tools and coding agents I use regularly.",
    "ai.codingAgents": "Coding Agents",
    "ai.skillsPlugins": "Skills and Plugins",
    "ai.section.agents": "Coding agents",
    "ai.section.skills": "Skills & plugins",
    "ai.section.context": "Context discipline",
    "ai.eyebrow": "/ machine layer",

    "blog.title": "Blog",
    "blog.heading": "Posts",
    "blog.description":
      "Notes on engineering, tools, and the craft of building software with intelligent systems in the loop.",
    "blog.empty": "No posts yet. Check back soon.",
    "blog.read_more": "Read more",
    "blog.also_in": "Also available in",
    "blog.eyebrow": "/ posts log",
    "blog.archive": "archive",
    "blog.entries": "entries",

    "post.published": "Published",
    "post.updated": "Updated",
    "post.tags": "Tags",
    "post.back": "Back to all posts",

    "newsletter.eyebrow": "/ subscribe",
    "newsletter.heading": "Stay in the loop",
    "newsletter.description":
      "Get notified when I publish new posts. No spam, unsubscribe anytime.",
    "newsletter.placeholder": "your@email.com",
    "newsletter.emailLabel": "Email address",
    "newsletter.button": "Subscribe",

    "comments.heading": "Comments",

    "footer.rights": "All rights reserved.",
    "footer.system": "System operational",
  },

  pt: {
    "site.title": "Marco Machado",
    "site.description":
      "Engenheiro de software, escritor e construtor. Site pessoal e blog.",

    "nav.home": "Início",
    "nav.blog": "Posts",
    "nav.about": "Sobre",
    "nav.ai": "IA",
    "nav.uses": "Stack",

    "lang.switch": "Read in English",
    "topbar.index": "[ Índice ]",
    "topbar.switchLanguage": "Trocar idioma",
    "topbar.online": "ONLINE",
    "location.home": "INÍCIO",
    "location.about": "SOBRE",
    "location.ai": "IA",

    "home.greeting": "Olá, eu sou o Marco.",
    "home.greeting.line1": "Engenheiro.",
    "home.greeting.line2": "Operador.",
    "home.greeting.line3": "Construtor.",
    "home.intro":
      "Engenheiro de software construindo para a web. Escrevo sobre engenharia, ferramentas e a arte de construir software.",
    "home.eyebrow": "Escolha seu modo de controle",
    "home.cta.blog": "Ler o blog",
    "home.cta.blog.label": "Ler",
    "home.cta.blog.sub": "Últimos posts",
    "home.cta.about": "Mais sobre mim",
    "home.cta.about.label": "Sobre",
    "home.cta.about.sub": "Mais sobre mim",
    "home.cta.work.label": "Trabalho",
    "home.cta.work.sub": "Projetos selecionados",
    "home.latestPosts": "Últimos posts",
    "home.viewAll": "Ver todos os posts",

    "about.title": "Sobre",
    "about.heading": "Sobre mim",
    "about.intro":
      "Sou engenheiro de software, construo aplicações web e escrevo sobre como o trabalho está mudando.",
    "about.eyebrow": "/ perfil do operador",
    "about.meta.name": "NOME · MARCO MACHADO",
    "about.meta.role": "FUNÇÃO · ENGENHEIRO DE SOFTWARE",
    "about.meta.base": "BASE · BRASIL → REMOTO",
    "about.meta.since": "DESDE · 2014",
    "about.content.p1":
      "Engenheiro de Software com sólida experiência full-stack em PHP, Laravel, JavaScript e Vue.js — e um foco crescente em como fluxos de trabalho inteligentes e orientados a sistemas estão transformando a forma como o software é desenvolvido. Passei anos arquitetando e entregando aplicações web escaláveis com times norte-americanos de todos os tamanhos, desde startups em estágio inicial até plataformas corporativas consolidadas.",
    "about.content.p2":
      "Valorizo código limpo, decisões técnicas pragmáticas, arquitetura de dados resiliente e experiências de usuário fluidas. Mas sou igualmente atraído pelo que está por vir: utilizar automação inteligente e ferramentas modernas para reduzir atritos, eliminar tarefas repetitivas e permitir que os engenheiros foquem nos problemas que realmente importam.",
    "about.content.p3":
      "Adaptável e rápido no domínio de novas tecnologias, levo sólidos fundamentos de engenharia e uma mentalidade colaborativa para cada projeto.",

    "uses.title": "Uso",
    "uses.heading": "Stack",
    "uses.intro":
      "Ferramentas, hardware e software que uso diariamente. Inspirado por uses.tech.",
    "uses.hardware": "Hardware",
    "uses.dev": "Desenvolvimento",
    "uses.software": "Software",
    "uses.terminal": "Terminal",
    "uses.services": "Serviços",
    "uses.audio": "Áudio",
    "uses.section.hardware": "Hardware",
    "uses.section.dev": "Desenvolvimento",
    "uses.section.terminal": "Terminal",
    "uses.section.software": "Software",
    "uses.section.services": "Serviços",
    "uses.section.audio": "Áudio",
    "uses.eyebrow": "/ kit diário",

    "ai.title": "IA",
    "ai.heading": "IA",
    "ai.intro": "Ferramentas de IA e agentes de programação que uso regularmente.",
    "ai.codingAgents": "Agentes de Programação",
    "ai.skillsPlugins": "Skills e Plugins",
    "ai.section.agents": "Agentes de programação",
    "ai.section.skills": "Skills e plugins",
    "ai.section.context": "Disciplina de contexto",
    "ai.eyebrow": "/ camada de máquina",

    "blog.title": "Blog",
    "blog.heading": "Posts",
    "blog.description":
      "Anotações sobre engenharia, ferramentas e o ofício de construir software com sistemas inteligentes no loop.",
    "blog.empty": "Nenhum post ainda. Volte em breve.",
    "blog.read_more": "Ler mais",
    "blog.also_in": "Disponível também em",
    "blog.eyebrow": "/ log de posts",
    "blog.archive": "arquivo",
    "blog.entries": "entradas",

    "post.published": "Publicado",
    "post.updated": "Atualizado",
    "post.tags": "Tags",
    "post.back": "Voltar para todos os posts",

    "newsletter.eyebrow": "/ assinar",
    "newsletter.heading": "Fique por dentro",
    "newsletter.description":
      "Receba notificações quando eu publicar novos posts. Sem spam, cancele quando quiser.",
    "newsletter.placeholder": "seu@email.com",
    "newsletter.emailLabel": "Endereço de email",
    "newsletter.button": "Inscrever-se",

    "comments.heading": "Comentários",

    "footer.rights": "Todos os direitos reservados.",
    "footer.system": "Sistema operacional",
  },
} as const;
