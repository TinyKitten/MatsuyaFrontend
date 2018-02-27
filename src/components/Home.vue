<template>
  <section class="page">
    <search-panel v-if="searchPanelState" />
    <div class="wrapper" v-if="menu">
      <div class="image-wrapper">
        <menu-image :menu="menu" />
      </div>
      <menu-info :menu="menu" />
    </div>
    <div class="pending" v-else>
      <icon name="refresh" scale="3" spin></icon>
    </div>
    <refresh v-if="!searchPanelState" />
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Icon from 'vue-awesome/components/Icon';
import 'vue-awesome/icons/refresh';
import MenuImage from './Image';
import MenuInfo from './Info';
import Refresh from './Refresh';
import SearchPanel from './SearchPanel';

export default {
  name: 'Home',
  components: {
    MenuImage,
    MenuInfo,
    Refresh,
    Icon,
    SearchPanel,
  },
  methods: {
    ...mapActions([
      'FETCH_MENU',
    ]),
  },
  computed: {
    ...mapGetters([
      'menu',
      'searchPanelState',
    ]),
  },
  mounted() {
    this.FETCH_MENU();
  },
};
</script>

<style scoped>
.image-wrapper {
  width: 100%;
  overflow: hidden;
  height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #333;
}
.image {
  width: 100%;
}
.pending {
  display: flex;
  justify-content: center;
  margin-top: 72px;
  color: #aaa;
}

@media (min-width: 800px) {
  .image-wrapper {
    height: 480px;
  }
}
</style>
