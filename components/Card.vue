<template>
  <div class="column is-half-tablet is-one-third-desktop mt-6">
    <div class="card">
      <div class="card-image">
        <figure class="image is-square">
            <img :src="require(`~/assets/images/${eventCover}`)" alt="Image de couverture de l'evenement">
        </figure>
      </div>

      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img :src="require(`~/assets/images/${eventThumb}`)" alt="Image miniature de l'evenement">
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{{eventTitle}}</p>
            <p class="subtitle is-6">sur <span class="has-text-weight-medium">{{eventAnimator}}</span></p>
          </div>
        </div>

        <div class="content">
          <div>{{eventDesc}}</div>
          <div class="has-text-right mt-5">
              <b-button tag="a"
                  :href="(`${eventLink}`)"
                  target="_blank"
                  type="is-info">
                  <span class="mr-2">EN SAVOIR PLUS</span>
                  <b-icon icon="external-link-alt" size="is-small"></b-icon>
              </b-button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: {
    eventTitle: {
      type: String,
      required: true
    },
    eventAnimator: {
      type: String,
      required: true
    },
     eventDesc: {
      type: String,
      required: true
    },
    eventCover: {
      type: String,
      required: true
    },
    eventThumb: {
      type: String,
      required: true
    },
    eventLink: {
      type: String,
      required: true
    }
  }
}
</script>
