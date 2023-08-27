<script setup>
import { terminate } from "firebase/firestore";
import { ref } from "vue";

let first_number = Math.floor(Math.random() * 9) + 1;
let second_number = Math.floor(Math.random() * 9) + 1;

let random_emoji_list = [
    "😘",
    "😝",
    "😇",
    "🥳",
    "😀",
    "🤭",
    "😎",
    "😉",
    "🤯",
    "🤣",
];
let random_emoji_one = random_emoji_list[first_number - 1];
let random_emoji_two = random_emoji_list[second_number - 1];

let correct_result = first_number + second_number;

function reloadPage() {
    window.location.reload();
}

</script>

<style>
.flip {
    width: 50px;
    height: 50px;
    text-align: center;
    perspective: 1000px;
}

.flip-content {
    width: 100%;
    height: 100%;
    transition: transform 0.4s;
    transform-style: preserve-3d;
}

.flip:hover .flip-content {
    transform: rotateY(180deg);
    transition: transform 0.3s;
}


.flip-front,
.flip-back {
    position: absolute;
    height: 100%;
    width: 100%;
    line-height: 10px;
    backface-visibility: hidden;
    color: #fff;
    background-color: lightseagreen;
    border: 6px solid lightcoral;
    box-shadow: 6px 6px lightseagreen;
}

.flip-back {
    transform: rotateY(180deg);
    border: 6px solid lightseagreen;
    box-shadow: 6px 6px lightcoral;
}
</style>

<template>

<h1 class="font-bold text-5xl text-orange text-center my-5">Let's learn Math!</h1>

    <div class="container mx-auto flex items-center justify-content-center">

        

        <div class="container max-w-[1024px] mx-10 p-3 mt-20">
            <div class="grid grid-cols-5 gap-1">
                <div>
                    <h1 class="text-black text-3xl">{{ first_number }}</h1>
                    <div><span v-for="n in first_number">{{
                        random_emoji_one }}</span></div>
                </div>

                <div>
                    <h1 class="text-black text-3xl">+</h1>
                </div>

                <div>
                    <h1 class="text-black text-3xl">{{ second_number }}</h1>
                    <div><span v-for="n in second_number">{{
                        random_emoji_two }}</span></div>
                </div>

                <div>
                    <h1 class="text-black text-3xl">=</h1>
                </div>

                <div>
                    <div class="flip">
                        <div class="flip-content">
                            <div class="flip-front">
                                <img src="../assets/Monsters - Head.png" />
                            </div>
                            <div class="flip-back">
                                <h1 class="text-white text-3xl">{{ correct_result }}</h1>

                            </div>
                        </div>
                    </div>
                    <div class="mt-5"><span v-for="n in first_number">{{ random_emoji_one }}</span><span
                            v-for="n in second_number">{{
                                random_emoji_two }}</span></div>
                </div>
            </div>
        </div>

        <div @click="reloadPage()">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
        </div>
    </div>
</template>
