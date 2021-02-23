<template>
  <transition name="modal-fade">
    <div class="modal-backdrop" role="dialog">
      <div class="modal" ref="modal">
        <header class="modal-header">
          <slot name="header">
            <h2>
              Оставить заявку
            </h2>

            <button type="button" class="btn-close btn-right" @click="close" aria-label="Close modal">
              x
            </button>
          </slot>
        </header>

        <section v-if="!sended" class="modal-body">
          Введите почту {{getState.choosedProduct}} {{getState.countProduct}}

          <input type="email" name="email" id="email" >
          <input type="hidden" name="product" id="product" :value="getState.choosedProduct">
          <input type="hidden" name="productCount" id="productCount" :value="getState.countProduct">
        </section>
        <section v-else class="modal-body">
          Успешно! Скоро с Вами свяжется менеджер.
        </section>


        <footer class="modal-footer">
          <slot name="footer">
            <button type="button" class="btn btn-green" @click="sendForm" aria-label="Close modal">
              Заказать
            </button>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
import {mapGetters} from "vuex";

export default {
name: "Modal",
  data() {
  return {
    email: '',
    id: '',
    sended: false
  }
  },
  methods: {
    close() {
      this.$emit('close');
    },
    sendForm(){
      let emailInput = document.querySelector('#email')
      let product = document.querySelector('#product')
      let productCount = document.querySelector('#productCount')

      let emailExpression = /.+@.+\..+/i;
      let emailRegex = new RegExp(emailExpression);
      if (!emailInput.value.match(emailRegex)) {
        emailInput.classList.add("error");
        return
      }

      fetch('/mail.php', {
        method: 'POST',
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        body: "email="+emailInput.value+"&product="+product.value+"&productCount="+productCount.value,
      })

      this.sended = true

    }
  },
  computed: {
    ...mapGetters(['getState'])
  }
}
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}
input, select {
  background-color: #f5faff;
  border-radius: 3px;
  height: 48px;
  width: 90%;
  padding-left: 15px;
  border: 2px solid transparent;
}
.error{
  border: 2px solid red;
}
.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #4aae9b;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  border: none;
  font-size: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}
.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
.btn {
  width: 125px;
  height: 48px;
  border: 0;
  border-radius: 3px;
  background-color: #0287ff;
  color: white;
  font-size: 22px;
  font-weight: bold;
}
</style>