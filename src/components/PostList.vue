<template>
  <div>
    <h3>Posts list</h3>
    <post-item v-if="posts.length>0"
        v-for="post in posts"
        :post="post"
        @remove="$emit('remove',post)"
    />
    <h4 v-else style="color:red">Posts not found</h4>
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

</style>