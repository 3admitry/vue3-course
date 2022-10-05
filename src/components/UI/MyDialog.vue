<template>
  <div class="dialog" v-if="show" @click="hideDialog">
    <div @click.stop class="dialog__content">
      <slot/>
    </div>
  </div>
</template>

<script>
import toggleMixin from "@/components/mixins/toggleMixin";

export default {
  name: "my-dialog",
  mixins: [toggleMixin]
}
</script>

<style scoped>
.dialog {
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgb(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}

.dialog__content {
  background: white;
  padding: 20px;
  margin: auto;
  align-items: center;
  border-radius: 12px;
  min-height: 50px;
  width: 500px;
}
</style>