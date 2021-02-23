<template>
  <div>
    <Header/>
    <Loader :title="title" v-if="loading"/>
    <main v-else>
      <div class="container">
        <Filter/>
        <ItemsList @open="showModal">
        </ItemsList>
      </div>
    </main>
    <Footer/>
    <Modal v-if="isModalVisible" @close="closeModal"/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Filter from "@/components/Filter";
import ItemsList from "@/components/ItemsList";
import Loader from "@/components/Loader";
import Modal from "@/components/Modal";

export default {
  name: 'App',
  data: function () {
    return {
      pages: '',
      isModalVisible: false,
    }
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  },
  components: {
    Loader,
    Header,
    Filter,
    ItemsList,
    Footer,
    Modal
  },
  computed: {
    loading() {
      return this.$store.state.products.PRODUCTS_REQUEST_LOADING
    },
    title() {
      return this.$store.state.products.PRODUCTS_REQUEST_STATUS;
    }
  },
  mounted() {
    this.$store.dispatch('LOAD_PRODUCTS_REQUEST');
    this.windowWidth = window.innerWidth
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap');

.pagination {
  display: flex;
  list-style: none;

  .page-item {
    margin-right: 10px;
    display: block;

    button {
      border: 0;
      font-size: 22px;
      background-color: white;
      margin-right: 10px;
      color: #aab3bc;

      &.active {
        color: #0287ff;
      }

      &:focus {
        outline: none;
      }
    }
  }
}

body {
  font-family: 'Roboto', sans-serif;

}

* {
  padding: 0;
  margin: 0;
}

.container {
  padding: 0 40px;
  @media (max-width: 1024px) {
    padding: 0;
  }
}

main {
  background-color: #f4f8fc;
  padding-top: 90px;
  @media (max-width: 1024px) {
    padding-top: 50px;
  }
  overflow-x: hidden;
}
</style>
