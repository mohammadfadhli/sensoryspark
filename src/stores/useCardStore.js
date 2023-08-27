import { ref, watch, computed } from 'vue';
import { defineStore } from "pinia";
import constants from "@/assets/constants";
import { useTimeStore } from "@/stores/useTimeStore";
import { useRouter } from 'vue-router';
import cardsOnDeck from '@/assets/cardsDeck.json';


export const useCardStore = defineStore("CardStore", () => {

  const cardList = ref([]);
  const userSelection = ref([]);
  const newPlayer = ref(true);
  const winModal = ref(false);
  const userCanFlipCard = ref(false);
  const isStart = ref(false);

  const router = useRouter();
  const store = useTimeStore();

  const startGame = () => {
    newPlayer.value = false;
  };

  const Gamestatus = computed(() => {
    if (remainingPairs.value === 0) {
      return "Congratulations, you won!";
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


  const cardsDeck = cardsOnDeck;

  watch(() => router.currentRoute.value.name, (newRouteName) => {
    if (newRouteName === 'easy') {
      cardsDeck.value = cardsOnDeck.slice(0,6);
    } else if (newRouteName === 'medium') {
      cardsDeck.value = cardsOnDeck.slice(0,8);
    } else {
      cardsDeck.value = cardsOnDeck.slice(0,12);
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
