<template>
  <div class="big-wrapper">
    <div>
      <h4>Homes</h4>
      <div class="" v-for="post in posts" :key="post.id">
        {{post.title.rendered}}
        <div class="" v-html="post.excerpt.rendered"></div>
        <nuxt-link :to="{name:'blog-slug',params:{slug:post.slug, id:post.id}}">Read more</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  fetch({store}){
    return axios.get('http://localhost/news/wp-json/wp/v2/posts').then((res)=>{
      store.commit('frontPagePosts',res.data)
    }).catch((error)=>{
      console.log(error)
    })
  },
  computed:{
    posts(){
      return this.$store.state.posts
    }
  }
}
</script>

<style lang="scss">
.big-wrapper {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h4 {
    color: blue;
  }
}

.azad-title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
