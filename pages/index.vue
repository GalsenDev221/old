<template>
    <section>
        <NavBar></NavBar>
        <Slider></Slider>
        <Hero></Hero>
        <Footer></Footer>
    </section>
</template>

<script>
import NavBar from '~/components/NavBar'
import Slider from '~/components/Slider'
import Hero from '~/components/Hero'
import Footer from '~/components/Footer'
/* import ContactForm from '~/components/ContactForm' */

export default {
  name: 'GalsenDev',
  components: {
      NavBar,
      Slider,
      Hero,

      Footer
  }
}
</script>