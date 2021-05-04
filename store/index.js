export const state = () => ({
  events: [
    {
      id: "1",
      title: "Made In Senegal",
      animator: "le web",
      thumbImg: "galsendev_thumb.png",
      coverImg: "made-in-senegal-min.png",
      description:
        "Il s'agit d'une large collection d'outils (frameworks, packages, extensions...) conçus par des développeurs sénégalais et qui peuvent être utilisés par n'importe qui, n'importe où dans le monde entier.",
      link: "https://madein.galsendev.com"
    },
    {
      id: "2",
      title: "Sunu DEV",
      animator: "tout nos réseaux sociaux.",
      thumbImg: "galsendev_thumb.png",
      coverImg: "sunu-dev-min.png",
      description:
        "Le concept est simple, on prend un(e) jeune développeur(se) on le met en vedette dans une publication partagée sur tous nos réseaux, pour montrer ses compétences et ses travaux et le faire découvrir au grand public.",
      link: "https://www.liinks.co/galsendev221"
    },
    {
      id: "3",
      title: "Jakaarlo Dev",
      animator: "Discord",
      thumbImg: "galsendev_thumb.png",
      coverImg: "jakaarlo-dev-min.png",
      description:
        "Jakaarlo Dev est une session en direct sur Discord durant laquelle un(e) développeur(se) va traiter un sujet en particulier, l'expliquer de manière simple et détaillée à la communauté Galsen Dev.",
      link: "https://discord.com/invite/CKZcKqf"
    },
    {
      id: "4",
      title: "Battle DEV",
      animator: "Discord",
      thumbImg: "galsendev_thumb.png",
      coverImg: "battle-dev-min.png",
      description:
        "Le Battle DEV est un tournoi entre développeurs qui se déroule sur notre Discord, où s'affronte deux ou plusieurs développeurs en Live sur un thème particulier.",
      link: "https://discord.com/invite/CKZcKqf"
    },
    {
      id: "5",
      title: "QUIZ du Samedi",
      animator: "Telegram",
      thumbImg: "galsendev_thumb.png",
      coverImg: "quiz-du-samedi-min.png",
      description:
        "Le QUIZ du Samedi comme l'indique son nom, est un quiz qui se passe sur le canal Telegram de Galsen Dev, une série de questions sur une technologie en particulier entre 20 & 21 heures.",
      link: "https://t.me/galsendev221"
    },
    {
      id: "6",
      title: "Live Coding",
      animator: "Discord",
      thumbImg: "galsendev_thumb.png",
      coverImg: "live-coding-min.png",
      description:
        "Durant le Live Coding on prend une technologie on s'exerce dessus en codant en Live sur notre Discord, ca nous permet de revoir les bases et mieux maitriser les concepts.",
      link: "https://discord.com/invite/CKZcKqf"
    }
  ]
});

export const getters = {
  mainEvents(state) {
    return state.events.slice(0, 3);
  }
};
