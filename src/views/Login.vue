<script></script>

<template>

    <div class="container mx-auto mt-20">
        <div class="grid grid-cols-2 gap-4">
            <div class="font-bold text-3xl">
                <h1>Learning Made Easy</h1>
                <h1>with <a class="text-5xl text-[#F58B2E]">SensorySpark</a></h1>
                <img src="../assets/mascot.png" height="300" width="300" class="ms-14 mt-5"/>
            </div>
            <div>
                <div>
                    <form>
                        <div class="mt-5">
                            <label for="username" class="text-2xl font-bold ms-3">Username</label><br />
                            <input
                                type="text"
                                id="username"
                                name="username"
                                class="border-dashed border-2 border-[#F58B2E] rounded-full w-full p-2"
                            />
                        </div>

                        <div class="mt-5">
                            <label for="email" class="text-2xl font-bold ms-3">Email</label><br />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                class="border-dashed border-2 border-[#F58B2E] rounded-full w-full p-2"
                            />
                            </div>

                        <div class="mt-5">
                            <label for="password" class="text-2xl font-bold ms-3">Password</label><br />
                            <input
                                type="password"
                                id="password"
                                name="password"
                                class="border-dashed border-2 border-[#F58B2E] rounded-full w-full p-2"
                            />
                        </div>

                        <div class="mt-14 grid grid-cols-2">
                            <div>
                                <input
                                    type="submit"
                                    value="Login"
                                    class="bg-[#F58B2E] rounded-full px-5 py-3 w-full cursor-pointer"
                                />
                            </div>
                            
                            <div class="mx-auto">
                            <div class="py-3">
                                <a href="/" class="underline text-[#F58B2E] w-full">Sign up</a>
                            </div>
                            </div>
                        </div>                    
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
