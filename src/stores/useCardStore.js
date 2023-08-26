import { ref, computed } from 'vue';
import { defineStore } from "pinia";


export const useCardStore = defineStore("CardStore", () => {

  const cardList = ref([]);
  const userSelection = ref([]);
  const newPlayer = ref(true);

  const startGame = () => {
    newPlayer.value = false;
  };

  const Gamestatus = computed(() => {
    if (remainingPairs.value === 0) {
      return "Player wins!";
    } else {
      return `Remaining Pairs: ${remainingPairs.value}`;
    }
  });

  const remainingPairs = computed(() => {
    return cardList.value.filter(card => !card.matched).length / 2;
  });

  const shuffleCards = () => {
    cardList.value = cardList.value.sort(() => Math.random() - 0.5);
  };

  const restartGame = () => {
    shuffleCards();

    cardList.value = cardList.value.map((card, index) => ({
      ...card,
      matched: false,
      indexCard: index,
      visible: false,
    }));
  };

  const cardsDeck = ["1", "2", "3", "4", "5", "6", "7", "8"];

  cardsDeck.forEach(item => {
    cardList.value.push({
      value: item,
      visible: true,
      indexCard: null,
      matched: false,
      variant: 1,
    });

    cardList.value.push({
      value: item,
      visible: true,
      indexCard: null,
      matched: false,
      variant: 2,
    });
  });

  cardList.value = cardList.value.map((card, index) => ({
    ...card,
    indexCard: index,
  }));

  return {
    cardList,
    userSelection,
    Gamestatus,
    shuffleCards,
    restartGame,
    remainingPairs,
    startGame,
  };
});
