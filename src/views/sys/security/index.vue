<template>
  <div>
    security1{{count}}
  </div>

</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "security",
  setup() {
    const count = 10;

    return { count };
  },
});
</script>
