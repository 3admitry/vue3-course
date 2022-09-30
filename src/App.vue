<template>
  <div class="app">
    <h1>My posts</h1>
    <div class="app__btns">
      <my-button @click="showDialog">Add new post</my-button>
      <my-select
      v-model="selectedSort"
      :options="sortOptions"
      />
    </div>
    <my-dialog v-model:show="isDialogOpen">
      <post-form @create="createPost"/>
    </my-dialog>
    <post-list :posts="sortedPost" @remove="removePost" v-if="!isPostsLoading"/>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import PostList from "@/components/PostList";
import PostForm from "@/components/PostForm";
import MyButton from "@/components/UI/MyButton";
import axios from "axios";
import MySelect from "@/components/UI/my-select";

export default {
  name: "App",
  components: {
    MySelect,
    MyButton,
    PostForm, PostList
  },
  data() {
    return {
      posts: [],
      title: '',
      body: '',
      isDialogOpen: false,
      isPostsLoading: false,
      selectedSort: '',
      sortOptions: [
        {value: 'title', name: 'By title'},
        {value: 'body', name: 'By description'},
      ]
    }
  },
  methods: {
    showDialog() {
      this.isDialogOpen = true;
    },
    createPost(post) {
      this.posts.push(post);
      this.isDialogOpen = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(item => post.id !== item.id)
    },
    async fetchPosts() {
      try {
        this.isPostsLoading = true;
        setTimeout(async () => {
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
          this.posts = response.data;
          this.isPostsLoading = false;
        }, 1500)
      } catch {
        console.log('Ошибка')
      }
    }
  },
  mounted() {
    this.fetchPosts()
  },
  computed: {
    sortedPost(){
      return [...this.posts].sort((a,b)=>a[this.selectedSort]?.localeCompare(b[this.selectedSort]))
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  margin: 20px;
}
.app__btns{
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}


</style>