<script setup>
import { defineProps, defineEmits } from 'vue';

import circle from '@/assets/shapes/circle.png';
import cone from '@/assets/shapes/cone.png';
import heptagon from '@/assets/shapes/heptagon.png';
import hexagon from '@/assets/shapes/hexagon.png';
import kite from '@/assets/shapes/kite.png';
import nonagon from '@/assets/shapes/nonagon.png';
import octagon from '@/assets/shapes/octagon.png';
import semicircle from '@/assets/shapes/semicircle.png';
import square from '@/assets/shapes/square.png';
import star from '@/assets/shapes/star.png';
import trapezium from '@/assets/shapes/trapezium.png';
import triangle from '@/assets/shapes/triangle.png';

const props = defineProps({
  indexCard: {
    type: Number,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  visible: {
    type: Boolean,
    default: false
  },
  matched: {
    type: Boolean,
    default: false
  }
});

const emits = defineEmits(["select-card"]);

const selectCard = () => {
    emits("select-card", {
        indexCard: props.indexCard,
        faceValue: props.value
    });
};

const shapes = { 
    circle : circle,
    cone : cone,
    heptagon : heptagon,
    hexagon : hexagon,
    kite : kite,
    nonagon : nonagon,
    octagon : octagon,
    semicircle : semicircle,
    square : square,
    star : star,
    trapezium: trapezium,
    triangle : triangle
}
</script>

<template>
    <div class="card relative md:w-24 md:h-24 w-16 h-16 relative text-center preserve-3d rotate-y-180 transition ease-in duration-500 cursor-pointer hover:bg-yellow flex flex-wrap justify-center content-center" 
        :class="visible ? 'bg-yellow border border-green w-full h-full rotate-y-180 absolute rounded-lg' : 'bg-orange w-full h-full rounded-lg'"
        @click="selectCard"
    >
        <div v-if="visible" class="py-auto pb-1">
            <p class="text-xs md:text-base">{{ value }}</p>
            <img class="mx-auto md:w-12 md:h-12 w-8 h-8" :src="`${shapes[value]}`"/>
        </div>
        <div v-else>
            <img class="mx-auto md:w-16 md:h-16 w-10 h-10" src="@/assets/backmonster.png">
        </div>
    </div>
</template>