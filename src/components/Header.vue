<template>
  <header class="site-header">
      <img class="logo" src="static/logo.png" alt="logo">
  </header>
</template>

<script>
export default {

};
</script>

<style scoped>
    .site-header {
        height: 64px;
        background: #fafafa;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .logo {
        height: 48px;
        filter: drop-shadow(0 1px 1px rgba(0,0,0,.25));
    }
</style>
