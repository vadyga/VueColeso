<template>
  <div class="filter">
    <h1>
      Легковые шины
    </h1>
    <div class="block-wrapper">
      <div class="left-block">
        <h2>Технические характеристики</h2>
        <div class="filter-row">
          <div class="input-wrapper">
            <label for="width">
              Ширина <br>
              <select name="" v-model="getFilter.width" id="width">
                <option value="" selected disabled hidden>Любой</option>
                <option :value="option" v-for="option in getFilterProps.width.sort(function (a,b){return a - b})"
                        :key="option">
                  {{ option }}
                </option>
              </select>
            </label>
          </div>
          <div class="input-wrapper">
            <label for="height">
              Высота <br>
              <select name="" v-model="getFilter.height" id="height">
                <option value="" selected disabled hidden>Любой</option>
                <option :value="option" v-for="option in getFilterProps.height.sort(function (a,b){return a - b})"
                        :key="option">
                  {{ option }}
                </option>
              </select>
            </label>
          </div>
          <div class="input-wrapper">
            <label for="diametr">
              Диаметр <br>
              <select name="" v-model="getFilter.diametr" id="diametr">
                <option value="" selected disabled hidden>Любой</option>
                <option :value="option" v-for="option in getFilterProps.diametr.sort(function (a,b){return a - b})"
                        :key="option">
                  {{ option }}
                </option>
              </select>
            </label>
          </div>
          <div class="input-wrapper input-checkbox" style="display: none">
            <input id="sparka" style="display: none" v-model="getFilter.sparka" type="checkbox">
            <label for="sparka">
              Спарка
            </label>
          </div>
        </div>
        <div class="filter-row" v-if="getFilter.sparka">
          <div class="input-wrapper">
            <label for="sparkaWidth">
              Спарка ширина <br>
              <input id="sparkaWidth" type="text">
            </label>
          </div>
          <div class="input-wrapper">
            <label for="sparkaHeight">
              Спарка высота <br>
              <input id="sparkaHeight" type="text">
            </label>
          </div>
          <div class="input-wrapper">
            <label for="sparkaDiametr">
              Спарка ширина <br>
              <input id="sparkaDiametr" type="text">
            </label>
          </div>
        </div>
        <div class="filter-row">
          <div class="input-wrapper">
            <label for="brand">
              Бренд <br>
              <select name="" v-model="getFilter.brand" id="brand">
                <option value="" selected disabled hidden>Любой</option>
                <option :value="option" v-for="option in getFilterProps.brand.sort()" :key="option">
                  {{ option }}
                </option>
              </select>
            </label>
          </div>
          <div class="input-wrapper">
            <label for="model">
              Модель <br>
              <select name="" v-model="getFilter.model" id="model">
                <option value="" selected disabled hidden>Любой</option>
                <option :value="option" v-for="option in getFilterProps.model.sort()" :key="option">
                  {{ option }}
                </option>
              </select>
            </label>
          </div>
          <div class="input-wrapper">
            <label for="season">
              Сезон <br>
              <select name="" v-model="getFilter.season" id="season">
                <option value="" selected disabled hidden>Любой</option>
                <option :value="option" v-for="option in getFilterProps.season.sort()" :key="option">
                  {{ option }}
                </option>
              </select>
            </label>
          </div>
          <div class="input-wrapper">
            <label for="spike">
              Шипы <br>
              <select name="" v-model="getFilter.ships" id="spike">
                <option value="" selected disabled hidden>Любой</option>
                <option :value="true">
                  Есть
                </option>
                <option :value="false">
                  Нет
                </option>
              </select>
            </label>
          </div>
        </div>
        <div class="filter-row">
          <div class="input-wrapper input-checkbox">
            <input id="runflat" v-model="getFilter.runflat" type="checkbox">
            <label for="runflat">
              RunFlat
            </label>
          </div>
          <div class="input-wrapper input-checkbox">
            <input id="lightweight" v-model="getFilter.light" type="checkbox">
            <label for="lightweight">
              Легкогрузовые
            </label>
          </div>
          <div class="input-wrapper input-checkbox">
            <input id="mt" v-model="getFilter.mt" type="checkbox">
            <label for="mt">
              М/Т
            </label>
          </div>
          <div class="input-wrapper input-checkbox">
            <input id="at" v-model="getFilter.at" type="checkbox">
            <label for="at">
              A/T
            </label>
          </div>
        </div>
      </div>
      <div class="right-block">
        <div class="params">
          <h2>Параметры поставщика</h2>
          <div class="filter-row">
            <div class="input-wrapper">
              <label for="min">
                Мин. общий остаток <br>
                <input id="min" v-model="getFilter.total" type="text">
              </label>
            </div>
          </div>
        </div>
        <div class="search-wrapper">
          <h2>Поиск</h2>
          <div class="filter-row">
            <div class="input-wrapper">
              <label for="articul">
                Артикул <br>
                <input id="articul" v-model="getFilter.articul" type="text">
              </label>
            </div>
            <div class="input-wrapper">
              <label for="search">
                Поиск по названию <br>
                <input id="search" type="text">
              </label>
            </div>
          </div>
          <div class="filter-row">
            <div class="input-wrapper">
              <label for="sort">
                Сортировка <br>
                <select name="" v-model="getFilter.sort" id="sort">
                  <option value="" selected disabled hidden>Любой</option>
                  <option value="2">Название A-Z</option>
                  <option value="3">Название Z-A</option>
                </select>
              </label>
            </div>
            <div class="input-wrapper">
              <label for="size">
                Поиск по размеру <br>
                <input id="size" type="text">
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button class="search" @click="filterRequest">
      Поиск
    </button>
    <button class="reset" @click="filterReset">
      Сбросить
    </button>
  </div>
  <div class="mobile-filter">
    <h1>Легковые шины</h1>
    <div class="block-wrapper">
      <div class="input-wrapper">
        <label for="model">
          Поиск <br>
          <select name="" v-model="getFilter.model" id="">
            <option value="" selected disabled hidden>Любой</option>
            <option :value="option" v-for="option in getFilterProps.model.sort()" :key="option">
              {{ option }}
            </option>
          </select>
        </label>
      </div>
      <div class="input-wrapper">
        <label for="brand">
          Бренд <br>
          <select name="" v-model="getFilter.brand" id="">
            <option value="" selected disabled hidden>Любой</option>
            <option :value="option" v-for="option in getFilterProps.brand.sort()" :key="option">
              {{ option }}
            </option>
          </select>
        </label>
      </div>
      <div class="input-wrapper">
        <label for="season">
          Сезон <br>
          <select name="" v-model="getFilter.season" id="">
            <option value="" selected disabled hidden>Любой</option>
            <option :value="option" v-for="option in getFilterProps.season.sort()" :key="option">
              {{ option }}
            </option>
          </select>
        </label>
      </div>
      <div class="filter-row">
        <div class="input-wrapper">
          <label for="min">
            Мин. общий остаток <br>
            <input id="min1" v-model="getFilter.total" type="text">
          </label>
        </div>
      </div>
      <button class="search" @click="filterRequest">
        Поиск
      </button>
      <button class="reset" @click="filterReset">
        Сбросить
      </button>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "Filter",
  computed: {
    ...mapGetters([
      'getFilter',
      'getFilterProps'
    ])
  },
  methods: {
    filterRequest() {
      return this.$store.dispatch('FILTER_PRODUCTS')
    },
    filterReset() {
      return this.$store.dispatch('filterReset')
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  background-color: #0287ff;
  border: 0;
  font-size: 22px;
  width: 216px;
  padding: 10px 40px;
  color: white;
  border-radius: 4px;
  margin-right: 20px;
  cursor: pointer;
  @media (max-width: 1024px) {
    width: 100%;
    margin-bottom: 20px;
  }
}

.reset {
  background-color: #a2b8cc;
  border: 0;
  font-size: 22px;
  width: 216px;
  padding: 10px 40px;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  @media (max-width: 1024px) {
    width: 100%;
  }
}

.mobile-filter {
  display: none;
}

.mobile-filter {
  @media (max-width: 1024px) {
    display: block;
  }

  h1 {
    font-size: 33px;
    color: #3c4452;
    text-align: center;
    margin-bottom: 10px;
  }

  .block-wrapper {
    background-color: white;
    padding: 30px 15px;
  }

  .input-wrapper {
    margin-bottom: 20px;
  }

  .filter-row {
    width: 100%;
    overflow: hidden;
  }

  label {
    color: #aab4bc;

    input, select {
      background-color: #f5faff;
      border-radius: 3px;
      height: 48px;
      width: 100%;
      padding-left: 15px;
      border: 1px solid transparent;
      -webkit-appearance: none;
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAYAAAA/33wPAAAAvklEQVQoFY2QMQqEMBBFv7ERa/EMXkGw11K8QbDXzuN4BHv7QO6ifUgj7v4UAdlVM8Uwf+b9YZJISnlqrfEUZVlinucnBGKaJgghbiHOyLyFKIoCbdvecpyReYvo/Ma2bajrGtbaC58kCdZ1RZ7nl/4/4d5EsO/7nzl7IUtodBexMMagaRrs+06JLMvcNWmaOv2W/C/TMAyD58dxROgSmvxFFMdxoOs6lliWBXEcuzokXRbRoJRyvqqqQvye+QDMDz1D6yuj9wAAAABJRU5ErkJggg==);
      background-position: right center;
      background-repeat: no-repeat;
      padding-right: 1.5em;

      &:focus {
        outline: none;
        border: 1px solid #6ab8ff;
        background-color: white;
      }
    }
  }
}

