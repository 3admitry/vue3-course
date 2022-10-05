<template>
  <nav class="navbar">
    <div class="navbar__logo">
      <my-button @click="$router.push('/')">
        LOGO
      </my-button>
    </div>
    <div class="navbar__btns">
      <my-button @click="$router.push('/posts')">
        Posts
      </my-button>
      <my-button @click="$router.push('/about')">
        About
      </my-button>
    </div>
  </nav>
</template>
<script>

export default {
  name: 'NavBar',
}
</script>

<style>
.navbar{
  display: flex;
  justify-content: space-between;
  box-shadow: 2px 2px 4px gray;
  align-items: center;
  padding: 20px;
}
.navbar__btns{
  display: flex;
  gap: 20px;
}
</style>