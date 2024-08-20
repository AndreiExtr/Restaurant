// import { createStore } from 'vuex'

// // Функция для сохранения состояния в localStorage
// const saveState = (state) => {
//   try {
//     const serializedState = JSON.stringify(state)
//     localStorage.setItem('vuex-state', serializedState)
//   } catch (err) {
//     console.error('Could not save state', err)
//   }
// }

// // Функция для загрузки состояния из localStorage
// const loadState = () => {
//   try {
//     const serializedState = localStorage.getItem('vuex-state')
//     if (serializedState === null) return undefined
//     return JSON.parse(serializedState)
//   } catch (err) {
//     console.error('Could not load state', err)
//     return undefined
//   }
// }

// export default createStore({
//   state: loadState() || {
//     countProductsInBasket: 0,
//     allPriceProductsInBasket: 0,
//     products: [
//       { id: 1, img: '1.png', title: 'Устрицы по рокфеллеровски', subtitle: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры', price: 2700 },
//       { id: 2, img: '2.png', title: 'Свиные ребрышки на гриле с зеленью', subtitle: 'Не следует, однако забывать, что реализация намеченных плановых', price: 1600 },
//       { id: 3, img: '4.png', title: 'Креветки по-королевски в лимонном соке', subtitle: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу', price: 1820 },
//       { id: 4, img: '5.png', title: 'Устрицы по рокфеллеровски', subtitle: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры', price: 2700 },
//       { id: 5, img: '2.png', title: 'Свиные ребрышки на гриле с зеленью', subtitle: 'Не следует, однако забывать, что реализация намеченных плановых', price: 1600 },
//       { id: 6, img: '4.png', title: 'Креветки по-королевски в лимонном соке', subtitle: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу', price: 1820 },
//       { id: 7, img: '2.png', title: 'Свиные ребрышки на гриле с зеленью', subtitle: 'Не следует, однако забывать, что реализация намеченных плановых', price: 1600 },
//       { id: 8, img: '5.png', title: 'Устрицы по рокфеллеровски', subtitle: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры', price: 2700 }
//     ],
//     basketProducts: []
//   },
//   getters: {
//     getCountProductsInBasket: state => state.countProductsInBasket,
//     getAllPriceProductsInBasket: state => state.allPriceProductsInBasket,
//     getProducts: state => state.products,
//     getBasketProducts: state => state.basketProducts
//   },
//   mutations: {
//     incrementProductCount (state) {
//       state.countProductsInBasket++
//       saveState(state)
//     },
//     addProductToBasket (state, product) {
//       // Проверка на наличие товара в корзине
//       const existingProduct = state.basketProducts.find(p => p.id === product.id)
//       if (!existingProduct) {
//         state.basketProducts.push(product)
//         state.countProductsInBasket++
//         state.allPriceProductsInBasket += product.price
//         saveState(state)
//       }
//     },
//     removeProductFromBasket (state, productId) {
//       const productIndex = state.basketProducts.findIndex(product => product.id === productId)
//       if (productIndex !== -1) {
//         const product = state.basketProducts[productIndex]
//         state.basketProducts.splice(productIndex, 1)
//         state.countProductsInBasket--
//         state.allPriceProductsInBasket -= product.price
//         saveState(state)
//       }
//     },
//     CLEAR_BASKET (state) {
//       state.basketProducts = []
//       state.countProductsInBasket = 0
//       state.allPriceProductsInBasket = 0
//       saveState(state)
//     }
//   },
//   actions: {
//     addProductToBasket ({ commit }, product) {
//       commit('addProductToBasket', product)
//     },
//     removeProductFromBasket ({ commit }, productId) {
//       commit('removeProductFromBasket', productId)
//     },
//     clearBasket ({ commit }) {
//       commit('CLEAR_BASKET')
//     }
//   },
//   modules: {}
// })
import { createStore } from 'vuex'

// Функция для сохранения состояния в localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('vuex-state', serializedState)
  } catch (err) {
    console.error('Could not save state', err)
  }
}

// Функция для загрузки состояния из localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('vuex-state')
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch (err) {
    console.error('Could not load state', err)
    return undefined
  }
}

export default createStore({
  state: loadState() || {
    countProductsInBasket: 0,
    allPriceProductsInBasket: 0,
    products: [
      { id: 1, img: '1.png', title: 'Устрицы по рокфеллеровски', subtitle: 'Значимость этих проблем настолько очевидна...', price: 2700 },
      { id: 2, img: '2.png', title: 'Свиные ребрышки на гриле с зеленью', subtitle: 'Не следует, однако забывать...', price: 1600 },
      { id: 3, img: '4.png', title: 'Креветки по-королевски в лимонном соке', subtitle: 'Значимость этих проблем настолько очевидна...', price: 1820 },
      { id: 4, img: '5.png', title: 'Устрицы по рокфеллеровски', subtitle: 'Значимость этих проблем настолько очевидна...', price: 2700 },
      { id: 5, img: '2.png', title: 'Свиные ребрышки на гриле с зеленью', subtitle: 'Не следует, однако забывать...', price: 1600 },
      { id: 6, img: '4.png', title: 'Креветки по-королевски в лимонном соке', subtitle: 'Значимость этих проблем настолько очевидна...', price: 1820 },
      { id: 7, img: '2.png', title: 'Свиные ребрышки на гриле с зеленью', subtitle: 'Не следует, однако забывать...', price: 1600 },
      { id: 8, img: '5.png', title: 'Устрицы по рокфеллеровски', subtitle: 'Значимость этих проблем настолько очевидна...', price: 2700 }
    ],
    basketProducts: []
  },
  getters: {
    getCountProductsInBasket: state => state.countProductsInBasket,
    getAllPriceProductsInBasket: state => state.allPriceProductsInBasket,
    getProducts: state => state.products,
    getBasketProducts: state => state.basketProducts
  },
  mutations: {
    incrementProductCount (state) {
      state.countProductsInBasket++
      saveState(state)
    },
    addProductToBasket (state, product) {
      const existingProduct = state.basketProducts.find(p => p.id === product.id)
      if (!existingProduct) {
        state.basketProducts.push(product)
        state.countProductsInBasket++
        state.allPriceProductsInBasket += product.price
        saveState(state)
      }
    },
    removeProductFromBasket (state, productId) {
      const productIndex = state.basketProducts.findIndex(product => product.id === productId)
      if (productIndex !== -1) {
        const product = state.basketProducts[productIndex]
        state.basketProducts.splice(productIndex, 1)
        state.countProductsInBasket--
        state.allPriceProductsInBasket -= product.price
        saveState(state)
      }
    },
    CLEAR_BASKET (state) {
      state.basketProducts = []
      state.countProductsInBasket = 0
      state.allPriceProductsInBasket = 0
      saveState(state)
    }
  },
  actions: {
    addProductToBasket ({ commit }, product) {
      commit('addProductToBasket', product)
    },
    removeProductFromBasket ({ commit }, productId) {
      commit('removeProductFromBasket', productId)
    },
    clearBasket ({ commit }) {
      commit('CLEAR_BASKET')
    }
  },
  modules: {}
})
