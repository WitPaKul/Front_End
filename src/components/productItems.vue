<template>
    <section class="text-black body-font px-20">
        <div class="md:h-32 lg:h-16 md:items-center">
            <div class="p-5 lg:pl-20 text-purple-dark lg:float-left flex">
                <button type='button' @click="handleViewProducts" class="font-medium text-xl text-purple-dark border-transparent focus:outline-none">
                    View Products
                </button>
                <div class="px-7 text-gray-light font-bold">
                    |
                </div>
                <button type='button' @click="handleAddProduct" class="font-medium text-xl text-purple-dark border-transparent focus:outline-none">
                    Add Product
                </button>
            </div>
            <div class="p-5 lg:float-right lg:pr-16">
                <input type="text" id="search" v-model="searchFilterText" name="search" class="h-8 bg-blue-light rounded px-8 py-2 border-transparent focus:outline-none">
            </div>
        </div>
        <div class="container px-5 py-12 mx-auto md:w-auto">
            <div id="products" class="flex flex-wrap -m-4">
                <product-item v-for="product in filterSearch()" :key="product.product_code" :product="product" :brand-name="product.product_brand.brand_name" :product-name="product.product_name" :product-price="product.product_price" @handleShowProductEmit="handleShowProduct"></product-item>
            </div>
        </div>
    </section>
</template>

<script>
const axios = require("axios");
import productItem from './productItem.vue'


export default {
    name: 'productItems',
    data() {
        return {
            products: [],
            searchFilterText: '',
        }
    },
    components: {
        productItem
    },
    Props:{
        msg: String
    },
    methods: {
        async refreshProducts(baseURL) {
            var res = await axios.get(baseURL + "/all");
            this.products = res.data;
            return res.data;
        },
        handleAddProduct() {
            this.$emit("handleAddProductEmit");
        },
        handleShowProduct(productCode) {
            this.$emit("handleShowProductEmit", productCode);
        },
        filterSearch() {
            var splitTexts = this.searchFilterText.split(" ");
            splitTexts = splitTexts.filter(splitText => {return splitText !== ""});
            if (this.searchFilterText === "" || splitTexts.length === 0) {
                return this.products
            }

            return this.products.filter(product => {
                return splitTexts.some(splitText => product.product_name.toLowerCase().includes(splitText.toLowerCase()))
            });
        },
    },
    mounted() {
        this.refreshProducts(this.$baseURL);
    }
}
</script>

<style scoped>
@import 'https://fonts.googleapis.com/css?family=Mitr';
    h1,h2,h3,section {
        font-family: 'Mitr', sans-serif;
    }   

</style>