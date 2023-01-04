<template>
  <!--Que elementos vamos a mostrar en la pag web -->
  <button v-if = "!connected" class = "myButtonConnect" @click = "toggle">Connect</button>
  <button v-if = "connected" class = "myButtonDisconnect" @click = "toggle">Disconnect</button>
  <div v-if = "connected" class="main">
    <Top></Top>
    <div style="display: flex; height: 50%;">
      <Left></Left>
      <Right></Right>
    </div>
    <Bottom></Bottom>
  </div>
</template>

<!--Donde definimos variables y funciones que van a actuar a menida que interactuemos con los elementos que van en la template  -->
<script>
import { defineComponent, ref,onMounted} from "vue";
import Left from "./components/Left.vue";
import Right from "./components/Right.vue";
import Top from "./components/Top.vue";
import Bottom from "./components/Bottom.vue";
import {io} from 'socket.io-client'
import Swal from 'sweetalert2'

export default defineComponent({
  name: "App",
  components: {
    Top,
    Left,
    Right,
    Bottom,
  },
  setup(){
    let connected = ref(false)
    const socket = io('http://localhost:5000')
    onMounted (()=>{
      socket.on('connected', (msg) => {
          Swal.fire({
                title: "Notification on connection",
                text: msg,
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                confirmButtonText: "Yes"
          }).then((result) => { // <--
                if (result.value) { // <-- if confirmed
                  connected.value = true;
                }
          }); 
    });
      })
    function toggle(){
      socket.emit('connectPlatform')
      //connected.value = !connected.value;
    }
    return{
      toggle,
      connected,
      socket
    }
  }
});
</script>

<!-- Estilos de la aplicacion -->
<style>
.main{
  height:900px;
}
.myButtonConnect{
  width: 80%;
  background-color: brown;
  color: white;
  margin-left: 10%;
  margin-bottom: 1%;
}
.myButtonDisconnect{
  width: 80%;
  background-color: blue;
  color: white;
  margin-left: 10%;
  margin-bottom: 1%;
}
</style>
