<template>
  <div class="post" v-for="post in posts">
    <div><strong>Title:</strong> {{ post.title }}</div>
    <div><strong>Description</strong> {{ post.body }}</div>
  </div>
</template>

<script>
export default {
  name: "PostList",
  props: {
    posts: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style scoped>

</style>