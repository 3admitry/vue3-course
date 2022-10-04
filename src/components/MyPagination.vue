<template>
  <div class="page__wrapper">
    <div
        v-for="pageNumber in totalCountPage"
        class="page_item"
        :class="{
            'current__item': pageNumber===page,
          }"
        @click="changePage(pageNumber)"
    >
      {{pageNumber}}
    </div>
  </div>
</template>

<script>

export default {
  name: "my-pagination",
  props:{
    totalCountPage: {
      type: Number,
      required:true,
    },
    page: {
      type: Number,
      required:true,
    }
  },
  methods: {
    changePage(pageNumber){
      this.$emit('change', pageNumber)
    }
  }
}
</script>

<style scoped>
.page__wrapper {
  display: flex;
  margin-top: 10px;
  gap: 5px;
}

.page_item {
  padding: 10px;
  border: 1px solid green;
  cursor: pointer;
}
.page_item:hover{
  background: green;
  color: #fff;
}
.current__item {
  background: green;
  color: #fff;
}
</style>