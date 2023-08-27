<script setup>
  import Navbar from './components/Navbar.vue';
  import { onMounted, ref } from 'vue';
  import { auth } from '../firebaseConfig';
  import { onAuthStateChanged } from 'firebase/auth';

  const isLoggedIn = ref(false);

  onMounted(() => {
    onAuthStateChanged(auth, (user) => {
      if(user) {
        isLoggedIn.value = true;
      }
      else
      {
        isLoggedIn.value = false;
      }
    })
  })

</script>

<template>
  <Navbar v-if="!(['login','signUp'].includes($route.name))"/>
  <div class="m-10">
    <RouterView />
  </div>
</template>
