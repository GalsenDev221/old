<template>
  <section class="section is-medium">
    <div class="container">
        <div class="has-text-centered">
            <h2 class="title is-2">Nos Activités</h2>

            <p class="subtitle is-5 custom-width mt-2">
                Voici la liste des différents activités & événements que propose la communauté
            </p>
        </div>
        <div class="columns is-variable is-8 is-tablet is-multiline">
            <Card
                v-for="event in events" :key="event.id"
                :eventTitle="event.title"
                :eventAnimator="event.animator"
                :eventThumb="event.thumbImg"
                :eventCover="event.coverImg"
                :eventDesc="event.description"
            />
        </div>
    </div>
  </section>
</template>

<script>
import Card from '@/components/Card'

export default {
    components: {
        Card
    },
    data() {
      return {
        events: [
          {
            id: '1',
            title: 'Jakaarlo Dev',
            animator: 'Discord',
            thumbImg: 'galsendev.png',
            coverImg: 'jakaarlo-dev.png',
            description: "Jakaarlo Dev est une session en direct sur Discord durant laquelle un(e) développeur(se) va traiter un sujet en particulier, l'expliquer de manière simple et détaillée à la communauté Galsen Dev.",
          },
          {
            id: '2',
            title: 'Sunu DEV',
            animator: 'tout nos réseaux sociaux.',
            thumbImg: 'galsendev.png',
            coverImg: 'sunu-dev.png',
            description: "Le concept est simple, on prend un(e) jeune développeur(se) on le met en vedette dans une publication partagée sur tous nos réseaux, pour montrer ses compétences et ses travaux et le faire découvrir au grand public.",
          },
          {
            id: '3',
            title: 'Battle DEV',
            animator: 'Discord',
            thumbImg: 'galsendev.png',
            coverImg: 'battle-dev.png',
            description: "Le Battle DEV est un petit tournoi entre développeurs qui se passe sur notre Discord, ou s'affronte deux ou plusieurs développeurs en Live sur un thème particulier, à la fin du duel on choisit par vote le vainqueur de la soirée.",
          },
          {
            id: '4',
            title: 'QUIZ du Samedi',
            animator: 'Telegram',
            thumbImg: 'galsendev.png',
            coverImg: 'quiz-du-samedi.png',
            description: "Le QUIZ du Samedi comme l'indique son nom, est un quiz qui se passe sur le canal Telegram de Galsen Dev, une série de questions sur une technologie donnée entre 20 & 21 heures.",
          },
          {
            id: '5',
            title: 'Live Coding',
            animator: 'Discord',
            thumbImg: 'galsendev.png',
            coverImg: 'live-coding.png',
            description: "Durant le Live Coding on prend une technologie on s'exerce dessus en codant en Live sur notre Discord, ca nous permet de revoir les bases et mieux maitriser les concepts.",
          }
        ]
      }
    }
}
</script>

<style scoped>
    .custom-width {
        max-width: 700px;
        margin-left: auto;
        margin-right: auto;
    }
</style>
