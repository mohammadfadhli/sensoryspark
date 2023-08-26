<script setup>
import Time from "@/components/Time.vue";
import Card from "../components/Card.vue";
import { useTimeStore } from "@/stores/useTimeStore";
import { useCardStore } from "@/stores/useCardStore";

const store = useTimeStore();
const cardstore = useCardStore();

console.log(cardstore.cardList)

for (const card of cardstore.cardList.value) {
    console.log(card)
}

</script>

<template>
    <div>
        <h1 class="font-bold text-5xl text-orange text-center my-5">Puzzle</h1>
        <p>Remaining pairs: {{ cardstore.remainingPairs }}</p>
        <button @click="cardstore.restartGame">restart Game</button>
        <div class="flex">
            <div
                class="bg-yellow px-5 py-1 hover:bg-green rounded-md border border-green w-auto flex items-center justify-center"
                :class="$route.name === 'easy' ? 'bg-green font-semibold' : ''"
            >
                <router-link :to="{ name: 'easy' }">Easy</router-link>
            </div>
            <div
                class="bg-yellow px-5 py-1 hover:bg-green rounded-md border border-green w-auto flex items-center justify-center"
                :class="$route.name === 'medium' ? 'bg-green font-semibold' : ''"
            >
                <router-link :to="{ name: 'medium' }">Medium</router-link>
            </div>
            <div
                class="bg-yellow px-5 py-1 hover:bg-green rounded-md border border-green w-auto flex items-center justify-center"
                :class="$route.name === 'hard' ? 'bg-green font-semibold' : ''"
            >
                <router-link :to="{ name: 'hard' }">Hard</router-link>
            </div>
        </div>
        <div class="border border-green rounded-sm p-2">
            <Time :startStatus="$route.name === 'easy' ? store.easyStartStatus : $route.name === 'medium' ? store.mediumStartStatus : store.hardStartStatus" />
                <transition-group tag="section" name="shuffle-card"
                    class="game-board grid grid-rows-4 grid-flow-col justify-center gap-4"
                >
                    <Card v-for="card of cardstore.cardList.value"
                        :key = "`${card.value}-${card.variant}`"
                        :value = "card.value"
                        :visible = "card.visible"
                        :indexCard = "card.indexCard"
                        :matched = "card.matched"
                        @select-card="cardstore.flipCard"/>
                </transition-group>
            <router-view/>
        </div>
    </div>


</template>

<style scoped>
    .shuffle-card-move {
        transition: transform 0.8s ease-in;
    }
</style>