<script setup>
import constants from "@/assets/constants";
import { useTimeStore } from "@/stores/useTimeStore";

const store = useTimeStore();

store.easyStartStatus = constants.TIMER_RESET;
store.mediumStartStatus = constants.TIMER_RESET;
store.hardStartStatus = constants.TIMER_START;
</script>

<template>
</template>