<template>
<div class="bg-purple-light">      
        <!-- Box alignment -->
        <nav class="flex items-center h-20">
            <div>
                <router-link to="/">
                    <!-- <img src="" class="header-logo max-h-14" title="Witpakul Shop Official"> -->
                        <p class="font-semibold text-xl text-black px-28">Witpakul Shop</p>
                </router-link>
            </div>
            <div>
                <ul class="flex flex-row pl-10 place-self-center">
                    <!-- Spacing -->
                    <!-- Typography-->
                    <li class="pr-4">
                        <button class="font-medium text-xl text-purple-dark">
                            <router-link to="/about">
                                 <p>About</p>
                            </router-link> 
                        </button>
                    </li>
                    <li class="pr-4">
                        <button class="font-medium text-xl text-purple-dark">
                            <router-link to="/products">
                                <p>Products</p>
                            </router-link> 
                        </button>
                    </li>
                    <li class="pr-4">
                        <button class="font-medium text-xl text-purple-dark">
                            <router-link to="/team">
                                <p>Team</p>
                            </router-link>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    </div>     
</template>

<script>
export default {
    name: 'navbar',
    props:{
        msg: String
    }
}
</script>

<style scoped>
@import 'https://fonts.googleapis.com/css?family=Mitr';
h1,h2,h3, p{
    font-family: 'Mitr', sans-serif;
}
.router-link-active {
    color: #FFFFFF;
}

</style>
