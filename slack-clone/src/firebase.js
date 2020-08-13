import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyByzJGLAiom2_OtaZ28C6MsQHSk_lz7he0",
  authDomain: "slack-clone-99828.firebaseapp.com",
  databaseURL: "https://slack-clone-99828.firebaseio.com",
  projectId: "slack-clone-99828",
  storageBucket: "slack-clone-99828.appspot.com",
  messagingSenderId: "310622078130",
  appId: "1:310622078130:web:ba2267b351b04d316c35ab",
  measurementId: "G-TXVSX16WRG"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;