import Vue from 'vue';
import Vuelidate from 'vuelidate';
import firebase from 'firebase/app';
import App from './App.vue';
import router from './router';
import store from './store';
import currencyFilter from './filters/currency.filter';
import dateFilter from './filters/date.filter';
import messagePlugin from './utils/message.plugin';
import Loader from './components/app/Loader.vue';
import './registerServiceWorker';
import 'materialize-css/dist/js/materialize.min';
import 'firebase/auth';
import 'firebase/database';

Vue.config.productionTip = false;

Vue.use(messagePlugin);
Vue.use(Vuelidate);
Vue.filter('date', dateFilter);
Vue.filter('currency', currencyFilter);
Vue.component('Loader', Loader);

firebase.initializeApp({
  apiKey: 'AIzaSyBANZsamneE2l_m-deGmJOoE0PnvNqUtlA',
  authDomain: 'vue-practice-6ef34.firebaseapp.com',
  databaseURL: 'https://vue-practice-6ef34.firebaseio.com',
  projectId: 'vue-practice-6ef34',
  storageBucket: 'vue-practice-6ef34.appspot.com',
  messagingSenderId: '127076171809',
  appId: '1:127076171809:web:1af26a935f84d551fe6360',
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app');
  }
});
