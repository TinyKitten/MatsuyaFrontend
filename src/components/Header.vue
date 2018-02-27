<template>
  <header class="site-header">
    <img class="logo" src="static/logo.png" alt="logo">
    <div class="searchBtn" @click="toggleSearch" >
    <icon name="search" scale="1.25" v-if="!searchPanelState" />
    <icon name="close" scale="1.25" v-else />
    </div>
  </header>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
import Icon from 'vue-awesome/components/Icon';
import 'vue-awesome/icons/close';
import 'vue-awesome/icons/search';

export default {
  methods: {
    ...mapMutations([
      'setSearchPanelState',
    ]),
    toggleSearch() {
      this.setSearchPanelState(!this.searchPanelState);
    },
  },
  computed: {
    ...mapGetters([
      'searchPanelState',
    ]),
  },
  components: {
    Icon,
  },
};
</script>

<style scoped>
    .site-header {
        position: relative;
        height: 64px;
        background: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
    }
    .logo {
        height: 48px;
        filter: drop-shadow(0 1px 1px rgba(0,0,0,.25));
    }
    .searchBtn {
        right: 24px;
        position: absolute;
        color: #333;
    }
</style>
