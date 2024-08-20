<template>
  <div class="basket_head">
    <router-link to="/home">
      <BackIcon class="back-icon"/>
    </router-link>
    <!-- <BackIcon class="back-icon" @click="this.$router.go(-1)"/> -->
    <a class="basket_head-title">ОФОРМЛЕНИЕ ЗАКАЗА</a>
    <router-link to="/" >
        <button class="exit" id="exitButton">Выйти</button>
    </router-link>
  </div>
  <div class="container">
    <div class="container_title">
      ЗАКАЗ ОФОРМЛЕН
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BackIcon from '@/components/icons/BackIcon.vue'

export default {
  name: 'BasketPage',
  components: {
    BackIcon
  },
  computed: {
    ...mapGetters(['getBasketProducts', 'getAllPriceProductsInBasket']),
    basketProducts () {
      return this.getBasketProducts
    },
    allPriceProductsInBasket () {
      return this.getAllPriceProductsInBasket
    }
  },
  methods: {
    removeFromBasket (productId) {
      this.$store.dispatch('removeProductFromBasket', productId)
    }
  },
  created () {
    const savedState = JSON.parse(localStorage.getItem('vuex-state'))
    if (savedState) {
      this.$store.replaceState(savedState)
    }
  },
  props: {}
}
</script>

<style lang="scss" scoped>
.basket_head {
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 40px 200px;
  z-index: 20;
  background-color: #161516;

  .back-icon {
    width: 40px; /* Установите нужный размер */
    height: 40px; /* Установите нужный размер */
    margin-right: 64px;
  }

  &-title{
    font-weight: 500;
    font-size: 31px;
    width: 100%;
    color: #ffffff;
  }

  .exit{
    width: 200px;
    height: 42px;
    border: solid 1px #D58C51;
    color: #D58C51;
    font-weight: 400;
    font-size: 14px;
    cursor: pointer;

    &:hover{
      background-color: #D58C51;
      color: #161516;
    }
  }

  @media (max-width: 1700px) {
    padding: 40px 70px;
  }
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding-top: 60px;
    box-sizing: border-box;

    &_title {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #D58C51;
      font-size: 32px;
      font-weight: 500;
      text-align: center;
    }
}
</style>
