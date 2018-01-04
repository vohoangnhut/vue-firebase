// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueFire from 'vuefire';
import firebase from 'firebase';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en';

//Firebase

import database from './core/firebase/database'
import { firebaseConfig } from './core/firebase/config'

Vue.config.productionTip = false

firebase.initializeApp(firebaseConfig);
database.init();

let app;

Vue.use(VueFire);
Vue.use(ElementUI, { locale });

firebase.auth().onAuthStateChanged(function(user){
  if(!app){
    /* eslint-disable no-new */
    app = new Vue({
        el: '#app',
        router,
        template: '<App/>',
        components: { App }
    })
  }
})

