<script>
import { RouterLink, RouterView } from "vue-router";
import { auth } from "../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default {
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        onSubmit(e) {
            // e.preventDefault();
            console.log(this.username);
            console.log(this.password);
            console.log("login clicked");
            createUserWithEmailAndPassword(auth, this.email, this.password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    this.$router.push("/puzzle") 
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                });
        },
    },
};
</script>

<template>
    <div class="container max-w-[1024px] mx-auto p-3 mt-20">
        <div class="grid grid-cols-2 gap-4">
            <div class="font-bold text-3xl">
                <h1>Learning Made Easy</h1>
                <h1>with <a class="text-5xl text-orange">SensorySpark</a></h1>
                <img
                    src="../assets/mascot.png"
                    height="300"
                    width="300"
                    class="ms-14 mt-5"
                />
            </div>
            <div>
                <div>
                    <form @submit="onSubmit">
                        <div class="mt-5">
                            <label
                                for="username"
                                class="text-2xl font-bold ms-3"
                                >Username</label
                            ><br />
                            <input
                                type="text"
                                id="username"
                                name="username"
                                class="border-dashed border-2 border-orange rounded-full w-full p-2 bg-orange-25 focus:outline-none"
                            />
                        </div>

                        <div class="mt-5">
                            <label
                                for="password"
                                class="text-2xl font-bold ms-3"
                                >Email</label
                            ><br />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                v-model="email"
                                class="border-dashed border-2 border-orange rounded-full w-full p-2 bg-orange-25 focus:outline-none"
                            />
                        </div>

                        <div class="mt-5">
                            <label
                                for="password"
                                class="text-2xl font-bold ms-3"
                                >Password</label
                            ><br />
                            <input
                                type="password"
                                id="password"
                                name="password"
                                v-model="password"
                                class="border-dashed border-2 border-orange rounded-full w-full p-2 bg-orange-25 focus:outline-none"
                            />
                        </div>

                        <div class="mt-14 grid grid-cols-2">
                            <div>
                                <input
                                    type="submit"
                                    value="Sign Up"
                                    @click.prevent="onSubmit"
                                    class="bg-orange rounded-full px-5 py-3 w-full text-xl cursor-pointer font-bold"
                                />
                            </div>

                            <div class="mx-auto">
                                <div class="py-3">
                                    <!-- <a
                                        href="/"
                                        class="underline text-orange w-full text-xl font-bold"
                                        >Login</a
                                    > -->
                                    <RouterLink
                                        to="/"
                                        class="underline text-orange w-full text-xl font-bold"
                                        >Login</RouterLink
                                    >
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
