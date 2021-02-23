<template>
  <tr class="desktop">
    <td class="img-col">
      <div class="desctop-img-wrap">
        <img :src="item.p_photo" alt="">
      </div>
    </td>
    <td>
      <div class="model">
        <div class="model" style="position: relative; padding-right: 20px;">
          <div class="model-text">
            {{ item.p_model }}
          </div>
          <span class="icon" v-if="item.p_season === 'Зимняя'">
            <img src="@/assets/snow.png" alt="">
          </span>
          <span class="icon" v-if="item.p_season === 'Летняя'">
            <img src="@/assets/sun.png" alt="">
          </span>
          <span class="icon" v-if="item.p_thorn === true">
            <img src="@/assets/ship.png" alt="">
          </span>
        </div>
        <div style="padding-right: 20px;">
          {{ item.p_brand }}
        </div>
      </div>
    </td>
    <td>
      {{ Math.ceil(item.p_width) + '/' + Math.ceil(item.p_height) + ' R' + Math.ceil(item.p_diameter) }}
    </td>
    <td class="city-col">
      <div class="city-moscow" v-if="moscow">
        <div class="text">Москва</div>
      </div>
      <div class="city-spb" v-if="spb">
        <div class="text">СПБ</div>
      </div>
      <div class="city-rf" v-if="rf">
        <div class="text">РФ</div>
      </div>
    </td>
    <td>
      <div class="count" v-if="moscow_count">
        {{ moscow_count }}
      </div>
      <div class="count" v-if="spb_count">
        {{ spb_count }}
      </div>
      <div class="count" v-if="rf_count">
        {{ rf_count }}
      </div>
    </td>
    <td>
      <div class="count" v-if="moscow_price">
        {{ Math.ceil(moscow_price) }} ₽
      </div>
      <div class="count" v-if="spb_price">
        {{ Math.ceil(spb_price) }} ₽
      </div>
      <div class="count" v-if="rf_price">
        {{ Math.ceil(rf_price) }} ₽
      </div>
    </td>
    <td>
      <div class="count" v-if="moscow_price_opt">
        {{ Math.ceil(moscow_price_opt) }} ₽
        <span class="sale sale-blue">
          * скидка 3%
        </span>
      </div>
      <div class="count" v-if="spb_price_opt">
        {{ Math.ceil(spb_price_opt) }} ₽
        <span class="sale sale-blue">
          * скидка 3%
        </span>
      </div>
      <div class="count" v-if="rf_price_opt">
        {{ Math.ceil(rf_price_opt) }} ₽
        <span class="sale sale-blue">
          * скидка 3%
        </span>
      </div>
    </td>
    <td>
      <div class="count" v-if="moscow_price">
        {{ Math.ceil(moscow_price - parseInt(moscow_price) * 0.02) }} ₽
        <span class="sale sale-gray">
          * скидка 3%
        </span>
      </div>
      <div class="count" v-if="spb_price">
        {{ Math.ceil(spb_price - parseInt(spb_price) * 0.02) }} ₽
        <span class="sale sale-gray">
          * скидка 3%
        </span>
      </div>
      <div class="count" v-if="rf_price">
        {{ Math.ceil(rf_price - parseInt(rf_price) * 0.02) }} ₽
        <span class="sale sale-gray">
          * скидка 3%
        </span>
      </div>
    </td>
    <td>
      <input class="count-val" v-model="getFilter.countProduct" type="text">
    </td>
    <td class="btn-col">
      <button class="order" @click="open">
        Заказать
      </button>
    </td>
  </tr>

  <tr class="mobile">
    <div class="card-heading">
      <div class="row">
        <div class="img-wrap">
          <img :src="item.p_photo" alt="">
        </div>
        <div class="text-wrap model">
          {{ item.p_model }}
        </div>
      </div>
      <div class="row ">
        <div class="brand">
          {{ item.p_brand }}
        </div>
      </div>
      <span class="icon" v-if="item.p_season === 'Зимняя'">
            <img src="@/assets/snow.png" alt="">
          </span>
      <span class="icon" v-if="item.p_season === 'Летняя'">
            <img src="@/assets/sun.png" alt="">
          </span>
      <span class="icon" id="ship" v-if="item.p_thorn === true">
            <img src="@/assets/ship.png" alt="">
          </span>
    </div>
    <div class="card-body">
      <div class="headings">
        <div class="col"></div>
        <div class="col">Розн</div>
        <div class="col">Б/н</div>
        <div class="col">Нал.</div>
        <div class="col">Шт.</div>
      </div>
      <div class="spb" v-if="spb_count">
        <div class="col">СПБ</div>
        <div class="col"> {{ Math.ceil(spb_price) }}
        </div>
        <div class="col"> {{ Math.ceil(spb_price_opt) }}
        </div>
        <div class="col"> {{ Math.ceil(spb_price - parseInt(spb_price) * 0.02) }}
        </div>
        <div class="col"> {{ spb_count }}
        </div>
      </div>
      <div class="moscow" v-if="moscow_count">
        <div class="col">МСК</div>
        <div class="col"> {{ Math.ceil(moscow_price) }}
        </div>
        <div class="col"> {{ Math.ceil(moscow_price_opt) }}
        </div>
        <div class="col"> {{ Math.ceil(moscow_price - parseInt(moscow_price) * 0.02) }}
        </div>
        <div class="col"> {{ moscow_count }}
        </div>
      </div>
      <div class="russia" v-if="rf_count">
        <div class="col">РФ</div>
        <div class="col"> {{ Math.ceil(rf_price) }}
        </div>
        <div class="col"> {{ Math.ceil(rf_price_opt) }}
        </div>
        <div class="col"> {{ Math.ceil(rf_price - parseInt(rf_price) * 0.02) }}
        </div>
        <div class="col"> {{ rf_count }}
        </div>
      </div>
      <div class="order-row">
        <button class="order" @click="open">
          Заказать
        </button>
      </div>
    </div>
  </tr>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Item",
  props: {
    item: Object,
  },
  data() {
    return {
      aviable: '',
      moscow: false,
      spb: false,
      rf: false,
      moscow_count: 0,
      spb_count: 0,
      rf_count: 0,
      moscow_price: '',
      spb_price: '',
      rf_price: '',
      moscow_price_opt: '',
      spb_price_opt: '',
      rf_price_opt: '',
    }
  },
  methods: {
    open() {
      this.$store.commit('chooseProduct', this.item.code)
      this.$emit('open');

    },
  },
  mounted() {
    this.item.available.forEach(item => {
      if (item.stock_name.includes('moskva')) {
        this.moscow = true
        this.moscow_count = this.moscow_count + item.quantity
        this.moscow_price = item.price
        let koef = parseInt(item.price) * 0.05
        if (koef < 350)
          koef = 350
        this.moscow_price_opt = parseInt(item.price) + koef
      } else if (item.stock_name.includes('sankt-peterburg')) {
        this.spb = true
        this.spb_count = this.spb_count + item.quantity
        this.spb_price = item.price
        let koef = parseInt(item.price) * 0.05
        if (koef < 350)
          koef = 350
        this.spb_price_opt = parseInt(item.price) + koef
      } else {
        this.rf = true
        this.rf_count = this.rf_count + item.quantity
        this.rf_price = item.price
        let koef = parseInt(item.price) * 0.05
        if (koef < 350)
          koef = 350
        this.rf_price_opt = parseInt(item.price) + koef
      }
    })
  },
  computed: {
    ...mapGetters([
      'getFilter',
    ])
  }
}
</script>

