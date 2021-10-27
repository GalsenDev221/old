<template>
  <b-navbar :fixed-top="true" :shadow="true">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="../assets/images/galsen-dev.webp"
          alt="La maison des développeurs sénégalais!"
        />
      </b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item class="bt-m" tag="router-link" :to="{ path: '/' }">
        Accueil
      </b-navbar-item>
      <b-navbar-item
        class="bt-m"
        tag="router-link"
        :to="{ path: '/blog' }"
        href="/blog"
      >
        Blog
      </b-navbar-item>
      <b-navbar-item
        class="bt-m"
        tag="router-link"
        :to="{ path: '/#activites' }"
        href="/#activites"
      >
        Activités
      </b-navbar-item>
      <b-navbar-item
        class="bt-m"
        tag="router-link"
        :to="{ path: '/#contact' }"
        href="/#contact"
      >
        Contact
      </b-navbar-item>
      <b-navbar-item
        class="bt-m"
        href="https://ko-fi.com/galsendev221"
        target="_blank"
        rel="noopener"
      >
        Faire un don &nbsp;&nbsp;
        <b-icon pack="fas" icon="donate" size="is-small"></b-icon>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
