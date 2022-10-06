<template>

  <h1>My posts</h1>
  <my-input
      v-focus
      :model-value="searchQuery"
      @update:model-value="setSearchQuery"
      placeholder="Search by title..."
  />
  <div class="app__btns">
    <my-button @click="showDialog">
      Add new post
    </my-button>
    <my-select
        :model-value="selectedSort"
        @update:model-value="setSelectedSort"
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


  <!--  ЧЕРЕЗ кастомную дерикитву - элемент для отслеживания его пересечения и отработки подгрузки постов-->
  <div v-intersection="loadMorePosts" class="observer"></div>
</template>

<script>
import PostList from "@/components/PostList";
import PostForm from "@/components/PostForm";
import MyButton from "@/components/UI/MyButton";
import MySelect from "@/components/UI/my-select";
import MyInput from "@/components/UI/MyInput";
import MyPagination from "@/components/MyPagination";
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'

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
      isDialogOpen: false
    }
  },
  computed: {
    ...mapState({
      posts: state => state.post.posts,
      isPostsLoading: state => state.post.isPostsLoading,
      page: state => state.post.page,
      selectedSort: state => state.post.selectedSort,
      totalCountPage: state => state.post.totalCountPage,
      searchQuery: state => state.post.searchQuery,
      limit: state => state.post.limit,
      sortOptions: state => state.post.sortOptions,
    }),
    ...mapGetters({
      sortedPost: 'post/sortedPost',
      sortedAndSearchedPosts: 'post/sortedAndSearchedPosts'
    }),
  },
  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort',
    }),
    ...mapActions({
      loadMorePosts: 'post/loadMorePosts',
      fetchPosts: 'post/fetchPosts'
    }),

    showDialog() {
      this.isDialogOpen = true;
    },
    createPost(post) {
      this.posts.push(post);
      this.isDialogOpen = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(item => post.id !== item.id)
    }
  },

  mounted() {
    this.fetchPosts();
  },
  watch: {},
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