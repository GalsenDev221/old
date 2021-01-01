<template>
  <section class="section" id="activities">
    <div class="container">
        <div class="has-text-centered">
            <h2 class="title is-2">Nos Activités</h2>

            <p class="subtitle is-5 custom-width mt-2">
                Voici la liste des différents activités & événements que propose la communauté.
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
            />
        </div>
        <div class="has-text-centered mt-6">
          <b-button tag="nuxt-link" to="/activities" type="is-info" size="is-medium">En voir plus</b-button>
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
            title: 'Jakaarlo Dev',
            animator: 'Discord',
            thumbImg: 'galsendev.png',
            coverImg: 'jakaarlo-dev.png',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quibusdam vitae facere repudiandae deleniti debitis.',
          },
          {
            title: 'Sunu DEV',
            animator: 'tout nos réseaux sociaux.',
            thumbImg: 'galsendev.png',
            coverImg: 'sunu-dev.png',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quibusdam vitae facere repudiandae deleniti debitis.',
          },
          {
            title: 'Battle DEV',
            animator: 'Discord',
            thumbImg: 'galsendev.png',
            coverImg: 'battle-dev.png',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quibusdam vitae facere repudiandae deleniti debitis.',
          },
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
