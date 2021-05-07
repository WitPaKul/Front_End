<template>

<section class="text-gray-900  body-font overflow-hidden px-20">
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
  </div>
  <div class="container py-12 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" v-bind:src="'http://localhost:5000' + product.product_image">
      
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
         <div class="flex ">
        <h2 class="text-sm title-font text-gray-500 tracking-widest">{{product.product_brand.brand_name}}</h2>
           
             <!--  -->
          <button class="flex ml-auto py-2 px-6 focus:outline-none rounded" @click="handleDelete">
           <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="40" height="40" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve"><g><path xmlns="http://www.w3.org/2000/svg" d="m416.875 114.441406-11.304688-33.886718c-4.304687-12.90625-16.339843-21.578126-29.941406-21.578126h-95.011718v-30.933593c0-15.460938-12.570313-28.042969-28.027344-28.042969h-87.007813c-15.453125 0-28.027343 12.582031-28.027343 28.042969v30.933593h-95.007813c-13.605469 0-25.640625 8.671876-29.945313 21.578126l-11.304687 33.886718c-2.574219 7.714844-1.2695312 16.257813 3.484375 22.855469 4.753906 6.597656 12.445312 10.539063 20.578125 10.539063h11.816406l26.007813 321.605468c1.933594 23.863282 22.183594 42.558594 46.109375 42.558594h204.863281c23.921875 0 44.175781-18.695312 46.105469-42.5625l26.007812-321.601562h6.542969c8.132812 0 15.824219-3.941407 20.578125-10.535157 4.753906-6.597656 6.058594-15.144531 3.484375-22.859375zm-249.320312-84.441406h83.0625v28.976562h-83.0625zm162.804687 437.019531c-.679687 8.402344-7.796875 14.980469-16.203125 14.980469h-204.863281c-8.40625 0-15.523438-6.578125-16.203125-14.980469l-25.816406-319.183593h288.898437zm-298.566406-349.183593 9.269531-27.789063c.210938-.640625.808594-1.070313 1.484375-1.070313h333.082031c.675782 0 1.269532.429688 1.484375 1.070313l9.269531 27.789063zm0 0" fill="#1fc9d8" data-original="#000000" style=""/><path xmlns="http://www.w3.org/2000/svg" d="m282.515625 465.957031c.265625.015625.527344.019531.792969.019531 7.925781 0 14.550781-6.210937 14.964844-14.21875l14.085937-270.398437c.429687-8.273437-5.929687-15.332031-14.199219-15.761719-8.292968-.441406-15.328125 5.925782-15.761718 14.199219l-14.082032 270.398437c-.429687 8.273438 5.925782 15.332032 14.199219 15.761719zm0 0" fill="#1fc9d8" data-original="#000000" style=""/><path xmlns="http://www.w3.org/2000/svg" d="m120.566406 451.792969c.4375 7.996093 7.054688 14.183593 14.964844 14.183593.273438 0 .554688-.007812.832031-.023437 8.269531-.449219 14.609375-7.519531 14.160157-15.792969l-14.753907-270.398437c-.449219-8.273438-7.519531-14.613281-15.792969-14.160157-8.269531.449219-14.609374 7.519532-14.160156 15.792969zm0 0" fill="#1fc9d8" data-original="#000000" style=""/><path xmlns="http://www.w3.org/2000/svg" d="m209.253906 465.976562c8.285156 0 15-6.714843 15-15v-270.398437c0-8.285156-6.714844-15-15-15s-15 6.714844-15 15v270.398437c0 8.285157 6.714844 15 15 15zm0 0" fill="#1fc9d8" data-original="#000000" style=""/></g></svg>
         </button>
          
             </div>
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1 text-left">{{product.product_name}}</h1>
      <div class="flex mb-4 mt-4">
         <!-- Manufacturer Date -->
        <h2 class="text-sm title-font text-gray-500 tracking-widest">Manufacturer Date {{product.product_manufactured_date}}</h2>     
      <!-- <input type="date" name="manufacturer-date" id="manufacturer-date" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border border-gray-400 rounded-md"> -->
      </div>
        <p class="leading-relaxed text-left">{{product.product_description}}</p>
        <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          <div class="flex">
            <span class="mr-3">Color</span>
            <button v-if="product.product_colors.filter(color => {return color.color_name=='RED'}).length" @click="handleColor('red')" :class="{'border-green-500': color=='red'}" class="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
            <button v-if="product.product_colors.filter(color => {return color.color_name=='BLUE'}).length"  @click="handleColor('blue')" :class="{'border-green-500': color=='blue'}" class="border-2 border-gray-300 ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none"></button>
            <button v-if="product.product_colors.filter(color => {return color.color_name=='GREEN'}).length"  @click="handleColor('green')" :class="{'border-green-500': color=='green'}" class="border-2 border-gray-300 ml-1 bg-green-500 rounded-full w-6 h-6 focus:outline-none"></button>
            <button v-if="product.product_colors.filter(color => {return color.color_name=='YELLOW'}).length"  @click="handleColor('yellow')" :class="{'border-green-500': color=='yellow'}" class="border-2 border-gray-300 ml-1 bg-yellow-400 rounded-full w-6 h-6 focus:outline-none"></button>
            <button v-if="product.product_colors.filter(color => {return color.color_name=='PURPLE'}).length"  @click="handleColor('purple')" :class="{'border-green-500': color=='purple'}" class="border-2 border-gray-300 ml-1 bg-purple-500 rounded-full w-6 h-6 focus:outline-none"></button>
            <button v-if="product.product_colors.filter(color => {return color.color_name=='WHITE'}).length"  @click="handleColor('white')" :class="{'border-green-500': color=='white'}" class="border-2 border-gray-300 ml-1 bg-white rounded-full w-6 h-6 focus:outline-none"></button>
            <button v-if="product.product_colors.filter(color => {return color.color_name=='PINK'}).length"  @click="handleColor('pink')" :class="{'border-green-500': color=='pink'}" class="border-2 border-gray-300 ml-1 bg-pink-500 rounded-full w-6 h-6 focus:outline-none"></button>
            <button v-if="product.product_colors.filter(color => {return color.color_name=='ORANGE'}).length"  @click="handleColor('orange')" :class="{'border-green-500': color=='orange'}" class="border-2 border-gray-300 ml-1 bg-yellow-600 rounded-full w-6 h-6 focus:outline-none"></button>
            <button v-if="product.product_colors.filter(color => {return color.color_name=='BLACK'}).length"  @click="handleColor('black')" :class="{'border-green-500': color=='black'}" class="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none"></button>
          </div>
        </div>
        <div class="flex ">
          <span class="title-font font-medium text-2xl text-gray-900">$58.00</span>
          <button class="flex ml-auto text-white  bg-blue border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 rounded">Add to cart</button>
        <button class="flex-initial ml-4 text-white  bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600  rounded">Edit</button>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
const axios = require("axios");
const baseURL = "http://localhost:5000"

export default {
  props:{
    product: null
  },
  data() {
    return {
      color: ''
    }
  },
  name: "producttemplate",
  methods: {
    handleViewProducts() {
      this.$emit("handleViewProductsEmit");
    },
    handleAddProduct() {
        this.$emit("handleAddProductEmit");
    },
    handleColor(color) {
      this.color = color
    },
    handleDelete() {
      axios.delete(baseURL + "/delete_product/" + this.product.product_code);
      this.handleViewProducts()
    },
  }
};
</script>

<style scoped>
@import "https://fonts.googleapis.com/css?family=Mitr";
h1,h2,h3,section {
  font-family: "Mitr", sans-serif;
}
</style>