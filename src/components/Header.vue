<template>
  <header>
    <div class="container">
      <div class="logo">
        <img src="@/assets/logo.png" alt="Логотип">
      </div>
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
  </header>
</template>

<script>
export default {
  name: "Header",
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
  flex-wrap: wrap;
}

header {
  padding-top: 30px;
  padding-bottom: 25px;
  box-shadow: 0px 0px 13.76px 2.24px rgba(85, 127, 165, 0.11);

  .contacts {
    display: flex;
    @media (max-width: 1024px) {
      width: 100%;
    }
  }

  @media (max-width: 1024px) {
    .logo {
      width: 100%;
      text-align: center;

      img {
        width: 178px;
        height: 44px;
      }
    }
  }

  .phone, .email {
    display: flex;
    align-items: center;
    font-size: 21px;
    @media (max-width: 1024px) {
      font-size: 16px;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      img {
        max-width: 20px;
      }
    }
    font-weight: 700;

    img {
      margin-right: 10px;
    }
    a{
      color: inherit;
      text-decoration: none;
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