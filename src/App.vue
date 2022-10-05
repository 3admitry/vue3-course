<template>
  <NavBar/>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "@/NavBar";

export default {
  name: "App",
  components: {NavBar}
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
</style>