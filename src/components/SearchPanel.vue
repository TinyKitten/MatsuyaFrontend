<template>
  <transition name="slide">
    <div class="panel">
        <div class="wrapper">
            <input class="query" placeholder="検索" v-model="query" />
            <ul class="menuList" v-for="menu in menuList" :key="menu.name">
            <li @click="click(menu)" class="menu">{{menu.name}}</li>
            </ul>
        </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  data() {
    return {
      query: '',
      menuList: [],
    };
  },
  methods: {
    ...mapActions([
      'FETCH_ALL_MENU',
    ]),
    ...mapMutations([
      'setMenu',
      'setSearchPanelState',
    ]),
    click(menu) {
      this.setMenu(menu);
      this.setSearchPanelState(false);
    },
  },
  computed: {
    ...mapGetters([
      'findMenu',
      'allMenu',
    ]),
  },
  watch: {
    query(val) {
      this.menuList = this.findMenu(val);
    },
  },
  async mounted() {
    await this.FETCH_ALL_MENU();
  },
};
</script>

<style scoped>
  .slide-enter-active, .slide-leave-active {
    transition: opacity .25s;
  }
  .slide-enter, .slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
  }

  .panel {
      position: absolute;
      background: #fff;
      width: 100%;
      height: calc(100% - 64px);
      overflow-y: scroll;
  }
  .wrapper {
      width: 90%;
      margin: 0 auto;
  }
  .query {
      width: calc(100% - 16px);
      box-shadow: 0 0 4px rgba(0, 0, 0, .25);
      border: 1px solid #ccc;
      border-radius: 2px;
      font-size: 1rem;
      line-height: 2rem;
      margin: 8px 0 24px 0;
      padding: 4px 8px;
  }
  .menuList {
      border-top: 1px solid #eee;
  }
  .menu {
      border-bottom: 1px solid #eee;
      font-weight: bold;
      line-height: 3rem;
  }
</style>
