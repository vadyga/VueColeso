<template>
  <table cellspacing="0" cellpadding="0">
    <thead>
    <tr>
      <th></th>
      <th>Модель/Бренд</th>
      <th>Типоразмер</th>
      <th>Город</th>
      <th>Остаток</th>
      <th>Розничная цена</th>
      <th>Оптовая цена</th>
      <th>Ваша цена</th>
      <th>Количество</th>
      <th></th>
    </tr>
    </thead>
    <Pagination @open="$emit('open')" :per-page="10" :items="(filteredProducts.length === 0) ? products : filteredProducts"/>
  </table>
</template>

<script>
import Pagination from "@/components/Pagination";
export default {
  name: "ItemsList",
  components: {
    Pagination
  },
  computed: {
    products (){
      //return this.$store.state.products.products.slice(0,50);
      return this.$store.state.products.products;
    },
    filteredProducts(){
      return this.$store.state.products.filteredProducts;
    }
  },
}
</script>

<style lang="scss" scoped>
table {
  width: 100%;
  border: none;
  border-spacing: 0 10px;
  thead {
    margin-top: 70px;
    margin-bottom: 20px;
    background-color: #cde7fe;
    color: #5482ab;
    font-size: 22px;
    border-radius: 3px;
    @media (max-width: 1460px) {
      font-size: 20px;
    }
    @media (max-width: 1200px) {
      font-size: 16px;
    }
    @media (max-width: 1024px) {
      display: none;
    }
    tr {
      border-radius: 3px;
      height: 58px;
      th{
        font-weight: 500;
        &:first-child{
          border-bottom-left-radius: 3px;
          border-top-left-radius: 3px;
        }
        &:last-child{
          border-bottom-right-radius: 3px;
          border-top-right-radius: 3px;
        }
      }
    }
  }
}

.table-head {
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
  margin-bottom: 20px;
  background-color: #cde7fe;
  color: #5482ab;
  height: 57px;
  align-items: center;
  font-size: 22px;
  @media (max-width: 1200px) {
    font-size: 16px;
  }
  .td {
    font-weight: 500;
    &:nth-child(1) {
      width: 230px;
    }

    &:nth-child(2) {
      width: 290px;
    }

    &:nth-child(3) {
      width: 150px;
    }
  }
}
</style>