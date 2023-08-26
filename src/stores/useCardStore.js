import { ref, watch, computed } from 'vue';
import { defineStore } from "pinia";
import constants from "@/assets/constants";
import { useTimeStore } from "@/stores/useTimeStore";
import { useRouter } from 'vue-router';

export const useCardStore = defineStore("CardStore", () => {

  const cardList = ref([]);
  const userSelection = ref([]);
  const newPlayer = ref(true);
  const winModal = ref(false);
  const userCanFlipCard = ref(false);
  const isStart = ref(false);
  const cardsDeck = ref([]);

  const router = useRouter();
  const store = useTimeStore();

  const startGame = () => {
    newPlayer.value = false;
  };

  const Gamestatus = computed(() => {
    if (remainingPairs.value === 0) {
      return "Congradulations, you won!";
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
    isStart.value = false;
    store.easyStartStatus = constants.TIMER_RESET;
    store.mediumStartStatus = constants.TIMER_RESET;
    store.hardStartStatus = constants.TIMER_RESET;

    cardList.value = cardList.value.map((card, index) => ({
      ...card,
      matched: false,
      indexCard: index,
      visible: true,
    }));

    setTimeout(() => {
      cardList.value.forEach(card => {
        card.visible = false;
      });
      userCanFlipCard.value = true;
      isStart.value = true;
      store.easyStartStatus = constants.TIMER_START;
      store.mediumStartStatus = constants.TIMER_START;
      store.hardStartStatus = constants.TIMER_START;
    }, 10000);
  };

  const populateCardList = () => {
    cardList.value = [];

    cardsDeck.value.forEach(item => {
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
  };

  watch(() => router.currentRoute.value.name, (newRouteName) => {
    if (newRouteName === 'easy') {
      cardsDeck.value = ["1", "2", "3", "4", "5", "6"];
    } else if (newRouteName === 'medium') {
      cardsDeck.value = ["1", "2", "3", "4", "5", "6", "7", "8"];
    } else {
      cardsDeck.value = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    }
    populateCardList();
  }, { immediate: true });

  return {
    cardsDeck,
    cardList,
    userCanFlipCard,
    userSelection,
    Gamestatus,
    isStart,
    shuffleCards,
    restartGame,
    remainingPairs,
    startGame,
    winModal,
  };
});
