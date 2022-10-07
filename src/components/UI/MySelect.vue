<template>
  <select v-model="modelValue" @change="selectUpdate">
    <option disabled value="">Select type of sort</option>
    <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
    >
      {{option.name}}
    </option>
  </select>
</template>

<script>
export default {
  name: "my-select",
  methods: {
    selectUpdate(event){
      this.$emit('update:modelValue', event.target.value)
    }
  },
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>

</style>