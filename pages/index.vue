<template>
    <section>
        <NavBar></NavBar>
        <Hero></Hero>
        <Slider></Slider>
    </section>
</template>

<script>
import NavBar from '~/components/NavBar'
import Slider from '~/components/Slider'
import Hero from '~/components/Hero'

export default {
  name: 'GalsenDev',
  components: {
      NavBar,
      Slider,
      Hero
  }
}
</script>