<script setup>
import constants from "@/assets/constants";
import { useTimeStore } from "@/stores/useTimeStore";

const store = useTimeStore();

store.startStatus = constants.TIMER_RESET;
</script>

<template>
</template>