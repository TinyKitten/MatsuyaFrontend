<template>
  <article class="menu-info">
      <h2 class="name">{{menu.name}}&nbsp;<span class="calorie">{{menu.calorie}}kcal</span></h2> 
      <p class="price" v-if="menu.price">{{menu.price}}円</p>
      <p class="price" v-else>0円</p>
      <p class="description" v-if="menu.description">
          {{menu.description}}
      </p>
      <p class="description" v-else>
          メニュー説明はありません。
      </p>
  </article>
</template>

<script>
export default {
  props: ['menu'],
};
</script>

<style scoped>
    .menu-info {
        width: 85%;
        margin: 24px auto 0 auto;
        overflow: hidden;
    }
    .name {
        font-weight: bold;
        font-size: 1.5rem;
    }
    .calorie {
        font-size: 1.25rem;
        color: #555;
    }
    .price {
        font-weight: bold;
        line-height: 2rem;
        font-size: 1.25rem;
    }
    .description {
        margin-top: 8px;
        color: #555;
        font-weight: bold;
    }

    @media (min-width: 800px) {
        .menu-info {
            margin-top: 32px;
        }
    }
</style>
