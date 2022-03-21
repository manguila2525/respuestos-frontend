// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { getFirestore, getDocs, collection } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB1kxPzcZTkIhb9RsvSMJeKCPUlFP4W6kE',
  authDomain: 'respuestos-ecommerce.firebaseapp.com',
  projectId: 'respuestos-ecommerce',
  storageBucket: 'respuestos-ecommerce.appspot.com',
  messagingSenderId: '253206595586',
  appId: '1:253206595586:web:c3fa74f6f0860a0b637f1b',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const db = getFirestore()

export const createEmail = async (email: string, password: string) => {
  const res = await createUserWithEmailAndPassword(auth, email, password)
  console.log(res)
}

export const signIn = async (email: string, password: string) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user
      console.log(user)
      console.log('Ingresaste')
      // ...
    })
    .catch((error) => {
      const errorMessage = error.message
      console.log(errorMessage)
      console.log('Error en email o contraseña')
    })
  return false
}
// export const viewAuth = () => {
// }

const allRespuestos = (respuesto: any) => {
  const spare = []
  spare.push(respuesto)
  return spare
}
// export let ress = []
auth.onAuthStateChanged(async (user) => {
  if (user) {
    const data = await getDocs(collection(db, 'respuestos'))
    console.log(data)
    data.forEach((doc) => {
      console.log(doc.data())
      allRespuestos(doc.data())
      // ress = allRespuestos(doc.data())
    })
  } else {
    console.log('auth:signUp')
  }
})
export const signOut = () => {
  auth.signOut().then(() => {
    console.log('Sign Out')
  })
}
export default app
