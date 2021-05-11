<template>   
<div class="bg-purple-light">
    <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        
                <div class="flex items-center flex-shrink-0 text-white mr-6">
                    <img
                    class="w-8 h-8 object-cover object-center rounded"
                    src="@/assets/chicken.png"
                    />
                    <router-link to="/" class="title">
                        <p class="font-semibold text-xl text-black">Witpakul Shop</p>
                    </router-link>
                </div>
        <div class="block lg:hidden">
            <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white" @click="handle_collapse">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
        </div>
        <div :class="{'block': showFullNavbarFlag, 'hidden': !showFullNavbarFlag}" class="w-full flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-sm lg:flex lg:justify-center lg:flex-grow">
                <div class="flex items-center flex-shrink-0 ">
                    <router-link to="/about" class="text-purple-dark menu-option">
                        <button class="font-medium text-xl  block my-2 lg:inline-block lg:my-0 text-teal-200 hover:text-white mx-4">
                            <p>About</p>
                        </button>
                    </router-link> 
                </div>
                <div class="flex items-center flex-shrink-0">
                    <router-link to="/products" class="text-purple-dark menu-option">
                        <button class="font-medium text-xl block my-2 lg:inline-block lg:my-0 text-teal-200 hover:text-white mx-4">
                            <p>Products</p>
                        </button>
                    </router-link> 
                </div>
                <div class="flex items-center flex-shrink-0">
                    <router-link to="/team" class="text-purple-dark menu-option">
                        <button class="font-medium text-xl block my-2 lg:inline-block lg:my-0 text-teal-200 hover:text-white mx-4">
                            <p>Team</p>
                        </button>
                    </router-link>
                </div>
            </div>
        </div>
    </nav>
</div>
</template>

<script>
export default {
    name: 'navbar',
    props: {
        msg: String
    },
    data() {
        return {
            showFullNavbarFlag: true
        };
    },
    methods: {
        handle_collapse() {
            this.showFullNavbarFlag = !this.showFullNavbarFlag;
        }
    }
}
</script>

<style scoped>
@import 'https://fonts.googleapis.com/css?family=Mitr';
h1,h2,h3, p{
    font-family: 'Mitr', sans-serif;
}
.menu-option {
    border-radius: 25px;
    border: 4px solid #00000000;
}
.router-link-active {
    color: #FFFFFF;
    background-color: #1AC6D4;
    border-radius: 25px;
    /* border: 4px solid #1AC6D4; */
}
.title {
    background-color: #1AC6D400;
}

</style>
