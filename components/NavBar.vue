<template>
    <b-navbar class="navbar is-fixed-top">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="../static/galsendev.png"
                    alt="La maison des développeurs sénégalais!"
                >
            </b-navbar-item>
        </template>

        <template slot="end">
            <b-navbar-item class="bt-m" tag="router-link" :to="{ path: '/' }">
                Accueil
            </b-navbar-item>
            <b-navbar-item class="bt-m" tag="router-link" :to="{ path: '/#activites' }" href="/#activites">
                Activités
            </b-navbar-item>
            <b-navbar-item class="bt-m" tag="router-link" :to="{ path: '/#contact' }" href="/#contact">
                Contact
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<style>
    .bt-m{
        font-weight: bolder;
    }
    .navbar{
        box-shadow: 0 2px 4px 0 rgb(121,87,213,.3);
    }
</style>
