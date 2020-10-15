<template>
  <div id="app">
    <Header/>
          <router-view></router-view>
          <!-- <keep-alive>
            <component :is="ComponentToRender"></component>
          </keep-alive> -->
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  // name: 'App',
  data(){
    return {
      // ComponentToRender: 'Contact'
    }
  },
  components: {
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
  color: black;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.azad-container {
  width: 90%;
  margin: 0 auto;
}
ul {
  list-style: none;
}

</style>