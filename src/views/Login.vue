<script>
import { RouterLink, RouterView } from "vue-router";
import { auth } from "../../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export default {
    data() {
        return {
            email: "username",
            password: "password",
        };
    },
    methods: {
        onSubmit(e) {
            // e.preventDefault();
            console.log(this.username);
            console.log(this.password);
            console.log("login clicked");
            signInWithEmailAndPassword(auth, this.email, this.password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    console.log(user);
                    this.$router.push("/puzzle") // redirect to puzzle
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(error);
                });
        },
    },
};

</script>

<template>
    <div class="container mx-auto mt-20">
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
                                >Username/Email</label
                            ><br />
                            <input
                                type="text"
                                id="username"
                                name="username"
                                v-model="email"
                                class="mt-2 border-dashed border-2 border-orange rounded-full w-full p-2 bg-orange-25 focus:outline-none focus:ring-0"
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
                                class="mt-2 border-dashed border-2 border-orange rounded-full w-full p-2 bg-orange-25 focus:outline-none focus:ring-0"
                            />
                        </div>

                        <div class="mt-14 grid grid-cols-2">
                            <div>
                                <input
                                    type="submit"
                                    value="Login"
                                    @click.prevent="onSubmit"
                                    class="bg-orange rounded-full px-5 py-3 w-full text-xl cursor-pointer font-bold"
                                />
                            </div>

                            <div class="mx-auto">
                                <div class="py-3">
                                    <RouterLink
                                        to="/signup"
                                        class="underline text-orange w-full text-xl font-bold"
                                        >Sign up</RouterLink
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
