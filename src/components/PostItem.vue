<template>
  <div class="post">
    <div>
      <div><strong>Title:</strong> {{ post.title }}</div>
      <div><strong>Description</strong> {{ post.body }}</div>
    </div>
    <div class="post__btns">
      <my-button
      @click="$emit('remove',post)"
      >Remove</my-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostItem",
  props: {
    post: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
.post {
  padding: 15px;
  border: 1px solid green;
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}
</style>