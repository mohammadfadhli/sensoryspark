<script setup>
import constants from "@/assets/constants";
import { useTimeStore } from "@/stores/useTimeStore";
import { useCardStore } from "@/stores/useCardStore";
import WinModal from "@/components/WinModal.vue";

const store = useTimeStore();
const cardstore = useCardStore();

store.easyStartStatus = constants.TIMER_RESET;
store.hardStartStatus = constants.TIMER_RESET;

cardstore.restartGame();
</script>

<template>
<div>
    {{cardstore.Gamestatus}}
    <WinModal v-if="cardstore.remainingPairs == 0"/>
</div>
</template>