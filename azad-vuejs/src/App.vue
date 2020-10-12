<template>
  <div id="app">
    <Header/>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <app-hello msg="Welcome to Your Vue.js App"/> -->
    <button @click="ComponentToRender='About'">About</button>
    <button @click="ComponentToRender='Contact'">Contact</button>
    <keep-alive>
      <component :is="ComponentToRender"></component>
    </keep-alive>    
    <Footer/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import Header from './components/Header.vue';
import Contact from './components/Contact.vue';
import About from './components/About.vue';
// import Footer from './components/Footer.vue';

export default {
  // name: 'App',
  data(){
    return {
      ComponentToRender: 'Contact'
    }
  },
  components: {
  //  'app-hello': HelloWorld,
   Header,
   Contact,
   About,
  //  Footer
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
  color: red;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
ul {
  list-style: none;
}
</style>