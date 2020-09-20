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
            <b-navbar-item href="#">
                <strong>Acceuil</strong>
            </b-navbar-item>
            <b-navbar-item href="#">
                <strong>A Propos</strong>
            </b-navbar-item>
            <b-navbar-item href="#">
                <strong>Événements</strong>
            </b-navbar-item>
            <b-navbar-item href="#">
                <strong>Contact</strong>
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