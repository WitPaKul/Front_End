<template>
  <navbar></navbar>
  <product-items v-if="viewProductsFlag" @handleAddProductEmit="handleAddProduct" @handleShowProductEmit="handleShowProduct"></product-items>
  <addproducts v-if="addProductFlag" @handleViewProductsEmit="handleViewProducts"></addproducts>
  <editproducts v-if="editProductFlag" @handleViewProductsEmit="handleViewProducts" @handleAddProductEmit="handleAddProduct" @handleShowProductEmit="handleShowProduct" :product="product"></editproducts>
  <producttemplate v-if="showProductFlag" @handleViewProductsEmit="handleViewProducts" @handleAddProductEmit="handleAddProduct" @handleEditProductEmit="handleEditProduct" :product="product"></producttemplate>
  <footerbar></footerbar>
</template>

<script>
import productItems from "../components/productItems.vue";
import addproducts from "../components/addproducts.vue";
import producttemplate from "../components/producttemplate.vue";
import Editproducts from '../components/editproducts.vue';

export default {
  components: {
    productItems,
    addproducts,
    producttemplate,
    Editproducts
  },
  data() {
    return {
      viewProductsFlag: true,
      addProductFlag: false,
      editProductFlag: false,
      showProductFlag: false,
      product: null
    }
  },
  methods: {
    handleViewProducts(){
      this.viewProductsFlag = true;
      this.addProductFlag = false;
      this.editProductFlag = false;
      this.showProductFlag = false;
    },
    handleAddProduct(){
      this.viewProductsFlag = false;
      this.addProductFlag = true;
      this.editProductFlag = false;
      this.showProductFlag = false;
    },
    handleEditProduct(product){
      this.product = product;
      this.viewProductsFlag = false;
      this.addProductFlag = false;
      this.editProductFlag = true;
      this.showProductFlag = false;
    },
    handleShowProduct(product){
      this.product = product;
      this.viewProductsFlag = false;
      this.addProductFlag = false;
      this.editProductFlag = false;
      this.showProductFlag = true;
    }
  }
};
</script>