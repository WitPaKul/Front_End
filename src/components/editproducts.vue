<template>
  <section class="text-gray-900 body-font overflow-hidden px-20">
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
    </div>
    <div class="container px-5 py-12 mx-auto">
      <div class="lg:w-4/5 mx-auto flex flex-wrap">
        <img
        
          class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
          v-bind:src="image"
        />
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <!-- Brand Name -->
          <h2 class="text-sm title-font text-gray-500 tracking-widest">
            Brand Name
          </h2>
          <h2
            v-if="errors.indexOf('NoBrandName') !== -1"
            class="text-sm title-font text-red-600"
          >
            * Please Enter Brand Name
          </h2>
          <div class="flex mb-4">
            <select v-model="new_product.product_brand.brand_id" id="product-brand" class="border-2">
              <option disabled value="">Please select one</option>
              <option v-for="brand in brand_option" v-bind:value="brand.brand_id" :key="brand.brand_id">{{brand.brand_name}}</option>
            </select>
          </div>
          <!--PRODUCT -->
          <h2 class="text-sm title-font text-gray-500 tracking-widest">
            PRODUCT NAME
          </h2>
          <h2
            v-if="errors.indexOf('NoProductName') !== -1"
            class="text-sm title-font text-red-600"
          >
            * Please Enter Product Name
          </h2>
          <div class="flex mb-4">
            <input
              v-model="new_product.product_name"
              type="text"
              name="product-name"
              id="product-name"
              class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border border-gray-400 rounded-md"
            />
          </div>
          <!-- Manufacturer Date -->

          <h2 class="text-sm title-font text-gray-500 tracking-widest">
            Manufacturer Date
          </h2>
          <h2
            v-if="errors.indexOf('NoDate') !== -1"
            class="text-sm title-font text-red-600"
          >
            * Please Enter Date
          </h2>

          <div class="flex mb-4">
            <input
              v-model="new_product.product_manufactured_date"
              placeholder="dd-mm-yyyy"
              type="date"
              name="manufacturer-date"
              id="manufacturer-date"
              class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border border-gray-400 rounded-md"
            />
          </div>
          <!-- Description -->
          <div class="flex">
            <h2 class="text-sm title-font text-gray-500 tracking-widest">
              Description
            </h2>
            <h2
              v-if="errors.indexOf('Description') !== -1"
              class="text-sm title-font pl-4 text-red-600"
            >
              * Please Enter Description
            </h2>
          </div>
          <div class="flex mt-4">
            <textarea
              v-model="new_product.product_description"
              class="w-full focus:ring-indigo-500 focus:border-gray-900 block h-32 text-base outline-none text-gray-700 py-1 px-3 shadow-sm border border-gray-400 rounded-md"
            ></textarea>
          </div>

          <!--Color  -->
          <div
            class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"
          >
            <div class="flex">
              <span class="mr-3">Color</span>
              <button
                @click="handleColor(1)"
                :class="{
                  'border-green-500': new_product.product_colors.filter(
                    (product_color) => {
                      return product_color.color_id == 1;
                    }
                  ).length,
                }"
                class="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"
              ></button>
              <button
                @click="handleColor(2)"
                :class="{
                  'border-green-500': new_product.product_colors.filter(
                    (product_color) => {
                      return product_color.color_id == 2;
                    }
                  ).length,
                }"
                class="border-2 border-gray-300 ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none"
              ></button>
              <button
                @click="handleColor(3)"
                :class="{
                  'border-green-500': new_product.product_colors.filter(
                    (product_color) => {
                      return product_color.color_id == 3;
                    }
                  ).length,
                }"
                class="border-2 border-gray-300 ml-1 bg-green-500 rounded-full w-6 h-6 focus:outline-none"
              ></button>
              <button
                @click="handleColor(4)"
                :class="{
                  'border-green-500': new_product.product_colors.filter(
                    (product_color) => {
                      return product_color.color_id == 4;
                    }
                  ).length,
                }"
                class="border-2 border-gray-300 ml-1 bg-yellow-400 rounded-full w-6 h-6 focus:outline-none"
              ></button>
              <button
                @click="handleColor(5)"
                :class="{
                  'border-green-500': new_product.product_colors.filter(
                    (product_color) => {
                      return product_color.color_id == 5;
                    }
                  ).length,
                }"
                class="border-2 border-gray-300 ml-1 bg-purple-500 rounded-full w-6 h-6 focus:outline-none"
              ></button>
              <button
                @click="handleColor(6)"
                :class="{
                  'border-green-500': new_product.product_colors.filter(
                    (product_color) => {
                      return product_color.color_id == 6;
                    }
                  ).length,
                }"
                class="border-2 border-gray-300 ml-1 bg-white rounded-full w-6 h-6 focus:outline-none"
              ></button>
              <button
                @click="handleColor(7)"
                :class="{
                  'border-green-500': new_product.product_colors.filter(
                    (product_color) => {
                      return product_color.color_id == 7;
                    }
                  ).length,
                }"
                class="border-2 border-gray-300 ml-1 bg-pink-500 rounded-full w-6 h-6 focus:outline-none"
              ></button>
              <button
                @click="handleColor(8)"
                :class="{
                  'border-green-500': new_product.product_colors.filter(
                    (product_color) => {
                      return product_color.color_id == 8;
                    }
                  ).length,
                }"
                class="border-2 border-gray-300 ml-1 bg-yellow-600 rounded-full w-6 h-6 focus:outline-none"
              ></button>
              <button
                @click="handleColor(9)"
                :class="{
                  'border-green-500': new_product.product_colors.filter(
                    (product_color) => {
                      return product_color.color_id == 9;
                    }
                  ).length,
                }"
                class="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none"
              ></button>
            </div>
          </div>
          <!-- Price -->
          <div class="flex">
            <h2 class="text-sm title-font text-gray-500 tracking-widest">
              Price
            </h2>
            <input
              v-model="new_product.product_price"
              type="text"
              name="product-price"
              id="product-price"
              class="ml-4 shadow-sm border border-gray-400 rounded-md"
            />
            <h2
              v-if="errors.indexOf('Noprice') !== -1"
              class="text-sm title-font text-red-600 pl-4"
            >
              * Please Enter Valid Price
            </h2>
          </div>
          <!-- Photo -->
          <div class="flex mt-6">
            <input
              type="file"
              id="imageFile"
              @change="uploadImage($event)"
              multiple
              accept=".jpg, .jpeg, .png"
            />
          </div>
          <h2
            v-if="errors.indexOf('img') !== -1"
            class="text-sm title-font text-red-600 pr-32"
          >
            * Please Select Photo
          </h2>
          <!--ADD  Cancel-->
          <div class="flex mt-6">
            <button
              class="flex ml-auto text-white bg-blue border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 rounded"
              @click="handle_save"
            >
              Save
            </button>
            <button
              class="flex-initial text-white ml-4 bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
              @click="handle_cancel"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const axios = require("axios");

