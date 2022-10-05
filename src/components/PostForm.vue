<template>
  <h2>Add new post</h2>
  <form @submit.prevent>
    <my-input
        v-focus
        v-model="post.title"
        placeholder="Title post"
    />
    <my-input v-model="post.body"
              placeholder="Description post"
    />
    <!--
    Классическое двусоторонее связывание
    <input type="text"
               @input="post.body = $event.currentTarget.value"
               v-bind:value="post.body"
               placeholder="Description post">-->
    <my-button @:click="createPost">Add post</my-button>
  </form>
</template>

<script>
import MyInput from "@/components/UI/MyInput";

export default {
  name: "PostForm",
  components: {MyInput},
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