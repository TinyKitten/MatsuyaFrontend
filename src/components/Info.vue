<template>
  <article class="menu-info">
      <div class="header">
        <h2 class="name">{{menu.name}}</h2> 
        <p class="price" v-if="menu.price">{{menu.price}}円</p>
        <p class="price" v-else>0円</p>
      </div>
      
      <div class="description">
      <h3 class="heading">詳細</h3>
      <p class="text" v-if="menu.description">
          {{menu.description}}
      </p>
      <p class="text" v-else>
          メニュー説明はありません。
      </p>
      </div>
  </article>
</template>

<script>
export default {
  props: ['menu'],
};
</script>

<style scoped>
    .menu-info {
        margin: 0 auto;
        overflow: hidden;
    }
    .header {
        background: #fff;
        box-shadow: 0 1px 2px rgba(0, 0, 0, .25);
        display: flex;
        justify-content: space-between;
        padding: 0 24px;
        align-items: center;
        height: 72px;
        font-weight: bold;
    }
    .name {
        font-size: 1.15rem;
        flex: .85;
    }
    .price {
        line-height: 2rem;
        font-size: 1.15rem;
    }
    .description {
        padding: 24px;
    }
    .heading {
        font-size: 1.25rem;
        font-weight: bold;
        margin-bottom: 12px;
    }
    .text {
        margin-top: 8px;
        color: #555;
    }
</style>
