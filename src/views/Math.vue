<script setup>
import { terminate } from 'firebase/firestore';
import { ref } from 'vue'

let first_number = Math.floor(Math.random() * 9) + 1
let second_number = Math.floor(Math.random() * 9) + 1

let random_emoji_list = ['😘', '😝', '😇', '🥳', '😀', '🤭', '😎', '😉', '🤯', '🤣']
let random_emoji_one = random_emoji_list[first_number - 1]
let random_emoji_two = random_emoji_list[second_number - 1]

let correct_result = first_number + second_number

</script>

<template>
    <div class="container mx-auto flex items-center">
        <div class="container max-w-[1024px] mx-10 p-3 mt-20">
            <div class="grid grid-cols-5 gap-4 flex justify-items-center">
                <div class="group h-100 w-20">
                    <div class="relative h-full w-full">
                        <div class="absolute inset-0">
                            <h1 class="text-black text-9xl">{{ first_number }}</h1>
                            <div><span v-for="n in first_number">{{
                                random_emoji_one }}</span></div>
                        </div>
                    </div>
                </div>

                <div class="group h-100 w-20">
                    <div class="relative h-full w-full">
                        <div class="absolute inset-0">
                            <h1 class="text-black text-9xl">+</h1>
                        </div>
                    </div>
                </div>

                <div class="group h-100 w-20">
                    <div class="relative h-full w-full">
                        <div class="absolute inset-0">
                            <h1 class="text-black text-9xl">{{ second_number }}</h1>
                            <div><span v-for="n in second_number">{{
                                random_emoji_two }}</span></div>
                        </div>
                    </div>
                </div>

                <div class="group h-96 w-20">
                    <div class="relative h-full w-full">
                        <div class="absolute inset-0">
                            <h1 class="text-black text-9xl">=</h1>
                        </div>
                    </div>
                </div>


                <div class="group h-100 w-20">
                    <div class="group h-96 w-80 [perspective:1000px]">
                        <div
                            class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                            <div class="absolute inset-0">
                                <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                                    src="../assets/Monsters - Head.png" alt="" />
                            </div>
                            <div
                                class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <div class="flex min-h-full flex-col items-center justify-center">
                                    <h1 class="text-white text-9xl">{{ correct_result }}</h1>
                                    <div><span v-for="n in first_number">{{ random_emoji_one }}</span><span
                                            v-for="n in second_number">{{
                                                random_emoji_two }}</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>