.filter {
  background-color: white;
  box-shadow: 0px 0px 13.76px 2.24px rgba(102, 148, 189, 0.08);
  padding: 15px 30px;
  margin-bottom: 50px;
  border-radius: 3px;
  @media (max-width: 1024px) {
    display: none;
  }

  h1 {
    font-size: 51px;
    color: #3c4452;
  }

  .block-wrapper {
    display: flex;
    justify-content: space-between;
    //padding: 52px 25px;
    padding-top: 25px;
    padding-bottom: 25px;


    @media (max-width: 1200px) {
      flex-wrap: wrap;
    }

    .left-block, .right-block {
      width: 50%;
      @media (max-width: 1200px) {
        width: 100%;
      }
    }

    .params,.search-wrapper{
      box-shadow: 0px 0px 13.76px 2.24px rgba(102, 148, 189, 0.08);
      padding: 25px
    }
    .params{
      margin-bottom: 10px;
    }

    .left-block {
      padding-right: 55px;
      box-shadow: 0px 0px 13.76px 2.24px rgba(102, 148, 189, 0.08);
      padding-top: 25px;
      padding-left: 25px;
      @media (max-width: 1420px) {
        padding-right: 20px;
      }
      @media (max-width: 1200px) {
        padding-right: 0;
      }
    }

    .right-block {
      padding-left: 50px;
      @media (max-width: 1420px) {
        padding-left: 20px;
      }
      @media (max-width: 1200px) {
        padding-left: 0;
      }

      .input-wrapper {
        overflow: hidden;
      }
    }

    h2 {
      font-size: 33px;
      color: #3c4452;
      margin-bottom: 25px;
      font-weight: 500;
    }

    .filter-row {
      display: flex;
      margin-bottom: 20px;
      align-items: flex-end;
      width: 100%;

      .input-wrapper {
        margin-right: 20px;
        width: 100%;

        &.input-checkbox {
          font-size: 19px;
          width: 35%;
          display: flex;
          align-items: center;

          input {
            display: none;
          }

          input[type="checkbox"] {

            & + label {
              position: relative;
              cursor: pointer;
              padding: 0;
              display: flex;
              flex-direction: row-reverse;
              align-items: center;
            }

            // Box.
            & + label:before {
              content: '';
              margin-left: 10px;
              display: inline-block;
              vertical-align: text-top;
              width: 47px;
              height: 47px;
              background: #b2d2ef;
              border-radius: 3px;
            }

            // Box hover
            &:hover + label:before {
              background: #0186ff;
            }

            // Box focus
            &:focus + label:before {
              box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12);
            }

            // Box checked
            &:checked + label:before {
              background: #0186ff;
            }


            // Checkmark. Could be replaced with an image
            &:checked + label:after {
              content: '';
              position: absolute;
              right: 10px;
              top: 15px;
              background-image: url("./../assets/checked.png");
              background-repeat: no-repeat;
              width: 24px;
              height: 22px;
            }
          }
        }


        label {
          color: #aab4bc;

          input, select {
            background-color: #f5faff;
            border-radius: 3px;
            margin-top: 10px;
            height: 48px;
            width: 100%;
            //max-width: 216px;
            padding-left: 15px;
            border: 2px solid transparent;
            box-sizing: border-box;

            &:focus {
              outline: none;
              border: 2px solid #6ab8ff;
              background-color: white;
            }
          }
          select{
            cursor: pointer;
          }
        }
      }

    }
  }

  .right-block {
    input, select {
      max-width: 100% !important;
    }
  }
}
</style>