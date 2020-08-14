import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyD2T21kSzKvtWZMQHwxrgd6y5pmSaX9iF8",
  authDomain: "tinder-clone-c29a2.firebaseapp.com",
  databaseURL: "https://tinder-clone-c29a2.firebaseio.com",
  projectId: "tinder-clone-c29a2",
  storageBucket: "tinder-clone-c29a2.appspot.com",
  messagingSenderId: "460543861194",
  appId: "1:460543861194:web:9e66f0ffb8cc1b7f362f33"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default db
