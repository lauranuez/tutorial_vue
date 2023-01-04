import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import BootstrapVue3  from 'bootstrap-vue-3'
import  BootstrapVueIcons  from 'bootstrap-vue-3'


import mitt from 'mitt';                  // Import mitt
const emitter = mitt();                   // Initialize mitt

import mqtt, { MqttClient } from 'mqtt'

let client : MqttClient;
try {
    client = mqtt.connect('mqtt://localhost:9042')
    client.on('connect', () => {
        console.log('Connection succeeded!');
        client.publish("Connect", "");
        app.provide('mqttClient', client)
    })
} catch (error) {
    console.log('mqtt.connect error', error)
}

const app = createApp(App);
app.use(BootstrapVue3);
app.use(BootstrapVueIcons);
app.provide('emitter', emitter); 
app.mount('#app');

