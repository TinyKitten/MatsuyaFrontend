<template>
    <div class="refresh" @click="FETCH_MENU()">
        <icon name="refresh" scale="1.75" v-if="menu"></icon>
        <icon name="refresh" scale="1.75" spin v-else></icon>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Icon from 'vue-awesome/components/Icon';
import 'vue-awesome/icons/refresh';

export default {
  components: {
    Icon,
  },
  methods: {
    ...mapActions([
      'FETCH_MENU',
    ]),
  },
  computed: {
    ...mapGetters([
      'menu',
    ]),
  },
};
</script>

<style scoped>
    .refresh {
        position: absolute;
        right: 32px;
        bottom: 32px;
        background: #F44336;
        color: #fff;
        border: none;
        border-radius: 100%;
        width: 64px;
        height: 64px;
        filter: drop-shadow(0 0 8px rgba(244,67,54,.25));
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
