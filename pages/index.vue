<template>
    <section>
        <NavBar/>
        <Hero/>
        <Slider/>
        <Events/>
        <Contact/>
        <Footer/>
    </section>
</template>

<script>
import NavBar from '~/components/NavBar'
import Slider from '~/components/Slider'
import Hero from '~/components/Hero'
import Events from '~/components/Events'
import Contact from '~/components/Contact'
import Footer from '~/components/Footer'

export default {
  name: 'GalsenDev',
  components: {
      NavBar,
      Slider,
      Hero,
      Events,
      Contact,
      Footer
  }
}
</script>

<style>
html {
    scroll-behavior: smooth;
}
body{
    font-family: 'Advent Pro';
}
</style>