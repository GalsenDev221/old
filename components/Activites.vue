<template>
  <section class="section" id="activites">
    <div class="container">
        <div class="has-text-centered">
            <h2 class="title is-2">Nos Activités</h2>

            <p class="subtitle is-5 custom-width mt-2">
                Voici la liste des différentes activités & événements que propose la communauté.
            </p>
        </div>
        <div class="columns is-variable is-8 is-tablet is-multiline">
            <Card
                v-for="(event, i) in events" :key="i"
                :eventTitle="event.title"
                :eventAnimator="event.animator"
                :eventThumb="event.thumbImg"
                :eventCover="event.coverImg"
                :eventDesc="event.description"
                :eventLink="event.link"
            />
        </div>
        <div class="has-text-centered mt-6">
          <b-button tag="nuxt-link" to="/activites" type="is-info" size="is-medium">Voir plus</b-button>
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
            title: 'Made In Senegal',
            animator: 'le web',
            thumbImg: 'galsendev.png',
            coverImg: 'made-in-senegal-min.png',
            description: "Il s'agit d'une large collection d'outils (frameworks, packages, extensions...) conçus par des développeurs sénégalais et qui peuvent être utilisés par n'importe qui, n'importe où dans le monde entier.",
            link: "https://madein.galsendev.com"
          },
          {
            title: 'Jakaarlo Dev',
            animator: 'Discord',
            thumbImg: 'galsendev.png',
            coverImg: 'jakaarlo-dev-min.png',
            description: "Jakaarlo Dev est une session en direct sur Discord durant laquelle un(e) développeur(se) va traiter un sujet en particulier, l'expliquer de manière simple et détaillée à la communauté Galsen Dev.",
            link: "https://discord.com/invite/CKZcKqf"
          },
          {
            title: 'Sunu DEV',
            animator: 'tout nos réseaux sociaux.',
            thumbImg: 'galsendev.png',
            coverImg: 'sunu-dev-min.png',
            description: "Le concept est simple, on prend un(e) jeune développeur(se) on le met en vedette dans une publication partagée sur tous nos réseaux, pour montrer ses compétences et ses travaux et le faire découvrir au grand public.",
            link: "https://www.liinks.co/galsendev221"
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
