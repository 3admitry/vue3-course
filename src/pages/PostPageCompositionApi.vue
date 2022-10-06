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
  <!--  ЧЕРЕЗ кастомную дерикитву - элемент для отслеживания его пересечения и отработки подгрузки постов-->
  <div v-intersection="loadMorePosts" class="observer"></div>
</template>

<script>
import PostList from "@/components/PostList";
import PostForm from "@/components/PostForm";
import MyButton from "@/components/UI/MyButton";
import axios from "axios";
import MySelect from "@/components/UI/my-select";
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
      isDialogOpen: false,
      sortOptions: [
        {value: 'title', name: 'By title'},
        {value: 'body', name: 'By description'},
      ]
    }
  },
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