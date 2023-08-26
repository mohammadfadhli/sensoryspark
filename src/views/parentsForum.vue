<script>
import {app, db} from '../../firebaseConfig.js';
import { collection, addDoc } from "firebase/firestore"; 

export default{
    data(){
        return {
            newMessage: '',
            userID: 0,
            category: ['test', 'homework']
            
        };
    },
    methods: {
        submitMessage(){
            const newMessageData = {
                userid: this.userID,
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
    <div>
        <form @submit.prevent="sendMessage">
            <input v-model="newMessage" type="text" placeholder="Share your thoughts" />
            <button type="submit" @click="submitMessage">Send</button>
        </form>
    </div>
    
    
</template>
