<template>

<section class="text-gray-900  body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">    
      <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/800x800">
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <!--BRAND -->
        <h2 class="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>   
         <div class="flex mb-4">
        <input type="text" name="product-name" id="product-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border border-gray-400 rounded-md">
        </div>
   <!-- Manufacturer Date -->
        <h2 class="text-sm title-font text-gray-500 tracking-widest">Manufacturer Date</h2>   
      <div class="flex mb-4">
      
      <input type="date" name="manufacturer-date" id="manufacturer-date" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border border-gray-400 rounded-md">
      </div>
      <!-- Description -->
    <div class="flex ">
        <h2 class="text-sm title-font text-gray-500 tracking-widest">Description</h2>
             </div>
            <textarea id="" name="" class="w-full  focus:ring-indigo-500 focus:border-gray-900 block  h-32 text-base outline-none text-gray-700 py-1 px-3 shadow-sm border border-gray-400 rounded-md"></textarea>
      <!-- Test -->
        <!-- <p class="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan. fdggggggggggggggggggggg. gggggggggggggggggggggggg ggggggggggggggdasssssssssss, ssssssssssssssssssss</p> -->
       
        <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          <div class="flex">
            <h2 class="mr-3 text-sm title-font text-gray-500 tracking-widest">Color</h2>
            <button  class="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
            <button class="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
            <button class="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
            <button  class="border-2 border-gray-300 ml-1 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none"> </button>        
          </div>
        </div>
        <div class="flex ">          
        <h2 class="text-sm title-font text-gray-500 tracking-widest">Price</h2> 
        <input type="text" name="product-name" id="product-name" class="ml-4  shadow-sm border border-gray-400 rounded-md">
     </div>
      <div class="flex mt-6">
        <input type="file" id="product-photo" name="product-photo" accept="image/png, image/jpeg, image/gif">
     </div>
      <div class="flex mt-6">
          <button class="flex ml-auto text-white  bg-blue-400 border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 rounded">Add</button>
        <button class=" flex-initial text-white ml-4  bg-red-400 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: "addproducts",

};
</script>

<style scoped>
@import "https://fonts.googleapis.com/css?family=Mitr";
h1,h2,h3,p {
  font-family: "Mitr", sans-serif;
}
</style>