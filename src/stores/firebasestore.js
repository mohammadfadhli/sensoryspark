import { defineStore } from "pinia";
import { auth } from "../../firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "@firebase/auth";
import router from "../main";

export const useFirebaseStore = defineStore({

    id: 'firebaseStore',
    state: () => ({
        email: '',
        password: '',
        user:{

        }
    }),
    getters:{

    },
    actions:{
        async signup(){

            try {
                const user=await createUserWithEmailAndPassword(auth, this.email, this.password);
                if(user){
                    console.log("registered");
                }
            }
            catch (error){
                    console.log(error);
            }
        },
        async login(){
            try{
                const res=await signInWithEmailAndPassword(auth, this.email, this.password);
                if(res){
                    console.log("loggedin");
                    router.push({name: "puzzle"});
                }
            }
            catch (error){
                console.log(error);
            }

        },
        async logout(){

            await signOut(auth);
            console.log("logged out");

        },
        init(){
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    this.user.id = user.uid;
                    this.user.email = user.email;
                    console.log(this.user)
                }
                else
                {
                    this.user = {}
                    console.log("no user")
                    router.replace({name:"login"});
                }
            })
        }
    }

})