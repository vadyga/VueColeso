<template>
  <footer>
    <div class="container">
      <div class="contacts">
        <div class="phone">
          <div class="img-wrap">
            <img src="@/assets/telephone.png" alt="phone">
          </div>
          <div class="text-wrap">
            <a href="tel:+79626855535">
            +7 962 685 55 35
            </a>
          </div>
        </div>
        <div class="email">
          <div class="img-wrap">
            <img src="@/assets/email.png" alt="email">
          </div>
          <div class="text-wrap">
            <a href="mailto:9855535@mail.ru">
            9855535@mail.ru
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="scss" scoped>
.container {
  padding: 0 40px;
  @media (max-width: 1024px) {
    padding: 0 15px;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
}

footer {
  a{
    color: inherit;
    text-decoration: none;
  }
  padding-top: 30px;
  padding-bottom: 25px;
  box-shadow: 0px 0px 13.76px 2.24px rgba(85, 127, 165, 0.11);

  .contacts {
    display: flex;
    @media (max-width: 1024px) {
      justify-content: space-between;
      width: 100%;
    }
  }

  .phone, .email {
    display: flex;
    align-items: center;
    font-size: 21px;
    font-weight: 700;
    @media (max-width: 1024px) {
      font-size: 16px;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      img{
        max-width: 20px;
      }
    }
    img {
      margin-right: 10px;
    }
  }

  .phone {
    margin-right: 70px;
    @media (max-width: 1024px) {
      margin-right: 0;
    }
  }
}
</style>