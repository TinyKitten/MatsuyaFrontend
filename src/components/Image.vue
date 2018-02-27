<template>
    <img class="image" :src="menu.imageURL" :alt="menu.name" v-if="menu.imageURL">
</template>

<script>
export default {
  props: ['menu'],
};
</script>

<style scoped>

</style>
