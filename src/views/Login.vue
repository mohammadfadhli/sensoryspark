<script>
import { signInWithEmailAndPassword } from "firebase/auth";
import { RouterLink } from "vue-router";
import { auth } from "../../firebaseConfig";

export default {
    data() {
        return {
            email: "",
            password: "",
            error: ""
        };
    },
    methods: {
        onSubmit(e) {
            // e.preventDefault();
            signInWithEmailAndPassword(auth, this.email, this.password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    console.log(user);
                    localStorage.setItem("username", user.displayName);
                    localStorage.setItem("email", this.email);
                    this.$router.push("/puzzle") // redirect to puzzle
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    this.error = errorMessage;
                    console.log(error);
                });
        },
    },
};

</script>

<template>
    <div class="container max-w-[1024px] mx-auto p-3 mt-20">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div class="font-bold text-3xl">
                <h1>Learning Made Easy</h1>
                <h1>with <a class="text-5xl text-orange">SensorySpark</a></h1>
                <img
                    src="../assets/bgimage.png"
                    height="500"
                    width="800"
                    class="mt-11"
                />
            </div>
            <div>
                <div>
                    <form @submit="onSubmit">
                        <div class="mt-5">
                            <label
                                for="username"
                                class="text-2xl font-bold ms-3"
                                >Email</label
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

                        <h1 v-if="error" class="text-red-600 font-bold mt-3 text-center">{{ error }}</h1>

                        <div class="mt-14 grid grid-cols-2 px-3">
                            <div>
                                <input
                                    type="submit"
                                    value="Login"
                                    @click.prevent="onSubmit"
                                    class="bg-orange rounded-full px-5 py-3 w-full text-xl cursor-pointer font-bold hover:scale-105"
                                />
                            </div>

                            <div class="mx-auto">
                                <div class="py-3 hover:scale-105">
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
