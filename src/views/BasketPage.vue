<template>
  <div class="basket_head">
    <BackIcon class="back-icon" @click="this.$router.go(-1)" />
    <!-- <router-link to="/home">
      <BackIcon class="back-icon"/>
    </router-link> -->
    <a class="basket_head-title">КОРЗИНА С ВЫБРАННЫМИ ТОВАРАМИ</a>
    <router-link to="/" >
        <button class="exit" id="exitButton">Выйти</button>
    </router-link>
  </div>
  <div class="backet_cards">
    <CardProduct
        v-for="product in basketProducts"
        :key="product.id"
        v-bind:customClass="'custom-card'"
        v-bind:customStyle="{
          border: 'none',
          gap: '16px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          width: '100%',
          height: 'auto',
          padding: '16px 0'}"
        v-bind:customTitleStyle="{
          width: '100%'}"
        v-bind:customImgStyle="{
          height: '132px',
          width: 'auto'}"
        v-bind:customCountBtStyle="{
          gap: '16px',
          justifyContent: 'flex-end'}"
        :imageSrc="product.img"
        :title="product.title"
        :price="product.price"
        :productId="product.id"
        :isInBasket="true"
        :isActiveSubtitle="false"
        @remove-product="removeFromBasket"
        @card-click="goToProductPage(product)"
      />
  </div>
  <div class="backet_decoration">
    <div class="backet_decoration-text">
      <p class="title">ЗАКАЗ НА СУММУ:</p>
      <p class="count">{{ allPriceProductsInBasket }} ₽</p>
    </div>

      <!-- <ButtonUI /> -->
      <button
        @click="handleOrder"
        :disabled="basketProducts.length === 0"
        :class="{'decor_bt': true, 'decor_bt--disabled': basketProducts.length === 0}">
        Оформить заказ
      </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import BackIcon from '@/components/icons/BackIcon.vue'
import CardProduct from '@/components/elements/CardProduct'

export default {
  name: 'BasketPage',
  components: {
    BackIcon,
    CardProduct
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
    },
    goToProductPage (product) {
      this.$router.push({
        name: 'ProductPage',
        params: { id: product },
        state: {
          title: product.title,
          price: product.price,
          img: product.img
        }
      })
    },
    handleOrder () {
      this.$store.dispatch('clearBasket') // Очистка корзины
      this.$router.push('/decoration')
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

.backet_cards{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 134px 200px;

  @media (max-width: 1700px) {
    padding: 134px 70px;
  }
}

.backet_decoration {
  height: 90px;
  position: fixed;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 64px;
  padding: 8px 200px;
  z-index: 20;
  background-color: #161516;
  bottom: 0;
  border-top: 1px solid #D58C51;

  &-text{
    display: flex;
    flex-direction: row;
    align-content: center;
    gap: 16px;

    .title{
      font-weight: 400;
      font-size: 21px;
      margin: 0;
      color: #ffffff;
    }

    .count{
      font-weight: 400;
      font-size: 21px;
      margin: 0;
      color: #D58C51;
    }
  }

  .decor_bt{
    width: 200px;
    height: 42px;
    color: #161516;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 400;
    background-color: #D58C51;
    border: none;
    cursor: pointer;

    &:hover{
      color: #D58C51;
      background-color: #161516;
      border: 1px solid #D58C51;
    }

    &--disabled {
      background-color: #3a3a3a;
      cursor: not-allowed;
      color: #bdbdbd;

      &:hover {
        background-color: #3a3a3a;
        cursor: not-allowed;
        color: #bdbdbd;
        border: none;
      }
    }

    @media (max-width: 1700px) {
      padding: 8px 70px;
    }
  }
}
</style>
