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
    <div class="card relative w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 relative text-center preserve-3d rotate-y-180 transition ease-in duration-500 cursor-pointer hover:bg-yellow" 
        :class="visible ? 'bg-yellow border border-green w-full h-full rotate-y-180 absolute rounded-lg' : 'bg-orange w-full h-full rounded-lg'"
        @click="selectCard"
    >
        {{ value }}
        <img v-if="!visible" src="../assets/backcard.png">
    </div>
</template>