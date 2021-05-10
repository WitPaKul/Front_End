<template>
    <div class="lg:w-1/4 md:w-1/4 p-5 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
        <img alt="ecommerce" class="object-cover object-center w-full h-full block" v-bind:src="'http://localhost:5000/image/get/' + product.product_image">
        </a>
        <div class="mt-4">
        <h3 class="text-black text-sm tracking-widest title-font mb-1 text-left">{{brandName}}</h3>
        
        <button type='button' @click="handleShowProduct" class="font-medium text-xl text-purple-dark border-transparent focus:outline-none">
            <h2 class="text-black title-font text-lg font-medium text-left">{{productName}}</h2>
        </button>
                
        <p class="text-xl font-medium text-purple-dark text-right">฿{{productPrice}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'productItem',
    props:{
        product: {},
        brandName: String,
        productName: String,
        productPrice: Number
    },
    methods: {
        handleShowProduct() {
            this.$emit("handleShowProductEmit", this.product);
        },
    }
}
</script>

<style scoped>
@import 'https://fonts.googleapis.com/css?family=Mitr';
    h1,h2,h3, p {
        font-family: 'Mitr', sans-serif;
    }   

</style>
