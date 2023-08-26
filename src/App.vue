<script setup>
  import Navbar from './components/Navbar.vue';
  import { useFirebaseStore } from './stores/firebasestore';

  const store=useFirebaseStore();

</script>

<template>
  <Navbar v-if="!(['login','signUp'].includes($route.name))"/>
  <RouterView />
</template>
