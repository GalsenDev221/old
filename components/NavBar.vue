<template>
    <b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="../assets/galsendev.png"
                    alt="The home of senegalese developers!"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item href="#">
                Acceuil
            </b-navbar-item>
            <b-navbar-item href="#">
                Événements
            </b-navbar-item>
            <b-navbar-item href="#">
                A Propos
            </b-navbar-item>
            <b-navbar-item href="#">
                Contact
            </b-navbar-item>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-info">
                        <strong>Ressources</strong>
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
export default {
    components: {
    NavBar
  }
}
</script>