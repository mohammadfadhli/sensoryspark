<script setup>
  import Navbar from './components/Navbar.vue';
</script>

<template>
  <Navbar v-if="!(['login','signUp'].includes($route.name))"/>
  <RouterView />
</template>
