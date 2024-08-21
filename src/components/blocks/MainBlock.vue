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
    // Попытка загрузки сохраненного состояния из localStorage
    const savedState = localStorage.getItem('vuex-state')
    if (savedState) {
      try {
        const parsedState = JSON.parse(savedState)
        this.$store.replaceState(Object.assign({}, this.$store.state, parsedState))
        console.log('Vuex state restored:', parsedState)
      } catch (error) {
        console.error('Failed to parse Vuex state from localStorage:', error)
      }
    }

    // Проверка количества продуктов после восстановления состояния
    console.log('Products after state restoration:', this.products)
  },
  methods: {
    goToProductPage (product) {
      this.$router.push({
        name: 'ProductPage',
        params: { id: product.id },
        state: { title: product.title, price: product.price, img: product.img }
      })
    }
  },
  beforeUnmount () {
    // Сохранение актуального состояния Vuex в localStorage перед выгрузкой страницы
    const stateToSave = this.$store.state
    localStorage.setItem('vuex-state', JSON.stringify(stateToSave))
    console.log('Vuex state saved:', stateToSave)
  }
}
</script>

<style lang="scss" scoped>
.content_main{
  margin-top: 134px;
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
