<template>

<section class="text-gray-900 body-font overflow-hidden px-20"> 
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
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap"> 
      <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"  :src="image || 'https://dummyimage.com/800x800'">
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <!--BRAND -->
        <h2 class="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>   
            <h2 v-if="errors.indexOf('NoBrandName') !== -1"  class="text-sm title-font text-red-600" >* Please Enter Brand Name</h2>
         <div class="flex mb-4">
        <input v-model="collectdata.brandname" type="text" name="product-name" id="product-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border border-gray-400 rounded-md">
        </div>
   <!-- Manufacturer Date -->
  
        <h2 class="text-sm title-font text-gray-500 tracking-widest">Manufacturer Date</h2>   
       <h2 v-if="errors.indexOf('NoDate') !== -1" class="text-sm title-font text-red-600 ">* Please Enter Date</h2>
    
      <div class="flex mb-4">
      <input v-model="collectdata.date" type="date" name="manufacturer-date" id="manufacturer-date" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border border-gray-400 rounded-md">
      </div>
      <!-- Description -->
    <div class="flex ">
        <h2  class="text-sm title-font text-gray-500 tracking-widest">Description</h2>
             <h2 v-if="errors.indexOf('Description') !== -1" class="text-sm title-font pl-4 text-red-600">* Please Enter Description</h2>         
             </div>
          <div class="flex mt-4 ">    
            <textarea v-model="collectdata.description" class="w-full  focus:ring-indigo-500 focus:border-gray-900 block  h-32 text-base outline-none text-gray-700 py-1 px-3 shadow-sm border border-gray-400 rounded-md"></textarea>
     </div>
     
       <!--Color  -->
        <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          <div class="flex">
            <h2 class="mr-3 text-sm title-font text-gray-500 tracking-widest">Color</h2>
            <button  class="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
            <button class="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
            <button class="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
            <button  class="border-2 border-gray-300 ml-1 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none"> </button>        
          </div>
        </div>
        <!-- Price -->
        <div class="flex ">          
        <h2 class="text-sm title-font text-gray-500 tracking-widest">Price</h2> 
        <input v-model="collectdata.price" type="text" name="product-name" id="product-name" class="ml-4  shadow-sm border border-gray-400 rounded-md">
      <h2 v-if="errors.indexOf('Noprice') !== -1" class="text-sm title-font text-red-600 pl-4 ">* Please Enter Price</h2>         
     </div>
     <!-- Photo -->
      <div class="flex mt-6">
        <input type="file" id="imageFile"  @change="uploadImage($event)" multiple accept=".jpg, .jpeg, .png" >  
     </div>
      <h2 v-if="errors.indexOf('img') !== -1"
          class="text-sm title-font text-red-600 pr-32">* Please Select Photo</h2>
          <!--ADD  Cancel-->
      <div class="flex mt-6">
          <button class="flex ml-auto text-white  bg-blue border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 rounded" @click="AddForm" >Add</button>
        <button class=" flex-initial text-white ml-4  bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Cancel</button>
        </div>
      </div>
    </div>
  </div>
     

</section>
</template>

<script>
export default {
  name: "addproducts",

data() {
        return {
          errors: [],
            image:""   ,  
           collectdata: {
                img : null,
                brandname: null,
                date: null,
                description : null,
                price: null,
            }, 

        }
    },

  methods: {
    handleViewProducts() {
      console.log("handleViewProducts");
      this.$emit("handleViewProductsEmit");
    },

  uploadImage(event){
            var input = event.target
            this.collectdata.img  = input.files[0].name;
            console.log(this.collectdata.img)
            if(input.files && input.files[0]){
                var reader = new FileReader();
                reader.onload = (e) => { this.image = e.target.result; } 
                reader.readAsDataURL(input.files[0])
            }        
        },  
        AddForm() {
            if (!this.isEdit) {
                this.errordata();
                if (this.errors.length > 0) {
                    return;
                }
            }
        },
  
        errordata() {          
            this.errors = [];

            if(this.collectdata.img == null){
                this.errors.push("img")
            }
             if(this.collectdata.brandname == null){
                this.errors.push("NoBrandName")
            }
               if(this.collectdata.date == null){
                this.errors.push("NoDate")
            }
             if(this.collectdata.description == null){
                this.errors.push("Description")
            }
             if(this.collectdata.price == null){
                this.errors.push("Noprice")
            }
        },
  },
};
</script>

<style scoped>
@import "https://fonts.googleapis.com/css?family=Mitr";
h1,h2,h3,section {
  font-family: "Mitr", sans-serif;
}
</style>