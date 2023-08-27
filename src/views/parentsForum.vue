<script>
import {app, db} from '../../firebaseConfig.js';
import { collection, addDoc, getDoc} from "firebase/firestore"; 
import {getAuth} from "firebase/auth";

export default{
    data(){
        return {
            newMessage: '',
            category: 'General'
        };
    },
    methods: {
        submitMessage(){
            if (this.newMessage != '') {
                const auth = getAuth(); 
                const user = auth.currentUser;
                // console.log(user.displayName);
                const newMessageData = {
                    username: user.displayName,
                    datetime: new Date(),
                    message: this.newMessage,
                    category: this.category
                };
                this.createPost();
                try {
                    const docRef = addDoc(collection(db, "messages"), newMessageData);
                    console.log("Document written with ID: ", docRef.id);
                } catch (e) {
                    console.error("Error adding document: ", e);
                }
            }
            else {
                alert("Please enter a message");
            }
        },

        createPost(){
            const auth = getAuth(); 
            const user = auth.currentUser;
            
            const currentDate = new Date();
            
            const newPostHTML = `
                <div class="container max-w-[1024px] mx-auto p-4">
                    <div class="bg-fff584 border-2 border-d5cb6f rounded-corners p-4 flex flex-col justify-between leading-normal">
                        <div class="text-gray-900 font-bold text-xl mb-2">
                            Title
                        </div>
                        <div class="flex items-center">
                            <img class="w-10 h-10 rounded-full mr-4" src="../assets/mascot.png" alt="${user.displayName}">
                            <div class="text-sm">
                                <p class="text-gray-900 leading-none">
                                    ${user.displayName}
                                </p>
                                <p class="text-gray-600">
                                    ${currentDate}
                                </p>
                            </div>
                        </div>
                        <div class= "text-base pt-2">
                            ${this.newMessage}
                        </div>
                    </div>
                </div>
            `;
            
            // Add the new post HTML at the beginning of the 'newPost' div
            document.getElementById('newPost').innerHTML = newPostHTML + document.getElementById('newPost').innerHTML;
            
            // set the form back to blank
            this.newMessage = '';
            this.category = 'General';
        },
    }
}
</script>

<template>
    
    <div class="container max-w-[1024px] mx-auto p-4">
        <h1 class="text-2xl font-semibold mb-4">Forum</h1>
        
        <!-- Create a form for adding new posts -->
        <form @submit.prevent="submitMessage" class="mb-4">
            <div class="mb-2">
                <!-- <label for="postText" class="block font-medium">Post Content:</label> -->
                <textarea v-model="newMessage" id="postText" placeholder="Share your thoughts!" class="mt-2 border-dashed border-2 border-orange rounded w-full p-2 px-5 bg-orange-25 focus:outline-none focus:ring-0 bg-white"></textarea>
            </div>
            <div class="mb-2">
                <label for="postCategory" class="block font-medium">Category:</label>
                <select v-model="category" id="postCategory" class="w-full p-2 px-5 border-dashed border-2 border-orange rounded">
                    <option value="General">General</option>
                    <option value="Childcare">Childcare</option>
                    <option value="Homework">Homework</option> 
                    <option value="Parenting">Parenting Tips</option>
                </select>
            </div>
            <button type="submit" class="bg-orange rounded-corners px-5 py-3 font-bold my-2">Post</button>
        </form>
    </div>

    <div id='newPost'>
    </div>

<!--card-->
    <div class="container max-w-[1024px] mx-auto p-4">
        <div class="bg-fff584 border-2 border-d5cb6f rounded-corners p-4 flex flex-col justify-between leading-normal">
            <div class="text-gray-900 font-bold text-xl mb-2">
                Title
            </div>
            <div class="flex items-center">
                <img class="w-10 h-10 rounded-full mr-4" src="../assets/mascot.png" alt="Name of user">
                <div class="text-sm">
                    <p class="text-gray-900 leading-none">
                        Name of user
                    </p>
                    <p class="text-gray-600">
                        Post date
                    </p>
                </div>
            </div>
            <div class= "text-base pt-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </div>
        </div>
    </div>

</template>


<style scoped>
.bg-fff584 {
    background-color: #fff584;
}

.border-d5cb6f {
    border-color: #d5cb6f;
}

.rounded-corners {
    border-radius: 10px;
}
</style>
