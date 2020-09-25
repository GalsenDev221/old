<template>
  <section class="section">
    <div class="container">
      <div class="columns is-tablet">
        <div class="column">
          <h2 class="title is-2">Prendre contact avec nous</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed asperiores aliquam et aspernatur, repudiandae, dicta quam repellendus quas tempora suscipit.</p>
        </div>
        <div class="column">
          <form @submit.prevent="sendMail">
            <b-field>
              <b-input placeholder="Nom" v-model="nom"></b-input>
            </b-field>
            <b-field>
              <b-input placeholder="Email" v-model="email"></b-input>
            </b-field>
            <b-field>
              <b-input placeholder="Message" type="textarea" v-model="message"></b-input>
            </b-field>
            <div class="has-text-right mt-6">
              <b-button tag="input"
                native-type="submit"
                value="Envoyer" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        nom: '',
        email: '',
        message: ''
      }
    },
    methods: {
      sendMail() {
        alert('mail sent')
        // check if the email is valid
        // check if the name & message is 3 min character
      },
    }
  }
</script>
