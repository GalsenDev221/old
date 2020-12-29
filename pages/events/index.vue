<template>
  <section class="section is-medium">
    <div class="container">
        <div class="has-text-centered">
            <h2 class="title is-2">Nos Evenements</h2>

            <p class="subtitle is-5 custom-width mt-2">
                Voici la liste des différents événements et activités que propose la communauté
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
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quibusdam vitae facere repudiandae deleniti debitis.',
          },
          {
            id: '2',
            title: 'Sunu DEV',
            animator: 'tout nos réseaux sociaux.',
            thumbImg: 'galsendev.png',
            coverImg: 'sunu-dev.png',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quibusdam vitae facere repudiandae deleniti debitis.',
          },
          {
            id: '3',
            title: 'Battle DEV',
            animator: 'Discord',
            thumbImg: 'galsendev.png',
            coverImg: 'battle-dev.png',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quibusdam vitae facere repudiandae deleniti debitis.',
          },
          {
            id: '4',
            title: 'QUIZ du Samedi',
            animator: 'Telegram',
            thumbImg: 'galsendev.png',
            coverImg: 'quiz-du-samedi.png',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quibusdam vitae facere repudiandae deleniti debitis.',
          },
          {
            id: '5',
            title: 'Live Coding',
            animator: 'Discord',
            thumbImg: 'galsendev.png',
            coverImg: 'live-coding.png',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quibusdam vitae facere repudiandae deleniti debitis.',
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
