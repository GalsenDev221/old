<template>
<section id="motivation" class="section is-medium has-background-white-bis">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-5">
            <h2 class="is-size-2">Galsen Dev</h2>
            <br />
            <p class="is-size-5">
              Galsen Dev est une communauté qui regroupe les développeurs sénégalais dans le but de mettre en place un écosystème favorable à la création et au paratage en développeur et de vulgariser la programmation partout au Sénégal. <br>
              Nous nous fixons aussi pour objectif d'aider les débutants et les personnes désireux de rejoindre le domaine de la programmation.
            </p>
            <br />
            <br />
            <div class="has-text-centered">
              <b-button size="is-large" icon-right="github-circle" @click="goToRepo()">
                Rejoindre
              </b-button>
            </div>
          </div>
          <div class="column is-offset-1 is-6">
            <figure class="image is-3by2">
              <img src="../assets/images/developers-code.svg" alt="Developers Code" />
            </figure>
          </div>
          <br />
        </div>
      </div>
    </section>
</template>

<style lang="scss">
@import '~/assets/scss/gradients.scss';
.hero {
  background-size: cover;
  .hero__logo {
    min-width: 20rem;
    max-width: 33%;
    margin-bottom: 5rem;
  }
  .hero__btn {
    color: white;
    border: none;
    @extend .triple-gradient;
    transition: 0.5s;
    background-size: 200% auto;
    &:hover {
      background-position: right center;
    }
  }
  .scroll-down__arrow {
    color: white;
    margin-bottom: 2rem;
    cursor: pointer;
  }
  .bounce {
    -moz-animation: bounce 2s infinite;
    -webkit-animation: bounce 2s infinite;
    animation: bounce 2s infinite;
  }
  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-1rem);
    }
    60% {
      transform: translateY(-0.5rem);
    }
  }
}
#instructions {
  .instructions__image {
    margin: 0 auto;
    max-width: 60%;
  }
}
</style>