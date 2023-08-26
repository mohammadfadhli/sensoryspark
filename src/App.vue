<script setup>
  import Navbar from './components/Navbar.vue';
</script>

<template>
  <Navbar v-if="$route.name!=='Login'"/>
  <RouterView />
</template>
