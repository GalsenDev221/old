<template>
  <section class="section">
    <div class="container">
      <div class="columns is-variable is-8 is-tablet">
        <div class="column">
          <h2 class="title is-2">Prendre contact avec nous</h2>
          <p>Vous pouvez contacter notre équipe se chargera de vous répondre dans les plus brefs délais.</p>
        </div>
        <div class="column">
          <form action="https://getsimpleform.com/messages?form_api_token=435d5cea78cb72201deed237d6dbecdd" method="POST">
          <input type='hidden' name='redirect_to' value='https://galsendev.com/' />
            <b-field>
              <b-input placeholder="Nom" v-model="nom" name="name"></b-input>
            </b-field>
            <b-field>
              <b-input placeholder="Email" v-model="email" name="email"></b-input>
            </b-field>
            <b-field>
              <b-input placeholder="Message" type="textarea" v-model="message" name="message"></b-input>
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
  }
</script>
