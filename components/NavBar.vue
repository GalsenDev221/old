<template>
  <b-navbar :fixed-top="true" :shadow="true">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="../static/galsen-dev.webp"
          alt="Galsen DEV"
        />
      </b-navbar-item>
    </template>

    <template slot="end">
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