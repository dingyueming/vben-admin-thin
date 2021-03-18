<template>
  <div>
    user{{count}}
    <a-button v-if="hasPermission(['user.service.add'])" color="success">新增按钮</a-button>
    <a-button v-if="hasPermission(['user.service.modify1'])" color="success">修改按钮</a-button>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { usePermission } from "/@/hooks/web/usePermission";
export default defineComponent({
  name: "user",
  setup() {
    const count = ref(222);
    const { hasPermission } = usePermission();

    return {
      hasPermission,
      count,
    };
  },
});
</script>
