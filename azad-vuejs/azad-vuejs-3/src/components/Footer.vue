<template>
  <footer class="azad-footer">
    <div class="">
      <div class="">
        <div v-for="(blog,index) in blogs" :key="index">
          <h2>{{blog.title}}</h2>
          <p>{{blog.body}}</p>
        </div>
      </div>
    </div>
    <div class="footer-top">
      <div class="">
      <h1>Logo</h1>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </div>
    <div class="">
      <h1>Logo</h1>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </div>
    <div class="">
      <h1>Logo</h1>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </div>
    <div class="">
      <h1>Logo</h1>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Contact</a></li>
      </ul>
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
      blogs: [

      ]
    }
  },
  created(){
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then((data)=>{
      // console.log(data);
      this.blogs = data.body.slice(0,10)
    })
  }
}
</script>

<style>
footer {
  margin-top: auto;  
}
h2 {
  color: red;
}
.footer-top {
  background: #e3e3e3;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
  padding: 2rem 0;
}
.copyright {
  background: black;
  padding: 2rem 0;  
}
</style>