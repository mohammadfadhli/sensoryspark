<template>
    <div class="bg-FFF584 rounded-lg border border-D5CB6F p-4 mb-4">
    <h2 class="font-bold text-lg mb-1">{{ post.title }}</h2>
    <p class="text-sm text-gray-600 mb-2">{{ post.author }}</p>
    <p class="text-base">{{ post.description }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    post: Object,
});
</script>

<style>
/* Add custom styles here if needed */
</style>