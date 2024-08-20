<template>
  <div class="content_main">
    <div class="content_main_cards">
      <CardProduct
        v-for="product in products"
        :key="product.id"
        :productId="product.id"
        :imageSrc="product.img"
        :title="product.title"
        :subtitle="product.subtitle"
        :price="product.price"
        :isActiveSubtitle="true"
        :isInBasket="isInBasket(product.id)"
        @card-click="goToProductPage(product)"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CardProduct from '@/components/elements/CardProduct'

export default {
  name: 'MainBlock',
  components: {
    CardProduct
  },
  computed: {
    ...mapGetters(['getProducts', 'getBasketProducts']),
    products () {
      return this.getProducts
    },
    isInBasket () {
      return (productId) => this.getBasketProducts.some(product => product.id === productId)
    }
  },
  created () {
    const savedState = JSON.parse(localStorage.getItem('vuex-state'))
    if (savedState) {
      this.$store.replaceState(savedState)
      console.log(this.products)  // Проверьте, содержатся ли здесь все 8 продуктов
    }
  },
  methods: {
    goToProductPage (product) {
      this.$router.push({
        name: 'ProductPage',
        params: { id: product.id },
        state: { title: product.title, price: product.price, img: product.img }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.content_main{
  margin-top: 134px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 35px;
  padding: 40px 200px;

  &_cards{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px
  }

  @media (max-width: 1700px) {
    .content_main {
      padding: 40px 70px;
    }
  }
}
</style>
