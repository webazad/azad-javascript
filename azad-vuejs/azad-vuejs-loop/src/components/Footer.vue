<template>
  <footer class="azad-footer">
    <!-- <div class="">
      <div class="">
        <div v-for="(blog,index) in blogs" :key="index">
          <h2>{{blog.title}}</h2>
          <p>{{blog.body}}</p>
        </div>
      </div>
    </div> -->
    <div class="footer-top">
    <div class="azad-container">
    <div class="footer-top-inner">
      <div class="widget">
      <h2>Talk to us in this links</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
    <div class="widget">
      <h2>Talk to us in this links</h2>
      <ul>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </div>
    <div class="widget">
      <h2>Talk to us in this links</h2>
      <ul>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </div>
    <div class="widget">
      <h2>Talk to us in this links</h2>
      <ul>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Services</router-link></li>
        <li><router-link to="/about">Blog</router-link></li>
        <li><router-link to="/contact">Cart</router-link></li>
        <li><router-link to="/about">TOS</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </div>
    </div>
    </div>
    </div>
    <div class="copyright">
      <p>All Rights Reserved By Azad 2020</p>
    </div>
  </footer>
</template>

<script>

export default {
  data(){
    return {
      // blogs: [

      // ]
    }
  },
  created(){
    // this.$http.get('https://jsonplaceholder.typicode.com/posts').then((data)=>{
      // console.log(data);
      // this.blogs = data.body.slice(0,10)
    // })
  }
}
</script>

<style lang="scss">
.azad-footer {
  margin-top: auto;
  border-top: 1px solid black;

  .footer-top {
    background: #e3e3e3;

    .footer-top-inner {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 1rem;
      padding: 3rem 0;

      .widget {
        text-align: left;

        h2 {
          color: black;
          font-size: 1rem;
          text-transform: capitalize;
          margin-bottom: 1rem;
        }
      }
    }
  }

  .copyright {
    background: black;
    padding: 1rem 0;  
  }
}

</style>