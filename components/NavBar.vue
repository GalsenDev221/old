<template>
    <b-navbar class="navbar is-fixed-top">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="../static/galsendev.png"
                    alt="The home of senegalese developers!"
                >
            </b-navbar-item>
        </template>

        <template slot="end">
            <b-navbar-item class="bt-m" tag="router-link" :to="{ path: '/' }">
                Acceuil
            </b-navbar-item>
            <b-navbar-item class="bt-m" href="#">
                A Propos
            </b-navbar-item>
            <b-navbar-item class="bt-m" href="#events">
                Événements
            </b-navbar-item>
            <b-navbar-item class="bt-m" href="#contact">
                Contact
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<style>
.bt-m{
    font-weight: bolder;
}
</style>
