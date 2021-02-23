<template>
  <tbody id="page">
  <Item @open="$emit('open')" v-for="item in pageActive" :item="item" :key="item.code"/>
  <ul class="pagination">
    <li class="prev page-item" @click="prev">
      <img src="@/assets/prev.png" alt="">
    </li>
    <li class="page-item" v-for="(p,i) in pagesCounter" :key="i">
      <button @click="setPage(p)" :class="{active: p === page}">{{ p + 1 }}</button>
    </li>
    <li class="next page-item" @click="next">
      <img src="@/assets/next.png" alt="">
    </li>
  </ul>
  </tbody>
</template>

<script>
import Item from "@/components/Item";

export default {
  name: "Pagination",
  props: {
    items: {
      required: true,
      type: Array
    },
    perPage: {
      default: 10,
      type: Number
    }
  },
  components: {
    Item
  },
  data: function () {
    return {
      page: 0,
      windowWidth: ''
    }
  },
  computed: {
    paginatedItems() {
      const array_size = this.perPage;
      const sliced_array = [];
      for (let i = 0; i < this.items.length; i += array_size) {
        sliced_array.push(this.items.slice(i, i + array_size));
      }
      return sliced_array;
    },
    pagesCounter() {
      let res = [];
      if (this.page === 1 || this.page === 0) {
        res = [0, 1, 2, 3, 4];
      } else if (this.page === 2) {
        res = [0, 1, 2, 3, 4];
      } else if (this.page === this.paginatedItems.length) {
        res = [this.page - 3, this.page - 2, this.page - 1];
      } else {
        res = [this.page - 2, this.page - 1, this.page, this.page + 1, this.page + 2]
      }
      return res;
    },
    pageActive() {
      return this.paginatedItems[this.page];
    }
  },
  methods: {
    setPage(page) {
      this.page = page;
    },
    prev() {
      if(this.page !== 0)
        this.page = this.page - 1
    },
    next() {
      this.page = this.page + 1
    }
  },
  mounted() {
    this.windowWidth = window.innerWidth
  }
}
</script>

<style scoped lang="scss">
.pagination {
  display: flex;
  @media (max-width: 1024px) {
    justify-content: space-between;
    padding: 0 15px;
  }
  list-style: none;
  margin: 15px auto;

  .page-item {
    margin-right: 20px;
    display: block;
    cursor: pointer;

    button {
      border: 0;
      font-size: 22px;
      margin-right: 10px;
      color: #aab3bc;
      cursor: pointer;
      background-color: transparent;

      &.active {
        color: #0287ff;
      }

      &:focus {
        outline: none;
      }
      &:hover{
        color: #cde7fe!important;
      }
    }
  }
}
</style>