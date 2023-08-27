import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useTimeStore = defineStore('time', () => {
    const easyStartStatus = ref(null);
    const mediumStartStatus = ref(null);
    const hardStartStatus = ref(null);

    return {
        easyStartStatus,
        mediumStartStatus,
        hardStartStatus,
    };
});
