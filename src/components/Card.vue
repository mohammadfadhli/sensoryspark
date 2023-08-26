<script>

import {computed} from 'vue'

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

        const flippedStyles = computed(() => {
            if (props.visible) {
                return 'is-flipped'
            }
        });

        return {
            selectCard,
            flippedStyles
        };
    }

}

</script>

<template>

    <div class="card relative w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 relative text-center preserve-3d rotate-y-180 transition ease-in duration-500" :class="flippedStyles"  @click="selectCard">
        <div v-if="visible" class="card-face is-front w-full h-full rotate-y-180 absolute rounded-lg">
            {{ value }}
            <!-- <img :src="`${value}`" /> -->
        </div>

        <div v-else class="bg-green w-full h-full rounded-lg ">
            <img src="../assets/backcard.png">
        </div>

    </div>

</template>

<style>

    .card-face.is-front {
        background-color: red;
        color: white;
        
    }


</style>