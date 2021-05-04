<template>
  <section class="section" id="activites">
    <div class="container">
      <div class="has-text-centered">
        <h2 class="title is-2">Nos Activités</h2>

        <p class="subtitle is-5 custom-width mt-2">
          Voici la liste des différentes activités & événements que propose la
          communauté.
        </p>
      </div>
      <div class="columns is-variable is-8 is-tablet is-multiline">
        <Card
          v-for="(event, i) in events"
          :key="i"
          :eventTitle="event.title"
          :eventAnimator="event.animator"
          :eventThumb="event.thumbImg"
          :eventCover="event.coverImg"
          :eventDesc="event.description"
          :eventLink="event.link"
        />
      </div>
      <div class="has-text-centered mt-6">
        <b-button
          tag="nuxt-link"
          to="/activites"
          type="is-info"
          size="is-medium"
          >Voir plus</b-button
        >
      </div>
    </div>
  </section>
</template>

<script>
import Card from "@/components/Card";

export default {
  components: {
    Card,
  },
  computed: {
    events() {
      return this.$store.getters.mainEvents;
    },
  },
};
</script>

<style scoped>
.custom-width {
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}
</style>
