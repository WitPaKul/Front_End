<template>
  <navbar></navbar>
  <addproducts v-if="addProductFlag" @handleViewProductsEmit="handleViewProducts"></addproducts>
  <product-items v-if="viewProductsFlag" @handleAddProductEmit="handleAddProduct"></product-items>
  <footerbar></footerbar>
</template>

<script>
import productItems from "../components/productItems.vue";
import addproducts from "../components/addproducts.vue";

export default {
  components: {
    productItems,
    addproducts
  },
  data() {
    return {
      viewProductsFlag: true,
      addProductFlag: false,
    }
  },
  methods: {
    handleViewProducts(){
      console.log('handleAddProduct parent');
      this.viewProductsFlag = true;
      this.addProductFlag = false;
    },
    handleAddProduct(){
      console.log('handleAddProduct parent');
      this.viewProductsFlag = false;
      this.addProductFlag = true;
    }
  }
};
</script>