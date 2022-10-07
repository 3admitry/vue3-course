<template>

  <h1>My posts</h1>
  <my-input
      v-focus
      v-model="searchQuery"
      placeholder="Search by title..."
  />
  <div class="app__btns">
    <my-button @click="showDialog">
      Add new post
    </my-button>
    <my-select
        v-model="selectedSort"
        :options="sortOptions"
    />
  </div>
  <my-dialog v-model:show="isDialogOpen">
    <post-form
        @create="createPost"
    />
  </my-dialog>
  <post-list
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
      v-if="!isPostsLoading"
  />
  <div v-else>Loading...</div>

  <!--    Example of pagination-->
  <!--    <my-pagination
          :page="page"
          :totalCountPage="totalCountPage"
          @change="changePage"
      />-->


  <!--  Элемент для отслеживания его пересечения и отработки подгрузки постов-->
  <!--  <div ref="observer" class="observer"></div>-->

  <!--  ЧЕРЕЗ кастомную дерикитву - элемент для отслеживания его пересечения и отработки подгрузки постов-->
  <div v-intersection="loadMorePosts" class="observer"></div>
</template>

<script>
import PostList from "@/components/PostList";
import PostForm from "@/components/PostForm";
import MyButton from "@/components/UI/MyButton";
import axios from "axios";
import MySelect from "@/components/UI/MySelect";
import MyInput from "@/components/UI/MyInput";
import MyPagination from "@/components/MyPagination";

export default {
  name: "PostPage",
  components: {
    MyPagination,
    MyInput,
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
      searchQuery: '',
      page: 1,
      totalCountPage: 0,
      limit: 10,
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
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit,
          }
        });
        this.totalCountPage = Math.ceil(response.headers['x-total-count'] / this.limit);
        this.posts = response.data;
        this.isPostsLoading = false;

      } catch {
        console.log('Ошибка')
      }
    },
    // Infinity loading posts
    async loadMorePosts() {
      try {
        this.page += 1;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit,
          }
        });
        this.totalCountPage = Math.ceil(response.headers['x-total-count'] / this.limit);
        this.posts = [...this.posts, ...response.data];

      } catch {
        console.log('Ошибка')
      }
    },
    //Method for pagination
    /*    changePage(numberPage) {
          this.page = numberPage
        }*/
  },

  mounted() {
    this.fetchPosts();


    // Реализация Observer Intersection - через refs
    /*    let options = {
          rootMargin: '0px',
          threshold: 1.0
        }

        let callback = (entries, observer) => {
          if (entries[0].isIntersecting && this.page < this.totalCountPage) {
            this.loadMorePosts();
          }
        };

        let observer = new IntersectionObserver(callback, options);
        observer.observe(this.$refs.observer);*/
  },
  watch: {
    //Watcher for pagination
    /*page() {
      this.fetchPosts()
    }*/
  },
  computed: {
    sortedPost() {
      return [...this.posts].sort((a, b) => a[this.selectedSort]?.localeCompare(b[this.selectedSort]))
    },
    sortedAndSearchedPosts() {
      return this.sortedPost.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  }
}
</script>

<style>
.app__btns {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}

.observer {
  height: 30px;
  width: 100%;
  background: green;
}
</style>