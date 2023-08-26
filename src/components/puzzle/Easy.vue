<script setup>
import constants from "@/assets/constants";
import { useTimeStore } from "@/stores/useTimeStore";
import { useCardStore } from "@/stores/useCardStore";

const store = useTimeStore();
const cardstore = useCardStore();

store.easyStartStatus = constants.TIMER_START;
store.mediumStartStatus = constants.TIMER_RESET;
store.hardStartStatus = constants.TIMER_RESET;

cardstore.restartGame();
</script>

<template>
</template>