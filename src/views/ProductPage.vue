<template>
  <div class="content_product">
    <div class="header">
      <BackIcon @click="this.$router.go(-1)"/>
      <!-- <router-link to="/home" >
        <BackIcon />
      </router-link> -->
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
        <router-link to="/" >
          <button class="exit" id="exitButton">Выйти</button>
        </router-link>
      </div>
    </div>
    <div class="product">
      <img class="product_img" :src="require(`@/assets/img/${productImg}`)">
      <div class="product_description">
        <p class="title">{{ productTitle }}</p>
        <p class="description">Не следует, однако забывать, что консультация с широким активом представляет собой интересный эксперимент проверки новых предложений. Не следует, однако забывать, что сложившаяся структура организации позволяет оценить значение новых предложений. Разнообразный и богатый опыт начало повседневной работы по формированию позиции требуют от нас анализа позиций.Не следует, однако забывать, что консультация с широким активом представляет собой интересный эксперимент проверки новых предложений. Не следует, однако забывать, что сложившаяся структура организации позволяет оценить значение новых предложений.
        </p>
        <div class="countBt">
          <p class="countBt_count">{{ productPrice }} ₽</p>
          <!-- Кнопка "В корзину" отображается, если переменная isInBasket имеет значение false. То есть, если продукт ещё не добавлен в корзину -->
          <button v-if="!isInBasket" class="countBt_bt" @click="addToBasket">В корзину</button>

          <!--  Эта директива означает "иначе". Если условие v-if ложно (то есть isInBasket равно true), тогда отображается кнопка "Добавлен в корзину" -->
          <button v-else class="countBt_add" @click="removeFromBasket" >Удалить из корзины</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import BackIcon from '@/components/icons/BackIcon.vue'
import BasketIcon from '@/components/icons/BasketIcon.vue'

export default {
  name: 'ProductPage',
  components: {
    BackIcon,
    BasketIcon
  },
  computed: {
    ...mapGetters(['getCountProductsInBasket', 'getAllPriceProductsInBasket', 'getBasketProducts']),
    countProductsInBasket () {
      return this.getCountProductsInBasket
    },
    allPriceProductsInBasket () {
      return this.getAllPriceProductsInBasket
    },
    productTitle () {
      return window.history.state?.title
    },
    productPrice () {
      return window.history.state?.price
    },
    productImg () {
      return window.history.state?.img
    },
    isInBasket () {
      return this.getBasketProducts.some(product => product.id === this.productId) // Проверяем, добавлен ли конкретный товар в корзину
    },
    productId () {
      return window.history.state?.id
    }
  },
  methods: {
    ...mapActions(['addProductToBasket', 'removeProductFromBasket']),
    addToBasket () {
      const product = {
        id: this.productId,
        img: this.productImg,
        title: this.productTitle,
        price: this.productPrice
      }
      this.addProductToBasket(product)
    },
    removeFromBasket () {
      this.removeProductFromBasket(this.productId)
    }
  }
}
</script>

<style lang="scss">
.content_product{
  display: flex;
  flex-direction: column;
  background-image: url('../assets/img/background_product.png');
  background-size: cover;
  background-position: center;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);

  .header{
    position: fixed;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px 200px;
    z-index: 20;

    &_shopping{
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 20px;

      &_text{
        font-weight: 500;
        font-size: 17px;
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

  .product{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 124px;
    padding: 80px 200px;

    &_img{
      height: 500px;
      width: 500px;
      margin-right: 150px;
    }

    &_description{
      display: flex;
      flex-direction: column;
      width: 700px;
      gap: 20px;

      .title{
        font-weight: 500;
        font-size: 40px;
        color: #D58C51;
      }

      .description{
        font-weight: 400;
        font-size: 16px;
        color: #ffffff;
        line-height: 26px;
      }

      .countBt{
        display: flex;
        flex-direction: row;
        align-items: center;

        &_count{
          font-weight: 500;
          font-size: 23px;
          color: #ffffff;
          margin-right: 135px;
        }

        &_bt{
          display: flex;
          align-items: center;
          justify-content: center;
          width: 200px;
          height: 42px;
          background-color: #D58C51;
          color: #131313;
          font-weight: 400;
          font-size: 14px;
          cursor: pointer;

          &:hover{
            border: solid 1px #D58C51;
            color: #D58C51;
            background: transparent;
            cursor: pointer;
          }
        }

        &_add{
          display: flex;
          align-items: center;
          justify-content: center;
          width: 200px;
          height: 42px;
          font-weight: 400;
          font-size: 14px;
          background-color: #3a3a3a;
          cursor: pointer;
          color: #bdbdbd;
        }
      }
    }
  }

  @media (max-width: 1600px) {

    .product{
      display: flex;
      flex-direction: column;

      &_img{
        margin-right: 0;
        margin-bottom: 50px;
      }

      &_description{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 900px;
        gap: 20px;

        .title{
          text-align: center;
        }

        .description{
          text-align: center;
        }
      }
    }
  }
}

@media (max-width: 1600px) {
  .content_product{
    background-size: cover;
    background-position: center;
    height: 1200px;
  }
}
</style>