export default {
  name: "editproducts",
  props:{
    product: null
  },

data() {
  return {
    errors: [],
    image: "",
    image_file: null,  
    old_image: null,
    new_product: {
        product_image : null,
        product_name: null,
        product_manufactured_date: null,
        product_description : null,
        product_price: null,
        product_colors: [],
        product_brand : {brand_id: null},
    },
    brand_option: [
      {brand_id: 1, brand_name: "PRISMA"},
      {brand_id: 2, brand_name: "Tier1Anime"},
      {brand_id: 3, brand_name: "Beonit"},
      {brand_id: 4, brand_name: "Witpakul"}
    ]
  }
    },

  methods: {
    handleViewProducts() {
      this.$emit("handleViewProductsEmit");
    },
    uploadImage(event) {
            var input = event.target
            this.image_file = input.files[0];
            this.new_product.product_image  = input.files[0].name;
            if(input.files && input.files[0]){
                var reader = new FileReader();
                reader.onload = (e) => { this.image = e.target.result; } 
                reader.readAsDataURL(input.files[0])
            }        
        },  
    async handle_save() {
      if (this.image_file) {
        this.new_product.product_image = this.new_product.product_code + "_" + this.new_product.product_image
      }  
      this.errordata();
            if (this.errors.length > 0) {
                return;
            }
            console.log(this.errors.length)
            
      var self = this    
      const options = {
              headers: {'content-type': 'application/json'}
            };
            await axios.put(self.$baseURL + "/edit_product", JSON.stringify(this.new_product), options)
            .then(response => {
                return response.data
            })
            .then(async function() {
              if (self.image_file) {
                const fileInput = document.querySelector('#imageFile') ;
                const formData  = new FormData();
                 console.log(self.image_file)
                formData.append("file", fileInput.files[0]);
                try {
                  await axios.delete(self.$baseURL + "/image/delete/" + self.old_image);
                }
                catch (e) {
                  console.log(e)
                }
                await axios.post(self.$baseURL + "/image/add/" + self.new_product.product_image, formData)
              }
              else {
                self.new_product.product_image = self.product.product_image
                 console.log( self.new_product.product_image )
                  console.log(self.product.product_image)
              }
              
            });
           
      this.$emit("handleShowProductEmit", this.new_product);
    },  
    handle_cancel() {
      this.$emit("handleViewProductsEmit", this.product);
    },

    errordata() {          
        this.errors = [];

        if(this.new_product.product_image == ""){
            this.errors.push("img")
        }
        if(this.new_product.product_brand.brand_id == ""){
            this.errors.push("NoBrandName")
        }
          if(this.new_product.product_name == ""){
            this.errors.push("NoProductName")
        }
            if(this.new_product.product_manufactured_date == ""){
            this.errors.push("NoDate")
        }
          if(this.new_product.product_description == ""){
            this.errors.push("Description")
        }
          if(this.new_product.product_price == "" || this.new_product.product_price <= 0){
            this.errors.push("Noprice")
        }
    },
        
    handleColor(color_id) {
      if (this.new_product.product_colors.filter(product_color => {return product_color.color_id == color_id}).length) {
        this.new_product.product_colors = this.new_product.product_colors.filter(product_color => {return product_color.color_id !== color_id});
      }
      else {
        this.new_product.product_colors.push({color_id: color_id});
      }
    }
  },
  mounted() {
    this.new_product = this.product;
    this.old_image = this.product.product_image;
    this.image = this.$baseURL + '/image/get/' + this.product.product_image;
  }
};
</script>

<style scoped>
@import "https://fonts.googleapis.com/css?family=Mitr";
h1,
h2,
h3,
section {
  font-family: "Mitr", sans-serif;
}
</style>