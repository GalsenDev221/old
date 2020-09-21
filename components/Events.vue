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
                eventTitle="Jakaarlo Dev"
                eventAnimator="Kossi Selome"
                eventThumb="event1-thumb.jpg"
                eventCover="event1-cover.jpg"
                eventDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quibusdam vitae facere repudiandae deleniti debitis."
            />
            <Card
                eventTitle="Virtual Barcamp"
                eventAnimator="Linux Senegal"
                eventThumb="event5-thumb.jpg"
                eventCover="event5-cover.jpg"
                eventDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quibusdam vitae facere repudiandae deleniti debitis."
            />
            <Card
                eventTitle="Live Coding"
                eventAnimator="Galsen Dev"
                eventThumb="event1-thumb.jpg"
                eventCover="event2-cover.jpg"
                eventDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quibusdam vitae facere repudiandae deleniti debitis."
            />
            <Card
                eventTitle="Jakaarlo Dev"
                eventAnimator="Alioune Kanoute"
                eventThumb="event1-thumb.jpg"
                eventCover="event3-cover.jpg"
                eventDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quibusdam vitae facere repudiandae deleniti debitis."
            />
            <Card
                eventTitle="Jakaarlo Dev"
                eventAnimator="Joe Diouf"
                eventThumb="event1-thumb.jpg"
                eventCover="event4-cover.jpg"
                eventDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quibusdam vitae facere repudiandae deleniti debitis."
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