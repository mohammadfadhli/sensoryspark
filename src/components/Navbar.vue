<script setup>
import { signOut } from "firebase/auth";
import { initFlowbite } from "flowbite";
import { onMounted, ref } from "vue";
import { auth } from "../../firebaseConfig";

const username = ref(localStorage.getItem("username"));
const email = ref(localStorage.getItem("email"));

onMounted(() => {
    initFlowbite();
});

const handleSignOut = () => {
    console.log("log out?");
    signOut(auth)
        .then(() => {
            // Sign-out successful.
            localStorage.removeItem("username");
            localStorage.removeItem("email");
            window.location.href = "/";
        })
        .catch((error) => {
            // An error happened.
        });
};
</script>

<style>
.bg-gold {
    background-color: #d5cb6f;
}
</style>

<template>
    <nav class="bg-gold border-gray-200">
        <div
            class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
        >
            <!-- <a href="#" class="flex items-center">
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SensorySpark</span>
            </a> -->
            <div class="flex items-center md:order-2">
                <button
                    type="button"
                    class="flex mr-3 text-sm bg-transparent rounded-full md:mr-0 px-4 py-1"
                    id="user-menu-button"
                    aria-expanded="false"
                    data-dropdown-toggle="user-dropdown"
                    data-dropdown-placement="bottom"
                >
                    <span class="sr-only">Open user menu</span>

                    <div class="grid grid-cols-2 gap-1 hover:scale-105">
                        <img
                            class="w-10 h-full mx-auto"
                            src="../assets/user.png"
                            alt="user photo"
                        />
                        <div>
                            <h1 class="w-full font-bold text-start">{{ username }}</h1>
                            <h1 class="text-start">Student</h1>
                        </div>
                    </div>

                </button>
                <!-- Dropdown menu -->
                <div
                    class="z-50 hidden my-4 text-base list-none divide-y divide-[#D5CB6F] rounded-lg shadow"
                    id="user-dropdown"
                >
                    <div class="px-4 py-3">
                        <span class="block text-sm text-gray-900">{{
                            username
                        }}</span>
                        <span class="block text-sm text-gray-500 truncate">{{
                            email
                        }}</span>
                    </div>
                    <ul class="py-2" aria-labelledby="user-menu-button">
                        <li>
                            <button
                                @click.prevent="handleSignOut"
                                class="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:font-bold"
                            >
                                Sign out
                            </button>
                        </li>
                    </ul>
                </div>
                <button
                    data-collapse-toggle="navbar-user"
                    type="button"
                    class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="navbar-user"
                    aria-expanded="false"
                >
                    <span class="sr-only">Open main menu</span>
                    <svg
                        class="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
            </div>
            <div
                class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                id="navbar-user"
            >
                <ul
                    class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0"
                >
                    <li>
                        <a
                            href="/puzzle"
                            class="block py-2 pl-3 pr-4 text-xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange md:p-0 hover:scale-105"
                            >Puzzles</a
                        >
                    </li>
                    <li>
                        <a
                            href="/math"
                            class="block py-2 pl-3 pr-4 text-xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange md:p-0"
                            >Maths</a
                        >
                    </li>
                    <li>
                        <a
                            href="/tutorGPT"
                            class="block py-2 pl-3 pr-4 text-xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange md:p-0 hover:scale-105"
                            >TutorGPT</a
                        >
                    </li>
                    <li>
                        <a
                            href="/parentsForum"
                            class="block py-2 pl-3 pr-4 text-xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange md:p-0 hover:scale-105"
                            >Parents' Forum</a
                        >
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
