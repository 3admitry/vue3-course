<template>
  <input type="text" :value="modelValue" @input="updateInput" class="input">
</template>

<script>
export default {
  name: "my-input",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
.input {
  border: 1px solid green;
  padding: 10px 20px;
  width: 100%;
  margin: 10px 0;
}
</style>