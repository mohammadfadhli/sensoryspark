import { ref, computed, watch } from 'vue';


export const useCardStore = () => {
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

  const flipCard = payload => {
    const hasCardsOpenedThatNotMatch = cardList.value.filter(
      item => item.matched === false && item.visible === true
    );

    if (
      hasCardsOpenedThatNotMatch.length <= 1 &&
      !cardList.value[payload.indexCard].visible
    ) {
      cardList.value[payload.indexCard].visible = true;

      if (userSelection.value[0]) {
        if (userSelection.value[0].indexCard !== payload.indexCard) {
          userSelection.value[1] = payload;
        }
      } else {
        userSelection.value[0] = payload;
      }
    }
  };

  watch(userSelection, currentValue => {
    if (currentValue.length === 2) {
      const firstCard = currentValue[0];
      const secondCard = currentValue[1];

      if (firstCard.value === secondCard.value) {
        cardList.value[firstCard.indexCard].matched = true;
        cardList.value[secondCard.indexCard].matched = true;
      } else {
        setTimeout(() => {
          cardList.value[firstCard.indexCard].visible = false;
          cardList.value[secondCard.indexCard].visible = false;
        }, 2000);
      }

      userSelection.value.length = 0;
    }
  });

  return {
    cardList,
    flipCard,
    userSelection,
    Gamestatus,
    shuffleCards,
    restartGame,
    remainingPairs,
    startGame,
  };
};
