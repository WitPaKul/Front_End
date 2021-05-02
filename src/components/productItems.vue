<template>
    <section class="text-black body-font px-20">
        <div class="h-12 md:items-center">
            <div class="p-5 pl-20 text-purple-dark md:float-left flex">
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
            <div class="p-5 md:float-right pr-16">
                <input type="text" id="search" v-model="searchFilterText" name="search" class="bg-blue-light rounded md:px-16 md:py-2 border-transparent focus:outline-none">
            </div>
        </div>
        <div class="container px-5 py-12 mx-auto">
            <div id="products" class="flex flex-wrap -m-4">
                <product-item v-for="product in filterSearch()" :key="product.product_code" :product="product" :brand-name="product.product_brand.brand_name" :product-name="product.product_name" :product-price="product.product_price" @handleShowProductEmit="handleShowProduct"></product-item>
            </div>
        </div>
    </section>
</template>

<script>
import productItem from './productItem.vue'

const baseURL = "http://localhost:5000"

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
        refreshProducts() {
            return fetch(baseURL + "/all")
                .then(response => response.json())
                .then(data => {
                    this.products = data
                })
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
                return splitTexts.some(splitText => product.productName.toLowerCase().includes(splitText.toLowerCase()))
            });
        },
    },
    mounted() {
        this.refreshProducts();
    }
}
</script>

<style scoped>
@import 'https://fonts.googleapis.com/css?family=Mitr';
    h1,h2,h3,section {
        font-family: 'Mitr', sans-serif;
    }   

</style>