<template>
    <b-carousel :pause-info='false'>
        <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
            <section :class="`hero is-medium is-${carousel.color}`">
                <div class="hero-body has-text-centered">
                    <h1 class="title">{{carousel.text}}</h1>
                </div>
            </section>
        </b-carousel-item>
    </b-carousel>
</template>

<script>
export default {
    data(){
        return {
            carousels: [
                { text: 'Bâtir ensemble la plus grande de communauté de développeurs au Sénégal.', color: 'info' },
                { text: 'Vulgariser la programmation partout sur le territoire national.', color: 'info' }
            ]
        }
    }
}
</script>
