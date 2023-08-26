<script>
import {app, db} from '../../firebaseConfig.js';
import { collection, addDoc } from "firebase/firestore"; 
import {getAuth} from "firebase/auth";

export default{
    data(){
        return {
            newMessage: '',
            category: ['test', 'homework']
            
        };
    },
    methods: {
        submitMessage(){
            const auth = getAuth(); 
            const user = auth.currentUser;
            // console.log(user.displayName);
            const newMessageData = {
                username: user.displayName,
                datetime: new Date(),
                message: this.newMessage,
                category: this.category
            };
            try {
                const docRef = addDoc(collection(db, "messages"), newMessageData);
                console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
            }
            
        }   
    }
}
</script>

<template>
    <div class="grid place-items-center mt-5">
        <form @submit.prevent="sendMessage">
            <div>
                <input v-model="newMessage" type="text" placeholder="Share your thoughts" />
            </div>
            <div>
                <!-- multi dropdown to select category -->
                <select v-model="category" multiple size="1">
                    <option value="General">General</option>
                    <option value="Childcare">Childcare</option>
                    <option value="Homework">Homework</option> 
                    <option value="Parenting">Parenting Tips</option>
                </select>
                <button type="submit" @click="submitMessage">Send</button>
            </div>
            <div>
            </div>
        </form>
    </div>
    
    
</template>
