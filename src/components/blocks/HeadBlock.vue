<template>
  <header class="head">
    <a>НАША ПРОДУКЦИЯ</a>
    <div class="head_shopping">
      <div class="head_shopping_text">
        <p>{{ countProductsInBasket }} товара</p>
        <p>на сумму {{ allPriceProductsInBasket }} ₽</p>
      </div>
      <router-link to="/shopping">
        <div class="head_shopping_bt">
          <BasketIcon />
        </div>
      </router-link>
      <router-link to="/" class="exit" id="exitButton">Выйти</router-link>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
import BasketIcon from '../icons/BasketIcon.vue'

export default {
  name: 'HeadBlock',
  components: {
    BasketIcon
  },
  computed: {
    ...mapGetters(['getCountProductsInBasket', 'getAllPriceProductsInBasket']),
    countProductsInBasket () {
      return this.getCountProductsInBasket
    },
    allPriceProductsInBasket () {
      return this.getAllPriceProductsInBasket
    }
  },
  props: {
  }
}
</script>

<style lang="scss">
.head{
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 200px;
  z-index: 20;
  background-color: #161516;

  a{
    font-weight: 500;
    font-size: 31px;
    color: #ffffff;
  }

  &_shopping{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;

    &_text{
      font-weight: 500;
      font-size: 16px;
      text-align: left;
      color: #ffffff;
      text-align: right;
    }

    &_bt{
      width: 40px;
      height: 40px;
      border-radius: 20px;
      background-color: #D58C51;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    .exit{
      display: flex;
      align-items: center;
      justify-content: center;
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
  }

  @media (max-width: 1700px) {
    padding: 40px 70px;
  }
}
</style>
