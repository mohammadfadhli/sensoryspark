<script>
export default {
    props: {
        indexCard: {
            type: Number,
            required: true
        },
        value :{
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
    },

    setup(props, context) {
        const selectCard = () => {
            context.emit("select-card", {
                indexCard: props.indexCard,
                faceValue: props.value
            })
        };

        return {
            selectCard
        };
    }

}
</script>

<script setup>
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
    <div class="card relative sm:w-10 sm:h-10 md:w-24 md:h-24 lg:w-32 lg:h-32 relative text-center preserve-3d rotate-y-180 transition ease-in duration-500 cursor-pointer hover:bg-yellow flex flex-wrap justify-center content-center" 
        :class="visible ? 'bg-yellow border border-green w-full h-full rotate-y-180 absolute rounded-lg' : 'bg-orange w-full h-full rounded-lg'"
        @click="selectCard"
    >
        <p>{{ value }}</p>
        <img v-if="visible" class="md:w-12 md:h-12 lg:w-24 lg:h-24" :src="`${shapes[value]}`"/>
        <img v-else class="md:w-16 md:h-16 lg:w-28 lg:h-28" src="@/assets/backmonster.png">
    </div>
</template>