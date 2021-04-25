<template>
    <div class="lg:w-1/4 md:w-1/4 p-5 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
        <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260">
        </a>
        <div class="mt-4">
        <h3 class="text-black text-sm tracking-widest title-font mb-1 text-left">{{brandName}}</h3>
        <h2 class="text-black title-font text-lg font-medium text-left">{{productName}}</h2>
        <p class="text-xl font-medium text-purple-dark text-right">฿{{productPrice}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'productItem',
    props:{
        brandName: String,
        productName: String,
        productPrice: Number
    }
}
</script>

<style scoped>
@import 'https://fonts.googleapis.com/css?family=Mitr';
    h1,h2,h3, p {
        font-family: 'Mitr', sans-serif;
    }   

</style>
