<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>

<style>
.bg-gold{
    background-color: #D5CB6F;
}
</style>

<template>
    <nav class="bg-gold border-gray-200">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <!-- <a href="#" class="flex items-center">
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SensorySpark</span>
            </a> -->
            <div class="flex items-center md:order-2">
                <button type="button"
                    class="flex mr-3 text-sm bg-transparent rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300"
                    id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown"
                    data-dropdown-placement="bottom">
                    <span class="sr-only">Open user menu</span>
                    <img class="w-8 h-8 rounded-full" src="../assets/mascot.png" alt="user photo">
                    <span>
                        <span class="w-full font-bold">Username</span>
                        <br>
                        <span class="w-full">Student</span>
                    </span>
                </button>
                <!-- Dropdown menu -->
                <div class="z-50 hidden my-4 text-base list-none divide-y divide-gray-100 rounded-lg shadow"
                    id="user-dropdown">
                    <div class="px-4 py-3">
                        <span class="block text-sm text-gray-900">Username</span>
                        <span class="block text-sm  text-gray-500 truncate">name@email.com</span>
                    </div>
                    <ul class="py-2" aria-labelledby="user-menu-button">
                        <li>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Dashboard</a>
                        </li>
                        <li>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                        </li>
                        <li>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Earnings</a>
                        </li>
                        <li>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign
                                out</a>
                        </li>
                    </ul>
                </div>
                <button data-collapse-toggle="navbar-user" type="button"
                    class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="navbar-user" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
            </div>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                <ul
                    class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                    <li>
                        <a href="#"
                            class="block py-2 pl-3 pr-4 text-orange-500 rounded md:bg-transparent md:text-orange-500 md:p-0"
                            aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="/puzzle/easy"
                            class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Puzzles</a>
                    </li>
                    <li>
                        <a href="/tutorGPT"
                            class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">TutorGPT</a>
                    </li>
                    <li>
                        <a href="/parentsForum"
                            class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Parents'
                            Forum</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>