<template>
  <div id="app">
    <Header/>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <app-hello msg="Welcome to Your Vue.js App"/> -->
    <Footer/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
  //  'app-hello': HelloWorld,
   Header,
   Footer
   }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
ul {
  list-style: none;
}
</style>