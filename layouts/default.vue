<template>
  <div class="wrapper">
    <NavBar/>
    <Nuxt />
    <Footer />
  </div>
</template>

<style>
  html {
    scroll-behavior: smooth;
  }
  body{
    font-family: 'Advent Pro';
  }

  .wrapper {
    overflow-y: auto;
    overflow-x: hidden;
  }
</style>