<template>
 <post-form   @create="createPost"/>
  <post-list
      :posts="posts"/>
</template>

<script>
import PostList from "@/components/PostList";
import PostForm from "@/components/PostForm";

export default {
  name: "App",
  components: {
    PostForm, PostList
  },
  data() {
    return {
      posts: [
        {id: 1, title: 'Vue 1', body: 'Some body 1'},
        {id: 2, title: 'Vue 2', body: 'Some body 2'},
        {id: 3, title: 'Vue 3', body: 'Some body 3'},
        {id: 4, title: 'Vue 4', body: 'Some body 4'},
      ],
      title: '',
      body: '',
    }
  },
 methods: {
   createPost(post){
     this.posts.push(post)
   }
 }
}
</script>

<style>
* {
  margin: 2rem;
  padding: 0;
  box-sizing: border-box;
}

.post {
  padding: 15px;
  border: 1px solid green;
}
</style>