<style lang="scss" scoped>
tbody {
  width: 100%;

  .sale{
    font-size: 15px;
    display: inline-block;
    @media (max-width: 1024px) {
      display: none;
    }
  }
  .sale-blue{
    color: #0186ff;
  }
  .sale-gray{
    color: #aab3bc;
  }


  .desctop-img-wrap {
    width: 100%;
    height: 90%;
    position: relative;
    overflow: hidden;

    img {
      height: 200%;
      left: 12.5%;
    }
  }
  .btn-col {
    width: 160px;
  }
  .icon {
    width: 30px;
    height: 30px;
    position: absolute;

    img {
      width: 30px;
    }

    &:nth-child(1) {
      right: 10px;
      top: 0;
    }

    &:nth-child(2) {
      right: 10px;
      top: 15px;

      img {
        width: 25px;
        height: 25px;
        @media (max-width: 1500px) {
          width: 25px;
          height: 25px;
        }
      }
    }

    &:nth-child(3) {
      right: 5px;
      top: 25px;

    }
  }

  tr {
    height: 104px;
    overflow: hidden;
    background-color: white;
    margin-bottom: 10px;
    border-radius: 3px;
    box-shadow: 0px 0px 13.76px 2.24px rgba(102, 148, 189, 0.08);

    td {
      height: 104px;
      text-align: center;
      font-size: 22px;
      @media (max-width: 1460px) {
        font-size: 20px;
      }
      @media (max-width: 1200px) {
        font-size: 18px;
      }
      position: relative;

      img {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .img-col {
      width: 107px;
    }

    .city-col {
      display: flex;
      flex-direction: column;
      align-items: center;

      .city-moscow {
        background-color: #caf1cb;
        color: #90c391;
      }

      .city-rf {
        background-color: #ffe2a3;
        color: #d0b64f;
      }

      .city-spb {
        background-color: #b4dafd;
        color: #83aed6;
      }

      > * {
        height: 100%;
        width: 100%;
        display: flex;

        > * {
          margin: auto;
        }
      }
    }

    .order {
      border: 0;
      background-color: #0287ff;
      color: white;
      font-size: 22px;
      border-radius: 3px;
      padding: 7px;
      font-weight: bold;
      cursor: pointer;
      @media (max-width: 1200px) {
        font-size: 18px;
      }
    }

    .count-val {
      border: none;
      background-color: #f5faff;
      border-radius: 3px;
      height: 48px;
      width: 100%;
      max-width: 106px;
      box-sizing: border-box;
      font-size: 22px;
      @media (max-width: 1200px) {
        font-size: 18px;
        max-width: 80px;
      }
      padding: 7px;
      color: transparent;

      &:focus {
        outline: 0;
        background-color: #b2d2ef;
        color: black;
      }
    }
  }
}

.item {
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  height: 102px;
  padding-right: 20px;
  font-size: 22px;

  > * {
    &:nth-child(1) {
      min-width: 230px;
    }

    &:nth-child(2) {
      min-width: 290px;
    }

    &:nth-child(3) {
      min-width: 150px;
    }
  }


  .item-img {
    width: 167px;
    height: 100%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .item-model {
    .text {
      .model {
        font-size: 22px;
        color: #3c4452;

      }

      .brand {
        font-size: 22px;
        color: #8a8f9e;
      }
    }
  }

  .item-order {
    button {
      width: 125px;
      height: 48px;
      border: 0;
      border-radius: 3px;
      background-color: #0287ff;
      color: white;
      font-size: 22px;

      font-weight: bold;
    }
  }
}

.mobile {
  display: none;
}

@media (max-width: 1024px) {
  .desktop {
    display: none;
  }
  .mobile {
    display: table;
    width: 100vw;

    .card-heading {
      padding: 10px;
      border-bottom: 1px solid #ebf3fa;
      position: relative;
      padding-right: 30px;

      .icon {
        position: absolute;
      }

      .icon:nth-child(1) {
        right: 15px;
        top: 0;
      }

      .icon:nth-child(2) {
        right: 10px;
        top: 5px;
      }

      .icon:nth-child(3) {
        right: 15px;
        top: 0;
      }

      #ship{
        top: 25px;
        right: 0;
      }

      .row {
        display: flex;
        width: 100%;

        .img-wrap {
          height: 35px;
          width: 70px;
          position: relative;
          overflow: hidden;

          img {
            position: absolute;
            bottom: 0;
            width: 70px;
          }
        }

        .model {
          color: #8a8f9e;
          font-size: 22px;
        }

        .brand {
          color: #3c4452;
          font-size: 22px;
        }
      }
    }

    .card-body {
      .headings, .spb, .moscow, .russia {
        width: 100%;
        display: flex;
      }

      .col {
        width: 100%;
        padding: 5px;
        text-align: center;
      }

      .headings {
        border-bottom: 1px solid #ebf3fa;

        .col {
          color: #b4cbe0;
        }
      }

      .spb {
        border-bottom: 1px solid #ebf3fa;

        .col:first-child {
          background-color: #b4dafd;
          color: #83aed6;
        }
      }

      .moscow {
        border-bottom: 1px solid #ebf3fa;

        .col:first-child {
          background-color: #caf1cb;
          color: #90c391;
        }
      }

      .russia {
        border-bottom: 1px solid #ebf3fa;

        .col:first-child {
          background-color: #ffe2a3;
          color: #d0b64f;
        }
      }
    }

    .order-row {
      margin-top: 15px;
      padding: 0 15px;

      .order {
        width: 100%;
      }
    }
  }
}
</style>