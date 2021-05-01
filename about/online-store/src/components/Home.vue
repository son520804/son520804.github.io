<template>
  <div>
    <h1>Welcome!</h1>
    {{products}}
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed:{
    products: function(){
      return this.$Store.state.products
    }
  }
};
</script>
