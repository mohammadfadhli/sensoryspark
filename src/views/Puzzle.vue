<script setup>
import { ref } from "vue";
import Time from "@/components/Time.vue";
import { useTimeStore } from "@/stores/useTimeStore";

const store = useTimeStore();
</script>

<template>
    <div class="flex">
        <div
            class="bg-yellow px-5 py-1 hover:bg-green rounded-md border border-green w-auto flex items-center justify-center"
            :class="$route.name === 'easy' ? 'bg-green rounded-md font-semibold' : ''"
        >
            <router-link :to="{ name: 'easy' }">Easy</router-link>
        </div>
        <div
            class="bg-yellow px-5 py-1 hover:bg-green rounded-md border border-green w-auto flex items-center justify-center"
            :class="$route.name === 'medium' ? 'bg-green rounded-md font-semibold' : ''"
        >
            <router-link :to="{ name: 'medium' }">Medium</router-link>
        </div>
        <div
            class="bg-yellow px-5 py-1 hover:bg-green rounded-md border border-green w-auto flex items-center justify-center"
            :class="$route.name === 'hard' ? 'bg-green rounded-md font-semibold' : ''"
        >
            <router-link :to="{ name: 'hard' }">Hard</router-link>
        </div>
    </div>
    <div class="border border-green rounded-sm p-2">
        <Time :startStatus="$route.name === 'easy' ? store.easyStartStatus : $route.name === 'medium' ? store.mediumStartStatus : store.hardStartStatus" />
        <router-view/>
    </div>
</template>