<template>
    <section class="text-black body-font px-20">
        <div class="h-12 md:items-center">
            <div class="p-5 pl-20 text-purple-dark md:float-left flex">
                <button type='button' @click="handleViewProducts" class="font-medium text-xl text-purple-dark">
                    View Products
                </button>
                <div class="px-7 text-gray-light font-bold">
                    |
                </div>
                <button type='button' @click="handleAddProduct" class="font-medium text-xl text-purple-dark">
                    Add Product
                </button>
            </div>
            <div class="p-5 md:float-right pr-16">
                <input type="text" id="search" v-model="search" name="search" class="bg-blue-light rounded md:px-16 md:py-2">
            </div>
        </div>
        <div class="container px-5 py-12 mx-auto">
            <div id="products" class="flex flex-wrap -m-4">
                <product-item v-for="product in products" :key="product.id" :brand-name="product.brandName" :product-name="product.productName" :product-price="product.productPrice"></product-item>
            </div>
        </div>
    </section>
</template>

<script>
import productItem from './productItem.vue'
export default {
    name: 'productItems',
    data() {
        return {
            products: [],
        }
    },
    components: {
        productItem
    },
    Props:{
        msg: String
    },
    methods: {
        getProduct(productIdx) {
            return {
                "brandName": "PRISMA",
                "productName": productIdx + " " + "ShiragaP 1st album Initializing()",
                "productPrice": 390
            };
        },
        getProducts() {
            var products = []
            for (var i = 1; i <= 10; i++) {
                products.push(this.getProduct(i));
            }
            return products
        },
        handleAddProduct() {
            this.$emit("handleAddProductEmit");
        }
    },
    mounted() {
        this.products = this.getProducts()
    }
}
</script>

<style scoped>
@import 'https://fonts.googleapis.com/css?family=Mitr';
    h1,h2,h3,section {
        font-family: 'Mitr', sans-serif;
    }   

</style>