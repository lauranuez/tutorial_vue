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
<script lang="ts">
import { defineComponent, ref } from "vue";
import Left from "./components/Left.vue";
import Right from "./components/Right.vue";
import Top from "./components/Top.vue";
import Bottom from "./components/Bottom.vue";

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
    function toggle(){
       connected.value = !connected.value;
    }
    return{
      toggle,
      connected
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
