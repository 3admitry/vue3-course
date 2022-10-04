<template>
  <div>
    <h3>Posts list</h3>
    <transition-group name="post-list">
      <post-item v-if="posts.length>0"
                 v-for="post in posts"
                 :key="post.id"
                 :post="post"
                 @remove="$emit('remove',post)"
      />
      <h4 v-else style="color:red">Posts not found</h4>
    </transition-group>
  </div>
</template>

<script>
import PostItem from "@/components/PostItem";

export default {
  name: "PostList",
  components: {PostItem},
  props: {
    posts: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style scoped>
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all .3s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.post-list-move {
  transition: transform 0.3s ease;
}
</style>