<template>
  <!--Que elementos vamos a mostrar en la pag web -->
  <div class="main">
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
import { defineComponent } from "vue";
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
});
</script>

<!-- Estilos de la aplicacion -->
<style>
.main{
  height:900px;
}
</style>
