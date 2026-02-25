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
    "nav.blog": "Blog",
    "nav.about": "About",
    "nav.uses": "Uses",

    "theme.toggle": "Toggle dark mode",
    "lang.switch": "Ler em Português",

    "home.greeting": "Hey, I'm Marco.",
    "home.intro":
      "Software engineer building things for the web. I write about engineering, tools, and the craft of building software.",
    "home.cta.blog": "Read the blog",
    "home.cta.about": "More about me",

    "about.title": "About",
    "about.heading": "About me",
    "about.content.p1":
      "Software Engineer with deep full-stack expertise in PHP, Laravel, JavaScript, and Vue.js—and a growing focus on how intelligent, system-driven workflows are reshaping the way software gets built. I've spent years architecting and shipping scalable web applications with US-based teams of all sizes, from early-stage startups to mature enterprise platforms.",
    "about.content.p2":
      "I care about clean code, pragmatic technical decisions, resilient data architecture, and seamless user experiences. But I'm equally drawn to what's next: leveraging intelligent automation and modern tooling to reduce friction, eliminate repetitive work, and let engineers focus on the problems that actually matter.",
    "about.content.p3":
      "Adaptable and quick to master new technologies, I bring strong engineering fundamentals and a collaborative mindset to every project.",

    "uses.title": "Uses",
    "uses.heading": "What I use",
    "uses.intro":
      "Tools, hardware, and software that I use daily. Inspired by uses.tech.",
    "uses.hardware": "Hardware",
    "uses.dev": "Development",
    "uses.software": "Software",
    "uses.terminal": "Terminal",
    "uses.services": "Services",
    "uses.audio": "Audio",


    "blog.title": "Blog",
    "blog.heading": "Writing",
    "blog.description": "Thoughts on engineering, tools, and building software.",
    "blog.empty": "No posts yet. Check back soon.",
    "blog.read_more": "Read more",
    "blog.also_in": "Also available in",

    "post.published": "Published",
    "post.updated": "Updated",
    "post.tags": "Tags",
    "post.back": "Back to all posts",

    "newsletter.heading": "Stay in the loop",
    "newsletter.description":
      "Get notified when I publish new posts. No spam, unsubscribe anytime.",
    "newsletter.placeholder": "your@email.com",
    "newsletter.button": "Subscribe",

    "comments.heading": "Comments",

    "footer.rights": "All rights reserved.",
  },

  pt: {
    "site.title": "Marco Machado",
    "site.description":
      "Engenheiro de software, escritor e construtor. Site pessoal e blog.",

    "nav.home": "Início",
    "nav.blog": "Blog",
    "nav.about": "Sobre",
    "nav.uses": "Usos",

    "theme.toggle": "Alternar modo escuro",
    "lang.switch": "Read in English",

    "home.greeting": "Olá, eu sou o Marco.",
    "home.intro":
      "Engenheiro de software construindo para a web. Escrevo sobre engenharia, ferramentas e a arte de construir software.",
    "home.cta.blog": "Ler o blog",
    "home.cta.about": "Mais sobre mim",

    "about.title": "Sobre",
    "about.heading": "Sobre mim",
    "about.content.p1":
      "Engenheiro de Software com sólida experiência full-stack em PHP, Laravel, JavaScript e Vue.js — e um foco crescente em como fluxos de trabalho inteligentes e orientados a sistemas estão transformando a forma como o software é desenvolvido. Passei anos arquitetando e entregando aplicações web escaláveis com times norte-americanos de todos os tamanhos, desde startups em estágio inicial até plataformas corporativas consolidadas.",
    "about.content.p2":
      "Valorizo código limpo, decisões técnicas pragmáticas, arquitetura de dados resiliente e experiências de usuário fluidas. Mas sou igualmente atraído pelo que está por vir: utilizar automação inteligente e ferramentas modernas para reduzir atritos, eliminar tarefas repetitivas e permitir que os engenheiros foquem nos problemas que realmente importam.",
    "about.content.p3":
      "Adaptável e rápido no domínio de novas tecnologias, levo sólidos fundamentos de engenharia e uma mentalidade colaborativa para cada projeto.",

    "uses.title": "Usos",
    "uses.heading": "O que eu uso",
    "uses.intro":
      "Ferramentas, hardware e software que uso diariamente. Inspirado por uses.tech.",
    "uses.hardware": "Hardware",
    "uses.dev": "Desenvolvimento",
    "uses.software": "Software",
    "uses.terminal": "Terminal",
    "uses.services": "Serviços",
    "uses.audio": "Áudio",


    "blog.title": "Blog",
    "blog.heading": "Escrita",
    "blog.description":
      "Pensamentos sobre engenharia, ferramentas e construção de software.",
    "blog.empty": "Nenhum post ainda. Volte em breve.",
    "blog.read_more": "Ler mais",
    "blog.also_in": "Disponível também em",

    "post.published": "Publicado",
    "post.updated": "Atualizado",
    "post.tags": "Tags",
    "post.back": "Voltar para todos os posts",

    "newsletter.heading": "Fique por dentro",
    "newsletter.description":
      "Receba notificações quando eu publicar novos posts. Sem spam, cancele quando quiser.",
    "newsletter.placeholder": "seu@email.com",
    "newsletter.button": "Inscrever-se",

    "comments.heading": "Comentários",

    "footer.rights": "Todos os direitos reservados.",
  },
} as const;
