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
    "nav.now": "Now",

    "theme.toggle": "Toggle dark mode",
    "lang.switch": "Ler em Português",

    "home.greeting": "Hey, I'm Marco.",
    "home.intro":
      "Software engineer building things for the web. I write about engineering, tools, and the craft of building software.",
    "home.cta.blog": "Read the blog",
    "home.cta.about": "More about me",

    "about.title": "About",
    "about.heading": "About me",
    "about.content":
      "I'm a software engineer who cares about well-crafted software. I work across the stack, with a focus on building reliable, maintainable systems. I believe in writing clearly — in code and in prose.",
    "about.stack.heading": "Tech I work with",
    "about.stack.content":
      "TypeScript, React, Node.js, Go, PostgreSQL, Redis, AWS, Docker. I pick the right tool for the job and learn what I need along the way.",

    "uses.title": "Uses",
    "uses.heading": "What I use",
    "uses.intro":
      "Tools, hardware, and software that I use daily. Inspired by uses.tech.",
    "uses.hardware": "Hardware",
    "uses.dev": "Development",
    "uses.software": "Software",
    "uses.terminal": "Terminal",

    "now.title": "Now",
    "now.heading": "What I'm doing now",
    "now.intro":
      "This is a now page. It's a snapshot of what I'm focused on at this point in my life.",
    "now.updated": "Last updated",

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
    "nav.now": "Agora",

    "theme.toggle": "Alternar modo escuro",
    "lang.switch": "Read in English",

    "home.greeting": "Olá, eu sou o Marco.",
    "home.intro":
      "Engenheiro de software construindo para a web. Escrevo sobre engenharia, ferramentas e a arte de construir software.",
    "home.cta.blog": "Ler o blog",
    "home.cta.about": "Mais sobre mim",

    "about.title": "Sobre",
    "about.heading": "Sobre mim",
    "about.content":
      "Sou engenheiro de software que se preocupa com software bem construído. Trabalho em toda a stack, com foco em construir sistemas confiáveis e sustentáveis. Acredito em escrever com clareza — em código e em prosa.",
    "about.stack.heading": "Tecnologias que uso",
    "about.stack.content":
      "TypeScript, React, Node.js, Go, PostgreSQL, Redis, AWS, Docker. Escolho a ferramenta certa para o trabalho e aprendo o que preciso pelo caminho.",

    "uses.title": "Usos",
    "uses.heading": "O que eu uso",
    "uses.intro":
      "Ferramentas, hardware e software que uso diariamente. Inspirado por uses.tech.",
    "uses.hardware": "Hardware",
    "uses.dev": "Desenvolvimento",
    "uses.software": "Software",
    "uses.terminal": "Terminal",

    "now.title": "Agora",
    "now.heading": "O que estou fazendo agora",
    "now.intro":
      "Esta é uma página now. É um retrato do que estou focado neste momento da minha vida.",
    "now.updated": "Última atualização",

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
