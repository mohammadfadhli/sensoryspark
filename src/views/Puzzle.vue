

<template>
    <h1 class="font-bold text-5xl text-orange text-center my-5">Puzzle</h1>

    <p>Remaining pairs: {{ remainingPairs }}</p>
    <button @click="restartGame">restart Game</button>
    <div class="flex">
        <div
            class="bg-yellow px-5 py-1 hover:bg-green rounded-md border border-green w-auto flex items-center justify-center"
            :class="$route.name === 'easy' ? 'bg-green rounded-md font-semibold' : ''"
        >
            <router-link :to="{ name: 'easy' }">Easy</router-link>
        </div>
        <div
            class="bg-yellow px-5 py-1 hover:bg-green rounded-md border border-green w-auto flex items-center justify-center"
            :class="$route.name === 'medium' ? 'bg-green rounded-md font-semibold' : ''"
        >
            <router-link :to="{ name: 'medium' }">Medium</router-link>
        </div>
        <div
            class="bg-yellow px-5 py-1 hover:bg-green rounded-md border border-green w-auto flex items-center justify-center"
            :class="$route.name === 'hard' ? 'bg-green rounded-md font-semibold' : ''"
        >
            <router-link :to="{ name: 'hard' }">Hard</router-link>
        </div>
    </div>
    <div class="border border-green rounded-sm p-2">
        <Time :startStatus="$route.name === 'easy' ? store.easyStartStatus : $route.name === 'medium' ? store.mediumStartStatus : store.hardStartStatus" />
        <router-view/>
    </div>


    <transition-group tag="section" name="shuffle-card"
    class="game-board grid grid-rows-4 grid-flow-col justify-center gap-4">
        <Card v-for="card in cardList" 
            :key = "`${card.value}-${card.variant}`" 
            :value = "card.value" 
            :visible = "card.visible"
            :indexCard = "card.indexCard"
            :matched = "card.matched"
            @select-card = "flipCard"/>
    </transition-group>

</template>

<script>
    import Card from '@/components/Card.vue';
    import {ref, watch, computed} from 'vue';
    import Time from "@/components/Time.vue";
    import { useTimeStore } from "@/stores/useTimeStore";

const store = useTimeStore();

    export default {

        components: {
            Card
        },
        setup() {
            const cardList = ref([]);
            const userSelection = ref([]);
            const newPlayer = ref(true);

            const startGame = () => {
                newPlayer.value = false;
            };


            const Gamestatus = computed(() => {
                if (remainingPairs == 0) {
                    return "Player wins!";
                }
                else {
                    return `Remaining Pairs: ${remainingPairs.value}`;
                }
            });


            // get no. of remaining pairs
            const remainingPairs = computed(() => {
                return cardList.value.filter( card => card.matched == false).length / 2;
            });

            const shuffleCards = () => {
                cardList.value = cardList.value.sort(() => Math.random() - 0.5);
            };

            const restartGame = () => {
                shuffleCards();

                cardList.value = cardList.value.map((card, index) => {
                    return {
                        ...card,
                        matched: false,
                        indexCard: index,
                        visible: false
                        
                    };
                })
            };

            // put the pic name here
            const cardsDeck = [1,2,3,4,5,6,7,8];

            cardsDeck.forEach(item => {
                cardList.value.push({
                    value: item,
                    visible: true,
                    indexCard: null,
                    matched: false,
                    variant: 1
                });

                cardList.value.push({
                    value: item,
                    visible: true,
                    indexCard: null,
                    matched: false,
                    variant: 2
                });
            });

            cardList.value = cardList.value.map((card, index) => {
                return {
                    ...card,
                    indexCard: index
                };
            });

            const flipCard = (payload) => {

                // Checking if has 2 cards opened to lock the possibility to open others
                const hasCardsOpenedThatNotMatch = cardList.value.filter(item=>{
                    return item.matched === false && item.visible === true
                })
                
                if (hasCardsOpenedThatNotMatch.length <= 1 && !cardList.value[payload.indexCard].visible) {
                    // startStatus.value = constants.TIMER_START;
                    cardList.value[payload.indexCard].visible = true;
                    // clicks.value++;

                    if (userSelection.value[0]) {
                    // Check if clicked on the exactly same card
                        if (userSelection.value[0].indexCard != payload.indexCard) {
                            userSelection.value[1] = payload;
                        }
                    } 
                    else { 
                        userSelection.value[0] = payload;
                    };
                }      
            }
            

            watch(userSelection, (currentValue) => {
                if (currentValue.length === 2) {
                    console.log("That's it")
                    const firstCard = currentValue[0];
                    const secondCard = currentValue[1];


                    if (firstCard.faceValue === secondCard.faceValue) {

                        cardList.value[firstCard.indexCard].matched = true;

                        cardList.value[secondCard.indexCard].matched = true;
                    }
                    else {
                        
                        setTimeout(() => {
                            cardList.value[firstCard.indexCard].visible = false;

                            cardList.value[secondCard.indexCard].visible = false;
                        }, 2000);
                        
                    }
                
                    userSelection.value.length = 0;
                }

            },
            {
                deep: true
            });


            return {
                cardList,
                flipCard,
                userSelection,
                Gamestatus,
                shuffleCards,
                restartGame,
                remainingPairs,
                startGame
            };
        }
        
    }

</script>

<style>

    .shuffle-card-move {
        transition: transform 0.8s ease-in;
    }

</style>