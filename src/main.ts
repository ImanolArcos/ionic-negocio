import { createApp } from 'vue'
//import App from './views/HomePage.vue'
import App from './views/App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSQxqQ_2wrsLctFqN_KSpa0gAi3aWenWM",
  authDomain: "practica-8-f478a.firebaseapp.com",
  databaseURL: "https://practica-8-f478a-default-rtdb.firebaseio.com",
  projectId: "practica-8-f478a",
  storageBucket: "practica-8-f478a.appspot.com",
  messagingSenderId: "669554666077",
  appId: "1:669554666077:web:0b6515c28d61f781483bb4",
  measurementId: "G-S9CG6V2Q87"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//initializeApp(firebaseConfig);
//const analytics = getAnalytics(App);

const app = createApp(App)
  .use(IonicVue)
  .use(router);
  
router.isReady().then(() => {
  app.mount('#app');
});