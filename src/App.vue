<template>
  <div id="view">
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@import 'https://fonts.googleapis.com/css?family=Mitr';
h1,h2,h3{
    font-family: 'Mitr', sans-serif;
}

/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
} */

#nav li a p {
  border-radius: 50px;
  padding-left: 10px;
  padding-right: 10px;
}
#nav li a.router-link-exact-active p {
  color: #FFFFFF;
  background-color: #1AC6D4;
}
</style>
