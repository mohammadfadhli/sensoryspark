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
            selectCard,
        };
    }

}

</script>

<template>
    <div class="card relative w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 relative text-center preserve-3d rotate-y-180 transition ease-in duration-500 cursor-pointer hover:bg-yellow flex flex-wrap justify-center content-center" 
        :class="visible ? 'bg-yellow border border-green w-full h-full rotate-y-180 absolute rounded-lg' : 'bg-orange w-full h-full rounded-lg'"
        @click="selectCard"
    >
        {{ value }}
        <img v-if="!visible" class="lg:w-28 lg:h-28 md:w-16 md:h-16" src="../assets/backmonster.png">
    </div>
</template>