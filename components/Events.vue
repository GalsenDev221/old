<template>
  <section class="section" id="events">
    <div class="container">
        <div class="has-text-centered">
            <h2 class="title is-2">Nos Evenements</h2>

            <p class="subtitle is-5 custom-width mt-2">
                Voici la liste des différents événements que propose la communauté
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
        <div class="has-text-centered mt-6">
          <b-button tag="nuxt-link" to="/events" type="is-info" size="is-medium">En voir plus</b-button>
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
            animator: 'Kossi Selome',
            thumbImg: 'event1-thumb.jpg',
            coverImg: 'event1-cover.jpg',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quibusdam vitae facere repudiandae deleniti debitis.',
          },
          {
            id: '2',
            title: 'Virtual Barcamp',
            animator: 'Linux Senegal',
            thumbImg: 'event5-thumb.jpg',
            coverImg: 'event5-cover.jpg',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quibusdam vitae facere repudiandae deleniti debitis.',
          },
          {
            id: '3',
            title: 'Live Coding',
            animator: 'Galsen Dev',
            thumbImg: 'event1-thumb.jpg',
            coverImg: 'event2-cover.jpg',
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
