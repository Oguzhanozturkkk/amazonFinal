import { defineStore } from 'pinia'
import { getAuth, signInWithRedirect, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";


export const useUserStore = defineStore('user', {
    state: () => ({
        user: null,
    }),
    getters: {
    },
    actions: {

        createUser(user) {

            const auth = getAuth();
            createUserWithEmailAndPassword(auth, user.value.email, user.value.pass)
                .then((userCredential) => {
                    // Signed in 
                    alert("Kayit islemi tamamlandi..!")
                    const user = userCredential.user;
                    navigateTo('/LoginPage')


                    // ...
                })
                .catch((error) => {

                    const errorCode = error.code;
                    const errorMessage = error.message;
                    this.registerError = true
                    alert("bir sorun ortaya cikti", errorMessage)
                    

                    // ..
                });

        },

        signInWithEmail(user) {



            // const provider = new GoogleAuthProvider();
            const auth = getAuth();

            signInWithEmailAndPassword(auth, user.value.email, user.value.pass)
                .then((userCredential) => {
                    // Signed in 
                    this.user = auth.currentUser
                    alert("giris yapildi")
                    navigateTo('/')

                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage)
                    console.log(errorCode)
                    console.log('giris yapilamadi.')
                    alert('Yanlis email veya sifre')
                });

        }

    },
})