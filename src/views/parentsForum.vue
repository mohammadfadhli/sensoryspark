<script>
    export default{
        data(){
            return {
                newMessage: ''
            };
        },
        methods:{
        }

    }
</script>

<template>
    <div>
      <form @submit.prevent="sendMessage">
        <input v-model="newMessage" type="text" placeholder="Share your thoughts" />
        <button type="submit">Send</button>
      </form>
    </div>

  </template>
