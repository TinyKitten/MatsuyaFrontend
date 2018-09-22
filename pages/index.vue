<template>
  <section class="page">
    <!-- Header Start -->
    <div class="flex mb-4 shadow-md">
      <div class="w-full bg-black h-12 flex items-center">
        <span class="text-white pl-5">Matsuya Frontend</span>
      </div>
    </div>
    <!-- Header End -->
    <!-- Menu Start -->
    <div class="flex flex-wrap justify-center">
      <div
        v-for="(menu, i) of menuWithCursor(cursor)"
        :key="i"
        class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 m-4 min-h-full">
        <div class="cardCustom max-w-sm rounded overflow-hidden shadow-md hover:shadow-lg bg-white">
          <img
            v-if="menu.imageURL"
            :src="menu.imageURL"
            :alt="menu.name"
            class="w-full">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{ menu.name }}</div>
            <p class="text-grey-darker text-base">
              {{ menu.description }}
            </p>
          </div>
          <div class="px-6 py-4">
            <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">#{{ menu.type }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- Menu End -->
    <!-- Pagination Start -->
    <ul class="flex flex-wrap list-reset border border-grey-light rounded w-auto font-sans justify-center">
      <li><a
        class="block hover:text-white hover:bg-blue text-blue border-r border-grey-light px-3 py-2"
        href="#"
        @click="decrementPagination">Prev</a></li>
      <li
        v-for="(_, i) of Array(menuMaxCursor)"
        :key="i"
        @click="cursor = i"><a
          :class="i === cursor ? 'block bg-blue text-white border-r border-grey-light px-3 py-2' : 'block hover:text-white hover:bg-blue text-blue border-r border-grey-light px-3 py-2'"
          href="#">{{ i }}</a></li>
      <li><a
        class="block hover:text-white hover:bg-blue text-blue px-3 py-2"
        href="#"
        @click="incrementPagination">Next</a></li>
    </ul>
    <!-- Pagination End -->
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      cursor: 0,
    };
  },
  computed: {
    ...mapGetters({
      menuWithCursor: 'menuWithCursor',
      menuMaxCursor: 'menuMaxCursor',
    }),
  },
  async mounted() {
    await this.fetchAllMenu();
  },
  methods: {
    ...mapActions({
      fetchAllMenu: 'FETCH_ALL_MENU',
    }),
    incrementPagination(e) {
      e.preventDefault();
      if (this.cursor !== this.menuMaxCursor - 1) {
        this.cursor += 1;
      }
    },
    decrementPagination(e) {
      e.preventDefault();
      if (this.cursor !== 0) {
        this.cursor -= 1;
      }
    },
  },
}
</script>

<style scoped>
.cardCustom {
  transition: 0.25s;
  cursor: pointer;
}
</style>
