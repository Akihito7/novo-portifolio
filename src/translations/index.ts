type Translation = {
  home: {
    'en-us': {
      greetings: string;
      fullStack: string;
      openToWork: string;
      projectsButton: string;
      aboutButton: string;
      description: string;
    };
    'pt-br': {
      greetings: string;
      fullStack: string;
      openToWork: string;
      projectsButton: string;
      aboutButton: string;
      description: string;
    };
  };
  about: {
    'en-us': {
      bio: string;
      experienceTitle: string;
      company: string;
      juniorTitle: string;
      internTitle: string;
      months: string;
      month: string;
      skillsTitle: string;
    };
    'pt-br': {
      bio: string;
      experienceTitle: string;
      company: string;
      juniorTitle: string;
      internTitle: string;
      months: string;
      month: string;
      skillsTitle: string;
    };
  };
  projects: {
    'en-us': {
      title: string;
      attractionDescription: string;
      akfinancesDescription: string;
    };
    'pt-br': {
      title: string;
      attractionDescription: string;
      akfinancesDescription: string;
    };
  };
  menu: {
    'en-us': {
      home: string;
      about: string;
      projects: string;
      contactNow: string;
    };
    'pt-br': {
      home: string;
      about: string;
      projects: string;
      contactNow: string;
    };
  };
};

const translation: Translation = {
  home: {
    'en-us': {
      greetings: "Hi people, I am ",
      fullStack: "Full-stack developer! 👨‍💻",
      openToWork: "Open to work!",
      projectsButton: "Projects",
      aboutButton: "About",
      description: "Computer science student and passionate about technology!"
    },
    'pt-br': {
      greetings: "Olá pessoa, eu sou ",
      fullStack: "Desenvolvedor full-stack! 👨‍💻",
      openToWork: "Open to work!",
      projectsButton: "Projetos",
      aboutButton: "Sobre",
      description: "Estudante de ciências da computação e apaixonado por tecnologia!"
    }
  },
  about: {
    'en-us': {
      bio: "Full-Stack developer with experience in JavaScript, Next.js and NestJS, focused on solving bugs, optimizing systems and building complete solutions from scratch. I aim to create efficient and scalable solutions, always improving my skills.",
      experienceTitle: "Experience",
      company: "GBM Tech & Control",
      juniorTitle: "Full Stack Developer — Junior",
      internTitle: "Full Stack Developer — Intern",
      months: "months",
      month: "month",
      skillsTitle: "Skills! 📖"
    },
    'pt-br': {
      bio: "Desenvolvedor Full-Stack com experiência em JavaScript, Next.js e NestJS, focado em resolver bugs, otimizar sistemas e construir soluções completas do zero. Busco criar soluções eficientes e escaláveis, sempre aprimorando minhas habilidades.",
      experienceTitle: "Experiência",
      company: "GBM Tech & Control",
      juniorTitle: "Desenvolvedor full stack júnior",
      internTitle: "Desenvolvedor full stack — Estagiário",
      months: "meses",
      month: "mês",
      skillsTitle: "Conhecimentos! 📖"
    }
  },
  projects: {
    'en-us': {
      title: 'Projects I have built! 🚀',
      attractionDescription: 'Explore our website featuring the top 4 most loved tourist attractions. Hopefully, it inspires you to discover more places around Brazil!',
      akfinancesDescription: 'Manage your finances easily in just a few clicks! Track your expenses and income with clear, detailed charts. You in control of your money!',
    },
    'pt-br': {
      title: 'Projetos que realizei! 🚀',
      attractionDescription: 'Explore nosso site dedicado aos quatro pontos turísticos mais populares, amados pelo público. Espero que isso te motive a procurar outros pontos turísticos pelo Brasil!',
      akfinancesDescription: 'Controle suas finanças com facilidade em poucos cliques! Gerencie gastos e ganhos de forma simples, com gráficos detalhados para uma visão clara. Você no comando do seu dinheiro!',
    }
  },
  menu: {
    'en-us': {
      home: "Home",
      about: "About",
      projects: "Projects",
      contactNow: "Contact now",
    },
    'pt-br': {
      home: "Início",
      about: "Sobre",
      projects: "Projetos",
      contactNow: "Contatar agora",
    }
  },
};

type Pages = keyof Translation;

export class UseTranslate<P extends Pages = Pages> {
  protected page: P;
  protected lang: string;

  constructor(page: P, lang: string) {
    this.page = page;
    this.lang = lang;
  }

  t<K extends keyof Translation[P]['pt-br']>(text: K): string {
    return (translation[this.page][this.lang] as Translation[P]['pt-br'])[text] as any;
  }
}
