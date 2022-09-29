<template>
  <form @submit.prevent>
    <input type="text"
           v-model="post.title"
           placeholder="Title post"
    >
    <input type="text"
           v-model="post.body"
           placeholder="Description post">
    <!--
    Классическое двусоторонее связывание
    <input type="text"
               @input="post.body = $event.currentTarget.value"
               v-bind:value="post.body"
               placeholder="Description post">-->
    <button @:click="createPost">Add post</button>
  </form>
</template>

<script>
export default {
  name: "PostForm",
  data() {
    return {
      post: {
        title: '',
        body: '',
      }
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit('create', this.post);
      this.post = {
        title: '',
        body: '',
      }
    }
  }
}
</script>

<style scoped>

</style>