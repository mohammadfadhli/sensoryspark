<script setup>
import { useTimeStore } from "@/stores/useTimeStore";
import { useCardStore } from "@/stores/useCardStore";
import constants from "@/assets/constants";

const store = useTimeStore();
const cardstore = useCardStore();

store.easyStartStatus = constants.TIMER_STOP;
store.mediumStartStatus = constants.TIMER_STOP;
store.hardStartStatus = constants.TIMER_STOP;

function goBack() {
    window.location.reload();
}
</script>

<template>
    <div>
        <div id="modal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10 backdrop-blur-sm">
            <div class="bg-white shadow-lg rounded-lg p-6">
                <div class="flex items-center">
                    <img class="w-14" src="@/assets/mascotWin.png" alt="">
                    <h2 class="text-lg font-semibold mb-2 text-black">{{ cardstore.Gamestatus }}</h2>
                </div>
                <button id="closeModalBtn" class="mt-4 bg-orange text-white hover:bg-white hover:text-orange hover:border hover:border-orange px-4 py-2 rounded ml-auto" @click="goBack">Close</button>
            </div>
        </div>
    </div>
</template>