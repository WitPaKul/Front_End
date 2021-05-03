<template>
  <navbar></navbar>
  <addproducts v-if="addProductFlag" @handleViewProductsEmit="handleViewProducts"></addproducts>
  <product-items v-if="viewProductsFlag" @handleAddProductEmit="handleAddProduct" @handleShowProductEmit="handleShowProduct"></product-items>
  <producttemplate v-if="showProductFlag" @handleViewProductsEmit="handleViewProducts" @handleAddProductEmit="handleAddProduct" :product="product"></producttemplate>
  <footerbar></footerbar>
</template>

<script>
import productItems from "../components/productItems.vue";
import addproducts from "../components/addproducts.vue";
import producttemplate from "../components/producttemplate.vue";

export default {
  components: {
    productItems,
    addproducts,
    producttemplate
  },
  data() {
    return {
      viewProductsFlag: true,
      addProductFlag: false,
      showProductFlag: false,
      product: null
    }
  },
  methods: {
    handleViewProducts(){
      this.viewProductsFlag = true;
      this.addProductFlag = false;
      this.showProductFlag = false;
    },
    handleAddProduct(){
      this.viewProductsFlag = false;
      this.addProductFlag = true;
      this.showProductFlag = false;
    },
    handleShowProduct(product){
      this.product = product;
      this.viewProductsFlag = false;
      this.addProductFlag = false;
      this.showProductFlag = true;
    }
  }
};
</script>