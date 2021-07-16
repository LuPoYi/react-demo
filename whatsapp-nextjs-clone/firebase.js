import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyAd-DtlBQJTcxTRf1h7mtR8bWBfqpBqPvg',
  authDomain: 'whatsapp-nextjs-clone-a6e6f.firebaseapp.com',
  projectId: 'whatsapp-nextjs-clone-a6e6f',
  storageBucket: 'whatsapp-nextjs-clone-a6e6f.appspot.com',
  messagingSenderId: '428227425836',
  appId: '1:428227425836:web:682097657282e6ed510389',
}

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = app.firestore()
const auth = app.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }
