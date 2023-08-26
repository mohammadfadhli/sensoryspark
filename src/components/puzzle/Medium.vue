<script setup>
import constants from "@/assets/constants";
import { useTimeStore } from "@/stores/useTimeStore";

const store = useTimeStore();

store.easyStartStatus = constants.TIMER_RESET;
store.mediumStartStatus = constants.TIMER_START;
store.hardStartStatus = constants.TIMER_RESET;
</script>

<template>
</template>