<template>
  <div id="app">
    <router-view />
    <NavBar />
  </div>
</template>
<script setup lang="js">
</script>
<style lang="scss">
html,
body {
  height: 100%;
}

input {
  width: 100%;
  background-color: transparent;

  &:focus {
    outline: none;
  }
}
</style>
