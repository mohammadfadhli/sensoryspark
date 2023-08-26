import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useTimeStore = defineStore('time', () => {
    const startStatus = ref(null);

    return {
        startStatus,
    };
});
