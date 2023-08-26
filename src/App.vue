<script setup>
  import Navbar from './components/Navbar.vue';
</script>

<template>
  <Navbar v-if="['Login', 'SignUp'].includes(!$route.name)"/>
  
  <RouterView />
</template>
