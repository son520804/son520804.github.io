
<template>
  <div>
    <section class="wrapper">
      <h2>Featured Items</h2>
      <ul class="featured-items">
        <li v-for="product in products" :key="product.id" class="featured-items__item">
          <img class="product-image" :src="imagePath(product)" alt="">
          <p class="product-title">{{ product.name }}</p>
          <p><em>${{ product.price }}</em></p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'home',
  computed: {
    products: function() {
      return this.$store.state.products
    }
  },
  methods: {
    imagePath(product) {
      return require(`../assets/img/products/${product.images[0]}`);
    }
  }
};
</script>

<style lang="scss">
.wrapper {
  max-width: 800px;
  margin: 0 auto;
  @media only screen and (max-width: 832px) {
    max-width: 100%;
    padding: 1rem;
    text-align: center;
  }
}
.featured-items {
  padding-left: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 832px) {
    flex-direction: column;
  }
}
.featured-items__item {
  width: 33%;
  text-align: center;
  @media only screen and (max-width: 832px) {
    width: 100%;
  }
}
.product-image {
  max-height: 200px;
}
.product-title {
  font-weight: bold;
}
</style>
