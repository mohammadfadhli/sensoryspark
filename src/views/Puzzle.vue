<script setup>
import { ref, watch } from "vue";
import Time from "@/components/Time.vue";
import Card from "../components/Card.vue";
import { useTimeStore } from "@/stores/useTimeStore";
import { useCardStore } from "@/stores/useCardStore";

const store = useTimeStore();
const cardstore = useCardStore();

const isActive = ref(false);

const flipCard = payload => {
  if (cardstore.userCanFlipCard) {
    cardstore.cardList[payload.indexCard].visible = true;

    if (cardstore.userSelection[0]) {
      if (
        cardstore.userSelection[0].indexCard === payload.indexCard &&
        cardstore.userSelection[0].indexCard === payload.faceValue
      ) {
        return;
      } else {
        cardstore.userSelection[1] = payload;
      }
    } else {
        cardstore.userSelection[0] = payload;
    }
  } else {
    return;
  }
};

watch(
    cardstore.userSelection,
  currentValue => {
    if (currentValue.length === 2) {
      const cardOne = currentValue[0];
      const cardTwo = currentValue[1];
      // Disable ability to flip cards
      cardstore.userCanFlipCard = false;

      if (cardOne.faceValue === cardTwo.faceValue) {
        cardstore.cardList[cardOne.indexCard].matched = true;
        cardstore.cardList[cardTwo.indexCard].matched = true;
        cardstore.userCanFlipCard = true;
      } else {
        setTimeout(() => {
            cardstore.cardList[cardOne.indexCard].visible = false;
            cardstore.cardList[cardTwo.indexCard].visible = false;
          // Allow user to flip a new card
          cardstore.userCanFlipCard = true;
        }, 2000);
      }

      cardstore.userSelection.length = 0;
    }
  },
  { deep: true }
);
</script>

<template>
    <div>
        <h1 class="font-bold text-5xl text-orange text-center my-5">Puzzle</h1>
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
            <p>{{cardstore.Gamestatus}}</p>
            <button 
                class="mt-4 bg-orange text-white hover:bg-white hover:text-orange hover:border hover:border-orange px-4 py-2 rounded" 
                @click="cardstore.restartGame"
            >
                Reshuffle
            </button>
            <Time v-show="cardstore.isStart" class="mb-5" :startStatus="$route.name === 'easy' ? store.easyStartStatus : $route.name === 'medium' ? store.mediumStartStatus : store.hardStartStatus" />
            <h2 v-show="!cardstore.isStart" class="flex text-2xl mb-5 roboto-mono justify-center content-center">Memorise as much as you can!</h2>
            <transition-group tag="section" name="shuffle-card"
                class="game-board grid grid-rows-4 grid-flow-col justify-center gap-4"
            >
                <Card v-for="card of cardstore.cardList"
                    :key = "`${card.value}-${card.variant}`"
                    :value = "card.value"
                    :visible = "card.visible"
                    :indexCard = "card.indexCard"
                    :matched = "card.matched"
                    @select-card="flipCard"/>
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