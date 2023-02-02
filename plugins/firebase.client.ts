import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics"

export default defineNuxtPlugin(nuxtApp => {

 



    const firebaseConfig = {
      apiKey: "AIzaSyD4bV4eWNlJfvHqsRB8zDAUmc0UvSu77I8",
      authDomain: "fir-ec8d2.firebaseapp.com",
      projectId: "fir-ec8d2",
      storageBucket: "fir-ec8d2.appspot.com",
      messagingSenderId: "931503658940",
      appId: "1:931503658940:web:53204b4eb293cb31f0bdb9"
      };

    const app = initializeApp(firebaseConfig)

    


    const auth = getAuth(app)
    const analytics = getAnalytics(app)
    const firestore = getFirestore(app)
    const db = getFirestore();


    

    nuxtApp.vueApp.provide('auth', auth)
    nuxtApp.provide('auth', auth)


    nuxtApp.vueApp.provide('firestore', firestore)
    nuxtApp.provide('firestore', firestore)




})

