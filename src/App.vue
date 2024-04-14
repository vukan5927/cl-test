<script setup lang="ts"></script>
<template>
  <header class="header">
    <router-link to="/">
      <img alt="Logo" class="header__logo" src="./assets/logo.svg" />
    </router-link>
    <span class="header__user">Vukan Vukotić</span>
  </header>
  <router-view />
</template>

<style lang="scss">
.header {
  background-color: $quinary-color;

  &__logo {
    width: 150px;
  }

  &__user {
    color: $primary-color;
    float: right;
    line-height: 48px;
    margin-right: 20px;
  }
}
</style>
