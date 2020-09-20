<template>
    <b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="../static/galsendev.png"
                    alt="The home of senegalese developers!"
                >
            </b-navbar-item>
        </template>

        <template slot="end">
            <b-navbar-item href="#">
                Acceuil
            </b-navbar-item>
            <b-navbar-item href="#">
                A Propos
            </b-navbar-item>
            <b-navbar-item href="#events">
                Événements
            </b-navbar-item>
            <b-navbar-item href="#contact">
                Contact
            </b-navbar-item>
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