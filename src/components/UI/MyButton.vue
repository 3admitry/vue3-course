<template>
  <button class="btn">
    <slot/>
  </button>
</template>

<script>
export default {
  name: "my-button"
}
</script>

<style scoped>
.btn{
  border: 1px solid green;
  padding: 5px 10px;
  background: #ffff;
  cursor: pointer;
}
</style>