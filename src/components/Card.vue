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
import decagon from '@/assets/shapes/decagon.png';
import heptagon from '@/assets/shapes/heptagon.png';
import hexagon from '@/assets/shapes/hexagon.png';
import nonagon from '@/assets/shapes/nonagon.png';
import octagon from '@/assets/shapes/octagon.png';
import pentagon from '@/assets/shapes/pentagon.png';
import rhombus from '@/assets/shapes/rhombus.png';
import semicircle from '@/assets/shapes/semicircle.png';
import square from '@/assets/shapes/square.png';
import trapezium from '@/assets/shapes/trapezium.png';
import triangle from '@/assets/shapes/triangle.png';

const shapes = {
    circle: circle,
    decagon: decagon,
    heptagon: heptagon,
    hexagon: hexagon,
    nonagon: nonagon,
    octagon: octagon,
    pentagon: pentagon,
    semicircle: semicircle,
    square: square,
    trapezium: trapezium,
    triangle: triangle,
}
</script>

<template>
    <div class="card relative sm:w-10 sm:h-10 md:w-24 md:h-24 lg:w-32 lg:h-32 relative text-center preserve-3d rotate-y-180 transition ease-in duration-500 cursor-pointer hover:bg-yellow flex flex-wrap justify-center content-center" 
        :class="visible ? 'bg-yellow border border-green w-full h-full rotate-y-180 absolute rounded-lg' : 'bg-orange w-full h-full rounded-lg'"
        @click="selectCard"
    >
        <p>{{ value }}</p>
        <img v-if="visible" :src="`${shapes[value]}`"/>
        <img v-else class="md:w-16 md:h-16 lg:w-28 lg:h-28" src="@/assets/backmonster.png">
    </div>
</template>