<template>
  <div id="app">
    <Header/>

    <div class="main">
      <div class="content">
        <router-view></router-view>
        <!-- <keep-alive>
          <component :is="ComponentToRender"></component>
        </keep-alive> -->
      </div>
      <div class="sidebar">
        <h2>Sidebar</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <ul>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
      </div>
    </div>

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
  color: red;
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
.main {
  background: #e3e3e3;
  padding: 1rem 0;
  display: grid;
  grid-template-columns: 2fr 1fr;
}
.content {
  background: #e3e3e3;
  padding: 1rem 0;
}
.sidebar {
  background: #e3e3e3;
  padding: 1rem 0;
}
</style>