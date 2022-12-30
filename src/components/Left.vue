<template>
  <div class="leftStyle">Left</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>
.leftStyle {
  border-style: solid;
  border-color: pink;
  width: 50%
}
</style>