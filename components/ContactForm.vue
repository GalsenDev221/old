<template>
  <section class="section">
    <div class="container">
      <div class="columns is-variable is-8 is-tablet">
        <div class="column">
          <h2 class="title is-2">Prendre contact avec nous</h2>
          <p>Pour tout complément d'informations, vous pouvez nous envoyer un message sur notre adresse email. Les personnes compétentes se chargeront de vous répondre dans les plus brefs délais.</p>
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
