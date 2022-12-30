<template>
  <!--Que elementos vamos a mostrar en la pag web -->
  <HelloWorld msg="Hello from parent"/>
</template>

<!--Donde definimos variables y funciones que van a actuar a menida que interactuemos con los elementos que van en la template  -->
<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  }
});
</script>

<!-- Estilos de la aplicacion -->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
