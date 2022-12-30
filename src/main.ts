import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import BootstrapVue3  from 'bootstrap-vue-3'
import  BootstrapVueIcons  from 'bootstrap-vue-3'


import mitt from 'mitt';                  // Import mitt
const emitter = mitt();                   // Initialize mitt

const app = createApp(App);
app.use(BootstrapVue3);
app.use(BootstrapVueIcons);
app.provide('emitter', emitter); 
app.mount('#app');