<script setup>
</script>

<template>
  <div style="background-color: rgb(183, 121, 20); padding: 2px; font-size: large; border-radius: 6px;">
    <router-link :to="{name:'home'}">Home</router-link> |
    <router-link :to="{name:'login'}">Login</router-link> |
    <router-link :to="{name:'signup'}">Signup</router-link> |
    <router-link :to="{name:'seller'}">Seller</router-link> |
    <router-link :to="{name:'sellerlogin'}">Seller Login</router-link> 
  </div>

  <router-view/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
